<!-- 核心经营指标 -->
<template>
  <div class="centerBusiness">
    <el-row>
      <!--核心经营指标 三级导航  -->
        <el-col :span="24" class="col_nav">
          <router-link  to="/chengTou" class="span1">城投</router-link>
          <router-link  to="/Tong" class="span1">铜</router-link>
          <router-link  to="/gongShui" class="span1">供水</router-link>
        </el-col>
    </el-row>
   <div class="centerBusiness_con">
     <router-view></router-view>
   </div>

<!--投融资  -->
  </div>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
