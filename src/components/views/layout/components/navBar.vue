<template>
    <div >
        <el-header style="text-align: right; font-size: 12px">
            <svg class="tst-iocns" aria-hidden="true">
                <use xlink:href="#icon-icon_navbar_fold"></use>
            </svg>
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>
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
        }
    }
</script>

<style type="text/css" lang="less" scoped>
    .tst-iocns{
        width:40px;
        height:40px;
        font-size: 40px;
    }
</style>
