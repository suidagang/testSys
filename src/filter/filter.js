/**
 * 过滤
 */
import Vue from 'vue'
//异常和正常过滤
Vue.filter('testFilter', function (value, input) {
    if(value >= 25){
        return "大数字"
    }else if(value < 25){
        return "小数字"
    }
});


