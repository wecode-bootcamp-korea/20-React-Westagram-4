import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  render() {
    return (
      <li classname="sectionArticleCommentContentsContainer">
        <div className="sectionArticleCommentContents">
          <p>
            <a href="#" className="sectionArticleFanslink">
              yongmin
            </a>
            I love your songs
          </p>
          <button className="sectionArticleCommentLinkButton">
            <i className="far fa-heart"></i>
          </button>
        </div>
      </li>
    );
  }
}

export default Comment;
