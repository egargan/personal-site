export default function debounce(
  callback: (...args: unknown[]) => unknown,
  timeMs = 100,
) {
  let timer: ReturnType<typeof setTimeout>;

  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(callback, timeMs);
  };
}
