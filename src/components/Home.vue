<!--
 * @Description: 
 * @Autor: lihaiyuan
 * @Email: lihaiyuan@goldenfintech.com.cn
 * @Date: 2020-02-11 12:17:30
 -->
<template>
  <div>
    <h2>我是Home</h2>
    <p>内容，哈哈哈</p>
    <router-link to="/Home/news">新闻</router-link>
    <router-link to="/Home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "About"
};
</script>

<style scoped>

</style>