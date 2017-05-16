<template>
    <div id="allmap" :style="mapStyle" >
        <!--<img :src="aaa" alt="">-->
    </div>
</template>
<script>
//    import aaa from "../img/index-user-close.png"
    export default{
        data:function(){
            return{
                //地图宽高
                mapStyle:{
                    width:'100%',
                    height:"100%"
                },
            }
        },
        props:{
// 地图在该视图上的高度
//            mapHeight:{
//                type:Number,
//            default:500
//            },
// 经度
            longitude:"",
//                {
//                type:Number,
//            default:116.404
//            },
// 纬度
            latitude:"",
//                {
//                type:Number,
//            default:39.915
//            },
            description: "",
//                {
//                type:String,
//            default:'天安门'
//            }
        },

        mounted:function (){
            var map = new BMap.Map("allmap");
            var point = new BMap.Point(this.longitude,this.latitude);
            map.enableScrollWheelZoom(true);
//            var marker =newBMap.Marker(point);
//            map.addOverlay(marker);
            map.centerAndZoom(point,15);
            var geolocation = new BMap.Geolocation()
            geolocation.getCurrentPosition(function(r){
                if(this.getStatus() == BMAP_STATUS_SUCCESS){
                    var mk = new BMap.Marker(r.point);
                    map.addOverlay(mk);
                    map.panTo(r.point);
                    console.log(r.point.lng);
                    console.log(r.point.lat);
                    var geoc = new BMap.Geocoder();
                    geoc.getLocation(r.point, function (rs) {
                        var addComp = rs.addressComponents;
//                        alert(addComp.city + addComp.district + addComp.street + addComp.streetNumber);
                        console.log(addComp.city + addComp.district + addComp.street + addComp.streetNumber);
                    });
                }
                else {
                    alert('failed'+this.getStatus());
                }
                var opts ={
                    width :250,
                    height:75,
                    title :"地址：",
                }
                var infoWindow =new BMap.InfoWindow(this.description, opts);// 创建信息窗口对象

                mk.addEventListener("click",function(){
                    map.openInfoWindow(infoWindow,point);
                });
                map.enableScrollWheelZoom(true);
                map.openInfoWindow(infoWindow,point);//开启信息窗口
            },{enableHighAccuracy:false });
// 信息窗的配置信息
//            var opts ={
//                width :250,
//                height:75,
//                title :"地址：",
//            }
//            var infoWindow =new BMap.InfoWindow(this.description, opts);// 创建信息窗口对象
//            mk.addEventListener("click",function(){
//                map.openInfoWindow(infoWindow,point);
//            });
//            map.enableScrollWheelZoom(true);
//            map.openInfoWindow(infoWindow,point);//开启信息窗口
        }
//        },

    }
</script>
<style>

</style>