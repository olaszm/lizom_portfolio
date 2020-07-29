<template>
  <div class="main">
    <div class="wrapper">
      <div class="photo">
        <img
          @mouseenter="triggerGif"
          v-if="!isGifActive"
          class="gif-activate"
          src="@/assets/ld_portrait.jpg"
          alt="portrait"
        />
        <img
          v-if="isGifActive"
          @mouseleave="triggerGif"
          class="gif-activate"
          src="@/assets/ld_portrait-hover.gif"
          alt="portrait"
        />
      </div>
      <div class="about-side">
        <h3>{{ $t("page_titles.about_me") }}</h3>
        <p>{{ $t("about.p1") }}</p>
        <p>{{ $t("about.p2") }}</p>

        <p>{{ $t("about.p3") }}</p>
        <p>{{ $t("about.p4") }}</p>
        <p>{{ $t("about.p5") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isGifActive: false,
    };
  },
  methods: {
    triggerGif() {
      if (this.isGifActive) {
        // el.target.src = `${require("@/assets/ld_portrait.jpg")}`;
        this.isGifActive = false;
      } else {
        // el.target.src = `${require("@/assets/ld_portrait-hover.gif")}`;
        this.isGifActive = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_util";

.wrapper {
  display: grid;
  grid-template-columns: minmax(250px, 1fr) minmax(300px, 1fr);
  gap: 2rem;
  @media screen and (max-width: $small-break) {
    grid-template-columns: 1fr;
  }
}

.about-side {
  h3 {
    margin: 0;
  }
  p {
    text-align: left;
    margin: 2rem 0;
  }
  @media screen and (max-width: $small-break) {
    min-width: 180px;
  }
}

.photo {
  display: grid;
  place-items: center;
  height: 500px;
  width: 100%;
  img {
    height: auto;
    max-height: 500px;
    max-width: 500px;
    width: 100%;
  }

  @media screen and (max-width: $small-break) {
    height: 200px;
    img {
      max-height: 200px;
      max-width: 200px;
    }
  }
}
</style>
