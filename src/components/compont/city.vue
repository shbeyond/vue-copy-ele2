<template>
    <div class="citygo">
        <section>
            <span class="gohash" @click='gotolast'>&lt</span>
            <h4 class="city_title">{{$route.query.curid}}</h4>
            <router-link class="changecity" :to="{path:'/home'}">切换城市</router-link>
        </section>
        <section style="padding:10px 0;margin:0 auto;width:90%;">
            <input type="text" placeholder="输入学校，商务楼，地址" class="addinput" name='addinput' required v-model="keyword">
        </section>
        <section style="padding:10px 0;margin:0 auto;width:90%;">
            <input type="submit"  class="addsubmit" text='提交' @click="search_add"/>
        </section>
        <section v-show='city_list'>
            <ul>
                <li tag="li" v-for="(citylist,index) in marchCity" :key='index' class="city_li" @click="jump_next_page(citylist.name,citylist.geohash)">
                    <h4>{{citylist.name}}</h4>
                    <span style="color:#999;">{{citylist.address}}</span>
                </li>
            </ul>
        </section>
    </div>
    <!--  -->
</template>
<script>
import {searchplace} from '../getSate.js'
export default {
 data(){
     return{
         keyword:'',
         city_id:'',
         marchCity:[],
         city_list:false
     }
 },
 mounted(){
    //  console.log(this.$route.params)
     this.city_id = this.$route.params.cityid;
 },
 methods:{
      gotolast(){
          this.$router.go(-1);
      },
      changecity(){
          this.$router.go('/home')
      },
      search_add(){
          if(this.keyword){
             searchplace(this.city_id,this.keyword).then(res=>{
                 this.city_list = true;
                //  console.log(res.data)
                 this.marchCity = res.data;
             });
             
          }
      },
      jump_next_page(page,geohash){
          this.$router.push({path:'/', query:{page,geohash}})
      }
  }
}   
</script>

<style scoped>
    .city_li{
        height: 80px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        padding-left: 20px;
    }
    .city_title{
        text-align: center;
        background: #3190e8;
        margin: 0;
        padding: 0;
        color:white;
        height: 50px;
        line-height: 50px;
    }
    .citygo{
        position: relative;
    }
    .gohash{
        position: absolute;
        left: 5%;
        top: 5%;
        font-size: 30px;
        color: white;
    }
    .changecity{
        position: absolute;
        right: 5%;
        top: 10%;
        font-size: 18px;
        color: white;
    }
    .addinput{
        width: 100%;
        border:1px solid #ccc;
        outline:none;
        height: 40px;
        text-indent: 20px;
    }
    .addsubmit{
        width: 100%;
        height: 40px;
        background: #3190e8;
        color:white;
        border:none;
        outline: none;
        border-radius: 5px;
        font-size: 16px;
    }
    input[name='addinput']:focus{
        border:1px solid #3190e8;
    }
</style>