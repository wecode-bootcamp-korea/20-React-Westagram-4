import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Comment.scss';

export default class Comment extends Component {
  render() {
    return (
      <p className="commentOJ">
        <span className="commentContent">
          <Link to="#">글쓴이ID</Link> {this.props.commentValue}
        </span>
        <span>
          <i className="fa-heart far" />
          <i className="fas fa-times" />
        </span>
      </p>
    );
  }
}
