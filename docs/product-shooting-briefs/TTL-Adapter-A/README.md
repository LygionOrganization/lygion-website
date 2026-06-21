# TTL Adapter (A) 产品详情页拍摄清单

## 使用原则

- 图片只呈现产品、线材和真实连接关系，不在图片内添加标题、参数、箭头或说明文字。
- 所有文字由详情页 HTML 承担，便于 SEO、翻译和后续修订。
- 背景以浅灰或中性白为主，黑色 PCB、线材与接口不能丢失细节。
- 同一组素材保持一致的白平衡、光线方向、拍摄高度和留白比例。
- 建议交付 JPG 与无损 PNG/TIFF 原图；长边不低于 3000 px，保留 RAW 文件。

## P0：详情页必须补齐

### 01. 主视觉横图

- 内容：TTL Adapter (A) 单板，连接 Type-C 线与一根 TTL 总线线材。
- 构图：45° 斜俯拍，产品位于画面右侧，左侧保留约 45% 干净留白供 HTML 标题排版。
- 背景：浅灰或偏冷白，无纹理、无道具。
- 重点：Type-C、DC5521、顶部接口轮廓清晰，PCB 丝印可辨认。
- 交付：3:2 横图，建议 3600 × 2400 px；另拍一张纯产品不接线版本。

### 02. 正反面标准产品图

- 内容：板卡正面、背面各一张。
- 构图：镜头与 PCB 完全垂直，产品居中，四边留白一致。
- 重点：避免透视变形、强反光与接口阴影；所有丝印清晰。
- 交付：1:1，建议 3000 × 3000 px。

### 03. 四角接口细节

- 内容：Type-C / UART、DC5521、HX-5264-3P、GH1.25-3P。
- 构图：四个统一角度的 45° 近景，各接口占画面主要面积。
- 重点：插座内部、焊点和接口朝向清晰；不要插入标签卡或文字贴纸。
- 交付：4:3，每张建议 2400 × 1800 px。

### 04. 多设备总线全景

- 内容：PC 或树莓派 → TTL Adapter (A) → Hub（如需要）→ TTL 舵机 + TTL Encoder + TTL Stepper Driver。
- 构图：从左到右形成清晰链路，所有线材实际连接，设备之间留有稳定间距。
- 重点：这是说明“适用于多类总线设备”的核心证据图；需确保协议与供电连接真实可运行。
- 交付：16:9 横图，建议 3840 × 2160 px；另拍一张 3:2 近景版本。

### 05. 套装平铺图

- 内容：单板、GH1.25-3P 线、Type-C 数据线、12V 3A 电源分别拍摄；再拍三档套装组合。
- 构图：垂直俯拍，配件平行排列，线材自然盘绕且方向一致。
- 重点：三档套装保持完全相同的机位与比例，方便页面并排比较。
- 交付：4:3，建议 3000 × 2250 px。

## P1：显著提升说服力

### 06. PC / SBC 接入场景

- 内容：笔记本或树莓派通过 Type-C 连接 Adapter，Adapter 再连接总线设备。
- 构图：Adapter 为视觉中心，主机只保留必要局部，不出现无关桌面物品。
- 交付：3:2 横图，建议 3000 × 2000 px。

### 07. MCU 接入场景

- 内容：ESP32 或 STM32 通过 UART RX/TX/GND 连接 Adapter。
- 构图：两块板均清晰，线材不交叉遮挡接口。
- 交付：3:2 横图，建议 3000 × 2000 px。

### 08. 多板分组供电

- 内容：两块 TTL Adapter 串联，分别连接不同电压组的总线设备与独立电源。
- 构图：两组从上到下或左右对称，电源线与通信线容易区分。
- 重点：拍摄前由工程人员确认接法；页面 HTML 再解释电压边界。
- 交付：16:9，建议 3840 × 2160 px。

### 09. 机器人内部安装

- 内容：Adapter 安装在机械臂、移动底盘或机器人机身内部的真实位置。
- 构图：同时交代板卡尺寸、固定方式和线束走向。
- 交付：3:2 横图与 4:5 竖图各一张。

## footage_01 可用性结论

- `IMG_1238.JPG`：可临时参考套装平铺，但曝光、间距与主体占比不足，不建议作为最终详情页素材。
- `IMG_1239.JPG`、`IMG_1242.JPG`：可确认 Adapter 与其他板卡并列关系，但产品过小、画面留白失控，不建议发布。
- `IMG_1061.JPG`–`IMG_1214.JPG`：主要是编码器、步进驱动器、轮组及应用素材，可为后续对应产品页筛选；不能替代本页所需的完整总线接线图。
- `IMG_1215.JPG`–`IMG_1234.JPG`：多为拍摄环境、窗景和测试画面，不适合正式产品页。
- `IMG_1240.JPG`–`IMG_1252.JPG`：曝光波动明显且主体较小，不建议发布。

## 文件命名建议

```text
ttl-adapter-a-hero-connected.jpg
ttl-adapter-a-front.jpg
ttl-adapter-a-back.jpg
ttl-adapter-a-interface-usb-uart.jpg
ttl-adapter-a-interface-power.jpg
ttl-adapter-a-interface-bus.jpg
ttl-adapter-a-bus-servo-encoder-stepper.jpg
ttl-adapter-a-package-basic.jpg
ttl-adapter-a-package-debug.jpg
ttl-adapter-a-package-powered.jpg
ttl-adapter-a-pc-connection.jpg
ttl-adapter-a-mcu-connection.jpg
ttl-adapter-a-multi-power-groups.jpg
ttl-adapter-a-installed-in-robot.jpg
```
