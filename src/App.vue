<template>
  <div>
    <div id="app">
      <NavBar />
      <router-view class="main" :key="$route.fullPath" />
      <Footer />
      <transition name="fade">
        <Modal v-if="isModalOpen">
          <h2>koszipuszi</h2>
        </Modal>
      </transition>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import { EventBus } from "@/plugins/EventBus";
export default {
  data() {
    return {
      isModalOpen: true,
    };
  },
  components: {
    NavBar,
    Footer,
    Modal,
  },
  created() {
    EventBus.$on("closeModal", (state) => {
      this.isModalOpen = state;
    });
  },
};
</script>

<style lang="scss">
@import "@/style/_util";
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: $primary;
}

.main {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
}

#app {
  font-family: "Rubik", sans-serif;
  text-align: center;
  font-size: 20px;
  position: relative;
  @media screen and (max-width: $small-break) {
    font-size: 16px;
  }
}
</style>
