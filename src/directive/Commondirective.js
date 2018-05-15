import Vue from 'vue'
import jquery from 'jquery'
Vue.directive('drag', {
    bind: function (el) {
        // 获取元素和初始值
        let oBox = el;
        let e = e || event;
        //滑动处理
        let startX, startY,endX, endY,firstX,firstY;
        oBox.addEventListener('touchstart',function (ev) {
            startX = ev.changedTouches[0].clientX;
            startY = ev.changedTouches[0].clientY;
            firstX = parseInt($(oBox).css("left"));
            firstY = parseInt($(oBox).css("top"));
        }, false);
        //监听滑动的位置
        oBox.addEventListener('touchmove',function (ev) {
            //touches: 当前屏幕上所有触摸点的列表;
            //targetTouches: 当前对象上所有触摸点的列表;
            //changedTouches: 涉及当前(引发)事件的触摸点的列表
            endX = ev.changedTouches[0].clientX;
            endY = ev.changedTouches[0].clientY;
            if(firstX+endX-startX >= 0 && (firstX+endX-startX) <= (document.documentElement.clientWidth-50)){
                $(oBox).css({'left':(firstX+endX-startX)+'px','top':(firstY+endY-startY)+'px'});
            }else if(firstX+endX-startX < 0 ){
                $(oBox).css({'left':0+'px','top':(firstY+endY-startY)+'px'});
            }else if(firstX+endX-startX > (document.documentElement.clientWidth-50)){
                $(oBox).css({'left':(document.documentElement.clientWidth-50)+'px','top':(firstY+endY-startY)+'px'});
            }
        }, false);
    },
    update: function (value) {

    }
});
