import timestamp from 'time-stamp';

export default function constructReadableDate(createdAt: number) {
  const date = new Date(createdAt);
  const fullDate = timestamp('YYYY-MM-DD', date);
  const time = timestamp('HH:mm', date);
  const readableDate = `${fullDate} ${time}`;
  return readableDate;
}
