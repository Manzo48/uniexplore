import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Comment from "./Comment";
import { fetchComments } from "../../redux/commentsReducer";
import "./index.css"; // Подключаем файл стилей

const CommentList = () => {
  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();
  console.log(comments)
  useEffect(() => {
    // Вызываем thunk-функцию fetchComments для загрузки комментариев из API
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <div className="comment-list-wrapper">
      <h2 className="h2">Отзывы</h2>
      <div className="comment-list-container">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
