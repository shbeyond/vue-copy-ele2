<template>
  <div class="hello">
   <!-- <child message="测试其他组件调用全局组件"></child> -->
   <!-- <child-com :message = "getdata"></child-com> -->
   <!-- <component :is="componentId"></component> -->
   <!-- <component :is="secondId"></component> -->
   <!-- <min-com></min-com> -->
   <!-- <input type="text" v-model="testLLL"> -->
   <!-- <childSecon :childComponent="testLLL"></childSecon> -->
   <!-- <div v-pre>{{howWhat}}</div> -->
   <!-- <div v-cloak>{{displayNone}}</div> -->
   <router-link :to="{path:'/home'}">
      <div class="title_local">{{head}}</div>
   </router-link>
   
   <food-s></food-s>
   <food-detail></food-detail>
   <boot/>
  </div>
</template>
<style scope>
  [v-cloak] {
    display: none;
  }
</style>

<script>
// var childCom = {
//   template:"<div><h1>good news today! ======={{msg}}</h1><hr><h1>{{message}}</h1></div>",
//   data:function(){
//     return {
//       msg:"no way!"
//     }
//   },
//   props:["message"]
// };
// var child2 = {
//   template:"<div><h1>{{childComponent}}</h1></div>",
//   data:function(){
//     return {

//     }
//   },
//    props:["childComponent"]
// };
// var child3 = {
//   template:"<div><h1>我是第三个子组件</h1></dvi>",
//   data:function(){
//     return {
//     }
//   }
// };
import Second from './second'
import MinCom from './mincom'
import Foods from './foods'
import Foods_detail from './foods_detail'
import Boot from './boot'

export default {
  name: 'HelloWorld',
  data () {
    return {
       getdata:"lalala",
       componentId:MinCom,
       secondId:Second,
       testLLL:"",
       displayNone:"皇上",
       howWhat:"怎么回事",
       head:"未定位"
    }
  },
  components:{
    Second,
    "min-com":MinCom,
    // "childSecon":child2,
    "food-s":Foods,
    "food-detail":Foods_detail,
    "boot":Boot
  },
  mounted:function(){
    if(this.$route.query.page){
      this.head = this.$route.query.page;
    }
  }
}

</script>
<style scoped>
    .title_local{
      height: 50px;
      text-align:center;
      line-height:50px;
      font-weight:600;
      font-size:20px; 
      background:#3190e8;
      color:white;
    }
</style>
