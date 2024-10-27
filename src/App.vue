<template>
  <!-- Header -->
  <HeaderMain />

  <main class="main">
    <!-- Intro section -->
    <IntroSec />

    <!-- Understanding section -->
    <UnderstandingSec />

    <!-- Results section -->
    <ResultsSec />

    <!-- Steps section -->
    <StepsSec />
  </main>

  <CustomCursor textMain="get forecase" />
</template>

<script setup>
import HeaderMain from './components/HeaderMain.vue'
import IntroSec from './components/IntroSec.vue'
import UnderstandingSec from './components/UnderstandingSec.vue'
import ResultsSec from './components/ResultsSec.vue'
import StepsSec from './components/StepsSec.vue'
import CustomCursor from './components/CustomCursor.vue'
</script>

<style scoped lang="scss"></style>
