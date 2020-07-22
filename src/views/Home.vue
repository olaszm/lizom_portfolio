<template>
  <div>
    <VideoPlayer />
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
.home {
  height: 100%;
  width: 100%;
}
</style>
