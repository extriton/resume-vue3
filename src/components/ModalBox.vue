<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['modal-close'])
</script>

<template>
  <div v-if="isOpen" class="modal-mask" @click.stop="emit('modal-close')">
    <div class="modal-container" @click.stop>
      <div class="modal-container__image">
        <slot name="image"></slot>
      </div>
      <div class="modal-container__footer">
        <slot name="footer"></slot>
      </div>
      <div class="close-button" @click.stop="emit('modal-close')">
        <img src="/icons/close.svg" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-mask {
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(24, 28, 36, 0.8);
}
.close-button {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 20px;
  right: 20px;
  img {
    width: 30px;
    height: 30px;
  }
  &:hover {
    cursor: pointer;
  }
}
.modal-container {
  position: relative;
  width: 100%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  max-height: 98vh;
  overflow-y: hidden;
  &__image {
    display: flex;
    justify-content: center;
    width: 800px;
    height: 600px;
    margin: 20px auto;
  }
  &__arrow {
    display: flex;
    justify-content: center;
  }
  &__title {
    text-align: center;
    text-wrap: wrap;
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;
    margin-bottom: 20px;
  }
  &__text {
    text-align: center;
    text-wrap: wrap;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: white;
    margin-bottom: 20px;
  }
  &__footer {
    display: block;
  }
}
</style>
