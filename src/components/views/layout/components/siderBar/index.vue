<template>
    <div>
        <el-menu class="side-bar-box"
                 mode="vertical"
                 :collapse="isCollapse"
                 background-color="#304156"
                 text-color="#bfcbd9"
                 active-text-color="#409EFF">
            <sidebar-item ></sidebar-item>
        </el-menu>
    </div>
</template>

<script>
    import SidebarItem from './siderBarItem'

    export default {
        data() {
            return {
                isCollapse:false
            }
        },
        components: { SidebarItem },
        computed: {

        }
    }
</script>
