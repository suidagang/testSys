<template>
    <div class="app-wrapper" :class="{hideSidebar:isCollapse}">
        <div class="sidebar-container">
            <el-menu class="side-bar-box" mode="vertical"
                    :collapse="isCollapse"
                    background-color="#304156"
                    text-color="#bfcbd9"
                    active-text-color="#409EFF">
                <template v-for="items in barMenu" >
                    <el-submenu  :index="items.index" v-if="items.children.length>0" class="el-menu-title-box" >
                        <template slot="title">
                            <i :class="items.icons"></i>
                            <span>{{items.name}}</span>
                        </template>
                        <template v-for = "item in items.children" >
                            <el-menu-item :index="item.index" v-if="item.children.length<=0">{{item.name}}</el-menu-item>
                            <el-submenu class="boxs" :index="item.index" v-if="item.children.length>0">
                                <template slot="title">{{item.name}}</template>
                                <template v-for="list in item.children">
                                    <el-menu-item :index="list.index" v-if="list.children.length<=0">{{list.name}}</el-menu-item>
                                </template>
                            </el-submenu>
                        </template>
                    </el-submenu>
                    <el-menu-item :index="items.index" class="submenu-title-noDropdown" v-if="items.children.length<=0">
                        <i :class="items.icons"></i>
                        <span slot="title">{{items.name}}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </div>
        <div class="main-container">
            <el-header style="text-align: right; font-size: 12px">
                <!--<svg class="icon tst-iocns" aria-hidden="true">-->
                    <!--<use xlink:href="#icon-power_v_web"></use>-->
                <!--</svg>-->
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
        </div>
    </div>
</template>

<script>
    export default {

        name: 'honePage',
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                isCollapse: false,
                tableData: Array(20).fill(item),
                barMenu:[
                    {
                        "name": "导航一","icons":"el-icon-location","index":"1", "icon": "computer",children: [
                        {
                            "name": "选项1","index":"1-1", "icon": "timer",children:[]
                        },
                        {
                            "name": "选项2","index":"1-2", "icon": "timer",children:[]
                        },
                        {
                            "name": "选项3", "index":"1-3","icon": "timer", children: [
                                {
                                    "name": "选项3-1", "index":"3-1","icon": "timer",children:[]
                                },
                                {
                                    "name": "选项3-2","index":"3-2", "icon": "timer",children:[]
                                }
                            ]
                        },
                        {
                            "name": "选项4","index":"1-4", "icon": "timer",children:[]
                        },
                        {
                            "name": "选项5","index":"1-5", "icon": "timer",children:[]
                        }]
                    },
                    {
                        "name": "导航二","icons":"el-icon-menu","index":"2", "icon": "computer",children:[
                        {
                            "name": "选项1","index":"2-1", "icon": "timer",children:[]
                        },
                        {
                            "name": "选项2","index":"2-2", "icon": "timer",children:[]
                        },
                        {
                            "name": "选项3", "index":"2-3","icon": "timer", children: []
                        },
                        {
                            "name": "选项4","index":"2-4", "icon": "timer",children:[]
                        },
                        {
                            "name": "选项5","index":"2-5", "icon": "timer",children:[]
                        }]
                    },
                    {
                        "name": "导航三","icons":"el-icon-document","index":"3", "icon": "computer",children:[]
                    },
                    {
                        "name": "导航四","icons":"el-icon-setting","index":"4", "icon": "computer",children:[]
                    },
                ]
            }
        },
        mounted(){

        },
        methods:{
        }
    }
</script>

<style type="text/css" lang="less" scoped>
    .app-wrapper {
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .tst-iocns{
        width:40px;
        height:40px;
        font-size: 40px;
    }
</style>
