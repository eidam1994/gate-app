<template>
  <view>
    <uni-list border-full>
      <view @longpress="longpress">
        <uni-list-item title="李四" note="幸福小区一栋一单元" rightText="入住时间：2022-04-29"/>
      </view>
    </uni-list>
    <uni-fab ref="fab" :pattern="pattern" :horizontal="horizontal" :vertical="vertical"
             :direction="direction" @fabClick="fabClick" />
  </view>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      title: 'uni-fab',
      directionStr: '垂直',
      horizontal: 'right',
      vertical: 'bottom',
      direction: 'horizontal',
      pattern: {
        color: '#7A7E83',
        backgroundColor: '#fff',
        selectedColor: '#007AFF',
        buttonColor: '#007AFF',
        iconColor: '#fff'
      },
      is_color_type: false,

    }
  },
  onLoad() {
  },
  methods: {
    fabClick() {
      uni.navigateTo({
        url: '/pages/person/add'
      });
    },
    longpress() {
      uni.showModal({
        content: '确定要删除该租客信息吗？',
        confirmText: '删除',
        confirmColor: 'red',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定');
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
    },
  }
});
</script>

<style>

</style>
