<template>
  <header>
    <div class="drip"></div>
    <div class="wrapper">
      <div class="logo">
        <img src="@/assets/logo.svg" alt />
      </div>

      <div class="navigation-web">
        <router-link
          class="btn"
          v-for="(link, index) in navLinks"
          :key="index"
          :to="link.slug"
        >{{link.title}}</router-link>
      </div>

      <div class="navigation-mobile" @click.stop="openMenu">
        <i class="fas fa-bars"></i>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div class="dropdown-menu" v-if="isMenuOpen">
        <router-link v-for="(link, index) in navLinks" :key="index" :to="link.slug">{{link.title}}</router-link>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
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

<style lang='scss' scoped>
@import "@/style/_variables";
header {
  height: 60px;
  width: 100%;
}

.logo {
  height: 100%;
  display: flex;
  align-items: center;
  img {
    height: 100%;
    width: 100%;
    @media screen and (max-width: $small-break) {
      height: 35px;
    }
  }
}

.wrapper {
  z-index: 3;
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
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    margin: 0 1rem;
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
  font-weight: bold;
  border: 2px solid black;
  padding: 0.3rem 0.8rem;
  @media screen and(max-width:$small-break) {
    border: none;
    border-bottom: 2px solid white;
    padding: 0;
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

.dropdown-menu {
  z-index: 1;
  position: absolute;
  top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
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
  top: -2%;
  z-index: 2;
  height: 90px;
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