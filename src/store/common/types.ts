import { Action } from 'redux';
import { ICameraState } from '../camera/types';
import { AxiosPromise } from 'axios';

export interface IPendingHTTPAction extends Action {
  payload: AxiosPromise<any>;
}

interface IPayload {
  data: any;
}

export interface IFulfilledHTTPAction extends Action {
  payload: IPayload;
}

export interface IApplicationState {
  camera: ICameraState;
}
