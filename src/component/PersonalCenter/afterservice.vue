<template>
    <div id="afterservice">
       <!-- 发起售后-首部 -->
       	<header class="public-header">
       		<a href="index.html" class="back"></a>
       		<h3 class="public-h3">发起售后</h3>
       	</header>
       	<!-- 发起售后-内容 -->
       	<section class="public-content afService-content">
       		<div class="afService-content-info">
       			<ul>
       				<li><p><span class="gray">发起时间</span>2016-01-01</p></li>
       				<li><a href="#"><span class="gray">问题类型</span>没气了</a></li>
       				<li><p><span class="gray">其他描述</span>没气了</p></li>
					<li>
						<p>
							<span class="gray">故障图片</span>机器换了
						</p>
						<p>
							<img src="../../img/jiqi.png" alt="">
						</p>
					</li>
       			</ul>
       		</div>
       		<div class="public-submit">
       			<span class="btn" @click="hiddle_show(2)">发起</span>
       		</div>
       	</section>
       	<!-- 发起售后-遮罩层 -->
       	<div class="mask" v-show="markFlag" style="display: block;">
       		<div class="public-alert-box afService-confirm" v-show="markFlagqueren" style="display: block">
       			<p>确认发布</p>
       			<div>
       				<a href="#" class="public-alert-btn1" @click="hiddle_show(-1)">取消</a>
       				<a href="#" class="public-alert-btn2" @click="hiddle_show(3)">确认</a>
       			</div>
       		</div>
       		<div class="public-alert-box afService-confirm" v-show="markFlagshenhe" style="display: block">
       			<p>客服审核中，请稍候~</p>
       			<div>
       				<a href="#" class="public-alert-btn1" @click="hiddle_show(-1)">取消</a>
       				<a href="#" class="public-alert-btn2" @click="hiddle_show(4)">确认</a>
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
			 markFlagqueren:false,
			 markFlagshenhe:false
			}
		},
		methods:{
            hiddle_show:function (way) {
				if(way == 1){
				    this.markFlag = true;
				    this.markFlagqueren= true
				}else if(way == 2){
                    this.markFlag = true;
                    this.markFlagqueren= false;
                    this.markFlagshenhe= true;
				}else if(way == -1){
                    this.markFlag=false;
					this.markFlagqueren=false;
                    this.markFlagshenhe=false
				}else if(way == 3){
                    this.markFlag=false;
                    this.markFlagqueren=false;
                    this.markFlagshenhe=false;
                    this.$router.push({path:"/reqairecurrent"})
				} else if(way == 4){
                    this.markFlag=false;
                    this.markFlagqueren=false;
                    this.markFlagshenhe=false;
                    this.$router.push({path:"/reqairecurrent2"})
                }
            }
        }
	})
</script>
<style>
	.afService-content-info img{
		width: 2rem;
		height:2rem;
	}
</style>