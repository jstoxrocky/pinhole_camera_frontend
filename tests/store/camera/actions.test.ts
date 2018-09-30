import * as actions from '../../../src/store/camera/actions';
import { CameraActionTypes } from '../../../src/store/camera/types';

describe('camera-action', () => {

  describe('get', () => {
    it('should return with GET_CAMERAS action', async () => {
      const actionType = CameraActionTypes.GET_CAMERAS;
      const output = await actions.getCameras();
      expect(output.type).toBe(actionType);
    });
  });

  describe('show', () => {
    it('should return with SHOW_CAMERA action', async () => {
      const actionType = CameraActionTypes.SHOW_CAMERA;
      const id = 1;
      const output = await actions.showCamera(id);
      expect(output.type).toBe(actionType);
    });
  });

  describe('create', () => {
    it('should return with CREATE_CAMERA action', async () => {
      const actionType = CameraActionTypes.CREATE_CAMERA;
      const pinholeDiameter = 0.85;
      const output = await actions.createCamera(pinholeDiameter);
      expect(output.type).toBe(actionType);
    });
  });

  describe('select camera', () => {
    it('should return with SELECT_CAMERA action', async () => {
      const actionType = CameraActionTypes.SELECT_CAMERA;
      const id = 1;
      const output = await actions.selectCamera(id);
      expect(output.type).toBe(actionType);
    });
  });

  describe('select pinhole diameter', () => {
    it('should return with SELECT_PINHOLE_DIAMETER action', async () => {
      const actionType = CameraActionTypes.SELECT_PINHOLE_DIAMETER;
      const pinholeDiameter = 0.85;
      const output = await actions.selectPinholeDiameter(pinholeDiameter);
      expect(output.type).toBe(actionType);
    });
  });

});
