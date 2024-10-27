<template>
  <a :href="pathTo" class="btn-circle" ref="btn">
    <span class="btn-circle__text"> {{ textMain }}</span>
  </a>
</template>

<script setup>
import { useTemplateRef, onMounted } from 'vue'
import { gsap, Power1 } from 'gsap'

defineProps(['pathTo', 'textMain'])

const btn = useTemplateRef('btn')

onMounted(() => {
  btn.value.addEventListener('mousemove', function (e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const yAxis = e.clientY - rect.top
    const xAxis = e.clientX - rect.left

    gsap.to(this, {
      duration: 1.5,
      x: (yAxis / 1.5) * -0.5,
      y: (xAxis / 1.5) * -0.5,
      ease: Power1.easeOut,
      transformOrigin: 'center center',
    })
  })

  btn.value.addEventListener('mouseleave', function () {
    gsap.to(this, {
      duration: 1.5,
      x: 0,
      y: 0,
      ease: Power1.easeOut,
    })
  })
})
</script>

<style lang="scss" scoped>
.btn-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 145px;
  min-height: 145px;
  border-radius: 100%;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  text-align: center;
  letter-spacing: 0.48px;
  text-transform: uppercase;
  background-color: var(--bg-color-primary);
  padding: 1.5rem;
}
</style>
