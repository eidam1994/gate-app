<template>
  <view class="content">
    <view class="example">
      <!-- 自定义表单校验 -->
      <uni-forms :label-width="100" ref="customForm" :rules="customRules" :modelValue="customFormData">
        <uni-forms-item label="租客姓名" required name="nickName">
          <uni-easyinput v-model="customFormData.nickName"/>
        </uni-forms-item>
        <uni-forms-item label="租客身份证号" required name="cardNum">
          <uni-easyinput v-model="customFormData.cardNum"/>
        </uni-forms-item>
        <uni-forms-item label="已登记房屋" required name="houseId">
          <uni-data-picker placeholder="请选择房屋" popup-title="请选择房屋" :localdata="houseList" v-model="customFormData.houseId"
                           @change="onchange" @nodeclick="onnodeclick" @popupopened="onpopupopened"
                           @popupclosed="onpopupclosed" :map="{text: 'houseName', value: 'houseId'}">
          </uni-data-picker>
        </uni-forms-item>
      </uni-forms>
      <button type="primary" @click="submit('customForm')">新增租客信息</button>
    </view>
  </view>
</template>

<script>
import Vue from 'vue';
import request from "@/api/request";
import getUserInfo from "@/utils/utils";

export default{
  data() {
    return {
      // 表单数据
      customFormData: {
        id: '',
        cardNum: '',
        nickName: '',
        houseId: '',
        buildingId: '',
        roomNumber: ''
      },
      // 自定义表单校验规则
      customRules: {
        nickName: {
          rules: [{
            required: true,
            errorMessage: '姓名不能为空'
          }]
        },
        cardNum: {
          rules: [{
            required: true,
            errorMessage: '身份证号不能为空'
          }]
        },
        houseId: {
          rules: [{
            required: true,
            errorMessage: '房屋不能为空'
          }]
        },
      },
      houseList: [],
    }
  },
  onLoad() {
  },
  methods: {
    submit(ref) {
      const form = this.$refs[ref]
      form.validate().then((res) => {
        const houseInfo = this.customFormData.houseId.split("|");
        this.customFormData.buildingId = houseInfo[0]
        this.customFormData.roomNumber = houseInfo[1]
        request("/manage/app/lesseeRegister", this.customFormData, "post").then(res => {
          if (res.code == 0) {
            uni.showToast({
              mask:true,
              title: `新增成功`
            })
            setTimeout(function () {
              uni.navigateBack({
                delta: 1
              });
            }, 800);
          } else {
            uni.showToast({
              icon: "error",
              title: res.msg
            })
          }
        })
      }).catch((err) => {
        console.log('err', err);
      })
    },
    onnodeclick(e) {
      console.log(e);
    },
    onpopupopened(e) {
      console.log('popupopened');
    },
    onpopupclosed(e) {
      console.log('popupclosed');
    },
    onchange(e) {
      console.log('onchange:', e);
    },
    getHouseList() {
      const userInfo = getUserInfo()
      this.customFormData.id = userInfo.id;
      request("/manage/app/getBuildingListByOwnerId", {id: userInfo.id, status: "2"}, "post").then(res => {
        if (res.code == 0) {
          this.houseList = res.data.map(item => {
            console.log(item, "item")
            item.houseName = item.buildingName + item.roomNumber
            item.houseId = item.buildingId + "|" + item.roomNumber
            return item
          })
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
.example {
  padding: 15px;
  background-color: #fff;
}

.segmented-control {
  margin-bottom: 15px;
}

.button-group {
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
}

.form-item {
  display: flex;
  align-items: center;
}

.button {
  display: flex;
  align-items: center;
  height: 35px;
  margin-left: 10px;
}
</style>
