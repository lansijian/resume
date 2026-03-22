export type NavItem = { id: string; label: string };

export type EducationEntry = {
  school: string;
  degree: string;
  period: string;
  details: string[];
  gpa?: string;
};

export type ProjectEntry = {
  title: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
  links?: { label: string; href: string }[];
};

export type AwardEntry = {
  title: string;
  issuer?: string;
  period: string;
  note?: string;
  /** 证书/奖牌图，放在 public/photo/awards/，如 /photo/awards/comp-01.jpg */
  imageSrc?: string;
  role?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type SkillGroup = {
  name: string;
  items: string[];
};

export type PersonalInfo = {
  /** 证件照，public/photo/ 下文件名需与实际一致 */
  photoSrc?: string;
  gender: string;
  age: string;
  phone: string;
  politicalStatus: string;
};

export type CampusEntry = {
  period: string;
  lines: string[];
};

export type ResearchEntry = {
  title: string;
  period: string;
  summary: string;
  bullets: string[];
};

export type CertificateEntry = {
  title: string;
  detail?: string;
};

/** 生活照等非奖项图片，放在 public/photo/life/ */
export type LifePhoto = {
  id: string;
  src: string;
  caption: string;
};

export type SectionBlock = { title: string; subtitle: string };

export type ResumeLabels = {
  navBrand: string;
  viewProjects: string;
  contact: string;
  printPdf: string;
  copyEmail: string;
  copied: string;
  emailLabel: string;
  locationLabel: string;
  phoneLabel: string;
  genderLabel: string;
  ageLabel: string;
  politicalLabel: string;
  footer: string;
  themeLight: string;
  themeDark: string;
  langZh: string;
  langEn: string;
  competitionAwards: string;
  ecosystemAwards: string;
  lifeEmptyHint: string;
};

export type ResumeContent = {
  labels: ResumeLabels;
  sections: {
    education: SectionBlock;
    campus: SectionBlock;
    internship: SectionBlock;
    projects: SectionBlock;
    research: SectionBlock;
    ventures: SectionBlock;
    awards: SectionBlock;
    skills: SectionBlock;
    certificates: SectionBlock;
    life: SectionBlock;
    contact: SectionBlock;
  };
  meta: {
    name: string;
    tagline: string;
    heroSubtitle: string;
  };
  personal: PersonalInfo;
  nav: NavItem[];
  education: EducationEntry[];
  campusExperience: CampusEntry[];
  internships: ProjectEntry[];
  projects: ProjectEntry[];
  research: ResearchEntry[];
  ventures: ProjectEntry[];
  awards: AwardEntry[];
  ecosystemAwards: AwardEntry[];
  skills: SkillGroup[];
  certificates: CertificateEntry[];
  lifePhotos: LifePhoto[];
  contact: {
    email: string;
    phone?: string;
    github?: string;
    linkedin?: string;
    location?: string;
  };
};

export type Locale = "zh" | "en";

/** 奖项与生活照图片均位于 public/photo/，文件名与项目根目录 photo/ 下一致（构建时由脚本同步）。 */

export const resumes: Record<Locale, ResumeContent> = {
  zh: {
    labels: {
      navBrand: "陈庭宇",
      viewProjects: "项目",
      contact: "联系",
      printPdf: "打印 / PDF",
      copyEmail: "复制邮箱",
      copied: "已复制",
      emailLabel: "邮箱",
      locationLabel: "地区",
      phoneLabel: "手机",
      genderLabel: "性别",
      ageLabel: "年龄",
      politicalLabel: "政治面貌",
      footer: "陈庭宇 · 个人简历 · 与纸质材料保持一致",
      themeLight: "日间",
      themeDark: "夜间",
      langZh: "中",
      langEn: "EN",
      competitionAwards: "竞赛奖项",
      ecosystemAwards: "生态经历与奖项",
      lifeEmptyHint:
        "将生活照放入 public/photo/life/，并在本文件 lifePhotos 中填写路径与说明。",
    },
    sections: {
      education: { title: "教育背景", subtitle: "Education" },
      campus: { title: "在校经历", subtitle: "Campus" },
      internship: { title: "实习经历", subtitle: "Internship" },
      projects: { title: "项目经验", subtitle: "Projects" },
      research: { title: "科研经历", subtitle: "Research" },
      ventures: { title: "创业尝试", subtitle: "Ventures" },
      awards: { title: "荣誉与奖项", subtitle: "Honors" },
      skills: { title: "技能", subtitle: "Skills" },
      certificates: { title: "证书", subtitle: "Certificates" },
      life: { title: "生活与经历", subtitle: "Life" },
      contact: { title: "联系", subtitle: "Contact" },
    },
    meta: {
      name: "陈庭宇",
      tagline: "东华大学 · 人工智能 · 本科（211）",
      heroSubtitle:
        "聚焦多模态大模型（VLM）推理加速与端侧部署；熟悉 C/C++、Python、Linux/ROS2 全栈开发，具备 SLAM、目标检测、嵌入式与 RoboMaster 等工程经验。",
    },
    personal: {
      photoSrc: "/photo/证件照2 3：4.jpg",
      gender: "男",
      age: "20",
      phone: "18982345527",
      politicalStatus: "预备党员",
    },
    nav: [
      { id: "hero", label: "首页" },
      { id: "education", label: "教育" },
      { id: "campus", label: "在校" },
      { id: "internship", label: "实习" },
      { id: "projects", label: "项目" },
      { id: "research", label: "科研" },
      { id: "ventures", label: "创业" },
      { id: "awards", label: "荣誉" },
      { id: "skills", label: "技能" },
      { id: "certificates", label: "证书" },
      { id: "life", label: "生活" },
      { id: "contact", label: "联系" },
    ],
    education: [
      {
        school: "东华大学（211）",
        degree: "本科 · 人工智能专业",
        period: "2023/09 — 2027/06（预计）",
        details: [
          "研究方向：多模态大模型（VLM）推理与部署，基于 3DR1 等框架的模型压缩与高效推理。",
          "全栈能力：C/C++、Python、Linux/ROS2；熟悉 Fast-LIO2 SLAM、YOLO/RT-DETR 目标检测，PyTorch 训练/剪枝/量化，EGO-Planner 路径规划与嵌入式部署。",
          "工程场景：多机无人机编队、RoboMaster 等机器人系统实践。",
        ],
      },
    ],
    campusExperience: [
      {
        period: "2023/11 — 至今",
        lines: [
          "东华大学人工智能创新实验室 副社长",
          "东华大学机器人战队「DIODE」视觉组组长",
        ],
      },
    ],
    internships: [
      {
        title: "中国移动「梧桐鸿浩」2026 研学冬令营暨寒假线上实习",
        role: "数智事业部 · 多模态多语言翻译大模型关键技术研究（实习生）",
        period: "2026 寒假",
        summary:
          "参与中国移动数智事业部多模态多语言翻译大模型方向：开展训练与微调关键技术研究、跨语言知识迁移、翻译质量提升等。",
        bullets: [
          "数据准备：术语库构建，文本、语音语料构建等。",
          "质量评测：模型多维度质量评测。",
        ],
      },
    ],
    projects: [
      {
        title: "中国国际「互联网+」大赛 / 2025 国家级大学生创新训练项目负责人",
        role: "负责人",
        period: "2024/04 — 2026/05",
        summary:
          "基于 ROS 的多无人机编队搜救仿真系统，集成高精度定位、实时检测与机间通信。",
        bullets: [
          "搭建多机协同仿真链路，完成目标锁定与坐标广播协议设计。",
          "部署剪枝后的 YOLOv11，输入 1280×720，单帧推理 <50 ms。",
          "结合高精度 GPS 与视觉，实现动态跟踪与编队调度。",
        ],
      },
      {
        title: "RoboMaster 自瞄系统开发（步兵 / 哨兵）",
        role: "组长",
        period: "2024/09 — 2026/06",
        summary: "基于 ROS2 与单目相机的自动瞄准与测距，融合传统视觉与深度学习。",
        bullets: [
          "PnP 解算测距；装甲板识别召回率由约 65% 提升至约 91%。",
          "卡尔曼滤波将 RMS 误差由约 12 cm 降至约 4 cm；自研抗陀螺算法，响应时间由约 1.8 s 降至约 0.6 s。",
        ],
      },
      {
        title: "HubGuard（基于 MindSpore Traffic Hub）",
        role: "核心开发",
        period: "2025/10 — 2026/03",
        summary: "在华为昇腾 910B NPU 上部署视觉与大模型联合推理的交通枢纽智能系统。",
        bullets: [
          "集成 YOLOv8n 与 Qwen2.5-7B，实时推理 25+ FPS，首 token 延迟 <200 ms。",
          "RAG + FastAPI 微服务，将感知结果转为可调度语义。",
        ],
      },
    ],
    research: [
      {
        title: "多模态大模型（VLM）高效推理与部署",
        period: "2025/11 — 至今",
        summary:
          "面向边缘与资源受限场景的推理与部署研究；相关成果已整理为 1 篇 IEEE/RAS IROS 第一作者论文，目前在投。",
        bullets: [
          "围绕多模态推理管线与端侧部署开展工程化实验。",
          "关注延迟、显存占用与精度之间的权衡。",
        ],
      },
    ],
    ventures: [
      {
        title: "Dream Weaver（梦境记录与分析 Agent）",
        role: "联合创始人 · 产品与技术",
        period: "2025 — 至今",
        summary:
          "基于阿里云百炼构建的梦境记录与心理解读产品；持续迭代多模态分析与可视化能力。",
        bullets: [
          "获即将召开的千问大会展示资格。",
          "将接受阿里云官方采访报道。",
        ],
      },
      {
        title: "「星璃计划」—— AI 驱动的国风科幻虚拟偶像",
        role: "发起人",
        period: "2025 — 2026",
        summary:
          "融合国风美学与科幻叙事的虚拟偶像企划，探索大模型在角色塑造与互动中的落地。",
        bullets: [
          "入围 2026 全球开发者先锋大会 · SE 超级个体创业实战大赛初赛。",
        ],
      },
    ],
    awards: [
      {
        title: "第十七届全国三维数字化创新设计大赛",
        issuer: "国赛二等奖",
        period: "2025/06",
        imageSrc: "/photo/第十七届全国三维数字化创新设计大赛国二.jpg",
      },
      {
        title: "RoboMaster 机甲大师超级对抗赛",
        issuer: "全国三等奖",
        period: "2025/08",
        imageSrc: "/photo/RoboMaster国三.jpg",
      },
      {
        title: "RoboCup 机器人世界杯中国赛",
        issuer: "全国三等奖",
        period: "2025/10",
        imageSrc: "/photo/robocup国三.png",
      },
      {
        title: "中国国际大学生创新大赛（上海赛区）",
        issuer: "铜奖",
        period: "2024/11",
        imageSrc: "/photo/中国国际大学生创新大赛（上海赛区）铜奖.jpg",
      },
      {
        title: "RoboMaster 高校联盟赛（上海站）",
        issuer: "二等奖",
        period: "2025/03",
        imageSrc: "/photo/RoboMaster上海站二等奖.jpg",
      },
      {
        title: "全国大学生工程实践与创新能力大赛（上海赛区）",
        issuer: "一等奖",
        period: "2025/03",
        imageSrc: "/photo/工创赛上海一等奖.jpg",
      },
      {
        title: "全球校园人工智能算法精英大赛",
        issuer: "二等奖",
        period: "2024/11",
        imageSrc: "/photo/算法1.png",
      },
    ],
    ecosystemAwards: [
      {
        title: "Rokid Spatial Joy 2025 全球 AR&AI 开发者大赛 · AI 赛道",
        issuer: "银奖",
        period: "2025/11 — 2026/01",
        imageSrc: "/photo/Rokid银奖.jpeg",
        note: "项目：FoodMap-AI（ASR、知识库、MCP 插件、TTS 等）",
      },
      {
        title: "深圳科创学院第一届「极客营」·「钢铁瞎」",
        role: "算法负责人",
        issuer: "炼金术士奖（代表海外最受欢迎）",
        period: "2025/08",
        imageSrc: "/photo/深圳科创学院炼金术士奖项.jpg",
        note: "涵道导盲系统：双目相机深度避障相关开发。",
        bullets: [
          "负责双目深度避障模块设计与实现。",
          "与队友共同获得「炼金术士」奖项（代表海外最受欢迎）。",
        ],
      },
      {
        title: "BUILD WITH QWEN · GenZ 创造者 48 小时 · Dream Weaver",
        issuer: "铜奖",
        period: "2026/01",
        imageSrc: "/photo/BUILD WITHQWEN·GenZ创造者48小时铜奖.jpg",
        paragraphs: [
          "梦境记录与分析 Agent：在阿里云百炼支持下，实现 AI 自动分析梦境象征意义，约 10 秒内完成专业心理学解读；自动生成梦境意象图，智能发现梦境之间的关联，支持主题统计与情绪追踪，以及完整的数据导出。",
        ],
      },
    ],
    skills: [
      {
        name: "编程与平台",
        items: ["C/C++", "Python", "Linux", "ROS2", "PyTorch", "MindSpore"],
      },
      {
        name: "算法与视觉",
        items: [
          "SLAM（Fast-LIO2）",
          "YOLO / RT-DETR",
          "模型训练 / 剪枝 / 量化",
          "路径规划（EGO-Planner）",
        ],
      },
      {
        name: "语言",
        items: ["中文", "English"],
      },
    ],
    certificates: [
      { title: "CET-4", detail: "529" },
      {
        title: "软件著作权",
        detail: "《无人机自主飞行算法控制系统 V1.0》第二作者",
      },
    ],
    lifePhotos: [
      {
        id: "life-rm",
        src: "/photo/RoboMaster赛场照片.jpg",
        caption: "RoboMaster 赛场记录",
      },
      {
        id: "life-rm-group",
        src: "/photo/RoboMaster超级对抗赛合影.jpg",
        caption: "RoboMaster 超级对抗赛 · 合影",
      },
      {
        id: "life-innox",
        src: "/photo/深圳科创学院照片.jpg",
        caption: "深圳科创学院活动留影",
      },
      {
        id: "life-rokid-roadshow",
        src: "/photo/Rokid银奖路演.jpg",
        caption: "Rokid 银奖 · 路演记录",
      },
    ],
    contact: {
      email: "2033374848@qq.com",
      phone: "18982345527",
      location: "中国 · 上海",
      github: "https://github.com/lansijian",
    },
  },
  en: {
    labels: {
      navBrand: "Chen Tingyu",
      viewProjects: "Projects",
      contact: "Contact",
      printPdf: "Print / PDF",
      copyEmail: "Copy email",
      copied: "Copied",
      emailLabel: "Email",
      locationLabel: "Location",
      phoneLabel: "Phone",
      genderLabel: "Gender",
      ageLabel: "Age",
      politicalLabel: "Status",
      footer: "Chen Tingyu · Résumé · Consistent with PDF/CV",
      themeLight: "Light",
      themeDark: "Dark",
      langZh: "中",
      langEn: "EN",
      competitionAwards: "Competition",
      ecosystemAwards: "Ecosystem & activities",
      lifeEmptyHint:
        "Add images under public/photo/life/ and list them in lifePhotos in this file.",
    },
    sections: {
      education: { title: "Education", subtitle: "Background" },
      campus: { title: "Campus", subtitle: "Leadership" },
      internship: { title: "Internship", subtitle: "Industry" },
      projects: { title: "Projects", subtitle: "Experience" },
      research: { title: "Research", subtitle: "Focus" },
      ventures: { title: "Entrepreneurship", subtitle: "Ventures" },
      awards: { title: "Honors & Awards", subtitle: "Recognition" },
      skills: { title: "Skills", subtitle: "Stack" },
      certificates: { title: "Certificates", subtitle: "Credentials" },
      life: { title: "Life & moments", subtitle: "Beyond work" },
      contact: { title: "Contact", subtitle: "Reach out" },
    },
    meta: {
      name: "Chen Tingyu",
      tagline: "Donghua University · B.Sc. Artificial Intelligence (Project 211)",
      heroSubtitle:
        "VLM inference acceleration and on-device deployment; full-stack C/C++, Python, Linux/ROS2; SLAM, object detection, embedded systems, and RoboMaster experience.",
    },
    personal: {
      photoSrc: "/photo/证件照2 3：4.jpg",
      gender: "Male",
      age: "20",
      phone: "18982345527",
      politicalStatus: "Probationary CPC Member",
    },
    nav: [
      { id: "hero", label: "Home" },
      { id: "education", label: "Education" },
      { id: "campus", label: "Campus" },
      { id: "internship", label: "Internship" },
      { id: "projects", label: "Projects" },
      { id: "research", label: "Research" },
      { id: "ventures", label: "Ventures" },
      { id: "awards", label: "Awards" },
      { id: "skills", label: "Skills" },
      { id: "certificates", label: "Certs" },
      { id: "life", label: "Life" },
      { id: "contact", label: "Contact" },
    ],
    education: [
      {
        school: "Donghua University (Project 211)",
        degree: "B.Sc. in Artificial Intelligence",
        period: "Sep 2023 — Jun 2027 (expected)",
        details: [
          "Research: efficient inference and deployment of vision-language models (VLM), compression and deployment with frameworks such as 3DR1.",
          "Stack: C/C++, Python, Linux/ROS2; Fast-LIO2 SLAM, YOLO/RT-DETR, PyTorch training/pruning/quantization, EGO-Planner, embedded deployment.",
          "Applications: multi-UAV coordination, RoboMaster, and related robotics projects.",
        ],
      },
    ],
    campusExperience: [
      {
        period: "Nov 2023 — Present",
        lines: [
          "Vice President, Donghua University AI Innovation Lab.",
          "Vision Lead, DIODE RoboMaster team.",
        ],
      },
    ],
    internships: [
      {
        title:
          "China Mobile \"Wutong Honghao\" 2026 Research Winter Camp & Winter Online Internship",
        role: "Digital Intelligence Division · Multimodal multilingual translation LLM R&D (Intern)",
        period: "Winter 2026",
        summary:
          "Multimodal multilingual translation LLM research: training & fine-tuning, cross-lingual knowledge transfer, and translation quality improvement.",
        bullets: [
          "Data preparation: terminology resources; text and speech corpus construction.",
          "Quality evaluation: multi-dimensional model evaluation.",
        ],
      },
    ],
    projects: [
      {
        title:
          "China International \"Internet+\" / 2025 National Undergraduate Innovation Program (Lead)",
        role: "Project Lead",
        period: "Apr 2024 — May 2026",
        summary:
          "Multi-UAV search-and-rescue simulation on ROS with positioning, detection, and inter-drone communication.",
        bullets: [
          "Built coordination pipeline with target locking and coordinate broadcast.",
          "Deployed pruned YOLOv11 at 1280×720, inference under 50 ms per frame.",
          "Integrated high-precision GPS with vision for tracking and formation.",
        ],
      },
      {
        title: "RoboMaster Auto-Aim (Infantry & Sentry)",
        role: "Lead",
        period: "Sep 2024 — Jun 2026",
        summary: "ROS2-based auto-aim with monocular PnP ranging; fusion of classical vision and deep learning.",
        bullets: [
          "Armor recall improved from ~65% to ~91%.",
          "Kalman filtering reduced RMS error from ~12 cm to ~4 cm; anti-spin logic cut response time from ~1.8 s to ~0.6 s.",
        ],
      },
      {
        title: "HubGuard (MindSpore Traffic Hub)",
        role: "Core Developer",
        period: "Oct 2025 — Mar 2026",
        summary: "Joint vision and LLM inference on Huawei Ascend 910B for hub intelligence.",
        bullets: [
          "YOLOv8n + Qwen2.5-7B at 25+ FPS; first-token latency under 200 ms.",
          "RAG and FastAPI microservices for schedulable semantics.",
        ],
      },
    ],
    research: [
      {
        title: "Efficient VLM Inference & Deployment",
        period: "Nov 2025 — Present",
        summary:
          "Inference and deployment under edge constraints; consolidated into one first-author IEEE/RAS IROS paper, currently under review.",
        bullets: [
          "Engineering experiments on multimodal inference pipelines and on-device deployment.",
          "Trade-offs among latency, memory, and accuracy.",
        ],
      },
    ],
    ventures: [
      {
        title: "Dream Weaver — Dream journaling & analysis agent",
        role: "Co-founder · Product & engineering",
        period: "2025 — Present",
        summary:
          "Dream recording and psychology-style interpretation on Alibaba Cloud Bailian; iterating multimodal analysis and visualization.",
        bullets: [
          "Selected for showcase at the upcoming Qwen Conference.",
          "Scheduled interview coverage with Alibaba Cloud.",
        ],
      },
      {
        title: "「星璃计划」 Xing Li — AI-driven Guofeng sci-fi virtual idol",
        role: "Founder",
        period: "2025 — 2026",
        summary:
          "A virtual-idol project blending Chinese aesthetics and sci-fi narrative; exploring LLM-based character and interaction design.",
        bullets: [
          "Advanced to the preliminary round of the 2026 Global Developer Pioneer Conference · SE Super-Individual Entrepreneurship Challenge.",
        ],
      },
    ],
    awards: [
      {
        title: "17th National 3D Digitization Innovation Design Contest",
        issuer: "National Second Prize",
        period: "Jun 2025",
        imageSrc: "/photo/第十七届全国三维数字化创新设计大赛国二.jpg",
      },
      {
        title: "RoboMaster University Championship",
        issuer: "National Third Prize",
        period: "Aug 2025",
        imageSrc: "/photo/RoboMaster国三.jpg",
      },
      {
        title: "China Robot Competition & RoboCup China Open",
        issuer: "National Third Prize",
        period: "Oct 2025",
        imageSrc: "/photo/robocup国三.png",
      },
      {
        title: "China International College Students' Innovation Competition (Shanghai)",
        issuer: "Bronze Award",
        period: "Nov 2024",
        imageSrc: "/photo/中国国际大学生创新大赛（上海赛区）铜奖.jpg",
      },
      {
        title: "RoboMaster University League (Shanghai)",
        issuer: "Second Prize",
        period: "Mar 2025",
        imageSrc: "/photo/RoboMaster上海站二等奖.jpg",
      },
      {
        title: "National Undergraduate Engineering Training & Innovation (Shanghai)",
        issuer: "First Prize",
        period: "Mar 2025",
        imageSrc: "/photo/工创赛上海一等奖.jpg",
      },
      {
        title: "Global Campus AI Algorithm Elite Competition",
        issuer: "Second Prize",
        period: "Nov 2024",
        imageSrc: "/photo/算法1.png",
      },
    ],
    ecosystemAwards: [
      {
        title: "Rokid Spatial Joy 2025 Global AR & AI Developer Contest · AI Track",
        issuer: "Silver Award",
        period: "Nov 2025 — Jan 2026",
        imageSrc: "/photo/Rokid银奖.jpeg",
        note: "FoodMap-AI (ASR, knowledge base, MCP plugins, TTS)",
      },
      {
        title: "Shenzhen Academy of Innovation · 1st Geek Camp · Team \"钢铁瞎\"",
        role: "Algorithm Lead",
        issuer: "Alchemist Award (Most Popular Overseas)",
        period: "2025/08",
        imageSrc: "/photo/深圳科创学院炼金术士奖项.jpg",
        note: "Ducted-fan guide-dog system: binocular depth obstacle avoidance.",
        bullets: [
          "Led depth-avoidance module design and implementation.",
          "Won the Alchemist Award (most popular overseas) with teammates.",
        ],
      },
      {
        title: "BUILD WITH QWEN · GenZ Creator 48h · Dream Weaver",
        issuer: "Bronze Award",
        period: "2026/01",
        imageSrc: "/photo/BUILD WITHQWEN·GenZ创造者48小时铜奖.jpg",
        paragraphs: [
          "Dream journaling & analysis agent: with Alibaba Cloud Bailian, AI analyzes dream symbolism in ~10s with psychology-style interpretation; auto dream imagery, cross-dream linkage, theme & mood tracking, and full data export.",
        ],
      },
    ],
    skills: [
      {
        name: "Languages & Platforms",
        items: ["C/C++", "Python", "Linux", "ROS2", "PyTorch", "MindSpore"],
      },
      {
        name: "Algorithms & Vision",
        items: [
          "SLAM (Fast-LIO2)",
          "YOLO / RT-DETR",
          "Training / pruning / quantization",
          "EGO-Planner",
        ],
      },
      {
        name: "Languages",
        items: ["Chinese", "English (see CET-4)"],
      },
    ],
    certificates: [
      { title: "CET-4", detail: "529" },
      {
        title: "Software copyright",
        detail: "UAV Autonomous Flight Algorithm Control System V1.0 (second author)",
      },
    ],
    lifePhotos: [
      {
        id: "life-rm",
        src: "/photo/RoboMaster赛场照片.jpg",
        caption: "RoboMaster — field photos",
      },
      {
        id: "life-rm-group",
        src: "/photo/RoboMaster超级对抗赛合影.jpg",
        caption: "RoboMaster Super Competition — team photo",
      },
      {
        id: "life-innox",
        src: "/photo/深圳科创学院照片.jpg",
        caption: "Shenzhen Academy of Innovation — campus moments",
      },
      {
        id: "life-rokid-roadshow",
        src: "/photo/Rokid银奖路演.jpg",
        caption: "Rokid — silver award roadshow",
      },
    ],
    contact: {
      email: "2033374848@qq.com",
      phone: "18982345527",
      location: "Shanghai, China",
      github: "https://github.com/lansijian",
    },
  },
};

export function getResume(locale: Locale): ResumeContent {
  return resumes[locale];
}
