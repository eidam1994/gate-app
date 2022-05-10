<template>
  <view class="">
      <image src="/static/welcome.jpeg" style="width: 100%"></image>
    <uni-card>
      <uni-grid :column="3" :show-border="false" :square="false">
        <uni-grid-item v-if="userInfo.type === '1'">
          <view @click="goToHouse" class="grid-item-box">
            <image class="image" :src="'/static/house.png'" mode="aspectFill" />
            <text class="text">房屋登记</text>
          </view>
        </uni-grid-item>
        <uni-grid-item v-if="userInfo.type === '1'">
          <view @click="goToPerson" class="grid-item-box">
            <image class="image" :src="'/static/addPerson.png'" mode="aspectFill" />
            <text class="text">租客登记</text>
          </view>
        </uni-grid-item>
        <uni-grid-item v-if="userInfo.type === '2'">
          <view @click="onClick" class="grid-item-box">
            <image class="image" :src="'/static/netPay.png'" mode="aspectFill" />
            <text class="text">缴纳网费</text>
          </view>
        </uni-grid-item>
        <uni-grid-item v-if="userInfo.type === '2'">
          <view @click="onClick" class="grid-item-box">
            <image class="image" :src="'/static/rent.png'" mode="aspectFill" />
            <text class="text">缴纳房租</text>
          </view>
        </uni-grid-item>
        <uni-grid-item>
          <view @click="goToAccount" class="grid-item-box">
            <image class="image" :src="'/static/account.png'" mode="aspectFill" />
            <text class="text">个人中心</text>
          </view>
        </uni-grid-item>
      </uni-grid>
    </uni-card>
    <uni-card>
      <template v-slot:title>
        <uni-nav-bar>
          <block slot="left">
            <view style="font-size: 15px">
              社区活动
            </view>
          </block>
          <block v-if="noticeList.length !== 0" slot="right">
            <view class="city" @click="goToNotice">
              查看更多 >
            </view>
          </block>
        </uni-nav-bar>
      </template>
      <view :class="{'communicate' : noticeList.length === 0}">
        <image v-if="noticeList.length === 0" style="width: 50px;height: 50px" src="/static/empty.png"></image>
        <uni-list v-if="noticeList.length !== 0">
          <uni-list-item :clickable="true" ellipsis="1" v-for="(item, i) in noticeList" :title="item.title" @click="goToDetail(item.id)" />
        </uni-list>
      </view>
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
      noticeList: [],
      userInfo: null
    }
  },
  onLoad() {

  },
  methods: {
    goToHouse() {
      uni.navigateTo({
        url: '/pages/house/index'
      });
    },
    goToPerson() {
      uni.navigateTo({
        url: '/pages/person/index'
      });
    },
    goToAccount() {
      uni.navigateTo({
        url: '/pages/account/info'
      });
    },
    goToNotice() {
      uni.navigateTo({
        url: '/pages/notice/index'
      });
    },
    goToDetail(id) {
      uni.navigateTo({
        url: '/pages/notice/detail?noticeId=' + id
      });
    },
    onClick() {
      uni.showToast({
        title: `正在建设中`,
        icon: 'error',
        mask: true
      })
    },
    getNoticeList() {
      request("/manage/app/noticeList", {}, "post").then(res => {
        if (res.code == 0) {
          this.noticeList = []
          for (let i = 0; i < res.data.length; i++) {
            this.noticeList.push(res.data[i])
            if (i === 2) {
              break;
            }
          }
        }
      })
    }
  },
  onShow() {
    this.userInfo = getUserInfo()
    this.getNoticeList()
  }
};
</script>

<style>
.communicate{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
}

.image {
  width: 25px;
  height: 25px;
}

.text {
  font-size: 14px;
  margin-top: 5px;
}

.example-body {
  /* #ifndef APP-NVUE */
// display: block;
  /* #endif */
}

.grid-dynamic-box {
  margin-bottom: 15px;
}

.grid-item-box {
  flex: 1;
// position: relative;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
}

.grid-item-box-row {
  flex: 1;
// position: relative;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
}

.grid-dot {
  position: absolute;
  top: 5px;
  right: 15px;
}

.swiper {
  height: 420px;
}

/* #ifdef H5 */
@media screen and (min-width: 768px) and (max-width: 1425px) {
  .swiper {
    height: 630px;
  }
}

@media screen and (min-width: 1425px) {
  .swiper {
    height: 830px;
  }
}

/* #endif */
</style>
