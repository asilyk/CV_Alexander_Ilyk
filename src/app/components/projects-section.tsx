import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
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
        <>Создание <span className="text-blue-700">цифровых двойников зданий</span> с детализацией до уровня помещений</>,
        'Интеграция в университетские системы для повышения процессной и хозяйственной эффективности',
        <>Реализовал систему навигации по <span className="text-blue-700">2019 помещениям</span> с построением <span className="text-blue-700">1млн+ маршрутов</span></>,
        <><span className="text-blue-700">90 планов зданий</span>, актуальных на конец 2025 года</>,
        <>Организация навигации на <span className="text-blue-700">22 мероприятиях</span> и Днях открытых дверей</>,
        <><span className="text-blue-700">4708 пользователей сайта</span> и <span className="text-blue-700">2346 пользователей бота</span> в beta-тестировании</>,
        <><span className="text-blue-700">1812 интерактивных помещений</span> с возможностью построения маршрутов</>
      ]
    },
    {
      name: 'RoadmapGenerator',
      description: 'iOS приложение для создания и генерации роудмапов с поддержкой AI',
      technologies: ['SwiftUI', 'OpenAI API', 'Swift Data'],
      highlights: [
        <>Генерация роудмапов через <span className="text-blue-700">OpenAI API</span></>,
        'Отслеживание и трекинг прогресса задач',
        'Интеграция с календарем и напоминаниями'
      ]
    },
    {
      name: 'FitnessCompanion',
      description: 'iOS фитнес-трекер с интеграцией HealthKit и Apple Watch',
      technologies: ['UIKit', 'HealthKit', 'WatchKit', 'CloudKit'],
      highlights: [
        <>Синхронизация данных между <span className="text-blue-700">iPhone и Apple Watch</span></>,
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
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Code2 className="text-blue-600" />
          Проекты
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">{project.name}</h3>
                  <p className="text-gray-700 whitespace-pre-line">{project.description}</p>
                </div>
                {project.period && (
                  <span className="text-sm text-gray-600 mt-1 md:mt-0 md:ml-4 whitespace-nowrap">{project.period}</span>
                )}
              </div>
              {project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
              <ul className="list-disc list-inside space-y-1">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-gray-600 pl-5 -indent-5">{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}