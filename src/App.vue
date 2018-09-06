<template>
  <div id="app">
    <top></top>
    <div class="tab">
        <div class="tabItem">
            <router-link to="/recommend">推荐音乐</router-link>
        </div>
        <div class="tabItem">
           <router-link to="/hot">热歌榜</router-link>
        </div>
        <div class="tabItem">
          <router-link to="/search">搜索</router-link>
        </div> 
    </div>
    <div class="content">
      <keep-alive>
       <router-view></router-view>
      </keep-alive> 
    </div>
  </div>
</template>

<script>
  import  top from '@/components/head.vue'

export default {
  name: 'App',
    components:{
      top
  }
}
</script>

<style lang="less">
@import './common/less/mixin.less';
#app{
  width: 100%;
}
.tab{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #ffffff;
  .border-1px(rgba(7,17,27,0.1));
}
.tabItem{
  padding: 0 30px;
  flex: 1;
  text-align: center;
  &>a{
    display: block;
    font-size: 14px;
    color:rgb(77, 85, 93);
    &.active{
      color: #d33a31;
      .border-2px();
    }
  }
}
.content{
  background: #ffffff;
}
</style>
