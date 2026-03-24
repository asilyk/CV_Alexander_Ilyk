import { ResumeHeader } from './components/resume-header';
import { SkillsSection } from './components/skills-section';
import { ExperienceSection } from './components/experience-section';
import { ProjectsSection } from './components/projects-section';
import { EducationSection } from './components/education-section';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-8 px-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <ResumeHeader />
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <ExperienceSection />
            <ProjectsSection />
          </div>
          
          <div className="space-y-6">
            <SkillsSection />
            <EducationSection />
          </div>
        </div>
      </div>
    </div>
  );
}