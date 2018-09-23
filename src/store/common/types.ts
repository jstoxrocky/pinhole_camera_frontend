import { Action } from 'redux';
import { IHttpResponse } from '../../package/types';
import { ICameraState } from '../camera/types';

export interface IPendingHTTPAction extends Action {
  payload: Promise<IHttpResponse>;
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
