<template>
    <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container">
            <navbar></navbar>
            <tags-view></tags-view>
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
    import { Navbar, Sidebar, AppMain ,TagsView} from './components'
    export default {
        name: 'layout',
        data() {
            return {
                isCollapse: false,
            }
        },
        mounted(){

        },
        computed: {
            sidebar() {
                var that = this;
                return this.$store.state.one.sidebar
            }
        },
        components: {
            Navbar,
            Sidebar,
            AppMain,
            TagsView
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
