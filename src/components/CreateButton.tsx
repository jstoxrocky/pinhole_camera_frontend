import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { createCamera } from '../store/camera/actions';

interface DispatchProps {
  dispatch: Redux.Dispatch<any>;
}
type Props = DispatchProps;

class CreateButton extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const pinholeDiameter = 1.0;
    this.props.dispatch(createCamera(pinholeDiameter));
  }

  render() {
    return (
      <React.Fragment>
        <Button variant="contained" color="primary" onClick={this.handleClick}>CREATE</Button>
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch: Redux.Dispatch<any>) {
  return { dispatch };
}

export default connect<DispatchProps>(mapDispatchToProps)(CreateButton);
