import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { createCamera, selectPinholeDiameter } from '../store/camera/actions';
import { ICameraState } from '../store/camera/types';
import { IApplicationState } from '../store/common/types';

type StateProps = ICameraState;
interface DispatchProps {
  dispatch: Redux.Dispatch<any>;
}
type Props = StateProps & DispatchProps;

class CreateButton extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch(createCamera(this.props.selectPinholeDiameter));
  }

  handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const pinholeDiameter = parseFloat(value);
    this.props.dispatch(selectPinholeDiameter(pinholeDiameter));
  }

  render() {
    return (
      <React.Fragment>
        <TextField label="pinhole diameter (mm)" onChange={this.handleChange()}/>
        <Button variant="contained" color="primary" onClick={this.handleClick}>CREATE</Button>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state: IApplicationState): StateProps {
  return state.camera;
}

function mapDispatchToProps(dispatch: Redux.Dispatch<any>) {
  return { dispatch };
}

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(CreateButton);
