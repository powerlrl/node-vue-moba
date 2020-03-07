<!--
 * @Author: your name
 * @Date: 2020-03-04 14:50:03
 * @LastEditTime: 2020-03-07 11:18:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\web\src\views\Home.vue
 -->
<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/image/1.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/image/2.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/image/3.jpeg" alt="">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>
    <!-- end swiper -->
    <div class="nav-icons bg-white mt-3 pt-3 text-dark-1 text-center">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-2" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-allow mr-2"></i>
        收起
      </div>
    </div>
    <!-- end of nav icons -->

    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link
        tag="div"
        :to="`/articles/${item._id}`"
        class="py-2 fs-lg d-flex" 
        v-for="(item,i) in category.newsList" 
        :key="i">
          <span class="text-info">[{{item.categoryName}}]</span>  
          <span class="px-2">|</span>       
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{item.title}}</span>
          <span class="text-grey-1 fs-sm">{{item.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>

    <m-list-card icon="card-hero" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div 
        class="d-flex flex-wrap" style="margin: 0 -0.5rem;">
          <router-link 
          class="p-2 text-center"
          style="width: 20%;"
          tag="div"
          :to="`/heroes/${hero._id}`"
           v-for="(hero,i) in category.heroList" :key="i">
            <img :src="hero.avatar" class="w-100" alt="">
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>
    <m-card icon="menu" title="英雄列表"></m-card>

    <p>ssss</p>
    <p>ssss</p>
    <p>ssss</p>
    <p>ssss</p>
    <p>ssss</p>
    <p>ssss</p>
  </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
    filters: {
      date(val){
        return dayjs(val).format('MM/DD')
      }
    },
    created() {
      this.fetchNewsCats()
      this.fetchHeroCats()
    },
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: ".pagination-home"
                }
            },
            newsCats: [],
            heroCats: []
        };
    },
    methods: {
        async fetchNewsCats() {
          const res = await this.$http.get('/news/list')
          this.newsCats = res.data
        },
        async fetchHeroCats() {
          const res = await this.$http.get('/heroes/list')
          this.heroCats = res.data
        }
    }
};
</script>
<style lang="scss">
@import "../assets/scss/variables";
.pagination-home {
    .swiper-pagination-bullet {
        opacity: 1;
        border-radius: 0.153846rem;
        background: map-get($colors, "white");
        &.swiper-pagination-bullet-active {
            background: map-get($colors, "info");
        }
    }
}
.nav-icons {
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    .nav-item {
        width: 25%;
        border-right: 1px solid $border-color;
        &:nth-child(4n) {
            border-right: none;
        }
    }
}
</style>

