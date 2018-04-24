<template>
    <div class="tags-view-container">
        <scroll-pane class='tags-view-wrapper' ref='scrollPane'>
            <router-link ref='tag' class="tags-view-item active" to="/homePage" key="sui1">
                测试1
                <span class='el-icon-close'></span>
            </router-link>
            <router-link ref='tag' class="tags-view-item active" to="/homePage" key="sui2">
                测试2
                <span class='el-icon-close'></span>
            </router-link>
        </scroll-pane>

        <ul class='contextmenu' v-show="visible" :style="{left:left+'px',top:top+'px'}">
            <li>关闭</li>
            <li>关闭其他</li>
            <li>关闭所有</li>
        </ul>
    </div>
</template>

<script>
import ScrollPane from '@/components/ScrollPane'

export default {
    components: { ScrollPane },
    data() {
        return {
            visible: false,
            top: 0,
            left: 0,
            selectedTag: {}
        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style type="text/css" lang="less" scoped>
.tags-view-container {
    .tags-view-wrapper {
        background: #fff;
        height: 34px;
        border-bottom: 1px solid #d8dce5;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
        .tags-view-item {
            display: inline-block;
            position: relative;
            height: 26px;
            line-height: 26px;
            border: 1px solid #d8dce5;
            color: #495060;
            background: #fff;
            padding: 0 8px;
            font-size: 12px;
            margin-left: 5px;
            margin-top: 4px;
            text-decoration:none;
            &:first-of-type {
                margin-left: 15px;
            }
            &.active {
                background-color: #42b983;
                color: #fff;
                border-color: #42b983;
                &::before {
                    content: '';
                    background: #fff;
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    position: relative;
                    margin-right: 2px;
                }
            }
        }
    }
    .contextmenu {
        margin: 0;
        background: #fff;
        z-index: 2;
        position: absolute;
        list-style-type: none;
        padding: 5px 0;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 400;
        color: #333;
        box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
        li {
            margin: 0;
            padding: 7px 16px;
            cursor: pointer;
            &:hover {
                background: #eee;
            }
        }
    }
}
</style>

</style>
