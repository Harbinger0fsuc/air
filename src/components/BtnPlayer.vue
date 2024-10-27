<template>
  <a href="#!" class="btn-player">
    <span class="btn-player__text">{{ textMain }}</span>

    <span class="btn-player__itself" aria-hidden="true">
      <img :src="triangle" with="21" height="21" alt="" />
    </span>
  </a>
</template>

<script setup>
import triangle from '@/assets/images/triangle.svg'

defineProps(['textMain'])
</script>

<style lang="scss" scoped>
%gradient {
  position: absolute;
  inset: 0;
  background: var(--gradient), border-box;
  -webkit-mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  content: ' ';
}

.btn-player {
  $this: &;

  --gradient: linear-gradient(45deg, #fff 0%, #8bff78 62%, #fd86ff 82%);

  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 1.2rem;
  color: #ffe1fb;
  font-size: 2.1rem;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.837px;
  text-transform: uppercase;
  padding: 1.6rem 2rem;
  border-radius: 1rem;
  background: rgba(14, 14, 14, 0.5);
  backdrop-filter: blur(0.41rem);
  transition: transform 0.3s linear;

  &:hover {
    transform: scale(1.05);

    &::before {
      opacity: 0.6;
    }
  }

  &::before {
    @extend %gradient;

    border-radius: 1rem;
    border: 0.2rem solid transparent;
    transition: opacity 0.3s linear;
  }

  &__itself {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0; // just in case styling
    width: 5.5rem;
    aspect-ratio: 1;
    border-radius: 100%;

    &::before {
      @extend %gradient;

      border-radius: 100%;
      border: 0.2rem solid transparent;
    }

    img {
      margin-right: -0.3rem;
    }
  }
}
</style>
