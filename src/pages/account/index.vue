<template>
  <view class="container">
      <uni-card style="margin-top: 10px" :isFull="true" title="张三" :thumbnail="'/static/person.png'">
        <uni-list style="margin-top: 10px;border: none">
          <uni-list-item :showExtraIcon="true" :extra-icon="{color: '#ea64d4',size: '22', type: 'locked-filled'}" title="修改密码" clickable link @click="onClick" ></uni-list-item>
          <uni-list-item :showExtraIcon="true" :extra-icon="{color: '#e04760',size: '22', type: 'chatboxes-filled'}" title="投诉与建议" clickable link @click="onClick" ></uni-list-item>
          <uni-list-item :showExtraIcon="true" :extra-icon="{color: '#ee8142',size: '22', type: 'help-filled'}" title="帮助中心" clickable link @click="onClick" ></uni-list-item>
          <uni-list-item :showExtraIcon="true" :extra-icon="{color: '#34b8e8',size: '22', type: 'info-filled'}" title="关于我们" clickable link @click="onClick" ></uni-list-item>
          <uni-list-item :showExtraIcon="true" :extra-icon="{color: '#27ce2b',size: '22', type: 'gear-filled'}" title="设置" clickable link @click="onClick" ></uni-list-item>
        </uni-list>
      </uni-card>
      <button style="margin-top: 10px" @click="logout">退出登录</button>
  </view>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      extraIcon: {
        color: '#4cd964',
        size: '22',
        type: 'gear-filled'
      }
    }
  },
  onLoad() {
  },
  methods: {
    logout() {
      uni.reLaunch({
        url: '/pages/login/index'
      });
    },
    onClick() {
      uni.showToast({
        title: `正在建设中`,
        icon: 'error',
        mask: true
      })
    }
  },
  onShow() {

  }
});
</script>

<style>
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

.name {

}
</style>
