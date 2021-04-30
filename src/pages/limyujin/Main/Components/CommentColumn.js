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
    const { isFeedLikePressed } = this.state;
    const { commentTexts } = this.props;
    return (
      <>
        <div className="js-feed-comment">
          <span>wecode_bootcamp</span>
          <span>{commentTexts.slice(0, 40)}</span>
          <div className="js-comment-btns">
            <button
              className="js-comment-btn like-btn"
              onClick={this.handleLike}
            >
              <i
                className={`${
                  isFeedLikePressed ? 'fas fa-heart' : 'far fa-heart'
                }`}
              ></i>
            </button>
            <button className="js-comment-btn delete-btn">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default CommentColumn;
