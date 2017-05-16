<template>
    <div id="orderinfo">
        <!-- 订单详情-首部 -->
        <header class="public-header">
            <a @click="back" class="back"></a>
            <h3 class="public-h3">订单详情</h3>
            <router-link to="/second" class="message"></router-link>
        </header>
        <!-- 订单详情-内容 -->
        <section class="public-content orderInfo-content" style="overflow: scroll">
            <div class="orderInfo-content-info">
                <div class="clearfix">
                    <div class="content-info-left fl">
                        <ul>
                            <li>订单编号:</li>
                            <li>报修时间:</li>
                            <li>预约时间:</li>
                            <li>地点:</li>
                        </ul>
                    </div>
                    <div class="content-info-right fl">
                        <ul>
                            <li>{{order_no}}</li>
                            <li>{{send_time}}</li>
                            <li>{{yuyueTime}}</li>
                            <li>{{loc}}</li>
                        </ul>
                    </div>
                </div>
                <div class="clearfix">
                    <div class="content-info-left fl">
                        <ul>
                            <li>发起人昵称:</li>
                            <li>发起人手机号:</li>
                            <li>工程师姓名:</li>
                            <!--<li>工程师工号:</li>-->
                        </ul>
                    </div>
                    <div class="content-info-right fl">
                        <ul>
                            <li class="orange">{{userName}}</li>
                            <li>{{userNameNumber}}</li>
                            <li>{{teacherName}}</li>
                            <!--<li>{{teacherNumber}}</li>-->
                        </ul>
                    </div>
                </div>
                <div class="clearfix">
                    <div class="content-info-left fl">
                        <ul>
                            <li>订单种类</li>
                            <li>用户发起问题</li>
                            <li>其他描述</li>
                            <!--<li>工程师诊断</li>-->
                            <!--<li>更换零件</li>-->
                        </ul>
                    </div>
                    <div class="content-info-right fl">
                        <ul>
                            <li>{{dingdanType}}</li>
                            <li>{{userProblem}}</li>
                            <li>{{otherDescrition}}</li>
                            <!--<li>{{teacherzhenduan}}</li>-->
                            <!--<li>{{genghuan}}</li>-->
                        </ul>
                    </div>
                </div>
            </div>
            <!--<div class="public-submit">-->
                <!--<span class="btn" @click="route">发起售后</span>-->
            <!--</div>-->
        </section>
    </div>
</template>

<script>
    export default({
        data(){
          return{
              order_no:"",//订单编号
              send_time:"",//发起时间
              yuyueTime:"",//预约时间
              loc:"",//发起地点
              userName:"",//用户昵称
              userNameNumber:"",//用户手机号
              teacherName:"",//工程师名字
              teacherNumber:"",//工程师工号
              dingdanType:"",//订单种类
              userProblem:"",//用户发起问题
              otherDescrition:"",//其他描述
//              teacherzhenduan:"",//工程师诊断
//              genghuan:"",//更换零件
          }
        },
        methods:{
            //后退
            back:function () {
                this.$router.push({path:"/first"})
            },
            route:function () {
                this.$router.push({path:"/afterservice"})
            }
        },
        mounted:function () {
            var _this = this;
            var openId = isReplace()?sessionStorage.userDescription.openid:1;
            $.get(URL+"wx/getOrderDetail?orderNo="+sessionStorage.getItem("order_no"),function (res) {
                console.log(res.data);
                _this.order_no = sessionStorage.getItem("order_no");
                _this.send_time = res.data.orderDetail.send_time.substring(0,res.data.orderDetail.send_time.lastIndexOf(":"));
                _this.loc = res.data.orderDetail.loc;
                _this.userName = "lisi";//sessionStorage.getItem("userDescription.nickname")
                _this.userNameNumber = res.data.wxUser.tel;
                _this.teacherName = res.data.appUser.name;
                _this.dingdanType = dingdanType(res.data.type);
                _this.userProblem = formatDescription(res.data.orderDetail.fault_id,1);
                _this.otherDescrition = res.data.orderDetail.fault_description;
                _this.teacherNumber = res.data.appUser.job_no;
                _this.yuyueTime = res.data.orderRecord.update_time.substring(0,res.data.orderRecord.update_time.lastIndexOf(":"));

            });
//            $.get(URL+"wx/getRealTrouble?"+sessionStorage.getItem("order_no"),function (res) {
//                _this.teacherzhenduan = res.data.fault_description
//                _this.genghuan = formatDescription(res.data.fault_id,2);
//            });
        }
    })
</script>
<style>
    .content-info-right {
        width: 6.3rem;
        position: relative;
        left: 0.35rem;
    }
    li {
        list-style: none;
        overflow: hidden;
        white-space: nowrap;
    }
</style>