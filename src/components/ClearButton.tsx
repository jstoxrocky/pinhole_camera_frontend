import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { clearCamera } from '../store/camera/actions';

interface DispatchProps {
  dispatch: Redux.Dispatch<any>;
}
type Props = DispatchProps;

class ClearButton extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch((clearCamera()));
  }

  render() {
    return (
      <React.Fragment>
        <Button variant="contained" color="primary" onClick={this.handleClick}>CLEAR</Button>
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch: Redux.Dispatch<any>) {
  return { dispatch };
}

export default connect<DispatchProps>(mapDispatchToProps)(ClearButton);
