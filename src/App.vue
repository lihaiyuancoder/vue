<!--
 * @Description: 
 * @Autor: lihaiyuan
 * @Email: lihaiyuan@goldenfintech.com.cn
 * @Date: 2020-02-07 20:16:49
 -->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <!-- 提前加载出来 -->
    <!--router-link是vue-router 内置组件 其实就是<a>标签  -->
    <!-- http://localhost:8080/#/About  #为hash-->
    <!-- router-link 其他属性 tag -->
    <router-link to="/Home" tag="button">首页</router-link>
    <router-link to="/About" tag="button">关于</router-link>
    <!-- <router-link to="/User" tag="button">我的</router-link> -->
    <!-- <router-link :to="'/User/'+userId">我的</router-link> -->
    <!-- 对象方式 -->
    <!-- <router-link :to="{path:'/Profile',query:{name:'lhy',age:18,height:180}}" tag="button">档案</router-link> -->
    <!-- 占位内容显示区域 -->
    <button @click='proclick'>我的</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      userId:'李大海'
    }

  },
  methods:{
    proclick(){
      this.$router.push('/user/'+this.userId)
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
