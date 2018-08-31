<!-- 经营分析 -->
<template>
	<div class="operationAnalysis">
		<!--经营分析三个二级标题-->
		<el-row>
			<el-col :span="22">
				<el-menu :default-active="activeItem" class="el-menu-demo" mode="horizontal" @select="navChange">
					<el-menu-item :index="index" v-for="(data,index) in AnaList" :key="index"><router-link :to="data.link">{{ data.item }}</router-link></el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="2">
	  		<el-button type="primary" @click="exportFile" class="btn5">导出EXCEL</el-button>
				<hr>
	  	</el-col>
		</el-row>
		<el-row class="operaAna_content">
			<router-view></router-view>
		</el-row>
	</div>

</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
