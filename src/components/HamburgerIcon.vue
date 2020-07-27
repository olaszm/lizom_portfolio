<template>
  <div class="container" @click="animateHamburger" ref="cont">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
</template>

<script>
import { EventBus } from "@/plugins/EventBus";

export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    animateHamburger() {
      if (this.isMenuOpen) {
        this.$refs.cont.classList.add("change");
      } else {
        this.$refs.cont.classList.remove("change");
      }
    },
  },
  created() {
    EventBus.$on("MenuState", (state) => {
      this.isMenuOpen = state;
      this.animateHamburger();
    });
  },
};
</script>

<style scoped>
.container {
  display: inline-block;
  cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 4px 0;
  transition: 0.4s;
}

.change .bar1 {
  /* -webkit-transform: rotate(-45deg) translate(-4px, 6px); */
  transform: rotate(-45deg) translate(-5px, 6px);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  /* -webkit-transform: rotate(45deg) translate(-8px, -8px); */
  transform: rotate(45deg) translate(-4px, -5px);
}
</style>
