<template>
  <div class="main">
    <h1>{{ $t("page_titles.work") }}</h1>
    <div>
      <VideoPlayer />
    </div>
    <!-- <ImageGallery /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import VideoPlayer from "@/components/VideoPlayer";
// import ImageGallery from "@/components/ImageGallery";
export default {
  name:'MyHome', 
  metaInfo: {
    title: "David Lizom Motion & Illustration",
    titleTemplate: "%s | Works",
    link: [{ rel: "canonical", href: "https://www.davidlizom.com" }],
    meta: [
      {
        vmid: "description",
        name: "description",
        content: `I'm a freelance Motion designer & Illustrator from Hungary`,
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "David Lizom Motion & Illustration" },
      {
        property: "og:site_name",
        content: "David Lizom Motion & Illustration",
      },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      { property: "og:url", content: "https://www.davidlizom.com" },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content: `I'm a freelance Motion designer & Illustrator from Hungary`,
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "https://www.davidlizom.com" },
      { name: "twitter:title", content: "David Lizom Motion & Illustration" },
      {
        name: "twitter:description",
        content: "David Lizom Motion & Illustration",
      },
      // Your twitter handle, if you have one.

      // Google / Schema.org markup:
      { itemprop: "name", content: "David Lizom Motion & Illustration" },
      { itemprop: "description", content: "David Lizom Motion & Illustration" },
    ],
  },
  name: "Home",
  components: { VideoPlayer },
};
</script>

<style lang="scss" scoped>
@import "@/style/_util";
</style>
