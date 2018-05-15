<template>
<div class="content">


    <header>
        <div class="head_black">
             <div class="head_content">
             <div class="head_left">
            <span>客服热线：400-921-9908</span>
            <span>服务时间：9:00~18~00</span>
        </div>
        <div class="head_right">
            <span>常见问题</span>
            <span>请登录</span>
            <span>免费注册</span>
        </div>
        </div>
        </div>
       
        <nav class="overflow_hidden">
            <div class="nav_left left">
                <img src="http://www.jfwlicai.com/public/attachment/201604/29/14/5722fd70a9d4e.png" alt="logo">
            </div>
            <div class="nav_right right">
                <ul class="overflow_hidden">
                    <li><a href="index.html">首页</a></li>
                    <li><a href="index.html">我要投资</a></li>
                    <li><a href="index.html">关于我们</a></li>
                    <li><a href="index.html">账户中心</a></li>
                </ul>
            </div>
        </nav>
    </header>
    <div id="banner">
        <div id="myCarousel" class="carousel slide">
	<!-- 轮播（Carousel）指标 -->
	<ol class="carousel-indicators">
		<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
		<li data-target="#myCarousel" data-slide-to="1"></li>
		<li data-target="#myCarousel" data-slide-to="2"></li>
	</ol>   
	<!-- 轮播（Carousel）项目 -->
	<div class="carousel-inner">
		<div class="item active">
            <a href="#">
                <img src="http://www.jfwlicai.com/public/attachment/201712/11/14/5a2e2367295ff.png" alt="First slide">
            </a>
			
    
		</div>
		<div class="item">
            <a href="#">
                <img src="http://www.jfwlicai.com/public/attachment/201712/11/14/5a2e2367295ff.png" alt="Second slide">
            </a>
			
			
		</div>
		<div class="item">
            <a href="#">
                <img src="http://www.jfwlicai.com/public/attachment/201712/11/14/5a2e2367295ff.png" alt="Third slide">
            </a>
			
			<!-- <div class="carousel-caption">标题 3</div> -->
		</div>
	</div>
	<!-- 轮播（Carousel）导航 -->
	<!-- 
        <a class="carousel-control left" href="#myCarousel" 
	   data-slide="prev">&lsaquo;</a>
	    <a class="carousel-control right" href="#myCarousel" 
	   data-slide="next">&rsaquo;</a>
    -->
</div>
    </div>
    <div class="reg_container">
        <div class="reg_content overflow_hidden">
          <div class="reg_left left">
            累计注册人数 <span>{{reg_data.Num}}</span>
            </div>
            <div class="reg_center left">
                为投资人赚取 <span>{{reg_data.Get}}</span>
            </div>
            <div class="reg_right left">
                累计交易金额 <span>{{reg_data.All}}</span>
            </div>
        </div>
     
    </div>
       <input type="text">
       <my-component></my-component>
       <child message="goods news" news_Type="啦啦啦"></child>

       <div>计算属性的值为：{{addNum}}</div>

       <div class="input_focus" v-show="show">
           <input type="text" value='测试是否聚焦' id="keywords"><br>
       </div>
       <button type="button" @click="focus">点击提交</button>
       <input type="text" v-focus>
       <div v-good>看看该元素是否被移除了</div>

       <!-- bootstrap ui -->
       <div class="input-group">
  <span class="input-group-addon" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
</div>
<input type="text" placeholder="测试双向绑定" v-model="abc"><br>
<span>{{abc}}</span><br>
<child :message="abc"></child>
<hr>
<slot-test>
  <div slot='header'>
    我是头部
  </div>
  <div slot='main'>
    我是主体
  </div>
  <div slot='footer'>
    我是尾部
  </div>

</slot-test>
<hr>
    </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";

Vue.component("slot-test",{
  render:function(createElement){
    let header = this.$slots.header;
    let main = this.$slots.main;
    let footer = this.$slots.footer;
    return createElement("div",[
      createElement("h1",header),
      createElement("h2",main),
      createElement("footer",footer)
    ])
  }
})


// 学习渲染函数

Vue.component("child", {
  // 声明 props
  props: ["message","news_Type"],
  // 就像 data 一样，prop 也可以在模板中使用
  // 同样也可以在 vm 实例中通过 this.message 来使用
  template: "<div><span>{{ message }}</span><h1>{{ news_Type }}</h1></div>"
});
// const hi = {
//   mounted() {
//     console.log('this mixin!')
//   }
// }
var minFun = {
  created: function() {
    this.foo();
    this.confiltFun();
  },
  methods: {
    foo: function() {
      // console.log("minFun foo");
    },
    confiltFun: function() {
    }
  }
};


export default {
  data() {
    return {
      imgarr: {
        name: "张留请",
        age: "111",
        hobby: "eat foods"
      },
      reg_data: "隔壁老张很鞍山",
      abc: 10,
      show: false
    };
  },
  mixins: [minFun],
  
  methods: {
    focus: function() {
      this.show = !this.show;
      this.$nextTick(function() {
        // document.getElementById("keywords").focus()
      });
    },
    confiltFun: function() {

    }
  },
  beforeCreate:function(){
    this.$on("test",function(arg){
      // console.log(arg)
    })
  },
  created: function() {
    this.confiltFun();
    this.$emit("test","张留清牛逼");
    axios.get("src/data/test.json").then(function(res){
      // console.log(res.data)
    })
  },
  computed: {
    addNum: {
      get: function() {
        return this.abc + 1;
      }
    }
  },
  beforeUpdate: function() {
    // console.log("视图更新了！")
    //  document.getElementById("keywords").focus()
  },
  updated: function() {
    document.getElementById("keywords").focus();
  },
  destroyed: function() {
    // console.log("组件被销毁了！");
  },
  // 自定义指令
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    },
    good: {
      inserted: function(el) {
        el.remove();
      }
    }
  }

  // mixins:[hi]
};
</script>
<style scoped>
.reg_content {
  display: flex;
  justify-content: space-between;
}
.reg_content div {
  font-size: 18px;
}
.reg_content {
  width: 60%;
  height: 75px;
  margin: 0 auto;
  line-height: 75px;
}
.reg_container {
  height: 90px;
  width: 100%;
}
.head_black {
  height: 40px;
  background: black;
}
.head_content {
  width: 70%;
  margin: 0 auto;
  color: white;
  overflow: hidden;
}

.head_content span {
  font-size: 13px;
  cursor: pointer;
}
.head_left {
  float: left;
  line-height: 40px;
}
.head_right {
  float: right;
  line-height: 40px;
}
nav {
  width: 70%;
  margin: 0 auto;
  height: 90px;
}
.nav_left {
  height: 100%;
  display: table-cell;
}
.nav_left img {
  vertical-align: middle;
  padding-top: 17px;
}
.nav_right ul {
  width: 404px;
}
.overflow_hidden li {
  list-style: none;
  float: left;
  width: 25%;
  height: 90px;
  text-align: center;
  line-height: 90px;
}
.overflow_hidden a {
  display: block;
  box-sizing: border-box;
  margin: 0 15px;
  text-decoration: none;
  color: #666;
  font-size: 16px;
}
.overflow_hidden a:hover {
  color: #ffc000;
}
#banner a {
  width: 100%;
  display: inline-block;
  height: 100%;
}
#banner img {
  width: 100%;
  height: 100%;
}
</style>


