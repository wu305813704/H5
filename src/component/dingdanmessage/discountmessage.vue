<template>
    <div id="ordermessage">
        <!-- 订单消息-首部 -->
        <header class="public-header">
            <a href="javascript:;" class="back" @click="back"></a>
            <h3 class="public-h3">订单消息</h3>
        </header>
        <!-- 订单消息-内容 -->
        <section class="public-content orderMessage-content">
            <div>
                <ul>
                    <li class="clearfix">
                        <div class="fl">
                            <h3>您有可领取的优惠券</h3>
                            <p class="gray">一张优惠券放入账户，注意查收！</p>
                        </div>
                        <p class="fr gray">14:39</p>
                    </li>
                    <li class="clearfix">
                        <div  class="fl">
                            <h3>您有可领取的优惠券</h3>
                            <p class="gray">一张优惠券放入账户，注意查收！</p>
                        </div>
                        <p class="fr gray">14:39</p>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
    export default({
        methods:{
            back:function () {
                this.$router.go(-2)
            }
        }
    })
</script>