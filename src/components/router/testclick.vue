<template>
    <div class="temp_container">
        <click-btn @addcount='otherevent'></click-btn>  
    </div>
</template>
<script>

const Temp = {
    template:'<div><button @click="addnum">点击我</button><span>{{clickData}}</span></div>',
     data(){
      return{
          clickData:0
      }
  }, 
  methods:{
      addnum:function(){
          this.clickData = "lalala"
          this.$emit('addcount')
      }
  }
}
export default {
 components:{
     'click-btn':Temp
 },
 methods:{
     otherevent:function(){
         console.log("父组件调用了")
     }
 }
 
}
</script>
