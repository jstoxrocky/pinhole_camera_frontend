import { Reducer, combineReducers } from 'redux';
import { cameraReducer } from '../camera/reducer';
import { IApplicationState } from './types';

export const reducer: Reducer<IApplicationState> = combineReducers<IApplicationState>({
  camera: cameraReducer,
});
