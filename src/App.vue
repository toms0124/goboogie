<template>
  <div id="app">
  <ArticleList></ArticleList>
  <Comment></Comment>
  <Commenteditor></Commenteditor>
  <Pagination></Pagination>
  <PostArticle></PostArticle>
  <TheHeader></TheHeader>
  <TheFooter></TheFooter>
  <VTag></VTag>

  </div>
</template>
<!-- <script src="https://unpkg.com/vue@2.3.3"></script> -->
<script>
// 각각의 파일내용을 다 불러와서 담는다
import ArticleList from './components/ArticleList.vue';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import Comment from './components/Comment.vue';
import Commenteditor from './components/Commenteditor.vue';
import PostArticle from './components/PostArticle.vue';
import VTag from './components/VTag.vue';
import Pagination from './components/Pagination.vue';

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
  components:{
    // 컴포넌트 태그명: 컴포넌트 내용
    'TheHeader':TheHeader,
    'TheFooter':TheFooter,
    'ArticleList':ArticleList,
    'Comment':Comment,
    'Commenteditor':Commenteditor,
    'Pagination':Pagination,
    'VTag':VTag,
    'PostArticle':PostArticle,

  }

}
</script>

<style>
</style>
