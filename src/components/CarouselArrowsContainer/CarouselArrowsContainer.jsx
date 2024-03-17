import './CarouselArrowsContainer.scss';

export const CarouselArrowsContainer = ({
  step,
  prevMoving,
  nextMoving,
  setMoving,
  moving,
  itemsLength,
  clicks,
  setClicks
}) => {
  return (
    <div className="title-arrows-carousel-container__carousel-arrows-pages-container">
      <div className="title-arrows-carousel-container__pages">
        <p className="title-arrows-carousel-container__current-page">
          {`0${clicks}`}
        </p>
        <p className="title-arrows-carousel-container__current-page">/</p>
        <p className="title-arrows-carousel-container__current-page">
          {`0${itemsLength / step}`}
        </p>
      </div>

      <div className="title-arrows-carousel-container__arrows">
        <button
          disabled={moving <= 0}
          type="button"
          className={
            moving <= 0
              ? "title-arrows-carousel-container__arrow title-arrows-carousel-container__arrow--disable"
              : "title-arrows-carousel-container__arrow"
          }
          onClick={() => prevMoving(step, setMoving, setClicks, moving, clicks)}
        >
          <div className={
            moving <= 0
              ? "icon icon--carousel-disable-left-arrow"
              : "icon icon--carousel-enable-left-arrow"
            }
          />
        </button>

        <button
          disabled={moving >= itemsLength - step}
          type="button"
          className={
            moving >= itemsLength - step
              ? "title-arrows-carousel-container__arrow title-arrows-carousel-container__arrow--disable"
              : "title-arrows-carousel-container__arrow"
          }
          onClick={() => nextMoving(step, itemsLength, setMoving, setClicks, moving, clicks)}
        >
          <div className={
            moving >= itemsLength - step
              ? "icon icon--carousel-disable-right-arrow"
              : "icon icon--carousel-enable-right-arrow"
            }
          />
        </button>
      </div>
    </div>
  );
};
