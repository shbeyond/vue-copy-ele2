<template>
  <div class="hello">
   <router-link :to="{path:'/home'}">
      <div class="title_local">{{head}}</div>
   </router-link>
   
   <food-s></food-s>
   <food-detail :geohash='geohash'></food-detail>
   <boot/>
  </div>
</template>
<style scope>
  [v-cloak] {
    display: none;
  }
</style>

<script>

import Second from './second'
import MinCom from './mincom'
import Foods from './foods'
import Foods_detail from './foods_detail'
import Boot from './boot'
import {cityGuess} from './getSate.js'

import {mapMutations} from 'vuex'
import { msiteAdress } from './getSate.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
       getdata:"lalala",
       componentId:MinCom,
       secondId:Second,
       head:"未定位",
       geohash:'',
       temporary:""
    }
  },
    beforeMount(){
    if(!this.$route.query.geohash){
      let address = cityGuess();

    }else{
      this.geohash = this.$route.query.geohash;
    }
    this.save_geohash(this.geohash)
    this.temporary = msiteAdress(this.geohash)
  },
  mounted(){
    console.log("kkkkk")
    console.log(this.temporary+"??????")
    // this.recode_address(res)
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
  },
  methods:{
    ...mapMutations([
      'recode_address','save_geohash'
    ])
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
