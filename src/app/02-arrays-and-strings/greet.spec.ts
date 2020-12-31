import { greet } from './greet';

describe('greet()', () => {
  // returned type
  it('returns String', () => {
    expect(greet('World')).toEqual(jasmine.any(String));
  });

  // returned values
  it('Arg: undefined returns String', () => {
    expect(greet(undefined)).toContain('');
  });

  it('Arg: string returns String', () => {
    expect(greet('2')).toContain('2');
  });

  it('Arg: number returns String', () => {
    expect(greet(2)).toContain('2');
  });
});
