import utils from '../../source/app/modules/utils';

test('adds 1 + 2 to equal 3', () => {
  const sum = (x, y) => x + y;
  expect(sum(1, 2)).toBe(3);
});
