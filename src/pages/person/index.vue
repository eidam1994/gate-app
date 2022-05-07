<template>
  <view>
    <uni-list :border="false">
      <view class="list-view" v-for="(item, i) in personList" @longpress="longpress(item.id)">
        <uni-list-item :title="item.name" :note="item.buildingName + item.roomNumber"/>
      </view>
    </uni-list>
    <uni-fab ref="fab" :pattern="pattern" :horizontal="horizontal" :vertical="vertical"
             :direction="direction" @fabClick="fabClick" />
  </view>
</template>

<script>
import Vue from 'vue';
import request from "@/api/request";
import getUserInfo from "@/utils/utils";

export default{
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
      personList: []
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
    longpress(id) {
      const that = this;
      uni.showModal({
        content: '确定要删除该租客信息吗？',
        confirmText: '删除',
        confirmColor: 'red',
        success: function (res) {
          if (res.confirm) {
            request("/manage/app/delLesseeById", {id: id}, "post").then(res => {
              if (res.code == 0) {
                uni.showToast({
                  mask:true,
                  title: `删除成功`
                })
                that.getPersonList()
              }
            })
          } else if (res.cancel) {
          }
        }
      });
    },
    getPersonList() {
      const userInfo = getUserInfo()
      request("/manage/app/getLesseeList", {id: userInfo.id}, "post").then(res => {
        if (res.code == 0) {
          this.personList = res.data
          console.log('success', res);
        }
      })
    }
  },
  onShow() {
    this.getPersonList()
  }
};
</script>

<style>
  .uni-list-item {
    border-bottom: 1px solid #e5e5e5 !important;
  }
</style>
