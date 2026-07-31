import { getResume, type AwardEntry, type ProjectEntry } from "./content/resume";
import { usePreferences } from "./preferences";
import { useActiveSection } from "./hooks/useActiveSection";
import { publicAssetUrl } from "./utils/publicAssetUrl";
import { ParticleField } from "./components/ParticleField";

const SECTION_IDS = [
  "hero",
  "profile",
  "work",
  "ventures",
  "honors",
  "experience",
  "skills",
  "contact",
] as const;

type Locale = "zh" | "en";

const copy = {
  zh: {
    nav: ["首页", "档案", "项目", "创业", "荣誉", "经历", "技能", "联系"],
    eyebrow: "AI × ROBOTICS × VENTURES",
    availability: "上海 / 面向全球协作",
    intro: "个人档案",
    introKicker: "PROFILE / 01",
    work: "工程与研究",
    workKicker: "SELECTED WORK / 02",
    ventures: "正在构建",
    venturesKicker: "VENTURES / 03",
    venturesLead: "从算法验证到真实世界交付。三个项目，三种尺度。",
    honors: "荣誉与现场",
    honorsKicker: "RECOGNITION / 04",
    experience: "教育与经历",
    experienceKicker: "EXPERIENCE / 05",
    skills: "能力栈",
    skillsKicker: "TOOLKIT / 06",
    contact: "一起做点有意思的事",
    contactKicker: "CONTACT / 07",
    contactLead: "对具身智能、机器人系统、VLM 推理与早期创业合作保持开放。",
    selected: "重点记录",
    archive: "完整荣誉档案",
    projects: "项目与研究",
    internship: "实习",
    campus: "校内角色",
    education: "教育",
    status: "STATUS",
    present: "PRESENT",
    light: "切换至夜间",
    dark: "切换至日间",
    language: "EN",
    scroll: "向下探索",
    built: "Designed as a living portfolio · 2026",
  },
  en: {
    nav: ["Home", "Profile", "Work", "Ventures", "Honors", "Experience", "Skills", "Contact"],
    eyebrow: "AI × ROBOTICS × VENTURES",
    availability: "Shanghai / Open to global collaboration",
    intro: "Profile",
    introKicker: "PROFILE / 01",
    work: "Engineering & Research",
    workKicker: "SELECTED WORK / 02",
    ventures: "Building Now",
    venturesKicker: "VENTURES / 03",
    venturesLead: "From validated algorithms to delivery in the physical world. Three projects, three scales.",
    honors: "Recognition & Field Notes",
    honorsKicker: "RECOGNITION / 04",
    experience: "Education & Experience",
    experienceKicker: "EXPERIENCE / 05",
    skills: "Toolkit",
    skillsKicker: "TOOLKIT / 06",
    contact: "Let’s build something that matters",
    contactKicker: "CONTACT / 07",
    contactLead: "Open to collaboration across embodied AI, robotics systems, VLM inference, and early-stage ventures.",
    selected: "Featured",
    archive: "Full recognition archive",
    projects: "Projects & research",
    internship: "Internship",
    campus: "Campus roles",
    education: "Education",
    status: "STATUS",
    present: "PRESENT",
    light: "Switch to night",
    dark: "Switch to day",
    language: "中",
    scroll: "Explore",
    built: "Designed as a living portfolio · 2026",
  },
} satisfies Record<Locale, Record<string, string | string[]>>;

function SectionHeading({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2>{title}</h2>
      </div>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </div>
  );
}

function Media({ src, alt, className = "" }: { src?: string; alt: string; className?: string }) {
  if (!src) return null;
  return <img className={className} src={publicAssetUrl(src)} alt={alt} loading="lazy" />;
}

function WorkCard({ entry, index }: { entry: ProjectEntry; index: number }) {
  return (
    <article className={`work-card ${entry.imageSrc ? "has-media" : "is-text-only"}`}>
      {entry.imageSrc ? (
        <div className="work-media">
          <Media src={entry.imageSrc} alt={entry.title} />
          <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
        </div>
      ) : (
        <div className="work-signal" aria-hidden="true">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>RESEARCH<br />IN REVIEW</strong>
        </div>
      )}
      <div className="work-copy">
        <div className="meta-row">
          <span>{entry.role}</span>
          <span>{entry.period}</span>
        </div>
        <h3>{entry.title}</h3>
        <p className="summary">{entry.summary}</p>
        <ul>
          {entry.bullets.slice(0, 3).map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function VentureCard({ entry, index }: { entry: ProjectEntry; index: number }) {
  return (
    <article className={`venture-card venture-${index + 1}`}>
      <div className="venture-visual">
        <Media src={entry.imageSrc} alt={entry.title} />
        <span className="venture-number">0{index + 1}</span>
      </div>
      <div className="venture-copy">
        <div className="meta-row">
          <span>{entry.role}</span>
          <span>{entry.period}</span>
        </div>
        <h3>{entry.title}</h3>
        <p className="summary">{entry.summary}</p>
        <ul>
          {entry.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function awardImages(award: AwardEntry) {
  if (award.images?.length) return award.images;
  return award.imageSrc ? [award.imageSrc] : [];
}

function FeaturedAward({ award, index }: { award: AwardEntry; index: number }) {
  const images = awardImages(award);
  return (
    <article className={`award-feature ${images.length === 0 ? "is-text-only" : ""}`}>
      {images.length ? (
        <div className={`award-media image-count-${images.length}`}>
          {images.map((src, imageIndex) => (
            <Media key={src} src={src} alt={`${award.title} ${imageIndex + 1}`} />
          ))}
        </div>
      ) : (
        <div className="award-placeholder" aria-hidden="true">
          <span>RESULT</span>
          <strong>PENDING</strong>
        </div>
      )}
      <div className="award-copy">
        <p className="award-count">0{index + 1}</p>
        <div>
          <p className="award-period">{award.period}</p>
          <h3>{award.title}</h3>
          <p className="award-prize">{award.issuer}</p>
          {award.note ? <p className="award-note">{award.note}</p> : null}
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const { locale, theme, setTheme, setLocale } = usePreferences();
  const resume = getResume(locale);
  const t = copy[locale];
  const activeId = useActiveSection([...SECTION_IDS]);
  const selectedWork: ProjectEntry[] = [
    ...resume.projects,
    ...resume.research.map((item) => ({ ...item, role: locale === "zh" ? "科研项目" : "Research" })),
  ];
  const allAwards = [...resume.ecosystemAwards, ...resume.awards];
  const featuredAwards = resume.ecosystemAwards.slice(0, 3);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="portfolio-shell">
      <div className="ambient-grain" aria-hidden="true" />
      <ParticleField theme={theme} />
      <div className="theme-surprise" aria-hidden="true">
        <span className="desk-fragment desk-fragment-one" />
        <span className="desk-fragment desk-fragment-two" />
        <span className="surprise-word" />
      </div>

      <header className="topbar no-print">
        <button className="monogram" type="button" onClick={() => scrollTo("hero")} aria-label="Home">
          CTY<span>°</span>
        </button>
        <nav aria-label="Primary navigation">
          {SECTION_IDS.map((id, index) => (
            <button
              key={id}
              type="button"
              className={activeId === id ? "active" : ""}
              onClick={() => scrollTo(id)}
            >
              {t.nav[index]}
            </button>
          ))}
        </nav>
        <div className="top-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={theme === "dark" ? t.dark : t.light}
          >
            <span className="toggle-track">
              <span className="toggle-dot" />
            </span>
            <span>{theme === "dark" ? "NIGHT" : "DAY"}</span>
          </button>
          <button className="language-toggle" type="button" onClick={() => setLocale(locale === "zh" ? "en" : "zh")}>
            {t.language}
          </button>
        </div>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-topline">
                <span>{t.eyebrow}</span>
                <span>{t.availability}</span>
              </div>
              <p className="hero-status">
                <span className="status-pulse" />
                {t.status} / {t.present}
              </p>
              <h1>
                <span>{locale === "zh" ? "陈庭宇" : "CHEN"}</span>
                <span className="outline-name">{locale === "zh" ? "TINGYU" : "TINGYU"}</span>
              </h1>
              <p className="hero-tagline">{resume.meta.tagline}</p>
              <p className="hero-subtitle">{resume.meta.heroSubtitle}</p>
              <div className="hero-cta">
                <button type="button" onClick={() => scrollTo("ventures")}>
                  {t.ventures}
                  <span>↘</span>
                </button>
                <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
              </div>
            </div>

            <div className="portrait-block">
              <div className="portrait-frame">
                <Media src={resume.personal.photoSrc} alt={resume.meta.name} />
                <span className="portrait-scanline" />
              </div>
              <div className="portrait-meta">
                <span>23.1136° N</span>
                <span>113.3245° E</span>
              </div>
            </div>
          </div>

          <div className="hero-footer">
            <div className="metric">
              <strong>{String(allAwards.length).padStart(2, "0")}</strong>
              <span>{locale === "zh" ? "荣誉与奖项" : "honors & awards"}</span>
            </div>
            <div className="metric">
              <strong>{String(resume.ventures.length).padStart(2, "0")}</strong>
              <span>{locale === "zh" ? "在建项目" : "active ventures"}</span>
            </div>
            <div className="metric">
              <strong>{String(selectedWork.length).padStart(2, "0")}</strong>
              <span>{locale === "zh" ? "工程与研究" : "engineering & research"}</span>
            </div>
            <button className="scroll-cue" type="button" onClick={() => scrollTo("profile")}>
              {t.scroll} <span>↓</span>
            </button>
          </div>
        </section>

        <section id="profile" className="content-section profile-section">
          <SectionHeading kicker={t.introKicker} title={t.intro} />
          <div className="profile-grid">
            <p className="profile-statement">{resume.meta.heroSubtitle}</p>
            <div className="profile-facts">
              <div>
                <span>{locale === "zh" ? "当前方向" : "CURRENT FOCUS"}</span>
                <strong>Embodied AI / Edge 3D / VLM</strong>
              </div>
              <div>
                <span>{locale === "zh" ? "所在城市" : "BASED IN"}</span>
                <strong>{resume.contact.location}</strong>
              </div>
              <div>
                <span>{locale === "zh" ? "校内角色" : "CAMPUS ROLES"}</span>
                <strong>{resume.campusExperience[0]?.lines.join(" · ")}</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="content-section work-section">
          <SectionHeading kicker={t.workKicker} title={t.work} lead={t.projects} />
          <div className="work-list">
            {selectedWork.map((entry, index) => (
              <WorkCard key={`${entry.title}-${entry.period}`} entry={entry} index={index} />
            ))}
          </div>
        </section>

        <section id="ventures" className="content-section ventures-section">
          <SectionHeading kicker={t.venturesKicker} title={t.ventures} lead={t.venturesLead} />
          <div className="venture-list">
            {resume.ventures.map((entry, index) => (
              <VentureCard key={`${entry.title}-${entry.period}`} entry={entry} index={index} />
            ))}
          </div>
        </section>

        <section id="honors" className="content-section honors-section">
          <SectionHeading kicker={t.honorsKicker} title={t.honors} lead={t.selected} />
          <div className="featured-awards">
            {featuredAwards.map((award, index) => (
              <FeaturedAward key={`${award.title}-${award.period}`} award={award} index={index} />
            ))}
          </div>
          <div className="award-archive">
            <p className="archive-title">{t.archive}</p>
            {allAwards.slice(3).map((award, index) => (
              <article key={`${award.title}-${award.period}`} className="award-row">
                <span>{String(index + 4).padStart(2, "0")}</span>
                <p>{award.period}</p>
                <h3>{award.title}</h3>
                <strong>{award.issuer}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section experience-section">
          <SectionHeading kicker={t.experienceKicker} title={t.experience} />
          <div className="experience-grid">
            <div className="experience-column">
              <p className="column-label">{t.education}</p>
              {resume.education.map((item) => (
                <article className="timeline-item" key={`${item.school}-${item.period}`}>
                  <p>{item.period}</p>
                  <h3>{item.school}</h3>
                  <strong>{item.degree}</strong>
                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
              <p className="column-label secondary-label">{t.campus}</p>
              {resume.campusExperience.map((item) => (
                <article className="timeline-item compact" key={item.period}>
                  <p>{item.period}</p>
                  {item.lines.map((line) => (
                    <h3 key={line}>{line}</h3>
                  ))}
                </article>
              ))}
            </div>
            <div className="experience-column">
              <p className="column-label">{t.internship}</p>
              {resume.internships.map((entry) => (
                <article className="timeline-item" key={`${entry.title}-${entry.period}`}>
                  <p>{entry.period}</p>
                  <h3>{entry.title}</h3>
                  <strong>{entry.role}</strong>
                  <p className="summary">{entry.summary}</p>
                  <ul>
                    {entry.bullets.slice(0, 4).map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="content-section skills-section">
          <SectionHeading kicker={t.skillsKicker} title={t.skills} />
          <div className="skills-grid">
            {resume.skills.map((group, index) => (
              <article key={group.name}>
                <span>0{index + 1}</span>
                <h3>{group.name}</h3>
                <p>{group.items.join(" · ")}</p>
              </article>
            ))}
            <article>
              <span>0{resume.skills.length + 1}</span>
              <h3>{locale === "zh" ? "证书" : "Credentials"}</h3>
              <p>{resume.certificates.map((item) => `${item.title} ${item.detail ?? ""}`).join(" · ")}</p>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <p className="section-kicker">{t.contactKicker}</p>
          <h2>{t.contact}</h2>
          <p>{t.contactLead}</p>
          <a className="contact-email" href={`mailto:${resume.contact.email}`}>
            {resume.contact.email}
            <span>↗</span>
          </a>
          <div className="contact-links">
            {resume.contact.github ? (
              <a href={resume.contact.github} target="_blank" rel="noreferrer noopener">
                GitHub ↗
              </a>
            ) : null}
            <a href={`tel:${resume.contact.phone?.replace(/\s/g, "")}`}>{resume.contact.phone}</a>
            <span>{resume.contact.location}</span>
          </div>
        </section>
      </main>

      <footer>
        <span>{resume.meta.name}</span>
        <span>{t.built}</span>
        <button type="button" onClick={() => scrollTo("hero")}>
          TOP ↑
        </button>
      </footer>
    </div>
  );
}
