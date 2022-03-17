import React from 'react';
import { CollectionView } from './CollectionView';
import './App.css';
import { MyButton } from './MyButton';
import { Collection, IProduct } from './Products';
import { DetailView } from './DetailView';
export interface IAppProps {}
export interface IAppState {
  showDetails: boolean;
  product: IProduct | null;
}

const collectionInstance = new Collection();
class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.showDetailView = this.showDetailView.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = { showDetails: false, product: null };
  }
  render() {
    return (
      <div>
        <CollectionView
          {...collectionInstance}
          handlerItemClicked={this.showDetailView}></CollectionView>
        <DetailView
          open={this.state.showDetails}
          product={this.state.product}
          handleClose={this.handleClose}></DetailView>
      </div>
    );
  }
  showDetailView(id: number) {
    let fundItem = collectionInstance.items.find((item: IProduct) => {
      return item.id === id;
    });
    if (fundItem) {
      this.setState({
        showDetails: true,
        product: fundItem,
      });
    }
  }
  handleClose() {
    console.log(`App.handleClick() called`);
    this.setState({
      showDetails: false,
      product: null,
    });
  }
}

export default App;
