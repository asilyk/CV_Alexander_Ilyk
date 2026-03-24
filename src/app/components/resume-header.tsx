import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Badge } from './ui/badge';

export function ResumeHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">Александр Илык</h1>
          <h2 className="text-xl text-blue-100 mb-4">Middle+ iOS Developer</h2>
          <p className="text-blue-100 max-w-2xl leading-loose">
            Middle+ iOS разработчик с 4+ годами коммерческого опыта<br />
            Тимлид проекта indoor-навигации и создания цифровых двойников зданий<br />
            Поддержка и разработка приложения с 14 000+ скачиваний<br />
            Специализируюсь на Swift, SwiftUI, UIKit и Kotlin Multiplatform
          </p>
        </div>
        
        <div className="flex flex-col gap-2 text-sm">
          <a href="mailto:asilyk112@gmail.com" className="flex items-center gap-2 hover:text-blue-200 transition-colors underline-offset-3 hover:underline focus-visible:underline">
            <Mail size={16} />
            <span>asilyk112@gmail.com</span>
          </a>
          <a href="tel:+79067319225" className="flex items-center gap-2 hover:text-blue-200 transition-colors underline-offset-3 hover:underline focus-visible:underline">
            <Phone size={16} />
            <span>+7 (906) 731-92-25</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Москва, Россия</span>
          </div>
          <a
            href="https://t.me/asilyk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-200 transition-colors underline-offset-3 hover:underline focus-visible:underline"
          >
            <Send size={16} />
            <span>@asilyk</span>
          </a>
          <a
            href="https://linkedin.com/in/asilyk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-200 transition-colors underline-offset-3 hover:underline focus-visible:underline"
          >
            <Linkedin size={16} />
            <span>linkedin.com/in/asilyk/</span>
          </a>
          <a
            href="https://github.com/asilyk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-200 transition-colors underline-offset-3 hover:underline focus-visible:underline"
          >
            <Github size={16} />
            <span>github.com/asilyk</span>
          </a>
        </div>
      </div>
    </div>
  );
}
