<template>
  <view>
      <uni-card v-for="(item, i) in doorList" :key="i" :title="item.buildingName" :sub-title="'房号：' + item.roomNumber">
        <button type="primary" @click="openDoor(item.buildingId)">
          一键开门
        </button>
      </uni-card>
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
    openDoor(buildingId) {
      uni.showLoading({
        title: '开门中',
        mask: true
      });
      request("/manage/app/openDoor", {buildingId: buildingId}, "post").then(res => {
        if (res.code == 0) {
          uni.hideLoading();
          uni.showToast({
            title: '门已打开',
            duration: 2000
          });
        }
      })
      // setTimeout(function () {
      //   uni.hideLoading();
      //   uni.showToast({
      //     title: '门已打开',
      //     duration: 2000
      //   });
      // }, 500);
    },
    getDoorList() {
      const userInfo = getUserInfo()
      request("/manage/app/getOpenList", {id: userInfo.id, status: '2'}, "post").then(res => {
        if (res.code == 0) {
          this.doorList = res.data
          console.log('success', res);
        }
      })
    }
  },
  onShow() {
    this.getDoorList()
  }
};
</script>

<style>

</style>
