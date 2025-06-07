import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <a href="/" className={styles.logo}>
          <span>Wibe</span>GO
        </a>

        {/* Бургер только на мобильных */}
        {isMobile && (
          <button
            className={`${styles.burger} ${isMenuOpen ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <a href="#" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Главная</a>
          <a href="#" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>О нас</a>
          <a href="#" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Контакты</a>
          <button className={styles.ctaButton}>Войти</button>
        </nav>
      </div>
    </header>
  );
}