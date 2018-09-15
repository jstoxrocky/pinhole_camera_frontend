import { adder } from '../src/stupid';

describe('require', () => {

  it('should correctly add 2 + 3', async () => {
    const expected = 5;
    const output = adder(2, 3);
    expect(output).toBe(expected);
  });

});
