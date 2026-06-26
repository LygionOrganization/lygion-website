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
      wiki: "灵影Wiki",
      busDevices: "总线设备",
      robotModules: "机器人模组",
      robotSystems: "机器人整机",
      lygionOpen: "灵影开源"
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
    footer: "灵影 Lygion Robotics"
  },
  en: {
    nav: {
      wiki: "Lygion Wiki",
      busDevices: "Bus Devices",
      robotModules: "Robot Modules",
      robotSystems: "Robot Systems",
      lygionOpen: "Lygion Open"
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
    footer: "Lygion Robotics"
  }
} as const;

export function isLanguage(value: string | undefined): value is Language {
  return languages.includes(value as Language);
}
