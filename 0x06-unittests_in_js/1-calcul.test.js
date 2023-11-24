//const assert = require('assert');
//const calculateNumber = require('./1-calcul.js');

import assert from 'assert'
import calculateNumber from './1-calcul.js'


describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should round both numbers and return their sum', () => {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT', () => {
    it('should round both numbers and subtract b from a', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE', () => {
    it('should round both numbers and divide a with b', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return an error when b is 0', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});

