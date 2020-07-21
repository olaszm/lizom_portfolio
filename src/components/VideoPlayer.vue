<template>
  <div class="showreel">
    <object data="https://www.youtube.com/embed/6XxSurPikKE"></object>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/_variables";

.showreel {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 55vh;
  border: 5px solid black;
  margin: 0 auto;
  @media screen and (max-width: $small-break) {
    width: 90%;
    height: 40vh;
  }
  object {
    height: 100%;
    width: 100%;
  }
}
</style>
