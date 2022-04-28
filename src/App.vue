<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({
        mpType: 'app',
        onLaunch() {
          uni.onTabBarMidButtonTap(() => {
            uni.navigateTo({url: "/pages/open/index"})
          })
        },
      onLoad() {
      },
        onShow() {
        },
        onHide() {
            console.log('App Hide')
        }
    });
</script>

<style>
.uni-card {
  padding: 0px !important;
}

.uni-card__content {
  padding: 0px !important;
}

.uni-page-head__title {
  font-weight: normal !important;
}
    /*每个页面公共css */
</style>
