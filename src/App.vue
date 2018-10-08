<template>
  <div id="app">
    <router-view/>
    <simplert></simplert>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title:"测试"
    }
  },
  mounted(){
    let that = this;
    that.title = "首页";
  },
}
</script>

<style>

</style>
