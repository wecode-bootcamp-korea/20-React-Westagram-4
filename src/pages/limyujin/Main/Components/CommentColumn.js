import React from 'react';

class CommentColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFeedLikePressed: false,
    };
  }

  handleLike = e => {
    e.preventDefault();
    this.setState({
      isFeedLikePressed: !this.state.isFeedLikePressed,
    });
  };

  render() {
    return (
      <>
        <div class="js-feed-comment">
          <span>wecode_bootcamp</span>
          <span>{this.props.commentTexts.slice(0, 40)}</span>
          <div class="js-comment-btns">
            <button class="js-comment-btn like-btn" onClick={this.handleLike}>
              <i
                className={`${
                  this.state.isFeedLikePressed ? 'fas fa-heart' : 'far fa-heart'
                }`}
              ></i>
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
