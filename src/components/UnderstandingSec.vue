<template>
  <section class="understanding-sec section-white">
    <div class="container">
      <div class="understanding-sec__inner">
        <div class="understanding-sec__ico">
          <img
            :src="bullhorn"
            alt="Bullhorn image"
            width="200"
            height="200"
            loading="lazy"
          />
        </div>

        <h2 class="understanding-sec__title">
          Are your videos understandable without voice narration?
        </h2>

        <h3 class="understanding-sec__subtitle">Choose answear</h3>

        <div class="understanding-sec__arrow">
          <svg
            width="48"
            height="48"
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7547 20.9888C11.8923 21.1495 12.0966 21.2514 12.3247 21.2514L12.3264 21.2514C12.5188 21.2518 12.7113 21.1786 12.8581 21.0319L18.8583 15.0359C19.1513 14.7431 19.1514 14.2682 18.8586 13.9752C18.5659 13.6822 18.091 13.6821 17.798 13.9749L13.0747 18.6948L13.0747 4.5C13.0747 4.08579 12.7389 3.75 12.3247 3.75C11.9105 3.75 11.5747 4.08579 11.5747 4.5L11.5747 18.6883L6.85829 13.9749C6.5653 13.6821 6.09043 13.6822 5.79763 13.9752C5.50483 14.2682 5.50498 14.7431 5.79796 15.0359L11.7547 20.9888Z"
            />
          </svg>
        </div>
      </div>

      <UnderstandingList :cards="understandingCards" />
    </div>
  </section>
</template>

<script setup>
import UnderstandingList from './UnderstandingList.vue'
import { understandingCards } from '@/data'
import bullhorn from '@/assets/images/bullhorn.svg'
</script>

<style lang="scss" scoped>
.understanding-sec {
  padding: 7rem 0 20.7rem;

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 994px;
    margin: 0 auto 7.5rem;
  }

  &__ico {
    margin-bottom: 2.8rem;
  }

  &__title,
  &__subtitle {
    margin-top: 0;
    font-weight: 600;
    line-height: 1.07;
    text-align: center;
  }

  &__title {
    font-size: 7.4rem;
    margin-bottom: 2.5rem;
  }

  &__subtitle {
    font-size: 3.8rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
    padding-right: 33rem;
  }

  &__arrow {
    svg {
      fill: var(--text-color-accent, #000);
    }
  }
}

@media screen and (max-width: 767px) {
  .understanding-sec {
    padding-top: 8rem;
    padding-bottom: 8rem;

    &__inner,
    &__ico {
      margin-bottom: 4.2rem;
    }

    &__ico {
      width: 8.2rem;
      height: 8.2rem;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &__title {
      font-size: 3.8rem;
      margin-bottom: 5rem;
    }

    &__subtitle {
      padding-right: 0;
      font-size: 1.6rem;
      font-weight: 400;
    }
  }
}
</style>
