export function formatDateLong(date: Date): string {
  debugger;

  const dateTimeFormat = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "long",
  });

  return dateTimeFormat.format(date);
}
