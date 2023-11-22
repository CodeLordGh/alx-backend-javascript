import { spy as _spy } from 'sinon';
import { expect } from 'chai';
import sendPaymentRequestToApi from './3-payment.js';
import Utils from './utils.js';

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with the correct arguments', () => {
    const spy = _spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnce).to.be.true;
    expect(spy.args[0]).to.deep.equal(['SUM', 100, 20]);

    spy.restore();
  });
});
