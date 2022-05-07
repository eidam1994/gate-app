<template>
  <view class="">
    <uni-card>
      <image src="/static/welcome.jpeg"></image>
    </uni-card>
    <uni-card>
      <uni-grid :column="3" :show-border="false" :square="false">
        <uni-grid-item>
          <view @click="goToHouse" class="grid-item-box">
            <image class="image" :src="'/static/house.png'" mode="aspectFill" />
            <text class="text">房屋登记</text>
          </view>
        </uni-grid-item>
        <uni-grid-item>
          <view @click="goToPerson" class="grid-item-box">
            <image class="image" :src="'/static/addPerson.png'" mode="aspectFill" />
            <text class="text">租客登记</text>
          </view>
        </uni-grid-item>
        <uni-grid-item>
          <view @click="onClick" class="grid-item-box">
            <image class="image" :src="'/static/netPay.png'" mode="aspectFill" />
            <text class="text">缴纳网费</text>
          </view>
        </uni-grid-item>
        <uni-grid-item>
          <view @click="onClick" class="grid-item-box">
            <image class="image" :src="'/static/rent.png'" mode="aspectFill" />
            <text class="text">缴纳房租</text>
          </view>
        </uni-grid-item>
        <uni-grid-item>
          <view class="grid-item-box">
            <image class="image" :src="'/static/account.png'" mode="aspectFill" />
            <text class="text">个人中心</text>
          </view>
        </uni-grid-item>
      </uni-grid>
    </uni-card>
    <uni-card title="社区活动">
      <view class="communicate">
        <cover-image style="width: 50px;width: 50px" src="/static/empty.png"></cover-image>
      </view>
    </uni-card>
  </view>
</template>

<script>
import Vue from 'vue';

export default{
  data() {
    return {
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
    onClick() {
      uni.showToast({
        title: `正在建设中`,
        icon: 'error',
        mask: true
      })
    }
  },
  onShow() {

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
