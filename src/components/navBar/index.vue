<!-- 导航条 -->
<template>
	<el-menu v-if="activeItem<8" :default-active="activeItem" class="el-menu-demo navBar" mode="horizontal">
		<el-menu-item :index="index" v-if="index<8" v-for="(data,index) in navList" :key="index">
			<router-link :to="{ path: data.link, query: { partnum: index } }">{{ data.item }}<i class="fa fa-caret-up"></i></router-link>
		</el-menu-item>
		<div v-if="navBarMasterShow" class="navBarMaster"></div>
	</el-menu>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
