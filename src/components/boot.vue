<template>
    <div class="ul">  
        <router-link :to="{path:'/'}">外卖</router-link>     
        <router-link :to="{path:'/two'}">搜索</router-link>     
        <router-link :to="{path:'/three'}">订单</router-link>     
        <router-link :to="{path:'/four'}">我的</router-link>     
    </div>
</template>
<script>
export default {
  data(){
      return {
          navList:{
              navContent:["外卖","搜索","订单","我的"],
              transRouter:["/one","/two","/three","/four"]
          }
      }
  }
}
</script>
<style scoped>
    *{
         margin: 0;
        padding: 0;
    }
    .ul{
        display: flex;
        justify-content: space-around;
        position: fixed;
        height: 50px;
        bottom: 0px;
        width: 100%;
        align-items: center;
        background: white;
        border-top: 1px solid #ccc;
       
    }
    .boot_li{
        list-style: none;
    }   
</style>
