<!-- 大数据看板 -->
<template>
	<el-row class="bigData" gutter="10">
		<!--标题 -->
		<el-col :span="24" class="bigDataNav">
			<el-menu :default-active="activeItem" class="el-menu-demo" mode="horizontal" @select="navChange">
				<el-menu-item :index="index" :disabled="item.disabled" v-for="(item,index) in BigDataList" :key="index">
					<router-link v-if="index ==0" :to="item.path" >{{ item.name }}</router-link>
					<router-link v-else to=""  >{{ item.name }}</router-link>
				</el-menu-item>

			</el-menu>
		</el-col>
		<el-col :span="24" >
			<router-view class="bigDataCon"></router-view>
		</el-col>
	</el-row>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
