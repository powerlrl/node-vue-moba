<!--
 * @Author: your name
 * @Date: 2020-03-07 10:33:08
 * @LastEditTime: 2020-03-07 17:41:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\web\src\views\Hero.vue
 -->
<template>
  <div class="page-hero" v-if="model">
    <div class="topbar py-2 px-3 d-flex ai-center bg-black text-white">
      <img src="../assets/logo.png" alt="" height="30">
      <div class="px-3 flex-1">
        <span class="text-white">王者荣耀</span>
        <span class="ml-2">攻略站</span>
      </div>
      <router-link to="/" tag="div" class="fs-xs">更多英雄 &gt;</router-link>
    </div>
    <div class="top" :style="{'background-image': `url(${model.banner})`}">
      <div class="info text-white p-3 h-100 d-flex flex-column jc-end">
        <div class="fs-sm">{{model.title}}</div>
        <h2 class="my-2">{{model.name}}</h2>
        <div class="fs-sm">{{model.categories.map(v=>v.name).join('/')}}</div>
        <div class="d-flex jc-between pt-2">
          <div class="scores d-flex ai-center" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary">{{model.scores.difficult}}</span>
            <span>技能</span>
            <span class="badge bg-blue-1">{{model.scores.skills}}</span>
            <span>攻击</span>
            <span class="badge bg-danger">{{model.scores.attack}}</span>
            <span>生存</span>
            <span class="badge bg-dark">{{model.scores.survive}}</span>
          </div>
          <router-link to="/" tag="span" class="text-grey fs-sm">皮肤：2  &gt;</router-link>
        </div>
      </div>
      
    </div>
    <!-- end of top -->


    <div>
      <div class="px-3 bg-white">
        <div class="nav jc-around border-bottom pt-3 pb-2">
          <div class="nav-item active">英雄初识</div>
          <div class="nav-item">进阶攻略</div>
        </div>
      </div>
      <swiper>
        <swiper-slide>
          <div>
            <div class="p-3 bg-white border-bottom">
              <div class="d-flex">
                <router-link
                to="/"
                class="btn flex-1 btn-lg"
                tag="button">
                  <i class="iconfont icon-menu"></i>
                  英雄介绍视频
                </router-link>
                <router-link
                to="/"
                class="btn flex-1 ml-2 btn-lg"
                tag="button">
                  <i class="iconfont icon-menu"></i>
                  一图识英雄
                </router-link>
              </div>
              <!-- skills -->
              <div class="skills mt-4">
                <div class="d-flex jc-around">
                  <img 
                  @click="currentSkillIndex = i"
                  class="icon"
                  :class="{active: currentSkillIndex === i}"
                  :src="item.icon"
                  v-for="(item,i) in model.skills"
                  :key="i"
                  width="60"
                  height="60"
                  alt="" />
                </div>
                <div v-if="currentSkill">
                  <div class="d-flex pb-3 pt-4">
                    <h3 class="m-0">{{currentSkill.name}}</h3>
                    <span class="text-grey-1 ml-4">
                      (冷却值：{{currentSkill.delay}}
                      消耗：{{currentSkill.cost}})
                    </span>
                  </div>
                  <p>{{currentSkill.description}}</p>
                  <div class="border-bottom"></div>
                  <div class="text-grey mt-2">小提示：{{currentSkill.tips}}</div>
                </div>
              </div>
            </div>
            <m-card plain title="出装推荐" icon="menu" class="hero-items">
              <div class="fs-xl">顺风出装</div>
              <div class="d-flex jc-around text-center mt-3">
                <div v-for="item in model.items1"
                :key="item.name">
                  <img :src="item.icon" class="icon" alt="">
                  <div class="fs-xs">{{item.name}}</div>
                </div>
              </div>
              <div class="border-bottom mt-3"></div>
              <div class="fs-xl mt-3">逆风出装</div>
              <div class="d-flex jc-around text-center mt-3">
                <div v-for="item in model.items2"
                :key="item.name">
                  <img :src="item.icon" class="icon" alt="">
                  <div class="fs-xs">{{item.name}}</div>
                </div>
              </div>
            </m-card>

            <m-card plain title="使用技巧" icon="menu">
              <p class="mt-0">{{model.usageTips}}</p>
            </m-card>
            
            <m-card plain title="对抗技巧" icon="menu">
              <p class="mt-0">{{model.battleTips}}</p>
            </m-card>

            <m-card plain title="团战思路" icon="menu">
              <p class="mt-0">{{model.teamTips}}</p>
            </m-card>

            <m-card plain title="英雄关系" icon="menu">
              <div class="fs-xl">最佳搭档</div>
              <div 
              v-for="item in model.partners" 
              :key="item.name"
              class="d-flex pt-3">
                <img :src="item.hero.avatar" height="50" alt="">
                <div class="flex-1 ml-3 m-0">{{item.description}}</div>
              </div>
              <div class="border-bottom mt-3"></div>
            </m-card>
            
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  created () {
    this.fetch()
  },
  props: {
    id: {required: true}
  },
  data(){
    return {
      model: null,
      currentSkillIndex: 0,
    }
  },
  computed: {
    currentSkill(){
      return this.model.skills[this.currentSkillIndex] 
    }
  },
  methods: {
    async fetch(){
      const res = await this.$http.get(`heroes/${this.id}`)
      this.model = res.data
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/_variables.scss';
.page-hero{
  .top{
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
    
  }
  .info{
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1));
  }
  .badge{
    width: 1rem;
    height: 1rem;
    line-height: 0.9rem;
    margin: 0 0.25rem;
    font-size: 0.65rem;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,.2);
  }
  .skills{
    img.icon{
      border: 2px solid map-get($colors, 'white');
       &.active{
        border: 2px solid map-get($colors, 'primary');
      }
      border-radius: 45%;
    }
  }
  .hero-items{
    img.icon{
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
}
</style>


