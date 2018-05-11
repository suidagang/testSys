<template>
    <div class="home-page-container">
        <div class="home">首页</div>
    </div>
</template>

<script>

    //import axios from 'axios'
    export default {
        name: 'layout',
        data() {
            return {
                foods:null,

            }
        },
        mounted(){
            var that = this;
            this.setNewsApi();
        },
        computed: {

        },
        components: {

        },
        methods:{
            setNewsApi: function() {
                var that = this;
                console.log("请求");
                this.$post('/msg').then(res => {
                    console.log('调用封装后的axios成功');
                    console.log(res.data)

                });
//                axios.post('/msg')
//                .then(function(response){
//                    console.log(response.data)
//                })
            },
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
