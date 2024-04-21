import React from 'react';

const Comment = ({ comment, username }) => {
  const renderStars = () => {
    const filledStars = comment.stars > 0 ? comment.stars : 0;
    const emptyStars = 5 - filledStars;

    const starArray = [];
    for (let i = 0; i < filledStars; i++) {
      starArray.push(<span key={i}>★</span>);
    }
    for (let i = 0; i < emptyStars; i++) {
      starArray.push(<span key={filledStars + i}>☆</span>);
    }
    return starArray;
  };

  // Функция для форматирования даты
  const formatCreatedAt = (createdAt) => {
    const date = new Date(createdAt);
    const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    return formattedDate;
  };

  return (
    <div className="comment">
      {comment.avatar && (
        <div className="avatar-container">
          <img src={comment.avatar} alt="Avatar" className="avatar" />
        </div>
      )}
      <div className="comment-content-wrapper">
        <div className="comment-content-info">
          <p className="comment-content">{comment.text}</p>
          <p className="created-at">{formatCreatedAt(comment.createdAt)}</p>
          <p className="username">{username}</p> {/* Добавляем ник пользователя */}
        </div>
        <div className="star-rating">
          {renderStars()}
        </div>
        {comment.image && (
          <div className="attached-image-container">
            <img src={comment.image} alt="Attached" className="attached-image" /> {/* Исправлено: comment.Image -> comment.image */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
