import { Action } from 'redux';
import { HttpResponse } from '../../package/types';
import { CameraState } from '../camera/types';

export interface HTTPAction extends Action {
  payload: Promise<HttpResponse>;
}

export interface ApplicationState {
  camera: CameraState;
}
