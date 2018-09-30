import { cameraReducer } from '../../../src/store/camera/reducer';
import { merge } from 'lodash';
import { FSpecs, FInitialState, blankAction } from './fixtures';
import { IFulfilledHTTPAction } from '../../../src/store/common/types';

describe('camera reducer', () => {

  describe('blank action', () => {
    it('should return the initial state', async () => {
      const state = await cameraReducer(FInitialState, blankAction);
      expect(state).toEqual(FInitialState);
    });
  });

  describe('GET_CAMERAS action', () => {
    it('should update the state`s camera attribute', async () => {
      const action: IFulfilledHTTPAction = {
        type: 'GET_CAMERAS_FULFILLED',
        payload: {
          data: FSpecs,
        },
      };
      const state = await cameraReducer(FInitialState, action);
      const newState = merge({}, FInitialState);
      newState.specs = action.payload.data;
      expect(state).toEqual(newState);
    });
  });

  describe('SHOW_CAMERA action', () => {
    it('should update the state`s camera attribute', async () => {
      const action: IFulfilledHTTPAction = {
        type: 'SHOW_CAMERA_FULFILLED',
        payload: {
          data: FSpecs,
        },
      };
      const state = await cameraReducer(FInitialState, action);
      const newState = merge({}, FInitialState);
      newState.specs = action.payload.data;
      expect(state).toEqual(newState);
    });
  });

  describe('CREATE_CAMERA action', () => {
    it('should update the state`s camera attribute', async () => {
      const action: IFulfilledHTTPAction = {
        type: 'CREATE_CAMERA_FULFILLED',
        payload: {
          data: FSpecs,
        },
      };
      const state = await cameraReducer(FInitialState, action);
      const newState = merge({}, FInitialState);
      newState.specs = action.payload.data;
      expect(state).toEqual(newState);
    });
  });

  describe('SELECT_CAMERA action', () => {
    it('should update the state`s selectCamera attribute', async () => {
      const id = 1;
      const action: IFulfilledHTTPAction = {
        type: 'SELECT_CAMERA',
        payload: {
          data: id,
        },
      };
      const state = await cameraReducer(FInitialState, action);
      const newState = merge({}, FInitialState);
      newState.selectCamera = action.payload.data;
      expect(state).toEqual(newState);
    });
  });

  describe('SELECT_PINHOLE_DIAMETER action', () => {
    it('should update the state`s selectPinholeDiameter attribute', async () => {
      const pinholeDiameter = 0.85;
      const action: IFulfilledHTTPAction = {
        type: 'SELECT_PINHOLE_DIAMETER',
        payload: {
          data: pinholeDiameter,
        },
      };
      const state = await cameraReducer(FInitialState, action);
      const newState = merge({}, FInitialState);
      newState.selectPinholeDiameter = action.payload.data;
      expect(state).toEqual(newState);
    });
  });

});
