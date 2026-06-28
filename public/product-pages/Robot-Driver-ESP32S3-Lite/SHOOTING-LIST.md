# Robot Driver with ESP32S3 Lite 拍摄清单

## 统一要求

- 背景使用纯白或浅灰，避免渐变、反光板纹理和复杂道具。
- 使用柔和漫射光，PCB 丝印、接口形状和线材走向必须清楚。
- 不在照片内添加标题、箭头或参数文字，网页会负责说明。
- 建议输出 sRGB WebP，长边至少 2400px，同时保留原始无损文件。
- 所有接线场景都应真实可用，供电极性、接口方向和线序需复核。

## 必拍素材

| 编号 | 文件名 | 画面内容 | 构图与用途 |
| --- | --- | --- | --- |
| SHOT-01 | `hero-system.webp` | 控制板、OLED 五向开关模块和 2–3 个代表性执行器，线材完整连接 | 横向 4:3，主板占画面约 45%，用于首屏 |
| SHOT-02 | `board-top.webp` | 控制板正面垂直俯拍，不接线 | 横向 4:3，四周留白，用于硬件资源章节 |
| SHOT-03 | `board-back.webp` | 控制板背面垂直俯拍 | 横向 4:3，与正面照片比例和位置一致 |
| SHOT-04 | `host-usb.webp` | 控制板通过 USB 连接笔记本电脑，浏览器显示 Web 控制台 | 横向 3:2，屏幕内容可辨认但不过曝 |
| SHOT-05 | `host-sbc.webp` | 控制板与 Raspberry Pi 或 Jetson 连接，展示 HAT/UART 线束 | 横向 3:2，接口和线材路径完整可见 |
| SHOT-06 | `actuator-buses.webp` | TTL 舵机、RS485 关节执行器、CAN 轮毂电机分别接入控制板 | 横向 16:9，三类设备分区清楚 |
| SHOT-07 | `local-control.webp` | OLED 与五向开关近景，屏幕显示网络或任务状态 | 横向 4:3，对焦在屏幕和按键 |
| SHOT-08 | `installed-robot.webp` | 控制板安装在真实机器人或测试平台内 | 横向 16:9，能看清固定方式和线缆整理 |
| SHOT-09 | `package-contents.webp` | 主板、OLED 模块、线材和实际随附配件平铺 | 横向 4:3，所有物品不重叠 |

## 可选细节素材

| 编号 | 文件名 | 画面内容 |
| --- | --- | --- |
| DETAIL-01 | `power-inputs.webp` | DC5521、XT30 与电源开关近景 |
| DETAIL-02 | `actuator-ports.webp` | TTL、RS485、CAN 接口近景 |
| DETAIL-03 | `usb-uart-ports.webp` | USB 与 UART Type-C 接口近景 |
| DETAIL-04 | `hat-expansion.webp` | 2×5 HAT 与扩展 IO 接口近景 |

## 界面截图

- `web-console-overview.png`：完整首页，使用最新正式固件。
- `json-interface.png`：展示一条请求和对应响应。
- `automation-scripts.png`：展示一段包含动作与延时的任务文件。
- 截图统一使用 1440px 或更宽的浏览器视口，不包含浏览器书签栏、个人账号或 Wi-Fi 密码。
