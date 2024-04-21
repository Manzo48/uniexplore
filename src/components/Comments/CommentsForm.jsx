import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewComment } from "../../redux/commentsReducer";
import { RiStarFill } from "react-icons/ri";

const CommentsForm = () => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() && rating > 0) {
      // Создаем объект данных для отправки на сервер
      const commentData = {
        text: comment,
        stars: rating,
        photo: photo,
      };

      // Отправляем данные комментария в хранилище Redux
      dispatch(createNewComment(commentData));

      // Очищаем поля формы
      setRating(0);
      setComment("");
      setPhoto(null);
    }
  };

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setPhoto(selectedFile);
  };

  return (
    <div className="comments-form-container">
      <form onSubmit={handleSubmit} className="comment-form">
        <h2 className="form-title">Оставить отзыв</h2>
        <div className="comment-form-wrapper">
        <div className="comment-form-high">
          <input type="text" placeholder="введите имя..." />
          <div>
            {[1, 2, 3, 4, 5].map((value) => (
              <RiStarFill
                key={value}
                className={value <= rating ? "star-filled" : "star-empty"}
                onClick={() => handleStarClick(value)}
              />
            ))}
          </div>
        </div>
        <div className="comment-form-mid">
          <textarea
            rows={4}
            cols={50}
            placeholder="Напишите отзыв..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="comment-textarea"
          />
          <div className="button__section">
            <label htmlFor="photo-upload" className="attach-photo-button">
              Прикрепить медиафайл
            </label>
            <input
              id="photo-upload"
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <div>
              <button type="submit" className="submit-button">
                Отправить
              </button>
            </div>
          </div>
        </div>
        </div>
      </form>
    </div>
  );
};

export default CommentsForm;
