import countComments from '../countComments.js';

describe('Testing comments counter', () => {
  test('First test', () => {
    expect(countComments([{}, {}, {}])).toBe(3);
  });
  test('Second test', () => {
    expect(countComments([])).toBe(0);
  });
  test('Third test', () => {
    expect(countComments([{}, {}, {}, {}, {}])).toBe(5);
  });
});