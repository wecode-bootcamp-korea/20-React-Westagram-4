import React from 'react';
import './Article.scss';

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      commentList: [],
    };
  }

  pushComment = e => {
    this.setState({
      value: e.target.value,
    });
  };

  addComment = () => {
    const { commentList, value } = this.state;
    this.setState({
      commentList: commentList.concat([value]),
      value: '',
    });
  };

  addCommentEnter = e => {
    if (e.key === 'Enter') {
      this.addComment();
    }
  };

  render() {
    return (
      <>
        <article>
          <header>
            <div class="profile_of_article">
              <img
                class="img_profile"
                src="https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg"
                alt="프로필 사진"
              />
              <span class="userID main_id point_span">dlwlrma</span>
            </div>
            <img
              class="icon_react icon_more"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
              alt="more"
            />
          </header>
          <div class="main_image">
            <img
              src="https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg"
              alt="피드 사진"
              class="mainPic"
            />
          </div>
          <div class="icons_react">
            <div class="icons_left">
              <img
                class="icon_react"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="하트"
              />
              <img
                class="icon_react"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                alt="말풍선"
              />
              <i class="far fa-paper-plane"></i>
            </div>
            <img
              class="icon_react"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
              alt="북마크"
            />
          </div>
          <div class="reaction">
            <div class="liked_people">
              <img
                class="pic"
                src="https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg"
                alt="프로필 사진"
              />
              <p>
                <span class="point_span">weeeeeee</span>님{' '}
                <span class="point-span">외 2,412,751명</span>이 좋아합니다
              </p>
            </div>
            <div class="description">
              <p>
                <span class="point_span userID">dlwlrma</span>
                <span class="at-tag">@wkorea @gucci</span> 🌱
              </p>
            </div>
            <div class="comment_section">
              <ul class="comments">
                {this.state.commentList.map((comm, idx) => {
                  return (
                    <li id={idx} className="comment">
                      {'whtjdal '}
                      {comm}
                    </li>
                  );
                })}
              </ul>
              <div class="time_log">
                <span>32분 전</span>
              </div>
            </div>
          </div>
          <div class="hl"></div>
          <div class="comment">
            <input
              id="input_comment"
              class="input_comment"
              type="text"
              placeholder="댓글 달기..."
              onfocus="this.placeholder=''"
              onChange={this.pushComment}
              onKeyPress={this.addCommentEnter}
              value={this.state.value}
            />
            <button type="submit" className="submitComment" disabled>
              게시
            </button>
          </div>
        </article>
      </>
    );
  }
}

export default Article;
