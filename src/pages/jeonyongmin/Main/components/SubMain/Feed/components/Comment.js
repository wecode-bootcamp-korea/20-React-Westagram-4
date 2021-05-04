import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  render() {
    const commentList = this.props.data;
    return (
      <>
        <li
          classname="sectionArticleCommentContentsContainer"
          key={this.props.id}
        >
          <div className="sectionArticleCommentContents">
            <p>
              <a href="#" className="sectionArticleFanslink">
                {this.props.name}
              </a>
              {this.props.comment}
            </p>
            <button className="sectionArticleCommentLinkButton">
              <i className="far fa-heart"></i>
            </button>
          </div>
        </li>
      </>
    );
  }
}

export default Comment;
