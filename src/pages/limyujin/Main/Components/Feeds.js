import React from 'react';
import CommentColumn from './CommentColumn';
import { getTime } from '../../../../utils/limyujin/getTime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import {
  faComment,
  faPaperPlane,
  faBookmark,
  faSmile,
} from '@fortawesome/free-regular-svg-icons';

import './Feeds.scss';
import './CircleProfile.scss';

class Feeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentValue: '',
      commentCounter: 0,
      commentTexts: [],
      isFeedLikePressed: false,
    };
  }

  handleInput = e => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  handleSubmitBtn = e => {
    e.preventDefault();

    if (this.state.commentValue) {
      const createComment = () => ({
        id: this.state.commentCounter++,
        text: this.state.commentValue,
      });

      this.setState({
        commentTexts: [...this.state.commentTexts, createComment()],
        commentValue: '',
      });
    }
  };

  handleLike = e => {
    e.preventDefault();
    this.setState({
      isFeedLikePressed: !this.state.isFeedLikePressed,
    });
  };

  handleDelete = id => {
    const filteredComments = this.state.commentTexts.filter(
      comment => comment.id !== id
    );
    this.setState({ commentTexts: filteredComments });
  };

  render() {
    const { commentTexts, isFeedLikePressed, commentValue } = this.state;
    const {
      author,
      profileImg,
      location,
      mainImg,
      text,
      time,
      like,
      story,
    } = this.props;
    const { handleDelete, handleInput, handleLike, handleSubmitBtn } = this;
    return (
      <article className="feedYJ">
        <section className="feedYJ__author-box">
          <div className="feedYJ__author-profile">
            <div
              className={
                story
                  ? 'circle-profileYJ__story-border circle-profileYJ__story-border--feed'
                  : ''
              }
            />
            <img
              alt={`${author}님의 프로필사진`}
              src={profileImg}
              className="circle-profileYJ circle-profileYJ--feed-author"
            />
            <div className="feedYJ__author-info">
              <span className="feedYJ__author-info-text">{author}</span>
              <span className="feedYJ__author-info-text">{location}</span>
            </div>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faEllipsisH} className="ellipsis-h" />
            </span>
          </div>
        </section>
        <img alt={`${author}님의 사진`} src={mainImg} />
        <section className="feedYJ__feature">
          <ul className="feedYJ__feature-btn-box">
            <li className="feedYJ__feature-btn-list">
              <button className="feedYJ__feature-btn" onClick={handleLike}>
                <i
                  className={`${
                    isFeedLikePressed ? 'fas fa-heart' : 'far fa-heart'
                  }`}
                />
              </button>
            </li>
            <li className="feedYJ__feature-btn-list">
              <button className="feedYJ__feature-btn">
                <FontAwesomeIcon icon={faComment} className="comment" />
              </button>
            </li>
            <li className="feedYJ__feature-btn-list">
              <button className="feedYJ__feature-btn">
                <FontAwesomeIcon icon={faPaperPlane} className="comment" />
              </button>
            </li>
          </ul>
          <ul className="feedYJ__feature-btn-box">
            <li className="feedYJ__feature-btn-list">
              <button className="feedYJ__feature-btn">
                <FontAwesomeIcon icon={faBookmark} className="bookmark" />
              </button>
            </li>
          </ul>
        </section>
        <section className="feedYJ__texts">
          <div className="feedYJ__texts-column feedYJ__likes">
            <span>좋아요 </span>
            <span className="js-likes-count">
              {isFeedLikePressed
                ? (like + 1).toLocaleString()
                : like.toLocaleString()}
            </span>
            <span>개</span>
          </div>
          <div className="feedYJ__texts-column feedYJ__summary">
            <span className="feedYJ__summary-id">{author}</span>
            <span>{text}</span>
            <span>...</span>
            <button className="feedYJ__summary-btn">더 보기</button>
          </div>
          <div className="feedYJ__texts-column js-feed-comments">
            {commentTexts.map(comment => (
              <CommentColumn
                commentTexts={comment.text}
                key={comment.id}
                id={comment.id}
                handleDelete={handleDelete}
              />
            ))}
          </div>
          <div className="feedYJ__time feedYJ__texts-column">
            <span>{getTime(time)}</span>
          </div>
        </section>
        <form name="comment-form" className="feedYJ__form">
          <FontAwesomeIcon icon={faSmile} className="smile" />
          <input
            type="text"
            placeholder="댓글달기..."
            value={commentValue}
            className="feedYJ__input"
            onChange={handleInput}
          />
          <button
            className={`feedYJ__submit-btn ${
              !commentValue.length > 0 && 'feedYJ__submit-btn--opacity'
            }`}
            disabled={!commentValue}
            onClick={handleSubmitBtn}
          >
            게시
          </button>
        </form>
      </article>
    );
  }
}
export default Feeds;
