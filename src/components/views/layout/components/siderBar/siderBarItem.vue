<template>
    <div>
        <!--<template v-for="items in barMenu" >-->
            <!--<el-submenu  :index="items.index" v-if="items.children.length>0" class="el-menu-title-box" >-->
                <!--<template slot="title" @click="goRouter(items)">-->
                    <!--<i class="iconfont side-icons" :class="items.icons"></i>-->
                    <!--<span>{{items.name}}</span>-->
                <!--</template>-->
                <!--<template v-for = "item in items.children" >-->
                    <!--<el-menu-item :index="item.index" v-if="item.children.length<=0" @click="goRouter(item)">{{item.name}}</el-menu-item>-->
                    <!--<el-submenu class="boxs" :index="item.index" v-if="item.children.length>0">-->
                        <!--<template slot="title">{{item.name}}</template>-->
                        <!--<template v-for="list in item.children">-->
                            <!--<el-menu-item :index="list.index" v-if="list.children.length<=0" @click="goRouter(item)">{{list.name}}</el-menu-item>-->
                        <!--</template>-->
                    <!--</el-submenu>-->
                <!--</template>-->
            <!--</el-submenu>-->
            <!--<el-menu-item :index="items.index" class="submenu-title-noDropdown" v-if="items.children.length<=0" @click="goRouter(items)">-->
                <!--<i class="iconfont side-icons" :class="items.icons"></i>-->
                <!--<span slot="title">{{items.name}}</span>-->
            <!--</el-menu-item>-->
        <!--</template>-->
        <template v-for="items in fourRouters" v-if="!items.hidden&&items.children">
            <el-submenu  :index="items.path" :key="items.path" v-if="items.children && items.redirect === 'noredirect'" class="el-menu-title-box" >
                <template slot="title" @click="goRouter(items)">
                    <i class="iconfont side-icons" :class="items.meta.icons"></i>
                    <span>{{items.meta.title}}</span>
                </template>
                <template v-for = "item in items.children">
                    <el-menu-item :index="items.path+'/'+item.path" :key="item.path" v-if="!item.children" @click="goRouter(item,items)">{{item.meta.title}}</el-menu-item>
                    <el-submenu class="boxs" :index="item.path" v-if="item.children">
                        <template slot="title">{{item.meta.title}}</template>
                        <template v-for="list in item.children">
                            <el-menu-item :index="list.path" :key="list.path" v-if="list.children.length<=0" @click="goRouter(item)">{{list.meta.title}}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
            </el-submenu>
            <el-menu-item :index="items.path+'/'+items.children[0].path" :key="items.path" class="submenu-title-noDropdown" v-if="items.redirect !== 'noredirect'"  @click="goRouter(items)">
                <i class="iconfont side-icons" :class="items.meta.icons"></i>
                <span slot="title">{{items.meta.title}}</span>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
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

        computed: {
            ...mapGetters([
                'fourRouters',
            ]),

        },
        methods:{
            goRouter (obj,objs) {
                let that = this;
                let goPath = '';
                if(objs){
                    goPath = objs.path + "/" + obj.path;
                }else{
                    if(obj.path){
                        goPath = obj.path;
                    }else{
                        goPath = obj.redirect;
                    }

                };
                that.$router.push(goPath)
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
