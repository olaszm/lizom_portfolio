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
  margin: 6rem auto;
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 0.5rem;
  grid-auto-flow: row dense;
  @media screen and (max-width: $medium-break) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}

.image-container {
  width: auto;
  height: 450px;
  position: relative;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
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
