import { ResumeHeader } from './components/resume-header';
import { SkillsSection } from './components/skills-section';
import { ExperienceSection } from './components/experience-section';
import { ProjectsSection } from './components/projects-section';
import { EducationSection } from './components/education-section';
import { useRef } from 'react';
import { Download } from 'lucide-react';

const PDF_MARGIN_MM = 10;
const PDF_PAGE_WIDTH_MM = 210;
const PDF_PAGE_HEIGHT_MM = 297;

export default function App() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;

    const element = resumeRef.current;
    const originalWidth = element.style.width;
    const originalMaxWidth = element.style.maxWidth;

    // Полностью переопределяем CSS переменные на RGB
    const tempStyle = document.createElement('style');
    tempStyle.id = 'pdf-temp-colors';
    tempStyle.textContent = `
      /* Переопределяем цветовые переменные на RGB для PDF-рендера */
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

    // Фиксируем "десктопную" ширину для одинакового PDF на любых устройствах
    const exportWidthPx = 1240;
    element.style.width = `${exportWidthPx}px`;
    element.style.maxWidth = 'none';
    
    // Даем браузеру один кадр на применение временных стилей
    await new Promise((resolve) => requestAnimationFrame(() => resolve(undefined)));

    const replaceUnsupportedColorsInClone = (clonedDoc: Document) => {
      const unsupportedColorRegex = /okl(?:ab|c[h])\([^)]+\)/g;
      const helper = clonedDoc.createElement('span');
      helper.style.display = 'none';
      clonedDoc.body.appendChild(helper);
      const view = clonedDoc.defaultView;

      const toRgb = (value: string): string => {
        if (!view) return value;
        helper.style.color = '';
        helper.style.color = value;
        const resolved = view.getComputedStyle(helper).color;
        return resolved || value;
      };

      clonedDoc.querySelectorAll('style').forEach((styleEl) => {
        if (!styleEl.textContent || !unsupportedColorRegex.test(styleEl.textContent)) return;
        unsupportedColorRegex.lastIndex = 0;
        styleEl.textContent = styleEl.textContent.replace(unsupportedColorRegex, (match) => toRgb(match));
      });

      clonedDoc.querySelectorAll<HTMLElement>('[style]').forEach((node) => {
        const inlineStyle = node.getAttribute('style');
        if (!inlineStyle || !unsupportedColorRegex.test(inlineStyle)) return;
        unsupportedColorRegex.lastIndex = 0;
        node.setAttribute(
          'style',
          inlineStyle.replace(unsupportedColorRegex, (match) => toRgb(match)),
        );
      });

      helper.remove();
    };

    const styleSnapshot = (() => {
      const nodes = [element, ...Array.from(element.querySelectorAll<HTMLElement>('*'))];
      return nodes.map((node) => {
        const computed = window.getComputedStyle(node);
        const declarations: string[] = [];
        for (let i = 0; i < computed.length; i += 1) {
          const property = computed.item(i);
          const value = computed.getPropertyValue(property);
          if (!value) continue;
          declarations.push(`${property}:${value};`);
        }
        return declarations.join('');
      });
    })();
    
    try {
      const [{ default: html2canvas }, jsPDFModule] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
      ]);
      const { jsPDF } = jsPDFModule;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: false,
        allowTaint: false,
        backgroundColor: '#ffffff',
        logging: false,
        scrollX: 0,
        scrollY: 0,
        windowWidth: exportWidthPx,
        onclone: (clonedDoc: Document) => {
          replaceUnsupportedColorsInClone(clonedDoc);

          const clonedElement = clonedDoc.getElementById('resume-content');
          if (!clonedElement) return;

          const clonedNodes = [
            clonedElement as HTMLElement,
            ...Array.from(clonedElement.querySelectorAll<HTMLElement>('*')),
          ];

          for (let i = 0; i < clonedNodes.length; i += 1) {
            const cssText = styleSnapshot[i];
            if (!cssText) continue;
            clonedNodes[i].setAttribute('style', cssText);
          }

          clonedDoc.querySelectorAll('link[rel="stylesheet"], style').forEach((node) => {
            node.remove();
          });
        },
      });

      const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
      const contentWidth = PDF_PAGE_WIDTH_MM - PDF_MARGIN_MM * 2;
      const contentHeight = PDF_PAGE_HEIGHT_MM - PDF_MARGIN_MM * 2;
      const imageData = canvas.toDataURL('image/jpeg', 0.98);
      const renderedHeight = (canvas.height * contentWidth) / canvas.width;
      let remainingHeight = renderedHeight;
      let yOffset = PDF_MARGIN_MM;

      pdf.addImage(imageData, 'JPEG', PDF_MARGIN_MM, yOffset, contentWidth, renderedHeight);
      remainingHeight -= contentHeight;

      while (remainingHeight > 0) {
        pdf.addPage();
        yOffset = PDF_MARGIN_MM - (renderedHeight - remainingHeight);
        pdf.addImage(imageData, 'JPEG', PDF_MARGIN_MM, yOffset, contentWidth, renderedHeight);
        remainingHeight -= contentHeight;
      }

      pdf.save('Резюме Александр Илык iOS-разработчик.pdf');
    } catch (error) {
      console.error('Ошибка при создании PDF:', error);
    } finally {
      // Удаляем временные стили
      element.style.width = originalWidth;
      element.style.maxWidth = originalMaxWidth;
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
