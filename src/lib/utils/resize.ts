export function createResizeListener(
  callback: () => void,
  breakpoints: number[],
): () => void {
  let prevWidth = window.innerWidth;

  function onResize() {
    const currWidth = window.innerWidth;

    for (const breakpoint of breakpoints) {
      const crossed =
        (prevWidth < breakpoint && currWidth >= breakpoint) ||
        (prevWidth >= breakpoint && currWidth < breakpoint);

      if (crossed) {
        callback();
        break;
      }
    }

    prevWidth = currWidth;
  }
  window.addEventListener("resize", onResize);

  return () => {
    window.removeEventListener("resize", onResize);
  };
}
