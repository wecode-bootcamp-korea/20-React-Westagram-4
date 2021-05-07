import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import Comment from './Comment';
import './Writecomment.scss';

export default class Writecomment extends Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      nowCommentInputData: '',
    };
  }

  componentDidMount() {
    fetch('/data/kwonojae/commentData.json')
      .then(response => response.json())
      .then(commentData => {
        this.setState({ commentList: commentData });
      });
  }

  commentInputCopyToState = e => {
    this.setState({ nowCommentInputData: e.target.value });
  };

  commentPost = e => {
    const { commentList, nowCommentInputData } = this.state;
    e.preventDefault();

    if (nowCommentInputData) {
      this.setState({
        commentList: [
          ...commentList,
          {
            id: commentList.length
              ? commentList[commentList.length - 1].id + 1
              : 1,
            value: nowCommentInputData,
          },
        ],
        nowCommentInputData: '',
      });
    }
  };

  render() {
    const { commentList, nowCommentInputData } = this.state;
    return (
      <div className="feedTimeOJ">
        {commentList.map(comment => {
          return <Comment key={comment.id} commentValue={comment.value} />;
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
              onChange={this.commentInputCopyToState}
              value={nowCommentInputData}
            />
            <button className="postComment">게시</button>
          </form>
        </div>
      </div>
    );
  }
}
