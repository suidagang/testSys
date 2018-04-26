<template>
    <div class="home-page-container">
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
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
        padding: 100px;
    }

</style>
