export default function cx(condition: boolean, className: string): string {
  if (condition) {
    return className;
  } else {
    return "";
  }
}
