<template>
  <div class="cont">
    <div class="navigation-web">
      <router-link
        class="btn"
        exact
        to="/"
      >
        {{ $t("menu.work") }}
      </router-link>
      <router-link
        class="btn"
        exact
        to="/about"
      >
        {{
          $t("menu.about")
        }}
      </router-link>
      <router-link
        class="btn"
        exact
        to="/contact"
      >
        {{
          $t("menu.contact")
        }}
      </router-link>
    </div>
    <SwitchLocale />
  </div>
</template>

<script>
import SwitchLocale from "@/components/SwitchLocale";
export default {
  components: {
    SwitchLocale,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_util";

.cont {
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: $small-break) {
    flex-direction: column;
  }
}

.navigation-web {
  height: 100%;
  min-width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  &:nth-child(1) {
    margin-left: 1rem;
  }
  a {
    font-family: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color: black;
    opacity: 0.6;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 300;
    display: block;
    align-items: center;
    justify-content: center;
    min-height: 30px;
    line-height: 2;
    min-width: 8ch;
    padding: 0 0.75em;
    &:hover {
      color: black;
      opacity: 1;
    }
  }
  @media screen and (max-width: $small-break) {
    order: 2;
  }
}
.router-link-exact-active {
  opacity: 1 !important;
  border: 2px solid black !important;
  font-weight: 400 !important;
  color: black !important;
  background-color: $white;
}
</style>
