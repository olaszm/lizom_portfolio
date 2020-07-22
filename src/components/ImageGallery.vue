<template>
  <div class="wrapper">
    <div class="gallery">
      <div class="image-container" v-for="(item, index) in photos" :key="index">
        <img :src="item.fields.img.fields.file.url" alt="" />
        <!-- <p>{{ item.fields.title }}</p> -->
      </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/_variables";

.gallery {
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: center;
  justify-items: center;
  gap: 2rem;
}

.image-container {
  img {
    width: 250px;
    height: 250px;
    border: 5px solid black;
    object-fit: cover;
  }
}
</style>
