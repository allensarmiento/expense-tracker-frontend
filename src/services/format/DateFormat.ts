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

  constructor(private y: number, private m: number, private d: number=1) {
    const yFormat: number = y < 0 ? 0 : y;
    this.date = new Date(`${yFormat}-${this.m}-${this.d}`);
  }

  get month() {
    return MONTHS[this.date.getUTCMonth()];
  }

  get year() {
    return this.date.getUTCFullYear();
  }

  get day() {
    return this.date.getUTCDate();
  }
}
