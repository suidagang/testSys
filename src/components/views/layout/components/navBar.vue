<template>
    <div >
        <el-header style="text-align: right; font-size: 12px;line-height: 60px;overflow: hidden;border: 1px solid #e6e6e6;">
            <svg class="tst-iocns" aria-hidden="true" @click="toggleSideBar()">
                <use xlink:href="#icon-icon_navbar_fold"></use>
            </svg>
            <breadcrumb class="breadcrumb-container"></breadcrumb>
            <svg class="tst-iocns-roou" aria-hidden="true" @click="screenFull()">
                <use xlink:href="#icon-icon_navbar_zoomin"></use>
            </svg>
            <el-dropdown class="drop-down-box">
                <i class="el-icon-setting" style="margin-right: 15px;font-size: 20px;margin-top: 20px"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item >退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-button type="primary" @click="goOut()" style="float: left;margin-top: 10px;margin-left: 50px">退出</el-button>
            <el-tooltip effect="dark" content="主题颜色" placement="bottom">
                <theme-picker class="theme-switch right-menu-item"></theme-picker>
            </el-tooltip>
            <img class="user-avatar" :src="personUrl">
        </el-header>
    </div>
</template>

<script>
    import Breadcrumb from '@/components/Breadcrumb'
    //安装 npm install --save-dev screenfull  全屏操作的一个npm包
    import screenfull from 'screenfull'
    import ThemePicker from '@/components/ThemePicker'
    export default {
        name: 'honePage',
        data() {
            return {
                isCollapse: false,
                personUrl:" https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
            }
        },
        mounted(){

        },
        components:{
            Breadcrumb,
            ThemePicker
        },
        methods:{
            toggleSideBar () {
                var that = this;
                that.$store.dispatch('toggleSideBar')
            },
            screenFull() {
                if (!screenfull.enabled) {
                    this.$message({
                        message: 'you browser can not work',
                        type: 'warning'
                    })
                    return false
                }
                screenfull.toggle()
            },
            goOut(){
                let that = this;
                console.log("退出");
                localStorage.removeItem("token");
                that.$router.push("login")
            }
        }
    }
</script>

<style type="text/css" lang="less" scoped>
    .tst-iocns{
        width:20px;
        height:20px;
        font-size: 20px;
        float: left;
        margin-top: 20px;
    }
    .tst-iocns-roou{
        width:20px;
        height:20px;
        font-size: 20px;
        display: inline-block;
        margin-right: 10px;
        vertical-align: top;
        margin-top: 20px;
    }
    .theme-switch {
        vertical-align: 15px;
        margin-top: 10px!important;
    }
    .right-menu-item {
        display: inline-block;
        margin: 0 8px;
    }
    .drop-down-box{
        vertical-align: top;
    }
    .name{
        vertical-align: top;
    }
    .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
    }
</style>
