import { createStore } from 'redux';
import { FInitialState } from '../common/fixtures';
import { reducer } from '../../../src/store/common/reducer';
import { IApplicationState } from '../../../src/store/common/types';

const store = createStore(reducer);

describe('root reducer', () => {

    it('should contain the camera initial state', async () => {
      const state: IApplicationState = store.getState();
      expect(state).toEqual(FInitialState);
    });

});
