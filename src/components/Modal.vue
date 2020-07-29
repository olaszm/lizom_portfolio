<template>
  <div class="wrap" @click="closeModal">
    <div class="modal">
      <button class="close-btn">
        <i class="fas fa-times"></i>
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/plugins/EventBus";
export default {
  methods: {
    closeModal(e) {
      console.log(e.target);
      if (
        e.target.className.includes("wrap") ||
        e.target.className.includes("close-btn") ||
        e.target.className.includes("fa-times")
      ) {
        EventBus.$emit("closeModal", false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_util";

.wrap {
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  height: 200%;
  width: 100%;
  background-color: rgba($color: #000000, $alpha: 0.5);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 20px;
}

.modal {
  color: $white;
  box-shadow: 0 0 20px black;
  background-color: $primary;
  min-height: 350px;
  width: 30%;
  min-width: 290px;
  margin-top: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (max-width: $small-break) {
    margin-top: 30%;
    width: 90%;
  }
}

.close-btn {
  position: absolute;
  top: 5%;
  right: 5%;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  pointer-events: all;
  opacity: 0;
}
</style>
