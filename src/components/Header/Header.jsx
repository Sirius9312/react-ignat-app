import { useState } from "react";
import './Header.scss';

export const Header = () => {
  const headerCarouselArr = [
    {
      id: 1,
      leftText: 'Швидше. Вище. Сильніше.',
      leftSecondText: 'Разом із Nike',
      rightText: 'Знижки до 40%',
      rightSecondText: 'Залишився лише тиждень',
    },
    {
      id: 2,
      leftText: 'Швидше. Вище. Сильніше.',
      leftSecondText: 'Разом із Bona',
      rightText: 'Знижки до 50%',
      rightSecondText: 'Залишилося 2 тиждня',
    },
    {
      id: 3,
      leftText: 'Швидше. Вище. Сильніше.',
      leftSecondText: 'Разом із Asics',
      rightText: 'Знижки до 20%',
      rightSecondText: 'Залишилося 3 тиждні',
    }
  ];

  const [movingHeaderCarousel, setMovingHeaderCarousel] = useState(0);

  const prevBlock = () => {
    if (movingHeaderCarousel - 1 > 0) {
      setMovingHeaderCarousel(Math.max(movingHeaderCarousel - 1, 0));
    } else {
      setMovingHeaderCarousel(0);
    }

    if (!movingHeaderCarousel) {
      setMovingHeaderCarousel(headerCarouselArr.length - 1);
    }
  };

  const nextBlock = () => {
    if (movingHeaderCarousel + 1 <= headerCarouselArr.length - 1) {
      setMovingHeaderCarousel(Math.min(
        movingHeaderCarousel + 1, headerCarouselArr.length - 1,
      ));
    } else {
      setMovingHeaderCarousel(headerCarouselArr.length - 1);
    }

    if (movingHeaderCarousel === headerCarouselArr.length - 1) {
      setMovingHeaderCarousel(0);
    }
  };

  return (
    <header className="header App__header">
      <div className="header__top">
        <div className="header__block-above-nav">
          <div className="header__info-flex-container header__info-flex-container--left">
            <a
              href="/"
              className="header__info-link header__info-link--left"
            >
              098 900 09 09
            </a>

            <a
              href="/"
              className="header__info-link header__info-link--left"
            >
              Допомога
            </a>
          </div>

          <div className="header__info-flex-container header__info-flex-container--right">
            <a
              href="/"
              className="header__info-link header__info-link--right"
            >
              Увійти
            </a>

            <div className="header__info-link header__info-link--right">/</div>

            <a
              href="/"
              className="header__info-link header__info-link--right"
            >
              Зареєструватися
            </a>
          </div>
        </div>

        <div className="header__navbar">
          <div className="header__container-menu">
            <a href="/" className="logo">
              <img
                className="logo__image"
                src="img/Logo.svg"
                alt="logoimg"
              />
            </a>

            <nav className="nav-menu">
              <ul className="nav-menu__menu-list">
                <li className="nav-menu__menu-item">
                  <a href="/" className="nav-menu__menu-link">
                    Новинки
                  </a>
                </li>

                <li className="nav-menu__menu-item">
                  <a href="/" className="nav-menu__menu-link">
                    Чоловіки
                  </a>
                </li>

                <li className="nav-menu__menu-item">
                  <a href="/" className="nav-menu__menu-link">
                    Жінки
                  </a>
                </li>

                <li className="nav-menu__menu-item">
                  <a href="/" className="nav-menu__menu-link">
                    Аксесуари
                  </a>
                </li>

                <li className="nav-menu__menu-item">
                  <a href="/" className="nav-menu__menu-link">
                    Акції
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header__searchbar">
            <div className="header__search-container">
              <button
                className="icon icon--search"
              />

              <input
                type="text"
                className="header__search-field"
              />
            </div>
          </div>

          <button className="icon icon--favourites" />

          <button className="icon icon--cart" />
        </div>
      </div>

      <div className="header__header-carousel">
        <div className="header__header-carousel-container">
          <button
            type="button"
            className="header__arrow header__arrow--left"
            onClick={prevBlock}
          >
            <div className="icon icon--header-left-arrow" />
          </button>
          
          <div className="header__slider-content-container">
            <div className="header__carousel">
              <ul className="header__carousel-list">
                {
                  headerCarouselArr.map(block => (
                    <li
                      key={block.id}
                      style={
                        {
                          transition: '500ms',
                          transform: `translateX(-${movingHeaderCarousel * 900}px)`,
                        }
                      }
                    >
                      <div className="header__list-content">
                        <div className="header__left-side-content">
                          <h1 className="header__title-left-side-content">
                            {block.leftText}
                          </h1>

                          <h1 className="header__title-left-side-content header__title-left-side-content--slim">
                            {block.leftSecondText}
                          </h1>
                        </div>

                        <div className="header__right-side-content">
                          <div className="header__right-discount-content">
                            {block.rightText}
                          </div>

                          <div className="header__right-leave-weeks">
                            {block.rightSecondText}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

          <button
            type="button"
            className="header__arrow header__arrow--right"
            onClick={nextBlock}
          >
            <div className="icon icon--header-right-arrow" />
          </button>
        </div>

        <div className="header__carousel-buttons">
          {
            headerCarouselArr.map((item, index) => (
              <button
                key={item.id}
                className={movingHeaderCarousel === index ? "header__carousel-button header__carousel-button--active" : "header__carousel-button"}
                onClick={() => setMovingHeaderCarousel(index)}
              />
            ))
          }
        </div>
      </div>
    </header>
  );
};
