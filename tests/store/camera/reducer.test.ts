import { cameraReducer } from '../../../src/store/camera/reducer';
import { merge } from 'lodash';
import { FSpecs, FInitialState, blankAction } from './fixtures';
import { IFulfilledHTTPAction } from '../../../src/store/common/types';
import { ICameraState } from '../../../src/store/camera/types';

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
      const update: ICameraState = {specs: action.payload.data};
      const expected = merge({}, FInitialState, update);
      expect(state).toEqual(expected);
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
      const update: ICameraState = {specs: action.payload.data};
      const expected = merge({}, FInitialState, update);
      expect(state).toEqual(expected);
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
      const update: ICameraState = {specs: action.payload.data};
      const expected = merge({}, FInitialState, update);
      expect(state).toEqual(expected);
    });
  });

});
