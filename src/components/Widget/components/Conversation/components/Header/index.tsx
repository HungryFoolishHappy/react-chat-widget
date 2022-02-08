const close = require('../../../../../../../assets/clear-button.svg') as string;

import './style.scss';

type Props = {
  title: string;
  subtitle: string;
  toggleChat: () => void;
  showCloseButton: boolean;
  titleAvatar?: string;
  customHeaderTopComponent: () => void;
}

function Header({ title, subtitle, toggleChat, showCloseButton, titleAvatar, customHeaderTopComponent }: Props) {
  return (
    <div className="rcw-header">
      {showCloseButton &&
        <button className="rcw-close-button" onClick={toggleChat}>
          <img src={close} className="rcw-close" alt="close" />
        </button>
      }
      {customHeaderTopComponent()}
      <h4 className="rcw-title">
        {titleAvatar && <img src={titleAvatar} className="avatar" alt="profile" />}
        {title}
      </h4>
      <span>{subtitle}</span>
    </div>
  );
}

export default Header;
