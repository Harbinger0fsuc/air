<template>
  <article class="card-main">
    <span v-if="item.number" class="card-main__number">{{ item.number }}</span>
    <h3 v-if="item.title" class="card-main__title">{{ item.title }}</h3>
    <div v-if="item.content" class="card-main__content">
      <p>{{ item.content }}</p>
    </div>
  </article>
</template>

<script setup>
defineProps(['item'])
</script>

<style lang="scss" scoped>
.card-main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 6rem 3rem 6.8rem;
  border-radius: 3rem;
  border: 0.2rem solid black;

  &__number {
    display: grid;
    place-content: center;
    width: 5.3rem;
    aspect-ratio: 1;
    border-radius: 100%;
    border: 0.2rem solid #181818;
    margin-bottom: 4.2rem;
  }

  &__title {
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 1.04;
    letter-spacing: -0.154px;
    margin-top: 0;
    margin-bottom: 1.6rem;
  }

  &__content {
    & > * {
      margin-top: 0;
      margin-bottom: 1.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
