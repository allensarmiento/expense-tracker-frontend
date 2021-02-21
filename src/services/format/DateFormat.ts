const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export class DateFormat {
  date: Date;

  constructor(private y: number, private m: number) {
    const yFormat: number = y < 0 ? 0 : y;
    this.date = new Date(`${yFormat}-${this.m}`);
  }

  get month() {
    return MONTHS[this.date.getUTCMonth()];
  }

  get year() {
    return this.date.getUTCFullYear();
  }
}
