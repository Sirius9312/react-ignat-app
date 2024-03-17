import './Comment.scss';

export const Comment = ({
  img,
  name,
  comment,
}) => {
  return (
    <div className="comment">
      <div className="comment__avatar-name-container">
        <div className="comment__photo-container">
          <img
            alt="img"
            className="comment__image"
            src={img}
          />
        </div>

        <div className="comment__name-container">
          <div className="comment__stars">
            <div className="icon icon--active-star" />
            <div className="icon icon--active-star" />
            <div className="icon icon--active-star" />
            <div className="icon icon--active-star" />
            <div className="icon icon--star" />
          </div>

          <p className="comment__name">
            {name}
          </p>
        </div>
      </div>

      <p className="comment__comment">
        {comment}
      </p>
    </div>
  );
};
