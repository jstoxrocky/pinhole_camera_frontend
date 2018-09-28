import { index, show, create } from '../../package/api';
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
