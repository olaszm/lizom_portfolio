<template>
  <div class="navigation-web">
    <router-link
      class="btn"
      v-for="(link, index) in navLinks"
      :key="index"
      :to="link.slug"
      >{{ link.title }}</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        { slug: "/", title: "home" },
        { slug: "/work", title: "work" },
        { slug: "/about", title: "about" },
        { slug: "/contact", title: "contact" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_variables";

.navigation-web {
  background-color: transparent;

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
</style>
