import { index, show, create } from '../../src/package/api';
import { HttpResponse } from '../../src/package/types';

describe('endpoints', () => {

  const SUCCESS = 200;

  describe('index', () => {
    it('should succeed with status 200', async () => {
      const output: HttpResponse = await index();
      expect(output.status).toBe(SUCCESS);
    });
  });

  describe('show', () => {
    it('should succeed with status 200', async () => {
      const id = 1;
      const output: HttpResponse = await show(id);
      expect(output.status).toBe(SUCCESS);
    });
  });

  describe('create', () => {
    it('should succeed with status 200', async () => {
      const pinholeDiameter = 0.65;
      const output: HttpResponse = await create(pinholeDiameter);
      expect(output.status).toBe(SUCCESS);
    });
  });

});
