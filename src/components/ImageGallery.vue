<template>
  <div>
    <div class="gallery">
      <div class="gallery-inner" v-for="(item, index) in photos" :key="index">
        <div class="image-container">
          <img :src="item.fields.img.fields.file.url" alt />
        </div>
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
@import "@/style/_util";

.gallery {
  height: 100%;
  width: 100%;
  margin: 10rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  justify-items: center;
  gap: 0.4rem;
}

.image-container {
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &::before {
    content: "img-title";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    display: grid;
    place-items: center;
    transform: translateY(-100%);
    background-color: rgba($color: black, $alpha: 0.6);
    transition: all 300ms ease;
  }
  &:hover::before {
    transform: translate(0);
  }
}
</style>
