import React from 'react';

class CommentColumn extends React.Component {
  render() {
    return (
      <>
        <div class="js-feed-comment">
          <span>${myID}</span>
          <span>${inputValue}</span>
          <div class="js-comment-btns">
            <button class="js-comment-btn like-btn">
              <i class="far fa-heart"></i>
            </button>
            <button class="js-comment-btn delete-btn">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default CommentColumn;
