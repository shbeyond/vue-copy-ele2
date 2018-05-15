<template>

    <div>
        <section>
            <div class="current_city_title">
               <span class="left">当前定位城市城市：</span>
               <span class="right">定位不准时请在城市列表中选择</span> 
            </div>
            <router-link :to="{path:'/city/1'}">
              <div class="current_city">
                    <h5>{{guessDate.name}}</h5>
                    
                    <span class="arrow_right">></span>
              </div>
            </router-link>
          
        </section>
        <section style="margin-top: 10px;border-top: 1px solid #ccc;">
            <span class="hottitle">热门城市</span>
            <ul class="overhide">
                <li v-for="items in cityCube" :key="items.id" class="hotcity">
                    <router-link :to="{path:'/city/'+items.id,query:{curid:items.name}}">{{items.name}}</router-link>
                </li>
            </ul>
        </section>
        <section>
            <ul>
                <li v-for='(items,key,index) in sortgroupcitys' :key='key'>
                    
                    <h4 class="typetitle">{{key}}
                        <span v-if="index == 0">（按字母排序）</span>
                    </h4>
                    <ul class="listcity">
                        <li v-for="(value,key,index) in items" :key='value.id' :class="(key+1)%4==0?'fourid':''" class="hotcity hotcity2">
                            <router-link :to="{path:'/city/'+value.id,query:{curid:value.name}}">{{value.name}}</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
      
    </div>
</template>
<script>
import axios from 'axios'
import sortgroup from '../../data/sortgroupcity.json'
import {HOST,otherData}  from '../getSate.js'

export default { 
  data(){
      return {
          cityCube:'',
          sortgroupcitys:sortgroup,
          guessDate:''
      }
  },
  methods:{
     
  },
  mounted (){

      axios.get('./src/components/compont/getlocation.json').then( (res)=>{
          this.cityCube = res.data;
      })
      axios.get('http://localhost:8000/v1/cities?type=guess').then( (res)=>{
          this.guessDate = res.data;
      })
      
  }
}
</script>
<style scoped>
    .hotcity{
        width:25%;
        text-align: center;
        float: left;
        list-style: none;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-left:none;
        padding:10px 0;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        color:#3190e8;
        
    }
    .hotcity2 a{
        color:#666;
    }
    .fourid{
        border-right:none;
    }
    .hottitle{
        display: inline-block;
        padding: 5px;
    }
    .typetitle{
        padding-left:10px;
        box-sizing: border-box; 
        /* border: 1px solid #ccc; */
    }
    .listcity{
        overflow: hidden;
        list-style: none;
    }
    .overhide{
        overflow: hidden;
    }
    .left{
        float: left;
    }
    .right{
        float: right;
    }
    .current_city h5{
        height: 50px;
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #ccc;
        line-height: 25px;
        margin: 0;
        padding: 10px;
        color:#3190e8;
        font-size: 20px;
    }
    .current_city_title{
        overflow:hidden;
        height: 40px;
        padding: 0 10px;
        line-height: 40px;
    }
    .current_city{
        position: relative;
    }
    .arrow_right{
        position: absolute;
        right:20px;
        top:15%;
        font-size: 30px;
        color:#ccc;
    }
</style>
