<template>
<div>

     <section>
        <span class="gohash" @click='gotolast'>&lt</span>
        <h4 class="city_title">{{$route.query.foodType}}</h4>
     </section>
     <section class="dif">
         <div class="foodsWrapper">
            <p @click="chooseType('foods')">
                <span>{{$route.query.foodType}}</span>
                <svg data-v-6cc1fce6="" width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon"><polygon data-v-6cc1fce6="" points="0,3 10,3 5,8"></polygon></svg>
            </p>
             <!-- <section class="type_container"> -->
                <transition name="trans" mode="out-in">
                    <ul v-show="test" class="foods_ul">
                        <li v-for='(value,index) in foodsCategory' :key='value.id'>
                            {{value.name}}
                            <div class="foods_point">
                                <span class="foods_count">{{value.count}}</span>
                                <span>></span>
                            </div>
                        </li>
                    </ul>
                </transition>  
            <!-- </section> -->
         </div>
         <div class="foodsWrapper">
            <p class="bordertb" @click="chooseType('paixu')">
                <span>排序</span>
                <svg data-v-6cc1fce6="" width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon"><polygon data-v-6cc1fce6="" points="0,3 10,3 5,8"></polygon></svg>
            </p> 
         </div>
        
        <div class="foodsWrapper">
          <p @click="chooseType('choose')">
                <span>筛选</span>
                <svg data-v-6cc1fce6="" width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon"><polygon data-v-6cc1fce6="" points="0,3 10,3 5,8"></polygon></svg>
          </p>  
        </div>
        
     </section>
  
</div>
</template>
<script>
import axios from 'axios'

export default {
  data(){
      return{
          test:false,
          foodsCategory:''
      }
  },
 
  methods:{
    gotolast(){
          this.$router.go(-1);
      },
    chooseType(type){
        if(type == 'foods'){
        this.test = !this.test;

        }else{
            alert("没有可显示的内容")
        }
      }
  },
  mounted:function(){
      var _this=this;
      axios.get('./src/data/food_category.json').then(function(res){
          _this.foodsCategory = res.data
      })
  }
  
}
</script>

<style scoped>
    *{
        margin: 0;
        padding:0;
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
        top: 1%;
        font-size: 30px;
        color: white;
    }
    .dif{
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #ccc;
    }
    .dif span{
        height: 40px;
        width:33%;
        text-align: center;
        line-height: 40px;
        padding:6px 3px;
    }
    .bordertb{
        border-left:1px solid #ccc;
        border-right:1px solid #ccc;
    }
    .type_container{

        border:1px solid #ccc;
    }
    .foodsWrapper p{
        text-align: center;
    }
    .foods_ul{
        width: 150%;
        position: absolute;
        top: 40px;
        background: #f1f1f1;
        color:#333;
        padding: 5px 0;
        padding-left: 10px;
    }
    .foods_ul li{
        padding:10px 0;
        list-style: none;
        width: 100%;
    }
    .foods_count{
        padding: 5px 5px;
        background: #ccc;
        border-radius: 5px;
        color:white;
        margin-right: 10px;
    }
    .foods_point{
        float: right;
    }
    .foodsWrapper{
        position: relative;
        width: 33%;
    }

</style>