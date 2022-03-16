import React from 'react';
import { CollectionView } from '../CollectionView';
import './App.css';
import { MyButton } from './MyButton';
import { Collection } from './Products';
export interface IAppProps {}
export interface IAppState {
  showDetails: boolean;
}
const collectionInstance = new Collection();

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { showDetails: false };
  }
  render() {
    return (
      <div>
        <CollectionView {...collectionInstance} />
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
