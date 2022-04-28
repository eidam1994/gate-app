<template>
  <view class="content">
    <view class="example">
      <!-- 自定义表单校验 -->
      <uni-forms ref="customForm" :rules="customRules" :modelValue="customFormData">
        <uni-forms-item label="用户名" required name="username">
          <uni-easyinput v-model="customFormData.username" placeholder="请输入用户名"/>
        </uni-forms-item>
        <uni-forms-item label="密码" required name="password">
          <uni-easyinput type="password" v-model="customFormData.password" placeholder="请输入密码"/>
        </uni-forms-item>
        <uni-forms-item label="确认密码" required name="confirmPassword">
          <uni-easyinput type="password" v-model="customFormData.confirmPassword" placeholder="请输入密码"/>
        </uni-forms-item>
        <uni-forms-item label="角色" required name="role">
          <uni-data-checkbox v-model="customFormData.role" :localdata="roles"/>
        </uni-forms-item>
      </uni-forms>
      <button type="primary" @click="submit('customForm')">注册账号</button>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      roles: [{
        text: '租户',
        value: 1
      }, {
        text: '业主',
        value: 2
      }],
      // 表单数据
      customFormData: {
        username: '',
        password: '',
        confirmPassword: '',
        role: ''
      },
      // 自定义表单校验规则
      customRules: {
        username: {
          rules: [{
            required: true,
            errorMessage: '用户名不能为空'
          }]
        },
        password: {
          rules: [{
            required: true,
            errorMessage: '密码不能为空'
          }]
        },
        confirmPassword: {
          rules: [{
            required: true,
            errorMessage: '确认密码不能为空'
          },
            {
              validateFunction: function (rule, value, data, callback) {
                if (value != data.password) {
                  callback('两次输入的密码不同')
                }
                return true
              }
            }]
        },
        role: {
          rules: [{
            required: true,
            errorMessage: '角色不能为空'
          }]
        }
      },
    }
  },
  onLoad() {
  },
  methods: {
    submit(ref) {
      this.$refs[ref].validate().then(res => {
        console.log('success', res);
        uni.showToast({
          title: `校验通过`
        })
      }).catch(err => {
        console.log('err', err);
      })
    },
  }
});
</script>

<style>
.example {
  padding: 15px;
  background-color: #fff;
  padding-top: 180px;
}

.segmented-control {
  margin-bottom: 15px;
}

.button-group {
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
}

.form-item {
  display: flex;
  align-items: center;
}

.button {
  display: flex;
  align-items: center;
  height: 35px;
  margin-left: 10px;
}
</style>
