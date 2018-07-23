<template>
  <div id="app" height=50px margin>
    <!-- 라우터 링크 추가 -->
      <img width="50"height="50" src="./assets/logo.png" />
      <router-link to="/" exact>Home</router-link>
      <router-link to="/ArticleThemaFeed">Posts</router-link>
      <router-link to="/posts/new" exact>NewPost</router-link>

    <!-- <router-link v-if="loggedIn" to="/login">login</router-link> -->
    <!-- <router-link v-if="loggedIn" to="/logout">Logout</router-link> -->
    <!-- <router-link v-else to="/login" exact>Login</router-link> -->
    <hr id="hello">
  <router-view></router-view>
  </div>
</template>
<!-- <script src="https://unpkg.com/vue@2.3.3"></script> -->
<script>
// 각각의 파일내용을 다 불러와서 담는다
import Home from './views/Home.vue'

// var my_cmp = {
//   template: '<div>my component </div>'
// };
// new Vue({
//   el:'',
//   components:{
//     // '컴포넌트 이름': 컴포넌트내용
//
//   }
// });




export default {
  name:'app',
 //  data(){
 //    return{
 //      loggedIn: loggedIn()
 //    }
 //  },
 //  created() {
 //   Auth.onChange = loggedIn => {
 //     console.log('onchange', loggedIn)
 //     this.loggedIn = loggedIn
 //   }
 // },
  components:{
    // 컴포넌트 태그명: 컴포넌트 내용
    'Home':Home
  }

}
</script>

<style>
#app{
  margin-top: 10px;
  margin-left: 10px;
  text-decoration-line: none;
  font-size: 1.5rem;

}
hr{
  height: 5px;
  border-color: powderblue;
}
.body {
  font-family: "Times New Roman", Georgia, Serif;
}
h1,h2,h3,h4,h5,h6 {
    font-family: "Playfair Display";
    letter-spacing: 5px;
}
.router-link-exact-active {
  text-decoration:none;
  font-family: "Playfair Display";
  letter-spacing: 4px;
  /* border-bottom: 2px solid black; */
}
</style>
