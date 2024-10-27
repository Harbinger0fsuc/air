<template>
  <a v-if="btnType === 'link'" :href="pathTo" class="btn-main-outline">
    <svg
      v-if="icon"
      class="btn-main-outline__ico"
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5866 8.48427C17.7534 9.15793 17.7534 10.8421 16.5866 11.5157L3.51936 19.0601C2.35255 19.7338 0.894042 18.8917 0.894042 17.5444L0.894043 2.45563C0.894043 1.10831 2.35256 0.266245 3.51937 0.939903L16.5866 8.48427Z"
        style="fill-opacity: 1"
      />
    </svg>

    {{ text }}
  </a>
  <button v-else class="btn-main-outline btn-reset">
    <svg
      v-if="icon"
      class="btn-main-outline__ico"
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5866 8.48427C17.7534 9.15793 17.7534 10.8421 16.5866 11.5157L3.51936 19.0601C2.35255 19.7338 0.894042 18.8917 0.894042 17.5444L0.894043 2.45563C0.894043 1.10831 2.35256 0.266245 3.51937 0.939903L16.5866 8.48427Z"
        style="fill-opacity: 1"
      />
    </svg>

    {{ text }}
  </button>
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
  icon: {
    type: Boolean,
  },
})
</script>

<style lang="scss" scoped>
.btn-main-outline {
  $this: &;

  position: relative;
  isolation: isolate;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  min-width: 14rem;
  color: var(--color, white);
  line-height: 1.2;
  letter-spacing: 0.72px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  background-color: transparent;
  padding: 1.8rem 4rem;
  border-radius: 1rem;
  border: 0.1rem solid var(--color, white);
  cursor: pointer;
  transition:
    border-color 0.3s linear,
    color 0.3s linear;
  overflow: hidden;

  &:hover {
    color: var(--color-hover, var(--text-color-primary));
    border-color: white;

    &::before {
      transform: scale(1);
    }

    #{$this}__ico {
      fill: var(--color-hover, var(--text-color-primary));
    }
  }

  &::before {
    position: absolute;
    inset: -40%;
    z-index: -1;
    background-color: var(--color, white);
    transform-origin: left bottom;
    transform: scale(0);
    transition: transform 0.3s linear;
    content: ' ';
    border-radius: 1% 99% 30% 70% / 92% 44% 56% 8%;
  }

  &__ico {
    fill: white;
    transition: fill 0.3s linear;
  }
}
</style>
