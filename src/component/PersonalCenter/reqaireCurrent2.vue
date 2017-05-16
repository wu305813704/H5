<template>
    <div id="reqairecurrent2">
        <!-- 当前订单2-首部 -->
        	<header class="current-header">
        		<a href="index.html" class="back"></a>
        		<h3 class="public-h3">当前订单</h3>
        		<a href="#" class="message"></a>
        	</header>
        	<!-- 当前订单2-内容 -->
        	<section class="public-content">
        		<div class="currentInfo current2-info">
        			<img src="../../img/order-icon.png" alt="">
        			<ul>
        				<li><span>预约时间</span>2016-08-11</li>
        				<li><span>预约地点</span>杭州市西湖区百家园路79号</li>
        				<li><span>问题类型</span>其他</li>
        				<li class="clearfix"><span class="fl">其他描述</span><img class="fl" src="img/test.png" alt=""><img class="fl" src="img/test.png" alt=""></li>
        			</ul>
        		</div>
        		<div class="current2-info currentSubmit">
        			<span class="btn" @click="hiddle_show(1)">审核中</span>
        			<a href="400-800-8888" class="btn green">400-800-8888</a>
        			<span class="btn white" @click="hiddle_show(3)">取消订单</span>
        		</div>
        	</section>
        	<!-- 当前订单2-弹出层 -->
        	<div class="mask" v-show="markFlag" style="display: block">
        		<div class="repaire2-pass public-alert-box" v-show="markFlagshenhe" style="display: block">
        			<p>审核通过~</p>
        			<div>
        				<a href="#" class="public-alert-btn3" @click="hiddle_show(-1)">确定</a>
        			</div>
        		</div>
        		<div class="repaire2-refuse public-alert-box" v-show="markFlagbaoqian" style="display: block">
        			<p>抱歉，您的售后申请未<br>通过审核</p>
        			<div>
        				<a href="#" class="public-alert-btn3" @click="hiddle_show(-1)">确定</a>
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
                markFlagshenhe:false,
				markFlagbaoqian:false,
			}
		},
		methods:{
            hiddle_show:function (way) {
                if(way == 1){
                    this.markFlag = true;
                    this.markFlagshenhe= true
                }else if(way == 2){
                    this.markFlag = true;
                    this.markFlagqueren= false;
                    this.markFlagbaoqian= true;
                }else if(way == -1){
                    this.markFlag = false;
                    this.markFlagqueren= false;
                    this.markFlagbaoqian= false;
                    this.$router.push({path:"/reqairecurrent3"})
				}
                else if(way == 3){
                    this.$router.push({path:"/cancle"})
                }
            }
		}
	})
</script>