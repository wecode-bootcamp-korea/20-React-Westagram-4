import React from 'react';
import Feeds from '../Main/Components/Feeds';
import TopNav from '../Main/Components/TopNav';
import MainRight from '../Main/Components/MainRight';
import '../../../styles/limyujin/Common.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedInfo: [
        {
          author: 'rilip_official',
          profileImg:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/94003553_231199768097287_5780010293664940032_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=EjeCkaUjMMgAX9m0Dym&edm=AEF8tYYAAAAA&ccb=7-4&oh=70612d83cfbfb530e39c0695f4af134b&oe=60A4EFD6&_nc_sid=a9513d',
          location: 'suwon',
          mainImg:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/175260006_501085961251601_2268575138294333749_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=RJE0N2r6OsQAX8n_B-z&edm=AIQHJ4wAAAAA&ccb=7-4&oh=25fe99fccac6c74f937965f44b445884&oe=60A31BE1&_nc_sid=7b02f1',
          text: '위워크에서 진행한 베이크 클래스',
          time: '17시간 전',
          like: 70,
        },
        {
          author: 'krtigersugar',
          profileImg:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/43778288_543710792708920_7607289634233516032_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=pWeqQfWFVmcAX_kmyQF&edm=AEF8tYYAAAAA&ccb=7-4&oh=4ec3ccefbd37ce11dc957b7838b77d05&oe=60A634E6&_nc_sid=a9513d',
          location: '',
          mainImg:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/175810080_497894738013789_23924597793451987_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=Tu_Wnsa9tiwAX80ztR3&edm=AIQHJ4wAAAAA&ccb=7-4&oh=d91ccc0c9d232e280584d62e6c2b4652&oe=60A513B3&_nc_sid=7b02f1',
          text: '✨신메뉴 소문내기 이벤트✨',
          time: '19시간 전',
          like: 34,
        },
        {
          author: 'anko_8090',
          profileImg:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/163663946_197803795082398_1924950408015660072_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=Jvc5nBmQBVYAX-SQowW&edm=AEF8tYYAAAAA&ccb=7-4&oh=f33f3a525c2908fd436991a6de94643d&oe=60A7CC97&_nc_sid=a9513d',
          location: '',
          mainImg:
            'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/175810080_497894738013789_23924597793451987_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=Tu_Wnsa9tiwAX80ztR3&edm=AIQHJ4wAAAAA&ccb=7-4&oh=d91ccc0c9d232e280584d62e6c2b4652&oe=60A513B3&_nc_sid=7b02f1',
          text: '알박기 제법...',
          time: '20시간 전',
          like: 13,
        },
      ],
    };
  }
  render() {
    const { feedInfo } = this.state;

    return (
      <>
        <TopNav />
        <main class="main-page">
          <div className="feed-box">
            {feedInfo.map((el, index) => (
              <Feeds
                author={el.author}
                profileImg={el.profileImg}
                location={el.location}
                mainImg={el.mainImg}
                text={el.text}
                time={el.time}
                like={el.like}
                key={index}
              />
            ))}
          </div>
          <MainRight />
        </main>
      </>
    );
  }
}

export default Main;
