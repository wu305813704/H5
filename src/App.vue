<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg: "/dispat"
            }
        },
        mounted: function () {
            let _this = this;
            setTimeout(function () {
                alert(_this.msg)
                _this.msg = "/cancle";
            }, 5000)
            $("#li").click(function () {
                alert(1243312431254)
            });
            this.$on("popwindow", function (data) {
                alert(data);
            })
        },
        methods: {
        }
    }

</script>

<style>

</style>
