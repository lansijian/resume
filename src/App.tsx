<<<<<<< HEAD
import { getResume, type ProjectEntry } from "./content/resume";
import { usePreferences } from "./preferences";
import { useActiveSection } from "./hooks/useActiveSection";
import { publicAssetUrl } from "./utils/publicAssetUrl";

const ACADEMIC_SECTIONS = [
  "about-me",
  "gallery",
  "news",
  "publications",
  "honors",
  "educations",
  "internships",
  "skills",
  "contact",
] as const;

function ProjectPaper({ entry }: { entry: ProjectEntry }) {
  return (
    <article className="paper-box">
      {entry.imageSrc ? (
        <div className="paper-box-image no-print">
          <div className="paper-image-frame">
            <img src={publicAssetUrl(entry.imageSrc)} alt="" loading="lazy" />
          </div>
        </div>
      ) : null}
      <div className="paper-box-text">
        <h3>{entry.title}</h3>
        <p>
          <strong>{entry.role}</strong> <span className="muted-dot">|</span>{" "}
          <span className="paper-period">{entry.period}</span>
        </p>
        <p>{entry.summary}</p>
        <ul>
          {entry.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

type I18n = {
  nav: {
    home: string;
    gallery: string;
    news: string;
    works: string;
    honors: string;
    education: string;
    internships: string;
    skills: string;
    contact: string;
  };
  section: {
    aboutTitle: string;
    galleryTitle: string;
    newsTitle: string;
    worksTitle: string;
    honorsTitle: string;
    educationTitle: string;
    internshipsTitle: string;
    skillsTitle: string;
    contactTitle: string;
  };
  sidebar: {
    locationLabel: string;
    emailLabel: string;
    phoneLabel: string;
    githubLabel: string;
  };
  role: { research: string };
  meta: { separator: string };
};

const I18N: Record<"zh" | "en", I18n> = {
  zh: {
    nav: {
      home: "主页",
      gallery: "照片",
      news: "动态",
      works: "成果",
      honors: "荣誉",
      education: "教育",
      internships: "实习",
      skills: "技能",
      contact: "联系",
    },
    section: {
      aboutTitle: "关于我",
      galleryTitle: "📷 精选照片",
      newsTitle: "🔥 动态",
      worksTitle: "📝 成果（项目 / 科研 / 创业）",
      honorsTitle: "🎖 荣誉与奖项",
      educationTitle: "📖 教育经历",
      internshipsTitle: "💻 实习经历",
      skillsTitle: "🧰 技能",
      contactTitle: "✉️ 联系方式",
    },
    sidebar: {
      locationLabel: "地区",
      emailLabel: "邮箱",
      phoneLabel: "手机",
      githubLabel: "GitHub",
    },
    role: { research: "科研项目" },
    meta: { separator: "·" },
  },
  en: {
    nav: {
      home: "Homepage",
      gallery: "Gallery",
      news: "News",
      works: "Works",
      honors: "Honors",
      education: "Education",
      internships: "Internships",
      skills: "Skills",
      contact: "Contact",
    },
    section: {
      aboutTitle: "About Me",
      galleryTitle: "📷 Featured Photos",
      newsTitle: "🔥 News",
      worksTitle: "📝 Publications & Projects",
      honorsTitle: "🎖 Honors and Awards",
      educationTitle: "📖 Educations",
      internshipsTitle: "💻 Internships",
      skillsTitle: "🧰 Skills",
      contactTitle: "✉️ Contact",
    },
    sidebar: {
      locationLabel: "Location",
      emailLabel: "Email",
      phoneLabel: "Phone",
      githubLabel: "GitHub",
    },
    role: { research: "Research" },
    meta: { separator: "·" },
  },
};

export default function App() {
  const { locale, theme, setTheme, setLocale } = usePreferences();
  const resume = getResume(locale);
  const t = I18N[locale];
  const sectionIds = ACADEMIC_SECTIONS.map((s) => s.toString());
  const activeId = useActiveSection(sectionIds);
  const newsItems =
    resume.campusExperience.flatMap((item) => item.lines.map((line) => `${item.period} · ${line}`)) ?? [];
  const publicationLike = [
    ...resume.projects,
    ...resume.research.map((entry) => ({
      title: entry.title,
      role: t.role.research,
      period: entry.period,
      summary: entry.summary,
      bullets: entry.bullets,
    })),
    ...resume.ventures,
  ];

  const navItems = [
    { id: "about-me", label: t.nav.home },
    { id: "gallery", label: t.nav.gallery },
    { id: "news", label: t.nav.news },
    { id: "publications", label: t.nav.works },
    { id: "honors", label: t.nav.honors },
    { id: "educations", label: t.nav.education },
    { id: "internships", label: t.nav.internships },
    { id: "skills", label: t.nav.skills },
    { id: "contact", label: t.nav.contact },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="academic-page">
      <header className="masthead no-print">
        <div className="masthead__inner-wrap">
          <div className="masthead__menu">
            <nav className="greedy-nav" aria-label="Primary">
              <ul className="visible-links">
                <li className="masthead__menu-item masthead__menu-item--lg">
                  <button type="button" onClick={() => scrollTo("about-me")}>
                    {t.nav.home}
                  </button>
                </li>
                {navItems.slice(1).map((item) => (
                  <li key={item.id} className={`masthead__menu-item ${activeId === item.id ? "is-active" : ""}`}>
                    <button type="button" onClick={() => scrollTo(item.id)}>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="masthead__controls">
                <button type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                  {theme === "dark" ? resume.labels.themeLight : resume.labels.themeDark}
                </button>
                <button type="button" onClick={() => setLocale(locale === "zh" ? "en" : "zh")}>
                  {locale === "zh" ? resume.labels.langEn : resume.labels.langZh}
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div id="main" role="main" className="main-layout">
        <aside className="sidebar sticky">
          <div className="author__avatar">
            {resume.personal.photoSrc ? (
              <img src={publicAssetUrl(resume.personal.photoSrc)} alt={resume.meta.name} />
            ) : null}
          </div>
          <h3 className="author__name">{resume.meta.name}</h3>
          <p className="author__bio">{resume.meta.tagline}</p>
          <div className="author__urls-wrapper">
            <ul className="author__urls social-icons">
              {resume.contact.location ? (
                <li>
                  <strong>{t.sidebar.locationLabel}</strong>
                  <span className="muted-dot">{t.meta.separator}</span>
                  {resume.contact.location}
                </li>
              ) : null}
              <li>
                <strong>{resume.labels.emailLabel}</strong>
                <span className="muted-dot">{t.meta.separator}</span>
                <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
              </li>
              <li>
                <strong>{resume.labels.phoneLabel}</strong>
                <span className="muted-dot">{t.meta.separator}</span>
                <a href={`tel:${resume.personal.phone.replace(/\s/g, "")}`}>{resume.personal.phone}</a>
              </li>
              {resume.contact.github ? (
                <li>
                  <strong>{t.sidebar.githubLabel}</strong>
                  <span className="muted-dot">{t.meta.separator}</span>
                  <a href={resume.contact.github} target="_blank" rel="noreferrer noopener">
                    {resume.contact.github.replace(/^https?:\/\//, "")}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </aside>

        <article className="page" itemScope itemType="http://schema.org/CreativeWork">
          <div className="page__inner-wrap">
            <section className="page__content" itemProp="text">
              <span className="anchor" id="about-me" />
              <h1 className="section-title">{t.section.aboutTitle}</h1>
              <p>{resume.meta.heroSubtitle}</p>

              <h1 id="gallery">{t.section.galleryTitle}</h1>
              <div className="photo-grid">
                {[
                  "/photo/Rokid银奖.jpeg",
                  "/photo/RoboMaster超级对抗赛合影.jpg",
                  "/photo/RoboMaster赛场照片.jpg",
                ].map((src) => (
                  <figure key={src} className="photo-card no-print">
                    <img src={publicAssetUrl(src)} alt="" loading="lazy" />
                  </figure>
                ))}
              </div>

              <h1 id="news">{t.section.newsTitle}</h1>
              <ul>
                {newsItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h1 id="publications">{t.section.worksTitle}</h1>
              {publicationLike.map((entry) => (
                <ProjectPaper key={`${entry.title}-${entry.period}`} entry={entry} />
              ))}

              <h1 id="honors">{t.section.honorsTitle}</h1>
              <ul>
                {[...resume.awards, ...resume.ecosystemAwards].map((award) => (
                  <li key={`${award.title}-${award.period}`}>
                    <strong>{award.period}</strong> {award.title}
                    {award.issuer ? ` · ${award.issuer}` : ""}
                  </li>
                ))}
              </ul>

              <h1 id="educations">{t.section.educationTitle}</h1>
              <ul>
                {resume.education.map((edu) => (
                  <li key={`${edu.school}-${edu.period}`}>
                    <strong>{edu.period}</strong> {edu.school} - {edu.degree}
                    <ul>
                      {edu.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>

              <h1 id="internships">{t.section.internshipsTitle}</h1>
              {resume.internships.map((entry) => (
                <ProjectPaper key={`${entry.title}-${entry.period}`} entry={entry} />
              ))}

              <h1 id="skills">{t.section.skillsTitle}</h1>
              <ul>
                {resume.skills.map((group) => (
                  <li key={group.name}>
                    <strong>{group.name}:</strong> {group.items.join(", ")}
                  </li>
                ))}
              </ul>

              <h1 id="contact">{t.section.contactTitle}</h1>
              <ul>
                <li>
                  <strong>{resume.labels.emailLabel}:</strong>{" "}
                  <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
                </li>
                {resume.contact.phone ? (
                  <li>
                    <strong>{resume.labels.phoneLabel}:</strong>{" "}
                    <a href={`tel:${resume.contact.phone.replace(/\s/g, "")}`}>{resume.contact.phone}</a>
                  </li>
                ) : null}
                {resume.contact.location ? (
                  <li>
                    <strong>{resume.labels.locationLabel}:</strong> {resume.contact.location}
                  </li>
                ) : null}
                {resume.contact.linkedin ? (
                  <li>
                    <strong>LinkedIn:</strong>{" "}
                    <a href={resume.contact.linkedin} target="_blank" rel="noreferrer noopener">
                      {resume.contact.linkedin}
                    </a>
                  </li>
                ) : null}
              </ul>
            </section>
          </div>
        </article>
      </div>
=======
import { getResume } from "./content/resume";
import { usePreferences } from "./preferences";
import { useActiveSection } from "./hooks/useActiveSection";
import { AwardsSection } from "./components/AwardsSection";
import { CampusBlock } from "./components/CampusBlock";
import { CertificatesBlock } from "./components/CertificatesBlock";
import { ContactBlock } from "./components/Contact";
import { EducationBlock } from "./components/Education";
import { Footer } from "./components/Footer";
import { GridBackground } from "./components/GridBackground";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { ProjectsBlock } from "./components/Projects";
import { ResearchBlock } from "./components/ResearchBlock";
import { Section } from "./components/Section";
import { SkillsBlock } from "./components/Skills";
import { LifeGallery } from "./components/LifeGallery";

export default function App() {
  const { locale } = usePreferences();
  const resume = getResume(locale);
  const sectionIds = resume.nav.map((n) => n.id);
  const activeId = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen">
      <GridBackground />
      <Nav items={resume.nav} activeId={activeId} labels={resume.labels} />

      <main className="mx-auto max-w-5xl px-4 pb-24 pt-6 sm:px-6">
        <Hero content={resume.meta} labels={resume.labels} personal={resume.personal} />

        <div className="space-y-20">
          <Section
            id="education"
            title={resume.sections.education.title}
            subtitle={resume.sections.education.subtitle}
          >
            <EducationBlock entries={resume.education} />
          </Section>

          <Section
            id="campus"
            title={resume.sections.campus.title}
            subtitle={resume.sections.campus.subtitle}
          >
            <div className="space-y-6">
              {resume.campusExperience.map((c) => (
                <CampusBlock key={c.period} period={c.period} lines={c.lines} />
              ))}
            </div>
          </Section>

          <Section
            id="internship"
            title={resume.sections.internship.title}
            subtitle={resume.sections.internship.subtitle}
          >
            <ProjectsBlock entries={resume.internships} />
          </Section>

          <Section
            id="projects"
            title={resume.sections.projects.title}
            subtitle={resume.sections.projects.subtitle}
          >
            <ProjectsBlock entries={resume.projects} />
          </Section>

          <Section
            id="research"
            title={resume.sections.research.title}
            subtitle={resume.sections.research.subtitle}
          >
            <ResearchBlock entries={resume.research} />
          </Section>

          <Section
            id="ventures"
            title={resume.sections.ventures.title}
            subtitle={resume.sections.ventures.subtitle}
          >
            <ProjectsBlock entries={resume.ventures} />
          </Section>

          <Section
            id="awards"
            title={resume.sections.awards.title}
            subtitle={resume.sections.awards.subtitle}
          >
            <AwardsSection
              competition={resume.awards}
              ecosystem={resume.ecosystemAwards}
              competitionTitle={resume.labels.competitionAwards}
              ecosystemTitle={resume.labels.ecosystemAwards}
            />
          </Section>

          <Section
            id="skills"
            title={resume.sections.skills.title}
            subtitle={resume.sections.skills.subtitle}
          >
            <SkillsBlock groups={resume.skills} />
          </Section>

          <Section
            id="certificates"
            title={resume.sections.certificates.title}
            subtitle={resume.sections.certificates.subtitle}
          >
            <CertificatesBlock entries={resume.certificates} />
          </Section>

          <Section
            id="life"
            title={resume.sections.life.title}
            subtitle={resume.sections.life.subtitle}
          >
            <LifeGallery
              photos={resume.lifePhotos}
              emptyHint={resume.labels.lifeEmptyHint}
            />
          </Section>

          <Section
            id="contact"
            title={resume.sections.contact.title}
            subtitle={resume.sections.contact.subtitle}
          >
            <ContactBlock contact={resume.contact} labels={resume.labels} />
          </Section>
        </div>
      </main>

      <Footer text={resume.labels.footer} />
>>>>>>> b94f76b7ab9afd10ef885100ae5dc05a1c3bab9a
    </div>
  );
}
