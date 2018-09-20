<template>
  <div id="app">
    <music></music>  
    <div class="content">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
import music from './components/musicPlayer/musicPlayer'
export default {
  name: 'App',
  components:{
    music
  }
}
</script>

<style lang="less">
@import './common/less/mixin.less';
#app{
  width: 100%;
}
.content{
  background: #ffffff;
}
</style>
