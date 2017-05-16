<template>
    <div id="cancle">
        <!-- 取消原因-首部 -->
        <header class="cancel-header">
            <a href="index.html" class="back"></a>
            <h3 class="public-h3">取消原因</h3>
            <a href="messageCenter.html" class="message"></a>
        </header>
        <!-- 取消原因-内容 -->
        <section class="public-content">
            <div class="cancel-reason">
                <ul>
                    <li><span></span>故障已排除</li>
                    <li><span></span>已找到其他维修店</li>
                    <li><span></span>维修工告诉我需要等很长时间</li>
                    <li><span></span>维修工态度恶劣、我取消服务</li>
                    <li><span></span>维修工拒绝提供服务</li>
                </ul>
            </div>
            <div class="cancel-submit">
                <a class="btn" @click="compelet">确认</a>
            </div>
        </section>
    </div>
</template>

<script>
    export default({
        mounted:function () {
            $(function(){
                // 1.点击方框切换选中状态
                var spans = $('li span');

                spans.on('click', function () {
                    $(this).toggleClass('on');
                });

                // 2.点击确认，向服务器发送取消原因，跳转到 index
//                var $confirm = $('.cancel-submit .btn');
//                $confirm.on('click', function () {
//                    // 发送 ajax 请求
//
//                    window.location = 'index.html';
//                });
            })
        },
        methods:{
            //点击确认的时候发送请求
            compelet:function () {
                // 发送 ajax 请求
                this.$router.push({path:"/first"})
            }
        }
    })
</script>