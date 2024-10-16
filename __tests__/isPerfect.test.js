import isPerfect from "../js/isPerfect";

test('should be true', () => {
  expect(isPerfect(6)).toBe(true);
  expect(isPerfect(28)).toBe(true);
  expect(isPerfect(496)).toBe(true);
  expect(isPerfect(8128)).toBe(true);
})

test('should be false', () => {
  expect(isPerfect(7)).toBe(false);
  expect(isPerfect(29)).toBe(false);
  expect(isPerfect(497)).toBe(false);
  expect(isPerfect(8129)).toBe(false);
})