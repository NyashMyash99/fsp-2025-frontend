import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          
          <div className={styles.brandColumn}>
            <div className={styles.logo}>WibeGO</div>
            <p className={styles.tagline}>Ваш интелектуальный гид</p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a href="#" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Навигация</h3>
            <a href="#" className={styles.link}>Главная</a>
            <a href="#" className={styles.link}>О нас</a>
            <a href="#" className={styles.link}>Контакты</a>
          </div>

          <div className={styles.contactColumn}>
            <h3 className={styles.columnTitle}>Контакты</h3>
            <a href="mailto:hello@hackapp.com" className={styles.link}>
              <EmailIcon /> hello@hackapp.com
            </a>
            <a href="tel:+78005553535" className={styles.link}>
              <PhoneIcon /> +7 (800) 555-35-35
            </a>
          </div>

        </div>

        <div className={styles.copyright}>
          © {new Date().getFullYear()} WibeGO. Все права защищены.
        </div>
      </div>
    </footer>
  );
}

// Иконки (можно заменить на свои)
const TwitterIcon = () => <span>𝕏</span>;
const GitHubIcon = () => <span>⎔</span>;
const LinkedInIcon = () => <span>Ⓛ</span>;
const EmailIcon = () => <span>✉</span>;
const PhoneIcon = () => <span>📞</span>;