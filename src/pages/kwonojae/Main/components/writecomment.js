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
      commentList: [],
      current: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/data/kwonojae/commentData.json', {
      method: 'GET',
    })
      .then(Response => Response.json())
      .then(data => {
        this.setState({ commentList: data });
      });
  }

  currentCommentInput = e => {
    this.setState({ current: e.target.value });
  };

  commentPost = e => {
    const { commentList, current } = this.state;
    e.preventDefault();

    if (current) {
      this.setState({
        commentList: [
          ...commentList,
          { id: commentList.length + 1, value: this.state.current },
        ],
        current: '',
      });
    }
  };

  render() {
    const { commentList } = this.state;
    return (
      <div>
        {commentList.map((commentList, id) => {
          return <Comment value={commentList.value} key={commentList.id} />;
        })}
        <div className="feedTime">
          <a href="#">42분 전</a>
        </div>
        <div className="writeComment">
          <button>
            <FontAwesomeIcon icon={faSmile} className="far fa-smile" />
          </button>
          <form onSubmit={this.commentPost}>
            <input
              type="text"
              placeholder="댓글 달기..."
              onChange={this.currentCommentInput}
              value={this.state.current}
            />
            <button className="postComment">게시</button>
          </form>
        </div>
      </div>
    );
  }
}
