import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import roundTo from 'round-to';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { ICameraState } from '../store/camera/types';
import { IApplicationState } from '../store/common/types';

interface OwnProps {}
type StateProps = ICameraState;
interface DispatchProps {
  dispatch: Redux.Dispatch<any>;
}
type Props = StateProps & DispatchProps & OwnProps;

class Data extends React.Component<Props> {

  render() {
    const props = this.props;
    const precision = 2;
    const tds = props.specs.map(row => (
      <TableRow hover={true} key={row.id}>
          <TableCell numeric={true}>{roundTo(row.id, precision)}</TableCell>
          <TableCell numeric={true}>{roundTo(row.pinhole_diameter, precision)}</TableCell>
          <TableCell numeric={true}>{roundTo(row.focal_length, precision)}</TableCell>
          <TableCell numeric={true}>{roundTo(row.image_width, precision)}</TableCell>
          <TableCell numeric={true}>{roundTo(row.distortion, precision)}</TableCell>
          <TableCell numeric={true}>{roundTo(row.pinhole_to_image_angle, precision)}</TableCell>
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
            {tds}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state: IApplicationState, ownProps: OwnProps): StateProps {
  return state.camera;
}

function mapDispatchToProps(dispatch: Redux.Dispatch<any>, ownProps: OwnProps): DispatchProps {
  return { dispatch };
}

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Data);
