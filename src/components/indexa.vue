<template>
    <el-container style="position:fixed;top: 0;left: 0;bottom: 0; right: 0;border: 1px solid #eee">
        <el-aside width="200px" style="background: #324157">
            <el-menu class="side-bar-box" mode="vertical"
                     :collapse-transition="false"
                     :show-timeout="200"
                     :default-active="$route.path"
                     :collapse="false"
                     background-color="#304156"
                     text-color="#bfcbd9"
                     active-text-color="#409EFF">
                <el-submenu index="1" class="el-menu-title-box">
                    <template slot="title"><i class="el-icon-message"></i>导航一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="2" class="el-menu-title-box">
                    <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4"  class="boxs">
                        <template slot="title" class="nest-menu">选项4</template>
                        <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="3" class="el-menu-title-box">
                    <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                    <el-menu-item index="3-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="4">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
                <el-menu-item index="100">
                    <i class="el-icon-document"></i>
                    <span slot="title">导航五</span>
                </el-menu-item>
                <el-menu-item index="6">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航六</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
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

            <el-main>
                <el-table :data="tableData">
                    <el-table-column prop="date" label="日期" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </el-container>
</template>


<style type="text/css" lang="less" scoped>


</style>

<script>
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        },
        computed: {

        }
    };
</script>
