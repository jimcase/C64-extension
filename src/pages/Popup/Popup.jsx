import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My first Cardano wallet in the browser</h1>
        <p>
          Edit <code>src/pages/Popup/Popup.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export default Popup;
