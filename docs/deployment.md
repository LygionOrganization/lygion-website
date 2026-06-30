# lygion.ai 阿里云部署

当前方案不迁移 DNS，也不做地域分流：

- GoDaddy 继续作为权威 DNS。
- GoDaddy 的 `@` A 记录指向阿里云 ECS。
- GitHub Actions 构建 Astro 站点并通过 SSH 部署到 ECS。
- GitHub Actions 同时将备用站部署到 GitHub Pages。
- ECS 上现有的 Caddy 同时承载 `wiki.lygion.ai` 和 `lygion.ai`。
- `https://lygion.ai/` 仅在浏览器语言为简体中文时进入 `/zh/`，其他语言进入 `/en/`。

GitHub Pages 不承接 `lygion.ai` 的生产流量，只作为独立备用站和公开产品入口：

```text
https://lygionorganization.github.io/lygion-website/
```

因为 GoDaddy 普通 DNS 不能按中国内地/境外线路返回不同地址，所以访问
`lygion.ai` 的所有地区都会连接阿里云 ECS。

## 1. GoDaddy DNS

保留下列记录：

| 类型 | 名称 | 数据 |
| --- | --- | --- |
| A | `@` | `8.135.48.238` |
| A | `wiki` | `8.135.48.238` |

不需要修改 Nameservers。DNS 生效检查：

```powershell
Resolve-DnsName lygion.ai -Type A
Resolve-DnsName wiki.lygion.ai -Type A
```

两个域名都应返回 `8.135.48.238`。

## 2. ECS 目录权限

```bash
sudo mkdir -p /var/www/lygion.ai/releases
sudo chown -R deploy:deploy /var/www/lygion.ai
sudo chmod 755 /var/www /var/www/lygion.ai /var/www/lygion.ai/releases
```

验证部署用户：

```bash
sudo -u deploy mkdir /var/www/lygion.ai/releases/permission-test
sudo -u deploy rmdir /var/www/lygion.ai/releases/permission-test
```

## 3. Caddy

保留现有 Wiki 配置，并添加主站配置：

```caddyfile
wiki.lygion.ai {
	root * /var/www/lygion-wiki
	file_server
	encode gzip zstd
}

lygion.ai {
	root * /var/www/lygion.ai/current
	file_server
	encode gzip zstd
}
```

应用配置：

```bash
sudo caddy fmt --overwrite /etc/caddy/Caddyfile
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

DNS 生效且 80/443 端口开放后，Caddy 会自动申请 `lygion.ai` 的 HTTPS 证书。

## 4. GitHub Environment Secrets

仓库 **Settings → Environments → aliyun-production** 中配置：

| Secret | 内容 |
| --- | --- |
| `ALIYUN_HOST` | `8.135.48.238` |
| `ALIYUN_PORT` | `22` |
| `ALIYUN_USER` | `deploy` |
| `ALIYUN_PATH` | `/var/www/lygion.ai` |
| `ALIYUN_SSH_KEY` | 对应公钥已加入 `deploy` 用户的 OpenSSH 私钥 |
| `ALIYUN_KNOWN_HOSTS` | ECS 的 SSH 主机公钥记录 |

获取主机公钥记录：

```bash
sudo awk '{print "8.135.48.238 " $1 " " $2}' \
  /etc/ssh/ssh_host_ed25519_key.pub
```

不需要配置 `deploy` 登录密码，工作流使用 SSH 私钥认证。

## 5. 发布

推送到 `main` 后会自动构建并部署，也可以在
**Actions → Deploy website → Run workflow** 手动运行。

仓库 **Settings → Pages** 中的 Source 必须设置为 **GitHub Actions**。不需要为
GitHub Pages 配置 Custom domain。

部署成功后检查：

```bash
readlink -f /var/www/lygion.ai/current
curl -I https://lygion.ai/
curl -I https://wiki.lygion.ai/
```

预期结果：

- 浏览器语言为简体中文时，`https://lygion.ai/` 跳转到 `/zh/`。
- 浏览器语言不是简体中文时，`https://lygion.ai/` 跳转到 `/en/`。
- `https://lygion.ai/en/` 可以打开英文版。
- `https://lygionorganization.github.io/lygion-website/` 可以打开备用站。
- `https://wiki.lygion.ai/` 继续正常运行。

如果 ECS 位于中国内地，未备案域名仍可能被云平台阻断。当前能访问不代表以后
一定不会触发备案检查。
