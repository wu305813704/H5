<template>
    <div id="map-address">
        <header class="map-header">
            <span>杭州</span>
            <input type="text" placeholder="你的维修地点在哪儿" v-model="msg">
            <router-link to="/first">取消</router-link>
        </header>
        <!-- 位置-内容 -->
        <section class="map-content">
            <ul></ul>
        </section>
        <!--位置-地图-->
        <div id="l-map" style="display: none;"></div>

    </div>
</template>
<script>
    export default({
        data(){
          return{
              msg:"",
          }  
    },
        mounted:function () {
//            // 百度地图API功能
//            var map = new BMap.Map("mappp");
//            map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);
//            var local = new BMap.LocalSearch(map, {
//                renderOptions:{
////                    map: map
//
//                }
//            });
//            local.search(this.msg);
            $(function () {
                //			var local = new BMap.LocalSearch(map, options);
                //			local.search("马来西亚");

                // 1.监听输入文字时间
                var $input = $('.map-header input');

                $input.on('input porpertychange', function () {
                    local.search($input.val());
                });
            });

            // 百度地图API功能
            var map = new BMap.Map("l-map");
            map.centerAndZoom(new BMap.Point(120.107114, 30.30704), 11);

            var options = {
                onSearchComplete: function(results){
                    if (local.getStatus() == BMAP_STATUS_SUCCESS){
                        // a用于存放包含查询信息的对象
                        var a = [];
                        // 返回当前页的结果数
                        for (var i = 0; i < results.getCurrentNumPois(); i ++){
                            var item = {
                                name : results.getPoi(i).title,
                                place : results.getPoi(i).address,
                                point : results.getPoi(i).point
                            };

                            a.push(item);
                        }
                        $('ul').empty();

                        for(var i=0; i< a.length; i++) {
                            var $li = $('<li></li>');
                            var item = '<p>'+a[i].name+'</p><span>'+a[i].place+'</span>';
                            $li.html(item);
                            // 把信息对象 JSON 字符串化，添加给自定义对象
                            $li.attr('data-info',JSON.stringify(a[i]));
                            $('ul').append($li);
                        };

                        $('ul li').on('click', function () {
                            var $info = JSON.parse($(this).attr('data-info'));
                            sessionStorage.setItem('name', $info.name);
                            sessionStorage.setItem('place', $info.place);
                            sessionStorage.setItem('lng', $info.point.lng);
                            sessionStorage.setItem('lat', $info.point.lat);
                            window.location = "index.html";
                        });

                    }
                }
            };
            var local = new BMap.LocalSearch(map, options);
        }
    })

</script>
<style type="text/css">
    /*body, html {width: 100%;height: 100%;margin:0;font-family:"微软雅黑";}*/
</style>