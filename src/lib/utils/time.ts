export function formatDateLong(date: Date): string {
  const dateTimeFormat = new Intl.DateTimeFormat(
    'en-GB',
    { dateStyle: 'long' },
  );

  return dateTimeFormat.format(date);
}
