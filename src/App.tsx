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
    </div>
  );
}
