<template>
    <div>
        <section class="app-main" style="min-height: 100%">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'honePage',
        data() {
            return {

            }
        },
        mounted(){

        },
        components:{

        },
        methods:{
        }
    }
</script>

<style type="text/css" lang="less" scoped>

</style>
