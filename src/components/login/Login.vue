<template>
    <div class="login-contail">
        <el-form  :model="loginData" :rules="loginRules" ref="loginForm" label-width="0px" class="login-model">
            <h3 class="login-title">登录系统</h3>
            <el-form-item prop="account">
                <el-input type="text" prefix-icon="el-icon-service" v-model="loginData.account"  placeholder="账号" :clearable="true"></el-input>
            </el-form-item>
            <el-form-item prop="password" >
                <el-input type="password" @keydown.enter.native = "login()" prefix-icon="el-icon-edit" v-model="loginData.password" placeholder="密码" :clearable="true"></el-input>
            </el-form-item>
            <el-form-item>
                <!--@click.native 组件封装了enter事件 用量触发该事件的-->
                <el-button type="primary" class="login-btn" @click.native.prevent="login()">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {

        name: 'login',
        data() {
            const validateEmail = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('请填写账号'));
                } else {
                    callback();
                }
            };
            const validateAccount = (rule,value,callback) => {
                if(value != "111"){
                    callback(new Error('账号输入有误'));
                }else{
                    callback()
                }
            };
            const validatePass = (rule, value, callback) => {
                if (value.length < 6) {
                    callback(new Error('密码不能小于6位'));
                } else {
                    callback();
                }
            };

            return {
                loginData: {
                    account: '111',
                    password: '123456'
                },
                loginRules: {
                    account: [
                        { required: true, trigger: 'blur', validator: validateEmail },
                        { trigger: 'blur', validator: validateAccount},
                    ],
                    password: [
                        { required: true, trigger: 'blur', validator: validatePass },
                    ]
                },
                containerHeight:''
            }
        },
        mounted(){
            var that = this;
            //获取显示器的高度
            that.containerHeight = $(window).height();
            $(".login-contail").height(that.containerHeight);
            console.log(that.sidebar,that.language,that.twoName,that.threeName)
        },
        computed: {
            ...mapGetters([
                'sidebar',
                'language',
                'twoName',
                'threeName'
            ])
        },
        methods:{
            testss(){
                alert(1)
            },
            login(){
                var that = this;
                that.$refs.loginForm.validate(valid => {
                    //验证通过处理事件
                    if(valid){
                        that.$router.push("homePage")
                    }else{
                        that.$message('验证错误');
                    }
                })
            }
        }
    }
</script>

<style type="text/css" lang="less" scoped>
    .login-contail{
        width:100%;
        overflow: hidden;
        background: url("../../assets/img/bg.jpg") no-repeat;
        background-size:cover;
    }
    .login-title{
        font-size: 26px;
        color: #eeeeee;
        margin: 0px auto 40px;
        text-align: center;
        font-weight: bold;
    }
    .login-model{
        height:400px;
        width:300px;
        margin: 200px auto;
    }
    .login-btn{
        width:100%;
    }
</style>
