import React from 'react';
import './Right.scss';

class Right extends React.Component {
  render() {
    return (
      <>
        <div class="main_right">
          <div class="myProfile">
            <img
              class="pic"
              src="https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg"
              alt="thisisyourhyung님의 프로필 사진"
            />
            <div>
              <span class="userID point_span">whtjdals</span>
              <span class="sub_span">SUNGMIN JO</span>
            </div>
          </div>
          <div class="section_story">
            <div class="menu_title">
              <span class="sub_title">스토리</span>
              <span class="find_more">모두 보기</span>
            </div>
            <ul class="story_list">
              <li>
                <div class="gradient_wrap">
                  <img
                    class="img_profile story"
                    src="https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg"
                    alt="프로필 사진"
                  />
                </div>
                <div class="profile_text">
                  <span class="userID point_span">wecode_bootcamp</span>
                  <span class="sub_span">12분 전</span>
                </div>
              </li>
              <li>
                <div class="gradient_wrap">
                  <img
                    class="img_profile story"
                    src="https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg"
                    alt="프로필사진"
                  />
                </div>
                <div class="profile_text">
                  <span class="userID point_span">jsm</span>
                  <span class="sub_span">18분 전</span>
                </div>
              </li>
              <li>
                <div class="gradient_wrap">
                  <img
                    class="img_profile story"
                    src="https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg"
                    alt="사진"
                  />
                </div>
                <div class="profile_text">
                  <span class="userID point_span">doefeg</span>
                  <span class="sub_span">30분 전</span>
                </div>
              </li>
              <li>
                <div class="gradient_wrap">
                  <img
                    class="img_profile story"
                    src="https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg"
                    alt="프로필 사진"
                  />
                </div>
                <div class="profile_text">
                  <span class="userID point_span">i_ttttts</span>
                  <span class="sub_span">36분 전</span>
                </div>
              </li>
            </ul>
          </div>
          <footer>
            <p class="insta_sccript">
              소개 ∙ 도움말 ∙ 홍보 센터 ∙ API ∙ 채용 정보 ∙ 개인정보처리방침 ∙
              약관 ∙ 위치 ∙ 인기계정 ∙ 해시태그 ∙ 언어 © 2021 INSTAGRAM FROM
              FACEBOOK
            </p>
          </footer>
        </div>
      </>
    );
  }
}

export default Right;
