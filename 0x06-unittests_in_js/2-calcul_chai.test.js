import calculateNumber from './1-calcul.js';
import { expect } from 'chai';

describe('calculateNumber', () => {
  it('should perform SUM operation correctly', () => {
    const result = calculateNumber('SUM', 1.4, 4.5);
    expect(result).to.be.equal(6);
  });

  it('should perform SUBTRACT operation correctly', () => {
    const result = calculateNumber('SUBTRACT', 1.4, 4.5);
    expect(result).to.be.equal(-4)
  });

  it('should perform DIVIDE operation correctly', () => {
    const result = calculateNumber('DIVIDE', 1.4, 4.5);
    expect(result).to.be.equal(0.2);
  });

  it('should return "Error" when dividing by 0', () => {
    const result = calculateNumber('DIVIDE', 1.4, 0);
    expect(result).to.be.equal('Error')
  });

it('should throw an error for invalid type', () => {
    expect(() => calculateNumber('INVALID_TYPE', 1.4, 4.5)).to.throw(Error);
  });
});
