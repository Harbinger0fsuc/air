<template>
  <a v-if="btnType === 'link'" :href="pathTo" class="btn-main">{{ text }}</a>
  <button v-else class="btn-main btn-reset">{{ text }}</button>
</template>

<script setup>
defineProps({
  btnType: {
    required: true,
    type: String,
  },
  text: {
    required: true,
    type: String,
  },
  pathTo: {
    type: String,
  },
})
</script>

<style lang="scss" scoped>
.btn-main {
  position: relative;
  isolation: isolate;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 14rem;
  color: white;
  line-height: 1.2;
  letter-spacing: 0.72px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  background-color: var(--bg-color-primary);
  padding: 2.4rem;
  border-radius: 1rem;
  border: 0.1rem solid var(--bg-color-primary);
  cursor: pointer;
  transition:
    border-color 0.3s linear,
    color 0.3s linear;
  overflow: hidden;

  &:hover {
    color: var(--text-color-primary);
    border-color: white;

    &::before {
      transform: scale(1);
    }
  }

  &::before {
    position: absolute;
    inset: -40%;
    z-index: -1;
    background-color: white;
    transform-origin: left bottom;
    transform: scale(0);
    transition: transform 0.3s linear;
    content: ' ';
    border-radius: 1% 99% 30% 70% / 92% 44% 56% 8%;
  }
}
</style>
