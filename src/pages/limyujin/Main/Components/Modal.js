import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import './Modal.scss';

class Modal extends React.Component {
  render() {
    const { isModalVisible } = this.props;
    const modalItem = [
      {
        id: 1,
        icon: faUserCircle,
        text: '프로필',
      },
      {
        id: 2,
        icon: faBookmark,
        text: '저장됨',
      },
      {
        id: 3,
        icon: faCog,
        text: '설정',
      },
      {
        id: 4,
        icon: '',
        text: '로그아웃',
      },
    ];
    return (
      <div
        className={`modal-containerYJ ${isModalVisible ? 'modal-openYJ' : ''}`}
      >
        <div className="modalYJ">
          <ul>
            {modalItem.map(modalMenu => (
              <li key={modalMenu.id} className="modalYJ__list">
                <FontAwesomeIcon
                  icon={modalMenu.icon}
                  key={modalMenu.id}
                  className="modalYJ__icon"
                />
                <span className="modalYJ__menu">{modalMenu.text}</span>
              </li>
            ))}
          </ul>
          <div className="modalYJ__line" />
        </div>
        <div className="modalYJ__arrow" />
      </div>
    );
  }
}

export default Modal;
