<template>
  <header id="header">
    <div class="drip"></div>
    <div class="wrapper">
      <router-link class="logo-routerlink" to="/">
        <div class="logo">
          <img src="@/assets/logo.svg" alt="Logo" />
          <img
            class="logo-text"
            src="@/assets/logo-gif.gif"
            alt="David Lizom logo"
          />
        </div>
      </router-link>

      <NavigationLinks v-if="!isMobile" />

      <div class="navigation-mobile" @click.stop="openMenu">
        <HamburgerIcon />
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <div class="test" v-show="isMenuOpen">
        <NavigationLinks />
      </div>
    </transition>
  </header>
</template>

<script>
import { gsap } from "gsap";
import NavigationLinks from "@/components/NavigationLinks";
import HamburgerIcon from "@/components/HamburgerIcon";
import { EventBus } from "@/plugins/EventBus";
export default {
  components: {
    NavigationLinks,
    HamburgerIcon,
  },
  data() {
    return {
      isMobile: false,
      isMenuOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    onResize() {
      this.isMobile = window.innerWidth < 780;
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
    window.addEventListener("click", (e) => {
      if (
        (e.target.className.includes("switch-text") && this.isMenuOpen) ||
        (e.target.className.includes("label") && this.isMenuOpen) ||
        (e.target.className.includes("ball") && this.isMenuOpen)
      ) {
        return;
      } else if (this.isMenuOpen) {
        this.openMenu();
      }
    });
    gsap.from("#header", {
      y: "-100%",
      opacity: 0,
      ease: "bounce",
      duration: 0.5,
      delay: 0.5,
    });
  },
  watch: {
    isMenuOpen: function(newVal) {
      EventBus.$emit("MenuState", newVal);
    },
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_util";

header {
  z-index: 2;
  font-size: 14px;
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin: 0 0.5rem;
  }
}

.logo-text {
  height: 30px;
  @media screen and (max-width: $small-break) {
    height: 24px;
  }
}

.wrapper {
  z-index: 2;
  height: 100%;
  display: flex;
  width: 65%;
  margin: 0.2rem auto;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: $small-break) {
    width: 90%;
  }
}

.navigation-mobile {
  cursor: pointer;
  display: none;
  @media screen and (max-width: $small-break) {
    display: inline;
  }
}

.router-link-exact-active {
  @media screen and(max-width:$small-break) {
    border: 2px solid black !important;
    background-color: $white;
    padding: 0 0.4rem;
    color: black !important ;
  }
}

.logo-routerlink {
  border: none !important;
  background-color: transparent;
  padding: 0;
}

.test {
  z-index: 1;
  position: absolute;
  bottom: -100px;
  background-color: $primary;
  width: 100%;
  height: 120px;
  display: none;
  align-items: center;
  justify-content: center;
  @media screen and(max-width:$small-break) {
    display: flex;
  }
}

.drip {
  position: absolute;
  top: -1%;
  z-index: 2;
  height: 100%;
  width: 100%;
  background-image: url("../assets/nav-drip.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(-40%);
  pointer-events: all;
  opacity: 0;
}
</style>
