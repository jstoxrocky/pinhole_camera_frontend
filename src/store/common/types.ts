import { Action } from 'redux';
import { IHttpResponse } from '../../package/types';
import { ICameraState , ISpecs} from '../camera/types';

export interface IPendingHTTPAction extends Action {
  payload: Promise<IHttpResponse>;
}

interface IPayload {
  data: ISpecs | number;
}

export interface IFulfilledHTTPAction extends Action {
  payload: IPayload;
}

export interface IApplicationState {
  camera: ICameraState;
}
