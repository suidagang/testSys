
<template>
    <el-button type="primary" @click="cutBus()">-</el-button>
</template>

<script>
    export default {
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
            cutBus(){
                let that = this;
                console.log("减");
                eventBus.$emit("cutBus",1)
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
