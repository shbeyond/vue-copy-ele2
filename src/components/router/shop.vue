<template>
    <div>
        
            <span class="return_home" @click="goBack"><</span>
       
        <section>
            <div class="router_class">
                <router-link :to="{path:'/hot'}" class="router_a">热销榜</router-link>
                <router-link :to="{path:'/discount'}" class="router_a">优惠</router-link>
                <router-link :to="{path:'/drink'}" class="router_a">饮料</router-link> 
                <router-link :to="{path:'/testclick'}" class="router_a">点击事件</router-link> 
                <router-link :to="{path:'/drink'}" class="router_a">新品</router-link> 
            </div>
           
        </section>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  methods:{
      goBack(){
            this.$router.go(-1);
        }
  },
  created:function(){
    //   console.log(this.$route.query.id)
  }
}
</script>

<style>
    .return_home{
        display: inline-block;
        height: 30px;
        width: 50px;
        text-align: center;
        line-height: 30px;
        font-size: 3rem;
    }
    .router_class{
        display: flex;
        flex-direction: column;
        width: 20%;
        background: #000; 
        align-items: center;  
    }
    .router_a{
        height: 50px;
        color:white;
        line-height: 50px;
    }
</style>