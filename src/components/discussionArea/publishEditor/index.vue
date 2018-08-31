<!--讨论区二级页面-->
<template>
  <el-row class="publishEditor">
    <div class="returnBtn" :span="24">
      <!-- 后台审核临时按钮 -->
      <!-- <el-button type="primary" @click="getDescribe">后台审核</el-button> -->
      <el-button type="primary" @click="goback">返回上级</el-button>
    </div>
    <div class="boxradow">
      <el-row class="pointHeader">
        <el-col :span="17" class="textfl">主&emsp;题：<span>{{tableDatamaic[0].subjectName}}</span></el-col>
        <el-col :span="7" class="textfr"><span>{{tableDatamaic[0].sendSubTime | timeFilter('yyyy.mm.dd/hh:mm')}}</span></el-col>
        <el-col :span="24" class="pointName">发起人：<span>{{tableDatamaic[0].subAnonymous==0?tableDatamaic[0].sendSubName:'匿名用户'}}&emsp; {{tableDatamaic[0].subAnonymous==0?tableDatamaic[0].sendSubNameMent:''}}</span></el-col>
      </el-row>
      <div class="pointMain">
        <el-row>
          <el-col :span="24" class="pointMain-head" style="min-height:200px;padding-top:10px">&emsp;&emsp;<span v-html="zhusubjectMsg">{{zhusubjectMsg}}</span></el-col>
          <el-col :span="24">附件：<span class="dia-document2" v-for="item in tableDatamaic" :key="item.subPathId">
            {{item.replyPathName?item.replyPathName:item.subPathName}}
            <!-- <a class="download-document" v-if="item.replyPathName" @click="downdocument(item.replyPath)">下载</a>
            <a class="download-document" v-if="item.subPathName" @click="downdocument(item.subPath)">下载</a> -->
            <a class="download-document" v-if="item.replyPathName" :href="item.replyPath" :download="item.replyPathName" target="_blank"><span>下载</span></a>
            <a class="download-document" v-if="item.subPathName" :href="item.subPath" :download="item.subPath" target="_blank"><span>下载</span></a>
          </span></el-col>
          <el-col :span="24" class="point-resize textfr">
              <span @click="agreeOr(1,tableDatamaic[0].subId,0)">
                <span class="glyphicon glyphicon-thumbs-up"></span>
                <span>赞</span>
                <span>({{subSize}})</span>
              </span>
            <el-button @click="outerVisiblee(tableDatamaic[0].subId,tableDatamaic[0].subjectName,1)" type="primary">回复主题</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="replay" v-for='(item,index) in tableData' :key="item.replyId">
        <el-row class="replay-tit">
          <el-col :span="17" class="textfl">回复人：<span>{{item.replyAnonymous==0?item.replyName:'匿名用户'}} &emsp;{{item.replyAnonymous==0?item.replyNameMent:''}}</span></el-col>
          <el-col :span="7" class="textfr"><span>{{item.replyTime | timeFilter('yyyy.mm.dd/hh:mm')}}</span></el-col>
        </el-row>
        <el-row class="replay-centen">
          <el-col :span="24" class="replayMain" v-html="item.replyMsg">{{item.replyMsg}}</el-col>
          <el-col :span="24" v-if="item.replyPathName">附件：
            <span v-for="(a,index) in item.replyPathName" class="dia-document2">
            {{a}}
            <a class="download-document" v-if="a" :href="item.replyPath[index]" :download="a">
              <span>下载</span>
            </a>
          </span>
        </el-col>
        <el-col v-if="item.replyObject==2" :span="24" class="replay-point">回复<span class="replayName">{{item.subAnonymous==0?item.sendSubName:'匿名用户'}} {{item.subAnonymous==0?item.sendSubNameMent:''}}</span>于<span class="replayTime">{{item.sendSubTime | timeFilter('yyyy.mm.dd/hh:mm')}}</span>对本主题的回复</el-col>
          <el-col :span="24" class="point-resize textfr">
            <span @click="agreeOr(2,item.replyId,index)">
            <span class="glyphicon glyphicon-thumbs-up"></span>
            <span>赞</span>
            <span>({{item.replySize}})</span>
            </span>
            <el-button @click="outerVisiblee(item.subId,item.subjectName,2,item.replyId,item.replyName)" type="primary">回复ta</el-button>
          </el-col>
        </el-row>
      </div>
      <!-- <div class="replay" v-for='(item,index) in tableData' v-if="item.replyObject==2" :key="item.replyId">
        <el-row class="replay-tit">
          <el-col :span="17" class="textfl">回复人：<span>{{item.replyAnonymous==0?item.replyName:'匿名用户'}} &emsp;{{item.replyAnonymous==0?item.replyNameMent:''}}</span></el-col>
          <el-col :span="7" class="textfr"><span>{{item.replyTime | timeFilter('yyyy.mm.dd/hh:mm')}}</span></el-col>
        </el-row>
          <el-row class="replay-centen">
          <el-col :span="24" class="replayMain" v-html="item.replyMsg">{{item.replyMsg}}</el-col>
          <el-col :span="24" v-if="item.replyPathName">附件：
            <span v-for="(a,index) in item.replyPathName" class="dia-document2">
            {{a}}
            <a class="download-document" v-if="a" :href="item.replyPath[index]" :download="a">
              <span>下载</span>
            </a>
          </span>
        </el-col>
          <el-col :span="24" class="replay-point">回复<span class="replayName">{{item.subAnonymous==0?item.sendSubName:'匿名用户'}} {{item.subAnonymous==0?item.sendSubNameMent:''}}</span>于<span class="replayTime">{{item.sendSubTime | timeFilter('yyyy.mm.dd/hh:mm')}}</span>对本主题的回复</el-col>
          <el-col :span="24" class="point-resize textfr">
            <span @click="agreeOr(2,item.replyId,index)">
                <span class="glyphicon glyphicon-thumbs-up"></span>
                <span>赞</span>
                <span>({{item.replySize}})</span>
          </span>
              <el-button @click="outerVisiblee(item.subId,item.subjectName,2,item.replyId,item.replyName)" type="primary">回复ta</el-button>
          </el-col>
        </el-row>
      </div> -->
    </div>
    <!-- 分页 -->
		<pagination-template :pagination="pageInfo" v-on:paginationNum="changePage"></pagination-template>
    <!-- 回复弹窗 -->
    <template>
      <div v-if="outerVisible">
      <el-dialog :visible.sync="outerVisible">
        <el-input class="impormain" placeholder="请输入内容" v-model="input3" :disabled="true">
          <template slot="prepend" v-if="addflag">主题</template>
          <template slot="prepend" v-if="!addflag">回复</template>
        </el-input>
        <UEditor></UEditor>
        <div>上传附件： <span class="dia-document" @click="delet($event)"></span> </div>
        <el-dialog :visible.sync="innerVisible" append-to-body class="centerdia" style="margin-top:15vh">
          <div>尊敬的用户：</div>
          <div style="text-indent: 2em;margin-bottom: 20px;border-bottom: 1px dashed #d1d1d1;padding-bottom: 20px"><span>您所发表的信息将通过平台管理员审核后发布，谢谢您的理解和支持。</span></div>
          <div class="documbutton" style="text-align: right">
            <el-button style="margin-right: 20px" type="" @click="innerVisible = false">取消发布</el-button>
            <el-button type="primary" :plain="true" @click="replaySubOrReplayList()" :disabled = "disabled">确认发布</el-button>
          </div>
        </el-dialog>
        <div slot="footer" class="dialog-footer">
          <el-checkbox v-model="checked" @change="changeName">匿名发布</el-checkbox>
          <el-button type="primary" @click="innerVisible = true">发布</el-button>
        </div>
      </el-dialog>
    </div>
    </template>
  </el-row>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
