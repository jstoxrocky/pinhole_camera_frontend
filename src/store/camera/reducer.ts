import { merge } from 'lodash';
import { Reducer } from 'redux';
import { CameraState, CameraActionTypes } from './types';

const initialState: CameraState = {
  cameras: [
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
  camera: {
    id: 0,
    pinhole_diameter: 0,
    focal_length: 0,
    image_width: 0,
    distortion: 0,
    pinhole_to_image_angle: 0,
    created_at: '',
    updated_at: '',
  },
};

export const cameraReducer: Reducer<CameraState> = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CameraActionTypes.GET_CAMERAS:
      return merge({}, state, {cameras: action.payload});
    case CameraActionTypes.SHOW_CAMERA:
    case CameraActionTypes.CREATE_CAMERA:
      return merge({}, state, {camera: action.payload});
    default:
      return state;
    }
};
