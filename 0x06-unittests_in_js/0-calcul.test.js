import { equal } from 'assert';
import calculateNumber from './0-calcul.js';

describe('calculateNumber', () => {
  it('should round both numbers and return their sum', () => {
    equal(calculateNumber(1, 3), 4);
    equal(calculateNumber(1, 3.7), 5);
    equal(calculateNumber(1.2, 3.7), 5);
    equal(calculateNumber(1.5, 3.7), 6);
  });
});
