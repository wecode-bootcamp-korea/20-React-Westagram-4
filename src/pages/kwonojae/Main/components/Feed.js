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
import Writecomment from './writecomment';

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
            <Writecomment />
          </div>
        </article>
      </section>
    );
  }
}

export default Feed;
