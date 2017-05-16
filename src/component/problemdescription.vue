<template>
    <div id="problemdescription">
        <!-- 问题描述-首部 -->
        <header class="problem-header">
            <a class="back" @click="back"></a>
            <h3 class="fl">问题描述</h3>
            <router-link to="/second" class="message"></router-link>
        </header>
        <!-- 问题描述-内容 -->
        <section class="problem-content">
            <div class="content-list">
                <ul>
                    <li><span class="checkbox"></span><p class="ppp">车不走了</p></li>
                    <li><span class="checkbox"></span><p class="ppp">车轮故障了</p></li>
                    <li><span class="checkbox"></span><p class="ppp">刹车系统故障</p></li>
                    <li><span class="checkbox"></span><p class="ppp">电路故障</p></li>
                    <li><span class="checkbox"></span><p class="ppp">锁故障</p></li>
                    <li><span class="checkbox"></span><p class="ppp">更换电池</p></li>
                    <li><span class="checkbox"></span><p class="ppp">更换充电器</p></li>
                    <li><span class="checkbox"></span><p class="ppp">更换塑件</p></li>
                    <li><span class="checkbox"></span><p class="ppp">塑料破损</p></li>
                    <li><span class="checkbox"></span><p class="ppp">车辆异响</p></li>
                    <li><span class="checkbox"></span><p class="ppp">其他</p></li>
                </ul>
            </div>
            <div class="submit">
                <span class="btn" @click="submit">确认</span>
            </div>
        </section>
    </div>
</template>

<script>
    export default{
        methods:{
            //提交信息
          submit:function () {
              var classOn = $("li").find(".on").next();
              var liSpan = $("li span");
              var classOnInnerHtml =[];
              var classNumber = [];
              for (var i = 0;i < classOn.length;i++){
                  classOnInnerHtml.push(classOn[i].innerHTML);
              }
              for(var i = 0;i < liSpan.length;i++){
                  if (liSpan[i].classList.length == 2){
                      classNumber.push(i+1);
                  }
              }
              var numberQianduan = classOnInnerHtml.join("/")
              var numberHoutai = classNumber.join("-")
              sessionStorage.setItem("problem",numberQianduan);
              sessionStorage.setItem("problemId",numberHoutai);
              console.log(numberQianduan)
              this.$router.go(-1)
          },
            back:function () {
                this.$router.push({path:"/first"})
            }
        },
        mounted:function () {
           $(function () {
               var arr1 = [];
               var arr = [];
               $('li').click(select);
               function select(){
                   $(this).find('span').toggleClass('on');
                   var inner = $(this).find('p').text();
                   var index = $("li").index($(this));
                   arr.push(inner)
                   arr1.push(index);
                   var str = arr.join(",");
               };
           })
        },
    }

</script>