import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { showCamera, selectCamera } from '../store/camera/actions';
import { ICameraState } from '../store/camera/types';
import { IApplicationState } from '../store/common/types';

type StateProps = ICameraState;
interface DispatchProps {
  dispatch: Redux.Dispatch<any>;
}
type Props = StateProps & DispatchProps;

class ShowButton extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch(showCamera(this.props.selectCamera));
  }

  handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const id = parseFloat(value);
    this.props.dispatch(selectCamera(id));
  }

  render() {
    return (
      <React.Fragment>
        <TextField label="ID" onChange={this.handleChange()}/>
        <Button variant="contained" color="primary" onClick={this.handleClick}>SHOW</Button>
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

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ShowButton);
