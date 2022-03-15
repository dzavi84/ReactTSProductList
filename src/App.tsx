import React from 'react';
import './App.css';
import { MyButton } from './MyButton';

class App extends React.Component {
  render() {
    return (
      <MyButton
        buttonName='Click Here'
        handleButtonClick={this.handleClick}></MyButton>
    );
  }
  handleClick() {
    console.log(`App.handleClick() called`);
  }
}
export default App;
