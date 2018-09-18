import { index, show, create } from '../../src/actions/camera';

describe('endpoints', () => {

  const SUCCESS = 200;


  describe('index', () => {
    it('should succeed with status 200', async () => {
      const output = await index();
      expect(output.status).toBe(SUCCESS);
    });
  };

  describe('show', () => {
    it('should succeed with status 200', async () => {
      const output = await show(1);
      expect(output.status).toBe(SUCCESS);
    });
  };

    describe('create', () => {
    it('should succeed with status 200', async () => {
      const output = await create(0.65);
      expect(output.status).toBe(SUCCESS);
    });
  };



});
