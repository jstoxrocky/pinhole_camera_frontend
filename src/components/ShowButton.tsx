import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { showCamera } from '../store/camera/actions';

interface DispatchProps {
  dispatch: Redux.Dispatch<any>;
}
type Props = DispatchProps;

class ShowButton extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const id = 1;
    this.props.dispatch(showCamera(id));
  }

  render() {
    return (
      <React.Fragment>
        <Button variant="contained" color="primary" onClick={this.handleClick}>SHOW</Button>
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch: Redux.Dispatch<any>) {
  return { dispatch };
}

export default connect<DispatchProps>(mapDispatchToProps)(ShowButton);
