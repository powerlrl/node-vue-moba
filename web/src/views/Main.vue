<!--
 * @Author: your name
 * @Date: 2020-03-04 14:56:55
 * @LastEditTime: 2020-03-05 21:33:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\web\src\views\Main.vue
 -->
<template>
  <div>
    <div class="topbar py-2 px-3 d-flex ai-center bg-black">
      <img src="../assets/logo.png" alt="" height="30">
      <div class="px-3 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-xxs">团队成就更多</div>
      </div>
      <button class="btn bg-primary">立即下载</button>
    </div>
    <div class="bg-primary pt-3 pb-2">
      <div class="nav nav-inverse jc-around pb-1">
        <div class="nav-item active">
          <router-link class="nav-link" tag="div" to="/">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">赛事中心</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
.topbar{
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>


