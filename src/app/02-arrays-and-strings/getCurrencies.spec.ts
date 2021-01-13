import { getCurrencies } from './getCurrencies';

describe('getCurrencies()', () => {
  // returned type
  it('returns "Array<string>"', () => {
    expect(getCurrencies()).toEqual(
      jasmine.arrayContaining([jasmine.any(String)])
    );
  });

  // returned values
  describe('returns values', () => {
    it('"AUD" in any position', () => {
      expect(getCurrencies()).toContain('AUD');
    });

    it('"EUR" in any position', () => {
      expect(getCurrencies()).toContain('EUR');
    });

    it('"USD" in any position', () => {
      expect(getCurrencies()).toContain('USD');
    });
  });
});
