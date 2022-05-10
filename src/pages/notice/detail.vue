<template>
  <view v-html="content">

  </view>
</template>

<script>
import Vue from 'vue';
import request from "@/api/request";
import getUserInfo from "@/utils/utils";

export default{
  data() {
    return {
      content: '',
      noticeId: ''
    }
  },
  onLoad(option) {
    this.noticeId = option.noticeId
    this.getDetail()
  },
  methods: {
    getDetail() {
      request("/manage/app/noticeInfo", {noticeId: this.noticeId}, "post").then(res => {
        if (res.code == 0) {
          this.content = res.data.content
        }
      })
    }
  },
  onShow() {

  },
};
</script>

<style>

</style>
