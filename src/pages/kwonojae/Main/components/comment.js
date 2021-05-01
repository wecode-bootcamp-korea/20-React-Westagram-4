import React, { Component } from 'react';
import './comment.scss';

export default class Comment extends Component {
  render() {
    return (
      <p className="comment">
        <span>
          <a href="">글쓴이ID</a> {this.props.value}
        </span>
        <span className="likeDelete">
          <i className="far fa-heart"></i>
          <i className="fas fa-times"></i>
        </span>
      </p>
    );
  }
}
