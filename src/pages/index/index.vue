<template>
  <view class="content">

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
    uni.onTabBarMidButtonTap(() => {
      uni.navigateTo({url: "/pages/index/index3"})
    })
  },
  methods: {
    goToPage() {
      uni.navigateTo({url: "/pages/index/index2"})
    }
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
</style>
