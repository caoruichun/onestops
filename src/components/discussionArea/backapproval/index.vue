<!-- 讨论区 -->
<template>
  <el-row class="backapproval" gutter="10">
    <!--搜索模块-->
    <el-row class="serch-bgm">
      <el-col :span="8">
        <span class="lable-span">关键字搜索：</span>
        <el-input
          placeholder="请输入内容"
          v-model="input10"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="7">
        <span>发布时间：</span>
        <template>
          <el-select v-model="value6" placeholder="请选择" style="width: 65%" @change="change">
            <el-option
              v-for="item in cities"
              :key="item.value"
              :value="item.value">
              <span>{{ item.value }}</span>
            </el-option>
          </el-select>
        </template>
      </el-col>
      <el-col :span="3">
        <el-row>
          <el-button type="primary" @click='searchDate'>搜索</el-button>
        </el-row>
      </el-col>
      <el-col :span="6" style="text-align:right">
        <el-row>
          <el-button @click='clearsearchDate' type="primary">清空搜索</el-button>
        </el-row>
      </el-col>
      <template>
        <el-dialog :visible.sync="outerVisible" :before-close="close">
          <el-input class="impormain" placeholder="请输入内容" v-model="input3" :disabled="true">
            <template slot="prepend" v-if="addflag">主题</template>
            <template slot="prepend" v-if="!addflag">回复</template>
          </el-input>
          <div class="massage">
            <span v-html="tabjectmsg">
              {{tabjectmsg}}
            </span>
            <!-- <input id="temp" type="hidden" value="{{tableDataalet[0].subjectMsg}}"> -->
            <!-- {{tabjectmsg}} -->
          </div>
          <div class="dia-document">上传附件：
            <span v-for="item in tableDataalet">
              {{item.replyPathName?item.replyPathName:item.subPathName}}
              <a class="download-document" v-if="item.replyPathName" :href="item.replyPath" :download="item.replyPathName" target="_blank"><span>下载</span></a>
              <a class="download-document" v-if="item.subPathName" :href="item.subPath" :download="item.subPath" target="_blank"><span>下载</span></a>
            </span>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button type="" v-if="flag" :plain="true" @click="innerVisibled(2)">拒绝发布</el-button>
            <el-button type="primary" v-if="flag2" :plain="true" @click="innerVisibled(1)">审核通过</el-button>
          </div>
        </el-dialog>
      </template>
    </el-row>
    <!--信息展示-->
    <table class="table table-bordered">
      <thead>
      <tr class="tableTitle">
        <th>序号</th>
        <th>主题</th>
        <th>发起/回复人信息</th>
        <th>类型</th>
        <th>处理状态</th>
        <th>处理人/处理结果</th>
      </tr>
      </thead>
      <tbody>
      <tr class="tableContain" v-for="(item,index) in tableData" :key="item.subId" @click="outerVisibled(item.subType,item.subId,item.subStatus)">
        <td class="tableContain-td">{{index+pageInfo.startRow}}</td>
        <td style="width:35rem" class="tableContain-td secod-point">{{item.subjectName}}</td>
        <td>
          <div>{{item.sendSubName}}&emsp;{{item.sendSubNameMent}}</div>
          <div v-if="item.subAnonymous==1">(匿名发布)</div>
          <div>{{item.sendSubTime  | timeFilter('yyyy.mm.dd/hh:mm')}}</div>
        </td>
        <td class="tableContain-td">
          {{item.subType}}
        </td>
        <td class="tableContain-td">
          {{item.subApprovalStatus}}
        </td>
        <td>
          <div>{{item.subApprovalName}}&emsp;{{item.subStatus}}</div>
          <div v-if="item.subApprovalTime">{{item.subApprovalTime | timeFilter('yyyy.mm.dd/hh:mm')}}</div>
          <div v-if="!item.subApprovalTime"></div>
        </td>
      </tr>
      </tbody>
    </table>
    <!-- 分页 -->
		<pagination-template :pagination="pageInfo" v-on:paginationNum="changePage"></pagination-template>
  </el-row>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
