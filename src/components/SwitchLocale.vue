<template>
  <div class="cont">
    <input
      type="checkbox"
      class="checkbox"
      v-model="isChecked"
      id="chk"
      @click.stop="switchLocale"
    />
    <label class="label" for="chk">
      <p class="switch-text">en</p>
      <p class="switch-text">hu</p>
      <div class="ball"></div>
    </label>
  </div>
</template>

<script>
export default {
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
  padding: 5px;
  position: relative;
  height: 26px;
  width: 52px;
  transform: scale(1.3);
  p {
    text-transform: uppercase;
    font-size: 10px;
    z-index: 1;
    font-weight: 400;
  }
}

.label .ball {
  background-color: $primary;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 2px;
  height: 20px;
  width: 20px;
  transform: translateX(0px);
  transition: transform 0.2s linear;
}

.checkbox:checked + .label .ball {
  transform: translateX(27px);
}
</style>
