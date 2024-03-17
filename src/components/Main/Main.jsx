import { useState } from "react";
import { hotProducts, comments } from '../../helpers/variables';
import { prevMoving, nextMoving } from '../../helpers/functions';
import { HotProductsList } from "../HotProductsList/HotProductsList";
import { CommentsList } from "../CommentsList/CommentsList";
import { CarouselArrowsContainer } from "../CarouselArrowsContainer/CarouselArrowsContainer";

export const Main = () => {
  const [clicksHotProducts, setClicksHotProducts] = useState(1);
  const [movingHotProducts, setMovingHotProducts] = useState(0);
  const [clicksComments, setClicksComments] = useState(1);
  const [movingComments, setMovingComments] = useState(0);

  return (
    <main>
      <section className="for-your-friends App__for-your-friends">
        <div className="container">
          <div className="for-your-friends__content">
            <div className="grid-cover">
              <div className="for-your-friends__container">
                <div className="for-your-friends__info-container">
                  <h2 className="for-your-friends__title">
                    Ми знаємо, що сподобається вашим “великим” друзям!
                  </h2>

                  <p className="for-your-friends__info">
                    Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію термобілизни “Big warm”
                  </p>

                  <a href="/" className="for-your-friends__button">
                    До каталогу
                  </a>
                </div>

                <div className="for-your-friends__photo-container">
                  <img
                    src="img/photo1.jpg"
                    className="for-your-friends__image"
                    alt="Img 1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hot-products App__hot-products">
        <div className="container">
          <div className="title-arrows-carousel-container">
            <h3 className="title-arrows-carousel-container__title">
              Найгарячіші товари
            </h3>

            <CarouselArrowsContainer
              step={3}
              prevMoving={prevMoving}
              nextMoving={nextMoving}
              setMoving={setMovingHotProducts}
              moving={movingHotProducts}
              itemsLength={hotProducts.length}
              clicks={clicksHotProducts}
              setClicks={setClicksHotProducts}
            />
          </div>
        </div>

        <div className="carousel">
          <HotProductsList
            productList={hotProducts}
            movingProducts={movingHotProducts}
          />
        </div>
      </section>

      <section className="stocks App__stocks">
        <div className="container">
          <div className="stocks__content">
            <div className="separator separator--after-hot-products" />

            <div className="grid-cover">
              <div className="stocks__container">
                <h2 className="stocks__title">
                  Спіймай всі акції!
                </h2>

                <p className="stocks__info">
                  Підписуйся на Email розсилку і отримуй інформацію про всі акції, які будуть з`влятись у нашому магазині. А у нас їх багато :D
                </p>

                <div className="stocks__form-container">
                  <form className="stocks__form">
                    <input
                      type="text"
                      placeholder="ВВЕДІТЬ"
                      className="stocks__field"
                    />

                    <button
                      type="submit"
                      className="stocks__button"
                    >
                      Підписатись
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="comments App__comments">
        <div className="container">
          <div className="title-arrows-carousel-container">
            <h3 className="title-arrows-carousel-container__title title-arrows-carousel-container__title--comment-title">
              Відгуги наших клієнтів
            </h3>

            <CarouselArrowsContainer
              step={4}
              prevMoving={prevMoving}
              nextMoving={nextMoving}
              setMoving={setMovingComments}
              moving={movingComments}
              itemsLength={comments.length}
              clicks={clicksComments}
              setClicks={setClicksComments}
            />
          </div>
        </div>

        <div className="carousel">
          <CommentsList
            comments={comments}
            movingComments={movingComments}
          />
        </div>
      </section>

      <div className="separator separator--after-comments" />

      <section className="more-info App__more-info">
        <div className="container">
          <div className="more-info__content">
            <div className="grid-cover">
              <div className="more-info__block more-info__block--contact-center">
                <h3 className="more-info__title">
                  Контакт-центр
                </h3>

                <a href="/" className="more-info__information">
                  098 900 09 09
                </a>

                <a href="/" className="more-info__information">
                  Пн - Пт 09:00 - 21:00
                </a>

                <a href="/" className="more-info__information">
                  Пн - Пт 09:00 - 21:00
                </a>
              </div>

              <div className="more-info__block more-info__block--for-customers">
                <h3 className="more-info__title">
                  Покупцям
                </h3>

                <a href="/" className="more-info__information">
                  Оплата і доставка
                </a>

                <a href="/" className="more-info__information">
                  Повернення
                </a>

                <a href="/" className="more-info__information">
                  Питання та відповіді
                </a>
              </div>

              <div className="more-info__block more-info__block--account">
                <h3 className="more-info__title">
                  Особистий кабінет
                </h3>

                <a href="/" className="more-info__information">
                  Мої дані
                </a>

                <a href="/" className="more-info__information">
                  Історія замовлень
                </a>

                <a href="/" className="more-info__information">
                  Улюблені
                </a>

                <a href="/" className="more-info__information">
                  Розсилки
                </a>
              </div>

              <div className="more-info__block more-info__block--about-company">
                <h3 className="more-info__title">
                  Про компанію
                </h3>

                <a href="/" className="more-info__information">
                  Про нас
                </a>

                <a href="/" className="more-info__information">
                  Новини
                </a>

                <a href="/" className="more-info__information">
                  Стати партнером
                </a>

                <a href="/" className="more-info__information">
                  Угода користувача
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};