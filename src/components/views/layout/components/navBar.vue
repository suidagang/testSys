<template>
    <div >
        <el-header style="text-align: right; font-size: 12px;line-height: 60px">
            <svg class="tst-iocns" aria-hidden="true" @click="toggleSideBar()">
                <use xlink:href="#icon-icon_navbar_fold"></use>
            </svg>
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
        </el-header>
    </div>
</template>

<script>
    export default {
        name: 'honePage',
        data() {
            return {
                isCollapse: false,
            }
        },
        mounted(){

        },
        methods:{
            toggleSideBar () {
                var that = this;
                that.$store.dispatch('toggleSideBar')
            }
        }
    }
</script>

<style type="text/css" lang="less" scoped>
    .tst-iocns{
        width:20px;
        height:20px;
        font-size: 20px;
        float: left;
        margin-top: 20px;
    }
</style>
