
<template>
    <div class="home-page-container">
        <el-switch
                v-model="value3"
                active-text="按月付费"
                inactive-text="按年付费">
        </el-switch>
        <el-switch
                style="display: block"
                v-model="value4"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="按月付费"
                inactive-text="按年付费">
        </el-switch>
        <sui-radio v-model="radio" :value="1">单选1</sui-radio>
        <sui-radio v-model="radio" :value="2">单选2</sui-radio>
        <sui-radio v-model="radio" :value="3">单选3</sui-radio>
        <el-button type="primary" icon="el-icon-edit" @click="getRadio()"></el-button>
        <div style="margin-top: 30px;">
            <div style="line-height: 40px;">eventbus总线解决兄弟组件通信</div>
            <bus-one></bus-one>
            <span style="margin:10px;">{{busVal}}</span>
            <bus-two></bus-two>
        </div>

    </div>
</template>

<script>
    import suiRadio from '../../radio/commonRadio.vue'
    import busOne from './sub/busOne.vue'
    import busTwo from './sub/busTwo.vue'
    export default {
        name: 'layout',
        data() {
            return {
                value3: true,
                value4: true,
                radio:1,
                busVal:0
            }
        },
        mounted(){
            let  that = this;
            eventBus.$on("addBus",function(val){
                that.$nextTick(function(){
                    that.busVal += val;
                });
            });
            eventBus.$on("cutBus",function(val){
                that.$nextTick(function(){
                    that.busVal -= val;
                });
            });
        },
        computed: {

        },
        components: {
            suiRadio,
            busOne,
            busTwo
        },
        methods:{
            getRadio(){
                let that = this;
                console.log(that.radio)
            }
        }
    }
</script>

<style type="text/css" lang="less" scoped>
    .home-page-container{
        width:100%;
        overflow: hidden;
        padding: 100px;
    }
</style>
