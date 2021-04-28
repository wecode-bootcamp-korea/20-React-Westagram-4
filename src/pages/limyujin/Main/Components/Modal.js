import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

class Modal extends React.Component {
  render() {
    return (
      <>
        <div
          className={`modal-container ${
            this.props.isModalVisible ? 'modal-open' : ''
          }`}
        >
          <div className="modal">
            <ul>
              <li className="modal__list">
                <FontAwesomeIcon icon={faUserCircle} className="user-circle" />
                <span className="modal__menu">프로필</span>
              </li>
              <li className="modal__list">
                <FontAwesomeIcon icon={faBookmark} className="bookmark" />
                <span className="modal__menu">저장됨</span>
              </li>
              <li className="modal__list">
                <FontAwesomeIcon icon={faCog} className="cog" />
                <span className="modal__menu">설정</span>
              </li>
              <li className="modal__list">로그아웃</li>
            </ul>
            <div className="modal__line"></div>
          </div>
          <div className="modal__arrow"></div>
        </div>
      </>
    );
  }
}

export default Modal;
