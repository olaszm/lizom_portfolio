<template>
  <div class="navigation-web">
    <router-link
      class="btn"
      v-for="(link, index) in navLinks"
      :key="index"
      :to="link.slug"
    >{{ link.title }}</router-link>
    <div class="locale">
      <p>hu</p>
      <p>eng</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        { slug: "/", title: "work" },
        { slug: "/about", title: "about" },
        { slug: "/contact", title: "contact" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_util";

.navigation-web {
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 300;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 35px;
    min-width: 8ch;
    padding: 0.25em 0.75em;
    line-height: 1.5;
    &:hover {
      color: black;
    }
  }
  @media screen and (max-width: $small-break) {
    display: none;
  }
}
.router-link-exact-active {
  border: 2px solid black !important;
  font-weight: 400 !important;
  color: black !important;
  line-height: 1.5 !important;
}
</style>
