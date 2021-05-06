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
      currentCommentInputData: '',
    };
  }

  componentDidMount() {
    fetch('/data/kwonojae/commentData.json')
      .then(response => response.json())
      .then(commentData => {
        this.setState({ commentList: commentData });
      });
  }

  currentCommentInput = e => {
    this.setState({ currentCommentInputData: e.target.value });
  };

  commentPost = e => {
    const { commentList, currentCommentInputData } = this.state;
    e.preventDefault();

    if (currentCommentInputData) {
      this.setState({
        commentList: [
          ...commentList,
          { id: commentList.length + 1, value: currentCommentInputData },
        ],
        currentCommentInputData: '',
      });
    }
  };

  render() {
    const { commentList, currentCommentInputData } = this.state;
    return (
      <div className="feedTimeOJ">
        {commentList.map(comment => {
          return <Comment value={comment.value} key={comment.id} />;
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
              value={currentCommentInputData}
            />
            <button className="postComment">게시</button>
          </form>
        </div>
      </div>
    );
  }
}
