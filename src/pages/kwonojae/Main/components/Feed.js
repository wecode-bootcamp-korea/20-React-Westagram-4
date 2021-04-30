import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import {
  faPaperPlane,
  faHeart,
  faSmile,
  faComment,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import './Feed.scss';

class Feed extends React.Component {
  render() {
    return (
      <section className="feeds">
        <article>
          <div className="feedHeader">
            <div className="writer">
              <img
                src="/images/kwonojae/profileImage.jpeg"
                alt="writer profile image"
              />

              <h5>
                <a href="#">vindiesel</a>
              </h5>
            </div>
            <button type="button">
              {/* <i className="fas fa-ellipsis-h"></i> */}
              <FontAwesomeIcon
                icon={faEllipsisH}
                className="fas fa-ellipsis-h"
              />
            </button>
          </div>
          <div className="feedImage">
            <img alt="feed image" src="/images/kwonojae/feedImage.jpeg" />
          </div>
          <div className="feedBottomBox">
            <div className="feedButtons">
              <div>
                <button>
                  <FontAwesomeIcon icon={faHeart} className="far fa-heart" />
                </button>
                <button>
                  <FontAwesomeIcon
                    icon={faComment}
                    className="far fa-comment"
                  />
                </button>
                <button>
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="far fa-paper-plane"
                  />
                </button>
              </div>
              <button>
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="far fa-bookmark"
                />
              </button>
            </div>
            <div className="feedLike">
              <button>좋아요 1,119,102개</button>
            </div>
            <div className="feedText">
              <p>
                <a href="#">vindiesel</a> As always, inspired by your fan art.
                So grateful and blessed to have such a great team behind the
                Fast Saga. <button type="button">더 보기</button>
              </p>
            </div>
            <div className="feedComment"></div>
            <div className="feedTime">
              <a href="#">42분 전</a>
            </div>
          </div>
          <div>
            <form className="writeHereComment">
              <button>
                <FontAwesomeIcon icon={faSmile} className="far fa-smile" />
              </button>
              <input type="text" placeholder="댓글 달기..." />
              <button className="postComment">게시</button>
            </form>
          </div>
        </article>
      </section>
    );
  }
}

export default Feed;
