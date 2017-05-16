<template>
    <div id="reqairecurrent">
        <!-- 当前订单-首部 -->
        	<header class="current-header">
        		<a href="index.html" class="back"></a>
        		<h3 class="public-h3">当前订单</h3>
        		<a href="messageCenter.html" class="message"></a>
        	</header>
        	<!-- 当前订单-内容 -->
        	<section class="public-content">
        		<div class="currentInfo">
        			<img src="../../img/order-icon.png" alt="">
        			<ul>
        				<li><span>预约时间</span>2016-08-11</li>
        				<li><span>预约地点</span>杭州市西湖区百家园路79号</li>
        				<li><span>问题类型</span>其他</li>
        				<li><span>其他描述</span>车开不了了，不知道什么问题</li>
        			</ul>
        		</div>
        		<div class="currentSubmit">
        			<!--<a href="tel:+400-800-8888" class="btn green">400-800-8888</a>-->
        			<a href="tel://400-800-8888" class="btn green">400-800-8888</a>
        			<a href="cancel.html" class="btn white">取消订单</a>
        		</div>
        	</section>
        	<!-- 当前订单-弹出层 -->
        	<div class="mask">
        		<div class="dispat-confirm center">
        			<p class="public-alert-p">工程师（<span>工号888888</span>）<br>已接单</p>
        			<div class="confirm-btn">
        				<span class="public-alert-btn">确定</span>
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
			}
		},
		mounted:function () {
			this.$http.get("",{},function () {

            }).then(function (res) {
				if(state == 0){
				    this.markFlag = true;
				    this.markFlagsuccess = true;
				}
            })
        },
		methods:{
		    hiddle:function () {
                this.markFlag = false;
                this.markFlagsuccess = false;
                this.$router.push({path:"/first"})
            }
		}
	})
</script>
<style>
	.currentInfo img{
		position: relative;
		right: -8.1rem;
		top: 0;
		width: 1rem;
	}
</style>