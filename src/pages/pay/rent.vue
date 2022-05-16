<template>
  <view class="network">
    <image style="width: 50px;height: 50px" src="/static/empty.png"></image>
  </view>
</template>

<script>
import Vue from 'vue';
import request from "@/api/request";
import getUserInfo from "@/utils/utils";

export default{
  data() {
    return {
      doorList: []
    }
  },
  onLoad() {
  },
  methods: {

  },
  onShow() {
  }
};
</script>

<style>
  .network {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
