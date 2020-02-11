<!--
 * @Description: 
 * @Autor: lihaiyuan
 * @Email: lihaiyuan@goldenfintech.com.cn
 * @Date: 2020-02-11 17:23:55
 -->
<template>
  <div>
    <div>我是prfile组件</div>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
    <h2>{{$route.query.height}}</h2>
    <!-- <h2>{{userId}}</h2> -->
  </div>
</template>

<script>
export default {
  name: "Profile",
  //这样娶不到值
//   computed: {
//     userId() {
//         this.$route.query.height
//     }
//   }
};
</script>

<style scoped>
</style>