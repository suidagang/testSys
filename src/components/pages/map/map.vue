<template>
    <div>
        <div id="amap-page-container">
            <el-amap :vid="mapId"  :center="center" :amap-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo">
            </el-amap>
            <div class="toolbar">
                <el-button type="danger" @click="add()">增加mark点</el-button>
                <el-button type="danger" @click="clear()">删除mark点</el-button>
            </div>
        </div>
    </div>
</template>

<style type="text/css" lang="less" scoped>
    #amap-page-container{
        position: relative;
    }
    .toolbar{
        position: absolute;
        right:0;
        bottom:0;
    }
</style>


<script>
    import VueAMap  from 'vue-amap';
    import { AMapManager } from 'vue-amap'
    let amapManager = new VueAMap.AMapManager();
    export default {
        data () {
            return {
                mapId: 'testMap',
                zoom:12,
                center:[104.065713,30.657637],
                amapManager,
                marker:null,
                events: {
                    init(o) {
//                        let marker = new AMap.Marker({
//                            position: [104.056873,30.659704],
//                            icon: new AMap.Icon({
//                                size: new AMap.Size(30, 41),  //图标大小
//                                image: "./static/correct_3.png",
//                                imageOffset: new AMap.Pixel(0, 0)
//                            })
//                        });
//                        marker.setMap(o);
                    }
                }
            }
        },
        mounted(){
            let that = this;
            //获取屏幕可见区域高度
            var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;;
            //设置地图容器和高度
            var deyeeMap = document.getElementById('amap-page-container');
            deyeeMap.style.height = (clientHeight - 95) + 'px';
//            setTimeout(function(){
//                that.add()
//            },10000)
            that.$nextTick(function(){
                that.addMarkers();
            })
        },
        activated() {


        },
        computed: {

        },
        components: {

        },
        methods:{
            addMarkers() {
                var that = this;
                console.log("add");
                let o = amapManager.getMap();
                for(let i = 0;i<10 ;i++){
                    that.marker = new AMap.Marker({
                        position: [104.061594+ (Math.random() - 0.5) * 0.1,30.682442+ (Math.random() - 0.5) * 0.1],
                        icon: new AMap.Icon({
                            size: new AMap.Size(30, 41),  //图标大小
                            image: "./static/correct_3.png",
                            imageOffset: new AMap.Pixel(0, 0)
                        })
                    });

                    that.marker.setMap(o);
                }

            },
            add() {
                var that = this;
                let o = amapManager.getMap();
                that.marker = new AMap.Marker({
                    position: [104.061594+ (Math.random() - 0.5) * 0.1,30.682442+ (Math.random() - 0.5) * 0.1],
                    icon: new AMap.Icon({
                        size: new AMap.Size(30, 41),  //图标大小
                        image: "./static/img/correct_3.png",
                        imageOffset: new AMap.Pixel(0, 0)
                    })
                });
                that.marker.setMap(o);
            },
            clear(){
                this.marker.setMap(null);
            }
        }
    }
</script>
