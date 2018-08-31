 <!-- 同行业 -->
<style src="./index.less" lang="less"></style>
<template>
	<div class="tableListB">
		<!-- 表格 -->
		<el-table border :max-height="tableHeight" :data="tableData" :header-cell-class-name="tablefilterHeader" :cell-class-name="tablefilterBody" @header-click="tableOrder">
			<!-- 表头 -->
			<el-table-column :fixed="index==0?true:false" :label="item.label" align="center" v-for="(item,index) in tableHead" :key="item.label" :width="item.twidth" :render-header="renderHeader">
				<!-- 平均值 -->
				<el-table-column :fixed="index==0?true:false" v-if="tableData.length>0" align="center" :label="index==0?tableHead_fixed[0]:tableHead_fixed_info1[index-1]" :key="tableHead_fixed_info1[index-1]">
					<!-- 中位数 -->
					<el-table-column :fixed="index==0?true:false" align="center" :label="index==0?tableHead_fixed[1]:tableHead_fixed_info2[index-1]" :key="tableHead_fixed_info2[index-1]">
						<!-- 本企业、其他 -->
						<el-table-column :fixed="index==0?true:false" align="center" :resizable="false" :prop="item.key" :label="index==0?companyName:tableHead_fixed_info3[index-1]" :width="item.twidth" :key="tableHead_fixed_info3[index-1]" :formatter="tableCheck"></el-table-column>
					</el-table-column>
				</el-table-column>
			</el-table-column>
		</el-table>
		<!-- 分页 -->
		<pagination-template v-if="tableData.length>0" :pagination="pageInfo" v-on:paginationNum="changePage"></pagination-template>
	</div>
</template>
<script src="./index.js"></script>