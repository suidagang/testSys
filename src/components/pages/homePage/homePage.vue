<template>
    <div class="home-page-container">
        <div class="home">首页</div>
        <div class="i18n-box">{{$t("message.title")}}</div>
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
            let that = this;
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
                this.$fetch('/api/sex').then(res => {
                    console.log('调用封装后的axios成功');
                    console.log(res)

                });
                this.$post('/api/goods')
                .then(function(response){
                    console.log(response.data)
                })
            },
        }
    }
</script>

<style type="text/css" lang="less" scoped>
    @nice-blue: #5B83AD;
    @light-blue:@nice-blue + #111;
    /*混合（Mixins）*/
    .bordered {
        border-top: dotted 1px black;
        border-bottom: solid 2px black;
    }
    .i18n-box{
        width:100px;
        .bordered;
    }
    .home-page-container{
        width:100%;
        overflow: hidden;
    }
    .home{
        width:300px;
        height: 300px;
        border-radius: 150px;
        background: #dda0dd;
        /*background:@light-blue;*/
        line-height: 300px;
        text-align: center;
        font-size: 30px;
        color: #fff;
        letter-spacing:4px;
        margin: 100px auto;
    }
</style>
