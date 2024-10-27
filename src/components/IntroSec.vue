<template>
  <section class="intro-sec">
    <div class="intro-sec__inner">
      <div class="container">
        <div class="intro-sec__wrapper">
          <div class="intro-sec__content">
            <h1 class="intro-sec__title intro-sec-title">
              AI YouTube <br />
              <BtnPlayer textMain="what is this ?" /> Metadata <br />
              Translation
              <p class="intro-sec-title__text">
                Take Your YouTube Content Global by Localizing Your YouTube
                Metadata.
              </p>
            </h1>

            <div class="intro-sec__buttons">
              <!-- Button main -->
              <BtnMain btnType="link" text="try for free" pathTo="#try" />

              <!-- Btn Main Outline -->
              <BtnMainOutline
                pathTo="#!"
                text="what is this ?"
                btnType="link"
                :icon="true"
              />
            </div>
          </div>
          <div class="intro-sec__interaction">
            <!-- Btn Circle Component -->
            <BtnCircle pathTo="#!" textMain="TRY FOR free" />
          </div>
        </div>
      </div>

      <div class="intro-sec__lines" aria-hidden="true">
        <img :src="lines" />
      </div>
    </div>

    <div class="intro-sec__decor intro-sec-decor" aria-hidden="true">
      <img :src="introBg" class="intro-sec-decor__bg" />
      <img
        :src="introBgMobile"
        class="intro-sec-decor__bg intro-sec-decor__bg--mobile"
      />
    </div>
  </section>
</template>

<script setup>
import introBg from '@/assets/images/intro-bg.png'
import introBgMobile from '@/assets/images/intro-bg-mobile.png'
import lines from '@/assets/images/intro-lines.png'
import BtnPlayer from './BtnPlayer.vue'
import BtnCircle from './BtnCircle.vue'
import BtnMain from './BtnMain.vue'
import BtnMainOutline from './BtnMainOutline.vue'
</script>

<style lang="scss" scoped>
.intro-sec {
  --decor-height: 14rem;

  position: relative;
  isolation: isolate;
  padding-bottom: 14rem;
  overflow: hidden;

  &__inner {
    position: relative;
    isolation: isolate;
    min-height: calc(100vh - var(--decor-height));
    padding-top: 21.8rem;
    padding-bottom: 14rem;
    background-color: var(--bg-color-secondary);

    .container {
      position: relative;
      z-index: 20;
    }
  }

  &__wrapper {
    display: flex;
    gap: 8.8rem;
  }

  &__title,
  &-title__text {
    margin-top: 0;
    margin-bottom: 0;
  }

  &__title {
    color: white;
    font-size: 14rem;
    text-shadow: 0px 0px 83.623px color(display-p3 0.6706 0.302 0.9882 / 0.48);
    font-weight: 600;
    line-height: 1.2;
  }

  .btn-player {
    vertical-align: middle;
  }

  &-title__text {
    display: inline-block;
    font-size: 1.7rem;
    font-weight: 400;
    line-height: 1.66;
    width: 100%;
    max-width: 236px;
    vertical-align: middle;
  }

  &__buttons {
    display: none;
    flex-direction: column;
    gap: 2.1rem;
  }

  .btn-main-outline {
    padding-top: 2.4rem;
    padding-bottom: 2.4rem;
  }

  &__interaction {
    align-self: flex-end;
    margin-bottom: -5rem;
  }

  &__lines,
  &__decor {
    position: absolute;
    pointer-events: none;
  }

  &__lines {
    top: 2.4rem;
    left: 0;
    z-index: 10;
    user-select: none;
  }

  &__decor {
    bottom: 0;
    width: 100%;
    height: var(--decor-height);

    img {
      width: 100%;
      height: 100%;
    }
  }

  &-decor__bg {
    &--mobile {
      display: none;
    }
  }
}

@media screen and (max-width: 1023px) {
  .intro-sec {
    &__title {
      margin-bottom: 5rem;
    }

    &__buttons {
      display: flex;
      width: 100%;
      max-width: 276px;
      margin: 0 auto;
    }

    &__interaction {
      display: none;
    }
  }
}

@media screen and (max-width: 767px) {
  .intro-sec {
    --decor-height: 8rem;

    padding-bottom: 7.5rem;

    &__wrapper {
      justify-content: center;
    }

    &__title,
    &-title__text {
      text-align: center;
    }

    &__title {
      font-size: 6.4rem;
    }

    .btn-player {
      display: none;
    }

    &-title__text {
      display: block;
      width: 100%;
      max-width: 291px;
      margin: 0 auto;
    }

    &__lines {
      top: -8.6rem;
      left: -75%;

      img {
        max-width: inherit;
        width: auto;
        height: auto;
      }
    }

    &-decor__bg {
      display: none;

      &--mobile {
        display: block;
      }
    }
  }
}
</style>
