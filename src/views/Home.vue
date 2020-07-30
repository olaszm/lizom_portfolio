<template>
  <div class="main">
    <h3>{{$t("page_titles.work")}}</h3>
    <div>
      <VideoPlayer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VideoPlayer from "@/components/VideoPlayer";
export default {
  name: "Home",
  components: { VideoPlayer },
};
</script>

<style lang="scss" scoped>
@import "@/style/_util";
</style>
