import React from 'react';

class CommentColumn extends React.Component {
  render() {
    return (
      <>
        <div class="js-feed-comment">
          <span>wecode_bootcamp</span>
          <span>{this.props.commentTexts}</span>
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
