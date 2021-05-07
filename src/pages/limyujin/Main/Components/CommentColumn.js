import React from 'react';
import './CommentColumn.scss';

class CommentColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFeedLikePressed: false,
    };
  }

  handleLike = () => {
    this.setState({
      isFeedLikePressed: !this.state.isFeedLikePressed,
    });
  };

  clickDelete = () => {
    this.props.handleDelete(this.props.id);
  };

  render() {
    const { isFeedLikePressed } = this.state;
    const { commentTexts } = this.props;
    const { handleLike } = this;

    return (
      <div className="js-feed-commentYJ">
        <span>wecode_bootcamp</span>
        <span className="js-feed-commentYJ__text">{commentTexts}</span>
        <div className="js-comment-btnsYJ">
          <button className="js-comment-btnYJ like-btn" onClick={handleLike}>
            <i
              className={isFeedLikePressed ? 'fas fa-heart' : 'far fa-heart'}
            />
          </button>
          <button
            className="js-comment-btnYJ delete-btn"
            onClick={this.clickDelete}
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
    );
  }
}

export default CommentColumn;
