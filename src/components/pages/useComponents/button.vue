<template>
    <div class="home-page-container">
        <div style="margin-bottom: 25px">
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </div>

        <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <div>
            <p>{{ animatedNumber }}</p>
        </div>
        <div class="animation-gsap">
            <div class="animation-gsap-box" ref="animationDom"></div>
        </div>
        <el-button type="primary" @click="restart()">重新开始</el-button>
        <el-button type="primary"  @click="pause()">暂停</el-button>
        <el-button type="primary"  @click="resume()">继续</el-button>
        <el-button type="primary"  @click="reverse()">反复</el-button>
    </div>
</template>

<script>
    //数字动画 npm install gsap --save-dev
    import TweenLite from "gsap";
    export default {
        name: 'layout',
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                number:520,
                tweenedNumber:0,
                tw:null
            }
        },
        mounted(){
            var that = this;
            function myFunction() {

                console.log("运动结束");

            };
            //两种获取dom的操作
//            TweenLite.to(that.$refs.animationDom, 5, {left:300, delay:3,ease:Elastic.easeOut, onComplete:myFunction});
            that.tw = TweenLite.to(
                    '.animation-gsap-box',//dom对象，在vue里也可能是data对象
                    20,//动画持续时间
                    {
                        left:300,
                        //delay:3,
                        ease:'easeOutStrong',//动画效果
                        onComplete:myFunction,//动画完成的回调函数
                        //paused:true,//暂定，设置了true，动画还没开始就暂停了
                    });
            TweenLite.to(this.$data, 5, { tweenedNumber: 530 });
        },
        watch: {
        },
        computed: {
            animatedNumber: function() {
                return this.tweenedNumber.toFixed(0);
            }
        },
        components: {

        },
        methods:{

            restart(){
                let that = this;
                that.tw.restart();
            },
            pause(){
                let that = this;
                that.tw.pause();
            },
            resume(){
                let that = this;
                that.tw.resume();
            },
            reverse(){
                let that = this;
                that.tw.reverse();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
        }
    }
</script>

<style type="text/css" lang="less" scoped>
    .home-page-container{
        width:100%;
        overflow: hidden;
        padding: 100px;
        color: red;
    }
    .animation-gsap{
        position: relative;
        height:100px;
        width:100%;
        overflow: hidden;
        margin-top: 80px;
    }
    .animation-gsap-box{
        position: absolute;
        left:0;
        top:0;
        height:100px;
        width: 100px;
        border-radius: 50px;
        background: #feaec4;

    }
</style>
