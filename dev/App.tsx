import { Component } from 'react';

import { toggleWidget, Widget, addResponseMessage, setQuickButtons, toggleMsgLoader, addLinkSnippet } from '../index';
import { addUserMessage } from '..';
import './styles.scss';

class Language {
  name: string;
  value: string;
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    let full = false;
  }

  componentDidMount() {
    addResponseMessage('Welcome to this awesome chat!');
    addLinkSnippet({ link: 'https://google.com', title: 'Google' });
    addResponseMessage('![](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)');
    addResponseMessage('![vertical](https://d2sofvawe08yqg.cloudfront.net/reintroducing-react/hero2x?1556470143)');
    toggleWidget();
  }

  handleNewUserMessage = (newMessage: any) => {
    toggleMsgLoader();
    setTimeout(() => {
      toggleMsgLoader();
      if (newMessage === 'fruits') {
        setQuickButtons([ { label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' }, { label: 'Pear', value: 'pear' }, { label: 'Banana', value: 'banana' } ]);
      } else {
        addResponseMessage(newMessage);
      }
    }, 2000);
  }

  handleQuickButtonClicked = (e: any) => {
    addResponseMessage('Selected ' + e);
    setQuickButtons([]);
  }

  handleSubmit = (msgText: string) => {
    if(msgText.length < 80) {
      addUserMessage("Uh oh, please write a bit more.");
      return false;
    }
    return true;
  }
  
  

  R() {
    const LANGUAGE_LIST = [
      new Language('English','en'),
      new Language('繁體中文','zh'),
      new Language('简体中文','cn')
    ];
    return (
      <div className="rcw-dropdown-menu">
          <select className="rcw-select">
            {LANGUAGE_LIST.map(language => <option key={language.name} value={language.value}>{language.name}</option>)}
          </select>
        </div>
    )
  }

  render() {
    return (
      <Widget
        fullScreenMode
        title="Bienvenido Bienvenido Bienvenido Bienvenido"
        subtitle="Asistente virtual Asistente virtual Asistente virtual"
        senderPlaceHolder="Escribe aquí ..."
        handleNewUserMessage={this.handleNewUserMessage}
        handleQuickButtonClicked={this.handleQuickButtonClicked}
        imagePreview
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
