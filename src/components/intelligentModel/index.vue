<!-- 智能模型 -->
<template>
	<div class="intelligentModel">
			<el-button class="TabButton" @click="btnClick(index)" :class="{'active':activeName==index}" v-for="(item,index) in znmxNav" :key="index">{{item.title}}</el-button>
			<iframe v-if="showIframe" id="iframe" ref="iframes" :src="src"  frameborder="0"></iframe>
	</div>
</template>
<style src="./index.less" lang="less" scoped>
</style>
<script src="./index.js"></script>
