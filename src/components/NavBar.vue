<template>
  <header>
    <div class="drip"></div>
    <div class="wrapper">
      <router-link class="logo-routerlink" to="/">
        <div class="logo">
          <img src="@/assets/logo.svg" alt />
          <img class="logo-text" src="@/assets/logo-text.svg" alt />
        </div>
      </router-link>

      <NavigationLinks />

      <div class="navigation-mobile" @click.stop="openMenu">
        <HamburgerIcon />
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <div class="test" v-if="isMenuOpen">
        <router-link v-for="(link, index) in navLinks" :key="index" :to="link.slug">{{ link.title }}</router-link>
      </div>
    </transition>
  </header>
</template>

<script>
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
      navLinks: [
        { slug: "/", title: "work" },
        { slug: "/about", title: "about" },
        { slug: "/contact", title: "contact" },
      ],
      isMenuOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  mounted() {
    window.addEventListener("click", (e) => {
      if (!e.target.className.includes("dropdown-menu") && this.isMenuOpen) {
        this.openMenu();
      }
    });
  },
  watch: {
    isMenuOpen: function (newVal) {
      EventBus.$emit("MenuState", newVal);
    },
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
  bottom: -90%;
  background-color: $primary;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  a {
    color: rgba(0, 0, 0, 0.5);
    border: 2px solid transparent;
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    margin: 0 0.3rem;
    &:hover {
      color: black;
    }
  }

  @media screen and(max-width:$small-break) {
    display: flex;
  }
}

.dropdown-menu {
  position: absolute;
  bottom: 0;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: black;
  width: 100%;
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    margin: 0.8rem 0;
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
