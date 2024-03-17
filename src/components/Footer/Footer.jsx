import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <nav className="nav-menu">
            <ul className="nav-menu__menu-list">
              <li className="nav-menu__menu-item">
                <a href="/" className="nav-menu__menu-footer-link">
                  Новинки
                </a>
              </li>

              <li className="nav-menu__menu-item">
                <a href="/" className="nav-menu__menu-footer-link">
                  Чоловіки
                </a>
              </li>

              <li className="nav-menu__menu-item">
                <a href="/" className="nav-menu__menu-footer-link">
                  Жінки
                </a>
              </li>

              <li className="nav-menu__menu-item">
                <a href="/" className="nav-menu__menu-footer-link">
                  Аксесуари
                </a>
              </li>

              <li className="nav-menu__menu-item">
                <a href="/" className="nav-menu__menu-footer-link">
                  Акції
                </a>
              </li>
            </ul>
          </nav>

          <p className="footer__marks">
            &copy;2022 — 2023 IGNAT. Усі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
};