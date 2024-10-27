<template>
  <section class="steps-sec section-white">
    <div class="container">
      <div class="steps-sec__inner">
        <div class="steps-sec__content">
          <ul
            class="steps-sec__counter steps-sec-counter list-unstyled reset-indentation"
            ref="counter"
          >
            <li
              v-for="counter in counterData"
              class="steps-sec-counter__item"
              :key="counter.id"
            >
              <h3 v-if="counter.title" class="steps-sec-counter__title">
                {{ counter.title }}
              </h3>

              <div v-if="counter.content" class="steps-sec-counter__content">
                {{ counter.content }}
              </div>
            </li>
          </ul>
        </div>

        <div class="steps-sec__info steps-sec-info">
          <div class="steps-sec-info__items" ref="info-content">
            <div class="steps-sec-info__item">
              <div class="steps-sec-info__plus steps-sec-info-plus">
                <img :src="plus" alt="Plus" />
                <img
                  :src="ballet"
                  class="steps-sec-info-plus__img"
                  alt="Ballet"
                />
              </div>
            </div>

            <div class="steps-sec-info__item">
              <ul
                class="steps-sec-info__list steps-sec-info-list list-unstyled reset-indentation"
              >
                <li class="steps-sec-info-list__item">
                  <img :src="girl" alt="Girl" />
                  <div class="steps-sec-info-list__content">
                    <p>
                      Jak prodat svůj vůz <br />
                      Een praktische
                    </p>
                  </div>
                </li>
                <li class="steps-sec-info-list__item">
                  <img :src="girl" alt="Girl" />
                  <div class="steps-sec-info-list__content">
                    <p>
                      Jak prodat svůj vůz <br />
                      Een praktische
                    </p>
                  </div>
                </li>
                <li class="steps-sec-info-list__item">
                  <img :src="girl" alt="Girl" />
                  <div class="steps-sec-info-list__content">
                    <p>Jak prodat svůj vůz <br />> Een praktische</p>
                  </div>
                </li>
              </ul>
            </div>

            <div class="steps-sec-info__item">
              <div class="steps-sec-info__graph steps-sec-info-graph">
                <img
                  :src="graph"
                  class="steps-sec-info-graph__img"
                  alt="Graph"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="steps-sec__slider">
        <swiper
          :slidesPerView="'auto'"
          :spaceBetween="20"
          :scrollbar="{
            draggable: true,
          }"
          :modules="[Scrollbar]"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          style="
            --swiper-scrollbar-size: 10px;
            --swiper-scrollbar-border-radius: 0;
            --swiper-scrollbar-drag-bg-color: var(--bg-color-primary);
          "
        >
          <swiper-slide v-for="item in counterData" :key="item.id">
            <CardMain :item="item" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTemplateRef, onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { counterData } from '@/data'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
// import required modules
import { Scrollbar } from 'swiper/modules'
import CardMain from './CardMain.vue'
import plus from '@/assets/images/plus.svg'
import ballet from '@/assets/images/ballet.png'
import girl from '@/assets/images/girl.png'
import graph from '@/assets/images/graph.png'

gsap.registerPlugin(ScrollTrigger)

const counter = useTemplateRef('counter')
const infoContent = useTemplateRef('info-content')

onMounted(() => {
  const swiperScrollbar = document.querySelector('.swiper-scrollbar')
  const swiperScrollbarDrag = swiperScrollbar.querySelector(
    '.swiper-scrollbar-drag',
  )
  const swiperSlides = document.querySelectorAll('.swiper-slide')
  const swiperSlidesLength = swiperSlides.length

  const heightProgress = gsap.to(counter.value, {
    '--counter-border-height': '100%',
  })

  const counterItem = gsap.utils.toArray(
    '.steps-sec-counter__item:not(:first-child)',
  )

  const infoItems = gsap.utils.toArray(
    '.steps-sec-info__item:not(:first-child)',
  )

  const infoItemsAll = gsap.utils.toArray('.steps-sec-info__item')

  gsap.set(infoItems, { y: '100%', autoAlpha: 0 })

  ScrollTrigger.create({
    trigger: counter.value,
    start: '-30%',
    end: '45%',
    animation: heightProgress,
    scrub: 0.3,
  })

  ScrollTrigger.create({
    trigger: counter.value,
    start: '-15%',
    end: 'bottom center',
    pin: infoContent.value,
  })

  counterItem.forEach((item, index) => {
    ScrollTrigger.create({
      trigger: item,
      start: 'bottom bottom',
      end: 'bottom bottom',
      animation: gsap.to(infoItems[index], {
        autoAlpha: 1,
        y: 0,
      }),
      scrub: 1,
      toggleActions: 'play none none reset',
      onEnter: function () {
        gsap.set(infoItemsAll, { autoAlpha: 0, y: '100%' })
        gsap.set(infoItems[index], { autoAlpha: 1, y: 0 })
      },
      onLeave: function () {
        gsap.set(infoItemsAll, { autoAlpha: 0, y: '100%' })
      },
      onEnterBack: function () {
        gsap.set(infoItemsAll[index], { autoAlpha: 1, y: 0 })
      },
    })
  })

  if (swiperScrollbar) {
    swiperScrollbar.style.width = '201px'
    swiperScrollbar.style.left = '50%'
    swiperScrollbar.style.transform = 'translateX(-50%)'

    swiperScrollbarDrag.style.width = `100% / ${swiperSlidesLength}`
  }
})
</script>

<style lang="scss" scoped>
.steps-sec {
  padding: 12rem 0 26.1rem;

  &__inner {
    display: flex;
    align-items: flex-start;
    gap: 10rem;
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
  }

  &__content {
    flex: 1 1 60%;
  }

  &__counter {
    position: relative;
    counter-reset: stepsCounter;
    padding-left: 6.5rem;

    &::before,
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 0.8rem;
      content: ' ';
    }

    &::before {
      height: 100%;
      background-color: #f4f3f3;
    }

    &::after {
      height: var(--counter-border-height);
      background-color: var(--bg-color-primary);
      transition: height 0.3s linear;
    }
  }

  &-counter__item {
    padding-bottom: 8.4rem;

    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      display: grid;
      place-content: center;
      counter-increment: stepsCounter;
      font-size: 1.6rem;
      width: 5.2rem;
      height: 5.2rem;
      border-radius: 100%;
      border: 0.2rem solid #181818;
      content: counter(stepsCounter);
      margin-bottom: 3.4rem;
    }
  }

  &-counter__title {
    margin-top: 0;
    margin-bottom: 3.4rem;
    font-size: 5.6rem;
    font-weight: 600;
    line-height: 1.04;
    letter-spacing: -0.392px;
  }

  &-counter__content {
    width: 100%;
    max-width: 433px;

    & > * {
      margin-top: 0;
      margin-bottom: 1.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__info {
    flex: 1 1 40%;
  }

  &-info__items {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    aspect-ratio: 1 / 1.3;
    border-radius: 25rem;
    background-color: #000;
    overflow: hidden;
    color: white;
  }

  &-info__item {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25rem;
    background-color: #000;
  }

  &-info__plus {
    position: relative;
    display: grid;
    place-content: center;
    width: 26.3rem;
    aspect-ratio: 1;
    border: 0.4rem dashed white;
    border-radius: 100%;
  }

  &-info-plus__img {
    position: absolute;
    top: -35%;
    right: -16%;
    border: 0.3rem solid white;
    border-radius: 100%;
    overflow: hidden;
  }

  &-info-list,
  &-info-list__item {
    display: flex;
  }

  &-info-list {
    flex-direction: column;
    gap: 4rem;
    margin-left: 10rem;
    flex-shrink: 0;
  }

  &-info-list__item {
    gap: 2rem;
    padding: 2.5rem;
    border: 0.2rem solid white;
    border-radius: 2.6rem;

    img {
      border-radius: 2rem;
      overflow: hidden;
    }
  }

  &-info-graph__img {
    object-fit: cover;
  }

  &__slider {
    display: none;

    .swiper {
      width: 100%;
      height: 100%;
      padding: 0 1.5rem 6rem;
    }

    .swiper-slide {
      width: 316px;
      height: auto;

      & > * {
        height: 100%;
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .steps-sec {
    padding-top: 8rem;
    padding-bottom: 22.2rem;

    .container {
      padding: 0;
    }

    &__inner {
      display: none;
    }

    &__slider {
      display: block;
    }
  }
}
</style>
