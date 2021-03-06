import { index, show, create, clear } from '../../package/api';
import { CameraActionTypes } from './types';
import { IPendingHTTPAction, IFulfilledHTTPAction } from '../common/types';

export const getCameras = (): IPendingHTTPAction => ({
  type: CameraActionTypes.GET_CAMERAS,
  payload: index(),
});

export const showCamera = (id: number): IPendingHTTPAction => ({
  type: CameraActionTypes.SHOW_CAMERA,
  payload: show(id),
});

export const createCamera = (pinholeDiameter: number): IPendingHTTPAction => ({
  type: CameraActionTypes.CREATE_CAMERA,
  payload: create(pinholeDiameter),
});

export const selectCamera = (id: number): IFulfilledHTTPAction => ({
  type: CameraActionTypes.SELECT_CAMERA,
  payload: {
    data: id,
  },
});

export const selectPinholeDiameter = (pinholeDiameter: number): IFulfilledHTTPAction => ({
  type: CameraActionTypes.SELECT_PINHOLE_DIAMETER,
  payload: {
    data: pinholeDiameter,
  },
});

export const clearCamera = (id: number): IPendingHTTPAction => ({
  type: CameraActionTypes.CLEAR_CAMERA,
  payload: clear(id),
});
