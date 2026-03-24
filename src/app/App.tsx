import { ResumeHeader } from './components/resume-header';
import { SkillsSection } from './components/skills-section';
import { ExperienceSection } from './components/experience-section';
import { ProjectsSection } from './components/projects-section';
import { EducationSection } from './components/education-section';
import { useRef } from 'react';
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
      :root.pdf-rendering-root {
        --background: #ffffff !important;
        --foreground: #252525 !important;
        --card: #ffffff !important;
        --card-foreground: #252525 !important;
        --popover: #ffffff !important;
        --popover-foreground: #252525 !important;
        --primary: #030213 !important;
        --primary-foreground: #ffffff !important;
        --secondary: #f2f2f5 !important;
        --secondary-foreground: #030213 !important;
        --muted: #ececf0 !important;
        --muted-foreground: #717182 !important;
        --accent: #e9ebef !important;
        --accent-foreground: #030213 !important;
        --destructive: #d4183d !important;
        --destructive-foreground: #ffffff !important;
        --border: rgba(0, 0, 0, 0.1) !important;
        --input: transparent !important;
        --input-background: #f3f3f5 !important;
        --switch-background: #cbced4 !important;
        --ring: #b5b5b5 !important;
        --chart-1: #ff9f40 !important;
        --chart-2: #4bc0c0 !important;
        --chart-3: #36a2eb !important;
        --chart-4: #ffce56 !important;
        --chart-5: #ff6384 !important;
        --sidebar: #fafafa !important;
        --sidebar-foreground: #252525 !important;
        --sidebar-primary: #030213 !important;
        --sidebar-primary-foreground: #fafafa !important;
        --sidebar-accent: #f5f5f5 !important;
        --sidebar-accent-foreground: #333333 !important;
        --sidebar-border: #ebebeb !important;
        --sidebar-ring: #b5b5b5 !important;
      }

      .pdf-rendering {
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
      .pdf-rendering .bg-blue-100 {
        background-color: #dbeafe !important;
      }
      .pdf-rendering .bg-blue-700 {
        background-color: #1d4ed8 !important;
      }
      .pdf-rendering .bg-gray-50 {
        background-color: #f9fafb !important;
      }
      .pdf-rendering .bg-gray-100 {
        background-color: #f3f4f6 !important;
      }
      .pdf-rendering .bg-green-50 {
        background-color: #f0fdf4 !important;
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
      .pdf-rendering .text-blue-700 {
        color: #1d4ed8 !important;
      }
      .pdf-rendering .text-blue-100 {
        color: #dbeafe !important;
      }
      .pdf-rendering .text-blue-200 {
        color: #bfdbfe !important;
      }
      .pdf-rendering .text-green-700 {
        color: #15803d !important;
      }
      .pdf-rendering .text-black {
        color: #000000 !important;
      }
      .pdf-rendering .text-white {
        color: #ffffff !important;
      }
      .pdf-rendering .border-blue-600 {
        border-color: #2563eb !important;
      }
      .pdf-rendering .border-gray-200 {
        border-color: #e5e7eb !important;
      }
      .pdf-rendering .border-gray-300 {
        border-color: #d1d5db !important;
      }
      .pdf-rendering .border-gray-400 {
        border-color: #9ca3af !important;
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
    document.documentElement.classList.add('pdf-rendering-root');
    element.classList.add('pdf-rendering');
    
    // Даем браузеру один кадр на применение временных стилей
    await new Promise((resolve) => requestAnimationFrame(() => resolve(undefined)));
    
    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
      ]);

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        foreignObjectRendering: true,
      });

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const margin = 10;
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const printableWidth = pageWidth - margin * 2;
      const printableHeight = pageHeight - margin * 2;
      const imageHeight = (canvas.height * printableWidth) / canvas.width;
      const imageData = canvas.toDataURL('image/jpeg', 0.98);

      let heightLeft = imageHeight;
      let yPosition = margin;

      pdf.addImage(imageData, 'JPEG', margin, yPosition, printableWidth, imageHeight);
      heightLeft -= printableHeight;

      while (heightLeft > 0) {
        yPosition = margin - (imageHeight - heightLeft);
        pdf.addPage();
        pdf.addImage(imageData, 'JPEG', margin, yPosition, printableWidth, imageHeight);
        heightLeft -= printableHeight;
      }

      pdf.save('Резюме Александр Илык iOS-разработчик.pdf');
    } catch (error) {
      console.error('Ошибка при создании PDF:', error);
    } finally {
      // Удаляем временные стили
      document.documentElement.classList.remove('pdf-rendering-root');
      element.classList.remove('pdf-rendering');
      tempStyle.remove();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-8 px-4 print:bg-white print:py-0">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex justify-end mb-4 print:hidden">
          <button
            type="button"
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
