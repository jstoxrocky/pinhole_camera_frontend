import { index, show, create, clear } from '../../src/package/api';

describe('endpoints', () => {

  const SUCCESS = 200;

  describe('index', () => {
    it('should succeed with status 200', async () => {
      const output = await index();
      expect(output.status).toBe(SUCCESS);
    });
  });

  describe('show', () => {
    it('should succeed with status 200', async () => {
      const id = 1;
      const output = await show(id);
      expect(output.status).toBe(SUCCESS);
    });
  });

  describe('create', () => {
    it('should succeed with status 200', async () => {
      const pinholeDiameter = 0.65;
      const output = await create(pinholeDiameter);
      expect(output.status).toBe(SUCCESS);
    });
  });

  describe('clear', () => {
    it('should succeed with status 200', async () => {
      // Create
      const pinholeDiameter = 0.65;
      const creationOutput = await create(pinholeDiameter);
      const id = creationOutput.data[0].id;
      // Destroy
      const output = await clear(id);
      expect(output.status).toBe(SUCCESS);
    });
  });

});
