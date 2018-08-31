<!-- 估值交易 -->
<template>
	<!--城投  -->
	<div class="chengTou">
		<!--平台信息  -->
		<div class="ct_pt">
			<p class="ct_titi1">平台信息</p>
			<div class="box1">
				<table class="ct_table1">
					<tr>
						<td class="ct_td1">上级是否发债</td>
						<td class="ct_td2">{{pingtai.fz}}</td>
						<td class="ct_td1">一级母公司</td>
						<td class="ct_td2">{{pingtai.ym}}</td>
					</tr>
					<tr>
						<td class="ct_td1">实际操控人</td>
						<td class="ct_td2">{{pingtai.scr}}</td>
						<td class="ct_td1">对应政府行政级别</td>
						<td class="ct_td2">{{pingtai.zfjb}}</td>
					</tr>
					<tr>
						<td class="ct_td1">业务委托人</td>
						<td class="ct_td2">{{pingtai.ywr}}</td>
						<td class="ct_td1">政府性资金回款方</td>
						<td class="ct_td2">{{pingtai.huik}}</td>
					</tr>

					<tr>
						<td class="ct_td1">主体职能</td>
						<td class="ct_td2" colspan="3">{{pingtai.ztzn}}</td>
					</tr>
					<tr>
						<td class="ct_td1">平台地位评价</td>
						<td class="ct_td2" colspan="3">{{pingtai.ptdw}}</td>
					</tr>
				</table>
			</div>
		</div>
			<!-- 区域财政数据 -->
		<div class="quyu">
			<div class="ct_titi1">
				区域财政数据
			</div>
			<!--期间选择-->
			<el-row  class="bs">
					<el-col :span="24">
							期间选择：
							<el-select v-model="date1" placeholder="请选择">
								<el-option v-for="item in dateList" :key="item.value" :label="item.label" :value="item.value"></el-option>
							</el-select>
							至
							<el-select v-model="date2" placeholder="请选择">
								<el-option v-for="item in dateList" :key="item.value" :label="item.label" :value="item.value"></el-option>
							</el-select>
							<el-button type="primary" class="bs_search">搜索</el-button>
							<el-button type="success" class="bs_sall">查看全部</el-button>
					</el-col>
			</el-row>
			<div class="box2">
				<el-table :data="quyuData" show-summary border sum-text="合计">
					<el-table-column :prop="item.key" :label="item.label" :width="item.dwidth" :formatter="isNUll" :key="index" v-for="(item,index) in table_headquyuData" ></el-table-column>
				</el-table>
			</div>

		</div>
		<!-- 政府支持与未来财政需求 -->
		<div class="fature">
			<div class="ct_titi1">
				政府支持与未来财政需求
			</div>
			<!--期间选择-->
			<el-row  class="bs">
					<el-col :span="24">
							期间选择：
							<el-select v-model="date3" placeholder="请选择">
								<el-option v-for="item in dateList" :key="item.value" :label="item.label" :value="item.value"></el-option>
							</el-select>
							至
							<el-select v-model="date4" placeholder="请选择">
								<el-option v-for="item in dateList" :key="item.value" :label="item.label" :value="item.value"></el-option>
							</el-select>
							<el-button type="primary" class="bs_search">搜索</el-button>
							<el-button type="success" class="bs_sall">查看全部</el-button>
					</el-col>
			</el-row>
			<div class="box3">
				<el-table :data="zfData" show-summary border sum-text="合计">
					<el-table-column :prop="item.key" :label="item.label" :width="item.dwidth" :formatter="isNUll" :key="index" v-for="(item,index) in table_headfature" ></el-table-column>
				</el-table>
			</div>

		</div>
	</div>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
