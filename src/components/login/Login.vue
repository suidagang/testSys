<template>
    <div class="login-contail">
        <el-form  :model="loginData" :rules="loginRules" ref="loginData" label-width="0px" class="login-model">
            <h3 class="login-title">登录系统</h3>
            <el-form-item prop="account">
                <el-input type="text" prefix-icon="el-icon-service" v-model="loginData.account"  placeholder="账号" :clearable="true"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" prefix-icon="el-icon-edit" v-model="loginData.password" placeholder="密码" :clearable="true"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="login-btn">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {

        name: 'login',
        data() {
            const validateEmail = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('请输入正确的合法邮箱'));
                } else {
                    callback();
                }
            };

            const validatePass = (rule, value, callback) => {
                callback();
//                if (value.length < 6) {
//                    callback(new Error('密码不能小于6位'));
//                } else {
//                    callback();
//                }
            };

            return {
                loginData: {
                    account: '',
                    password: ''
                },
                loginRules: {
                    account: [
                        { required: true, trigger: 'blur', validator: validateEmail },
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
        }
    }
</script>

<style scoped>
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
