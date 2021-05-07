import React, { Component } from 'react';
import './RecommendProfileOJ.scss';

const RECOMMENDPROFILELIST = [
  { id: 1, src: 'r_profile1.jpeg', name: 'jennierubyjane' },
  { id: 2, src: 'r_profile2.jpeg', name: 'sooyaaa__' },
  { id: 3, src: 'r_profile3.jpeg', name: 'roses_are_rosie' },
  { id: 4, src: 'r_profile4.jpeg', name: 'dlwlrma' },
  { id: 5, src: 'r_profile5.jpeg', name: '_imyour_joy' },
];

export default class RecommendProfiles extends Component {
  render() {
    return (
      <>
        {RECOMMENDPROFILELIST.map(profile => {
          return (
            <div className="recommendProfileOJ" key={profile.id}>
              <img
                alt={`${profile.name}'s profile image`}
                src={`/images/kwonojae/${profile.src}`}
              />
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
