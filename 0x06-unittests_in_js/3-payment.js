import calculateNumber from './utils.js';

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totalAmountRounded = Math.round(totalAmount);
  const totalShippingRounded = Math.round(totalShipping);

  const total = calculateNumber('SUM', totalAmountRounded, totalShippingRounded);

  console.log(`The total is: ${total}`);
};

export default sendPaymentRequestToApi