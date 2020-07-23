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
@import "@/style/_util";
</style>
