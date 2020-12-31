// KARMA (testing server, looks for .spec files)
// JASMINE (testing framework. You need to import it)
import { compute } from './compute';

describe('compute()', () => {
  // returned type
  it('returns Number', () => {
    expect(compute()).toEqual(jasmine.any(Number));
  });

  // returned values
  it('returns 0... if Arg is negative', () => {
    const resultNegative = compute(-3);
    expect(resultNegative).toBe(0);
    // you can also do it directly, expect(call) like in the following tests
  });

  it('returns number++... if Arg is 0 or positive', () => {
    expect(compute(0)).toBe(1);
    expect(compute(1)).toBe(2);
  });

  it('returns 1 (def)... if Arg is empty', () => {
    expect(compute(/* default is 0 */)).toBe(1);
  });
});
