import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { GraduationCap, Award } from 'lucide-react';
import { Badge } from './ui/badge';

export function EducationSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <GraduationCap className="text-blue-600" />
          Образование и Сертификаты
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Education */}
          <div>
            <h3 className="font-bold text-lg mb-4">Образование</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="font-bold">Высшее</h4>
                  <span className="text-sm text-gray-600 whitespace-nowrap ml-4">2026</span>
                </div>
                <p className="text-blue-600 font-semibold">Московский политехнический университет, Москва</p>
                <p className="text-gray-700 text-sm mt-1">
                  Факультет информационных технологий
                </p>
                <p className="text-gray-600 text-sm">
                  Информационные системы и технологии,<br />
                  Цифровая трансформация
                </p>
              </div>

              <div className="border-l-4 border-gray-400 pl-4">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="font-bold">Неоконченное высшее</h4>
                  <span className="text-sm text-gray-600 whitespace-nowrap ml-4">2019 — 2022</span>
                </div>
                <p className="text-blue-600 font-semibold">
                  Национальный исследовательский университет "Высшая школа экономики", Москва
                </p>
                <p className="text-gray-700 text-sm mt-1">МИЭМ</p>
                <p className="text-gray-600 text-sm">Компьютерная безопасность</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-bold text-lg flex items-center gap-2 mb-3">
              <Award className="text-blue-600" size={20} />
              Повышение квалификации, курсы
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <p className="font-semibold">42.fr, C Piscine, 42cursus</p>
                    <span className="text-sm text-gray-600 ml-2">2025</span>
                  </div>
                  <p className="text-sm text-gray-600">Школа 21</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <p className="font-semibold">Профессия "iOS-разработчик с нуля", 25 поток</p>
                    <span className="text-sm text-gray-600 ml-2">2022</span>
                  </div>
                  <p className="text-sm text-gray-600">SwiftBook.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <p className="font-semibold">Методы и алгоритмы теории графов</p>
                    <span className="text-sm text-gray-600 ml-2">2021</span>
                  </div>
                  <p className="text-sm text-gray-600">Университет ИТМО • Открытое образование</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <p className="font-semibold">Искусство разработки на современном C++</p>
                    <span className="text-sm text-gray-600 ml-2">2020</span>
                  </div>
                  <p className="text-sm text-gray-600">Московский физико-технический институт • Coursera</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <p className="font-semibold">Основы информационной культуры</p>
                    <span className="text-sm text-gray-600 ml-2">2020</span>
                  </div>
                  <p className="text-sm text-gray-600">Санкт-Петербургский политехнический университет Петра Великого • Открытое образование</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <p className="font-semibold">Прикладная космонавтика и проектирование малых космических аппаратов</p>
                    <span className="text-sm text-gray-600 ml-2">2018</span>
                  </div>
                  <p className="text-sm text-gray-600">МИЭМ НИУ ВШЭ</p>
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="font-bold text-lg mb-3">Языки</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-green-50 text-green-700">
                Русский - Родной
              </Badge>
              <Badge variant="secondary" className="bg-green-50 text-green-700">
                Английский - Upper-Intermediate (B2)
              </Badge>
              <Badge variant="secondary" className="bg-green-50 text-green-700">
                Немецкий - Elementary (A2)
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}