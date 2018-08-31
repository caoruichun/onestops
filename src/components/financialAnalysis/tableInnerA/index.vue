<!-- 本企业 -->
<style src="./index.less" lang="less"></style>
<template>
	<div class="tableListA">
		<!-- 表格 -->
		<el-table border :max-height="tableHeight" :data="tableData">
			<el-table-column :fixed="index==0?true:false" align="center" :resizable="false" :width="item.twidth" :prop="item.key" :label="item.label" :formatter="dataFilter" :key="item.key" v-for="(item,index) in tableHead"></el-table-column>
		</el-table>
	</div>
</template>
<script src="./index.js"></script>