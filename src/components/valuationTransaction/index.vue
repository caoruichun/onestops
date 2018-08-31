<template>
<!-- 估值交易 -->
<el-row class="valutionTranscation">
    <el-col :span="24" class="bigbox">
      <h3>基准利率概览</h3>
      <div class="Nav">
        <span v-for="(item,index) in tabData" :class="{active:index==0}"  @click="change(index)">{{item}}</span>
      </div>
      <!-- 公开市场操作  -->
       <el-card class="box-card " v-show="datashow === 0">
           <div id = "gongkai" class="echartshow"></div>
           <span class="slabel">净<br />投<br />放</span>
           <span class="slabel2">净<br  />回<br />笼</span>
       </el-card>
       <!--同行拆借利率  -->
        <el-card class="box-card" v-show="datashow === 1">
          <div id = "tonghang" class="echartshow"></div>
        </el-card>
        <!-- 质押回购利率 -->
        <el-card class="box-card" v-show="datashow === 2">
          <div id = "zhiya" class="echartshow"></div>
        </el-card>

        <!--国开债利率-->
         <el-card class="box-card" v-show="datashow === 3">
            <div id = "zhaiwu" class="echartshow"></div>
         </el-card>
    </el-col>

    <!--存续券市场交易行情  -->
    <el-col :span="24" class="bigbox" v-show="cunxuFlag">
      <h3>存续券市场交易行情</h3>
      <div class="cunxu">
        <el-row>

          <el-col :span="24">
            <!-- QB后台临时按钮 -->
            <!-- <el-button style="position: absolute;top: 0;right: 16%;" type="primary" @click="QBJurisdiction">QB后台</el-button> -->
            <el-button class="enterpriseBtn" type="primary" @click="exportEXCEL">导出至EXCEL</el-button>
          </el-col>
        </el-row>
        <el-table :data="tableData" border @header-click="tableOrder">
          <el-table-column :prop="item.key" :label="item.label" :width="item.twidth" :render-header="renderHeader"  :formatter="isNUll" :key="index" v-for="(item,index) in table_headcxsc"></el-table-column>
        </el-table>
      </div>

      <!-- 分页 -->
     <pagination-template :pagination="pageInfo" v-on:paginationNum="changePage"></pagination-template>
    </el-col>
	</el-row>


</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
