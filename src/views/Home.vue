<template>
  <div class="main">
    <h3>showreel</h3>
    <div>
      <VideoPlayer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VideoPlayer from "@/components/VideoPlayer";
// import ImageGallery from "@/components/ImageGallery";
export default {
  name: "Home",
  components: { VideoPlayer }
};
</script>

<style lang="scss" scoped>
@import "@/style/_variables";

.main {
  text-align: left;
  width: 65%;
  margin: 0rem auto;
  h3 {
    text-align: left;
    margin: 1rem 0;
    margin-top: 3rem;
    text-transform: uppercase;
  }
  @media screen and (max-width: $small-break) {
    margin-top: 2rem;
    width: 90%;
    h3 {
      text-align: center;
    }
  }
}
</style>
