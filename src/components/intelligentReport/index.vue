<!-- 智能报告 -->
<template>
	<el-row class="intelligentReport">
  	<el-col :span="24">
			<!-- 锚点 -->
			<span :class="anchorPucker?'anchorList anchorOut':'anchorList anchorIn'">
				<p :class="anchorNum==0?'anchorTrue':'anchorFalse'" @click="anchorBTN(0)"><i class="fa fa-circle" aria-hidden="true"></i>1.评价报告</p>
				<p :class="anchorNum==1?'anchorTrue':'anchorFalse'" @click="anchorBTN(1)"><i class="fa fa-circle" aria-hidden="true"></i>2.自动生成报告</p>
				<i class="fa fa-caret-right" @click="anchorFold"></i>
			</span>
  		<!-- 评价报告 -->
			<el-card class="box-card assessmentReport">
				<div slot="header" class="clearfix">
			    <span id="anchorA">1.评价报告</span>
			  </div>
			  <!-- 标签切换 -->
			  <el-tabs v-model="selectTab" @tab-click="changeTab">
			    <el-tab-pane v-for="(item,index) in reportTabs" :name="item" :key="index" :label="item">	
			    </el-tab-pane>
			  </el-tabs>
			  <!-- 报告列表 -->
			  <el-table v-if="reportList.length>0" :data="reportList" @cell-click="printFile" border>
			  	<el-table-column :resizable="false" :formatter="reportListCellVal" :column-key="index" align="center" :prop="item.key" :label="item.label" :width="item.twidth" v-for="(item, index) in reportHead" :key="index"></el-table-column>
			  </el-table>
			  <div v-else>{{ selectTab== '中债报告' ? '无中债报告' : '无其他机构报告' }}</div>
				<!-- 分页 -->
				<pagination-template v-if="reportList.length>0" :pagination="pageInfo" v-on:paginationNum="changePage"></pagination-template>
				<!-- 预览下载 -->
				<el-dialog class="showPDFDialog" :title="pdfShowTitle" :visible.sync="showPDF" :width="pdfWidth" :top="pdfMarginTop">
					<div class="pdfEmbed_outer" :style="'height:'+pdfEmbedHeight">
						<div class="pdfEmbed_control pdfHeader">
							<h5>{{ pdfShowTitle }}</h5>
							<i class="fa fa-download" @click="pdfdownload"></i>
							<!-- <i class="fa fa-print" @click="printPDF"></i> -->
							<i :class="pdfShowClass" @click="maxResPdf"></i>
							<i class="fa fa-times" @click="showPDF=false"></i>
						</div>
						<iframe id="pdfEmbed" :src="pdfShowLink"></iframe>
					</div>
				</el-dialog>
			</el-card>
  		<!-- 自动生成报告 -->
			<el-card class="box-card automaticReport">
				<div slot="header" class="clearfix">
			    <span id="anchorA">2.自动生成报告</span>
			  </div>
			  <el-upload class="upload-demo" :multiple="false" :action="uploadIMGURL" :on-success="ueditorPrependHmtl" :on-error="ueditorPrependHmtl">
			  	<el-button size="small" type="primary">上传LOGO</el-button>
			  </el-upload>
			  <el-button type="primary" @click="outputPDFShow=true,outputPDFTitle=''">报告导出</el-button>
			  <!-- <el-button type="primary" @click="outputPDF">报告导出</el-button> -->
				<!-- 导出报告的内容 -->
				<div id="outputReportHTML"></div>
				<!-- 报告导出的弹窗 -->
				<el-dialog title="报告导出" width="30%" v-if="outputPDFShow" :visible.sync="outputPDFShow">
					<el-input v-model="outputPDFTitle" placeholder="请输入报告名称"></el-input>
					<span slot="footer" class="dialog-footer">
						<el-button @click="outputPDFShow=false">取消</el-button>
						<el-button type="primary" @click="outputPDF">确定</el-button>
					</span>
				</el-dialog>
				<!-- 模板列表 -->
			  <div class="tempNemsList">
			  	我的模板：
			  	<el-tabs v-model="selectTemp" v-if="defaultReportStatus" type="card" editable @tab-click="changeTempTab" @edit="editTemp">
			  		<el-tab-pane v-for="(item,index) in templateList" :label="item.modelName" :name="item.modelId" :key="index"></el-tab-pane>
			  	</el-tabs>
		  		<el-button type="primary" @click="saveTemp">保存模板</el-button>
			  </div>
				<!-- 报告列表 -->
			  <div class="tempNemsList">
			  	我的报告：
			  	<el-tabs v-if="showReportList&&defaultReportStatus" v-model="selectNews" type="card" editable @tab-click="changeNewsTab" @edit="editNews">
			  		<el-tab-pane v-for="(item,index) in newsList" :label="item.reportName" :name="item.reportId" :key="index"></el-tab-pane>
			  	</el-tabs>
					<!-- 删除模板、报告 -->
					<el-dialog title="提示" width="30%" :visible.sync="deleteUEcontent">
						<span>此操作将永远删除该文件，是否继续？</span>
						<span slot="footer" class="dialog-footer">
							<el-button @click="deleteUEcontent=false">取消</el-button>
							<el-button type="primary" @click="deleteOPeration">确定</el-button>
						</span>
					</el-dialog>
			  	<el-button type="primary" @click="saveReport">保存报告</el-button>
					<!-- 保存模板、报告 -->
					<el-dialog :title="'保存'+tempOrReport" width="30%" :visible.sync="saveUEcontent">
						<p>{{ tempOrReport+'名称相同保存后将被覆盖，新建'+tempOrReport+'请输入新'+tempOrReport+'名称' }}</p>
						<el-input v-model="UEtitle" :placeholder="'请输入'+tempOrReport+'标题'"></el-input>
						<span slot="footer" class="dialog-footer">
							<el-button @click="saveUEcontent=false">取消</el-button>
							<el-button type="primary" @click="saveOPeration">确定</el-button>
						</span>
					</el-dialog>
			  </div>
			  <!-- 富文本编辑器 -->
			  <script id="intelligentEditor" type="text/plain"></script>
			  <!-- 默认模板 -->
				<defaultTemp class="defaultReportTemp" @defaultOK="defaultStatus"></defaultTemp>
			</el-card>
		</el-col>
	</el-row>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>