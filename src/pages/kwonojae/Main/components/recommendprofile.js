import React from 'react';
// import ''

class RecommendProfiles extends React.Component {
  constructor() {
    super();
    this.state = {
      recommendProfileList: [
        { src: 'r_profile1.jpeg', name: 'jennierubyjane' },
        { src: 'r_profile2.jpeg', name: 'sooyaaa__' },
        { src: 'r_profile3.jpeg', name: 'roses_are_rosie' },
        { src: 'r_profile4.jpeg', name: 'dlwlrma' },
        { src: 'r_profile5.jpeg', name: '_imyour_joy' },
      ],
    };
  }
  render() {
    return (
      <>
        {this.state.recommendProfileList.map(profile => {
          return (
            <div className="recommendProfile">
              <img src={`/images/kwonojae/${profile.src}`} />
              <dl>
                <dt>{profile.name}</dt>
                <dd>인기</dd>
              </dl>
              <button>팔로우</button>
            </div>
          );
        })}
      </>
    );
  }
}

export default RecommendProfiles;
