import { Reducer, combineReducers } from 'redux';
import { cameraReducer } from '../camera/reducer';
import { ApplicationState } from './types';

export const reducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  camera: cameraReducer,
});
