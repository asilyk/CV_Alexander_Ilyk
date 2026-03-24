import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

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
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Технические навыки</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-700 mb-2">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}