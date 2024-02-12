export function flyInVars({
  delayMs = 30,
  y = "15px",
  durationMs = 400,
  timingFunction = "cubic-bezier(0.215, 0.61, 0.355, 1.0)",
}) {
  return {
    "--fly-in-delay": `${delayMs}ms`,
    "--fly-in-duration": `${durationMs}ms`,
    "--fly-in-timing-function": timingFunction,
    "--fly-in-y": y,
  };
}
