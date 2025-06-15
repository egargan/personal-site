<script lang="ts">
  let { points = "left", ...props } = $props();

  let rotationDeg = 0;

  if (points === "right") {
    rotationDeg = 180;
  } else if (points === "up") {
    rotationDeg = 90;
  } else if (points === "down") {
    rotationDeg = -90;
  }

  const styleTransform = `transform: rotate(${rotationDeg}deg); transform-origin: "center"`;
</script>

<svg
  width="24px"
  height="24px"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  style={styleTransform}
  {...props}>
  <path
    d="M18.5 12H6m0 0l6-6m-6 6l6 6"
    stroke-linecap="round"
    stroke-linejoin="round" />
</svg>
