<template>
    <div id="dispat">
        <!-- 自动派单-首部 -->
        <header class="dispat-header">
            <a class="back" @click="back"></a>
            <h3 class="public-h3">自动派单</h3>
            <router-link to="/second" class="message"></router-link>
        </header>
        <!-- 自动派单-内容 -->
        <section class="public-content">
            <div class="dispat-timer">
                <div id="canvas">
                    <svg width="4.266667rem" height="4.266667rem">
                        <circle id="circle1" cx="2.133333rem" cy="2.133333rem" r="2.053333rem" fill="#f5f5f5" stroke="#fd8b04" stroke-width="0.08rem"></circle>
                        <circle id="circle2" class="control-circle" cx="2.133333rem" cy="2.133333rem" r="2.053333rem" fill="transparent" stroke="#eee" stroke-width="0.093333rem" transform="rotate(-90)"></circle>
                    </svg>
                    <div>
                        <p v-text="timeNumber"></p>
                    </div>
                </div>
                <p>维修工程师<br>一般会在<span class="blue">3</span>分钟内接单<br>请稍后...</p>
                <p class="addAlex">加价：<span class="orange">10</span>元</p>
            </div>
            <div class="dispat-submit">
                <span class="btn" @click="showHiddle(1)">加价</span>
                <a class="btn white" @click="quxiaodingdan">取消订单</a>
            </div>
        </section>
        <!-- 自动派单-弹出层 -->
        <div class="mask" style="display: block" v-if="markFlag">
            <!-- 自动派单-已接单 -->
            <div class="dispat-confirm center">
                <p class="public-alert-p">工程师（<span>工号888888</span>）<br>已接单</p>
                <div class="confirm-btn">
                    <span class="public-alert-btn">返回当前订单</span>
                </div>
            </div>
            <!-- 自动派单-加价成功 -->
            <div class="dispat-up center" style="display: block" v-show="markFlagsuccess">
                <p class="public-alert-p">加价成功，订单重新发送~</p>
                <div class="up-btn">
                    <span class="public-alert-btn" @click="completeRoute">确定</span>
                </div>
            </div>
            <!-- 自动派单-加价选择 -->
            <div class="dispat-addPrice" v-show="markFlagcompelet" style= "display: block">
                <div class="dispat-addPrice-top clearfix">
                    <span class="fl" @click="showHiddle(-1)">取消</span>
                    <span class="fr" @click="compeletSend(1)">完成</span>
                </div>
                <div class="dispat-addPrice-bottom">
                    <ul>
                        <li>5元</li>
                        <li class="on">10元</li>
                        <li>20元</li>
                    </ul>
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
             markFlagsuccess:false,
             markFlagcompelet:false,
             markAdd:false,
             timeNumber:180,
         }
       },
       mounted:function () {
           var _this = this;
           $(function () {
               FastClick.attach(document.body);

               // 1.将倒计时时间的margin-top设置为自身的-50%
               var $time = $('#canvas > div');
               $time.css('marginTop', -0.5 * $time.height());

               // 2.倒计时动画
               /*
                * 1、动态设置SVG、2个circle的属性
                * 2、动态设置第2个circle的stroke-dasharray
                * 3、添加JS动画
                * */
               var $svg = $('#canvas svg');
               var $circle1 = $('#circle1');
               var $circle2 = $('#circle2');

               var dpr = $('html').attr('data-dpr');
               var rotateAttr = 'rotate(-90 '+ dpr*75 +' '+ dpr*75 +')';

               // 动态设置SVG等的属性
               $svg.attr({'width': dpr * 150 + 'px', 'height': dpr * 150 + 'px'});
               $circle1.attr({'cx': dpr * 75 + 'px', 'cy': dpr*75+'px', 'r': dpr*73+'px', 'stroke-width':dpr*3});
               $circle2.attr({'cx': dpr * 75 + 'px', 'cy': dpr*75+'px', 'r': dpr*73+'px', 'stroke-width':dpr*4, 'transform':rotateAttr});

               // 动态设置css属性
               var long = 6.28 * dpr * 73; // 计算圆2的周长
               $circle2.css('stroke-dasharray', long);

               // 添加JS动画
               var $text = $('#canvas p');

               var circle2 = $circle2[0];
               var timer = null;
               function killTime () {
                   clearInterval(timer);
                   //var t = 180; // 定义时间
                   $circle2.css('stroke-dasharray', long);
                   $text.text(_this.timeNumber + 's');
                   timer = setInterval(function () {
                       if(_this.timeNumber==0) {
                           clearInterval(timer);
//                           alert(123)
                           _this.$router.push({path:"/noaddsend"})
                       } else {
                           _this.timeNumber -= 1;
                           var e = Math.round(_this.timeNumber / 180 * long);
                           var test = e - long;
                           circle2.style.strokeDashoffset = test;
                           $text.text(_this.timeNumber + 's');
                       }
                   }, 1000);
               }
               killTime ();
           })
       },
       methods:{
           //点击确定的时候进行跳转
           completeRoute:function () {
               this.markFlag = false;
               this.markFlagsuccess = false;
               this.$router.push({path:"/send1"})
           },
           //点击显示隐藏
           showHiddle:function(way){
               if (way > 0){
                   this.markFlag = true;
                   this.markFlagcompelet = true;
               }else {
                   this.markFlag = false;
                   this.markFlagcompelet = false;
               }
           },
           //点击加价后显示隐藏
           compeletSend:function (way) {
               if (way > 0){
                   this.markFlag = true;
                   this.markFlagsuccess = true;
                   this.markFlagcompelet = false;
                   this.markFlagcompelet= false;
               }else {
                   this.markFlag = false;
                   this.markFlagcompelet = false;
               }

           },
           //取消订单后跳转
           quxiaodingdan:function () {
               this.$router.push({path:"/cancle"})
           },
           //后退
           back:function () {
               this.$router.go(-1)
           }
       },


   })
</script>