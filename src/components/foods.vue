<template>
<div>
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div  v-for="(items,index) in imgSrcArr" :key = "index" class="swiper-slide">
                  <router-link :to="{ path:'/food_type/'+index,query:{foodType:imgRrl.title} }"  v-for="(imgRrl,index) in items" :key="imgRrl.id" class="img_link">
                    <figure>
                        <img :src="srcFirst +imgRrl.image_url" class="swiper_img">
                        <figcaption class="foods_title">{{imgRrl.title}}</figcaption>
	            	</figure>
                      
                  </router-link>
                 
              </div>
          </div>
        
      </div>
   
</div>
   
</template>
<script>
import axios from 'axios'

// var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical',
    // loop: true,
    
    // // 如果需要分页器
    // pagination: '.swiper-pagination',
    
    // // 如果需要前进后退按钮
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',
    
    // // 如果需要滚动条
    // scrollbar: '.swiper-scrollbar',
//   }) 


export default {
  data(){
      return{
          imgSrcArr:[],
          srcFirst:"https://fuss10.elemecdn.com"
      }
  },
  mounted(){
      let $this = this;
      axios.get("./src/data/foods.json").then( function(res){
          let result = res.data; 
          let resL   = result.length; 
          let newArr = [];
          	for (let i = 0, j = 0; i < resL; i += 10, j++) {
    			newArr[j] = result.splice(0, 10);
            }
          $this.imgSrcArr = newArr;
            
      })
  }
}
</script>
<style scoped>
    .img_link{
        width: 20%;
        display: inline-block;
       
    }
     .foods_title{
        text-align: center;
        font-size: 1.2rem;    
    }
    .swiper_img{
        width: 100%;
        /* height: 7rem; */
    }
</style>
