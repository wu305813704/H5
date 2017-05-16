<template>
    <div id="firstcomponent">
        <header class="index-header">
            <div class="header-top">
                <a href="javascript:;" class="sliding-menu">
                    <img :src="myurl1" alt="">
                </a>
                <img :src="myurl2">
                <router-link to="/second" class="message">
                    <!--<img :src="myurl3" alt="">-->
                </router-link>
            </div>
            <div class="header-mid">
                <img :src="myurl" alt="">
            </div>
            <div class="header-bottom clearfix">
                <span class="mmm">马上修车</span>
                <span class="off yyy">预约修车</span>
                <a href="tel:+123456789">
                    <!--<img src="phone" alt="">-->
                </a>
            </div>
        </header>
        <div id="map-container">
            <map1></map1>
        </div>
        <section class="index-bottom">
            <div class="bottom-info">
                <span id="hide">﹀</span>
                <ul>
                    <li>
                        <span>车辆类型</span>
                        <p class="carType">
                            <span><input name="carType" type="radio" checked="checked">&nbsp;&nbsp;&nbsp;两轮车</span>
                            <span><input name="carType" type="radio">&nbsp;&nbsp;&nbsp;三轮车</span>
                        </p>
                    </li>
                    <li><span>发起时间</span><i v-text="time"></i></li>
                    <li class="hide"><span>预约时间</span><i>2016-08-09</i></li>
                    <li><span>维修地点</span><a class="right-link" v-text="addressdescription" @click="rout(1)"></a></li>
                    <li><span>问题描述</span><a class="right-link" href="javascript:;" v-text="problemdescription"
                                            @click="rout(2)"></a></li>
                    <li><span>其他描述</span><textarea placeholder="请输入问题"></textarea></li>
                </ul>
            </div>
            <div class="bottom-submit">
                <span class="btn llll" @click="placeOrderShow(1)">立即发起</span>
                <span class="btn hide yyyy">预约发布</span>
            </div>
        </section>
        <span id="show">︿</span>
        <!-- 首页-弹出层 -->
        <div class="mask" id="mask1" v-show="markFlag" style="display: block">
            <div class="index-alert" id="now" style="display: block">
                <p>确认发起订单吗？</p>
                <div class="index-alert-btn">
                    <a href="javascript:;" v-show="markFlag" @click="placeOrderShow(-1)">取消</a>
                    <a href="javascript:;" @click="placeOrderSend">确定</a>
                </div>
            </div>
            <div class="index-alert" id="order">
                <p>确认发起订单吗？</p>
                <div class="index-alert-btn">
                    <a href="javascript:;">取消</a>
                    <a href="javascript:;" id="confirm">确定</a>
                </div>
            </div>
            <div class="order-alert">
                <p>发布成功~</p>
            </div>
        </div>
        <!-- 首页-个人中心 -->
        <div class="mask index-user">
            <div>
                <div class="index-user-info">
                    <img src="img/index-user-logo.png" alt="">
                    <p>小小小白菜</p>
                    <a href="javascript:;" id="index-menu-close"></a>
                </div>
                <div class="index-user-menu">
                    <ul>
                        <li><a href="#" @click="abcd">修车订单</a></li>
                        <li><a href="#">{{jjjj1(1,2)}}</a></li>
                        <li><a href="#">修车订单</a></li>
                        <li><a href="#">修车订单</a></li>
                        <li><a href="#">修车订单</a></li>
                        <li><a href="#">修车订单</a></li>
                        <li><a href="#">修车订单</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <p id="easyNotify"></p>
    </div>
</template>

<script>
    import img1 from "../img/slidingmenu.png"
    import img2 from "../img/index-logo.png"
    //    import img3 from "../img/message02.png"
    import myurl from "../img/index-banner.png"
    //    import phone from "../img/phone.png"
    import map1 from "./BMapcomponent.vue"

    export default{
        data(){
            return {
                myurl: myurl,
//                phone:phone,
                myurl1: img1,
                myurl2: img2,
//                myurl3:img3,
                problemdescription: "",
                markFlag: false,
                addressdescription: "",
                time: '',
            }
        },
        components: {
            map1: map1,
        },
        mounted: function () {
//            var flag = this.flag;
            var windowHeight = $(window).height();
            var height = $(".bottom-info").offset().top;

            var date = new Date();
            var str = date.getFullYear() + "-"
                + date.getMonth() + "-" + date.getDate()
                + " " + date.getHours() + ":" + date.getMinutes();
            this.problemdescription = sessionStorage.getItem("problem");
            this.time = str;
            this.addressdescription = sessionStorage.getItem("name");

            var btnHide = $("#hide");
            var btnShow = $("#show");
            btnHide.click(function () {
//                if (flag == 1) {
                $(".index-bottom").animate({
                    top: windowHeight + 200
                }, 400, function () {
                    btnShow.show();
                })
//                btn.text("︿");
//                } else {
//                    $(".index-bottom").animate({
//                        top: height
//                    }, 1000)
//                    btn.text("﹀");
//                }
//                flag *= -1;
            });
            btnShow.click(function () {
                btnShow.hide();
                $(".index-bottom").animate({
                    top: height
                }, 400)
            });
            var myCloseInfo = function () {
                alert('this is a callback function that runs after close the notification.');
            };

            var options = {
                title: "Notificação",
                options: {
                    body: "O melhor do Brasil são os Brasileiros.",
                    icon: "icon.png",
                    lang: 'pt-BR',
                    onClose: myCloseInfo
                }
            };

            $("#easyNotify").easyNotify(options);
        },
        methods: {
            jjjj1:function (str1,str2) {
              return jjjj()+str1+str2;
            },
            getIndex: function (index) {
                alert(index);
            },
            abcd: function () {
                this.$parent.$emit("popwindow", "12324324324")
            },
            //点击进行验证
            placeOrderShow: function (way) {
                if (this.addressdescription == null) {
                    alert('请填写维修地址');
                    return false
                } else if (this.problemdescription == null) {
                    alert(this.problemdescription);
                    alert('请描述你遇到的问题');
                    return false
                } else {
                    // alert(sessionStorage.getItem("problemId"))
                    if (way > 0) {
                        this.markFlag = true;
                    } else {
                        this.markFlag = false;
                    }
                }
            },
            //提交后弹出点击进行跳转
            placeOrderSend: function () {
                this.markFlag = false;
            },
            //页面进行跳转
            rout: function (item) {
                if (item == 1) {
                    this.$router.push({path: "/mapaddresscomponent"})
                } else if (item == 2) {
                    this.$router.push({path: "/problemdescription"})
                }
            },
            //获取时间
            getDate: function () {
                alert(1111);
                var date = new Date();
                var str = date.getFullYear() + "-"
                    + date.getMonth() + "-" + date.getDate()
                    + " " + date.getHours() + ":" + date.getMinutes();
                return str;
            },
        },

    }

    //    /**********************地图***********************/

</script>
<style>
    #hide {
        position: relative;
        left: 48%;
    }

    #show {
        position: absolute;
        bottom: 0;
        left: 50%;
        background: white;
        height: 0.3rem;
        width: 0.5rem;
        text-align: center;
        line-height: 0.2rem;
        display: none;
    }

    #firstcomponent {
        height: 100%;
        width: 100%;
    }

    .carType span {
        font-style: normal;
        color: #000;
    }

    .carType span input {
        width: 0.3rem;
        height: 0.3rem;
    }

</style>