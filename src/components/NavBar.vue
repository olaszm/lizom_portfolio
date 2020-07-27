<template>
  <header>
    <div class="drip"></div>
    <div class="wrapper">
      <router-link class="logo-routerlink" to="/">
        <div class="logo">
          <img src="@/assets/logo.svg" alt />
          <img class="logo-text" src="@/assets/logo-gif.gif" alt />
        </div>
      </router-link>

      <NavigationLinks v-if="!isMobile" />

      <div class="navigation-mobile" @click.stop="openMenu">
        <HamburgerIcon />
        <LottieTest />
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
import NavigationLinks from "@/components/NavigationLinks";
import HamburgerIcon from "@/components/HamburgerIcon";
import LottieTest from "@/components/LottieTest";
import { EventBus } from "@/plugins/EventBus";
export default {
  components: {
    NavigationLinks,
    HamburgerIcon,
    LottieTest,
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
      this.isMobile = window.innerWidth < 600;
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
    window.addEventListener("click", (e) => {
      if (!e.target.className.includes("dropdown-menu") && this.isMenuOpen) {
        this.openMenu();
      }
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
  // height: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    // height: 100%;
    // height: auto;
    // width: 100%;
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
  // transform: scale(1.3);
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
  // a {
  //   color: rgba(0, 0, 0, 0.5);
  //   border: 2px solid transparent;
  //   text-decoration: none;
  //   text-transform: uppercase;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   height: 2rem;
  //   margin: 0 0.3rem;
  //   &:hover {
  //     color: black;
  //   }
  // }

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
