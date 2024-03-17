import './HotProduct.scss';

export const HotProduct = ({
  img,
  name,
  category,
  moreAboutCategory,
  price,
}) => {
  return (
    <div className="hot-product">
      <div className="hot-product__photo-container">
        <img
          src={img}
          className="hot-product__image"
          alt="Hot Product Img"
        />
      </div>

      <h4 className="hot-product__title">
        {name}
      </h4>

      <p className="hot-product__info">
        {category}
      </p>

      <p className="hot-product__info">
        {moreAboutCategory}
      </p>
      
      <h4 className="hot-product__price">
        {`${price} грн.`}
      </h4>
    </div>
  );
};
