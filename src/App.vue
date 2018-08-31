<template>
  <div id="app" v-loading="mainloading" v-cloak>
    <router-view/>
    <!-- 加载等待 -->
    <i id="pageLoading" class="el-icon-loading"></i>
    <!-- session校验提示 -->
    <!-- <div id="sessionSmall" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="sessionSmallTitall" aria-hidden="true">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>
            <h4 class="modal-title" id="sessionSmallTitall">提示</h4>
          </div>
          <div class="modal-body">session已过期！</div>
          <div class="modal-footer">
            <button id="returnEntry" type="button" class="btn btn-default" data-dismiss="modal">返回</button>
          </div>
        </div>
      </div>
    </div> -->
    <!-- 功能不支持提示 -->
    <div id="infoSmall" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="infoSmallTitall" aria-hidden="true">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>
            <h4 class="modal-title" id="infoSmallTitall">提示</h4>
          </div>
          <div class="modal-body">该浏览器暂不支持该功能，请切换为其他浏览器！</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="./main.less" lang="less"></style>
<script type="text/javascript" :src="require('babel-polyfill')"></script>
<script>
	export default {
	  name: 'app',
    data() {
      return {
        mainloading: true // 页面加载中
      }
    },
    created() {
      this.mainloading = true;
    },
    mounted() {
      this.mainloading = false;
    },
	}
</script>