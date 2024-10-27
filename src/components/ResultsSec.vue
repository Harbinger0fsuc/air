<template>
  <section class="results-sec section-hovered">
    <div class="container">
      <div class="results-sec__inner">
        <h2 class="results-sec__title">
          Still Not Sure What Results Can You Expect?
        </h2>

        <div class="results-sec__content">
          <p>
            Find out how many views AI Metadata Translation can bring to your
            channel, and how much time it saves!
          </p>
        </div>

        <div class="results-sec__interaction">
          <!-- Button main -->
          <BtnMain btnType="link" text="read more" pathTo="#readMore" />
        </div>

        <!-- Btn Circle Component -->
        <!-- <BtnCircle pathTo="#!" textMain="Get Forecast" /> -->
      </div>
    </div>

    <div class="results-sec__bg results-sec-bg" aria-hidden="true">
      <img :src="bg" class="results-sec-bg__itself" />
      <img
        :src="bgMobile"
        class="results-sec-bg__itself results-sec-bg__itself--mobile"
      />
    </div>

    <div class="results-sec__decorations" aria-hidden="true">
      <img
        :src="triangle"
        class="results-sec__decoration"
        style="--top: 18.1rem; --left: 9rem"
      />
      <img
        :src="cross"
        class="results-sec__decoration"
        style="--top: 72rem; --left: 12rem"
      />
      <img
        :src="circle"
        class="results-sec__decoration"
        style="--top: 73rem; --left: 84%"
      />
    </div>
  </section>
</template>

<script setup>
import BtnMain from './BtnMain.vue'
// import BtnCircle from './BtnCircle.vue'
import bg from '@/assets/images/results-bg.png'
import bgMobile from '@/assets/images/results-bg-mobile.png'
import triangle from '@/assets/images/decor-triangle.png'
import cross from '@/assets/images/decor-cross.png'
import circle from '@/assets/images/decor-circle.svg'
</script>

<style lang="scss" scoped>
.results-sec {
  position: relative;
  isolation: isolate;
  padding-top: 14.1rem;
  padding-bottom: 29.3rem;
  overflow: hidden;

  &__inner,
  &__content {
    width: 100%;
    margin: 0 auto;
  }

  &__inner {
    position: relative;
    color: white;
    max-width: 924px;
    text-align: center;
  }

  &__title {
    color: inherit;
    font-size: 11.1rem;
    line-height: 1.06;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 3.5rem;
  }

  &__content {
    max-width: 584px;
    font-size: 2.2rem;

    & > * {
      margin-top: 0;
      margin-bottom: 1.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__interaction {
    display: none;
  }

  .btn-circle {
    position: absolute;
    bottom: 3%;
    right: -20%;
  }

  &__bg,
  &__decorations {
    position: absolute;
    inset: 0;
  }

  &__bg {
    z-index: -2;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-bg__itself {
    &--mobile {
      display: none;
    }
  }

  &__decorations {
    z-index: -1;
  }

  &__decoration {
    position: absolute;
    top: var(--top);
    left: var(--left);
  }
}

@media screen and (max-width: 1439px) {
  .results-sec {
    .btn-circle {
      right: 0;
    }
  }
}

@media screen and (max-width: 1100px) {
  .results-sec {
    &__title {
      font-size: 9rem;
    }

    &__content {
      max-width: 400px;
    }

    &__decoration {
      &:nth-child(1) {
        top: 5rem;
      }

      &:nth-child(2) {
        top: initial;
        bottom: 10rem;
      }

      &:nth-child(3) {
        top: initial;
        right: 5rem;
        bottom: 12rem;
        left: initial;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .results-sec {
    padding-top: 6.2rem;
    padding-bottom: 20.2rem;

    &__inner {
      max-width: 287px;
    }

    &__title,
    &__content {
      max-width: 100%;
    }

    &__title {
      font-size: 5.4rem;
      margin-bottom: 1.5rem;
    }

    &__content {
      font-size: 1.4rem;
      margin-bottom: 3.6rem;
    }

    &__interaction {
      display: flex;
    }

    .btn-main {
      width: 100%;
    }

    .btn-circle {
      display: none;
    }

    &__bg {
      img {
        object-fit: fill;
      }
    }

    &-bg__itself {
      display: none;

      &--mobile {
        display: block;
      }
    }

    &__decoration {
      &:nth-child(1),
      &:nth-child(3) {
        display: none;
      }

      &:nth-child(2) {
        width: 5.2rem;
        height: 5.2rem;
        bottom: 40%;
        left: -1rem;
      }
    }
  }
}
</style>
