import React from 'react';
import Footer from './Footer';

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
    const { time } = this.props;
    return (
      <>
        <aside className="main-right">
          <section className="main-right__my-account">
            <img
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=fZBB-70QdV0AX9iZy7F&edm=ABfd0MgAAAAA&ccb=7-4&oh=55dfd4c5aa0657dcdf5cf7c0a098157d&oe=60A452F0&_nc_sid=7bff83"
              alt="내 프로필 사진"
              className="circle-profile circle-profile--main-right-my-account"
            />
            <div className="main-right__my-infos">
              <span className="main-right__my-id">wecode_bootcamp</span>
              <span>WeCode | 위코드</span>
            </div>
          </section>
          <section className="main-right-section">
            <div className="main-right-section__title">
              <h6>스토리</h6>
              <button className="main-right-section__all-btn">모두 보기</button>
            </div>
            <div>
              <ul>
                {accountInfo.slice(0, 4).map(el => (
                  <li className="main-right-section__item-row" key={el.id}>
                    <div className="main-right-section__user-img-box">
                      <div
                        className={
                          el.story
                            ? 'circle-profile__story-border circle-profile__story-border--main-right-user'
                            : ''
                        }
                      ></div>
                      <img
                        src={el.profileImg}
                        alt="`${el.author}님의 이미지`"
                        className="circle-profile circle-profile--main-right-user"
                      />
                    </div>
                    <div className="main-right-section__texts">
                      <span className="main-right-section__account-id">
                        {el.author}
                      </span>
                      <span>{getTime(el.time)}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="main-right-section">
            <div className="main-right-section__title">
              <h6>회원님을 위한 추천</h6>
              <button className="main-right-section__all-btn">모두 보기</button>
            </div>
            <div>
              <ul>
                {reverseInfo.slice(0, 4).map(el => (
                  <li className="main-right-section__item-row" key={el.id}>
                    <div className="main-right-section__user-img-box">
                      <img
                        src={el.profileImg}
                        alt="`${el.author}님의 이미지`"
                        className="circle-profile circle-profile--main-right-user"
                      />
                    </div>
                    <div className="main-right-section__texts">
                      <span className="main-right-section__account-id">
                        {el.author}
                      </span>
                      <span>{el.newAccount ? 'Instagram 신규 가입' : ''}</span>
                    </div>
                    <button className="main-right-section__recommend-follow">
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
