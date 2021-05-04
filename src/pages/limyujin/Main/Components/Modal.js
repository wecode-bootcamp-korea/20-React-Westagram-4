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
          className={`modal-containerYJ ${
            isModalVisible ? 'modal-openYJ' : ''
          }`}
        >
          <div className="modalYJ">
            <ul>
              {modalItem.map((el, index) => (
                <li key={index} className="modalYJ__list">
                  <FontAwesomeIcon
                    icon={el.icon}
                    key={index}
                    className="modalYJ__icon"
                  />
                  <span className="modalYJ__menu">{el.text}</span>
                </li>
              ))}
            </ul>
            <div className="modalYJ__line"></div>
          </div>
          <div className="modalYJ__arrow"></div>
        </div>
      </>
    );
  }
}

export default Modal;
