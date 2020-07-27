<template>
  <div class="cont">
    <div class="navigation-web">
      <router-link class="btn" to="/">{{ $t("menu.work") }}</router-link>
      <router-link class="btn" to="/about">{{ $t("menu.about") }}</router-link>
      <router-link class="btn" to="/contact">
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
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 300;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 35px;
    line-height: 35px;
    min-width: 8ch;
    padding: 0 0.75em;
    &:hover {
      color: black;
    }
  }
  @media screen and (max-width: $small-break) {
    order: 2;
  }
}
.router-link-exact-active {
  border: 2px solid black !important;
  font-weight: 400 !important;
  color: black !important;
  background-color: $white;
}
</style>
