<template>
  <view class="">
    <uni-grid :column="3" :show-border="false" :square="false">
      <uni-grid-item>
        <view class="grid-item-box">
          <image class="image" :src="'/static/home.png'" mode="aspectFill" />
          <text class="text">Grid 1</text>
        </view>
      </uni-grid-item>
      <uni-grid-item>
        <view class="grid-item-box">
          <image class="image" :src="'/static/home.png'" mode="aspectFill" />
          <text class="text">Grid 1</text>
        </view>
      </uni-grid-item>
      <uni-grid-item>
        <view class="grid-item-box">
          <image class="image" :src="'/static/home.png'" mode="aspectFill" />
          <text class="text">Grid 1</text>
        </view>
      </uni-grid-item>
      <uni-grid-item>
        <view class="grid-item-box">
          <image class="image" :src="'/static/home.png'" mode="aspectFill" />
          <text class="text">Grid 1</text>
        </view>
      </uni-grid-item>
      <uni-grid-item>
        <view class="grid-item-box">
          <image class="image" :src="'/static/home.png'" mode="aspectFill" />
          <text class="text">Grid 1</text>
        </view>
      </uni-grid-item>
    </uni-grid>
  </view>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
    }
  },
  onLoad() {

  },
  methods: {},
  onShow() {

  }
});
</script>

<style>
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
