import { Box } from '@material-ui/core';
import React from 'react';
import { ItemView } from './ItemView';
import { Collection } from './src/Products';

export class CollectionView extends React.Component<Collection> {
  constructor(props: Collection) {
    super(props);
    this.handlerItemClicked = this.handlerItemClicked.bind(this);
  }
  handlerItemClicked(id: number) {
    console.log(`handleItemClick:${id}`);
    this.props.handlerItemClicked(id);
  }
  render() {
    let items = this.props.items.map((item) => {
      return (
        <ItemView
          {...item}
          key={item.id}
          onItemClicked={this.handlerItemClicked}
        />
      );
    });
    return (
      <Box display='flex' flexWrap='wrap'>
        {items}
      </Box>
    );
  }
}
