<!-- 财务分析 -->
<template>
	<el-row class="financialAnalysis">
		<!-- 锚点 -->
		<span :class="anchorPucker?'anchorList anchorOut':'anchorList anchorIn'">
			<p :class="anchorNum==0?'anchorTrue':'anchorFalse'" @click="anchorBTN(0)"><i class="fa fa-circle" aria-hidden="true"></i>1.本企业财务指标</p>
			<p :class="anchorNum==1?'anchorTrue':'anchorFalse'" @click="anchorBTN(1)"><i class="fa fa-circle" aria-hidden="true"></i>2.同行业发债企业财务指标</p>
			<i class="fa fa-caret-right" @click="anchorFold"></i>
		</span>
		<el-col :span="24">
  		<!-- 本企业 -->
			<el-card class="box-card enterprise">
			  <div slot="header" class="clearfix">
			    <span id="anchorA">1.本企业财务指标</span>
			  </div>
			  <!--导出EXCEL -->
		    <el-button class="enterpriseBtn" type="primary" @click="exportEXCEL">导出至EXCEL</el-button>
			  <!-- 标签切换 -->
			  <el-tabs v-model="enterpriseNum[1]" @tab-click="enterpriseChange">
			    <el-tab-pane :label="data.label" :name="data.eNum" :key="data.eNum" v-for="data in labelList">	
			    </el-tab-pane>
			  </el-tabs>
			  <!-- 表格 -->
    		<tableInnerA v-if="enterpriseTable" :tableNumA="enterpriseNum"></tableInnerA>
			</el-card>
		</el-col>
		<el-col :span="24">
  		<!-- 同行业发债企业财务指标 -->
			<el-card class="box-card sameIndustry">
			  <div slot="header" class="clearfix">
			    <span id="anchorB">2.同行业发债企业财务指标</span>
			  </div>
				<!-- 时间选择 -->
				<div class="timeSelector">				
					<b>日期选择：</b>
					<el-select v-model="timeInfo.timeValue" filterable placeholder="">
						<el-option v-for="item in timeInfo.timeList" :key="item" :label="item" :value="item"></el-option>
					</el-select>
					<el-button type="primary" @click="timeSelectBtn">搜&nbsp;索</el-button>
					<el-tag type="warning">提</el-tag>
					数据说明：
					<span class="valTag maxTag">红色</span>-最大值
					<span class="valTag minTag">绿色</span>-最小值
					<span class="valTag medTag">蓝色</span>-中位数
					<span class="valTag aveTag">黄色</span>-平均值
				</div>
				<!-- 标签切换 -->
			  <el-tabs v-model="sameIndustryNum[1]" @tab-click="sameIndustryChange">
			    <el-tab-pane :label="data.label" :name="data.sNum" :key="data.sNum" v-for="data in labelList">
		    	</el-tab-pane>
			  </el-tabs>
			  <!-- 表格 -->
	    	<tableInnerB v-if="sameIndustryTable" :tableNumB="sameIndustryNum"></tableInnerB>
			</el-card>
		</el-col>
	</el-row>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>