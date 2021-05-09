import React, { Component } from 'react';

export class Comments extends Component {
  render() {
    const { userComment } = this.props;
    return (
      <div className="Comments commentWrap" key={userComment.id}>
        <span className="commenter">{userComment.userId}</span>
        <span className="comment">{userComment.comment}</span>
        <button
          className="commentBtn commentDeleteBtn"
          onClick={() => {
            this.props.onClickDeleteBtn(userComment);
          }}
        >
          {userComment.showTrashBtn && <i className="far fa-trash-alt" />}
        </button>
        <button
          className="commentBtn commentLikesBtn"
          onClick={() => {
            this.props.onClickCommentHeartBtn(userComment);
          }}
        >
          {userComment.liked ? (
            <i className="redHeart fas fa-heart red" />
          ) : (
            <i className="emptyHeart far fa-heart" />
          )}
        </button>
      </div>
    );
  }
}

export default Comments;
