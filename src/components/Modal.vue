<template>
  <div class="wrap" @click="closeModal">
    <div class="modal">
      <button class="close-btn">X</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/plugins/EventBus";
export default {
  methods: {
    closeModal(e) {
      if (
        e.target.className.includes("wrap") ||
        e.target.className.includes("close-btn")
      ) {
        EventBus.$emit("closeModal", false);
      }
    }
  }
};
</script>


<style lang='scss' scoped>
@import "@/style/_util";

.wrap {
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba($color: #000000, $alpha: 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.modal {
  color: $white;
  box-shadow: 0 0 20px black;
  background-color: black;
  height: 150px;
  width: 20%;
  min-width: 290px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 5%;
  right: 5%;
  border: none;
  background: none;
  color: $white;
  font-size: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  //   transform: translateY(-40%);
  pointer-events: all;
  opacity: 0;
}
</style>