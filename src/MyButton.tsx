import React, { MouseEventHandler } from 'react';
import Button from '@material-ui/core/Button';

export interface IMyButtonProps {
  buttonName: string;
  handleButtonClick(): void;
}

export class MyButton extends React.Component<IMyButtonProps> {
  //  onButtonClicked: MouseEventHandler<HTMLButtonElement> | undefined;
  constructor(props: IMyButtonProps) {
    super(props);
    this.onButtonClicked = this.onButtonClicked?.bind(this);
  }
  render() {
    return (
      <div>
        <Button color='primary' onClick={this.onButtonClicked}>
          {this.props.buttonName}
        </Button>
      </div>
    );
  }
  onButtonClicked() {
    console.log(`myButton.onButtonClicked() called`);
    this.props.handleButtonClick();
  }
}
