import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './comment.scss';

export default class Comment extends Component {
  render() {
    return (
      <p className="commentOJ">
        <span className="commentContent">
          <Link to="#">글쓴이ID</Link> {this.props.value}
        </span>
        <span>
          <i className="far fa-heart"></i>
          <i className="fas fa-times"></i>
        </span>
      </p>
    );
  }
}
