<template>
  <header>
    <div class="drip"></div>
    <div class="wrapper">
      <div class="logo">
        <img src="@/assets/logo.svg" alt />
      </div>

      <!-- <div class="navigation-web">
        <router-link
          class="btn"
          v-for="(link, index) in navLinks"
          :key="index"
          :to="link.slug"
          >{{ link.title }}</router-link
        >
      </div>-->

      <NavigationLinks />

      <div class="navigation-mobile" @click.stop="openMenu">
        <i class="fas fa-bars"></i>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <div class="test" v-if="isMenuOpen">
        <router-link v-for="(link, index) in navLinks" :key="index" :to="link.slug">{{ link.title }}</router-link>
      </div>
    </transition>

    <!-- <transition name="fade" mode="out-in">
      <div class="dropdown-menu" v-if="isMenuOpen">
        <router-link
          v-for="(link, index) in navLinks"
          :key="index"
          :to="link.slug"
          >{{ link.title }}</router-link
        >
      </div>
    </transition>-->
  </header>
</template>

<script>
import NavigationLinks from "@/components/NavigationLinks";

export default {
  components: {
    NavigationLinks
  },
  data() {
    return {
      navLinks: [
        { slug: "/", title: "home" },
        { slug: "/work", title: "work" },
        { slug: "/about", title: "about" },
        { slug: "/contact", title: "contact" }
      ],
      isMenuOpen: false
    };
  },
  methods: {
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  },
  mounted() {
    window.addEventListener("click", e => {
      if (!e.target.className.includes("dropdown-menu") && this.isMenuOpen) {
        this.openMenu();
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/_variables";

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
  height: 65%;
  display: flex;
  align-items: center;
  img {
    height: 100%;
    width: 100%;
  }
}

.wrapper {
  z-index: 2;
  height: 100%;
  display: flex;
  width: 80%;
  margin: 0.2rem auto;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.navigation-web {
  @media screen and (max-width: $small-break) {
    display: none;
  }
  a {
    color: rgba(0, 0, 0, 0.5);
    border: 2px solid transparent;
    text-decoration: none;
    text-transform: uppercase;
    margin: 0 1rem;
    padding: 0.3rem 0.8rem;
    &:hover {
      color: black;
    }
  }
}

.navigation-mobile {
  transform: scale(1.3);
  cursor: pointer;
  display: none;
  @media screen and (max-width: $small-break) {
    display: inline;
  }
}

.router-link-exact-active {
  background-color: white;
  color: black !important;
  border: 2px solid black !important;
  padding: 0.3rem 0.8rem;
  @media screen and(max-width:$small-break) {
    // color: white !important;
    // border: none;
    // border-bottom: 2px solid white !important;
  }
}

// .btn {
//   padding: 0.5rem 0.8rem;
//   text-transform: uppercase;
//   border: none;
//   cursor: pointer;
//   &:hover {
//     border-bottom: 2px solid black;
//     font-weight: bold;
//   }
// }

.test {
  z-index: 2;
  position: absolute;
  bottom: -90%;
  background-color: $primary;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // transform: translate(0, 100%);
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
}

.dropdown-menu {
  // z-index: ;
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
