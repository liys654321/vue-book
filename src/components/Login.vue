<template>

    <div class="note">

        <el-form
                :model="ruleForm" status-icon
                :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>

    </div>

</template>
<script>
import qs from 'qs'
export default {
data() {
    var validateUsername = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入用户名'));
        } else {
            callback();
        }
    };
    var validatePassword = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入密码'));
        } else {
            callback();
        }
    };
    return {
        ruleForm: {
            username: '',
            password: ''
        },
        rules: {
            username: [
                { validator: validateUsername, trigger: 'blur' }
            ],
            password: [
                {
                    validator: validatePassword,trigger: 'blur'
                }
            ]

        },
    };
},
methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
                // 发送请求进行登录
                let username = this.$refs[formName].model.username;
                let password = this.$refs[formName].model.password;
                this.$http.post("api/user/login",qs.stringify({
                    username: username,
		            password: password
                })).then(function (result) {
                    if(result.data.code == 200) {
                        this.$route.replace({path:'/index'})
                    }
                })

            } else {
                    console.log('error submit!!');
                    return false;
            }
        });
    },
    resetForm(formName) {
            this.$refs[formName].resetFields();
    }
},
}
</script>
<style>
    .demo-ruleForm {
        width: 400px;
        padding: 10px;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -260px;
        margin-top: -190px;
    }
    .note {
        background-image:url("../assets/bg.jpg");
        background-repeat:no-repeat;
        background-size: 100% auto;
        height: 100%;
    }
    .el-form-item label {
        color: white;
    }
</style>
