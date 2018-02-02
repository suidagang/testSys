<template>
    <div >
        <el-form  :model="loginData" :rules="loginRules" ref="loginData" label-width="100px">
            <el-form-item label="账号" prop="account">
                <el-input type="text" v-model="loginData.account"  placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password"  v-model="loginData.password" placeholder="密码"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {

        name: 'login',
        data() {
            const validateEmail = (rule, value, callback) => {
                alert(value);
                if (!value) {
                    callback(new Error('请输入正确的合法邮箱'));
                } else {
                    callback();
                }
            };

            const validatePass = (rule, value, callback) => {
                alert(value);
                if (value.length < 6) {
                    callback(new Error('密码不能小于6位'));
                } else {
                    callback();
                }
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
            }
        },
    }
</script>

<style scoped>

</style>
