import React from 'react';
import CommentsForm from './CommentsForm';
import CommentList from './CommentList';

const CommentSection = () => {
  return (
    <div className='comment-section'>
      <CommentList />
      <CommentsForm />
    </div>
  );
};

export default CommentSection;
