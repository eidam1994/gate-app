<template>
  <view class="container">
      <view class="head">
        <image class="image" :src="'/static/avatar.png'" mode="aspectFill" />
          <text class="name">{{name}}</text>
      </view>
        <uni-list style="border: none">
          <uni-list-item :showExtraIcon="true" :extra-icon="{color: '#ea64d4',size: '22', type: 'locked-filled'}" title="修改密码" clickable link @click="onClick" ></uni-list-item>
          <uni-list-item :showExtraIcon="true" :extra-icon="{color: '#e04760',size: '22', type: 'chatboxes-filled'}" title="投诉与建议" clickable link @click="onClick" ></uni-list-item>
          <uni-list-item :showExtraIcon="true" :extra-icon="{color: '#ee8142',size: '22', type: 'help-filled'}" title="帮助中心" clickable link @click="onClick" ></uni-list-item>
          <uni-list-item :showExtraIcon="true" :extra-icon="{color: '#34b8e8',size: '22', type: 'info-filled'}" title="关于我们" clickable link @click="onClick" ></uni-list-item>
          <uni-list-item :showExtraIcon="true" :extra-icon="{color: '#27ce2b',size: '22', type: 'gear-filled'}" title="设置" clickable link @click="onClick" ></uni-list-item>
        </uni-list>
      <button style="margin-top: 10px;background-color: white" @click="logout">退出登录</button>
  </view>
</template>

<script>
import Vue from 'vue';
import getUserInfo from "@/utils/utils.js";

export default {
  data() {
    return {
      extraIcon: {
        color: '#4cd964',
        size: '22',
        type: 'gear-filled'
      },
      name: ''
    }
  },
  onLoad() {
  },
  methods: {
    logout() {
      uni.removeStorageSync('user');
      uni.reLaunch({
        url: '/pages/login/index'
      });
    },
    onClick() {
      // uni.showToast({
      //   title: `正在建设中`,
      //   icon: 'error',
      //   mask: true
      // })
    }
  },
  onShow() {
    this.name = getUserInfo().nickName;
  }
};
</script>

<style>
.image {
  width: 55px;
  height: 55px;
  margin-left: 30px;
  margin-top: 30px;
}
.name {
  margin-left: 20px;
  height: 70px;
  color: white;
  display: inline-block;
  vertical-align: middle;
}
.head {
  height: 160px;
  background-color: #3583da;
}
.uni-card--border {
  border: none;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.avatar {
  width: 50px;
  border: #333333 solid 3px;
  border-radius: 50px;
  display: inline-block;
}
</style>
