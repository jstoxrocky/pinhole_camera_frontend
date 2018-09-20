import { createStore } from 'redux';
import * as camera from '../camera/fixtures';
import { reducer } from '../../../src/store/common/reducer';

const store = createStore(reducer);

describe('root reducer', () => {

    it('should contain the camera initial state', async () => {
      const state = store.getState();
      expect(state.camera).toEqual(camera.initialState);
    });

});
