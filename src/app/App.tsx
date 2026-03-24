import { ResumeHeader } from './components/resume-header';
import { SkillsSection } from './components/skills-section';
import { ExperienceSection } from './components/experience-section';
import { ProjectsSection } from './components/projects-section';
import { EducationSection } from './components/education-section';
import { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { Download } from 'lucide-react';

export default function App() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;

    const element = resumeRef.current;
    
    // Полностью переопределяем CSS переменные на RGB
    const tempStyle = document.createElement('style');
    tempStyle.id = 'pdf-temp-colors';
    tempStyle.textContent = `
      /* Переопределяем все CSS переменные с oklch на RGB */
      .pdf-rendering {
        --foreground: #252525 !important;
        --card-foreground: #252525 !important;
        --popover: #ffffff !important;
        --popover-foreground: #252525 !important;
        --primary-foreground: #ffffff !important;
        --secondary: #f2f2f5 !important;
        --muted-foreground: #717182 !important;
        --ring: #b5b5b5 !important;
        --chart-1: #ff9f40 !important;
        --chart-2: #4bc0c0 !important;
        --chart-3: #36a2eb !important;
        --chart-4: #ffce56 !important;
        --chart-5: #ff6384 !important;
        --sidebar: #fafafa !important;
        --sidebar-foreground: #252525 !important;
        --sidebar-primary-foreground: #fafafa !important;
        --sidebar-accent: #f5f5f5 !important;
        --sidebar-accent-foreground: #333333 !important;
        --sidebar-border: #ebebeb !important;
        --sidebar-ring: #b5b5b5 !important;
        
        /* Основной градиент */
        background: linear-gradient(to bottom right, #eff6ff, #ffffff, #eff6ff) !important;
      }
      
      /* Переопределяем все Tailwind классы */
      .pdf-rendering .bg-white {
        background-color: #ffffff !important;
      }
      .pdf-rendering .bg-blue-600 {
        background-color: #2563eb !important;
      }
      .pdf-rendering .bg-blue-50 {
        background-color: #eff6ff !important;
      }
      .pdf-rendering .text-gray-600 {
        color: #4b5563 !important;
      }
      .pdf-rendering .text-gray-700 {
        color: #374151 !important;
      }
      .pdf-rendering .text-gray-800 {
        color: #1f2937 !important;
      }
      .pdf-rendering .text-gray-900 {
        color: #111827 !important;
      }
      .pdf-rendering .text-blue-600 {
        color: #2563eb !important;
      }
      .pdf-rendering .text-white {
        color: #ffffff !important;
      }
      .pdf-rendering .border-gray-200 {
        border-color: #e5e7eb !important;
      }
      .pdf-rendering .border-gray-300 {
        border-color: #d1d5db !important;
      }
      .pdf-rendering .shadow-sm {
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05) !important;
      }
      .pdf-rendering .shadow-md {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
      }
    `;
    document.head.appendChild(tempStyle);
    
    // Добавляем временный класс
    element.classList.add('pdf-rendering');
    
    // Задержка для применения стилей
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const opt = {
      margin: 10,
      filename: 'Резюме Александр Илык iOS-разработчик.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        ignoreElements: (el: Element) => {
          return el.classList.contains('print:hidden') || el.closest('[data-no-pdf="true"]') !== null;
        }
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Ошибка при создании PDF:', error);
    } finally {
      // Удаляем временные стили
      element.classList.remove('pdf-rendering');
      tempStyle.remove();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-8 px-4 print:bg-white print:py-0">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex justify-end mb-4 print:hidden">
          <button
            data-no-pdf="true"
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl font-semibold"
          >
            <Download size={20} />
            Скачать PDF
          </button>
        </div>

        <div id="resume-content" ref={resumeRef} className="select-text">
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
    </div>
  );
}
