import { GraduationCap, Award } from 'lucide-react';

export function EducationSection() {
  return (
    <section className="resume-card">
      <div className="resume-card__header">
        <h2 className="resume-card__title resume-title-with-icon">
          <GraduationCap className="resume-title-icon" />
          Образование и Сертификаты
        </h2>
      </div>
      <div className="resume-card__content">
        <div className="resume-stack-lg">
          <div>
            <h3 className="resume-subtitle">Образование</h3>
            <div className="resume-stack-md">
              <article className="resume-timeline-item resume-timeline-item--primary">
                <div className="resume-item-head resume-item-head--tight">
                  <h4 className="resume-item-title resume-item-title--small">Высшее</h4>
                  <span className="resume-item-period">2026</span>
                </div>
                <p className="resume-item-company">Московский политехнический университет, Москва</p>
                <p className="resume-item-location">Факультет информационных технологий</p>
                <p className="resume-item-details">
                  Информационные системы и технологии,
                  <br />
                  Цифровая трансформация
                </p>
              </article>

              <article className="resume-timeline-item resume-timeline-item--muted">
                <div className="resume-item-head resume-item-head--tight">
                  <h4 className="resume-item-title resume-item-title--small">Неоконченное высшее</h4>
                  <span className="resume-item-period">2019 — 2022</span>
                </div>
                <p className="resume-item-company">
                  Национальный исследовательский университет "Высшая школа экономики", Москва
                </p>
                <p className="resume-item-location">МИЭМ</p>
                <p className="resume-item-details">Компьютерная безопасность</p>
              </article>
            </div>
          </div>

          <div>
            <h3 className="resume-subtitle resume-title-with-icon">
              <Award className="resume-title-icon" size={20} />
              Повышение квалификации, курсы
            </h3>
            <div className="resume-stack-sm">
              <article className="resume-cert-item">
                <span className="resume-dot" aria-hidden="true" />
                <div className="resume-cert-content">
                  <div className="resume-item-head resume-item-head--tight">
                    <p className="resume-cert-title">42.fr, C Piscine, 42cursus</p>
                    <span className="resume-item-period">2025</span>
                  </div>
                  <p className="resume-item-details">Школа 21</p>
                </div>
              </article>
              <article className="resume-cert-item">
                <span className="resume-dot" aria-hidden="true" />
                <div className="resume-cert-content">
                  <div className="resume-item-head resume-item-head--tight">
                    <p className="resume-cert-title">Профессия "iOS-разработчик с нуля", 25 поток</p>
                    <span className="resume-item-period">2022</span>
                  </div>
                  <p className="resume-item-details">SwiftBook.ru</p>
                </div>
              </article>
              <article className="resume-cert-item">
                <span className="resume-dot" aria-hidden="true" />
                <div className="resume-cert-content">
                  <div className="resume-item-head resume-item-head--tight">
                    <p className="resume-cert-title">Методы и алгоритмы теории графов</p>
                    <span className="resume-item-period">2021</span>
                  </div>
                  <p className="resume-item-details">Университет ИТМО • Открытое образование</p>
                </div>
              </article>
              <article className="resume-cert-item">
                <span className="resume-dot" aria-hidden="true" />
                <div className="resume-cert-content">
                  <div className="resume-item-head resume-item-head--tight">
                    <p className="resume-cert-title">Искусство разработки на современном C++</p>
                    <span className="resume-item-period">2020</span>
                  </div>
                  <p className="resume-item-details">Московский физико-технический институт • Coursera</p>
                </div>
              </article>
              <article className="resume-cert-item">
                <span className="resume-dot" aria-hidden="true" />
                <div className="resume-cert-content">
                  <div className="resume-item-head resume-item-head--tight">
                    <p className="resume-cert-title">Основы информационной культуры</p>
                    <span className="resume-item-period">2020</span>
                  </div>
                  <p className="resume-item-details">Санкт-Петербургский политехнический университет Петра Великого • Открытое образование</p>
                </div>
              </article>
              <article className="resume-cert-item">
                <span className="resume-dot" aria-hidden="true" />
                <div className="resume-cert-content">
                  <div className="resume-item-head resume-item-head--tight">
                    <p className="resume-cert-title">Прикладная космонавтика и проектирование малых космических аппаратов</p>
                    <span className="resume-item-period">2018</span>
                  </div>
                  <p className="resume-item-details">МИЭМ НИУ ВШЭ</p>
                </div>
              </article>
            </div>
          </div>

          <div>
            <h3 className="resume-subtitle">Языки</h3>
            <div className="resume-badge-list">
              <span className="resume-badge resume-badge--green">Русский - Родной</span>
              <span className="resume-badge resume-badge--green">Английский - Upper-Intermediate (B2)</span>
              <span className="resume-badge resume-badge--green">Немецкий - Elementary (A2)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
