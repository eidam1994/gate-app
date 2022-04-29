<template>
  <view class="content">
    <view class="example">
      <!-- 自定义表单校验 -->
      <uni-forms ref="customForm" :rules="customRules" :modelValue="customFormData">
        <uni-forms-item label="姓名" required name="name">
          <uni-easyinput v-model="customFormData.name"/>
        </uni-forms-item>
        <uni-forms-item label="租客编号" required name="code">
          <uni-easyinput v-model="customFormData.code"/>
        </uni-forms-item>
        <uni-forms-item label="房屋" required name="address">
          <uni-data-picker placeholder="请选择房屋" popup-title="请选择房屋" :localdata="dataTree" v-model="customFormData.address"
                           @change="onchange" @nodeclick="onnodeclick" @popupopened="onpopupopened"
                           @popupclosed="onpopupclosed">
          </uni-data-picker>
        </uni-forms-item>
        <uni-forms-item label="入住时间" required name="inTime">
          <uni-datetime-picker type="date" v-model="customFormData.inTime"/>
        </uni-forms-item>
      </uni-forms>
      <button type="primary" @click="submit('customForm')">新增租客信息</button>
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
        code: '',
        name: '',
        address: '',
        inTime: '',
      },
      // 自定义表单校验规则
      customRules: {
        name: {
          rules: [{
            required: true,
            errorMessage: '楼栋不能为空'
          }]
        },
        code: {
          rules: [{
            required: true,
            errorMessage: '楼栋不能为空'
          }]
        },
        address: {
          rules: [{
            required: true,
            errorMessage: '房屋不能为空'
          }]
        },
        inTime: {
          rules: [{
            required: true,
            errorMessage: '入住时间不能为空'
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
          url: '/pages/person/index'
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
