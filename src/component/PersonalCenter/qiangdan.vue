<template>
    <div id="qiangdan">
        <!-- 抢单成功界面 -->
        <header class="public-header">
            <a href="index.html" class="back"></a>
            <h3 class="public-h3">当前订单</h3>
            <a href="#" class="message"></a>
        </header>
        <!-- 抢单成功界面1-内容 -->
        <section class="public-content1">
            <div class="engineer-info public-box">
                <img src="img/in-repaire.png" alt="">
                <div class="engineer-name">
                    <p>张三</p>
                </div>
                <ul>
                    <li><p><span>工号</span>888888</p></li>
                    <li><p><span>电话</span>123842888888</p></li>
                </ul>
            </div>

            <!--<div class="fault-info public-box">-->
            <!--<ul>-->
            <!--<li><span style="color: #fd8b04;">故障信息</span></li>-->
            <!--<li><p><span>故障类型</span>电瓶坏了</p></li>-->
            <!--<li><p><span>故障类型</span>电瓶坏了</p></li>-->
            <!--<li><p><span>故障类型</span>电瓶坏了</p></li>-->
            <!--<li><p><span>故障类型</span>电瓶坏了</p></li>-->
            <!--<li><p><span>故障类型</span>电瓶坏了</p></li>-->
            <!--</ul>-->
            <!--</div>-->
        </section>
        <div id="map-container">
            <div id="allmap"></div>
        </div>
        <div class="repaire1-submit">
            <span class="btn white" @click="hiddle_show(3)">取消订单</span>
        </div>
        <!-- 当前订单1-弹出层 -->
        <div class="mask">
            <div class="repaire1-check public-alert-box">
                <p>确认发起订单吗？</p>
                <div>
                    <a href="javascript:;" class="public-alert-btn1">取消</a >
                    <a href="#" class="public-alert-btn2">确定</a>
                </div>
            </div>
            <div class="repaire1-lack public-alert-box">
                <p>工程师紧缺，正在为您<br>人工调配，请稍候~</p>
                <div>
                    <a href="#" class="public-alert-btn3">确认</a>
                </div>
            </div>
            <div class="repaire1-continue public-alert-box">
                <p>订单继续~</p>
                <div>
                    <a href="#" class="public-alert-btn3">确认</a>
                </div>
            </div>
            <div class="repaire1-other public-alert-box">
                <p>改派其他工程师进行维<br>修，请稍候~</p>
                <div>
                    <a href="#" class="public-alert-btn3">确认</a>
                </div>
            </div>
            <div class="repaire1-going public-alert-box">
                <p>已为您重新改派，工程师<br>正在马不停蹄赶来~</p>
                <div>
                    <a href="#" class="public-alert-btn3">确认</a>
                </div>
            </div>
            <div class="repaire1-order public-alert-box">
                <p>工程师发起预约单，<br>请确认~</p>
                <div>
                    <a href="#" class="public-alert-btn1">取消</a>
                    <a href="#" class="public-alert-btn2">确认</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default({
        data(){
            return{
                longitude:"",
                latitude:"",
            }
        },
        mounted:function () {
            this.longitude = sessionStorage.getItem("pointLng");
            this.latitude = sessionStorage.getItem("pointLat")
            // 百度地图API功能
            var map = new BMap.Map("allmap");
            var point = new BMap.Point(120.107185, 30.307036);
            var myIcon0 = new BMap.Icon("http://developer.baidu.com/map/jsdemo/img/fox.gif", new BMap.Size(300, 157));
            map.centerAndZoom(point, 15);

            //创建小狐狸
            var pt = new BMap.Point(this.longitude, this.latitude);
            var myIcon = new BMap.Icon("http://api.map.baidu.com/img/markers.png", new BMap.Size(23, 25));
            var marker1 = new BNap.Marker(point,{icon:myIcon0})
            var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
            map.addOverlay(marker2);              // 将标注添加到地图中
        }
    })
</script>

<style>
    .public-content1 {
        width: 100%;
        padding-top: 1.226667rem;
        background-color: #f5f5f5;
        position: relative;
        z-index: 1;
    }
</style>