<template>
  <view class="content">
    <view class="example">
      <!-- 自定义表单校验 -->
      <uni-forms ref="customForm" :rules="customRules" :modelValue="customFormData">
        <uni-forms-item label="楼栋" required name="buildingId">
          <uni-data-picker placeholder="请选择楼栋" popup-title="请选择楼栋" :localdata="dataTree"
                           v-model="customFormData.buildingId" :map="{text: 'name', value: 'id'}"
          >
          </uni-data-picker>
        </uni-forms-item>
        <uni-forms-item label="房号" required name="roomNumber">
          <uni-easyinput
              type="number"
              v-model="customFormData.roomNumber"/>
        </uni-forms-item>
      </uni-forms>
      <button type="primary" @click="submit('customForm')">新增房屋信息</button>
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
        buildingId: '',
        roomNumber: '',
      },
      // 自定义表单校验规则
      customRules: {
        buildingId: {
          rules: [{
            required: true,
            errorMessage: '楼栋不能为空'
          }]
        },
        roomNumber: {
          rules: [{
            required: true,
            errorMessage: '房号不能为空'
          }]
        },
      },
      dataTree: []
    }
  },
  onLoad() {
  },
  methods: {
    submit(ref) {
      const form = this.$refs[ref]
      form.validate().then(() => {
        const userInfo = getUserInfo()
        request("/manage/app/houseRegister", {id: userInfo.id, ...this.customFormData}, "post").then(res => {
          if (res.code == 0) {
            uni.showToast({
              mask:true,
              title: `登记成功`
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
    getBuildingList() {
      request("/manage/app/getBuildingList", {}, "post").then(res => {
        if (res.code == 0) {
          this.dataTree = res.data
        }
      })
    }
  },
  onShow() {
    this.getBuildingList()
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
