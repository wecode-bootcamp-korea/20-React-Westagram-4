import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

class Modal extends React.Component {
  render() {
    const { isModalVisible } = this.props;
    const modalItem = [
      {
        icon: faUserCircle,
        text: '프로필',
      },
      {
        icon: faBookmark,
        text: '저장됨',
      },
      {
        icon: faCog,
        text: '설정',
      },
      {
        icon: '',
        text: '로그아웃',
      },
    ];
    return (
      <>
        <div
          className={`modal-container ${isModalVisible ? 'modal-open' : ''}`}
        >
          <div className="modal">
            <ul>
              {modalItem.map((el, index) => (
                <li key={index} className="modal__list">
                  <FontAwesomeIcon
                    icon={el.icon}
                    key={index}
                    className="modal__icon"
                  />
                  <span className="modal__menu">{el.text}</span>
                </li>
              ))}
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
