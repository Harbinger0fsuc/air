<template>
  <nav class="nav-main">
    <ul class="nav-main__list list-unstyled reset-indentation">
      <li v-for="navItem in nav" class="nav-main__item" :key="navItem.id">
        <a :href="navItem.path" class="nav-main__link">{{ navItem.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { nav } from '@/data'
</script>

<style lang="scss" scoped>
.nav-main {
  --color: white;

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 2.6rem;
  }

  &__link {
    font-size: 1.2rem;
    line-height: 1.06;
    color: var(--color, white);
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s linear;
  }
}

@media screen and (max-width: 1050px) {
  .nav-main {
    --link-border-color: white;

    &__list {
      flex-wrap: nowrap;
      gap: 0.5rem;
    }

    &__link {
      white-space: nowrap;
      padding: 1rem 1.2rem;
      border-radius: 5rem;
      border: 0.1rem solid var(--link-border-color);
    }
  }
}
</style>
