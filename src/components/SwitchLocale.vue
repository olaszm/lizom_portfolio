<template>
  <div class="cont">
    <input
      id="chk"
      v-model="isChecked"
      type="checkbox"
      class="checkbox"
      @click.stop="switchLocale"
    >
    <label
      class="label"
      for="chk"
    >
      <p class="switch-text">en</p>
      <p class="switch-text">hu</p>
      <div class="ball" />
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locales: ["en", "hun"],
      isChecked: false,
    };
  },
  created() {
    const locale = localStorage.getItem("locale");

    locale == "en" || !locale
      ? (this.isChecked = false)
      : (this.isChecked = true);
  },
  methods: {
    switchLocale() {
      if (this.isChecked) {
        this.$i18n.locale = "en";
        localStorage.setItem("locale", "en");
      } else {
        this.$i18n.locale = "hun";
        localStorage.setItem("locale", "hun");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_util";
.checkbox {
  opacity: 0;
  position: absolute;
}

.cont {
  margin: 0 2rem;

  @media screen and (max-width: $small-break) {
    margin: 0.8em 0;
  }
}

.label {
  background-color: white;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  position: relative;
  height: 26px;
  width: 52px;
  transform: scale(1.3);
  p {
    text-transform: uppercase;
    font-size: 9px;
    z-index: 1;
    // padding: 8px;
    // margin: 0.2em 0.9em;
    font-weight: 400;
  }
  &:hover {
    box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.15);
  }
}

.label .ball {
  background-color: $primary;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 3.5px;
  height: 20px;
  width: 20px;
  transform: translate(0, -50%);
  transition: transform 0.2s linear;
}

.checkbox:checked + .label .ball {
  transform: translate(23.8px, -50%);
}
</style>
