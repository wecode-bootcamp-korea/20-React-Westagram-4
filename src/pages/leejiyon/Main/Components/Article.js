import React, { Component } from 'react';
import Comments from './Comments';
import '../../../../styles/leejiyon/common.scss';

const emptyHeartStyle = {
  backgroundPosition: `-156px -478px`,
};
const likedHeartStyle = {
  backgroundPosition: `-130px -478px`,
};

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
    if (this.state.commentLikeNum === 10) {
      this.setState({
        commentLikeNum: 9,
      });
    } else {
      this.setState({
        commentLikeNum: 10,
      });
    }
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
      userComments: this.state.userComments.concat({
        id: this.state.id,
        userId: this.state.currentUser,
        comment: this.state.commentInputValue,
        showTrashBtn: true,
      }),
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
    return (
      <article className="Article">
        <div className="articleHeader">
          <img
            alt="일본 애니메이션 샤먼킹 하오 이미지"
            className="profileImg"
            src="/images/leejiyon/hao.jpg"
          />
          <div className="profileName">jiyon</div>
          <button className="viewMore">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
        <img
          alt="구름이 뒤덮인 푸르른 산 정상"
          className="articleImg"
          src="/images/leejiyon/nature.jpg"
        />
        <div className="articleLnb">
          <button
            className="lnbImg heartImg"
            onClick={e => this.onClickArticleHeartBtn(e.target)}
            style={
              this.state.isArticleLiked ? likedHeartStyle : emptyHeartStyle
            }
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
            <span className="myComment">
              백두산 정상에 올라서 사진을 찍었다
            </span>
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
            onChange={e => {
              this.onChangeCommentInput(e);
            }}
            onKeyUp={e => this.onClickPostCommentInput(e)}
            ref={this.inputRef}
          />
          <button
            className="postCommentBtn"
            onClick={e => {
              this.onClickPostBtn(e);
            }}
            style={
              this.state.isCommentInputEntered
                ? { color: 'blue' }
                : { color: '#72c2fa' }
            }
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
