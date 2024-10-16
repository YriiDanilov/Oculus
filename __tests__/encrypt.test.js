import encrypt from "../js/encrypt";

test('encrypt', () => {
  expect(encrypt('move')).toEqual('omev');
  expect(encrypt('attack')).toEqual('taatkc');
  expect(encrypt('car!')).toEqual('ac!r');
  expect(encrypt('back!')).toEqual('abkc!');
  expect(encrypt('go!')).toEqual('og!');
})