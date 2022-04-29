<template>
  <view>
      <uni-card title="XXX小区" sub-title="一栋一单元">
        <button type="primary" @click="openDoor">
          一键开门
        </button>
      </uni-card>
  </view>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {
  },
  methods: {
    openDoor() {
      uni.showLoading({
        title: '开门中',
        mask: true
      });
      setTimeout(function () {
        uni.hideLoading();
        uni.showToast({
          title: '门已打开',
          duration: 2000
        });
      }, 500);
    }
  }
});
</script>

<style>

</style>
