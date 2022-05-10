<template>
  <view class="content">
    <view class="example">
      <!-- 自定义表单校验 -->
      <uni-forms ref="customForm" :rules="customRules" :modelValue="customFormData">
        <uni-forms-item label="用户名" required name="username">
          <uni-easyinput disabled v-model="customFormData.username" placeholder="请输入用户名"/>
        </uni-forms-item>
        <uni-forms-item label="姓名" required name="nickName">
          <uni-easyinput v-model="customFormData.nickName" placeholder="请输入姓名"/>
        </uni-forms-item>
        <uni-forms-item label="电话号码" required name="mobile">
          <uni-easyinput v-model="customFormData.mobile" placeholder="请输入电话号码"/>
        </uni-forms-item>
        <uni-forms-item label="身份证号" required name="cardNum">
          <uni-easyinput v-model="customFormData.cardNum" placeholder="请输入身份证号"/>
        </uni-forms-item>
      </uni-forms>
      <button type="primary" @click="submit('customForm')">修改信息</button>
    </view>
  </view>
</template>

<script>
import Vue from 'vue';
import request from "@/api/request";
import getUserInfo from "@/utils/utils";

export default{
  data() {
    return {
      // 表单数据
      customFormData: {
        id: '',
        username: '',
        cardNum: '',
        nickName: '',
        mobile: ''
      },
      // 自定义表单校验规则
      customRules: {
        username: {
          rules: [{
            required: true,
            errorMessage: '用户名不能为空'
          }]
        },
        cardNum: {
          rules: [{
            required: true,
            errorMessage: '身份证号不能为空'
          }]
        },
        nickName: {
          rules: [{
            required: true,
            errorMessage: '姓名不能为空'
          }]
        },
        mobile: {
          rules: [{
            required: true,
            errorMessage: '电话号码不能为空'
          }]
        },
        type: {
          rules: [{
            required: true,
            errorMessage: '角色不能为空'
          }]
        }
      },
    }
  },
  onLoad() {
    this.customFormData = getUserInfo();
  },
  methods: {
    submit(ref) {
      const form = this.$refs[ref]
      form.validate().then(() => {
        request("/manage/app/updateUserInfo", this.customFormData, "post").then(res => {
          if (res.code == 0) {
            uni.showToast({
              mask:true,
              title: `修改成功`
            })
            uni.setStorageSync('user', JSON.stringify(this.customFormData));
          }
        })
      }).catch((err) => {
        console.log('err', err);
      })
    },
  }
};
</script>

<style>
.example {
  padding: 15px;
  background-color: #fff;
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
