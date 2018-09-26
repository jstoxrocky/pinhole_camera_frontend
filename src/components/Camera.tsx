import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { ICameraState } from '../store/camera/types';
import { IApplicationState } from '../store/common/types';
import { getCameras } from '../store/camera/actions';

interface OwnProps {
}

type StateProps = ICameraState;
type ReduxState = IApplicationState;

interface DispatchProps {
  dispatch: Redux.Dispatch<any>;
}

type Props = StateProps & DispatchProps & OwnProps;

class Camera extends React.Component<Props> {

  async componentDidMount() {
    this.props.dispatch(getCameras());
  }

  render() {
    const props = this.props;
    const tds2 = props.specs.map(row => (
      <TableRow hover={true} key={row.id}>
          <TableCell numeric={true}>{row.id}</TableCell>
          <TableCell numeric={true}>{row.pinhole_diameter}</TableCell>
          <TableCell numeric={true}>{row.focal_length}</TableCell>
          <TableCell numeric={true}>{row.image_width}</TableCell>
          <TableCell numeric={true}>{row.distortion}</TableCell>
          <TableCell numeric={true}>{row.pinhole_to_image_angle}</TableCell>
          <TableCell>{row.created_at}</TableCell>
          <TableCell>{row.updated_at}</TableCell>
        </TableRow>
    ));
    return (
      <React.Fragment>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>pinhole diameter</TableCell>
                <TableCell>focal length</TableCell>
                <TableCell>image width</TableCell>
                <TableCell>distortion</TableCell>
                <TableCell>pinhole to image angle</TableCell>
                <TableCell>created at</TableCell>
                <TableCell>updated at</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tds2}
            </TableBody>
          </Table>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state: ReduxState, ownProps: OwnProps): StateProps {
  return state.camera;
}

function mapDispatchToProps(dispatch: Redux.Dispatch<any>, ownProps: OwnProps): DispatchProps {
  return { dispatch };
}

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Camera);
