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
  /** 项目/论文配图（放在 public/photo 或 public/images 下），例如 /photo/xxx.jpg */
  imageSrc?: string;
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
  images?: string[];
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
  /** 科研条目配图，建议放在 public/photo/ 或 public/images/ 下，例如 /photo/xxx.jpg */
  imageSrc?: string;
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
        role: "数智事业部 · 多语言翻译大模型微调与评测（实习生）",
        period: "2026 寒假",
        summary:
          "面向越南语-英语-中文三语翻译与对话场景，基于 Qwen3.0 进行指令微调与对齐优化；负责数据构建、训练配方设计、质量评测与推理侧落地验证。",
        bullets: [
          "数据工程：构建三语平行语料与指令数据（翻译、摘要、纠错、对话），制定清洗/去重/语言检测/长度分桶规则；引入术语库与领域词表，提升专有名词一致性。",
          "训练策略：基于 LoRA/QLoRA 进行高效微调，设计分阶段训练（通用翻译能力 → 领域对齐 → 风格约束），并通过 loss/梯度与样本难度分布诊断数据配方。",
          "对齐与安全：构造偏好数据进行 DPO/对比式对齐（或等效策略），降低幻觉与语言混杂；加入格式约束与可控输出模板，提升可用性。",
          "评测体系：搭建自动化评测流水线（BLEU/COMET/chrF 等 + 人评抽样），覆盖术语一致性、语法流畅性、实体保真与跨语言知识迁移等维度；沉淀可复现的实验记录。",
          "推理与部署：验证量化/混合精度推理可行性，梳理吞吐-延迟-显存权衡，为线上服务提供可落地的推理配置建议。",
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
        imageSrc: "/photo/中国国际大学生创新大赛（上海赛区）铜奖.jpg",
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
        imageSrc: "/photo/RoboMaster国三.jpg",
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
        imageSrc: "/photo/Rokid银奖路演.jpg",
        bullets: [
          "集成 YOLOv8n 与 Qwen2.5-7B，实时推理 25+ FPS，首 token 延迟 <200 ms。",
          "RAG + FastAPI 微服务，将感知结果转为可调度语义。",
        ],
      },
    ],
    research: [
      {
        title: "3DVLN 推理加速：基于 SpatialLM 的拓扑网络机制",
        period: "2025/11 — 至今",
        summary:
          "围绕 3D Vision-Language Navigation（3DVLN）任务的推理效率瓶颈开展研究：在 SpatialLM 框架上引入拓扑网络机制，对场景结构与导航决策进行显式建模，提升推理阶段的信息组织效率与可解释性，并探索端侧部署可行路径。",
        imageSrc: "/photo/BUILD WITHQWEN·GenZ创造者48小时铜奖.jpg",
        bullets: [
          "问题建模：分析 3DVLN 推理链路（视觉编码→语言条件化→地图/记忆→动作决策）的主要耗时与冗余计算来源，明确可优化的结构化信息瓶颈。",
          "拓扑机制：构建环境拓扑图（房间/节点/可达边等）并与语言指令对齐，通过图消息传递/检索式路由将“全量场景特征”压缩为“决策相关子图”，减少无关上下文参与推理。",
          "SpatialLM 适配：在 SpatialLM 的空间表征上叠加拓扑先验，设计轻量的融合模块与缓存策略，降低跨步推理重复计算；支持分段规划与局部重规划。",
          "工程实现：实现可复现训练/推理脚本、可视化调试工具（轨迹、注意力/检索命中、子图选择），用于定位失败案例并迭代模型结构与数据策略。",
          "部署探索：评估量化/裁剪/编译优化等手段对延迟与精度的影响，形成端侧与服务器侧部署的配置建议与边界条件。",
        ],
      },
    ],
    ventures: [
      {
        title: "灵境科技 · Edge3D",
        role: "创始人兼 CEO · 算法架构与商业推进",
        period: "2026 — 至今",
        summary:
          "面向商用四足机器人的边缘三维感知与巡检运行时：以 ToMe3D 为自研算法内核，将高效三维理解能力封装为可跨平台部署的 Edge3D Runtime，并以地下空间巡检作为首个商业化验证场景。",
        imageSrc: "/photo/lingjing-edge3d-field-test.png",
        bullets: [
          "已完成算法基准、地下车库三维重建与真机实验链；推进设备适配、资源档位、日志与任务接口等 Runtime 产品化。",
          "在固定场景实验中，注意力路径 GFLOPs 降低 63.0%，模型前向延迟降低 32.7%；约 30% token 保留时达到 78.58 mIoU。",
          "与上海市人工智能行业协会（SAIA）建立战略共建合作，围绕资本规划、投资人引荐、项目路演与商务协同推进资源对接。",
        ],
      },
      {
        title: "形随 M1 · 智能人体工学工作站",
        role: "发起人 · 产品、算法与市场",
        period: "2026/07 — 至今",
        summary:
          "面向电动升降桌用户的主动人体工学显示系统，通过高度与前后距离两个电动自由度保存、恢复屏幕位置；以可靠复位为基础，本地感知与个体化建议作为可选增量。",
        imageSrc: "/photo/morphwork-adventurex-prototype.jpg",
        bullets: [
          "在 AdventureX 2026 五天开发周期内，完成 RGB-D 感知、状态判断、运动规划与机械执行原型链路，获得主题 C 冠军。",
          "Expo 当天约 70 人体验移动显示原型，约 7–10 人表达明确或潜在付费意向；这些数据作为早期需求线索，而非订单。",
          "下一阶段推进专用两轴机构、10 台 Alpha 共创试用、供应链报价及小规模付费 Beta。",
        ],
      },
      {
        title: "Dream Weaver（梦境记录与分析 Agent）",
        role: "联合创始人 · 产品与技术",
        period: "2025 — 至今",
        summary:
          "参与阿里云中小企业直播，受邀作为嘉宾参与杭州云栖小镇 2050 大会「市场人的“养虾”日记」活动分享；围绕 AI Agent 在内容生产与用户洞察中的落地进行实践与复盘。",
        imageSrc: "/photo/BUILD WITHQWEN·GenZ创造者48小时铜奖.jpg",
        bullets: [
          "在直播与线下活动中分享产品思路、用户增长与落地案例，沉淀可复用的方法论与演示材料。",
          "结合多模态能力与工作流编排，探索从“记录→结构化→洞察→行动建议”的闭环。",
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
        title: "香港科技大学 InnoBay Summer Camp / Bootcamp",
        issuer: "第一名 · Most Innovative Award",
        period: "2026/07/02 — 2026/07/12",
        imageSrc: "/photo/2026-innobay-most-innovative-award.jpg",
        note: "在香港科技大学 Integrative Systems and Design 举办的 InnoBay Bootcamp 中完成创新项目，并获得 Most Innovative Award。",
      },
      {
        title: "香港科技大学（广州）红鸟挑战营",
        issuer: "Offer 待公布",
        period: "2026",
        note: "已参加挑战营，当前处于录取结果待公布状态；获得 Offer 后更新证明材料。",
      },
      {
        title: "AdventureX 2026",
        issuer: "主题 C 冠军",
        period: "2026/07",
        imageSrc: "/photo/2026-adventurex-team-champion.jpg",
        images: [
          "/photo/2026-adventurex-team-champion.jpg",
          "/photo/2026-adventurex-theme-c-trophy.jpg",
        ],
        note: "在五大主题赛道之一的 C 赛道中夺冠；团队在五天内完成主动人体工学显示原型。",
      },
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
        role: "Digital Intelligence Division · Trilingual LLM fine-tuning for translation (Intern)",
        period: "Winter 2026",
        summary:
          "Built a Vietnamese–English–Chinese translation/chat capability on top of Qwen3.0 via instruction fine-tuning and alignment; owned data curation, training recipes, evaluation, and inference-side validation for production readiness.",
        bullets: [
          "Data curation: assembled trilingual parallel + instruction datasets (translation, summarization, correction, dialogue); implemented cleaning/dedup/lang-ID/length bucketing; integrated terminology dictionaries for consistent named entities.",
          "Training recipe: efficient LoRA/QLoRA fine-tuning with staged curriculum (general → domain → style/format constraints); diagnosed data/recipe issues via loss trends and sample difficulty distribution.",
          "Alignment: introduced preference-style supervision (e.g., DPO or equivalent) to reduce hallucinations and code-mixing; enforced controllable output templates for downstream integration.",
          "Evaluation: built an automated eval pipeline (BLEU/COMET/chrF + sampling-based human review) covering terminology consistency, fluency, fidelity, and cross-lingual transfer; ensured reproducibility.",
          "Inference/serving: validated quantization and mixed-precision inference trade-offs; delivered deployable recommendations balancing latency, throughput, and memory.",
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
        imageSrc: "/photo/中国国际大学生创新大赛（上海赛区）铜奖.jpg",
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
        imageSrc: "/photo/RoboMaster国三.jpg",
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
        imageSrc: "/photo/Rokid银奖路演.jpg",
        bullets: [
          "YOLOv8n + Qwen2.5-7B at 25+ FPS; first-token latency under 200 ms.",
          "RAG and FastAPI microservices for schedulable semantics.",
        ],
      },
    ],
    research: [
      {
        title: "3DVLN Inference Acceleration with Topology-aware SpatialLM",
        period: "Nov 2025 — Present",
        summary:
          "Research on 3D Vision-Language Navigation (3DVLN) inference bottlenecks. Built a topology-aware mechanism on top of SpatialLM to explicitly model scene structure and instruction-conditioned routing, improving inference-time efficiency and interpretability, with an eye toward on-device deployment.",
        imageSrc: "/photo/BUILD WITHQWEN·GenZ创造者48小时铜奖.jpg",
        bullets: [
          "Bottleneck analysis: decomposed the 3DVLN inference pipeline and identified redundant computation across steps and overlong context as key constraints.",
          "Topology mechanism: constructed a navigation graph and aligned it with instructions; used message passing / retrieval-style routing to focus on decision-relevant subgraphs rather than full-scene context.",
          "SpatialLM adaptation: added lightweight fusion and caching to reduce per-step recomputation; supported segment planning and local replanning loops.",
          "Tooling: implemented reproducible training/inference scripts and debugging visualizations (trajectories, retrieval hits, subgraph selection) to iterate on failure cases.",
          "Deployment exploration: evaluated quantization/pruning/compilation options and summarized practical latency–memory–accuracy trade-offs for edge vs server deployments.",
        ],
      },
    ],
    ventures: [
      {
        title: "Lingjing Technology · Edge3D",
        role: "Founder & CEO · Algorithm architecture and commercialization",
        period: "2026 — Present",
        summary:
          "An edge 3D perception and inspection runtime for commercial quadruped robots. ToMe3D provides the algorithmic core, Edge3D Runtime packages efficient 3D understanding for cross-platform deployment, and underground-space inspection serves as the first commercialization scenario.",
        imageSrc: "/photo/lingjing-edge3d-field-test.png",
        bullets: [
          "Completed algorithm benchmarks, underground-garage 3D reconstruction, and a real-robot experiment chain; productizing device profiles, resource tiers, logging, and task APIs.",
          "In controlled fixed-scene tests, reduced attention-path GFLOPs by 63.0% and model forward latency by 32.7%; achieved 78.58 mIoU at about 30% token retention.",
          "Established a strategic co-building partnership with the Shanghai Artificial Intelligence Industry Association (SAIA) for capital planning, investor introductions, roadshows, and business coordination.",
        ],
      },
      {
        title: "MorphWork M1 · Active ergonomic workstation",
        role: "Initiator · Product, algorithms, and market",
        period: "Jul 2026 — Present",
        summary:
          "An active ergonomic display system for standing-desk users. Two powered axes save and restore monitor height and viewing distance; reliable recall is the core value, while local sensing and personalized suggestions remain optional.",
        imageSrc: "/photo/morphwork-adventurex-prototype.jpg",
        bullets: [
          "Built an end-to-end RGB-D sensing, state inference, motion planning, and mechanical execution prototype in five days at AdventureX 2026; won Theme C.",
          "About 70 people tried the moving-display prototype at Expo, with roughly 7–10 expressing explicit or potential willingness to pay; treated as early demand signals, not orders.",
          "Next: a dedicated two-axis mechanism, 10 Alpha co-creation units, supplier quotations, and a small paid Beta.",
        ],
      },
      {
        title: "Dream Weaver — Dream journaling & analysis agent",
        role: "Co-founder · Product & engineering",
        period: "2025 — Present",
        summary:
          "Invited speaker at Alibaba Cloud SME livestream and the 2050 conference in Yunqi Town (Hangzhou) for the session “A Marketer’s ‘Shrimp Farming’ Diary”; shared practical learnings on building and shipping an AI agent for content workflows and user insights.",
        imageSrc: "/photo/BUILD WITHQWEN·GenZ创造者48小时铜奖.jpg",
        bullets: [
          "Delivered talks and demo materials for live and in-person events, focusing on product narrative, user growth, and real-world adoption.",
          "Explored an end-to-end agent loop from capture → structuring → insight → actionable recommendations via multimodal reasoning and workflow orchestration.",
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
        title: "HKUST InnoBay Summer Camp / Bootcamp",
        issuer: "First Place · Most Innovative Award",
        period: "Jul 2–12, 2026",
        imageSrc: "/photo/2026-innobay-most-innovative-award.jpg",
        note: "Completed an innovation project in the InnoBay Bootcamp organized by HKUST Integrative Systems and Design and received the Most Innovative Award.",
      },
      {
        title: "HKUST(GZ) Red Bird Challenge Camp",
        issuer: "Offer pending",
        period: "2026",
        note: "Participated in the challenge camp; admission result is pending and supporting materials will be updated after an offer is issued.",
      },
      {
        title: "AdventureX 2026",
        issuer: "Theme C Champion",
        period: "Jul 2026",
        imageSrc: "/photo/2026-adventurex-team-champion.jpg",
        images: [
          "/photo/2026-adventurex-team-champion.jpg",
          "/photo/2026-adventurex-theme-c-trophy.jpg",
        ],
        note: "Won Theme C, one of five themed tracks, after building an active ergonomic display prototype in five days.",
      },
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
