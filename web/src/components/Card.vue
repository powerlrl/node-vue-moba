<!--
 * @Author: your name
 * @Date: 2020-03-04 22:41:59
 * @LastEditTime: 2020-03-07 17:49:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\web\src\components\Card.vue
 -->
<template>
  <div class="card mt-3 bg-white p-3">
    <div class="card-header d-flex ai-center"
    :class="{'border-bottom': !plain,'pb-3': !plain}">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2"><strong>{{title}}</strong></div>
      <i class="iconfont icon-menu1" v-if="!plain"></i>
    </div>
    <div class="card-body pt-3">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {type: String,required: true},
    icon: {type: String,required: true},
    plain: {type: Boolean }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/_variables.scss';
.card{
  border-bottom: 1px solid $border-color;
}
</style>


