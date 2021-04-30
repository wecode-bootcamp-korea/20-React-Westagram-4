import React, { Component } from 'react';
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
    users: [
      {
        id: 'iu',
        comment: '아자아자',
        showTrashBtn: false,
        liked: true,
      },
      {
        id: 'jiyon',
        comment: '공부를 하자',
        showTrashBtn: false,
        liked: false,
      },
      {
        id: 'Shaman_king',
        comment: '벨로그 쓰기',
        showTrashBtn: false,
        liked: false,
      },
    ],
  };

  onClickArticleHeartBtn = () => {
    this.setState({
      isArticleLiked: !this.state.isArticleLiked,
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
      users: this.state.users.concat({
        id: this.state.currentUser,
        comment: this.state.commentInputValue,
        showTrashBtn: true,
      }),
      commentInputValue: '',
    });
    this.inputRef.current.focus();
  };

  onClickCommentHeartBtn = e => {
    const currentCommentWrap = e.target.parentNode.parentNode;
    const commentWraps = currentCommentWrap.parentNode.querySelectorAll(
      '.commentWrap'
    );
    const clickedCommentIndex = Array.prototype.indexOf.call(
      commentWraps,
      currentCommentWrap
    );

    let users = [...this.state.users];
    let user = { ...users[clickedCommentIndex - 1] };
    if (user.liked) {
      user.liked = false;
    } else {
      user.liked = true;
    }
    users[clickedCommentIndex - 1] = user;
    this.setState({ users });
  };

  onClickDeleteBtn = e => {};

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
              외 <span className="likeNum">10</span>명
            </span>
            이 좋아합니다
          </div>
          <div className="commentWrap">
            <span className="commenter">jiyon</span>
            <span className="myComment">
              백두산 정상에 올라서 사진을 찍었다
            </span>
          </div>

          {this.state.users.map(v => {
            return (
              <div className="commentWrap">
                <span className="commenter">{v.id}</span>
                <span className="comment">{v.comment}</span>
                <button
                  className="commentBtn commentDeleteBtn"
                  onClick={e => {
                    this.onClickDeleteBtn(e);
                  }}
                >
                  {v.showTrashBtn ? <i className="far fa-trash-alt"></i> : null}
                </button>
                <button
                  className="commentBtn commentLikesBtn"
                  onClick={e => {
                    this.onClickCommentHeartBtn(e);
                  }}
                >
                  {v.liked ? (
                    <i className="redHeart fas fa-heart red"></i>
                  ) : (
                    <i className="emptyHeart far fa-heart"></i>
                  )}
                </button>
              </div>
            );
          })}
          <div className="commentTime">42분 전</div>
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
