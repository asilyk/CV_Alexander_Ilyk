export function SkillsSection() {
  const skills = {
    'Языки программирования': ['Swift', 'Objective-C', 'Python', 'Kotlin'],
    'Фреймворки & Библиотеки': [
      'SwiftUI',
      'UIKit',
      'RxSwift',
      'Alamofire',
      'Moya',
      'SnapKit',
      'Swinject',
      'Core Data',
      'Realm',
      'Core Animation',
      'URLSession'
    ],
    'Инструменты разработки': [
      'Xcode',
      'Git',
      'Tuist',
      'SPM',
      'CocoaPods',
      'Fastlane',
      'Proxyman',
      'Figma',
      'JIRA'
    ],
    'Архитектурные паттерны': ['MVC', 'MVVM', 'VIPER', 'Clean Architecture'],
    'CI/CD & Тестирование': [
      'CI/CD',
      'Crashlytics',
      'TestFlight',
      'Unit Testing',
      'UI Testing',
      'Screenshot Testing',
      'Preview Automation',
      'Firebase'
    ],
    'AI-ассистенты & Инструменты': [
      'Codex',
      'Cursor',
      'Figma Make',
      'Claude',
      'Composer',
      'Skills'
    ],
    'Другие технологии': [
      'Kotlin Multiplatform',
      'REST API',
      'App Store Connect',
      'Push Notifications',
      'Notification Extensions',
      'In-App Purchases',
      'Grand Central Dispatch (GCD)'
    ]
  };

  return (
    <section className="resume-card">
      <div className="resume-card__header">
        <h2 className="resume-card__title">Технические навыки</h2>
      </div>
      <div className="resume-card__content">
        <div className="resume-stack-md">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="resume-category-title">{category}</h3>
              <div className="resume-badge-list">
                {items.map((skill) => (
                  <span key={skill} className="resume-badge resume-badge--blue">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
