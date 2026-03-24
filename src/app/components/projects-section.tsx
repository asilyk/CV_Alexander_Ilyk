import { Code2 } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  period?: string;
  technologies: string[];
  highlights: React.ReactNode[];
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      name: 'Политех Навигация',
      description: 'Сервисы indoor-навигации по кампусам Московского Политеха.\nТимлид проекта и iOS-разработчик',
      period: '2024 — настоящее время',
      technologies: [],
      highlights: [
        <>Создание <span className="resume-text-blue-strong">цифровых двойников зданий</span> с детализацией до уровня помещений</>,
        'Интеграция в университетские системы для повышения процессной и хозяйственной эффективности',
        <>Реализовал систему навигации по <span className="resume-text-blue-strong">2019 помещениям</span> с построением <span className="resume-text-blue-strong">1млн+ маршрутов</span></>,
        <><span className="resume-text-blue-strong">90 планов зданий</span>, актуальных на конец 2025 года</>,
        <>Организация навигации на <span className="resume-text-blue-strong">22 мероприятиях</span> и Днях открытых дверей</>,
        <><span className="resume-text-blue-strong">4708 пользователей сайта</span> и <span className="resume-text-blue-strong">2346 пользователей бота</span> в beta-тестировании</>,
        <><span className="resume-text-blue-strong">1812 интерактивных помещений</span> с возможностью построения маршрутов</>
      ]
    },
    {
      name: 'RoadmapGenerator',
      description: 'iOS приложение для создания и генерации роудмапов с поддержкой AI',
      technologies: ['SwiftUI', 'OpenAI API', 'Swift Data'],
      highlights: [
        <>Генерация роудмапов через <span className="resume-text-blue-strong">OpenAI API</span></>,
        'Отслеживание и трекинг прогресса задач',
        'Интеграция с календарем и напоминаниями'
      ]
    },
    {
      name: 'FitnessCompanion',
      description: 'iOS фитнес-трекер с интеграцией HealthKit и Apple Watch',
      technologies: ['UIKit', 'HealthKit', 'WatchKit', 'CloudKit'],
      highlights: [
        <>Синхронизация данных между <span className="resume-text-blue-strong">iPhone и Apple Watch</span></>,
        'Отслеживание 20+ видов тренировок',
        'Поддержка оффлайн-режима'
      ]
    },
    {
      name: 'WeatherNow',
      description: 'Минималистичное iOS погодное приложение с красивыми анимациями',
      technologies: ['SwiftUI', 'Core Animation', 'REST API', 'MapKit'],
      highlights: [
        'Анимированные погодные эффекты',
        'Интеграция с OpenWeatherMap API',
        'Поддержка виджетов iOS 14+'
      ]
    }
  ];

  return (
    <section className="resume-card">
      <div className="resume-card__header">
        <h2 className="resume-card__title resume-title-with-icon">
          <Code2 className="resume-title-icon" />
          Проекты
        </h2>
      </div>
      <div className="resume-card__content">
        <div className="resume-stack-md">
          {projects.map((project, index) => (
            <article key={index} className="resume-project-item">
              <div className="resume-item-head">
                <div>
                  <h3 className="resume-item-title">{project.name}</h3>
                  <p className="resume-project-description">{project.description}</p>
                </div>
                {project.period && <span className="resume-item-period">{project.period}</span>}
              </div>
              {project.technologies.length > 0 && (
                <div className="resume-badge-list resume-badge-list--spaced">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="resume-badge resume-badge--outline">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <ul className="resume-list">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="resume-list-item">{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
