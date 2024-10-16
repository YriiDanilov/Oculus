import isHappyTicket from '../js/isHappyTicket.js';

test('isHappyTicket', () => {
  expect(isHappyTicket('123321')).toBe(true);
  expect(isHappyTicket('060006')).toBe(true);
  expect(isHappyTicket('112310')).toBe(true);
})

test('isHappyTicket', () => {
  expect(isHappyTicket('123328')).toBe(false);
  expect(isHappyTicket('060306')).toBe(false);
  expect(isHappyTicket('118310')).toBe(false);
})