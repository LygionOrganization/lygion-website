import type { Language } from "./i18n";

export type ModuleId = "bus-devices" | "robot-modules" | "robot-systems" | "lygion-open";

export type LocalizedText = Record<Language, string>;

export type Product = {
  slug: string;
  module: ModuleId;
  status: "concept" | "prototype" | "available" | "open";
  image: string;
  detailPath?: string | LocalizedText;
  name: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  highlights: Record<Language, string[]>;
  specs: Record<Language, { label: string; value: string }[]>;
  links?: {
    docs?: string;
    github?: string;
    contact?: string;
  };
};

export const modules: {
  id: ModuleId;
  accent: "cyan" | "amber" | "green" | "violet";
  navKey: "busDevices" | "robotModules" | "robotSystems" | "lygionOpen";
  name: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
}[] = [
  {
    id: "bus-devices",
    accent: "cyan",
    navKey: "busDevices",
    name: { zh: "总线设备", en: "Bus Devices" },
    summary: {
      zh: "面向机器人控制、采集与互联的可靠底层设备。",
      en: "Reliable low-level devices for robot control, sensing, and connectivity."
    },
    description: {
      zh: "总线设备负责把执行器、传感器、控制器和上位机连接成稳定的数据通路，简化机器人系统复杂度，提升开发和运行效率。",
      en: "Bus devices connect actuators, sensors, controllers, and host systems into a reliable data path for simpler robot system integration and faster development."
    }
  },
  {
    id: "robot-modules",
    accent: "amber",
    navKey: "robotModules",
    name: { zh: "机器人模组", en: "Robot Modules" },
    summary: {
      zh: "可复用的执行、感知与计算单元，降低机器人设计门槛，提升使用效率。",
      en: "Reusable actuation, perception, and compute units for simpler robot design and faster deployment."
    },
    description: {
      zh: "机器人模组把复杂能力打包成独立单元，降低整机开发中的机械、电气、控制和软件集成成本。",
      en: "Robot modules package complex capabilities into reusable units, reducing mechanical, electrical, control, and software integration effort."
    }
  },
  {
    id: "robot-systems",
    accent: "green",
    navKey: "robotSystems",
    name: { zh: "机器人整机", en: "Robot Systems" },
    summary: {
      zh: "围绕真实场景构建的完整机器人平台与解决方案。",
      en: "Complete robot platforms and solutions built around real operating scenarios."
    },
    description: {
      zh: "机器人整机面向场景验证和应用落地，整合移动、操作、感知、导航和任务系统。",
      en: "Robot systems integrate mobility, manipulation, perception, navigation, and task workflows for real-world validation."
    }
  },
  {
    id: "lygion-open",
    accent: "violet",
    navKey: "lygionOpen",
    name: { zh: "灵影开源", en: "Lygion Open" },
    summary: {
      zh: "开放硬件、软件工具链与参考设计，连接开发者生态。",
      en: "Open hardware, software toolchains, and reference designs for developers."
    },
    description: {
      zh: "公开资料、参考设计、示例代码和开发文档，让开发者可以更快理解与复用。",
      en: "Public resources, reference designs, sample code, and documentation for developers."
    }
  }
];

export const products: Product[] = [
  {
    slug: "dw69-drive-wheel-module",
    module: "robot-modules",
    status: "available",
    image: "/product-pages/dw69/assets/hero-product.jpg",
    detailPath: {
      zh: "/product-pages/dw69/index.html",
      en: "/product-pages/dw69/en/index.html"
    },
    name: { zh: "DW69 机器人底盘驱动轮模组", en: "DW69 Chassis Drive Wheel Module" },
    summary: {
      zh: "69mm 驱动轮、减速步进电机、安装结构与 TTL 控制接口整合为一个底盘驱动单元。",
      en: "A 69mm drive wheel module integrating wheel, geared stepper motor, mounting structure, and TTL control."
    },
    description: {
      zh: "DW69 是以独立资料包形式接入主站的产品详情页示例。它的 HTML、CSS 和图片素材都保存在同一个产品文件夹内。",
      en: "DW69 is a product detail page added as a standalone asset package. Its HTML, CSS, and images live together in one product folder."
    },
    highlights: {
      zh: ["独立详情页资料包", "真实图片素材", "适合复杂长详情页"],
      en: ["Standalone detail package", "Real product imagery", "Suited for rich long-form product pages"]
    },
    specs: {
      zh: [
        { label: "定位", value: "底盘驱动轮模组" },
        { label: "轮径", value: "69mm" },
        { label: "详情页", value: "静态资料包 HTML" }
      ],
      en: [
        { label: "Role", value: "Chassis drive wheel module" },
        { label: "Wheel", value: "69mm" },
        { label: "Detail page", value: "Static HTML package" }
      ]
    }
  },
  {
    slug: "4240by-g5-2",
    module: "robot-modules",
    status: "available",
    image: "/product-pages/4240BY-G5.2/assets/hero.png",
    detailPath: "/product-pages/4240BY-G5.2/index.html",
    name: { zh: "4240BY-G5.2 42 步进行星减速电机", en: "4240BY-G5.2 Geared Stepper Motor" },
    summary: {
      zh: "42 步进电机与 5.182:1 行星减速器一体化，适合关节、底盘、滑台和转台等小型运动机构。",
      en: "A 42-size stepper motor with an integrated 5.182:1 planetary gearbox for compact motion mechanisms."
    },
    description: {
      zh: "把 42 步进电机和行星减速器做成一体，兼顾紧凑体积、静态输出扭矩和低速控制特性。",
      en: "Combines a 42-size stepper motor and planetary gearbox for compact size, higher holding torque, and smoother low-speed control."
    },
    highlights: {
      zh: ["42 步进电机减速一体", "5.182:1 行星减速", "适合关节、底盘与滑台"],
      en: ["Integrated geared stepper", "5.182:1 planetary gearbox", "For joints, chassis, and linear stages"]
    },
    specs: {
      zh: [
        { label: "定位", value: "步进减速电机" },
        { label: "减速比", value: "5.182:1" },
        { label: "详情页", value: "静态资料包 HTML" }
      ],
      en: [
        { label: "Role", value: "Geared stepper motor" },
        { label: "Gear ratio", value: "5.182:1" },
        { label: "Detail page", value: "Static HTML package" }
      ]
    }
  },
  {
    slug: "dm42-g7220-e02",
    module: "robot-modules",
    status: "available",
    image: "/product-pages/DM42-G7220-E02/assets/hero.png",
    detailPath: "/product-pages/DM42-G7220-E02/index.html",
    name: { zh: "DM42-G7220-E02 总线步进关节执行器", en: "DM42-G7220-E02 Bus Stepper Joint Actuator" },
    summary: {
      zh: "集成减速步进电机、同步带二级减速、输出端绝对值编码器与 TTL 总线控制的关节执行器。",
      en: "A TTL bus joint actuator combining geared stepper drive, belt reduction, and output-side absolute feedback."
    },
    description: {
      zh: "面向机器人关节、摆臂和转台，把机械输出、角度反馈和总线接入整理成一套工程可用方案。",
      en: "Built for robot joints, swing arms, and rotary stages with integrated mechanical output, angle feedback, and bus control."
    },
    highlights: {
      zh: ["输出端绝对值反馈", "同步带二级减速", "TTL 总线接入"],
      en: ["Output-side absolute feedback", "Secondary belt reduction", "TTL bus integration"]
    },
    specs: {
      zh: [
        { label: "定位", value: "关节执行器" },
        { label: "反馈", value: "12bit 绝对值磁编码器" },
        { label: "详情页", value: "静态资料包 HTML" }
      ],
      en: [
        { label: "Role", value: "Joint actuator" },
        { label: "Feedback", value: "12-bit absolute magnetic encoder" },
        { label: "Detail page", value: "Static HTML package" }
      ]
    }
  },
  {
    slug: "sp3m72-e02",
    module: "robot-modules",
    status: "available",
    image: "/product-pages/SP3M72-E02/assets/hero.png",
    detailPath: "/product-pages/SP3M72-E02/index.html",
    name: { zh: "SP3M72-E02 绝对磁编码器同步轮", en: "SP3M72-E02 Absolute Encoder Pulley" },
    summary: {
      zh: "HTD 3M 72T 同步轮、法兰轴承、固定座与 12bit 绝对磁编码器一体化。",
      en: "An HTD 3M 72T pulley integrating bearings, mount, and a 12-bit absolute magnetic encoder."
    },
    description: {
      zh: "适合安装在机械臂关节、同步带减速组或舵轮转向输出端，直接读取输出端角度和速度。",
      en: "Designed for arm joints, belt reduction stages, and swerve steering outputs where direct output angle feedback matters."
    },
    highlights: {
      zh: ["输出端角度检测", "单圈绝对位置", "同步轮与编码器一体化"],
      en: ["Output-side angle sensing", "Single-turn absolute position", "Integrated pulley and encoder"]
    },
    specs: {
      zh: [
        { label: "定位", value: "反馈同步轮" },
        { label: "分辨率", value: "12bit / 4096 位置" },
        { label: "齿形", value: "HTD 3M 72T" }
      ],
      en: [
        { label: "Role", value: "Feedback pulley" },
        { label: "Resolution", value: "12-bit / 4096 positions" },
        { label: "Profile", value: "HTD 3M 72T" }
      ]
    }
  },
  {
    slug: "sw69-ttl",
    module: "robot-modules",
    status: "available",
    image: "/product-pages/SW69-TTL/assets/hero.png",
    detailPath: "/product-pages/SW69-TTL/index.html",
    name: { zh: "SW69-TTL 全向移动底盘舵轮模组", en: "SW69-TTL Swerve Drive Module" },
    summary: {
      zh: "将转向、驱动、角度反馈和总线控制集成为一个标准底盘执行单元。",
      en: "A swerve drive unit integrating steering, drive, angle feedback, and bus control."
    },
    description: {
      zh: "多个模组配合底盘运动算法，可实现前后、左右、斜向移动和原地旋转。",
      en: "Works with chassis motion algorithms to support forward, lateral, diagonal, and in-place rotation movement."
    },
    highlights: {
      zh: ["转向与驱动一体", "绝对角度反馈", "适合全向移动底盘"],
      en: ["Integrated steering and drive", "Absolute angle feedback", "For omnidirectional chassis"]
    },
    specs: {
      zh: [
        { label: "定位", value: "底盘舵轮模组" },
        { label: "控制", value: "TTL 总线" },
        { label: "详情页", value: "静态资料包 HTML" }
      ],
      en: [
        { label: "Role", value: "Swerve drive module" },
        { label: "Control", value: "TTL bus" },
        { label: "Detail page", value: "Static HTML package" }
      ]
    }
  },
  {
    slug: "ttl-adapter-a",
    module: "bus-devices",
    status: "available",
    image: "/product-pages/TTL-Adapter-A/assets/hero-2.webp",
    detailPath: "/product-pages/TTL-Adapter-A/index.html",
    name: { zh: "TTL Adapter (A) 总线设备驱动板", en: "TTL Adapter (A) Bus Devices Adapter" },
    summary: {
      zh: "方便让各类主流控制器接入各类机器人总线设备的紧凑型 TTL 总线适配器，简化机器人系统复杂度，提升开发和运行效率。",
      en: "A compact TTL bus adapter for connecting various controllers to robot bus devices with simpler integration and faster development."
    },
    description: {
      zh: "面向机器人原型、嵌入式控制和多舵机系统集成，兼顾调试、通信、供电和系统扩展。",
      en: "Made for robot prototyping, embedded control, and multi-servo integration across debugging, communication, and power."
    },
    highlights: {
      zh: ["USB / UART / TTL 三种接入", "最高 3 Mbps 总线通信", "适合多舵机系统"],
      en: ["USB / UART / TTL access", "Up to 3 Mbps bus communication", "For multi-servo systems"]
    },
    specs: {
      zh: [
        { label: "定位", value: "TTL 总线通信模块" },
        { label: "接口", value: "USB Type-C / UART / 单线 TTL" },
        { label: "详情页", value: "静态资料包 HTML" }
      ],
      en: [
        { label: "Role", value: "TTL bus communication module" },
        { label: "I/O", value: "USB Type-C / UART / single-wire TTL" },
        { label: "Detail page", value: "Static HTML package" }
      ]
    }
  },
  {
    slug: "ttl-node-a",
    module: "bus-devices",
    status: "available",
    image: "/product-pages/TTL-Node-A/assets/hero.webp",
    detailPath: "/product-pages/TTL-Node-A/index.html",
    name: { zh: "TTL Node (A) 多功能总线节点板", en: "TTL Node (A) Multifunction Bus Node" },
    summary: {
      zh: "集成 USB 调参、航模遥控器 S.BUS 信号输入、双路 PWM 可调电源输出、RGB 状态灯和 TTL 总线扩展。",
      en: "A multifunction node with USB setup, RC controller S.BUS input, dual PWM power outputs, RGB status, and TTL bus expansion."
    },
    description: {
      zh: "适合给总线舵机、机械臂末端、移动机器人和自定义节点做统一接入。",
      en: "Useful as a unified endpoint or expansion node for servos, robot arms, mobile robots, and custom devices."
    },
    highlights: {
      zh: ["S.BUS 遥控输入", "双路 PWM 可调输出", "USB Type-C 调参"],
      en: ["S.BUS receiver input", "Dual PWM adjustable outputs", "USB Type-C configuration"]
    },
    specs: {
      zh: [
        { label: "定位", value: "多功能总线节点" },
        { label: "功能", value: "通信 / 遥控输入 / 供电输出" },
        { label: "详情页", value: "静态资料包 HTML" }
      ],
      en: [
        { label: "Role", value: "Multifunction bus node" },
        { label: "Capability", value: "Communication / RC input / power output" },
        { label: "Detail page", value: "Static HTML package" }
      ]
    }
  },
  {
    slug: "ttl-stepper-driver-a",
    module: "bus-devices",
    status: "available",
    image: "/product-pages/TTL-Stepper-Driver-A/assets/hero-2.webp",
    detailPath: {
      zh: "/product-pages/TTL-Stepper-Driver-A/index.html",
      en: "/product-pages/TTL-Stepper-Driver-A/en/index.html"
    },
    name: { zh: "TTL Stepper Driver (A) 总线步进电机驱动板", en: "TTL Stepper Driver (A)" },
    summary: {
      zh: "让上位机通过位置、速度和电流等指令控制步进电机，驱动板负责底层脉冲与速度插值。",
      en: "A TTL bus stepper driver that accepts position, speed, and current commands while handling pulse output internally."
    },
    description: {
      zh: "适合机器人关节、丝杆机构、小型移动底盘和自动化设备，减少上位机持续输出脉冲的负担。",
      en: "Designed for joints, lead screw mechanisms, compact mobile bases, and automation equipment."
    },
    highlights: {
      zh: ["TTL 总线控制", "板端运动控制", "适合步进电机系统"],
      en: ["TTL bus control", "On-board motion control", "For stepper motor systems"]
    },
    specs: {
      zh: [
        { label: "定位", value: "步进电机驱动板" },
        { label: "控制", value: "位置 / 速度 / 电流指令" },
        { label: "详情页", value: "静态资料包 HTML" }
      ],
      en: [
        { label: "Role", value: "Stepper motor driver" },
        { label: "Control", value: "Position / speed / current commands" },
        { label: "Detail page", value: "Static HTML package" }
      ]
    }
  },
  {
    slug: "ttl-encoder-e02",
    module: "bus-devices",
    status: "available",
    image: "/product-pages/TTL-Encoder-E02/assets/hero.jpg",
    detailPath: "/product-pages/TTL-Encoder-E02/index.html",
    name: { zh: "TTL Encoder E02 绝对角度总线磁编码器", en: "TTL Encoder E02 Absolute Magnetic Encoder" },
    summary: {
      zh: "面向机器人关节与紧凑传动结构的 12bit 绝对角度、速度反馈方案。",
      en: "A 12-bit absolute angle and speed feedback device for robot joints and compact transmissions."
    },
    description: {
      zh: "断电不丢单圈绝对角度，可通过单线 TTL 总线连接多个编码器、舵机与灵影总线设备。",
      en: "Keeps single-turn absolute position across power cycles and connects over a single-wire TTL bus."
    },
    highlights: {
      zh: ["12bit 绝对角度", "单线 TTL 总线", "适合输出端反馈"],
      en: ["12-bit absolute angle", "Single-wire TTL bus", "For output-side feedback"]
    },
    specs: {
      zh: [
        { label: "定位", value: "总线磁编码器" },
        { label: "反馈", value: "角度 / 速度" },
        { label: "详情页", value: "静态资料包 HTML" }
      ],
      en: [
        { label: "Role", value: "Bus magnetic encoder" },
        { label: "Feedback", value: "Angle / speed" },
        { label: "Detail page", value: "Static HTML package" }
      ]
    }
  },
  {
    slug: "ttl-5264-8p-hub-a",
    module: "bus-devices",
    status: "available",
    image: "/product-pages/TTL-5264-8P-Hub-A/assets/hero.jpg",
    detailPath: "/product-pages/TTL-5264-8P-Hub-A/index.html",
    name: { zh: "TTL-5264 8P Hub (A) 总线分线板", en: "TTL-5264 8P Hub (A)" },
    summary: {
      zh: "把一条 TTL 总线整理成 8 路 5264-3P 设备接口，并统一供电入口、级联通信和安装结构。",
      en: "Expands one TTL bus into eight 5264-3P device ports with organized power input, cascade communication, and mounting."
    },
    description: {
      zh: "适合 Lygion 步进电机驱动板、兼容飞特总线舵机和其他 5264-3P TTL 设备。",
      en: "Suitable for Lygion stepper drivers, compatible bus servos, and other 5264-3P TTL devices."
    },
    highlights: {
      zh: ["8 路 5264-3P 接口", "总线分线与供电整理", "适合多设备布线"],
      en: ["Eight 5264-3P ports", "Bus and power organization", "For multi-device wiring"]
    },
    specs: {
      zh: [
        { label: "定位", value: "TTL 总线 Hub" },
        { label: "接口", value: "8 路 5264-3P" },
        { label: "详情页", value: "静态资料包 HTML" }
      ],
      en: [
        { label: "Role", value: "TTL bus hub" },
        { label: "I/O", value: "8 x 5264-3P" },
        { label: "Detail page", value: "Static HTML package" }
      ]
    }
  },
  {
    slug: "hc-1-25-8p-hub-a",
    module: "bus-devices",
    status: "available",
    image: "/product-pages/HC-1.25-8P-Hub-A/assets/hero.jpg",
    detailPath: "/product-pages/HC-1.25-8P-Hub-A/index.html",
    name: { zh: "HC-1.25_8P_Hub_(A) TTL 总线舵机分线板", en: "HC-1.25 8P Hub (A)" },
    summary: {
      zh: "面向 HC-1.25-3P 总线舵机的 8 路并联分线与紧凑安装 Hub。",
      en: "A compact 8-port hub for HC-1.25-3P TTL bus servo wiring."
    },
    description: {
      zh: "提供 8 路并联输出、板对板通信与供电接入，适合狭小空间里的高密度接线整理。",
      en: "Provides eight parallel outputs, board-to-board communication, and power access for dense wiring in tight spaces."
    },
    highlights: {
      zh: ["8 路并联输出", "HC-1.25-3P 接口", "细长紧凑板型"],
      en: ["Eight parallel outputs", "HC-1.25-3P interface", "Slim compact board"]
    },
    specs: {
      zh: [
        { label: "定位", value: "TTL 舵机分线板" },
        { label: "接口", value: "8 路 HC-1.25-3P" },
        { label: "详情页", value: "静态资料包 HTML" }
      ],
      en: [
        { label: "Role", value: "TTL servo hub" },
        { label: "I/O", value: "8 x HC-1.25-3P" },
        { label: "Detail page", value: "Static HTML package" }
      ]
    }
  },
  {
    slug: "robot-driver-esp32s3-lite",
    module: "bus-devices",
    status: "available",
    image: "/product-pages/Robot-Driver-ESP32S3-Lite/assets/hero.png",
    detailPath: "/product-pages/Robot-Driver-ESP32S3-Lite/index.html",
    name: { zh: "Robot Driver with ESP32S3 Lite 控制板", en: "Robot Driver with ESP32S3 Lite" },
    summary: {
      zh: "集成 Web 控制台、本地按键交互、动作任务文件和上位机 JSON 通信的一体化机器人控制板。",
      en: "An ESP32-S3 robot controller with Web console, local controls, task files, and host JSON communication."
    },
    description: {
      zh: "把本地控制、无线接入、任务文件、执行器总线和上位机接口做成可直接部署的整板方案。",
      en: "Combines local control, wireless access, task scripts, actuator buses, and host interfaces into a deployable board."
    },
    highlights: {
      zh: ["浏览器直控", "动作任务脚本", "多总线执行器接入"],
      en: ["Browser-based control", "Action task scripts", "Multi-bus actuator access"]
    },
    specs: {
      zh: [
        { label: "定位", value: "机器人下位机控制板" },
        { label: "主控", value: "ESP32-S3" },
        { label: "详情页", value: "静态资料包 HTML" }
      ],
      en: [
        { label: "Role", value: "Robot sub-controller board" },
        { label: "Controller", value: "ESP32-S3" },
        { label: "Detail page", value: "Static HTML package" }
      ]
    }
  },
  {
    slug: "linkarm-lt",
    module: "robot-systems",
    status: "available",
    image: "/product-pages/LinkArm-LT/assets/hero.jpg",
    detailPath: "/product-pages/LinkArm-LT/index.html",
    name: { zh: "LinkArm-LT 轻量机械臂", en: "LinkArm-LT Lightweight Robotic Arm" },
    summary: {
      zh: "内置 ESP32-S3 控制器和 Web 应用，可通过浏览器完成控制、Wi-Fi 配置、动作脚本和 JSON 调试。",
      en: "A lightweight arm with ESP32-S3 control and a browser UI for control, Wi-Fi setup, action scripts, and JSON debugging."
    },
    description: {
      zh: "把浏览器控制台、脚本系统、无线接入和 JSON 通信能力整合在控制器中，适合演示、教学和上位机集成。",
      en: "Integrates browser control, scripting, wireless access, and JSON communication for demos, education, and host integration."
    },
    highlights: {
      zh: ["Web 控制平台", "动作脚本编排", "轻量机械臂结构"],
      en: ["Web control platform", "Action script workflow", "Lightweight arm structure"]
    },
    specs: {
      zh: [
        { label: "定位", value: "轻量机械臂" },
        { label: "控制", value: "浏览器 / JSON" },
        { label: "详情页", value: "静态资料包 HTML" }
      ],
      en: [
        { label: "Role", value: "Lightweight robotic arm" },
        { label: "Control", value: "Browser / JSON" },
        { label: "Detail page", value: "Static HTML package" }
      ]
    }
  },
  {
    slug: "linkarm-m",
    module: "robot-systems",
    status: "available",
    image: "/product-pages/LinkArm-M/assets/hero.jpg",
    detailPath: "/product-pages/LinkArm-M/index.html",
    name: { zh: "LinkArm-M 并联机械臂模组", en: "LinkArm-M Parallel Arm Module" },
    summary: {
      zh: "面向移动底盘与开发集成的 3+1 自由度并联机械臂模组，开放 CLI 与 Python SDK。",
      en: "A 3+1 DOF parallel arm module for mobile base integration with CLI and Python SDK support."
    },
    description: {
      zh: "适合接入 Raspberry Pi、Jetson、RK 主控或 PC，提供 IK / FK、状态读取、JSON 输出和多机械臂控制路径。",
      en: "Designed for Raspberry Pi, Jetson, RK controllers, and PCs with IK / FK, state reading, JSON output, and multi-arm control."
    },
    highlights: {
      zh: ["3+1 自由度并联结构", "USB 串口主机控制", "开放 Python SDK"],
      en: ["3+1 DOF parallel structure", "USB serial host control", "Open Python SDK"]
    },
    specs: {
      zh: [
        { label: "定位", value: "机械臂模组" },
        { label: "控制", value: "CLI / Python SDK / JSON" },
        { label: "详情页", value: "静态资料包 HTML" }
      ],
      en: [
        { label: "Role", value: "Robotic arm module" },
        { label: "Control", value: "CLI / Python SDK / JSON" },
        { label: "Detail page", value: "Static HTML package" }
      ]
    }
  },
  {
    slug: "lygion-open-kit",
    module: "lygion-open",
    status: "open",
    image: "/assets/products/open-kit.svg",
    name: { zh: "Lygion Open Kit", en: "Lygion Open Kit" },
    summary: {
      zh: "用于公开参考设计、示例代码与开发文档的开源套件入口。",
      en: "An open kit for reference designs, sample code, and developer documentation."
    },
    description: {
      zh: "作为后续开源项目的统一展示入口，可链接到 GitHub 仓库、文档站和硬件资料。",
      en: "A unified entry point for future open-source projects, linking GitHub repositories, docs, and hardware resources."
    },
    highlights: {
      zh: ["GitHub 友好", "文档优先", "适合社区协作"],
      en: ["GitHub friendly", "Documentation first", "Made for community collaboration"]
    },
    specs: {
      zh: [
        { label: "定位", value: "开源项目入口" },
        { label: "内容", value: "代码 / 文档 / 参考设计" },
        { label: "状态", value: "开放 Demo" }
      ],
      en: [
        { label: "Role", value: "Open-source project hub" },
        { label: "Content", value: "Code / docs / reference designs" },
        { label: "Status", value: "Open demo" }
      ]
    },
    links: {
      github: "https://github.com/"
    }
  },
  {
    slug: "bus-protocol-sdk",
    module: "lygion-open",
    status: "open",
    image: "/assets/products/protocol-sdk.svg",
    name: { zh: "Bus Protocol SDK", en: "Bus Protocol SDK" },
    summary: {
      zh: "用于总线设备通信、调试工具和示例工程的开源 SDK。",
      en: "An open SDK for bus communication, debugging tools, and sample projects."
    },
    description: {
      zh: "帮助开发者快速理解设备通信流程，并用统一接口连接示例硬件和上层应用。",
      en: "Helps developers understand device communication and connect sample hardware with upper-layer applications."
    },
    highlights: {
      zh: ["示例工程", "协议文档", "跨平台工具预留"],
      en: ["Sample projects", "Protocol docs", "Cross-platform tooling ready"]
    },
    specs: {
      zh: [
        { label: "定位", value: "通信 SDK" },
        { label: "内容", value: "协议 / 示例 / 工具" },
        { label: "状态", value: "开放 Demo" }
      ],
      en: [
        { label: "Role", value: "Communication SDK" },
        { label: "Content", value: "Protocol / samples / tools" },
        { label: "Status", value: "Open demo" }
      ]
    },
    links: {
      github: "https://github.com/"
    }
  },
  {
    slug: "robot-reference-design",
    module: "lygion-open",
    status: "open",
    image: "/assets/products/reference-design.svg",
    name: { zh: "Robot Reference Design", en: "Robot Reference Design" },
    summary: {
      zh: "沉淀机器人硬件连接、线束、控制拓扑与软件启动流程的参考设计。",
      en: "Reference designs for robot wiring, control topology, and software bring-up."
    },
    description: {
      zh: "将灵影产品组合成可复用的机器人参考架构，方便团队从样机过渡到稳定版本。",
      en: "Combines Lygion products into reusable robot architectures for moving from prototype to stable builds."
    },
    highlights: {
      zh: ["系统拓扑", "接线参考", "启动清单"],
      en: ["System topology", "Wiring reference", "Bring-up checklist"]
    },
    specs: {
      zh: [
        { label: "定位", value: "参考设计" },
        { label: "内容", value: "硬件 / 软件 / 系统" },
        { label: "状态", value: "开放 Demo" }
      ],
      en: [
        { label: "Role", value: "Reference design" },
        { label: "Content", value: "Hardware / software / system" },
        { label: "Status", value: "Open demo" }
      ]
    },
    links: {
      github: "https://github.com/"
    }
  }
];

export function getModule(id: ModuleId) {
  return modules.find((module) => module.id === id);
}

export function getProductsByModule(id: ModuleId) {
  return products.filter((product) => product.module === id);
}

export function getProductDetailPath(product: Product, lang: Language) {
  if (!product.detailPath) {
    return `/${lang}/products/${product.slug}/`;
  }

  return typeof product.detailPath === "string" ? product.detailPath : product.detailPath[lang];
}
