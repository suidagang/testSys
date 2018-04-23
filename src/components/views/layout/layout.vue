<template>
    <div class="app-wrapper" :class="{hideSidebar:isCollapse}">
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container">
            <navbar></navbar>
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
    import { Navbar, Sidebar, AppMain } from './components'
    export default {
        name: 'layout',
        data() {
            return {
                isCollapse: false,
            }
        },
        mounted(){

        },
        components: {
            Navbar,
            Sidebar,
            AppMain,
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
</style>
