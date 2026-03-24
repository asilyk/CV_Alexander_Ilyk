import { Briefcase } from 'lucide-react';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: React.ReactNode[];
}

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      company: 'Level.Travel',
      position: 'iOS-разработчик',
      period: 'Ноябрь 2023 — настоящее время',
      description: 'Москва',
      achievements: [
        <>
          Разработал и масштабировал <span className="resume-text-blue-strong">iOS-приложение</span> с аудиторией{' '}
          <span className="resume-text-blue-strong">14 000+ скачиваний</span> и рейтингом{' '}
          <span className="resume-text-blue-strong">4.8</span>
        </>,
        <>Выполнил миграцию на <span className="resume-text-blue-strong">SwiftUI</span>, повысив скорость разработки и упростив поддержку UI</>,
        <>Участвовал в <span className="resume-text-blue-strong">полном редизайне продукта</span> и внедрил единую дизайн-систему</>,
        <>Интегрировал <span className="resume-text-blue-strong">Kotlin Multiplatform (KMP)</span> для шаринга бизнес-логики между платформами и снижения дублирования кода</>,
        <>Реализовал ключевые пользовательские фичи: главную страницу приложения, блоки подборок, сторис и <span className="resume-text-blue-strong">чат с меню самообслуживания (6 000+ пользователей)</span></>,
        'Переработал главную страницу приложения, улучшив пользовательский опыт и навигацию',
        <>Повысил стабильность приложения: увеличил <span className="resume-text-blue-strong">crash-free rate с 96% до 99,5%</span></>,
        <>Перевёл проект на <span className="resume-text-blue-strong">Tuist</span>, оптимизировал build-фазы и сократил <span className="resume-text-blue-strong">время сборки на 4 минуты</span></>,
        <>Настроил инструменты качества кода (<span className="resume-text-blue-strong">SwiftLint, Periphery</span>), снизив количество технического долга</>,
        <>Отвечал за <span className="resume-text-blue-strong">релизы и публикацию приложения в App Store</span> (CI/CD, подготовка билдов, управление версиями)</>
      ]
    },
    {
      company: 'СберБанк, Школа 21',
      position: 'Стажер-разработчик',
      period: 'Ноябрь 2021 — Июнь 2023',
      description: 'Москва',
      achievements: [
        'Изучение основ разработки на C, C++ и Swift',
        'Изучение и применение best practices разработки в крупной корпоративной среде',
        'Работа с legacy-кодом и рефакторинг существующих модулей',
        'Участие в code review и командной разработке',
        'Освоение процессов CI/CD и автоматизированного тестирования',
        'Взаимодействие с кросс-функциональными командами (дизайнеры, backend-разработчики, QA)'
      ]
    },
    {
      company: 'Онлайн-школа "Кодиум"',
      position: 'Преподаватель информатики',
      period: 'Март 2021 — Октябрь 2021',
      description: '',
      achievements: [
        <>Разработка методических материалов, проведение занятий и мастер-классов по <span className="resume-text-blue-strong">Scratch и мобильной разработке</span></>,
        'Создание учебных программ и курсов с нуля',
        'Разработка интерактивных заданий и проектов',
        'Подготовка видео-уроков и презентаций',
        'Проведение открытых мастер-классов и вебинаров',
        'Менторство и сопровождение студентов при создании первых приложений',
        'Взаимодействие с кросс-функциональными командами (дизайнеры, backend-разработчики, QA)'
      ]
    }
  ];

  return (
    <section className="resume-card">
      <div className="resume-card__header">
        <h2 className="resume-card__title resume-title-with-icon">
          <Briefcase className="resume-title-icon" />
          Опыт работы
        </h2>
        <p className="resume-total-experience">Общий опыт работы: 4+ года</p>
      </div>
      <div className="resume-card__content">
        <div className="resume-stack-lg">
          {experiences.map((exp, index) => (
            <article key={index} className="resume-timeline-item resume-timeline-item--primary">
              <div className="resume-item-head">
                <div>
                  <h3 className="resume-item-title">{exp.position}</h3>
                  <p className="resume-item-company">{exp.company}</p>
                </div>
                <span className="resume-item-period">{exp.period}</span>
              </div>
              <p className="resume-item-location">{exp.description}</p>
              <ul className="resume-list">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="resume-list-item">{achievement}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
