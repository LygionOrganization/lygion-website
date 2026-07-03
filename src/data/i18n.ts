export const languages = ["zh", "en"] as const;

export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "zh";

export const languageLabels: Record<Language, string> = {
  zh: "中文",
  en: "EN"
};

export const wikiLinks: Record<Language, string> = {
  zh: "https://wiki.lygion.ai/",
  en: "https://lygionorganization.github.io/lygion-wiki/"
};

export const copy = {
  zh: {
    nav: {
      githubPages: "GitHub Pages",
      wiki: "灵影Wiki",
      busDevices: "总线设备",
      robotModules: "机器人模组",
      robotSystems: "机器人整机",
      lygionOpen: "灵影开源",
      about: "关于我们"
    },
    heroTitle: "简单连接 快速构建",
    heroLead:
      "从总线设备、驱动模组到机器人整机，灵影用标准化硬件和开放资料，帮助机器人团队高效开发。",
    heroPrimary: "探索产品体系",
    heroSecondary: "打开灵影 Wiki",
    modulesTitle: "产品体系",
    featuredTitle: "产品列表",
    details: "查看详情",
    specs: "关键参数",
    highlights: "产品亮点",
    products: "产品列表",
    backHome: "返回首页",
    backModule: "返回模块",
    githubEyebrow: "Lygion GitHub",
    ctaTitle: "SDK 与例程持续更新",
    ctaLead:
      "我们会在灵影 GitHub 仓库中发布产品 SDK、通信协议示例、机器人控制例程和参考工程，帮助开发者更快完成接入与验证。",
    githubButton: "访问 GitHub 仓库",
    contact: "联系 Lygion",
    about: {
      eyebrow: "Lygion Robotics",
      title: "关于灵影",
      lead:
        "灵影专注于机器人基础硬件、模块化执行单元与开源案例，用标准化的总线通信和可复用设计，帮助开发者高效开发各类机器人项目。",
      systemTitle: "从模块到整机的产品体系",
      systemLead:
        "我们的产品规划沿着机器人开发的实用路径展开：底层设备负责稳定连接，功能模组降低集成成本，整机系统验证实际应用，开源项目和例程让机器人组件易于复用。",
      pillars: [
        {
          title: "标准化连接",
          text: "以总线驱动、编码器、适配器和扩展设备，建立稳定、清晰的机器人数据与控制链路。"
        },
        {
          title: "可复用模组",
          text: "把驱动、反馈、机械结构与控制能力整合成模块，缩短机械、电气和软件的联调周期。"
        },
        {
          title: "整机验证",
          text: "围绕移动、操作与任务执行来构建机器人平台，同时简化机器人应用层的集成难度，易于扩展。"
        },
        {
          title: "开放生态",
          text: "持续公开参考设计、开源 SDK、示例代码和开发文档，让开发者能够理解、修改并快速复用。"
        }
      ],
      missionTitle: "让机器人设计更简单",
      missionText:
        "我们相信，可靠的基础硬件、标准化的通信接口和开源的工程资料，能够把团队从繁琐的底层模块开发工作中释放出来，把更多精力投入到机器人应用端开发。",
      contactTitle: "联系我们",
      contactLead:
        "如果你想了解产品、讨论机器人项目或与灵影展开合作，欢迎通过以下邮箱联系我们。",
      emailLabel: "联系邮箱"
    },
    footer: "灵影 Lygion Robotics"
  },
  en: {
    nav: {
      githubPages: "GitHub Pages",
      wiki: "Lygion Wiki",
      busDevices: "Bus Devices",
      robotModules: "Robot Modules",
      robotSystems: "Robot Systems",
      lygionOpen: "Lygion Open",
      about: "About Us"
    },
    heroTitle: "Simple connections. Faster builds.",
    heroLead:
      "From bus devices and drive modules to complete robot platforms, Lygion helps robotics teams build faster with standardized hardware and open resources.",
    heroPrimary: "Explore portfolio",
    heroSecondary: "Open Wiki",
    modulesTitle: "Product System",
    featuredTitle: "Products",
    details: "View details",
    specs: "Key specs",
    highlights: "Highlights",
    products: "Products",
    backHome: "Back home",
    backModule: "Back to module",
    githubEyebrow: "Lygion GitHub",
    ctaTitle: "Updating SDKs and Examples",
    ctaLead:
      "Lygion publishes product SDKs, communication examples, robot control demos, and reference projects on GitHub so developers can integrate and validate faster.",
    githubButton: "Open GitHub Repositories",
    contact: "Contact Lygion",
    about: {
      eyebrow: "Lygion Robotics",
      title: "About Lygion",
      lead:
        "Lygion develops core robotics hardware, modular building blocks, and open-source examples. By combining a standardized bus architecture with reusable designs, we help developers move efficiently from concept to working robot.",
      systemTitle: "From modular building blocks to complete robots",
      systemLead:
        "Our product roadmap reflects how robots are actually built: low-level devices establish a reliable communication backbone, functional modules reduce integration overhead, complete systems prove their value in real applications, and open-source projects make every component easier to adopt and reuse.",
      pillars: [
        {
          title: "Standardized connectivity",
          text: "Bus drivers, encoders, adapters, and expansion devices form a dependable, transparent backbone for robot data and control."
        },
        {
          title: "Reusable modules",
          text: "Actuation, feedback, mechanics, and control come together in ready-to-use modules, cutting the time needed to bring mechanical, electrical, and software systems together."
        },
        {
          title: "Application-ready systems",
          text: "Our robot platforms bring mobility, manipulation, and task execution together while keeping application integration simple and future expansion flexible."
        },
        {
          title: "Open ecosystem",
          text: "We share reference designs, open-source SDKs, sample code, and documentation so developers can understand, adapt, and reuse our work with confidence."
        }
      ],
      missionTitle: "Making robot development simpler",
      missionText:
        "We believe dependable foundational hardware, standardized communication interfaces, and open engineering resources should free teams from reinventing low-level components—so they can spend more time creating valuable robot applications.",
      contactTitle: "Contact Us",
      contactLead:
        "Whether you have a product question, a robotics project in mind, or an idea for collaboration, we would be glad to hear from you.",
      emailLabel: "Email"
    },
    footer: "Lygion Robotics"
  }
} as const;

export function isLanguage(value: string | undefined): value is Language {
  return languages.includes(value as Language);
}
