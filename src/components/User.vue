<!--
 * @Description: ,
 * @Autor: lihaiyuan
 * @Email: lihaiyuan@goldenfintech.com.cn
 * @Date: 2020-02-11 15:28:43
 -->
<template>
  <div>
    <h2>我是user</h2>
    <p>我是内容</p>
    <!-- 下面两种方式都可以拿到值 -->
    <h2>{{userId}}</h2>
    <h2>{{$route.params.userId}}</h2>
  </div>
</template>
<script>
export default {
  name: "User",
  computed:{
    //   第一种方式通过this.$route.param 获取传过来的参数
      userId(){
          return this.$route.params.userId;
      }
  }
};
</script>
