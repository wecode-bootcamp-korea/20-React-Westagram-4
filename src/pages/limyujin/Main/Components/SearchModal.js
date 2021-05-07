import React from 'react';
import './SearchModal.scss';

class SearchModal extends React.Component {
  render() {
    const { userData, isInputFocused, searchText } = this.props;
    const filteredData = userData.filter(el => {
      return el.author.toLowerCase().includes(searchText);
    });

    return (
      <div
        className={`search-modal-containerYJ ${
          isInputFocused ? 'search-modal-openYJ' : ''
        }`}
      >
        <div className="search-modalYJ">
          <ul className="search-modalYJ__ul">
            {filteredData.map(el => (
              <li key={el.id} id={el.id} className="search-modalYJ__list">
                <img
                  alt={`${el.author}님의 프로필사진`}
                  src={el.profileImg}
                  className="circle-profileYJ circle-profileYJ--search-filter"
                />
                <span className="search-modalYJ__menu">{el.author}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchModal;
