<template>
    <div>
        <el-menu class="side-bar-box"
                 mode="vertical"
                 :collapse="isCollapse"
                 :collapse-transition="false"
                 :show-timeout="200"
                 :default-active="$route.path"
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

            }
        },
        mounted(){

        },
        components: { SidebarItem },
        computed: {
            ...mapGetters([
                'sidebar'
            ]),
            isCollapse() {
                return !this.sidebar.opened
            }
        },
        methods:{

        },
        watch:{

        }
    }
</script>
