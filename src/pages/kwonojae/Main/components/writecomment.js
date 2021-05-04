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
      current: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/kwonojae/commentData.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(commentData => {
        this.setState({ commentList: commentData });
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
          { id: commentList.length + 1, value: current },
        ],
        current: '',
      });
    }
  };

  render() {
    const { commentList, current } = this.state;
    return (
      <div className="feedTimeOJ">
        {commentList.map(commentList => {
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
              value={current}
            />
            <button className="postComment">게시</button>
          </form>
        </div>
      </div>
    );
  }
}
