<template>
  <view>
    <view @longpress="longpress">
      <uni-card>
        <template v-slot:title>
          <view style="padding: 10px 10px 0 10px">
            <uni-tag text="审核通过" type="primary" />
          </view>

        </template>
        <view style="display: inline-block;width: 80%">
          <view style="padding: 10px 10px 5px 10px">XXX小区</view>
          <view style="padding: 0 10px 10px 10px">一栋一单元</view>
        </view>
        <view style="display: inline-block">
          <cover-image style="height: 60px;width: 60px" src="/static/house-img.png"></cover-image>
        </view>
      </uni-card>
    </view>
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
        url: '/pages/house/add'
      });
    },
    longpress() {
      uni.showModal({
        content: '确定要删除该房屋信息吗？',
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
