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
      isCommentBtnDisabled: true,
      commentValue: '',
      commentTexts: [],
      isFeedLikePressed: false,
    };
  }

  handleInput = e => {
    this.setState(
      {
        commentValue: e.target.value,
      },
      () => {
        this.state.commentValue
          ? this.setState({
              isCommentBtnDisabled: false,
            })
          : this.setState({
              isCommentBtnDisabled: true,
            });
      }
    );
  };

  handleSubmitBtn = e => {
    e.preventDefault();
    //비어있을 때 X
    if (this.state.commentValue) {
      this.setState({
        //inputValue들을 버튼 누를 때마다 배열에 저장
        commentTexts: [...this.state.commentTexts, this.state.commentValue],
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

  render() {
    const { commentTexts } = this.state;
    const {
      author,
      profileImg,
      location,
      mainImg,
      text,
      time,
      like,
    } = this.props;

    return (
      <>
        <article className="feed">
          <section className="feed__author-box">
            <div className="feed__author-profile">
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
                <button className="feed__feature-btn" onClick={this.handleLike}>
                  <i
                    className={`${
                      this.state.isFeedLikePressed
                        ? 'fas fa-heart'
                        : 'far fa-heart'
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
                {this.state.isFeedLikePressed ? like + 1 : like}
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
              {commentTexts.map((el, index) => (
                //unique해야 하기 때문에 index를 key로 전달 (임시)
                //time을 기준으로 key를 생성하는 방법 찾아볼 것
                <CommentColumn commentTexts={el} key={index} />
              ))}
            </div>
            <div className="feed__time feed__texts-column">
              <span>{time}</span>
            </div>
          </section>
          <form name="comment-form" className="feed__form">
            <FontAwesomeIcon icon={faSmile} className="smile" />
            <input
              id="mainInput"
              type="text"
              placeholder="댓글달기..."
              value={this.state.commentValue}
              className="feed__input"
              onChange={this.handleInput}
            />
            <button
              className={`feed__submit-btn ${
                this.state.commentValue.length > 0
                  ? ''
                  : 'feed__submit-btn--opacity'
              }`}
              disabled={this.state.isCommentBtnDisabled}
              onClick={this.handleSubmitBtn}
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
