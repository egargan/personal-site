<script lang="ts">
  let className = "";
  export { className as class };

  export let points: "left" | "right" | "up" | "down" = "left";
  export let width = 1.5;

  function getArrowRotateClass(): string {
    if (points === "left") {
      return "";
    } else if (points === "right") {
      return "rotate-180";
    } else if (points === "up") {
      return "rotate-90";
    } else if (points === "down") {
      return "-rotate-90";
    }
  }
</script>

<svg
  width="24px"
  height="24px"
  stroke-width={width}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  class={className + ` ${getArrowRotateClass()}`}
>
  <path
    d="M18.5 12H6m0 0l6-6m-6 6l6 6"
    stroke-width={width}
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
