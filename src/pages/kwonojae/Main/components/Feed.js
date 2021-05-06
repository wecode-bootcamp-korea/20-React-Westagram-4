import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import {
  faPaperPlane,
  faHeart,
  faComment,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import Writecomment from './writecomment';
import './Feed.scss';

export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/kwonojae/Feeddata.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(feedData => {
        this.setState({ feedList: feedData });
      });
  }

  render() {
    const { feedList } = this.state;

    return (
      <section className="feedOJ">
        {feedList.map(feed => {
          return (
            <article key={feed.id}>
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
                <img alt="feed image" src={feed.feedImage} />
              </div>
              <div className="feedBottomBox">
                <div className="feedButtons">
                  <div>
                    <button>
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="far fa-heart"
                      />
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
                  <button>{`좋아요 ${feed.likeCount.toLocaleString()} 개`}</button>
                </div>
                <Writecomment />
              </div>
            </article>
          );
        })}
      </section>
    );
  }
}
