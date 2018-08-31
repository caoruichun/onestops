<!-- 主体信息 -->
<template>
	<el-row class="subjectInfo" >
		<!--锚点-->
		<span :class="jumpShowFlag? 'anchorList anchorOut':'anchorList anchorIn'">
			<p :class="(jumpFlag == '#index1') ? 'jumpClass':''" @click="jump('#index1')">1.基本信息</p>
			<p :class="(jumpFlag == '#index2') ? 'jumpClass':''" @click="jump('#index2')">2.信用级别情况</p>
			<p :class="(jumpFlag == '#index3') ? 'jumpClass':''" @click="jump('#index3')">3.风险预警情况</p>
			<p :class="(jumpFlag == '#index4') ? 'jumpClass':''" @click="jump('#index4')">4.股权结构</p>
			<p :class="(jumpFlag == '#index5') ? 'jumpClass':''" @click="jump('#index5')">5.债券发行情况</p>
			<i class="fa fa-caret-right" @click="anchorFold"></i>
		</span>

		<!-- 基本信息 -->
  	<el-col :span="24">
			<div class="combox baseinfoData" id="index1">
				<div class="combox-title">
					1.基本信息
				</div>
				<div class="baseinfo-box">
							<div class="company-name">
								{{baseinfoData.enterpriseName&&baseinfoData.enterpriseName!='null'?baseinfoData.enterpriseName:'—'}}
							</div>
					<div class="baseinfo-boxone">
						<div class="baseinfo-box-left flex-div">
							<ul class="baseinfo-box-main">
								<li>
									<small>中债资信主体评级:</small>
								</li>
								<li>
									<small>流动性评分:</small>
								</li>
								<li>
									<small>红橙黄预警:</small>
								</li>
								<li>
									<small>风险排查名单:</small>
								</li>
							</ul>
							<ul class="baseinfo-box-main">
								<li>
									<p class="baseinfo-box-lrank" >
									<span>{{baseinfoData.rating&&baseinfoData.rating!='null'?baseinfoData.rating:''}}</span>
									<span v-show="baseinfoData.ratingUpdate">&nbsp;/&nbsp; {{baseinfoData.forcast&&baseinfoData.forcast!='null'?baseinfoData.forcast:''}}</span>
									<span class="UndateTime">{{baseinfoData.ratingUpdate | timeFilter('yyyy-mm-dd')}}</span>
									<span class="border1" style="color:#333">|</span>
								</p>
							</li>
								<li>
									<p class="baseinfo-colorType-btn">
										<span class="liquidity">流动性{{baseinfoData.liquidity!=null && baseinfoData.liquidity!='null'?baseinfoData.liquidity:'0'}}分 </span>
										<span class="UndateTime">{{baseinfoData.liquidityUpdate | timeFilter('yyyy-mm-dd')}}</span>
										<span class="border1">|</span>
									</p>
								</li>
								<li>
									<p class="baseinfo-colorType-btn" v-if="baseinfoData.warnType">
										<span style="margin-right:15px" v-if="(baseinfoData.warnType=='红')" :class="(baseinfoData.warnType.indexOf('红')>-1) ? 'warnType1': ''" v-text="baseinfoData.warnType"></span>
										<span style="margin-right:15px" v-if="(baseinfoData.warnType=='橙')" :class="(baseinfoData.warnType.indexOf('橙')>-1) ? 'warnType2': ''" v-text="baseinfoData.warnType"></span>
										<span style="margin-right:15px" v-if="(baseinfoData.warnType=='黄')" :class="(baseinfoData.warnType.indexOf('黄')>-1) ? 'warnType3': ''" v-text="baseinfoData.warnType"></span>
										<span class="UndateTime" v-show="baseinfoData.ratingUpdate">{{baseinfoData.updateDate | timeFilter('yyyy-mm-dd')}}</span>
										<span class="border1">|</span>
									</p>
									<p class="baseinfo-colorType-btn" v-else>
										<span class="NowarnType">未在红橙黄</span>
										<span class="border1">|</span>
									</p>
								</li>
								<li>
									<p class="baseinfo-warnType-btn" v-if="baseinfoData.riskList">
										<span class="riskCss">{{baseinfoData.riskList}}预警企业</span>
										<span class="UndateTime" v-show="baseinfoData.riskUpdate">{{baseinfoData.riskUpdate | timeFilter('yyyy-mm-dd')}}</span>
									</p>
									<p class="baseinfo-warnType-btn" v-else>
										<span class="noriskCss">未在风险排查名单</span>
									</p>
								</li>
							</ul>
						</div>
					</div>
					<div class="baseinfo-boxone">
						<div class="baseinfo-box-table flex-div">
							<ul>
								<li>
									<p class="title">中债资信行业</p>
									<p>{{(baseinfoData.primaryIndustry&&baseinfoData.primaryIndustry!='null') ? baseinfoData.primaryIndustry : '—'}}</p>
									<p class="title">GICS行业</p>
									<p>{{(baseinfoData.secondIndustry&&baseinfoData.secondIndustry!='null') ? baseinfoData.secondIndustry:'—'}}</p>
								</li>
								<li>
									<p class="title">外部评级结果</p>
									<p>{{(baseinfoData.newestcreditrate&&baseinfoData.newestcreditrate!='null') ? baseinfoData.newestcreditrate:'—'}}</p>
									<p class="title">外部评级展望</p>
									<p>{{(baseinfoData.newestexptrating&&baseinfoData.newestexptrating!='null')?baseinfoData.newestexptrating:'—'}}</p>
								</li>
								<li>
									<p class="title">地区</p>
									<p>{{(baseinfoData.province&&baseinfoData.province!='null')?baseinfoData.province:'—'}}</p>
									<p class="title">企业性质</p>
									<p>{{(baseinfoData.enterpriseProperty&&baseinfoData.enterpriseProperty!='null')?baseinfoData.enterpriseProperty:'—'}}</p>
								</li>
								<li>
									<p class="title">第一大股东</p>
									<p>{{(baseinfoData.shholdername&&baseinfoData.shholdername!='null')?baseinfoData.shholdername:'—'}}</p>
									<p class="title">持股比例</p>
									<p>{{isNaN(parseFloat(baseinfoData.holderrto1))?'—':(parseFloat(baseinfoData.holderrto1)).toFixed(2)}}%/{{baseinfoData.updateDate | timeFilter('yyyy-mm-dd')}}</p>
								</li>
								<li>
									<p class="title">存续债余额</p>
									<p>{{isNaN((parseInt(baseinfoData.balance)/10000))?'—':(parseInt(baseinfoData.balance)/10000).toFixed(2)}}亿元/{{baseinfoData.updateDate | timeFilter('yyyy-mm-dd')}}</p>
									<p class="title">注册资本</p>
									<p>{{isNaN((parseInt(baseinfoData.regcapital)/10000))?'—':(parseInt(baseinfoData.regcapital)/10000).toFixed(2)}}亿元</p>
								</li>
							</ul>
						</div>
						<div class="baseinfo-box-link flex-div" style="height:200px;">
							<div class="box-link-title">
								<span class="box-link-name">舆情信息</span>
								<p>
									<span v-show="isbaseinfozhong" class="baseinfozhong">中</span>
									<span v-show="isbaseinfozheng" class="baseinfozheng">正</span>
									<span v-show="isbaseinfofu" class="baseinfofu">负</span>
								</p>
							</div>
							<ul class="box-link-ul">
								<li class="enterpriseOpinionInfoNul" v-if="enterpriseOpinionInfo == ''">本公司暂无舆情信息</li>
								<li v-if="enterpriseOpinionInfo != ''" v-for="(item,index) in enterpriseOpinionInfo">
									<div>{{index+1}}) {{item.entrydate | timeFilter('yyyy-mm-dd')}} <span :style="'color:'+ item.color +';'">{{item.newssourceid}}</span> </div>
									<a @click="openNewsLink(item)">{{item.newstitle}}</a>
								</li>
							</ul>
						</div>
						<el-dialog  :visible.sync="infoShowFlag" width="60%">
							<iframe class="dialog_iframe" :srcdoc='newslinkiframe' frameborder="0" width="730" height="400"></iframe>
							<!-- <span>{{newslink}}</span> -->
						</el-dialog>
					</div>
				</div>
			</div>
  	</el-col>
  	<!-- 信用级别情况 -->
  	<el-col :span="24">
			<div class="combox rating" id="index2">
				<div class="combox-title">
					2.信用级别情况
				</div>
				<div class="level-box">
					<div class="level-box-left">
						<ul class="levelbox-left-panel">
							<li style="position:relative" v-show="ratingFlag == 'rating_zhong'">
								<p class="level-box-title" style="margin: 17px 0px 7px;">级别分布情况
							  </p>
								<ul class="levelbox-left-nav">
									<li :class="(ratingFlag == 'rating_zhong') ? 'active':''" @click="changeRatingPane('rating_zhong')">级别分布情况</li>
									<li :class="(ratingFlag == 'rating_YY') ? 'active':''" @click="changeRatingPane('rating_YY')">YY评分</li>
									<el-tooltip class="item" effect="dark" placement="right">
										<div slot="content">
											YY评分包含城投债评分和产业债评分.其中,城投债评分所对应的主体信用<br>品质由1分(国家信用平台)至10分(偿债风险已经显示的城投)逐渐递减;
											产业<br>债评分所对应的主体信用品质由1分(一线央企,具有系统重要性,类似国家信<br>用,不受不利经济环境影响)至10分(偿债风险已经显视的产业公司)逐渐递减.
										</div>
										<el-botton class="tishi">?</el-botton>
									</el-tooltip>
								</ul>
								<div id="echarts_line"></div>
							</li>
							<li v-show="ratingFlag == 'rating_YY'">
								<p class="level-box-title" style="margin: 17px 0px 7px;">YY评分</p>
								<ul class="levelbox-left-nav">
									<li :class="(ratingFlag == 'rating_zhong') ? 'active':''" @click="changeRatingPane('rating_zhong')">级别分布情况</li>
									<li :class="(ratingFlag == 'rating_YY') ? 'active':''" @click="changeRatingPane('rating_YY')">YY评分</li>
									<el-tooltip class="item" effect="dark" placement="right">
										<div slot="content">
											YY评分包含城投债评分和产业债评分.其中,城投债评分所对应的主体信用<br>品质由1分(国家信用平台)至10分(偿债风险已经显示的城投)逐渐递减;
											产业<br>债评分所对应的主体信用品质由1分(一线央企,具有系统重要性,类似国家信<br>用,不受不利经济环境影响)至10分(偿债风险已经显视的产业公司)逐渐递减.
										</div>
										<el-botton class="tishi">?</el-botton>
									</el-tooltip>
								</ul>
								<div id="echarts_line_YY"></div>
							</li>
						</ul>
					</div>
					<div class="level-box-history">
						<p class="level-box-title">历史评级情况</p>
						<div class="level-box-mian">
							<el-table :data="enterpriseRatingHistory" border height="22rem" class="risk-table zhongzhai">
								<el-table-column label="中债资信">
									<el-table-column align="center" :resizable="false" :width="item.twidth" :prop="item.key" :label="item.label"
									:key="item.key" v-for="(item,index) in tableHead_rthistory" :formatter="timeChange">
									</el-table-column>
								</el-table-column>
							</el-table>
							<el-table :data="extRatingHistory" border height="22rem" class="risk-table waibu">
								<el-table-column label="外部信用评价机构">
									<el-table-column align="center" :resizable="false" :width="item.twidth" :prop="item.key" :label="item.label"
									:key="item.key" v-for="(item,index) in tableHead_extRthistory" :formatter="timeChange">
									</el-table-column>
								</el-table-column>
							</el-table>
						</div>
					</div>
				</div>
			</div>
  	</el-col>
  	<!-- 风险预警情况 -->
  	<el-col :span="24">
			<div class="combox enterpriseRiskWarning" id="index3">
				<div class="combox-title">3.风险预警情况</div>
				<div class="risk-box" v-show="enterpriseRiskWarning.length>0">
					<el-table :data="enterpriseRiskWarning" border class="risk-table">
						<el-table-column align="center" :resizable="false" :width="item.twidth" :prop="item.key" :label="item.label"
						:key="item.key" v-for="(item,index) in tableHead_riskWarning" :formatter="timeChange">
						</el-table-column>
				  </el-table>
				</div>
				<div class="risk-box" v-show="enterpriseRiskWarning.length==0">
						<span>本企业暂无风险预警信息</span>
				</div>
				<div class="block" v-if="pageInfoFX.pageTotal>1" style="text-align:center; height:40px;">
					<pagination-template v-if="enterpriseRiskWarning.length>0" :pagination="pageInfoFX" v-on:paginationNum="changePageFX"></pagination-template>
			</div>
			</div>
		</el-col>
		<!-- 股权结构 -->
  	<el-col :span="24">
			<div class="combox enterpriseEquityInvestment" id="index4">
				<div class="combox-title">4.股权结构</div>
				<div class="stock-box" v-show="enterpriseEquityInvestment.length>0">
					<el-table :data="enterpriseEquityInvestment" border class="stock-table">
						<el-table-column align="center" :resizable="false" :width="item.twidth" :prop="item.key" :label="item.label" :key="item.key" v-for="(item,index) in tableHead_investment" :formatter="timeChange">
						</el-table-column>
				  </el-table>
				</div>
				<div class="stock-box" v-show="enterpriseEquityInvestment.length==0">
						<span>本企业暂无股权结构信息</span>
				</div>
				<div class="block" v-if="pageInfoGQ.pageTotal>1" style="text-align:center; height:40px;">
				<pagination-template v-if="enterpriseEquityInvestment.length>0" :pagination="pageInfoGQ" v-on:paginationNum="changePageGQ"></pagination-template>
			</div>
			</div>
  	</el-col>
  	<!-- 债券发行情况 -->
  	<el-col :span="24">
			<div class="combox tqBasicInformation" id="index5" >
				<div class="combox-title">5.债券发行情况</div>
				<div class="bonds-box" v-if="tqBasicInformation.length>0">
					<el-table :data="tqBasicInformation"
					border class="risk-table" @cell-click="toPage" @cell-mouse-leave="tqBasicOut" @cell-mouse-enter="tqBasicHover">
					<el-table-column type="index" :index='indexStartRow' label="序号" width="60">
					</el-table-column>
					<el-table-column align="center" :resizable="false" :width="item.twidth" :prop="item.key" :label="item.label"
					:key="item.key" v-for="(item,index) in tableHead_tqInfo"  :formatter="timeChange">
						<el-table-column v-if="(item.key == 'xianjinliu')" align="center" :resizable="false" :width="item1.twidth" :prop="item1.key" :label="item1.label"
						:key="item1.key" v-for="(item1,index) in tableHead_xianjin" :formatter="timeChange">
						</el-table-column>
					</el-table-column>
				  </el-table>
				</div>
				<div class="bonds-box" v-if="tqBasicInformation.length==0">
						<span>本企业暂无债券发行信息</span>
				</div>
				<div class="block" v-if="pageInfo.pageTotal>1" style="text-align:center; height:40px;">
					<pagination-template v-if="tqBasicInformation.length>0" :pagination="pageInfo" v-on:paginationNum="changePage"></pagination-template>
				</div>
			</div>
  	</el-col>
  </el-row>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
