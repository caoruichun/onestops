<!-- 侧边栏 -->
<template>
  <div class="sideBar">
    <div class="sideTitle"><div>TBS</div></div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="moreOpen"
      @close="moreClose"
      @select="sideChange"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <div v-for="(data,index) in sideList" :key="index">
        <el-submenu :index="index" v-if="data.opition">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>{{ data.item }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="index+'-'+num" v-for="(info,num) in data.opition" :key="num">
              <span slot="title">{{ info }}</span>
            </el-menu-item>
          </el-menu-item-group>             
        </el-submenu>
        <el-menu-item :index="index" v-else>
          <i class="el-icon-menu"></i>
          <span slot="title">{{ data.item }}</span>
        </el-menu-item>       
      </div>
    </el-menu>    
  </div>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
