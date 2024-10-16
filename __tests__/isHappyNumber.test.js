import isHappyNumber from "../js/isHappyNumber";

test('isHappyNumber', () => {
  expect(isHappyNumber(0)).toBe(false);
  expect(isHappyNumber(1)).toBe(true);
  expect(isHappyNumber(7)).toBe(true);
  expect(isHappyNumber(8)).toBe(false);
  expect(isHappyNumber(90)).toBe(false);
})

