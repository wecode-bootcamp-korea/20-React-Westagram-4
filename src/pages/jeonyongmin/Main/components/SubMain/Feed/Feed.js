import React from 'react';
// import profileImg from '/imges/drake-profile.jpg';
// import feedImg from '/imges/drake-img';

class Feed extends React.Component {
  render() {
    return (
      <>
        <article className="sectionArticle">
          <div className="sectionArticleUser">
            <div>
              <img
                src="/images/jeonyongmin/drake-profile.jpg"
                alt="drake profile"
                className="sectionArticleUserImg"
              />
              <a href="" className="sectionArticleUsername">
                drakeofficial
              </a>
            </div>
            <button className="sectionArticleModal">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
          <img
            src="/images/jeonyongmin/drake-img.jpg"
            alt="feed image"
            className="sectionArticleImg"
          />
          <div className="sectionArticleContainer">
            <div className="sectionArticleIconbar">
              <div className="sectionArticleIconbarLeftSide">
                <button className="sectionArticleLikeButton">
                  <i className="far fa-heart"></i>
                </button>
                <button className="sectionArticleCommentButton">
                  <i className="far fa-comment"></i>
                </button>
                <button className="sectionArticleUploadButton">
                  <i className="far fa-paper-plane"></i>
                </button>
              </div>
              <button className="sectionArticleBookmarkButton">
                <i className="far fa-bookmark"></i>
              </button>
            </div>
            <button className="sectionArticleLikeNumber">
              좋아요 21,622개
            </button>
            <div>
              <div className="sectionArticleCommentList">
                <p>
                  <a href="#" className="sectionArticleUserlink">
                    drakeofficials
                  </a>
                  in LA 😍😍😍
                  <button className="sectionArticleShowFullComment">
                    더 보기
                  </button>
                </p>
                <div className="sectionArticleCommentlistScroll">
                  <ul className="sectionArticleComment">
                    <li>
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
                  </ul>
                </div>
              </div>
              <p className="sectionArticleSinceCommentTime">42분 전</p>
            </div>
          </div>
          <div className="sectionArticleCommentContents">
            <button>
              <i className="far fa-smile"></i>
            </button>
            <input
              placeholder="댓글 달기..."
              className="sectionArticleCommentInput"
              maxlength="25"
            />
            <button
              type="button"
              className="sectionArticleCommentUpload"
              disabled
            >
              게시
            </button>
          </div>
        </article>
      </>
    );
  }
}

export default Feed;
