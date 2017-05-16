<template>
    <div id="repaorder">
        <!-- 修车订单-首部 -->
        	<header class="public-header">
        		<a href="index.html" class="back"></a>
        		<h3 class="public-h3">修车订单</h3>
        	</header>
        	<!-- 修车订单-内容 -->
        	<section class="public-content repaOrder-content">
        		<div class="repaOrder-content-tab clearfix">
        			<span class="fl on" @click="Zhuanhuan(1)">当前订单</span>
        			<span class="fr" @click="Zhuanhuan(-1)">历史订单</span>
        		</div>
        		<!-- 当前订单 -->
        		<div class="repaOrder-content-list" style="display: block" v-show="markFlagdangqian">
        			<!--<div class="public-box" style="display: none">-->
        				<!--&lt;!&ndash;<p class="in-repaire"><span class="gray">故障：</span>电瓶坏了</p>&ndash;&gt;-->
        				<!--&lt;!&ndash;<p class="in-repaire-eg">张三</p>&ndash;&gt;-->
        				<!--&lt;!&ndash;<img src="" alt="">&ndash;&gt;-->
        			<!--</div>-->
        			<div class="public-box">
        				<p><span class="gray">故障：</span>电瓶坏了</p>
        				<p><span class="gray">预约时间：</span>2016-09-11 15:10</p>
        				<p><span class="gray">预约地点：</span>杭州市西湖区百家园路6号</p>
        			</div>
        			<div class="public-box">
        				<p><span class="gray">故障：</span>电瓶坏了</p>
        				<p><span class="gray">预约时间：</span>2016-09-11 15:10</p>
        				<p><span class="gray">预约地点：</span>杭州市西湖区百家园路6号<span class="fr blue">审核中</span></p>
        			</div>
        			<div class="public-box">
        				<p><span class="gray">故障：</span>电瓶坏了</p>
        				<p><span class="gray">预约时间：</span>2016-09-11 15:10</p>
        				<p><span class="gray">预约地点：</span>杭州市西湖区百家园路6号<span class="fr green">审核通过</span></p>
        			</div>
        			<div class="public-box">
        				<p><span class="gray">故障：</span>电瓶坏了</p>
        				<p><span class="gray">预约时间：</span>2016-09-11 15:10</p>
        				<p><span class="gray">预约地点：</span>杭州市西湖区百家园路6号<span class="fr red">审核未通过</span></p>
        			</div>
        		</div>
        		<!-- 历史订单 -->
        		<div class="repaOrder-history-list" v-show="markFlaglishi">
        			<p>9月</p>
        			<div class="public-box">
        				<p><span class="gray">订单编号：</span>123456789012</p>
        				<a href="#"><span class="gray">下单时间：</span>2016-09-11</a>
        				<p><span class="gray">订单种类：</span><span class="orange">正常</span></p>
        			</div>
        			<div class="public-box">
        				<p><span class="gray">订单编号：</span>123456789012</p>
        				<a href="#"><span class="gray">下单时间：</span>2016-09-11</a>
        				<p><span class="gray">订单种类：</span><span class="orange">正常</span></p>
        			</div>
        			<div class="public-box">
        				<p><span class="gray">订单编号：</span>123456789012</p>
        				<a href="#"><span class="gray">下单时间：</span>2016-09-11</a>
        				<p><span class="gray">订单种类：</span><span class="orange">正常</span></p>
        			</div>
        			<div class="public-box">
        				<p><span class="gray">订单编号：</span>123456789012</p>
        				<a href="#"><span class="gray">下单时间：</span>2016-09-11</a>
        				<p><span class="gray">订单种类：</span><span class="orange">正常</span></p>
        			</div>
        			<div class="public-box">
        				<p><span class="gray">订单编号：</span>123456789012</p>
        				<a href="#"><span class="gray">下单时间：</span>2016-09-11</a>
        				<p><span class="gray">订单种类：</span><span class="orange">正常</span></p>
        			</div>
        		</div>
        	</section>
    </div>
</template>

<script>
	export default({
		data(){
		   return{
               markFlagdangqian:true,
			   markFlaglishi:false,
		   }
				
		},
		methods:{
		    Zhuanhuan:function (way) {
				if(way == 1){
                    $(".repaOrder-content-tab span").toggleClass("on");
				    this.markFlagdangqian = true
                    this.markFlaglishi = false
				}else if(way == -1){
                    $(".repaOrder-content-tab span").toggleClass("on");
				    this.markFlaglishi = true
                    this.markFlagdangqian = false
				}
            },
			route:function () {
				this.$router.go(-1);
            }
		}
	})
</script>