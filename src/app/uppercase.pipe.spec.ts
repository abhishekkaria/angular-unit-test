import { UppercasePipe } from './uppercase.pipe';

describe('UppercasePipe', () => {
  let pipe: UppercasePipe;

  beforeEach(() => {
    pipe = new UppercasePipe();
  });

  it('transforms "hello" to "HELLO"', () => {
    const result = pipe.transform('hello');
    expect(result).toBe('HELLO');
  });

  it('transforms empty string to empty string', () => {
    const result = pipe.transform('');
    expect(result).toBe('');
  });
});
