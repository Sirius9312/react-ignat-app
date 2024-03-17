import { HotProduct } from "../HotProduct/HotProduct";

export const HotProductsList = ({
  productList,
  movingProducts
}) => {
  return (
    <ul className="carousel__list">
      {
        productList.map(product => {
          const {
            id,
            img,
            name,
            category,
            moreAboutCategory,
            price,
          } = product;

          return (
            <li
              key={id}
              style={
                {
                  transition: '1s',
                  transform: `translateX(${(-movingProducts * (370 + 30))}px)`,
                }
              }
            >
              <HotProduct
                img={img}
                name={name}
                category={category}
                moreAboutCategory={moreAboutCategory}
                price={price}
              />
            </li>
          );
        })
      }
    </ul>
  );
};