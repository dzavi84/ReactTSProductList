import React from 'react';
import { CollectionView } from './CollectionView';
import './App.css';
import { MyButton } from './MyButton';
import { Collection, IProduct } from './Products';
import { DetailView } from './DetailView';
import { ajax } from 'rxjs/ajax';
import { CircularProgress } from '@material-ui/core';
import { MicroEventBus } from 'MicroFrontEnd';
export interface IAppProps {}

export let microEventBus: MicroEventBus = (window as any).microEventBus;
export interface AppState {
  showDetails: boolean;
  product: IProduct | null;
  collectionInstance: Collection;
  username: string;
}

//const collectionInstance = new Collection();
class App extends React.Component<IAppProps, AppState> {
  constructor(props: IAppProps) {
    super(props);
    this.showDetailView = this.showDetailView.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      showDetails: false,
      product: null,
      collectionInstance: new Collection(),
      username: '',
    };
  }
  componentDidMount() {
    this.processUserLoginEvent = this.processUserLoginEvent.bind(this);
    microEventBus.on('user-logged-in').subscribe(this.processUserLoginEvent);
    ajax.getJSON('http://128.0.0.1:3000/products').subscribe((data) => {
      let collection = new Collection();
      collection.items = data as IProduct[];
      this.setState({
        showDetails: false,
        product: null,
        collectionInstance: collection,
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.collectionInstance.items.length < 1 ? (
          <div className='App-header'>
            <CircularProgress />
          </div>
        ) : (
          ''
        )}
        <CollectionView
          {...this.state.collectionInstance}
          handlerItemClicked={this.showDetailView}></CollectionView>
        <DetailView
          open={this.state.showDetails}
          product={this.state.product}
          handleClose={this.handleClose}
          username={this.state.username}></DetailView>
      </div>
    );
  }
  showDetailView(id: number) {
    let foundItem = this.state.collectionInstance.items.find(
      (item: IProduct) => {
        return item.id === id;
      },
    );
    if (foundItem) {
      this.setState({
        showDetails: true,
        product: foundItem,
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
  processUserLoginEvent(event: string | undefined) {
    console.log(`RCT:App.processUserLoginEvent:${event}`);
    if (event) {
      this.setState({ username: event });
    }
  }
}

export default App;
