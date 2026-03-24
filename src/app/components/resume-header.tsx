import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

export function ResumeHeader() {
  return (
    <header className="resume-header">
      <div className="resume-header__layout">
        <div className="resume-header__intro">
          <h1 className="resume-header__name">
            <span className="resume-header__name-first">Александр</span>
            <span className="resume-header__name-last">Илык</span>
          </h1>
          <h2 className="resume-header__role">Middle+ iOS Developer</h2>
          <p className="resume-header__summary">
            <span className="resume-header__emphasis">Middle+ iOS разработчик</span> с 4+ годами коммерческого опыта
            <br />
            Тимлид проекта <span className="resume-header__emphasis">indoor-навигации</span> и создания цифровых двойников зданий
            <br />
            Поддержка и разработка приложения с{' '}
            <span className="resume-header__emphasis">14 000+ скачиваний</span>
            <br />
            Специализируюсь на <span className="resume-header__emphasis">Swift</span>,{' '}
            <span className="resume-header__emphasis">SwiftUI</span>,{' '}
            <span className="resume-header__emphasis">UIKit</span> и{' '}
            <span className="resume-header__emphasis">Kotlin Multiplatform</span>
          </p>
        </div>

        <div className="resume-header__contacts">
          <a href="mailto:asilyk112@gmail.com" className="resume-header__contact-link">
            <Mail size={16} />
            <span>asilyk112@gmail.com</span>
          </a>
          <a href="tel:+79067319225" className="resume-header__contact-link">
            <Phone size={16} />
            <span>+7 (906) 731-92-25</span>
          </a>
          <div className="resume-header__contact-link resume-header__contact-static">
            <MapPin size={16} />
            <span>Москва, Россия</span>
          </div>
          <a href="https://t.me/asilyk" target="_blank" rel="noopener noreferrer" className="resume-header__contact-link">
            <Send size={16} />
            <span>@asilyk</span>
          </a>
          <a
            href="https://linkedin.com/in/asilyk/"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-header__contact-link"
          >
            <Linkedin size={16} />
            <span>linkedin.com/in/asilyk/</span>
          </a>
          <a
            href="https://github.com/asilyk"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-header__contact-link"
          >
            <Github size={16} />
            <span>github.com/asilyk</span>
          </a>
        </div>
      </div>
    </header>
  );
}
