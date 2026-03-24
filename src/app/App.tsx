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
const PDF_RENDER_SCALE = 1.35;
const PDF_IMAGE_QUALITY = 0.82;

export default function App() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;

    const element = resumeRef.current;
    const originalWidth = element.style.width;
    const originalMaxWidth = element.style.maxWidth;

    const tempStyle = document.createElement('style');
    tempStyle.id = 'pdf-temp-colors';
    tempStyle.textContent = `
      :root.pdf-rendering-root {
        color-scheme: light !important;
      }

      .pdf-rendering {
        background: linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #eff6ff 100%) !important;
      }
    `;
    document.head.appendChild(tempStyle);

    document.documentElement.classList.add('pdf-rendering-root');
    element.classList.add('pdf-rendering');

    const exportWidthPx = 1240;
    element.style.width = `${exportWidthPx}px`;
    element.style.maxWidth = 'none';

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
        node.setAttribute('style', inlineStyle.replace(unsupportedColorRegex, (match) => toRgb(match)));
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

    const detachedStyles: Array<{
      node: HTMLStyleElement | HTMLLinkElement;
      parent: Node;
      nextSibling: ChildNode | null;
    }> = [];

    document.querySelectorAll<HTMLStyleElement | HTMLLinkElement>('style, link[rel="stylesheet"]').forEach((node) => {
      if (node.id === tempStyle.id || !node.parentNode) return;
      detachedStyles.push({
        node,
        parent: node.parentNode,
        nextSibling: node.nextSibling,
      });
      node.remove();
    });

    try {
      const [{ default: html2canvas }, jsPDFModule] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
      ]);
      const { jsPDF } = jsPDFModule;

      const canvas = await html2canvas(element, {
        scale: PDF_RENDER_SCALE,
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

      const pdf = new jsPDF({
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
        compress: true,
        putOnlyUsedFonts: true,
      });
      const contentWidth = PDF_PAGE_WIDTH_MM - PDF_MARGIN_MM * 2;
      const contentHeight = PDF_PAGE_HEIGHT_MM - PDF_MARGIN_MM * 2;
      const pixelsPerMm = canvas.width / contentWidth;
      const pageHeightPx = Math.max(1, Math.floor(contentHeight * pixelsPerMm));
      const totalPages = Math.ceil(canvas.height / pageHeightPx);

      for (let pageIndex = 0; pageIndex < totalPages; pageIndex += 1) {
        if (pageIndex > 0) {
          pdf.addPage();
        }

        const sourceY = pageIndex * pageHeightPx;
        const sliceHeightPx = Math.min(pageHeightPx, canvas.height - sourceY);
        const pageCanvas = document.createElement('canvas');
        pageCanvas.width = canvas.width;
        pageCanvas.height = sliceHeightPx;

        const ctx = pageCanvas.getContext('2d');
        if (!ctx) {
          throw new Error('Canvas 2D context is not available');
        }

        ctx.drawImage(
          canvas,
          0,
          sourceY,
          canvas.width,
          sliceHeightPx,
          0,
          0,
          canvas.width,
          sliceHeightPx,
        );

        const imageData = pageCanvas.toDataURL('image/jpeg', PDF_IMAGE_QUALITY);
        const pageImageHeightMm = (sliceHeightPx / canvas.width) * contentWidth;
        pdf.addImage(
          imageData,
          'JPEG',
          PDF_MARGIN_MM,
          PDF_MARGIN_MM,
          contentWidth,
          pageImageHeightMm,
          undefined,
          'MEDIUM',
        );
      }

      pdf.save('Резюме Александр Илык iOS-разработчик.pdf');
    } catch (error) {
      console.error('Ошибка при создании PDF:', error);
    } finally {
      detachedStyles.forEach(({ node, parent, nextSibling }) => {
        if (!node.isConnected) {
          parent.insertBefore(node, nextSibling);
        }
      });

      element.style.width = originalWidth;
      element.style.maxWidth = originalMaxWidth;
      document.documentElement.classList.remove('pdf-rendering-root');
      element.classList.remove('pdf-rendering');
      tempStyle.remove();
    }
  };

  return (
    <div className="resume-page">
      <div className="resume-shell">
        <div className="resume-toolbar">
          <button type="button" data-no-pdf="true" onClick={handleDownloadPDF} className="resume-download-button">
            <Download size={20} />
            Скачать PDF
          </button>
        </div>

        <div id="resume-content" ref={resumeRef}>
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
