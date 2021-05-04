import React, { Component } from 'react';
import './Comment.scss';

export default class Comment extends Component {
  render() {
    return (
      <p className="commentOJ">
        <span className="commentContent">
          <a href="">글쓴이ID</a> {this.props.value}
        </span>
        <span>
          <i className="far fa-heart"></i>
          <i className="fas fa-times"></i>
        </span>
      </p>
    );
  }
}
