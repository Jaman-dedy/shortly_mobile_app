import {truncate} from '../../src/helpers/truncateString';

test('truncate string', () => {
  expect(truncate('string', 5)).toBe('strin...');
});
test('should return the original string', () => {
  expect(truncate('string', 10)).toBe('string');
});
