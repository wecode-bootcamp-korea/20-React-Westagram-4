import React from 'react';
import Footer from './Footer';
import './MainRight.scss';
import './CircleProfile.scss';

class MainRight extends React.Component {
  render() {
    const { accountInfo } = this.props;
    const reverseInfo = [...accountInfo].reverse();
    const getTime = t => {
      let result = '';
      if (t / 60 / 60 / 1000 < 1) {
        result = t / 60 / 1000 + '분 전';
      } else if (t > 86400000) {
        result = '1일 전';
      } else {
        result = t / 60 / 60 / 1000 + '시간 전';
      }
      return result;
    };
    return (
      <>
        <aside className="main-rightYJ">
          <section className="main-rightYJ__my-account">
            <img
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=fZBB-70QdV0AX9iZy7F&edm=ABfd0MgAAAAA&ccb=7-4&oh=55dfd4c5aa0657dcdf5cf7c0a098157d&oe=60A452F0&_nc_sid=7bff83"
              alt="내 프로필 사진"
              className="circle-profileYJ circle-profileYJ--main-right-my-account"
            />
            <div className="main-rightYJ__my-infos">
              <span className="main-rightYJ__my-id">wecode_bootcamp</span>
              <span>WeCode | 위코드</span>
            </div>
          </section>
          <section className="main-right-sectionYJ">
            <div className="main-right-sectionYJ__title">
              <h6>스토리</h6>
              <button className="main-right-sectionYJ__all-btn">
                모두 보기
              </button>
            </div>
            <div>
              <ul>
                {accountInfo.slice(0, 4).map(newStoryAccount => (
                  <li
                    className="main-right-sectionYJ__item-row"
                    key={newStoryAccount.id}
                  >
                    <div className="main-right-sectionYJ__user-img-box">
                      <div
                        className={
                          newStoryAccount.story
                            ? 'circle-profileYJ__story-border circle-profileYJ__story-border--main-right-user'
                            : ''
                        }
                      ></div>
                      <img
                        src={newStoryAccount.profileImg}
                        alt={`${newStoryAccount.author}님의 이미지`}
                        className="circle-profileYJ circle-profileYJ--main-right-user"
                      />
                    </div>
                    <div className="main-right-sectionYJ__texts">
                      <span className="main-right-sectionYJ__account-id">
                        {newStoryAccount.author}
                      </span>
                      <span>{getTime(newStoryAccount.time)}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="main-right-sectionYJ">
            <div className="main-right-sectionYJ__title">
              <h6>회원님을 위한 추천</h6>
              <button className="main-right-sectionYJ__all-btn">
                모두 보기
              </button>
            </div>
            <div>
              <ul>
                {reverseInfo.slice(0, 4).map(recommendAccount => (
                  <li
                    className="main-right-sectionYJ__item-row"
                    key={recommendAccount.id}
                  >
                    <div className="main-right-sectionYJ__user-img-box">
                      <img
                        src={recommendAccount.profileImg}
                        alt={`${recommendAccount.author}님의 사진`}
                        className="circle-profileYJ circle-profileYJ--main-right-user"
                      />
                    </div>
                    <div className="main-right-sectionYJ__texts">
                      <span className="main-right-sectionYJ__account-id">
                        {recommendAccount.author}
                      </span>
                      <span>
                        {recommendAccount.newAccount
                          ? 'Instagram 신규 가입'
                          : ''}
                      </span>
                    </div>
                    <button className="main-right-sectionYJ__recommend-follow">
                      팔로우
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <Footer />
        </aside>
      </>
    );
  }
}

export default MainRight;
