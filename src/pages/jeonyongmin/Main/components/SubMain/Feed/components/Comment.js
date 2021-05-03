import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  render() {
    const commentList = this.props.inputData;
    const result = commentList.map(element => {
      return (
        <li classname="sectionArticleCommentContentsContainer" key={element.id}>
          <div className="sectionArticleCommentContents">
            <p>
              <a href="#" className="sectionArticleFanslink">
                {element.name}
              </a>
              {element.comment}
            </p>
            <button className="sectionArticleCommentLinkButton">
              <i className="far fa-heart"></i>
            </button>
          </div>
        </li>
      );
    });
    return <> {result} </>;
  }
}

export default Comment;
