import { index, show, create } from '../../package/api';
import { CameraActionTypes } from './types';
import { HTTPAction } from '../common/types';

export const getCameras = (): HTTPAction => ({
  type: CameraActionTypes.GET_CAMERAS,
  payload: index(),
});

export const showCamera = (id: number): HTTPAction => ({
  type: CameraActionTypes.SHOW_CAMERA,
  payload: show(id),
});

export const createCamera = (pinholeDiameter: number): HTTPAction => ({
  type: CameraActionTypes.CREATE_CAMERA,
  payload: create(pinholeDiameter),
});
