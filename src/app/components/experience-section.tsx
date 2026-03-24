import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
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
          Разработал и масштабировал <span className="text-blue-700">iOS-приложение</span> с аудиторией{' '}
          <span className="text-blue-700">14 000+ скачиваний</span> и рейтингом{' '}
          <span className="text-blue-700">4.8</span>
        </>,
        <>Выполнил миграцию на <span className="text-blue-700">SwiftUI</span>, повысив скорость разработки и упростив поддержку UI</>,
        <>Участвовал в <span className="text-blue-700">полном редизайне продукта</span> и внедрил единую дизайн-систему</>,
        <>Интегрировал <span className="text-blue-700">Kotlin Multiplatform (KMP)</span> для шаринга бизнес-логики между платформами и снижения дублирования кода</>,
        <>Реализовал ключевые пользовательские фичи: главную страницу приложения, блоки подборок, сторис и <span className="text-blue-700">чат с меню самообслуживания (6 000+ пользователей)</span></>,
        'Переработал главную страницу приложения, улучшив пользовательский опыт и навигацию',
        <>Повысил стабильность приложения: увеличил <span className="text-blue-700">crash-free rate с 96% до 99,5%</span></>,
        <>Перевёл проект на <span className="text-blue-700">Tuist</span>, оптимизировал build-фазы и сократил <span className="text-blue-700">время сборки на 4 минуты</span></>,
        <>Настроил инструменты качества кода (<span className="text-blue-700">SwiftLint, Periphery</span>), снизив количество технического долга</>,
        <>Отвечал за <span className="text-blue-700">релизы и публикацию приложения в App Store</span> (CI/CD, подготовка билдов, управление версиями)</>
      ]
    },
    {
      company: 'Онлайн-школа "Кодиум"',
      position: 'Преподаватель информатики',
      period: 'Март 2021 — Октябрь 2021',
      description: '',
      achievements: [
        <>Разработка методических материалов, проведение занятий и мастер-классов по <span className="text-blue-700">Scratch и мобильной разработке</span></>,
        'Создание учебных программ и курсов с нуля',
        'Разработка интерактивных заданий и проектов',
        'Подготовка видео-уроков и презентаций',
        'Проведение открытых мастер-классов и вебинаров',
        'Менторство и сопровождение студентов при создании первых приложений',
        'Взаимодействие с кросс-функциональными командами (дизайнеры, backend-разработчики, QA)'
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
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Briefcase className="text-blue-600" />
          Опыт работы
        </CardTitle>
        <p className="text-lg text-black mt-2 font-semibold">Общий опыт работы: 4+ года</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">{exp.position}</h3>
                  <p className="text-blue-600 font-semibold">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-600 mt-1 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-700 mb-2">{exp.description}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-gray-600 pl-5 -indent-5">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
