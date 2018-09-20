import { cameraReducer } from '../../../src/store/camera/reducer';
import { merge } from 'lodash';
import { initialState, blankAction, cameras, camera } from './fixtures';

describe('camera reducer', () => {

  describe('blank action', () => {
    it('should return the initial state', async () => {
      const state = await cameraReducer(initialState, blankAction);
      expect(state).toEqual(initialState);
    });
  });

  describe('GET_CAMERAS action', () => {
    it('should update the state`s camera attribute', async () => {
      const action = {
        type: 'GET_CAMERAS',
        payload: cameras,
      };
      const state = await cameraReducer(initialState, action);
      const expected = merge({}, initialState, {cameras: action.payload});
      expect(state).toEqual(expected);
    });
  });

  describe('SHOW_CAMERA action', () => {
    it('should update the state`s camera attribute', async () => {
      const action = {
        type: 'SHOW_CAMERA',
        payload: camera,
      };
      const state = await cameraReducer(initialState, action);
      const expected = merge({}, initialState, {camera: action.payload});
      expect(state).toEqual(expected);
    });
  });

  describe('CREATE_CAMERA action', () => {
    it('should update the state`s camera attribute', async () => {
      const action = {
        type: 'CREATE_CAMERA',
        payload: camera,
      };
      const state = await cameraReducer(initialState, action);
      const expected = merge({}, initialState, {camera: action.payload});
      expect(state).toEqual(expected);
    });
  });

});
