<template>
    <span>
        <label class="ui-radio" :class="{'checked':model==value,'disabled':disabled}">
            <input type="radio" ref="radio" :value="value" @click="updateVal" :disabled="disabled">
            <span class="radio-text">
                <slot></slot>
            </span>
        </label>

    </span>
</template>

<script>
    export default {
        name:'ui-radio',//radio组件名称
        //文档有介绍
        model: {//自定义 v-model的 prop和event,这个定义的意思就是使用change事件更新model的值,以此来实时更新v-model的值
            prop: 'model',
            event: 'change'
        },
        props:{
            value:{//radio的value属性
                type:[String,Number],
                require:true
            },
            model:{//这里的model指的是上面定义的v-model的prop
                type:[String,Number],
                require:true
            },
            checked:{//是否默认选中
                type:Boolean,
                default:false
            },
            disabled:{//是否禁用
                type:Boolean,
                default:false
            },
            text:{//文字
                type:[String,Number],
                require:true
            }
        },
        mounted:function(){//当dom渲染完成,判断组件是否默认选中
            if(this.checked===true)
                this.updateVal();
        },
        methods:{
            updateVal:function(){//当用户点击radio时,触发change事件更新v-model
                this.$emit('change',this.$refs.radio.value);
            }
        }
    }
</script>

<style type="text/css" lang="less" scoped>
    .ui-radio{
        position: relative;
        line-height: 14px;
        vertical-align: middle;
        cursor: pointer;
        margin-right: 40px;
    }
    .ui-radio::before{
        content: '';
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 1px solid #ccc;
        display: inline-block;
        position: absolute;
        left:0;
        top:4px;
    }
    .ui-radio::after{
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        display: inline-block;
        position: absolute;
        left: 8px;
        top: 12px;
        margin: -4px 0 0 -4px;
        background-color: #4693fe;
        transition: all .5s ease;
        opacity: 0;
        transform: scale(0);
    }
    .ui-radio.disabled::before{
        border-color: #ccc;
    }
    .ui-radio.checked::before {
        border-color: #4693fe;
    }
    .ui-radio.checked::after {
        opacity: 1;
        transform: scale(1);
    }
    input[type=radio]{
        opacity: 0;
        margin: 0;
        cursor: pointer;
        display: inline-block;
    }
    .radio-text{
        font-size: 14px;
        vertical-align: middle;
        cursor: pointer;
        margin-left: 3px;
    }
</style>
