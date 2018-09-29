import { merge } from 'lodash';
import { Reducer } from 'redux';
import { ICameraState, CameraActionTypes } from './types';
import { IFulfilledHTTPAction } from '../common/types';

const initialState: ICameraState = {
  specs: [
    {
      id: 0,
      pinhole_diameter: 0,
      focal_length: 0,
      image_width: 0,
      distortion: 0,
      pinhole_to_image_angle: 0,
      created_at: '',
      updated_at: '',
    },
  ],
  selectCamera: 0,
  selectPinholeDiameter: 0,
};

export const cameraReducer: Reducer<ICameraState> = (state = initialState, action: IFulfilledHTTPAction) => {
  Object.freeze(state);
  const newState: ICameraState = merge({}, state);
  switch (action.type) {
    case CameraActionTypes.GET_CAMERAS_FULFILLED:
    case CameraActionTypes.SHOW_CAMERA_FULFILLED:
    case CameraActionTypes.CREATE_CAMERA_FULFILLED:
      newState.specs = action.payload.data;
      return newState;
    case CameraActionTypes.SELECT_CAMERA:
      newState.selectCamera = action.payload.data;
      return newState;
    case CameraActionTypes.SELECT_PINHOLE_DIAMETER:
      newState.selectPinholeDiameter = action.payload.data;
      return newState;
    default:
      return state;
    }
};
