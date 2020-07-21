<template>
  <div class="home">
    <VideoPlayer />

    <router-link to="/contact">
      <button class="btn">Get in Touch</button>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import VideoPlayer from "@/components/VideoPlayer";
export default {
  name: "Home",
  components: { VideoPlayer },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

.btn {
  padding: 0.5rem 0.8rem;
  text-transform: uppercase;
  border: none;
  margin: 1rem 0;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid black;
    font-weight: bold;
  }
  &:active {
    border: 2px solid black;
    font-weight: bold;
  }
}
</style>
