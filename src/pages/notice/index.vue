<template>
  <view>
    <uni-list>
      <uni-list-item :clickable="true" ellipsis="2" v-for="(item, i) in noticeList" :title="item.title" @click="goToDetail(item.id)" />
    </uni-list>
  </view>
</template>

<script>
import Vue from 'vue';
import request from "@/api/request";
import getUserInfo from "@/utils/utils";

export default{
  data() {
    return {
      noticeList: []
    }
  },
  onLoad() {
  },
  methods: {
    goToDetail(id) {
      uni.navigateTo({
        url: '/pages/notice/detail?noticeId=' + id
      });
    },
    getNoticeList() {
      request("/manage/app/noticeList", {}, "post").then(res => {
        if (res.code == 0) {
          this.noticeList = res.data
        }
      })
    }
  },
  onShow() {
    this.getNoticeList()
  }
};
</script>

<style>

</style>
