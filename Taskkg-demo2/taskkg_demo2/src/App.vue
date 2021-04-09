<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
/*.el-input__inner {*/
/*  -webkit-appearance: none;*/
/*  background-color: #d1ecb2;*/
/*  background-image: none;*/
/*  border-radius: 4px;*/
/*  border: 1px solid #DCDFE6;*/
/*  -webkit-box-sizing: border-box;*/
/*  box-sizing: border-box;*/
/*  color: #606266;*/
/*  display: inline-block;*/
/*  font-size: inherit;*/
/*  height: 40px;*/
/*  line-height: 40px;*/
/*  outline: 0;*/
/*  padding: 0 15px;*/
/*  -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);*/
/*  transition: border-color .2s cubic-bezier(.645,.045,.355,1);*/
/*  width: 100%;*/
/*}*/
</style>
