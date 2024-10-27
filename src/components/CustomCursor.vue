<template>
  <div class="custom-cursor" ref="cursor">
    <span class="custom-cursor__text" ref="cursor-text">{{ textMain }}</span>
  </div>
</template>

<script setup>
import { useTemplateRef, onMounted } from 'vue'
import { gsap } from 'gsap'

defineProps(['textMain'])

const cursor = useTemplateRef('cursor')
const cursorText = useTemplateRef('cursor-text')

onMounted(() => {
  const sectionsHovered = gsap.utils.toArray('.section-hovered')

  gsap.set(cursor.value, { xPercent: -50, yPercent: -50, opacity: 0 })
  window.addEventListener('mousemove', e => {
    gsap.to(cursor.value, {
      duration: 0.15,
      x: e.clientX,
      y: e.clientY,
      cursor: 'none',
      autoAlpha: 1,
      scale: 1,
      overwrite: true,
    })
  })

  window.addEventListener('mouseout', () => {
    gsap.to(cursor.value, { autoAlpha: 0, scale: 0 })
  })

  sectionsHovered.forEach(section => {
    section.addEventListener('mousemove', () => {
      gsap.set(cursor.value, { width: '150px' })
      gsap.set(cursorText.value, { autoAlpha: 1, visibility: 'visible' })
    })

    section.addEventListener('mouseleave', () => {
      gsap.set(cursor.value, { width: '15px' })
      gsap.set(cursorText.value, { autoAlpha: 0, visibility: 'hidden' })
    })
  })
})
</script>

<style lang="scss" scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  aspect-ratio: 1;
  pointer-events: none;
  user-select: none;
  background-color: #1b5af0;
  border-radius: 50%;
  opacity: 0;
  overflow: hidden;
  transition: all 0.15s linear;

  &__text {
    color: white;
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: uppercase;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: all 0.15s linear;
    white-space: nowrap;
  }
}

@media screen and (max-width: 1024px) {
  .custom-cursor {
    display: none;
  }
}
</style>
