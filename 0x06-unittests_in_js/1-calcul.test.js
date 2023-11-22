import calculateNumber from './1-calcul.js';
import { strictEqual, throws } from 'assert';

describe('calculateNumber', () => {
  it('should perform SUM operation correctly', () => {
    const result = calculateNumber('SUM', 1.4, 4.5);
    strictEqual(result, 6);
  });

  it('should perform SUBTRACT operation correctly', () => {
    const result = calculateNumber('SUBTRACT', 1.4, 4.5);
    strictEqual(result, -4);
  });

  it('should perform DIVIDE operation correctly', () => {
    const result = calculateNumber('DIVIDE', 1.4, 4.5);
    strictEqual(result, 0.2);
  });

  it('should return "Error" when dividing by 0', () => {
    const result = calculateNumber('DIVIDE', 1.4, 0);
    strictEqual(result, 'Error');
  });

  it('should throw an error for invalid type', () => {
    throws(() => calculateNumber('INVALID_TYPE', 1.4, 4.5), Error);
  });
});
