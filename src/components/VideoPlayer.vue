<template>
  <div class="wrapper">
    <div class="showreel">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6XxSurPikKE"
        allowfullscreen
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/_variables";

.wrapper {
  width: 85%;
  margin: 0 auto;
  @media screen and (max-width: $small-break) {
    width: 90%;
  }
}

.showreel {
  z-index: -1;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  width: 100%;
  height: auto;
  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 80%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: $small-break) {
      margin-top: 3rem;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
