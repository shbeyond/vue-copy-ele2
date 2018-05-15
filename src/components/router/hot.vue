<template>
    <div class="temp_container">
        <section class="choise_type">
            <div>
                <dl style="display: flex;margin:0;">
                    <dt class="dlimg"><img src="http://cangdu.org:8001/img/161222e0c993188.jpg" alt="是是是"></dt>
                    <dd>
                        <p>123</p>
                        <p>月售841份，好评率97%</p>
                        <div>
                            <span style="color:red;font-size:20px;">￥20起</span>
                            <span class="guige" @click="showChooseType">选规格</span>
                        </div>
                    </dd>
                </dl>
            </div>
            <div>
                <dl style="display: flex;margin:0;">
                    <dt class="dlimg"><img src="http://cangdu.org:8001/img/161222e0c993188.jpg" alt="是是是"></dt>
                    <dd>
                        <p>123</p>
                        <p>月售841份，好评率97%</p>
                        <div>
                            <span style="color:red;font-size:20px;">￥20起</span>
                            <div style="float:right;">
                                <span class="addbtn" @click="add">-</span>
                                <span style="margin:0 5px;">1</span>
                                <span class="addbtn" @click="asyncAdd">+</span>
                            </div>
                        </div>
                    </dd>
                </dl>
            </div>
        </section>
            <div style="font-size:30px;">
                {{count}}
            </div>
            <div style="font-size:30px;">
                {{doubleCount}}
            </div>
        <div class="alert_wind" v-show="food">
            此处为测试
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            food:false,
        }
    },
    methods:{
        showChooseType(){
            this.food = !this.food;
        },
        add(){
            this.$store.commit('increment', {addNum : 10})
        },
        asyncAdd(){
            this.$store.dispatch('incrementAsync', {addNum : 10})
        }
    },
    computed:{
        count(){
            return this.$store.state.count;
        },
        doubleCount(){
            return this.$store.getters.doubleCount;
        }
    }
}

</script>
<style scoped>
.addbtn{
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 12px;
    border-radius: 50%;
    color:white;
    background:#3190e8; 
    text-align: center;
    line-height: 25px;
    font-size: 20px;
}
.alert_wind{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width:100px;
    height:100px;
    line-height: 100px;
    text-align: center;
    color: white;
    font: 20px;
    border-radius: 5px;
    background: black;
}
.choise_type{
    background: #ccc;    
}

    .dlimg{
        padding-right: 10px;
    }
    .dlimg img{
        width: 4rem;
        height: 4rem;   
    }
    .guige{
        font-size: 0.55rem;
        color: #fff;
        padding: .5rem;
        background-color: #3190e8;
        border-radius: 0.2rem;
        border: 1px solid #3190e8;
        float:right;
    }
</style>