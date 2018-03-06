<template>
    <div class="index-contail">
        <div class="header-top"></div>
        <div class="left-bar-menu">
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <template v-for="items in barMenu" >
                    <el-submenu  :index="items.index" v-if="items.children.length>0" >
                        <template slot="title">
                            <i :class="items.icons"></i>
                            <span>{{items.name}}</span>
                        </template>
                        <template v-for = "item in items.children" >
                            <el-menu-item :index="item.index" v-if="item.children.length<=0">{{item.name}}</el-menu-item>
                            <el-submenu :index="item.index" v-if="item.children.length>0">
                                <template slot="title">{{item.name}}</template>
                                <template v-for="list in item.children">
                                    <el-menu-item :index="list.index" v-if="list.children.length<=0">{{list.name}}</el-menu-item>
                                </template>
                            </el-submenu>
                        </template>
                    </el-submenu>
                    <el-menu-item :index="items.index" v-if="items.children.length<=0">
                        <i :class="items.icons"></i>
                        <span slot="title">{{items.name}}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </div>
    </div>
</template>

<script>
    export default {

        name: 'honePage',
        data() {
            return {
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
                        "name": "导航二","icons":"el-icon-menu","index":"2", "icon": "computer",children:[]
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
            handleOpen(key, keyPath) {
                console.log(key, keyPath,11);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath,22);
            }
        }
    }
</script>

<style type="text/css" lang="less" scoped>
    .index-contail{
        width:100%;
        overflow: hidden;
    }
    .header-top{
        height: 52px;
        width:100%;
        background: #2BA5E3;
        overflow: hidden;
    }
    .left-bar-menu{
        width:240px;
        overflow: hidden;
    }
</style>
