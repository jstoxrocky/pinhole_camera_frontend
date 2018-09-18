import { getCameras, showCamera, createCamera } from '../../../src/store/camera/actions';
import { CameraActionTypes } from '../../../src/store/camera/types';

describe('camera-action', () => {

  describe('index', () => {
    it('should return with GET_CAMERAS action', async () => {
      const actionType = CameraActionTypes.GET_CAMERAS;
      const output = await getCameras();
      expect(output.type).toBe(actionType);
    });
  });

  describe('show', () => {
    it('should return with SHOW_CAMERA action', async () => {
      const actionType = CameraActionTypes.SHOW_CAMERA;
      const id = 1;
      const output = await showCamera(id);
      expect(output.type).toBe(actionType);
    });
  });

  describe('create', () => {
    it('should return with CREATE_CAMERA action', async () => {
      const actionType = CameraActionTypes.CREATE_CAMERA;
      const pinholeDiameter = 0.85;
      const output = await createCamera(pinholeDiameter);
      expect(output.type).toBe(actionType);
    });
  });

});
