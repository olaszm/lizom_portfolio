<template>
  <div class="main">
    <h1
      ref="title"
      class="title"
    >
      {{ $t("page_titles.about_me") }}
    </h1>
    <div class="wrapper">
      <div class="photo">
        <video
          poster="@/assets/ld_portrait.jpg"
          class="video"
          preload="true"
          muted
          src="@/assets/ld_portrait.mp4"
          type="video/mp4"
          width="400"
          height="300"
          playsinline
          @mouseenter="triggerGif"
          @mouseleave="triggerGif"
        />
      </div>
      <div class="about-side">
        <h1 class="title-big">
          {{ $t("page_titles.about_me") }}
        </h1>
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
import { gsap } from "gsap";
export default {
  name: 'MyAbout',
  metaInfo: {
    title: "David Lizom Motion & Illustration",
    titleTemplate: "%s | About",
    meta: [
      {
        vmid: "description",
        name: "description",
        content: `Hello! My name is David.

I am a hungarian illustrator and motion designer living in Pécs.

While I like creating amusing works, it is also very important to me to bring other’s ideas to life in the best possible way.`,
      },
    ],
  },
  data() {
    return {
      isGifActive: true,
    };
  },
  mounted() {
    const tl = gsap.timeline();
    tl.from(".about-side > *", {
      opacity: 0,
      x: 100,
      // ease: "bounce",
      stagger: {
        amount: 0.5,
      },
      duration: 1,
      delay: 0.3,
    });
  },
  methods: {
    triggerGif(el) {
      if (this.isGifActive) {
        el.target.play();
        el.target.loop = true;
        this.isGifActive = false;
      } else {
        el.target.loop = false;
        this.isGifActive = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_util";

.title {
  display: none;
  @media screen and (max-width: $small-break) {
    display: block;
  }
}

.wrapper {
  display: grid;
  grid-template-columns: minmax(250px, 1fr) minmax(300px, 1fr);
  gap: 2rem;
  @media screen and (max-width: $small-break) {
    grid-template-columns: 1fr;
  }
}

.about-side {
  h1 {
    margin: 0;
  }
  p {
    text-align: left;
    margin: 2rem 0;
  }
  @media screen and (max-width: $small-break) {
    min-width: 180px;
    h1 {
      display: none;
    }
  }
}

.photo {
  display: grid;
  place-items: center;
  height: 500px;
  width: 100%;
  video,
  img {
    height: auto;
    max-height: 500px;
    max-width: 500px;
    width: 100%;
  }

  @media screen and (max-width: $small-break) {
    height: 200px;
    video,
    img {
      max-height: 200px;
      max-width: 200px;
    }
  }
}
</style>
