import React, { Component } from 'react';
import Comments from './Comments';
import './Article.scss';

class Article extends Component {
  inputRef = React.createRef();
  idRef = React.createRef('');

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
  };

  componentDidMount() {
    this.idRef.current = 4;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userComments.length !== this.state.userComments.length) {
      this.idRef.current += 1;
    }
  }

  onClickArticleHeartBtn = () => {
    this.setState({
      isArticleLiked: !this.state.isArticleLiked,
      commentLikeNum: this.state.isArticleLiked
        ? Number(this.state.commentLikeNum) - 1
        : Number(this.state.commentLikeNum) + 1,
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
      isCommentInputEntered:
        e.target.value.length > 0
          ? !this.state.isCommentInputEntered
          : !this.state.isCommentInputEntered,
    });
  };

  onClickPostBtn = () => {
    if (!this.state.commentInputValue.length) {
      return;
    }
    this.setState({
      userComments: [
        ...this.state.userComments,
        {
          id: this.idRef.current,
          userId: this.state.currentUser,
          comment: this.state.commentInputValue,
          showTrashBtn: true,
        },
      ],
      commentInputValue: '',
      lastPostedCommentTIme: '방금',
    });
    this.inputRef.current.focus();
  };

  onClickCommentHeartBtn = userComment => {
    this.state.userComments.filter((comment, i) => {
      const userComments = [...this.state.userComments];
      if (comment.id === userComment.id) {
        comment.liked = !comment.liked;
        userComments[i] = comment;
        this.setState({
          userComments: userComments,
        });
      }
    });
  };

  onClickDeleteBtn = clickedComment => {
    this.setState({
      userComments: this.state.userComments.filter(
        user => user.id !== clickedComment.id
      ),
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
          <button className="lnbImg msgImg" />
          <button className="lnbImg shareImg" />
          <button className="lnbImg bookmarkImg" />
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
