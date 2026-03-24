import { ResumeHeader } from './components/resume-header';
import { SkillsSection } from './components/skills-section';
import { ExperienceSection } from './components/experience-section';
import { ProjectsSection } from './components/projects-section';
import { EducationSection } from './components/education-section';
import { Download } from 'lucide-react';

export default function App() {
  const handleDownloadPDF = () => window.print();

  return (
    <div className="resume-page">
      <div className="resume-shell">
        <div className="resume-toolbar">
          <button type="button" data-no-pdf="true" onClick={handleDownloadPDF} className="resume-download-button">
            <Download size={20} />
            Скачать PDF
          </button>
        </div>

        <div id="resume-content">
          <ResumeHeader />

          <main className="resume-layout">
            <section className="resume-layout__main">
              <ExperienceSection />
              <ProjectsSection />
            </section>

            <aside className="resume-layout__side">
              <SkillsSection />
              <EducationSection />
            </aside>
          </main>
        </div>
      </div>
    </div>
  );
}
