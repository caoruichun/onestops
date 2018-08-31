<!-- 默认模板 -->
<template>
	<el-row class="defaultTemp">
  	<el-col :span="22">
  		<!-- 公司名 -->
  		<h2 :style="pageStyle.title">{{ companyName }}信用评级报告</h2>
			<!-- 表1 -->
			<table class="table table-bordered" :style="pageStyle.tableBody">
				<tr class="tableHead" :style="pageStyle.tableHead">
					<td colspan="3" :style="pageStyle.tableHead_td">{{ tableStatic_aName }}</td>
				</tr>
				<tr>
					<td :style="index==0 ? pageStyle.tdRow_1a : pageStyle.tdRow_1b" v-for="(item,index) in tableStatic_aCol" :key="index">{{ item }}</td>
				</tr>
				<tr v-for="(item,index) in tableStatic_aRow" :key="index">
					<td :style="pageStyle.tdCol_1">{{ item.label }}</td>
					<td :style="pageStyle.td" v-for="(data,num) in item.key" v-if="index==0||index==2" :colspan="index==2 ? 2 : 1" :key="num">{{ tableInfo_a[data] }}</td>
					<td :style="pageStyle.td" v-if="index%2!=0">
						<span v-for="(datas,nums) in item.key" :key="nums" v-if="nums<2">
							{{ nums%2==0 ? tableInfo_a[datas] : '' }}
							{{ nums%2==0 ? '&nbsp;/&nbsp;' : '' }}
							{{ nums%2!=0 ? tableInfo_a[datas] : '' }}
						</span>
					</td>
					<td :style="pageStyle.td" v-if="index%2!=0">
						<span v-for="(datas,nums) in item.key" :key="nums" v-if="nums>1">
							{{ nums%2==0 ? tableInfo_a[datas] : '' }}
							{{ nums%2==0 ? '&nbsp;/&nbsp;' : '' }}
							{{ nums%2!=0 ? tableInfo_a[datas] : '' }}
						</span>
					</td>
				</tr>
			</table>
			<!-- 表2 -->
			<table class="table table-bordered" :style="pageStyle.tableBody">
				<tr class="tableHead" :style="pageStyle.tableHead">
					<td colspan="4" :style="pageStyle.tableHead_td">{{ tableStatic_bName }}</td>
				</tr>
				<tr v-for="(item,index) in tableStatic_bRow" :key="index" v-if="index<2">
					<td :style="pageStyle.tdCol_1" v-for="(data,num) in item.label" :key="num">{{ data }}</td>
					<td :style="pageStyle.td" colspan="3" v-for="(datas,nums) in item.key">{{ tableInfo_b[datas] }}</td>
				</tr>
				<tr v-for="(item,index) in tableStatic_bRow" :key="index" v-if="index>1">
					<td :style="pageStyle.tdCol_1" v-for="(data,num) in item.label" :key="num" v-if="num%2!=0">{{ data }}</td>
					<td :style="pageStyle.td" v-for="(data,num) in item.key" :key="num" v-if="num%2!=0">{{ tableInfo_b[data] }}</td>
					<td :style="index==0 ? pageStyle.tdCol_1 : pageStyle.td" v-for="(data,num) in item.label" :key="num" v-if="num%2==0">{{ data }}</td>
					<td :style="pageStyle.td" v-for="(data,num) in item.key" :key="num" v-if="num%2==0">{{ tableInfo_b[data] }}</td>
				</tr>
			</table>
			<!-- 表3 -->
			<table class="table table-bordered" :style="pageStyle.tableBody">
				<tr class="tableHead" :style="pageStyle.tableHead">
					<td colspan="4" :style="pageStyle.tableHead_td">{{ tableStatic_cName }}</td>
				</tr>
				<tr v-for="(item,index) in tableStatic_cRow" :key="index">
					<td :style="index==0 ? pageStyle.tdRow_1a : pageStyle.tdCol_1">{{ item.label }}</td>
					<td :style="index==0 ? pageStyle.tdRow_1a : pageStyle.td" v-for="(data,num) in item.key" v-if="index==0||index==1||index==3||index==5" :key="num">{{ tableInfo_c[data] }}</td>
					<td :style="pageStyle.td" v-if="index%2==0&&index>0">
						<span v-for="(datas,nums) in item.key" :key="nums" v-if="nums<2">
							{{ nums%2==0 ? tableInfo_c[datas] : '' }}
							{{ nums%2==0 ? '&nbsp;/&nbsp;' : '' }}
							{{ nums%2!=0 ? tableInfo_c[datas] : '' }}
						</span>
					</td>
					<td :style="pageStyle.td" v-if="index%2==0&&index>0">
						<span v-for="(datas,nums) in item.key" :key="nums" v-if="nums>1&&nums<4">{{  nums%2==0 ? tableInfo_c[datas]+'&nbsp;/&nbsp;' : tableInfo_c[datas] }}</span>
					</td>
					<td :style="pageStyle.td" v-if="index%2==0&&index>0">
						<span v-for="(datas,nums) in item.key" :key="nums" v-if="nums>3&&nums<6">
							{{ nums%2==0 ? tableInfo_c[datas] : '' }}
							{{ nums%2==0 ? '&nbsp;/&nbsp;' : '' }}
							{{ nums%2!=0 ? tableInfo_c[datas] : '' }}
						</span>
					</td>
				</tr>
			</table>
			<h3>评级观点</h3>
			<table class="table table-bordered remarkTable" :style="pageStyle.tableBody">
				<tr class="tableHead" :style="pageStyle.tableHead">
					<td :style="pageStyle.tableHead_tdEmpty">有利因素</td>
					<td :style="pageStyle.tableHead_tdEmpty">不利因素</td>
				</tr>
				<tr>
					<td :style="pageStyle.td">
						<span contenteditable="true" :style="pageStyle.tdEmpty"><p></p></span>
					</td>
					<td :style="pageStyle.td">
						<span contenteditable="true" :style="pageStyle.tdEmpty"><p></p></span>
					</td>
				</tr>
			</table>
			<h3>一、发行人简介</h3>
			<h5 class="editDiv" contenteditable="true" :style="pageStyle.divStyle">
				<p>XXXX集团有限责任公司（以下简称“【XXXX】”或“公司”）的控股股东为【XXXX】，实际控制人为【XXXX】。公司主要从事【XXXX】等业务。公司在【XXXX】行业地位【XXXX】，【经营板块概述】，整体经营风险【XXXX】。公司资产质量【XXXX】，盈利能力【XXXX】，经营获现能力【XXXX】，偿债压力【XXXX】，外部支持增信作用【XXXX】。综合上述因素，公司主体信用风险评价为【级别】，信用展望为【XXXX】。</p>
			</h5>
			<h3>二、经营要素分析</h3>
			<h5 class="editDiv" contenteditable="true" :style="pageStyle.divStyle"><p></p></h5>
			<h3>三、财务要素分析</h3>
			<h5 class="editDiv" :style="pageStyle.divStyle">
				<p><b>资产质量方面</b>，公司资产以【XXXX】为主，截至{{ financialInfo.zczlTime }}年末，公司受限资产主要为【XXXX】，账面价值【XXXX】亿元，占总资产的比重为【XXXX】，受限资产规模【XXXX】，公司整体资产质量【XXXX】。</p>
				<p><b>盈利与现金流方面</b>，公司近三年经营性业务利润均值为{{ financialInfo.bizporfit }}，整体盈利能力【XXXX】。现金流方面，公司{{ financialInfo.startTime }}~{{ financialInfo.endTime }}年分别实现经营性现金净流入{{ financialInfo.mananetr3 }}亿元、{{ financialInfo.mananetr2 }}亿元、{{ financialInfo.mananetr1 }}亿元，现金收入比均值为{{ financialInfo.cashincomert }}，经营获现能力【XXXX】。</p>
				<p><b>债务负担与偿债指标方面</b>，截至{{ financialInfo.zbjgTime }}末，公司资产负债率和全部债务资本化比率分别为{{ financialInfo.assliabrt }}、{{ financialInfo.tdebtcaprt }}，债务负担【XXXX】。偿债指标方面，截至{{ financialInfo.czTime }}末，公司流动比率和现金类资产/短期债务分别为{{ financialInfo.currentrt }}倍和{{ financialInfo.cashassetdivshortdebt }}倍，短期偿债指标表现【XXXX】。公司{{ financialInfo.date }}年全部债务/EBITDA和EBITDA利息保障倍数分别为{{ financialInfo.alldebtdivebitda }}倍、{{ financialInfo.ebitdascover }}倍，长期偿债指标表现【XXXX】。</p>
				<p><b>对外担保方面</b>，截至【XXXX】末，公司对外担保金额为【XXXX】亿元，占【XXXX】年末净资产的【XXXX】%，担保比例【XXXX】，公司或有负债风险【XXXX】。</p>
			</h5>
			<!-- 表6 -->
			<table class="table table-bordered" :style="pageStyle.tableBody">
				<tr class="tableHead" :style="pageStyle.tableHead">
					<td colspan="4" :style="pageStyle.tableHead_td">{{ tableStatic_fName }}</td>
				</tr>
				<tr v-for="(item,index) in tableStatic_fRow" :key="index">
					<td :style="index==0 ? pageStyle.tdRow_1a : pageStyle.tdCol_1">{{ item.label }}</td>
					<td :style="index==0 ? pageStyle.tdRow_1a : pageStyle.td" v-for="(data,num) in item.key" :key="num">{{ tableInfo_f[data] }}</td>
				</tr>
			</table>
			<h3>四、外部支持及其他重大事项</h3>
			<h5 class="editDiv" contenteditable="true" :style="pageStyle.divStyle"><p></p></h5>
		</el-col>
	</el-row>
</template>
<script src="./index.js"></script>