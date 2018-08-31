<!-- 讨论区 -->
<template>
	<el-row class="discussionArea" gutter="10">
    <!--搜索模块-->
    <el-row class="serch-bgm">
      <el-col :span="8">
        <span class="lable-span">关键字搜索：</span>
        <el-input
          placeholder="请输入内容"
          v-model="input"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="7">
        <span class="lable-span">发布时间：</span>
        <template>
          <el-select v-model="value6" placeholder="请选择" style="width: 60%" @change="change">
            <el-option
              v-for="item in cities"
              :key="item.value"
              :value="item.value"
							:symble="item.symble">
              <span>{{ item.value }}</span>
            </el-option>
          </el-select>
        </template>
      </el-col>
      <el-col :span="3">
        <el-row>
          <el-button @click='searchDate' type="primary">搜索</el-button>
        </el-row>
      </el-col>
			<el-col :span="3">
        <el-row>
          <el-button @click='clearsearchDate' type="primary">清空搜索</el-button>
        </el-row>
      </el-col>
			<!-- <el-col :span="6">
        <el-row>
					<el-input class="impormain" placeholder="请输入标题" v-model="state4">
					</el-input>
        </el-row>
      </el-col> -->
      <el-col :span="3" class="tr">
        <el-row>
            <el-button @click="outerVisibleS" type="primary">我要发言</el-button>
        </el-row>
      </el-col>
      <!--发言弹窗-->
      <template>
				<div v-if="outerVisible">
	        <el-dialog :visible.sync="outerVisible">
	          <el-input class="impormain" placeholder="请输入标题" v-model="input3">
	          </el-input>
	          <UEditor></UEditor>
	          <div>上传附件： <span class="dia-document" @click="delet($event)"></span></div>
	          <el-dialog :visible.sync="innerVisible" append-to-body class="centerdia" style="margin-top:15vh">
	            <div>尊敬的用户：</div>
	            <div style="text-indent: 2em;margin-bottom: 20px;border-bottom: 1px dashed #d1d1d1;padding-bottom: 20px"><span>您所发表的信息将通过平台管理员审核后发布，谢谢您的理解和支持。</span></div>
	            <div class="documbutton" style="text-align: right">
	              <el-button style="margin-right: 20px" type="" @click="innerVisible = false">取消发布</el-button>
								<el-button type="primary" :plain="true" @click="open" :disabled = "disabled">确认发布</el-button>
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
    <!--信息展示-->
    <table class="table table-bordered">
      <thead>
      <tr class="tableTitle">
        <th>序号</th>
        <th>主题</th>
        <th>发起</th>
        <th>最新回复</th>
      </tr>
      </thead>
      <tbody>
      <tr class="tableContain" v-for="(item,index) in tableData" :key="item.name" @click="getDescribe(item.subId)">
        <td class="tableContain-td">{{index+pageInfo.startRow}}</td>
        <td style="width:35rem" class="tableContain-td secod-point">{{item.subjectName}}</td>
        <td>
          <div>{{item.subAnonymous==0?item.sendSubName:'匿名用户'}} &emsp;{{item.subAnonymous==0?item.sendSubNameMent:''}}</div>
          <div>{{item.sendSubTime | timeFilter('yyyy.mm.dd/hh:mm')}}</div>
        </td>
        <td>
				<div v-if="item.replyTime != item.sendSubTime">
				<div>{{item.replyAnonymous==0?item.replyName:'匿名用户'}} &emsp;{{item.replyAnonymous==0?item.replyNameMent:''}}</div>
				<div v-if="item.replyTime">{{item.replyTime | timeFilter('yyyy.mm.dd/hh:mm')}}</div>
				</div>
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
