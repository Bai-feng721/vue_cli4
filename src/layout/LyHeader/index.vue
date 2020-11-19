<template>
  <div class="headermain">
    <div class="layout">
      <div class="cls">
        <Button type="primary" icon="ios-home" @click="gohome">回到首页</Button>
        <p>欢迎来到赛事报名</p>
      </div>
      <div class="layout-header">

        <Button type="primary" v-if="token != undefined" @click="gologin">登录</Button>
        <Button  @click="logout">注册</Button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menu: [],
      token:'',
    }
  },
  created () {
  },
  methods: {
    gohome(){
      this.$router.push({path:'/index'})
    },
    gologin(){
      this.$router.push({path:'/login'})
    },
    logout () {
      this.$Message.info({
        content: '退出成功',
        duration: 10
      });
      this.$router.go(0)
    },
  }
}
</script>
<style scoped>
  .headermain{
    width: 100%;
    background-color: #f3f3f3;
    /* position: fixed; */
    /* top: 0; */
    /* z-index: 999; */
  }
  .layout {
    width: 1200px;
    background-color: #f3f3f3;
    height: 60px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .layout p{
    font-size: 16px;
  }
  .cls{
    width: 570px;
    height: 60px;
  }
  .cls p{
    float: right;
  }
  .layout-header {
    height: 60px;
  }
  .layout-header button{
    margin: 0 10px;
  }
</style>
