import React, { Component } from 'react';
import Comments from './Comments';
import './Article.scss';

class Article extends Component {
  inputRef = React.createRef();
  state = {
    isArticleLiked: false,
    isCommentInputEntered: false,
    commentInputValue: '',
    currentUser: 'hao',
    lastPostedCommentTIme: '42분 전',
    commentLikeNum: '9',
    userComments: [
      {
        id: 1,
        userId: 'iu',
        comment: '아자아자',
        showTrashBtn: false,
        liked: true,
      },
      {
        id: 2,
        userId: 'jiyon',
        comment: '공부를 하자',
        showTrashBtn: false,
        liked: false,
      },
      {
        id: 3,
        userId: 'Shaman_king',
        comment: '벨로그 쓰기',
        showTrashBtn: false,
        liked: false,
      },
    ],
    id: 4,
  };

  onClickArticleHeartBtn = () => {
    this.setState({
      isArticleLiked: !this.state.isArticleLiked,
    });
    this.setState({
      commentLikeNum: this.state.isArticleLiked ? 9 : 10,
    });
  };

  onClickPostCommentInput = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.onClickPostBtn();
    }
  };

  onChangeCommentInput = e => {
    this.setState({
      commentInputValue: e.target.value,
    });
    if (e.target.value.length > 0) {
      this.setState({
        isCommentInputEntered: true,
      });
    } else {
      this.setState({
        isCommentInputEntered: false,
      });
    }
  };

  onClickPostBtn = () => {
    if (!this.state.commentInputValue.length) {
      return;
    }
    this.setState({
      userComments: [
        ...this.state.userComments,
        {
          id: this.state.id,
          userId: this.state.currentUser,
          comment: this.state.commentInputValue,
          showTrashBtn: true,
        },
      ],
      commentInputValue: '',
      id: this.state.id + 1,
      lastPostedCommentTIme: '방금',
    });
    this.inputRef.current.focus();
  };

  onClickCommentHeartBtn = userComment => {
    let currentClickedCommentIdx = this.state.userComments.indexOf(userComment);
    let userComments = [...this.state.userComments];
    let user = {
      ...userComment,
    };
    if (user.liked) {
      user.liked = false;
    } else {
      user.liked = true;
    }
    userComments[currentClickedCommentIdx] = user;
    this.setState({ userComments });
  };

  onClickDeleteBtn = v => {
    this.setState({
      userComments: this.state.userComments.filter(user => {
        return user.id !== v.id;
      }),
    });
  };

  render() {
    const { header, articleImg, myComment } = this.props;
    return (
      <article className="ArticleJY">
        <div className="articleHeader">
          <img alt={header.alt} className="profileImg" src={header.src} />
          <div className="profileName">{header.headerId}</div>
          <button className="viewMore">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
        <img alt={articleImg.alt} className="articleImg" src={articleImg.src} />
        <div className="articleLnb">
          <button
            className={`lnbImg ${
              this.state.isArticleLiked ? 'heartImg' : 'emptyImg'
            }`}
            onClick={this.onClickArticleHeartBtn}
          ></button>
          <button className="lnbImg msgImg"></button>
          <button className="lnbImg shareImg"></button>
          <button className="lnbImg bookmarkImg"></button>
        </div>
        <div className="articleComment">
          <div className="articleLikes">
            <span>wecode</span>님
            <span>
              외 <span className="likeNum">{this.state.commentLikeNum}</span>명
            </span>
            이 좋아합니다
          </div>
          <div className="commentWrap">
            <span className="commenter">jiyon</span>
            <span className="myComment">{myComment}</span>
          </div>

          {this.state.userComments.map(userComment => {
            return (
              <Comments
                key={userComment.id}
                userComment={userComment}
                onClickDeleteBtn={() => {
                  this.onClickDeleteBtn(userComment);
                }}
                onClickCommentHeartBtn={() => {
                  this.onClickCommentHeartBtn(userComment);
                }}
              />
            );
          })}
          <div className="commentTime">{this.state.lastPostedCommentTIme}</div>
        </div>
        <div className="articlePostComment">
          <input
            className="postCommentInput"
            type="text"
            placeholder="댓글 달기..."
            value={this.state.commentInputValue}
            onChange={this.onChangeCommentInput}
            onKeyUp={this.onClickPostCommentInput}
            ref={this.inputRef}
          />
          <button
            className={`postCommentBtn ${
              this.state.isCommentInputEntered ? 'activeBtn' : 'nonActiveBtn'
            }`}
            onClick={this.onClickPostBtn}
          >
            게시
          </button>
          <button className="smile">
            <i className="far fa-smile"></i>
          </button>
        </div>
      </article>
    );
  }
}

export default Article;