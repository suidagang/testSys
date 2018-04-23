<template>
    <div>
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
    </div>
</template>

<script>
    export default {

        name: 'honePage',
        data() {
            return {
                isCollapse: false,
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
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>
