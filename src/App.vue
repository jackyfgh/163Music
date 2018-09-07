<template>
  <div id="app">
  <div class="content">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
