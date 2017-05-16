<template>
    <div id="personalMessage">
        <header class="index-header" style="border-bottom: 1px solid rgb(223,223,223)">
            <div class="header-top">
                <a href="javascript:;" class="sliding-menu">
                    <img :src="url" alt=""/>
                </a>
                <h3 class="public-h3">个人中心</h3>
            </div>
        </header>
        <div id="middle">
            <img :src="url" alt="">
        </div>
        <!-- 首页-底部 -->
        <section id="personalselect">
            <div class="bottom-info1">
                <ul>
                    <li><span>名字</span><i>{{nickname}}</i></li>
                    <li><span>性别</span><a class="right-link">男</a></li>
                    <li>
                        <span>手机</span>
                        <a class="right-link" href="javascript:;" id="TelA" @click="telNumber" v-text="tel"></a>
                    </li>
                    <li id="tishi">温馨提示：手机号一经填写，不可修改。</li>
                    <li><span>注册时间</span><i>2016-12-24</i></li>
                </ul>
            </div>

        </section>
        <div id="personalBtn">
            <span class="btn" @click="baocunBtn">保存</span>
        </div>
        <div class="mask" id="mask1" style="display: block;" v-show="markFlag">
            <div class="index-alert1" id="now" style="display: block;" v-show="markFlagTel">
                <p>请填写手机号</p>
                <input type="text" id="inputTel" placeholder="请输入手机号" v-model="tel">
                <div class="index-alert-btn">
                    <a @click="hiddle(-1)">取消</a >
                    <a @click="hiddle(1)">确定</a>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default({
        data(){
            return{
                markFlag:false,
                markFlagTel:false,
                tel:"",
                url:"src/img/index-user-logo.png",
                nickname:"小小白菜",
            }
        },
        mounted:function () {
            this.url = JSON.parse(sessionStorage.userDescription).headimgurl;
            this.nickname = JSON.parse(sessionStorage.userDescription).nickname;
            console.log(this.nickname);
            //$.get(URL+"")
        },
        methods:{
            //点击保存电话
            baocunBtn:function () {
                var _this = this;
                alert(this.tel);
                var openID = isReplace()?JSON.parse(sessionStorage.userDescription).openid:1;
                $.post(URL+"wx/addTel",{openId:openID,tel:this.tel},function (res) {
                    if (res.state == 0){
                        alert(res.message);
                        _this.$router.push({path:"/first"});
                    }else{
                        alert(res.message);
                    }

                })
            },
            hiddle:function (way) {
                var inputTel = document.getElementById("inputTel");
                if (way >0){
                    this.markFlag = false;
                    this.markFlagTel = false;
                }else {
                    this.markFlag = false;
                    this.markFlagTel = false;
                    this.tel = "";
                }
            },
            telNumber:function () {
                this.markFlag = true;
                this.markFlagTel = true;
            }
        },
    })
</script>
<style>
    #middle{
        text-align: center;
        margin: 0 auto;
        margin-top: 2rem;
        width: 4rem;
        height: 4rem;
        border-radius: 2.5rem;
        overflow: hidden;
    }
    #middle img{
        width: 4rem;
        height: 4rem;
    }
    .bottom-info1 {
        width: 9.466667rem;
        padding-left: 0.346667rem;
        margin-bottom: 0.266667rem;
        border: 0.013333rem solid #f0f0f0;
        border-radius: 0.066667rem;
        position: absolute;
        bottom: 4.613333rem;
        left: 0.25rem;
        background: #fff;
    }
    .bottom-info1 li {
        height: 1.186667rem;
        line-height: 1.186667rem;
        border-bottom: 0.013333rem solid #f1f1f1;
        font-size: 0.4rem;
        color: #6b6b6b;
        overflow: hidden;
    }
    .bottom-info1 li span {
        display: block;
        padding-right: 0.746667rem;
        float: left;
    }
    #personalBtn{
        position: relative;
        left: 0.25rem;
        bottom: -8.5rem;
    }
    .bottom-info1 li i {
        font-style: normal;
        color: rgb(128,128,128);
        float: right;
        margin-right: 0.4rem;
    }
    .bottom-info1 li a {
        padding-right: 0.4rem;
        margin-right: 0.4rem;
        text-align: right;
        display: block;
        width: 6.533333rem;
        height: 1.186667rem;
        color: rgb(128,128,128);
        float: right;
        background: url(../../img/index-a-right.png) right center no-repeat;
        background-size: 0.173333rem 0.293333rem;
    }
    #inputTel{
        height: 0.8rem;
        border: 1px solid gainsboro;
        position: relative;
        left: 1.3rem;
        width:4.5rem;
    }
    .index-alert1 {
        width: 7.2rem;
        height: 3.773333rem;
        border: 0.013333rem solid #fff;
        border-radius: 0.266667rem;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -1.386667rem;
        margin-left: -3.6rem;
        font-size: 16px;
        display: none;
    }
    .index-alert1 > p {
        height: 1.613333rem;
        line-height: 1.6rem;
        border-bottom: 0.013333rem solid #f1f1f1;
        text-align: center;
        font-weight: bold;
    }
    #now div{
        margin: 0 auto;
    }
    .index-alert-btn a {
        display: block;
        float: left;
        width: 3.57rem;
        height: 1.16rem;
        line-height: 1.16rem;
        text-align: center;
        color: #0478ff;
        text-decoration: none;
    }
    #tishi{
        color: red;
        font-size: 0.1rem;
        /*height: 0.15rem;*/
        display: none;
    }
</style>