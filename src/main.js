import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from "vue-resource"

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

//定义组件，也可以像教程之前交的方法从别的文件引入
import  First from "./component/firstcomponent.vue"
import secondcomponent from "./component/secondcomponent.vue"
import mapaddresscomponent from  "./component/mapaddresscomponent.vue"
import problemdescription from "./component/problemdescription.vue"
import dispat from  "./component/dispat.vue"
import send1 from  "./component/send1.vue"
import cancle from  "./component/cancel.vue"
import orderinfo from  "./component/orderinfo.vue"
import noaddsend from  "./component/noaddsend.vue"

//创建一个路由器实例
//并配置路由规则
const router = new VueRouter({
    mode: "history",
    base: __dirname,
    routes: [
        {
            path: "/first",
            component: First
        },
        {
            path: "/mapaddresscomponent",
            component: mapaddresscomponent
        },
        {
            path: "/second",
            component: secondcomponent
        },
        {
            path: "/send1",
            component: send1
        },
        {
            path: "/cancle",
            component: cancle
        },
        {
            path: "/orderinfo",
            component: orderinfo
        },
        {
            path: "/noaddsend",
            component: noaddsend
        },
        {
            path: "/dispat",
            component: dispat
        },
        {
            path: "/problemdescription",
            component: problemdescription
        },
        {
            path: "*",
            redirect: '/first'
        }
    ]
});
//现在我们可以启动应用了
//路由器会创建一个App实例，并且挂载到选择符#app匹配的元素上。


const app = new Vue({
    router: router,
    render: h => h(App),
    mounted: function () {
        setTimeout(function () {
        },3000)
    },
    methods:{
    }
}).$mount("#app");
