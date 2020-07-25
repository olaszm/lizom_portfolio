<template>
  <div id="app">
    <NavBar />
    <router-view class="main" :key="$route.fullPath" />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default {
  components: {
    NavBar,
    Footer
  }
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
  @media screen and (max-width: $small-break) {
    font-size: 16px;
  }
}
</style>
