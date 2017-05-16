<template>
    <div id="orderinfo">
        <!-- 订单详情-首部 -->
        <header class="public-header">
            <a @click="back" class="back"></a>
            <h3 class="public-h3">订单详情</h3>
        </header>
        <!-- 订单详情-内容 -->
        <section class="public-content orderInfo-content">
            <div class="orderInfo-content-info">
                <div class="clearfix">
                    <div class="content-info-left fl">
                        <ul>
                            <li>订单编号</li>
                            <li>报修时间</li>
                            <li>地点</li>
                        </ul>
                    </div>
                    <div class="content-info-right fl">
                        <ul>
                            <li>123456789012</li>
                            <li>2016-09-10</li>
                            <li>杭州市西湖区百家园路</li>
                        </ul>
                    </div>
                </div>
                <div class="clearfix">
                    <div class="content-info-left fl">
                        <ul>
                            <li>发起人昵称</li>
                            <li>发起人手机号</li>
                            <li>工程师姓名</li>
                            <li>工程师工号</li>
                        </ul>
                    </div>
                    <div class="content-info-right fl">
                        <ul>
                            <li class="orange">小小小白菜</li>
                            <li>18752154521</li>
                            <li>张三</li>
                            <li>123456</li>
                        </ul>
                    </div>
                </div>
                <div class="clearfix">
                    <div class="content-info-left fl">
                        <ul>
                            <li>订单种类</li>
                            <li>用户发起问题</li>
                            <li>其他描述</li>
                            <li>工程师诊断</li>
                            <li>更换零件</li>
                        </ul>
                    </div>
                    <div class="content-info-right fl">
                        <ul>
                            <li>正常</li>
                            <li>电瓶坏了</li>
                            <li>一直响</li>
                            <li>没气了</li>
                            <li>电瓶型号be75v <span class="orange">1</span>个</li>
                        </ul>
                    </div>
                </div>
                <div class="clearfix">
                    <div class="content-info-left fl">
                        <ul>
                            <li>价格</li>
                            <li>付款方式</li>
                            <li>服务态度</li>
                            <li>上门速度</li>
                            <li>技术能力</li>
                            <li>追加评论</li>
                        </ul>
                    </div>
                    <div class="content-info-right fl">
                        <ul>
                            <li><span class="orange">200</span>元</li>
                            <li>线上支付</li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li>师傅修车技术非常棒！100个赞</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="public-submit">
                <span class="btn">发起售后</span>
            </div>
        </section>
    </div>
</template>

<script>
    export default({
        methods:{
            //后退
            back:function () {
                this.$router.push({path:"/first"})
            }
        }
    })
</script>