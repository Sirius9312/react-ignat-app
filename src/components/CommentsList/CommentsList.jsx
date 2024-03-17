import { Comment } from "../Comment/Comment";

export const CommentsList = ({
  comments,
  movingComments
}) => {
  return (
    <ul className="carousel__list">
      {
        comments.map(comm => {
          const {
            id,
            img,
            name,
            comment,
          } = comm;

          return (
            <li
              key={id}
              style={
                {
                  transition: '1s',
                  transform: `translateX(${(-movingComments * (270 + 30))}px)`,
                }
              }
            >
              <Comment
                img={img}
                name={name}
                comment={comment}
              />
            </li>
          );
        })
      }
    </ul>
  );
};
