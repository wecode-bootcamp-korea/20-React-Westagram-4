import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import {
  faPaperPlane,
  faHeart,
  faSmile,
  faComment,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import './writecomment.scss';
import Comment from './comment';

export default class Writecomment extends Component {
  constructor() {
    super();
    this.state = {
      commentdata: [
        {
          value:
            'As always, inspired by your fan art. So grateful and blessed to have such a great team behind the Fast Saga.',
        },
        { value: 'The fast family is ready' },
        { value: 'R.I.P Paul' },
      ],
      current: '',
    };
  }

  currentCommentInput = e => {
    this.setState({ current: e.target.value });
  };

  clickPost = e => {
    const { commentdata, current } = this.state;

    if (current) {
      this.setState(
        {
          commentdata: commentdata.concat({
            value: this.state.current,
          }),
        },
        () => {
          this.setState({ current: '' });
        }
      );
    }
  };

  enterPost = e => {
    const { commentdata, current } = this.state;

    if (current && e.keyCode === 13) {
      this.setState(
        {
          commentdata: commentdata.concat({
            value: this.state.current,
          }),
        },
        () => {
          this.setState({ current: '' });
        }
      );
    }
  };

  render() {
    const { commentdata } = this.state;

    return (
      <div>
        {commentdata.map((commentdata, index) => {
          return <Comment value={commentdata.value} key={index} />;
        })}
        <div className="feedTime">
          <a href="#">42분 전</a>
        </div>
        <div className="writeComment">
          <button>
            <FontAwesomeIcon icon={faSmile} className="far fa-smile" />
          </button>
          <input
            type="text"
            placeholder="댓글 달기..."
            onChange={this.currentCommentInput}
            onKeyDown={this.enterPost}
            value={this.state.current}
          />
          <button className="postComment" onClick={this.clickPost}>
            게시
          </button>
        </div>
      </div>
    );
  }
}
