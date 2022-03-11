<template>
  <div>
    <div id="app">
      <NavBar />
      <keep-alive include="Home">
        <transition name="slither" mode="out-in">
          <router-view :key="$route.fullPath" />
        </transition>
      </keep-alive>
      <transition name="fade">
        <MyModal v-if="isModalOpen"></MyModal>
      </transition>
      <FooterElement />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import FooterElement from "@/components/FooterElement";
import MyModal from "@/components/MyModal";
import EventBus from "@/plugins/EventBus";

import { useI18n } from "vue-i18n";
export default {
  data() {
    return {
      isModalOpen: false,
      prevHeight: 0,
    };
  },
  components: {
    NavBar,
    FooterElement,
    MyModal,
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
  },
  created() {
    const { t } = useI18n(); // use as global scope

    console.log(t)
    EventBus.$on("closeModal", (state) => {
      this.isModalOpen = state;
    });

    const locale = localStorage.getItem("locale");

    if (locale) {
      this.$i18n.locale = locale;
    }
  },

};
</script>

<style lang="scss">
@import "@/style/_util";
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: $primary;
}

#app {
  font-family: "Rubik", sans-serif;
  text-align: center;
  font-size: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: $small-break) {
    font-size: 16px;
  }
}

.slither-enter-active,
.slither-leave-active {
  transition: all 350ms ease;
  overflow: hidden;
}

.slither-enter,
.slither-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slither-enter-to,
.slither-leave {
  transform: translateX(0);
  opacity: 1;
}
</style>
