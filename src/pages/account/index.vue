<template>
  <view class="container">
      <uni-card style="margin-top: 10px" :isFull="true" title="张三" extra="额外信息" :thumbnail="'/static/person.png'">
        <uni-list style="margin-top: 10px">
          <uni-list-item title="今日新闻" showArrow></uni-list-item>
          <uni-list-item title="今日新闻" showArrow></uni-list-item>
          <uni-list-item title="今日新闻" showArrow></uni-list-item>
          <uni-list-item title="今日新闻" showArrow></uni-list-item>
          <uni-list-item title="今日新闻" showArrow></uni-list-item>
          <uni-list-item title="今日新闻" showArrow></uni-list-item>
        </uni-list>
      </uni-card>
    <uni-card>
      <button type="primary">退出登录</button>
    </uni-card>
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
  },
  onShow() {

  }
});
</script>

<style>
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
