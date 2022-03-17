import { AppBar, Dialog, IconButton, Slide, Toolbar } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import { Close } from '@material-ui/icons';
import React from 'react';
import { IProduct } from './Products';

export interface IDetailsProps {
  open: boolean;
  product: IProduct | null;
  handleClose(): void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='left' ref={ref} {...props} />;
});
export class DetailView extends React.Component<IDetailsProps> {
  constructor(props: IDetailsProps) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }
  render() {
    return (
      <div className='full-screen-details-dialogue'>
        <Dialog
          fullScreen
          open={this.props.open}
          TransitionComponent={Transition}>
          <AppBar>
            <Toolbar>
              <IconButton
                edge='start'
                color='inherit'
                onClick={this.handleClose}
                aria-label='close'>
                <Close></Close>
              </IconButton>
            </Toolbar>
          </AppBar>
        </Dialog>
      </div>
    );
  }
  handleClose() {
    console.log(`Details:handleClose()`);
    this.props.handleClose();
  }
}
