<template>
    <div class="home-page-container">
        <el-radio-group v-model="radio2">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
    </div>
</template>

<script>
    export default {
        name: 'layout',
        data() {
            return {
                radio2: 3
            }
        },
        mounted(){

        },
        computed: {

        },
        components: {

        },
        methods:{
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
