<!--
 * @Author: your name
 * @Date: 2020-03-05 19:49:52
 * @LastEditTime: 2020-03-06 19:39:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\web\src\components\ListCard.vue
 -->
<template>
  <m-card :icon="icon" :title="title">
    <div class="card-body pt-3">
      <div class="nav jc-between">
        <div 
        class="nav-item" 
        :class="{active: active===i}" 
        v-for="(category,i) in categories"
        :key="i"
        @click="active=$refs.list.swiper.slideTo(i)">
          <div class="nav-link">{{category.name}}</div>
        </div>

      </div>
      <div class="pt-3">
        <swiper ref="list"
        :options="{autoHeight:true}"
        @slide-change="()=>active = $refs.list.swiper.realIndex">
          <swiper-slide 
          v-for="(category,i) in categories" 
          :key="i"
          >
            <slot name="items" :category="category"></slot>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </m-card>
</template>

<script>
export default {
  props: {
    icon: {type: String,required: true},
    title: {type: String,required: true},
    categories: {type: Array,required: true}
  },
  data(){
    return {
      active: 0
    }
  }
}
</script>
