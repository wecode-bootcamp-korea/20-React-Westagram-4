import React from 'react';

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
        className={`search-modal-container ${
          isInputFocused ? 'search-modal-open' : ''
        }`}
      >
        <div className="search-modal">
          <ul className="search-modal__ul">
            {filteredData.map(el => (
              <li key={el.id} id={el.id} className="search-modal__list">
                <img
                  src={el.profileImg}
                  alt={`${el.author}님의 프로필사진`}
                  className="circle-profile circle-profile--search-filter"
                />
                <span className="search-modal__menu">{el.author}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchModal;
