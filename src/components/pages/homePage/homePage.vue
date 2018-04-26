<template>
    <div class="home-page-container">
        <div class="home">首页</div>
    </div>
</template>

<script>
    export default {
        name: 'layout',
        data() {
            return {

            }
        },
        mounted(){

        },
        computed: {

        },
        components: {

        },
        methods:{
        }
    }
</script>

<style type="text/css" lang="less" scoped>
    .home-page-container{
        width:100%;
        overflow: hidden;
    }
    .home{
        width:300px;
        height: 300px;
        border-radius: 150px;
        background: #dda0dd;
        line-height: 300px;
        text-align: center;
        font-size: 30px;
        color: #fff;
        letter-spacing:4px;
        margin: 100px auto;
    }
</style>
