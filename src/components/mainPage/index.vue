<template>
	<el-container class="mainPage">
  	<!-- 导航条 -->
  	<el-header>
			<navBar ref="navBar"></navBar>
  	</el-header>
  	<el-main>
  		<!-- 返回上级 -->
  		<el-row v-show="showFlag">
				<el-col :span="24" class="reLevel">
					<el-button type="text" @click="reback"><<返回上级</el-button>
				</el-col>
			</el-row>
			<!-- 内容详情 -->
			<router-view class="routerInner" v-if="showView"></router-view>
			<router-view v-else></router-view>
		</el-main>
	</el-container>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
