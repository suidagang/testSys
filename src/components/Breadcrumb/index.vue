<template>
    <el-breadcrumb class="app-breadcrumb" separator="/">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item :key="11">首页一下</el-breadcrumb-item>
            <el-breadcrumb-item :key="12">活动管理</el-breadcrumb-item>
            <el-breadcrumb-item :key="13">活动列表</el-breadcrumb-item>
            <el-breadcrumb-item :key="14">活动详情</el-breadcrumb-item>
        </transition-group>

    </el-breadcrumb>
</template>

<script>

    export default {
        created() {

        },
        data() {
            return {

            }
        },
        watch: {

        },
        methods: {
        }
    }
</script>

<style type="text/css" lang="less" scoped>
    /*.app-breadcrumb.el-breadcrumb {*/
        /*display: inline-block;*/
        /*font-size: 14px;*/
        /*line-height: 50px;*/
        /*margin-left: 10px;*/
    /*.no-redirect {*/
        /*color: #97a8be;*/
        /*cursor: text;*/
    /*}*/
    /*}*/

    .app-breadcrumb{
        font-size: 14px;
        line-height: 60px;
        margin-left: 20px;
        float: left;
        .no-redirect{
            color: #97a8be;
            cursor: text;
        }
    }
</style>
