<template>
  <div class="navigation-web">
    <router-link
      class="btn"
      v-for="(link, index) in navLinks"
      :key="index"
      :to="link.slug"
    >{{ link.title }}</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        { slug: "/", title: "work" },
        { slug: "/about", title: "about" },
        { slug: "/contact", title: "contact" }
      ]
    };
  }
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
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.5);
    border: 2px solid transparent;
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    height: 35px;
    line-height: 30px;
    width: 90px;

    // margin: 0 0.5rem;
    // padding: 0.3rem 0.8rem;
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
  font-weight: bold !important;
  color: black !important;
}
</style>
