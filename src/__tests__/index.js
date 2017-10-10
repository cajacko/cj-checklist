import entryFile from 'src/index';

describe('Entry file', () => {
  test('Default', () => {
    entryFile();
    expect(true).toBe(true);
  });
});
