<template>
    <div>
        <el-menu class="side-bar-box"
                 mode="vertical"
                 :collapse="isCollapse"
                 :default-active="indexPage"
                 background-color="#304156"
                 text-color="#bfcbd9"
                 active-text-color="#409EFF">
            <sidebar-item ></sidebar-item>
        </el-menu>
    </div>
</template>

<script>
    import SidebarItem from './siderBarItem'
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                indexPage:"homePage"
            }
        },
        components: { SidebarItem },
        computed: {
            ...mapGetters([
                'sidebar'
            ]),
            isCollapse() {
                return !this.sidebar.opened
            }
        }
    }
</script>
