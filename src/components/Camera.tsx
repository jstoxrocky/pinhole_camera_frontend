import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as i from '../store/camera/types';
import { ApplicationState } from '../store/common/types';

interface OwnProps {
  foo: number;
}

type StateProps = i.Camera;
type ReduxState = ApplicationState;
type Props = StateProps & OwnProps;

class Camera extends Component<Props> {

  componentDidMount() {
    // this.props.dispatch(showCamera(1));
  }

  render() {
    const props = this.props;
    return (
      <Fragment>
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
            <tr>
              <td>{props.id}</td>
              <td>{props.pinhole_diameter}</td>
              <td>{props.focal_length}</td>
              <td>{props.image_width}</td>
              <td>{props.distortion}</td>
              <td>{props.pinhole_to_image_angle}</td>
              <td>{props.created_at}</td>
              <td>{props.updated_at}</td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    );
  }
}

function mapStateToProps(state: ReduxState, ownProps: OwnProps): StateProps {
  return state.camera.show;
}

export default connect<StateProps, {}, OwnProps>(mapStateToProps)(Camera);
