import React from 'react';
import './SearchModal.scss';

class SearchModal extends React.Component {
  render() {
    const { userData, isInputFocused, searchText } = this.props;
    const filteredData = userData.filter(el => {
      if (el.author.toLowerCase().includes(searchText)) {
        return true;
      }
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
                  src={el.profileImg}
                  alt={`${el.author}님의 프로필사진`}
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
