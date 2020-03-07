<!--
 * @Author: your name
 * @Date: 2020-03-06 17:44:02
 * @LastEditTime: 2020-03-06 21:35:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\web\src\views\Article.vue
 -->
<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <div class="iconfont icon-back text-blue icon-blue"></div>
      <strong class="flex-1 pl-2 text-blue">
        {{model.title}}
      </strong>
      <div class="text-grey fs-xs">
        2020-3-6
      </div>
    </div>
  <div v-html="model.body" class="px-3 body"></div>
  <div class="px-3 border-top py-3">
    <div class="d-flex ai-center">
      <i class="iconfont icon-menu"></i>
      <strong class="text-blue fs-lg ml-1">相关资讯</strong>
    </div>
    <div class="pt-2 fs-lg">
      <router-link
      class="py-2"
      tag="div"
      v-for="item in model.related"
      :key="item._id"
      :to="`/articles/${item._id}`">
        {{item.title}}
      </router-link>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  created () {
    this.fetch()
  },
  props: {
    id: { required: true }
  },
  data(){
    return {
      model: null,
    }
  },
  watch:{
    id: 'fetch'
    // id(){
    //   this.fetch()
    // }
  },
  methods: {
    async fetch(){
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  }
}
</script>
<style lang="scss">
.page-article{
  .body{
    .icon-blue{
      font-size: 1.692308rem;
    }
    img{
      max-width: 100%;
      height: auto;
    }
    iframe{
      max-width: 100%;
      height: auto;
    }
    
  }
}
</style>