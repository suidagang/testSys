<template>
    <div class="tags-view-container">
        <scroll-pane class='tags-view-wrapper' ref='scrollPane'>
            <!--@contextmenu  右键菜单-->
            <router-link ref='tag' class="tags-view-item" :class="isActive(tag)?'active':''" v-for="tag in Array.from(visitedViews)"
                         :to="tag.path" :key="tag.path" @contextmenu.prevent.native="openMenu(tag,$event)">
                {{tag.title}}
                <span class='el-icon-close' @click.prevent.stop='closeSelectedTag(tag)'></span>
            </router-link>
        </scroll-pane>

        <ul class='contextmenu' v-show="visible" :style="{left:left+'px',top:top+'px'}">
            <li @click.prevent.stop='closeSelectedTag(selectedTag)'>关闭</li>
            <li @click.prevent.stop="closeOthersTags">关闭其他</li>
            <li @click.prevent.stop="closeAllTags">关闭所有</li>
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
        visitedViews() {
            return this.$store.state.tagsView.visitedViews
        }
    },
    watch: {
        $route() {
            this.addViewTags()
            this.moveToCurrentTag()
        },
    },
    mounted() {
        this.addViewTags()
    },
    methods: {
        generateRoute() {
            if (this.$route.name) {
                return this.$route
            }
            return false
        },
        isActive(route) {
            return route.path === this.$route.path || route.name === this.$route.name
        },
        addViewTags() {
            const route = this.generateRoute()
            if (!route) {
                return false
            };
            this.$store.dispatch('addVisitedViews', route)
        },
        moveToCurrentTag() {
            const tags = this.$refs.tag
            this.$nextTick(() => {
                for (const tag of tags) {
                    if (tag.to === this.$route.path) {
                        this.$refs.scrollPane.moveToTarget(tag.$el)
                        break
                    }
                }
            })
        },
        closeSelectedTag(view) {
            let that = this;
            that.$store.dispatch('delVisitedViews', view).then((views) => {
                if (that.isActive(view)) {
                    //slice(start),第一个参数是-1表示最后一个元素
                    const latestView = views.slice(-1)[0]
                    if (latestView) {
                        that.$router.push(latestView.path)
                    } else {
                        that.$router.push('/')
                    };
                    that.closeMenu();
                }
            })
        },
        closeOthersTags() {
            console.log("关闭其他");
            //console.log(this.selectedTag.path)
            this.$router.push(this.selectedTag.path)
            this.$store.dispatch('delOthersViews', this.selectedTag).then(() => {
                this.moveToCurrentTag();
                this.closeMenu();
            })
        },
        closeAllTags() {
            this.$store.dispatch('delAllViews')
            this.$router.push('/');
            this.closeMenu();
        },
        closeMenu() {
            this.visible = false
        },
        //鼠标右键功能
        openMenu(a, e) {
            this.visible = true;
            this.selectedTag = a
            this.left = e.clientX
            this.top = e.clientY
        },
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
            height: 24px;
            line-height: 24px;
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
