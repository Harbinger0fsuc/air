<template>
  <header class="header-main" ref="header">
    <div class="container">
      <div class="header-main__inner">
        <!-- Logo -->
        <LogoMain />

        <div class="header-main__wrapper">
          <!-- Navigation -->
          <NavMain />

          <div class="header-main__interaction">
            <a href="#!" class="header-main__link">Login</a>

            <!-- Button main -->
            <BtnMainOutline btnType="link" text="Sign Up" pathTo="#signup" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useTemplateRef, onMounted } from 'vue'
import LogoMain from './LogoMain.vue'
import NavMain from './NavMain.vue'
import BtnMainOutline from './BtnMainOutline.vue'

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const header = useTemplateRef('header')

const invertHeader = el => {
  const sections = document.querySelectorAll('.section-white')

  if (sections.length > 0) {
    ;[...sections].forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top',
        end: 'bottom',
        onEnter: () => el.classList.add('is-reversed'),
        onLeave: () => el.classList.remove('is-reversed'),
        onEnterBack: () => el.classList.add('is-reversed'),
        onLeaveBack: () => el.classList.remove('is-reversed'),
      })
    })
  }
}

onMounted(() => {
  invertHeader(header.value)
})
</script>

<style lang="scss" scoped>
.header-main {
  $this: &;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--bg-color-secondary);
  border-bottom: 0.1rem solid #4e4e4e;
  padding: 2.2rem 0;
  z-index: 30;
  transition: all 0.3s linear;

  &__inner {
    display: flex;
    align-items: center;
  }

  .logo-main {
    margin-right: 6rem;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .nav-main {
    margin-right: 9.6rem;
  }

  &__interaction {
    display: flex;
    align-items: center;
    gap: 2.2rem;
    white-space: nowrap;
  }

  &__link {
    font-size: 1.6rem;
    font-weight: 700;
    color: white;
    letter-spacing: 0.64px;
    text-transform: uppercase;
    text-decoration: none;
  }

  // Modifiers for the component
  &.is-reversed {
    background-color: white;

    .logo-main,
    #{$this}__link {
      color: var(--text-color-primary);
    }

    .logo-main {
      --fill: var(--text-color-primary);
    }

    .nav-main,
    .btn-main-outline {
      --color: var(--text-color-primary);
    }

    .btn-main-outline {
      --color-hover: white;
    }
  }
}

@media screen and (max-width: 1050px) {
  .header-main {
    $this: &;

    padding-bottom: 1.2rem;
    border-bottom: none;

    .container {
      padding: 0;
    }

    &__inner {
      padding-left: 2rem;
    }

    .logo-main {
      margin-right: 2rem;
    }

    &__wrapper {
      max-width: 660px;
      overflow-x: auto;
      padding-right: 2rem;

      &::-webkit-scrollbar {
        opacity: 0;
      }
    }

    .nav-main {
      white-space: nowrap;
      margin-right: 3rem;
    }

    .btn-main,
    .btn-main-outline {
      padding: 1.5rem 2rem;
    }

    // Modifiers
    &.is-reversed {
      .nav-main {
        --link-border-color: currentColor;
      }
    }
  }
}
</style>
