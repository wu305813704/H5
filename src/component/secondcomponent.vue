<template>
    <div id="secondcomponent">
        <!-- 消息中心-首部 -->
        <header class="public-header">
            <router-link to="/first" class="back"></router-link>
            <h3 class="public-h3">消息中心</h3>
        </header>
        <!-- 消息中心-内容 -->
        <section class="public-content message-content">
            <div>
                <ul>
                    <li><a href="#" class="clearfix" @click="messagedescription">
                        <img src="../img/message-content1.png" alt="">
                        <div class="fl">
                            <h3>订单消息</h3>
                            <p class="gray">订单已接收，请您耐心等待！</p>
                        </div>
                        <p class="fr gray">2016-01-01</p>
                    </a></li>
                    <li><a href="#" class="clearfix">
                        <img src="../img/message-content2.png" alt="">
                        <div class="fl">
                            <h3>订单消息</h3>
                            <p class="gray">订单已接收，请您耐心等待！</p>
                        </div>
                        <p class="fr gray">2016-01-01</p>
                    </a></li>
                    <li><a href="#" class="clearfix">
                        <img src="../img/message-content3.png" alt="">
                        <div class="fl">
                            <h3>订单消息</h3>
                            <p class="gray">订单已接收，请您耐心等待！</p>
                        </div>
                        <p class="fr gray">2016-01-01</p>
                    </a></li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
export default({
   methods:{
       //具体某个消息的查看
       messagedescription:function () {
           this.$router.push({path:"/orderinfo"})
       }
   }
})
</script>
