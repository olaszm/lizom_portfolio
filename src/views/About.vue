<template>
  <div class="main">
    <div class="wrapper">
      <div class="photo">
        <video muted @mouseenter="triggerGif" @mouseleave="triggerGif">
          <source src="@/assets/ld_portrait-hover.mp4" />
        </video>
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
      isGifActive: true,
    };
  },
  methods: {
    triggerGif(el) {
      if (this.isGifActive) {
        el.target.play();
        el.target.loop = true;
        this.isGifActive = false;
      } else {
        // el.target.pause();
        el.target.loop = false;
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
  video {
    height: auto;
    max-height: 500px;
    max-width: 500px;
    width: 100%;
  }

  @media screen and (max-width: $small-break) {
    height: 200px;
    video {
      max-height: 200px;
      max-width: 200px;
    }
  }
}
</style>
