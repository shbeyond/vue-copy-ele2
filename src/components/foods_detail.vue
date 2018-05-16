<template>
    <div>
        <div class="foods_detail_container">
            <div class="foods_detail_panel" v-for="(items,index) in foodDetail">
                <router-link :to="{path:'/shop',query:{id:items.id}}">

                
              <div class="foods_detail_img left">
                  <img :src="imgBaseUrl + items.image_path" class="foods_image">
              </div>
              <div class="foods_detail_main right">
                  <header>
                    <span :class="items.is_premium? 'premium':''" class="" class="shop_title ellipsis">{{items.name}}</span>
                    <ul class="shop_detail_ul right">
						<li v-for="item in items.supports" :key="item.id" class="supports">{{item.icon_name}}</li>
					</ul>
                  </header>
                <div class="rating_order_num">
                    <section>
                        <span>
                            月售{{items.recent_order_num}}单
                        </span> 
                    </section>
                    <section>
                        <span>
                            {{items.delivery_mode.text}}
                        </span>
                        <span v-for="(hours,index) in items.opening_hours" :key="index">
                            {{hours}}
                        </span> 
                    </section>
                   
                </div>
              </div>

              </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import { getRestauRantList } from './getdata/get_need_data.js'
import { mapState } from "vuex"

export default {
    data(){
        return{
            foodDetail:[],
            imgBaseUrl :'http://cangdu.org:8001/img/',
            offset:0,
            restaurantCategoryId:''
        }
    },
    mounted(){
        this.initData()
    },
    computed:{
        ...mapState([
            'latitude','longitude'
        ])
    },
    props:[
        'geohash'
    ],
    methods:{
        initData(){

           let res = getRestauRantList(this.latitude, this.longitude, this.offset, this.restaurantCategoryId)
            // this.foodDetail = [...res]
            // console.log(res)
        },
        zhunshi(support){
            let zhunStatus;
             if((support instanceof Array) && support.length){
                support.forEach(item=>{
                    if(item.icon_name = "准"){
                        zhunStatus = true;
                    }
                })
            }else{
                zhunStatus = false;
            }
            return zhunStatus;
        }

    },
  
}
</script>
<style scoped>
    .left{
        float: left;
    }
    .right{
        float: right;
    }
    .foods_detail_panel{
        overflow: hidden;
        padding: 1rem;
        border-bottom: 1px dashed #ccc;
    }
    .foods_detail_img{
        width: 12%;
    }
    .foods_image{
        width: 100%;
    }
    .ellipsis{
        color:black;
        font-size: 16px;
        font-weight: 600;
    }
    .premium::before{
        content: '品牌';
        display: inline-block;
        font-size: 1rem;
        line-height: .6rem;
        color: #333;
        background-color: #ffd930;
        padding: 0.4rem 0.2rem;
        border-radius: 0.1rem;
        margin-right: 0.2rem;
    }
    .foods_detail_main{
        width: 88%;
        box-sizing: border-box;
        padding-left: 1rem;
    }
    .shop_detail_ul{
        display: flex;
        transform: scale(.8);
        margin-right: -0.3rem;
    }
    .supports{
        list-style: none;
    }
</style>
