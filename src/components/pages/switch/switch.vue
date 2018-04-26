
<template>
    <div class="home-page-container">
        <el-switch
                v-model="value3"
                active-text="按月付费"
                inactive-text="按年付费">
        </el-switch>
        <el-switch
                style="display: block"
                v-model="value4"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="按月付费"
                inactive-text="按年付费">
        </el-switch>
    </div>
</template>

<script>
    export default {
        name: 'layout',
        data() {
            return {
                value3: true,
                value4: true
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
