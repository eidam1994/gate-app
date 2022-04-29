<template>
  <view class="content">
    <view class="example">
      <!-- 自定义表单校验 -->
      <uni-forms ref="customForm" :rules="customRules" :modelValue="customFormData">
        <uni-forms-item label="小区" name="district">
          <uni-easyinput disabled :styles="{ disableColor: '#fff', borderColor: '#e5e5e5'}"
                         v-model="customFormData.district"/>
        </uni-forms-item>
        <uni-forms-item label="楼栋" required name="address">
          <uni-data-picker placeholder="请选择楼栋" popup-title="请选择楼栋" :localdata="dataTree" v-model="customFormData.address"
                           @change="onchange" @nodeclick="onnodeclick" @popupopened="onpopupopened"
                           @popupclosed="onpopupclosed">
          </uni-data-picker>
        </uni-forms-item>
        <uni-forms-item label="房号" required name="roomNo">
          <uni-easyinput
              v-model="customFormData.roomNo"/>
        </uni-forms-item>
      </uni-forms>
      <button type="primary" @click="submit('customForm')">新增房屋信息</button>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      // 表单数据
      customFormData: {
        district: 'XXX小区',
        address: '',
        roomNo: '',
      },
      // 自定义表单校验规则
      customRules: {
        address: {
          rules: [{
            required: true,
            errorMessage: '楼栋不能为空'
          }]
        },
        roomNo: {
          rules: [{
            required: true,
            errorMessage: '房号不能为空'
          }]
        },
      },
      classes: '1-2',
      dataTree: [{
        text: "一年级",
        value: "1-0",
      },
        {
          text: "二年级",
          value: "2-0",
        },
        {
          text: "三年级",
          value: "3-0",
        }]
    }
  },
  onLoad() {
  },
  methods: {
    submit(ref: string | number) {
      const form:any = this.$refs[ref]
      form.validate().then((res: any) => {
        console.log('success', res);
        uni.redirectTo({
          url: '/pages/house/index'
        });
      }).catch((err: any) => {
        console.log('err', err);
      })
    },
    onnodeclick(e: any) {
      console.log(e);
    },
    onpopupopened(e: any) {
      console.log('popupopened');
    },
    onpopupclosed(e: any) {
      console.log('popupclosed');
    },
    onchange(e: any) {
      console.log('onchange:', e);
    }
  }
});
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
