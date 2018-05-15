<template>
    <div class="home-page-container">
        <i class="el-icon-edit"></i>
        <i class="el-icon-share"></i>
        <i class="el-icon-delete"></i>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-table
                :data="filteredItems"
                style="width: 100%">
            <el-table-column
                    prop="age"
                    label="年龄"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="type"
                    label="标志">
            </el-table-column>
        </el-table>
        <div>{{haha | testFilter}}</div>
    </div>
</template>

<script>
    export default {
        name: 'layout',
        data() {
            return {
                tableData:[],
                haha:28
            }
        },
        mounted(){
            this.getAjax()
        },
        computed: {
            filteredItems() {
                this.tableData.filter( function(item){
                    if(item.age>=25){
                        item.type = "大龄青年"
                    }else{
                        item.type = "小鲜肉"
                    }
                });
                return this.tableData
            }
        },
        components: {

        },
        methods:{
            getAjax (){
                let that = this;
                this.$fetch('/api/info').then(res => {
                    console.log(res)
                    that.tableData = res;
                });
            }
        }
    }
</script>

<style type="text/css" lang="less" scoped>
    .home-page-container{
        width:100%;
        overflow: hidden;
        padding: 100px;
    }
</style>
