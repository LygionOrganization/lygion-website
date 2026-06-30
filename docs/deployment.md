# lygion.ai 双线路部署

一次 GitHub Actions 工作流会生成并部署两份静态站：

- 境外版本：根路径进入 `/en/`，发布到 GitHub Pages。
- 中国内地版本：根路径进入 `/zh/`，发布到运行 Caddy 的阿里云 ECS。

地域分流由阿里云云解析 DNS 完成。两个产物都保留完整的 `/zh/` 与 `/en/`，
因此语言切换按钮仍然可用。

## 1. 在现有 Caddy 服务器上准备目录

不需要安装 Nginx，也不要启动其他占用 80/443 端口的 Web 服务器。安全组需要
放行 TCP 22、80、443。在 ECS 上创建专用部署用户和目录：

```bash
sudo adduser --disabled-password --gecos "" deploy
sudo mkdir -p /var/www/lygion.ai/releases
sudo chown -R deploy:deploy /var/www/lygion.ai
sudo chmod 755 /var/www /var/www/lygion.ai /var/www/lygion.ai/releases
```

在本机生成一把只用于部署的 SSH 密钥：

```bash
ssh-keygen -t ed25519 -C "github-actions-lygion" -f ./lygion-deploy
```

把 `lygion-deploy.pub` 的一整行追加到 ECS 的
`/home/deploy/.ssh/authorized_keys`。私钥 `lygion-deploy` 稍后放入 GitHub
Secret，绝对不要提交到仓库。

## 2. 将站点加入现有 Caddyfile

仓库中的 `deploy/caddy/lygion.ai.Caddyfile` 是一个独立站点块。把它追加到
ECS 的 `/etc/caddy/Caddyfile`，保留原来的 `wiki.lygion.ai` 配置。例如：

```caddyfile
wiki.lygion.ai {
	# 保留现有 Wiki 配置
}

lygion.ai {
	root * /var/www/lygion.ai/current
	encode zstd gzip
	file_server
}
```

检查并应用配置：

```bash
sudo caddy fmt --overwrite /etc/caddy/Caddyfile
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
sudo systemctl status caddy --no-pager
```

Caddy 会自动把 HTTP 跳转到 HTTPS，并在 DNS 指向 ECS 后自动申请证书。因为
`lygion.ai` 使用地域 DNS、同一域名在境外指向 GitHub Pages，HTTP-01 证书验证
可能被境外验证节点送到 GitHub。首次申请 Caddy 证书时可暂时让默认线路也指向
ECS；更稳定的方案是给 Caddy 配置阿里云 DNS-01 插件，或在 Caddy 中使用阿里云
签发并自动更新的证书。

在中国内地 ECS 提供网站服务通常需要先完成 ICP 备案；备案完成前不要启用中国
内地解析。

## 3. 配置 GitHub Pages

在仓库 `LygionOrganization/lygion-website` 中：

1. 打开 **Settings → Pages**，将 **Source** 设为 **GitHub Actions**。
2. 将 **Custom domain** 设置为 `lygion.ai`。
3. 在组织 **Settings → Pages → Verified domains** 添加 `lygion.ai`，把
   GitHub 给出的 TXT 记录加入阿里云 DNS，验证后永久保留该 TXT。
4. GitHub 签发证书后勾选 **Enforce HTTPS**。

首次签发 GitHub Pages 证书时，建议先让 `lygion.ai` 的默认线路指向 GitHub
Pages；证书正常后再添加中国内地线路。

## 4. 配置 GitHub Environment Secrets

打开仓库 **Settings → Environments**，新建 `aliyun-production`，添加：

| Secret | 内容 |
| --- | --- |
| `ALIYUN_HOST` | ECS 公网 IP 或部署专用域名 |
| `ALIYUN_PORT` | SSH 端口，通常为 `22` |
| `ALIYUN_USER` | `deploy` |
| `ALIYUN_PATH` | `/var/www/lygion.ai` |
| `ALIYUN_SSH_KEY` | `lygion-deploy` 私钥的完整内容 |
| `ALIYUN_KNOWN_HOSTS` | 在可信网络执行 `ssh-keyscan -H -p 22 ECS公网IP` 的完整输出 |

不要把服务器密码、私钥或证书提交到 Git。

## 5. 把 DNS 托管迁移到阿里云

1. 在阿里云 **云解析 DNS → 公网权威解析** 添加 `lygion.ai`。
2. 复制 GoDaddy 中所有现有记录，务必保留 `wiki`、MX、TXT 等记录。
3. 记录阿里云为域名分配的两台权威 DNS 服务器。
4. 在 GoDaddy 的 **DNS → Nameservers → Change Nameservers → Enter my
   own nameservers** 填入这两条地址。
5. 等权威 DNS 生效后再配置分线路记录。

注意：迁移 DNS 时，`wiki.lygion.ai` 的现有 A/AAAA/CNAME 记录必须先原样复制
到阿里云，否则 Wiki 会中断。

精细地域线路可能需要阿里云云解析 DNS 付费版。为 `@` 添加：

| 主机记录 | 类型 | 解析请求来源 | 记录值 |
| --- | --- | --- | --- |
| `@` | A | 中国地区 | ECS 公网 IPv4 |
| `@` | A | 境外 | `185.199.108.153` |
| `@` | A | 境外 | `185.199.109.153` |
| `@` | A | 境外 | `185.199.110.153` |
| `@` | A | 境外 | `185.199.111.153` |
| `@` | A | 默认 | 上述四个 GitHub Pages IPv4 地址 |

默认线路用于地域识别失败时兜底到 GitHub Pages。不要添加 `AAAA`，除非 ECS 和
GitHub Pages 的 IPv6 分线路也完整配置，否则客户端可能绕过 IPv4 分流。

DNS 根据递归 DNS 位置与 EDNS Client Subnet 判断地域。使用境外公共 DNS、VPN
或代理的中国内地用户可能命中境外线路，这是 DNS 分流的固有限制。

## 6. 发布与验证

推送到 `main` 后，工作流会部署 GitHub Pages 与 ECS。也可在
**Actions → Deploy website → Run workflow** 手动执行。

检查 ECS 产物和 Caddy：

```bash
readlink -f /var/www/lygion.ai/current
curl -I -H "Host: lygion.ai" http://127.0.0.1
journalctl -u caddy --since "10 minutes ago" --no-pager
```

最终分别在中国内地和境外网络验证：

- `https://lygion.ai/`：内地进入 `/zh/`，境外进入 `/en/`。
- `https://lygion.ai/en/` 与 `https://lygion.ai/zh/` 均可访问。
- `https://wiki.lygion.ai/` 保持正常。
- 两个入口的浏览器证书都应覆盖对应域名且没有安全警告。

若 GitHub Pages 自动证书续签失败，可临时暂停中国内地 A 记录，让全球解析到
GitHub Pages，续签完成后再恢复。Caddy 端推荐用 DNS-01 避免这一问题。
