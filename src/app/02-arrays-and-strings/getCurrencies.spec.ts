import { getCurrencies } from './getCurrencies';

describe('getCurrencies()', () => {
  // returned type
  it('returns string[]', () => {
    expect(getCurrencies()).toEqual(
      jasmine.arrayContaining([jasmine.any(String)])
    );
  });

  // returned values
  it('returns []... including "AUD" in any position', () => {
    expect(getCurrencies()).toContain('AUD');
  });

  it('returns []... including "EUR" in any position', () => {
    expect(getCurrencies()).toContain('EUR');
  });

  it('returns []... including "USD" in any position', () => {
    expect(getCurrencies()).toContain('USD');
  });
});
