import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  render() {
    const commentList = this.props.inputData;
    const result = commentList.map(element => {
      return (
        <li classname="sectionArticleCommentContentsContainer">
          <div className="sectionArticleCommentContents">
            <p>
              <a href="#" className="sectionArticleFanslink">
                yongmin
              </a>
              {element}
            </p>
            <button className="sectionArticleCommentLinkButton">
              <i className="far fa-heart"></i>
            </button>
          </div>
        </li>
      );
    });
    return <>{result} </>;
  }
}

export default Comment;
