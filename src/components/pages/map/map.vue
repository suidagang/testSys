<template>
    <div>
        <div id="amap-page-container">
            <el-amap :vid="mapId"  :center="center" :amap-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo">
            </el-amap>
            <div class="toolbar">
                <el-button type="danger" @click="add()">增加mark点</el-button>
                <el-button type="danger" @click="clear()">删除全部mark点</el-button>
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
                infoWindow:null,
                events: {
                    init(o) {
//                        let marker = new AMap.Marker({
//                            position: [104.065833,30.658318],
//                            icon: new AMap.Icon({
//                                size: new AMap.Size(30, 41),  //图标大小
//                                image: "./static/img/correct_3.png",
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
            //一次加很多点
            addMarkers() {
                var that = this;
                let o = amapManager.getMap();
                that.infoWindow  = new AMap.InfoWindow({
                    offset: new AMap.Pixel(1, -30)
                });
                //关闭信息窗体
                function closeInfoWindow() {
                    o.clearInfoWindow();
                };
                for(let i = 0;i<10 ;i++){
                    var marker = new AMap.Marker({
                        map: o,
                        position: [104.061594+ (Math.random() - 0.5) * 0.1,30.682442+ (Math.random() - 0.5) * 0.1],
                        icon: new AMap.Icon({
                            size: new AMap.Size(30, 41),  //图标大小
                            image: "./static/img/correct_3.png",
                            imageOffset: new AMap.Pixel(0, 0)
                        })
                    });
                    that.attachSecretMessage(marker,i);
                }

            },
            //鼠标点击marker弹出自定义的信息窗体
            attachSecretMessage(marker,num){
                let that = this;
                let o = amapManager.getMap();
                marker.on('click', function (e) {
                    //弹出层模板
                    var windowHTML = '<div class="deyee-map-window-bg">'+'测试'+num+'</div>'
                    that.infoWindow.setContent(windowHTML);
                    that.infoWindow.open(o, marker.getPosition());
                });
                //点击地图其他地方让窗体消失
                if (o && typeof o.on == "function") {
                    o.on('click', function () {
                        that.infoWindow.close(marker.get('map'), marker);
                    });
                }
            },
            markerClick(e){
                let that = this;
                that.infoWindow.setContent(e.target.content);
                that.infoWindow.open(map, e.target.getPosition());
            },
            //点击新增一个点
            add() {
                var that = this;
                let o = amapManager.getMap();
                var marker = new AMap.Marker({
                    map:o,
                    position: [104.061594+ (Math.random() - 0.5) * 0.1,30.682442+ (Math.random() - 0.5) * 0.1],
                    icon: new AMap.Icon({
                        size: new AMap.Size(30, 41),  //图标大小
                        image: "./static/img/correct_3.png",
                        imageOffset: new AMap.Pixel(0, 0)
                    })
                });
                that.attachSecretMessage(marker,100);
            },
            clear(){
                let o = amapManager.getMap();
                o.clearMap();
            }
        }
    }
</script>
