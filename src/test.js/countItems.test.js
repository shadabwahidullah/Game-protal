import counter from '../countItems.js';

describe('Testing all items counter', () => {
  test('First test', () => {
    expect(counter([{}, {}, {}])).toBe(3);
  });

  test('Second test', () => {
    expect(counter([{}])).toBe(1);
  });

  test('Third test', () => {
    expect(counter([])).toBe(0);
  });
});