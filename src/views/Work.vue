<template>
  <div class="gallery">
    <div class="image-container" v-for="(item, index) in photos" :key="index">
      <img :src="item.fields.img.fields.file.url" alt="" />
      <p>{{ item.fields.title }}</p>
    </div>
  </div>
</template>

<script>
import client from "@/plugins/contentful";
export default {
  data() {
    return {
      photos: [],
    };
  },
  methods: {
    async getPost() {
      const resp = await client.getEntries({
        content_type: "lizomPhoto",
      });
      this.photos = resp.items;
    },
  },

  mounted() {
    this.getPost();
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_variables";

.gallery {
  height: 100%;
  width: 100%;
  width: 80%;
  margin: 0 auto;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.image-container {
  height: 300px;
  width: 300px;
  img {
    border: 5px solid black;
    height: 300px;
    width: 300px;
    object-fit: cover;
  }
}
</style>
