<template>
    <el-breadcrumb class="app-breadcrumb" separator="/">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path" v-if='item.meta.title'>
                <span v-if='item.redirect==="noredirect"||index==levelList.length-1' class="no-redirect">{{item.meta.title}}</span>
                <router-link v-else :to="item.redirect||item.path">{{item.meta.title}}</router-link>
            </el-breadcrumb-item>
            <!--<el-breadcrumb-item :key="11">首页一下</el-breadcrumb-item>-->
            <!--<el-breadcrumb-item :key="12">活动管理</el-breadcrumb-item>-->
            <!--<el-breadcrumb-item :key="13">活动列表</el-breadcrumb-item>-->
            <!--<el-breadcrumb-item :key="14">活动详情</el-breadcrumb-item>-->
        </transition-group>

    </el-breadcrumb>
</template>

<script>

    export default {
        created() {
            this.getBreadcrumb()
        },
        data() {
            return {
                levelList:null
            }
        },
        watch: {
            $route() {
                this.getBreadcrumb()
            }
        },
        methods: {
            /**
             *1.$route.path    字符串，等于当前路由对象的路径，会被解析为绝对路径，如 "/home/news"
             *2.$route.params  对象，包含路由中的动态片段和全匹配片段的键值对。
             *3.$route.query   对象，包含路由中查询参数的键值对。例如，对于 /home/news/detail/01?favorite=yes ,会得到$route.query.favorite == 'yes'
             *4.$route.router  路由规则所属的路由器(以及其所属的组件)。
             *5.$route.matched 数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
             *6.$route.name    当前路径的名字，如果没有使用具名路径，则名字为空。
             */
            /*
             filter()方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。

             filter()基本语法：
             arr.filter(callback[, thisArg])

             　　filter()参数介绍：
             　　 参数名    说明
             　　 callback   用来测试数组的每个元素的函数。调用时使用参数 (element, index, array)
             　　返回true表示保留该元素（通过测试），false则不保留。
             　　thisArg    可选。执行 callback 时的用于 this 的值。

             　　filter()用法说明：

             　　　　filter 为数组中的每个元素调用一次 callback 函数，并利用所有使得 callback 返回 true 或 等价于 true 的值 的元素创建一个新数组。
             　　　　callback 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。那些没有通过 callback 测试的元素会被跳过，不会被包含在新数组中。

             　　　　callback 被调用时传入三个参数：

             　　　　元素的值
             　　　　元素的索引
             　　　　被遍历的数组
             　　　　如果为 filter 提供一个 thisArg 参数，则它会被作为 callback 被调用时的 this 值。否则，callback 的this 值在非严格模式下将是全局对象，严格模式下为 undefined。

             　　　　filter 不会改变原数组。

             　　　　filter 遍历的元素范围在第一次调用 callback 之前就已经确定了。在调用 filter 之后被添加到数组中的元素不会被 filter 遍历到。
             　　　　如果已经存在的元素被改变了，则他们传入 callback 的值是 filter 遍历到它们那一刻的值。被删除或从来未被赋值的元素不会被遍历到。

             */
            getBreadcrumb() {
                let matched = this.$route.matched.filter(item => item.name);
                console.log(matched);
                const first = matched[0];
                try{
                    if (first && first.name !== '首页') {
                        matched = [{ path: '/homePage', meta: { title: '首页' }}].concat(matched)
                    };
                }catch (e){
                    console.log(e)
                };
                this.levelList = matched;
                console.log(this.levelList)
            }
        }
    }
</script>

<style type="text/css" lang="less" scoped>


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
