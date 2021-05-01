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
import './writecomment.scss';

export default class Writecomment extends Component {
  constructor() {
    super();
    this.state = {
      commentdata: [
        { value: 'The fast family is ready' },
        { value: 'R.I.P Paul' },
      ],
      current: '',
    };
  }

  handleInput = e => {
    this.setState({ current: e.target.value });
  };

  clickPost = e => {
    const { commentdata, current } = this.state;
    e.preventDefault();

    if (current) {
      console.log(e);
      this.setState({
        commentdata: commentdata.concat({
          value: current,
        }),
      });
    }
  };

  enterPost = e => {
    const { commentdata, current } = this.state;

    if (current && e.keyCode === 13) {
      this.setState({
        commentdata: commentdata.concat({
          value: current,
        }),
      });
      e.target.value = '';
    }
  };

  render() {
    const { commentdata } = this.state;

    return (
      <div>
        <div className="feedText">
          <p>
            <a href="#">글쓴이ID</a> As always, inspired by your fan art. So
            grateful and blessed to have such a great team behind the Fast Saga.{' '}
            <button type="button">더 보기</button>
          </p>
        </div>
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
            onChange={this.handleInput}
            onKeyDown={this.enterPost}
          />
          <button className="postComment" onClick={this.clickPost}>
            게시
          </button>
        </div>
      </div>
    );
  }
}
