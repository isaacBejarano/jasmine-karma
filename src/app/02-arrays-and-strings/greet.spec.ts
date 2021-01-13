import { greet } from './greet';

describe('greet()', () => {
  // returned type
  it('returns "string"', () => {
    expect(greet('World')).toEqual(jasmine.any(String));
  });

  // returned values
  describe('returns values', () => {
    it('empty "string" if Arg is empty', () => {
      expect(greet()).toContain('');
    });

    it('empty "string" if Arg is "undefined"', () => {
      expect(greet(undefined)).toContain('');
    });

    it('"string" if Arg is "null"', () => {
      expect(greet(null)).toContain('null');
    });

    it('"string" if Arg is "NaN"', () => {
      expect(greet(NaN)).toContain('NaN');
    });
    
    it('"string" if Arg is "string"', () => {
      expect(greet('2')).toContain('2');
    });

    it('"string" if Arg is "number"', () => {
      expect(greet(2)).toContain('2');
    });
  });
});
