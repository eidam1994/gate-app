<template>
  <view class="content">
    <uni-title style="margin-top: 80px" type="h1" title="珞珈德毅智慧门禁" align="center"></uni-title>
    <view class="example">
      <!-- 自定义表单校验 -->
      <uni-forms ref="customForm" :rules="customRules" :modelValue="customFormData">
        <uni-forms-item label="用户名" required name="username">
          <uni-easyinput v-model="customFormData.username" placeholder="请输入用户名"/>
        </uni-forms-item>
        <uni-forms-item label="密码" required name="password">
          <uni-easyinput type="password" v-model="customFormData.password" placeholder="请输入密码"/>
        </uni-forms-item>
<!--        <uni-forms-item label="角色" required name="role">-->
<!--          <uni-data-checkbox v-model="customFormData.role" :localdata="roles" />-->
<!--        </uni-forms-item>-->
      </uni-forms>
      <button type="primary" @click="submit('customForm')">登录</button>
      <view class="register" @click="register">注册账号</view>
    </view>
  </view>
</template>

<script>
import Vue from 'vue';
import request from "@/api/request";

export default{
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
        // role: {
        //   rules: [{
        //     required: true,
        //     errorMessage: '角色不能为空'
        //   }]
        // }
      },
    }
  },
  onLoad() {
  },
  methods: {
    submit(ref) {
      const form = this.$refs[ref]
      form.validate().then(() => {
        request("/manage/app/login", this.customFormData, "post").then(res => {
          if (res.code == 0) {
            uni.setStorageSync('user', JSON.stringify(res.data));
            uni.reLaunch({
              url: '/pages/index/index'
            });
          } else {
            uni.showToast({
              icon: "error",
              title: res.msg
            })
          }
        })
      }).catch((err) => {
        console.log('err', err);
      })
    },
    register() {
      uni.navigateTo({
        url: '/pages/login/register'
      });
    }
  }
};
</script>

<style>
.register {
  text-align: center;
  font-size: 28rpx;
  color: #007aff;
  margin-top: 10px;
}
.example {
  padding: 15px;
  background-color: #fff;
  padding-top: 100px;
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
