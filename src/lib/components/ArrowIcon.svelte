<script lang="ts">
  let className = "";
  export { className as class };

  export let points: "left" | "right" | "up" | "down" = "left";
  export let width = 1.5;

  function getArrowRotation() {
    switch (points) {
      case "right":
        return 180;
      case "up":
        return 90;
      case "down":
        return -90;
      case "left":
      default:
        return 0;
    }
  }
</script>

<svg
  width="24px"
  height="24px"
  stroke-width={width}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  class={className}
  style={`transform: rotate(${getArrowRotation()}deg)}`}
>
  <path
    d="M18.5 12H6m0 0l6-6m-6 6l6 6"
    stroke-width={width}
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


