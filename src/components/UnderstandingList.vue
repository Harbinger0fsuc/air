<template>
  <ul class="understanding-list list-unstyled reset-indentation">
    <li v-for="card in cards" class="understanding-list__item" :key="card.id">
      <img
        :src="card.image"
        class="understanding-list__decor"
        alt="Decoration image"
        aria-hidden="true"
      />
      <div class="understanding-list__wrapper">
        <h4 v-if="card.title" class="understanding-list__title">
          {{ card.title }}
        </h4>

        <div class="understanding-list__content understanding-list-content">
          <div class="understanding-list-content__inner">
            <div v-if="card.content" class="understanding-list-content__text">
              <p>{{ card.content }}</p>
            </div>

            <!-- Button main -->
            <BtnMain btnType="link" text="Sign Up" pathTo="#signup" />
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import BtnMain from './BtnMain.vue'

defineProps(['cards'])
</script>

<style lang="scss" scoped>
.understanding-list {
  $this: &;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8.6rem;

  &__item {
    position: relative;
    isolation: isolate;
    padding-top: 16.3rem;

    &:hover {
      #{$this}__wrapper {
        &::before {
          background-color: var(--bg-color-secondary);
        }
      }

      #{$this}-content {
        grid-template-rows: 1fr;
      }
    }

    &:nth-child(3) {
      #{$this}__wrapper {
        &::before {
          top: 2rem;
        }
      }
    }
  }

  &__decor {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    z-index: -1;
  }

  &__wrapper {
    position: relative;
    z-index: 1;
    text-align: center;
    padding-right: 3.2rem;
    padding-left: 3.2rem;
    padding-bottom: 8.6rem;

    &::before {
      position: absolute;
      inset: 0;
      z-index: -1;
      transition: background-color 0.3s linear;
      content: ' ';
    }
  }

  &__title,
  &-content__text {
    color: white;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 4.5rem;
    font-size: 3.8rem;
    font-weight: 500;
    line-height: 1.1;
  }

  &-content,
  &-content__inner {
    overflow: hidden;
  }

  &-content {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s linear;
  }

  &-content__text {
    margin-bottom: 4rem;

    & > * {
      margin-top: 0;
      margin-bottom: 1.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .btn-main {
    width: 100%;
  }
}

@media screen and (max-width: 1300px) {
  .understanding-list {
    &__item {
      padding-top: 44%;
    }
  }
}

@media screen and (max-width: 1100px) {
  .understanding-list {
    &__item {
      padding-top: 43%;
    }
  }
}

@media screen and (max-width: 1023px) {
  .understanding-list {
    grid-template-columns: repeat(2, 1fr);

    &__item {
      padding-top: 45%;
    }
  }
}

@media screen and (max-width: 850px) {
  .understanding-list {
    &__item {
      padding-top: 43.9%;
    }
  }
}

@media screen and (max-width: 685px) {
  .understanding-list {
    grid-template-columns: repeat(1, 1fr);

    &__item {
      padding-top: 50%;
    }

    &__decor {
      height: 100%;
      object-fit: fill;
    }

    &__wrapper {
      min-height: 30.4rem;
    }
  }
}

@media screen and (max-width: 480px) {
  .understanding-list {
    &__item {
      padding-top: 44.5%;
    }

    &__decor {
      height: auto;
      object-fit: cover;
    }

    &__wrapper {
      min-height: initial;
    }
  }
}
</style>
