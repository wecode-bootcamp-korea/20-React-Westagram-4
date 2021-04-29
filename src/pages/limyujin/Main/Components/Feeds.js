import React from 'react';
// mixin 직접 하려면
// import "./Feeds.scss";
// import CommentColumn from './CommentColumn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
  faSmile,
} from '@fortawesome/free-regular-svg-icons';

class Feeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCommentExists: false,
      isCommentBtnDisabled: true,
      commentValue: '',
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
              isCommentExists: true,
              isCommentBtnDisabled: false,
            })
          : this.setState({
              isCommentExists: false,
              isCommentBtnDisabled: true,
            });
      },
      () => {
        console.log(this.state.commentValue);
      }
    );
  };
  render() {
    return (
      <>
        <div className="feed-box">
          <article className="feed">
            <section className="feed__author-box">
              <div className="feed__author-profile">
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/94003553_231199768097287_5780010293664940032_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=EjeCkaUjMMgAX9m0Dym&edm=AEF8tYYAAAAA&ccb=7-4&oh=70612d83cfbfb530e39c0695f4af134b&oe=60A4EFD6&_nc_sid=a9513d"
                  alt="rilip_official님의 프로필사진"
                  className="circle-profile circle-profile--feed-author"
                />
                <div className="feed__author-info">
                  <span className="feed__author-info-text">rilip_official</span>
                  <span className="feed__author-info-text">suwon</span>
                </div>
              </div>
              <div>
                <span>
                  <FontAwesomeIcon icon={faEllipsisH} className="ellipsis-h" />
                </span>
              </div>
            </section>
            <img
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/175260006_501085961251601_2268575138294333749_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=RJE0N2r6OsQAX8n_B-z&edm=AIQHJ4wAAAAA&ccb=7-4&oh=25fe99fccac6c74f937965f44b445884&oe=60A31BE1&_nc_sid=7b02f1"
              alt="rilip_official님의 사진"
            />
            <section className="feed__feature">
              <ul className="feed__feature-btn-box">
                <li className="feed__feature-btn-list">
                  <button className="feed__feature-btn">
                    <FontAwesomeIcon icon={faHeart} className="heart" />
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
                <span className="js-likes-count">100</span>
                <span>개</span>
              </div>
              <div className="feed__texts-column feed__summary">
                <span className="feed__summary-id">rilip_official</span>
                <span>위워크에서 진행한 베이크 클래스</span>
                <span>...</span>
                <button className="feed__summary-btn">더 보기</button>
              </div>
              <div className="feed__texts-column js-feed-comments"></div>
              <div className="feed__time feed__texts-column">
                <span>17시간 전</span>
              </div>
            </section>
            <form name="comment-form" className="feed__form">
              <FontAwesomeIcon icon={faSmile} className="smile" />
              <input
                type="text"
                placeholder="댓글달기..."
                className="feed__input"
                onChange={this.handleInput}
              />
              <button
                className={`feed__submit-btn ${
                  this.state.isCommentExists ? '' : 'feed__submit-btn--opacity'
                }`}
                disabled={this.state.isCommentBtnDisabled}
              >
                게시
              </button>
            </form>
          </article>
          <article className="feed">
            <section className="feed__author-box">
              <div className="feed__author-profile">
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/43778288_543710792708920_7607289634233516032_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=pWeqQfWFVmcAX_kmyQF&edm=AEF8tYYAAAAA&ccb=7-4&oh=4ec3ccefbd37ce11dc957b7838b77d05&oe=60A634E6&_nc_sid=a9513d"
                  alt="krtigersugar님의 프로필사진"
                  className="circle-profile circle-profile--feed-author"
                />
                <div className="feed__author-info">
                  <span className="feed__author-info-text">krtigersugar</span>
                  <span className="feed__author-info-text"></span>
                </div>
              </div>
              <div>
                <span>
                  <i className="fas fa-ellipsis-h"></i>
                </span>
              </div>
            </section>
            <img
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/175810080_497894738013789_23924597793451987_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=Tu_Wnsa9tiwAX80ztR3&edm=AIQHJ4wAAAAA&ccb=7-4&oh=d91ccc0c9d232e280584d62e6c2b4652&oe=60A513B3&_nc_sid=7b02f1"
              alt="krtigersugar님의 사진"
            />
            <section className="feed__feature">
              <ul className="feed__feature-btn-box">
                <li className="feed__feature-btn-list">
                  <button className="feed__feature-btn">
                    <FontAwesomeIcon icon={faHeart} className="heart" />
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
                <span className="js-likes-count">78</span>
                <span>개</span>
              </div>
              <div className="feed__texts-column feed__summary">
                <span className="feed__summary-id">krtigersugar</span>
                <span>✨신메뉴 소문내기 이벤트✨</span>
                <span>...</span>
                <button className="feed__summary-btn">더 보기</button>
              </div>
              <div className="feed__texts-column js-feed-comments"></div>
              <div className="feed__time feed__texts-column">
                <span>17시간 전</span>
              </div>
            </section>
            <form name="comment-form" className="feed__form">
              <FontAwesomeIcon icon={faSmile} className="smile" />
              <input
                type="text"
                placeholder="댓글달기..."
                className="feed__input"
              />
              <button className="feed__submit-btn feed__submit-btn--opacity">
                게시
              </button>
            </form>
          </article>
          <article className="feed">
            <section className="feed__author-box">
              <div className="feed__author-profile">
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/163663946_197803795082398_1924950408015660072_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=Jvc5nBmQBVYAX-SQowW&edm=AEF8tYYAAAAA&ccb=7-4&oh=f33f3a525c2908fd436991a6de94643d&oe=60A7CC97&_nc_sid=a9513d"
                  alt="anko_8090님의 프로필사진"
                  className="circle-profile circle-profile--feed-author"
                />
                <div className="feed__author-info">
                  <span className="feed__author-info-text">anko_8090</span>
                  <span className="feed__author-info-text"></span>
                </div>
              </div>
              <div>
                <span>
                  <i className="fas fa-ellipsis-h"></i>
                </span>
              </div>
            </section>
            <img
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/176282393_1404333343292706_135428849258000862_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=tH6ZNMQ8JUoAX9tGaTC&tn=E3vZwT1zJnhTn-R6&edm=AIQHJ4wAAAAA&ccb=7-4&oh=53efa849b2a73835e8ea08a5f35ce7dc&oe=60A6C3FF&_nc_sid=7b02f1"
              alt="anko_8090님의 사진"
              className="feed__img"
            />
            <section className="feed__feature">
              <ul className="feed__feature-btn-box">
                <li className="feed__feature-btn-list">
                  <button className="feed__feature-btn">
                    <FontAwesomeIcon icon={faHeart} className="heart" />
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
                <span className="js-likes-count">32</span>
                <span>개</span>
              </div>
              <div className="feed__texts-column feed__summary">
                <span className="feed__summary-id">anko_8090</span>
                <span>알박기 제법...</span>
                <span>...</span>
                <button className="feed__summary-btn">더 보기</button>
              </div>
              <div className="feed__texts-column js-feed-comments"></div>
              <div className="feed__time feed__texts-column">
                <span>17시간 전</span>
              </div>
            </section>
            <form name="comment-form" className="feed__form">
              <FontAwesomeIcon icon={faSmile} className="smile" />
              <input
                type="text"
                placeholder="댓글달기..."
                className="feed__input"
              />
              <button className="feed__submit-btn feed__submit-btn--opacity">
                게시
              </button>
            </form>
          </article>
        </div>
      </>
    );
  }
}
export default Feeds;
