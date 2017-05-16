<template>
    <div id="send1">
        <!-- 人工派单-首部 -->
        <header class="send-header">
            <a href="index.html" class="back"></a>
            <h3 class="public-h3">人工派单中</h3>
            <router-link to="/second" class="message"></router-link>
        </header>
        <!-- 人工派单-内容 -->
        <section class="public-content">
            <div class="send-info">
                <img src="../img/send-timer.png" alt="">
                <p>周围维修工程师繁忙，正在为您<br><span>人工派单</span>，请稍后...</p>
                <p>为了节省您的时间您可以<span>加价</span>后<br>重新下单~</p>
            </div>
            <div class="send-submit">
                <span class="btn" @click="showHiddle(1)">加价</span>
                <a href="tel:+400-881-7752" class="btn green" style="margin-bottom: 0.266667rem;">400-881-7752</a>
                <a  class="btn white" style="margin-bottom: 0.266667rem;" @click="quxiaodingdan">取消订单</a>
            </div>
        </section>
        <!-- 人工派单-弹出层 -->
        <div class="mask" style="display: block" v-show="markFlag">
            <!-- 自动派单-加价成功 -->
            <div class="dispat-up center" style="display: block" v-show="markFlagsuccess">
                <p class="public-alert-p">加价成功，订单重新发送~</p>
                <div class="up-btn">
                    <span class="public-alert-btn" @click="compeletSend(-1)">确定</span>
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
        data:function () {
            return{
                markFlag:false,
                markFlagsuccess:false,
                markFlagcompelet:false,
                markAdd:false
            }
        },
        methods:{
            //控制显示隐藏
            showHiddle:function(way){
                if (way > 0){
                    this.markFlag = true;
                    this.markFlagcompelet = true;
                }else {
                    this.markFlag = false;
                    this.markFlagcompelet = false;
                }
            },
            //加价完成时的显示隐藏
            compeletSend:function (way) {
                if (way > 0){
                    this.markFlag = true;
                    this.markFlagsuccess = true;
                    this.markFlagcompelet = false;
                    this.markFlagcompelet= false;

                }else {
                    this.markFlag = false;
                    this.markFlagcompelet = false;
                    this.$router.push({path:"/send1"})
                }

            },
            //取消订单
            quxiaodingdan:function () {
                this.$router.push({path:"/cancle"})
            },
            //后退
            back:function () {
                this.$router.go(-1)
            }
        }
    })
</script>