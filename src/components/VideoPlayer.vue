<template>
  <div class="showreel">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/6XxSurPikKE"
      allowfullscreen
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/_util";

.showreel {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  width: 100%;
  height: auto;
  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    z-index: 1;
    @media screen and (max-width: $small-break) {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
