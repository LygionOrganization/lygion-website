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
      zh: "总线设备负责把执行器、传感器、控制器和上位机连接成稳定的数据通路，适合实验室调试、产品验证和小批量集成。",
      en: "Bus devices connect actuators, sensors, controllers, and host systems into a reliable data path for lab debugging, validation, and integration."
    }
  },
  {
    id: "robot-modules",
    accent: "amber",
    navKey: "robotModules",
    name: { zh: "机器人模组", en: "Robot Modules" },
    summary: {
      zh: "可复用的执行、感知与计算单元，加速原型到产品。",
      en: "Reusable actuation, perception, and compute units from prototype to product."
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
      en: "Open hardware, software toolchains, and reference designs for builders."
    },
    description: {
      zh: "灵影开源用于沉淀公开资料、参考设计、示例代码和开发文档，让外部开发者可以更快理解与复用。",
      en: "Lygion Open collects public resources, reference designs, sample code, and documentation for external builders."
    }
  }
];

export const products: Product[] = [
  {
    slug: "lg-bus-core",
    module: "bus-devices",
    status: "prototype",
    image: "/assets/products/bus-core.svg",
    name: { zh: "LG-Bus Core 控制网关", en: "LG-Bus Core Gateway" },
    summary: {
      zh: "机器人多总线接入、调试与状态监控的紧凑型网关。",
      en: "A compact gateway for multi-bus access, debugging, and status monitoring."
    },
    description: {
      zh: "适合作为机器人底层设备的统一接入点，聚合执行器、传感器和上位机之间的数据通路。",
      en: "Designed as a unified access point for robot low-level devices, bridging actuators, sensors, and host systems."
    },
    highlights: {
      zh: ["多协议接入预留", "板载状态指示", "适合实验室与产品验证"],
      en: ["Multi-protocol ready", "On-board status indication", "Built for lab and product validation"]
    },
    specs: {
      zh: [
        { label: "定位", value: "总线网关 / 调试设备" },
        { label: "接口", value: "CAN / UART / RS485 预留" },
        { label: "状态", value: "原型 Demo" }
      ],
      en: [
        { label: "Role", value: "Bus gateway / debug device" },
        { label: "I/O", value: "CAN / UART / RS485 ready" },
        { label: "Status", value: "Prototype demo" }
      ]
    }
  },
  {
    slug: "lg-io-bridge",
    module: "bus-devices",
    status: "concept",
    image: "/assets/products/io-bridge.svg",
    name: { zh: "LG-IO Bridge 扩展板", en: "LG-IO Bridge" },
    summary: {
      zh: "用于传感器、按钮、指示灯与外设接入的 I/O 扩展设备。",
      en: "An I/O expansion device for sensors, buttons, indicators, and peripherals."
    },
    description: {
      zh: "面向快速搭建样机和小型控制柜，将常用数字量、模拟量与通信接口整理成统一节点。",
      en: "A unified node for common digital, analog, and communication interfaces in prototypes and compact control cabinets."
    },
    highlights: {
      zh: ["端子化接线", "统一设备地址", "适合快速验证"],
      en: ["Terminal wiring", "Unified device addressing", "Fast validation friendly"]
    },
    specs: {
      zh: [
        { label: "定位", value: "I/O 扩展节点" },
        { label: "接口", value: "DI / DO / ADC / PWM" },
        { label: "状态", value: "概念 Demo" }
      ],
      en: [
        { label: "Role", value: "I/O expansion node" },
        { label: "I/O", value: "DI / DO / ADC / PWM" },
        { label: "Status", value: "Concept demo" }
      ]
    }
  },
  {
    slug: "lg-power-node",
    module: "bus-devices",
    status: "prototype",
    image: "/assets/products/power-node.svg",
    name: { zh: "LG-Power Node 电源节点", en: "LG-Power Node" },
    summary: {
      zh: "用于机器人电源分配、保护与电流监测的紧凑节点。",
      en: "A compact node for robot power distribution, protection, and current monitoring."
    },
    description: {
      zh: "帮助研发团队在早期阶段清晰观察电源状态，并为整机集成提供标准化电源分配方式。",
      en: "Helps teams observe power state early and provides a standardized distribution approach for robot integration."
    },
    highlights: {
      zh: ["分路电流监测", "过流保护预留", "适合移动平台"],
      en: ["Per-channel current monitoring", "Over-current protection ready", "Suitable for mobile platforms"]
    },
    specs: {
      zh: [
        { label: "定位", value: "电源分配节点" },
        { label: "能力", value: "监测 / 保护 / 分配" },
        { label: "状态", value: "原型 Demo" }
      ],
      en: [
        { label: "Role", value: "Power distribution node" },
        { label: "Capability", value: "Monitor / protect / distribute" },
        { label: "Status", value: "Prototype demo" }
      ]
    }
  },
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
    slug: "joint-module-alpha",
    module: "robot-modules",
    status: "concept",
    image: "/assets/products/joint-alpha.svg",
    name: { zh: "Joint Module Alpha", en: "Joint Module Alpha" },
    summary: {
      zh: "面向轻量机器人平台的关节执行模组概念样机。",
      en: "A joint actuation module concept for lightweight robot platforms."
    },
    description: {
      zh: "将执行、驱动、反馈与安装结构打包成独立单元，方便快速组合不同形态机器人。",
      en: "Packages actuation, drive electronics, feedback, and mounting into one unit for fast robot composition."
    },
    highlights: {
      zh: ["模块化机械接口", "统一电气连接", "便于系列化扩展"],
      en: ["Modular mechanical interface", "Unified electrical connection", "Ready for product family expansion"]
    },
    specs: {
      zh: [
        { label: "定位", value: "关节执行模组" },
        { label: "适用", value: "桌面机器人 / 移动机器人" },
        { label: "状态", value: "概念 Demo" }
      ],
      en: [
        { label: "Role", value: "Joint actuation module" },
        { label: "Use", value: "Desktop robots / mobile robots" },
        { label: "Status", value: "Concept demo" }
      ]
    }
  },
  {
    slug: "vision-module-lite",
    module: "robot-modules",
    status: "prototype",
    image: "/assets/products/vision-lite.svg",
    name: { zh: "Vision Module Lite", en: "Vision Module Lite" },
    summary: {
      zh: "用于近距识别、视觉调试与小型机器人感知的视觉模组。",
      en: "A vision module for near-field recognition, visual debugging, and small robot perception."
    },
    description: {
      zh: "集成相机、补光、安装结构和软件接口，适合快速给机器人加入视觉感知能力。",
      en: "Combines camera, lighting, mounting, and software interfaces for quickly adding visual perception."
    },
    highlights: {
      zh: ["标准安装孔位", "补光结构预留", "支持视觉实验"],
      en: ["Standard mounting points", "Lighting-ready structure", "Supports vision experiments"]
    },
    specs: {
      zh: [
        { label: "定位", value: "视觉感知模组" },
        { label: "能力", value: "采集 / 调试 / 识别" },
        { label: "状态", value: "原型 Demo" }
      ],
      en: [
        { label: "Role", value: "Visual perception module" },
        { label: "Capability", value: "Capture / debug / recognize" },
        { label: "Status", value: "Prototype demo" }
      ]
    }
  },
  {
    slug: "compute-carrier-s1",
    module: "robot-modules",
    status: "concept",
    image: "/assets/products/compute-s1.svg",
    name: { zh: "Compute Carrier S1", en: "Compute Carrier S1" },
    summary: {
      zh: "为机器人主控、边缘计算与扩展接口准备的载板概念。",
      en: "A carrier board concept for robot main control, edge compute, and expansion interfaces."
    },
    description: {
      zh: "用于整理计算核心、电源、网络和外设接口，让不同机器人项目复用一致的计算底座。",
      en: "Organizes compute, power, network, and peripheral interfaces into a reusable computing base."
    },
    highlights: {
      zh: ["计算核心可替换", "网络接口集中", "适合边缘推理"],
      en: ["Replaceable compute core", "Centralized network interfaces", "Edge inference friendly"]
    },
    specs: {
      zh: [
        { label: "定位", value: "机器人计算载板" },
        { label: "接口", value: "网络 / USB / 总线预留" },
        { label: "状态", value: "概念 Demo" }
      ],
      en: [
        { label: "Role", value: "Robot compute carrier" },
        { label: "I/O", value: "Network / USB / bus ready" },
        { label: "Status", value: "Concept demo" }
      ]
    }
  },
  {
    slug: "lygion-mobile-base",
    module: "robot-systems",
    status: "prototype",
    image: "/assets/products/mobile-base.svg",
    name: { zh: "Lygion Mobile Base", en: "Lygion Mobile Base" },
    summary: {
      zh: "用于验证导航、感知与上层任务的移动机器人底盘。",
      en: "A mobile robot base for validating navigation, perception, and high-level tasks."
    },
    description: {
      zh: "面向研发验证场景，提供稳定的移动平台基础，方便集成不同传感器和上层应用。",
      en: "A stable mobile platform foundation for R&D validation and integration with sensors and applications."
    },
    highlights: {
      zh: ["标准化扩展位", "适合算法验证", "可连接灵影模组生态"],
      en: ["Standard expansion points", "Algorithm validation friendly", "Connects with the Lygion module ecosystem"]
    },
    specs: {
      zh: [
        { label: "定位", value: "移动机器人整机" },
        { label: "能力", value: "导航 / 感知 / 任务验证" },
        { label: "状态", value: "原型 Demo" }
      ],
      en: [
        { label: "Role", value: "Complete mobile robot" },
        { label: "Capability", value: "Navigation / perception / task validation" },
        { label: "Status", value: "Prototype demo" }
      ]
    }
  },
  {
    slug: "desktop-arm-devkit",
    module: "robot-systems",
    status: "concept",
    image: "/assets/products/desktop-arm.svg",
    name: { zh: "Desktop Arm DevKit", en: "Desktop Arm DevKit" },
    summary: {
      zh: "用于教学、算法验证和桌面操作任务的机械臂开发套件。",
      en: "A robotic arm development kit for education, algorithm validation, and desktop manipulation."
    },
    description: {
      zh: "组合关节模组、控制器和开放软件接口，便于开发者验证抓取、轨迹规划与人机交互。",
      en: "Combines joint modules, controllers, and open software interfaces for grasping, planning, and interaction experiments."
    },
    highlights: {
      zh: ["桌面级体积", "适合教学演示", "开放控制接口"],
      en: ["Desktop footprint", "Education friendly", "Open control interface"]
    },
    specs: {
      zh: [
        { label: "定位", value: "桌面机械臂整机" },
        { label: "能力", value: "抓取 / 规划 / 教学" },
        { label: "状态", value: "概念 Demo" }
      ],
      en: [
        { label: "Role", value: "Desktop robot arm" },
        { label: "Capability", value: "Grasp / plan / teach" },
        { label: "Status", value: "Concept demo" }
      ]
    }
  },
  {
    slug: "inspection-rover",
    module: "robot-systems",
    status: "concept",
    image: "/assets/products/inspection-rover.svg",
    name: { zh: "Inspection Rover", en: "Inspection Rover" },
    summary: {
      zh: "面向巡检、远程观察和移动传感任务的小型机器人平台。",
      en: "A compact robot platform for inspection, remote observation, and mobile sensing."
    },
    description: {
      zh: "为室内外轻量巡检场景准备，可扩展视觉、环境传感和远程控制能力。",
      en: "Prepared for lightweight indoor and outdoor inspection, expandable with vision, environmental sensing, and remote control."
    },
    highlights: {
      zh: ["传感器扩展位", "远程运维预留", "适合巡检原型"],
      en: ["Sensor expansion points", "Remote operation ready", "Inspection prototype friendly"]
    },
    specs: {
      zh: [
        { label: "定位", value: "巡检机器人平台" },
        { label: "能力", value: "移动 / 观察 / 采集" },
        { label: "状态", value: "概念 Demo" }
      ],
      en: [
        { label: "Role", value: "Inspection robot platform" },
        { label: "Capability", value: "Move / observe / collect" },
        { label: "Status", value: "Concept demo" }
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
