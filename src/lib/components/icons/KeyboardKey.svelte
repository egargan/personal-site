<script>
  import { randomId } from "$lib/utils/randomId";

  let {
    text = "Enter",
    width = 42 + text.length * 8,
    height = 50,
    strokeWidth = 2.5,
  } = $props();

  const clipId = randomId("clip");
</script>

<svg
  alt="{text} key"
  {width}
  {height}
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id={clipId}>
      <rect y={height * 0.75} x="0" width="100%" height={height * 0.25}></rect>
    </clipPath>
  </defs>

  <rect
    y={`${strokeWidth + height * 0.4}`}
    x={`${strokeWidth}`}
    width={`${width - strokeWidth * 2}`}
    height={`${height * 0.6 - strokeWidth * 2}`}
    rx={`${strokeWidth * 1.5}`}
    stroke="var(--text-three)"
    fill="var(--background-two)"
    stroke-width={strokeWidth}
    clip-path={`url(#${clipId})`} />

  <rect
    y={`${strokeWidth}`}
    x={`${strokeWidth}`}
    width={`${width - strokeWidth * 2}`}
    height={`${height * 0.89 - strokeWidth * 2}`}
    rx={`${strokeWidth * 1.5}`}
    stroke="var(--text-three)"
    fill="var(--background)"
    stroke-width={strokeWidth} />

  <text
    x="10"
    y={height * 0.6}
    text-anchor="start"
    alignment-baseline="middle"
    font-size="13"
    font-family="Atkinson Hyperlegible"
    fill="var(--text-two)"
    font-weight="bold">
    {text}
  </text>
</svg>
