<template>
  <view>
    <view>
      <uni-card v-for="(item, i) in houseList" :key="i">
        <template v-slot:title>
          <view style="padding: 10px 10px 0 10px">
            <uni-tag v-if="item.status == '1'" text="审核中" type="primary" />
            <uni-tag v-if="item.status == '2'" text="审核通过" type="primary" />
            <uni-tag v-if="item.status == '3'" text="审核通过" type="error" />
          </view>

        </template>
        <view style="display: inline-block;width: 80%">
          <view style="padding: 10px 10px 5px 10px">{{ item.buildingName }}</view>
          <view style="padding: 0 10px 10px 10px">{{ item.roomNumber }}</view>
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

<script>
import Vue from 'vue';
import request from "@/api/request";
import getUserInfo from "@/utils/utils";

export default {
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
      houseList: []
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
    getHouseList() {
      const userInfo = getUserInfo()
      request("/manage/app/getBuildingListByOwnerId", {id: userInfo.id}, "post").then(res => {
        if (res.code == 0) {
          this.houseList = res.data
          console.log('success', res);
        }
      })
    }
  },
  onShow() {
    this.getHouseList()
  }
};
</script>

<style>

</style>
