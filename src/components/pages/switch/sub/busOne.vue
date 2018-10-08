
<template>
    <el-button type="primary" @click="addBus()">+</el-button>
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
            addBus(){
                let that = this;
                console.log("加");
                eventBus.$emit("addBus",1)
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
