import React, { Component } from 'react';
import '../../../../styles/leejiyon/common.scss';

class Article extends Component {
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
          <a href="#">
            <div className="lnbImg heartImg"></div>
          </a>
          <a href="#">
            <div className="lnbImg msgImg"></div>
          </a>
          <a href="#">
            <div className="lnbImg shareImg"></div>
          </a>
          <a href="#">
            <div className="lnbImg bookmarkImg"></div>
          </a>
        </div>
        <div className="articleComment">
          <div className="articleLikes">
            <a href="#"></a>
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
          <div className="commentWrap">
            <span className="commenter">iu</span>
            <span className="comment">거봐 좋았잖아 ~~~~ </span>
            <button className="commentBtn commentLikesBtn">
              <i className="emptyHeart far fa-heart"></i>
              <i className="redHeart fas fa-heart red hide"></i>
            </button>
          </div>
          <div className="commentTime">42분 전</div>
        </div>
        <div className="articlePostComment">
          <input
            className="postCommentInput"
            type="text"
            placeholder="댓글 달기..."
          />
          <button className="postCommentBtn">게시</button>
          <button className="smile">
            <i className="far fa-smile"></i>
          </button>
        </div>
      </article>
    );
  }
}

export default Article;
