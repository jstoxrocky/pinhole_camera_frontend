import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { ICameraState } from '../store/camera/types';
import { IApplicationState } from '../store/common/types';
import { getCameras } from '../store/camera/actions';

interface OwnProps {
  foo: number;
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
    const tds = [];
    for (const row of props.specs) {
      tds.push(
        <tr key={row.id}>
          <td>{row.id}</td>
          <td>{row.pinhole_diameter}</td>
          <td>{row.focal_length}</td>
          <td>{row.image_width}</td>
          <td>{row.distortion}</td>
          <td>{row.pinhole_to_image_angle}</td>
          <td>{row.created_at}</td>
          <td>{row.updated_at}</td>
        </tr>,
      );
    }
    return (
      <React.Fragment>
        <div>{this.props.foo}</div>
        <table>
          <tbody>
            <tr>
              <td>id</td>
              <td>pinhole_diameter</td>
              <td>focal_length</td>
              <td>image_width</td>
              <td>distortion</td>
              <td>pinhole_to_image_angle</td>
              <td>created_at</td>
              <td>updated_at</td>
            </tr>
            {tds}
          </tbody>
        </table>
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
