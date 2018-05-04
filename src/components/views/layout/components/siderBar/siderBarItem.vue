<template>
    <div>
        <template v-for="items in barMenu" >
            <el-submenu  :index="items.index" v-if="items.children.length>0" class="el-menu-title-box" >
                <template slot="title" @click="goRouter(items)">
                    <i class="iconfont side-icons" :class="items.icons"></i>
                    <span>{{items.name}}</span>
                </template>
                <template v-for = "item in items.children" >
                    <el-menu-item :index="item.index" v-if="item.children.length<=0" @click="goRouter(item)">{{item.name}}</el-menu-item>
                    <el-submenu class="boxs" :index="item.index" v-if="item.children.length>0">
                        <template slot="title">{{item.name}}</template>
                        <template v-for="list in item.children">
                            <el-menu-item :index="list.index" v-if="list.children.length<=0" @click="goRouter(item)">{{list.name}}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
            </el-submenu>
            <el-menu-item :index="items.index" class="submenu-title-noDropdown" v-if="items.children.length<=0" @click="goRouter(items)">
                <i class="iconfont side-icons" :class="items.icons"></i>
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
                        "name": "首页","icons":"icon-icon_home","index":"homePage",path:"/homePage",children: []
                    },
                    {
                        "name": "组件","icons":"icon-list","index":"components",path:"/homePage",children:[
                        {
                            "name": "按钮","index":"buttons",path:"/components/button",children:[]
                        },
                        {
                            "name": "表格","index":"table",path:"/components/table",children:[]
                        },
                        {
                            "name": "单选框", "index":"radio",path:"/components/radio", children: []
                        },
                        {
                            "name": "多选框","index":"checkbox",path:"/components/checkbox",children:[]
                        }]
                    },
                    {
                        "name": "开关","icons":"icon-tool","index":"switch",path:"/switch/index",children:[]
                    },
                    {
                        "name": "图标","icons":"icon-search","index":"icon",path:"/icon/index",children:[]
                    },
                ]
            }
        },
        mounted(){

        },
        methods:{
            goRouter (obj) {
                let that = this;
                that.$router.push(obj.path)
            }
        }
    }
</script>

<style type="text/css" lang="less" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .side-icons{
        display: inline-block;
        margin-right: 5px;
        width: 24px;
        text-align: center;
        font-size: 18px;
        vertical-align: middle;
        color: #fff;
    }
</style>
