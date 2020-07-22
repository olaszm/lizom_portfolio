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
    Footer,
  },
};
</script>

<style lang="scss">
@import "@/style/_variables";
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: $primary;
}

.main {
  padding-bottom: 200px;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100vh;
}
</style>
