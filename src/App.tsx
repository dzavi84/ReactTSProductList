import React from 'react';
import './App.css';
import { MyButton } from './MyButton';
export interface IAppProps {}
export interface IAppState {
  showDetails: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { showDetails: false };
  }
  render() {
    return (
      <div>
        <p>showDetails={this.state.showDetails ? 'true' : 'false'}</p>
        <MyButton
          buttonName='Click Here'
          handleButtonClick={this.handleClick}></MyButton>
      </div>
    );
  }
  handleClick() {
    console.log(`App.handleClick() called`);
    this.setState({
      showDetails: !this.state.showDetails,
    });
  }
}
export default App;
