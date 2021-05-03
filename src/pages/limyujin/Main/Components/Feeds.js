import React from 'react';
import CommentColumn from './CommentColumn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import {
  faComment,
  faPaperPlane,
  faBookmark,
  faSmile,
} from '@fortawesome/free-regular-svg-icons';

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
    const getTime = t => {
      let result = '';
      if (t / 60 / 60 / 1000 < 1) {
        result = t / 60 / 1000 + '분 전';
      } else if (t > 86400000) {
        result = '1일 전';
      } else {
        result = t / 60 / 60 / 1000 + '시간 전';
      }
      return result;
    };

    return (
      <>
        <article className="feed">
          <section className="feed__author-box">
            <div className="feed__author-profile">
              <div
                className={
                  story
                    ? 'circle-profile__story-border circle-profile__story-border--feed'
                    : ''
                }
              ></div>
              <img
                src={profileImg}
                alt="`${author}님의 프로필사진`"
                className="circle-profile circle-profile--feed-author"
              />
              <div className="feed__author-info">
                <span className="feed__author-info-text">{author}</span>
                <span className="feed__author-info-text">{location}</span>
              </div>
            </div>
            <div>
              <span>
                <FontAwesomeIcon icon={faEllipsisH} className="ellipsis-h" />
              </span>
            </div>
          </section>
          <img src={mainImg} alt="`${author}님의 사진`" />
          <section className="feed__feature">
            <ul className="feed__feature-btn-box">
              <li className="feed__feature-btn-list">
                <button className="feed__feature-btn" onClick={handleLike}>
                  <i
                    className={`${
                      isFeedLikePressed ? 'fas fa-heart' : 'far fa-heart'
                    }`}
                  ></i>
                </button>
              </li>
              <li className="feed__feature-btn-list">
                <button className="feed__feature-btn">
                  <FontAwesomeIcon icon={faComment} className="comment" />
                </button>
              </li>
              <li className="feed__feature-btn-list">
                <button className="feed__feature-btn">
                  <FontAwesomeIcon icon={faPaperPlane} className="comment" />
                </button>
              </li>
            </ul>
            <ul className="feed__feature-btn-box">
              <li className="feed__feature-btn-list">
                <button className="feed__feature-btn">
                  <FontAwesomeIcon icon={faBookmark} className="bookmark" />
                </button>
              </li>
            </ul>
          </section>
          <section className="feed__texts">
            <div className="feed__texts-column feed__likes">
              <span>좋아요 </span>
              <span className="js-likes-count">
                {isFeedLikePressed
                  ? (like + 1).toLocaleString()
                  : like.toLocaleString()}
              </span>
              <span>개</span>
            </div>
            <div className="feed__texts-column feed__summary">
              <span className="feed__summary-id">{author}</span>
              <span>{text}</span>
              <span>...</span>
              <button className="feed__summary-btn">더 보기</button>
            </div>
            <div className="feed__texts-column js-feed-comments">
              {/* 댓글 들어갈 자리 */}
              {commentTexts.map(el => (
                <CommentColumn
                  commentTexts={el.text}
                  key={el.id}
                  id={el.id}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
            <div className="feed__time feed__texts-column">
              <span>{getTime(time)}</span>
            </div>
          </section>
          <form name="comment-form" className="feed__form">
            <FontAwesomeIcon icon={faSmile} className="smile" />
            <input
              type="text"
              placeholder="댓글달기..."
              value={commentValue}
              className="feed__input"
              onChange={handleInput}
            />
            <button
              className={`feed__submit-btn ${
                commentValue.length > 0 ? '' : 'feed__submit-btn--opacity'
              }`}
              disabled={commentValue ? false : true}
              onClick={handleSubmitBtn}
            >
              게시
            </button>
          </form>
        </article>
      </>
    );
  }
}
export default Feeds;
