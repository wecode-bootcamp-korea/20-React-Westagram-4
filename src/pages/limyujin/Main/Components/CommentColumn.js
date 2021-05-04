import React from 'react';
import './CommentColumn.scss';

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
    const { commentTexts, handleDelete } = this.props;
    const { handleLike } = this;
    const clickDelete = () => {
      handleDelete(this.props.id);
    };

    return (
      <>
        <div className="js-feed-commentYJ">
          <span>wecode_bootcamp</span>
          <span>{commentTexts.slice(0, 40)}</span>
          <div className="js-comment-btnsYJ">
            <button className="js-comment-btnYJ like-btn" onClick={handleLike}>
              <i
                className={`${
                  isFeedLikePressed ? 'fas fa-heart' : 'far fa-heart'
                }`}
              ></i>
            </button>
            <button
              className="js-comment-btnYJ delete-btn"
              onClick={clickDelete}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default CommentColumn;
