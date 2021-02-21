import { DateFormat } from './DateFormat';

describe('valid values', () => {
  it('formats as February 2021', () => {
    const dateFormat = new DateFormat(2021, 2);

    expect(dateFormat.month).toEqual('February');
    expect(dateFormat.year).toEqual(2021);
  });

  it('formats as March 2018', () => {
    const dateFormat = new DateFormat(2018, 3);

    expect(dateFormat.month).toEqual('March');
    expect(dateFormat.year).toEqual(2018);
  });
});

describe('invalid values', () => {
  it('invalid month lower month', () => {
    const dateFormat = new DateFormat(2018, 0);

    expect(dateFormat.month).toEqual(undefined);
    expect(dateFormat.year).toEqual(NaN);
  });

  it('invalid month higher month', () => {
    const dateFormat = new DateFormat(2018, 13);

    expect(dateFormat.month).toEqual(undefined);
    expect(dateFormat.year).toEqual(NaN);
  });

  it('invalid year and month', () => {
    const dateFormat = new DateFormat(0, 0);

    expect(dateFormat.month).toEqual(undefined);
    expect(dateFormat.year).toEqual(NaN);
  });

  it('invalid year 0', () => {
    const dateFormat = new DateFormat(0, 5);

    expect(dateFormat.month).toEqual('May');
    expect(dateFormat.year).toEqual(2000);
  });

  it('invalid year less than 0', () => {
    const dateFormat = new DateFormat(-1, 5);

    expect(dateFormat.month).toEqual('May');
    expect(dateFormat.year).toEqual(2000);
  });
});
