<!-- 个券选择 -->
<template>
	<el-row class="valuationTransaction">
    <!--个券选择-->
    <div id="voucher" class="voucherFrame">
      <div class="divh">1.个券选择</div>
      <div class="frameContent">
        <el-row class="contentSelect">
          <el-col :span="24">
            <span class="tit">发行债券筛选：</span>
            <template>
              <el-select v-model="value" placeholder="请选择" @change="change">
                <el-option
                  v-for="item in options"
                  :key="item.symbol"
                  :label="item.bondsname"
                  :value="item.symbol">
                </el-option>
              </el-select>
            </template>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--基本信息-->
    <div id="bisc" class="voucherFrame">
      <div class="divh">2.基本信息</div>
      <div class="frameContent frameContent-bisc">
        <el-row>
          <el-col :span="24">
            <h4 class="bisc-tit" style="margin-bottom:10px;font-size:2rem">{{basicInfomation.bondsname?basicInfomation.bondsname:'—'}}</h4>
          </el-col>
          <!-- <el-col :span="10" class="bisc-btn">
            <el-button class="btn-green" type="primary">添加至债无忧</el-button>
          </el-col>
          <el-col :span="3" class="bisc-btn">
            <el-button class="btn-green" type="primary">添加至模型自选库</el-button>
          </el-col> -->
          <!--card-left-->
            <el-col :span="10">
              <el-card class="box-card">
                <div v-if="size!=0" style="margin-top:0.5rem">
                  <span>{{bondTypeTwo[basicInfomation.bondtype1]?bondTypeTwo[basicInfomation.bondtype1]:'—'}}/{{basicInfomation.bondtype2?basicInfomation.bondtype2:'—'}}</span>
                  <span class="iconStree">清算所估值：</span>
                  <span>{{basicInfomation.yield?globalFC.scientificNotation(Number(basicInfomation.yield).toFixed(2))+'%':'—'}}</span>
                </div>
								<div v-if="size==0" style="margin-top:1rem">
                  <span>{{bondTypeTwo[basicInfomation.bondtype1]?bondTypeTwo[basicInfomation.bondtype1]:'—'}}/{{basicInfomation.bondtype2?basicInfomation.bondtype2:'—'}}</span>
                  <span class="iconStree">清算所估值：</span>
                  <span>{{basicInfomation.yield?globalFC.scientificNotation(Number(basicInfomation.yield).toFixed(2))+'%':'—'}}</span>
                </div>
                <div class="card-btn" v-if="size!=0" style="padding:0.5rem 0">
                  <el-button plain disabled type="info">付息正常</el-button>
                  <el-button plain disabled type="info">无异常报价</el-button>
                </div>
								<div class="card-btn" v-if="size==0" style="padding:1.5rem 0">
                  <el-button plain disabled type="info">付息正常</el-button>
                  <el-button plain disabled type="info">无异常报价</el-button>
                </div>
                <div style="margin-bottom: 1rem">
                  <span>中债资信债项评价：</span>
                  <!-- <span class="card-font">{{basicInfomation.rating}}/{{tabledebt[0].updateDate | timeFilter('yyyy-mm-dd')}}</span> -->
									<span class="card-font">{{basicInfomation.rating?basicInfomation.rating:'—'}}/—</span>

                </div>
								<div class="atheover" v-if="tableproindex">
									<div v-for="item in tableproindex" :key="item[0].id">
											<span>{{item[0].ratecompname?item[0].ratecompname:'—'}}：</span>
											<span class="card-font">{{item[0].newestcreditrate?item[0].newestcreditrate:'—'}}</span><span class="card-font">/</span><span class="card-font" v-if="item[0].publishdate">{{item[0].publishdate | timeFilter('yyyy-mm-dd')}}</span><span class="card-font" v-if="!item[0].publishdate">—</span>
										<!-- <span class="card-font">{{basicInfomation.creditrate}}/{{ tableproindex[0] ? (tableproindex[0].publishdate | timeFilter('yyyy-mm-dd')) : '-' }}</span> -->
									</div>
								</div>
              </el-card>
            </el-col>
          <!--card-right-->
            <el-col :span="13" style="float: right;width: 57%;margin-bottom: 2rem;">
              <el-card class="box-card">
                <div class="">
                  <span>现金流发送情况</span>
                </div>
                <template>
                  <el-table
                    :data="tableData"
                    border
                    class="money-table"
										max-height="152"
                    style="width: 100%">
                    <el-table-column
                      label="日期"
                      >
											<span slot-scope="scope">
												<span v-if="scope.row.declaredate !='—'">
													{{ scope.row.declaredate | timeFilter('yyyy-mm-dd') }}
												</span>
												<span v-else>{{ scope.row.declaredate }}</span>
											</span>
                    </el-table-column>
                    <el-table-column
                      label="税前金额(元/百元)"
											:formatter="tableCheck"
                      >
											<span slot-scope="scope">
												{{scope.row.guaramt==0 || (scope.row.guaramt&&scope.row.guaramt != '—')?globalFC.scientificNotation(Number(scope.row.guaramt).toFixed(2)):'—'}}
											</span>
                    </el-table-column>
                    <el-table-column
                      prop="changetype"
                      label="类型">
                    </el-table-column>
                  </el-table>
                </template>
              </el-card>
            </el-col>
          <!--竖表格-->
          <el-col :span="24" >
						<div class="baseinfo-boxone">
							<div class="baseinfo-box-table flex-div">
								<ul>
									<li>
										<p class="title">债券代码</p>
										<p>{{basicInfomation.symbol?basicInfomation.symbol:'—'}}</p>
										<p class="title">债券全称</p>
										<p>{{basicInfomation.bondname?basicInfomation.bondname:'—'}}</p>
									</li>
									<li>
										<p class="title">金额/余额</p>
										<p>{{basicInfomation.guaramt == 0||basicInfomation.guaramt?globalFC.scientificNotation(Number(basicInfomation.guaramt).toFixed(2)):'—'}}亿元/{{basicInfomation.balance==0||basicInfomation.balance?globalFC.scientificNotation(Number(basicInfomation.balance).toFixed(2)):'—'}}亿元</p>
										<p class="title">债项级别</p>
										<p>{{basicInfomation.creditrate?basicInfomation.creditrate:'—'}}</p>
									</li>
									<li>
										<p class="title">发行方式</p>
										<p>{{rAISEMODE[basicInfomation.raisemode]?rAISEMODE[basicInfomation.raisemode]:'—'}}</p>
										<p class="title">交易市场</p>
										<p>{{exchangeduty?exchangeduty:'—'}}</p>
									</li>
									<!-- <li>
										<p class="title">质押债券代码</p>
										<p>{{basicInfomation.bondCode?basicInfomation.bondCode:'—'}}</p>
										<p class="title">质押折算</p>
										<p>{{basicInfomation.bondReduced?basicInfomation.bondReduced:'—'}}</p>
									</li> -->
									<li>
										<p class="title">上市时间</p>
										<p>{{basicInfomation.listdate | timeFilter('yyyy-mm-dd')}}</p>
										<p class="title">摘牌时间</p>
										<p>{{basicInfomation.delistdate | timeFilter('yyyy-mm-dd')}}</p>
									</li>
									<li>
										<p class="title">票面利率（%）</p>
										<p>{{basicInfomation.couponrate?globalFC.scientificNotation(Number(basicInfomation.couponrate).toFixed(2)):'—'}}</p>
										<p class="title">发行价格(元)</p>
										<p>{{basicInfomation.issueprice?globalFC.scientificNotation(Number(basicInfomation.issueprice).toFixed(2)):'—'}}</p>
										<!-- <p>{{basicInfomation.issueprice?basicInfomation.issueprice:'—'}}</p> -->
									</li>
									<li>
										<p class="title">期限（年）</p>
										<p>{{basicInfomation.maturityyear?globalFC.scientificNotation(Number(basicInfomation.maturityyear).toFixed(2)):'—'}}</p>
										<p class="title">剩余年限</p>
										<p>{{basicInfomation.remaineYears?(basicInfomation.remaineYears>basicInfomation.maturityyear?globalFC.scientificNotation(Number(basicInfomation.maturityyear).toFixed(2)):globalFC.scientificNotation(Number(basicInfomation.remaineYears).toFixed(2))):'—' }}</p>
									</li>
									<li>
										<p class="title">利率类型</p>
										<p>{{basicInfomation.baseratecode?basicInfomation.baseratecode:'—'}}</p>
										<p class="title">息票品种</p>
										<p>{{vARIETYTYPE[basicInfomation.varietytype]?vARIETYTYPE[basicInfomation.varietytype]:'—'}}</p>
									</li>
									<li>
										<p class="title">起息时间</p>
										<!-- <p>{{basicInfomation.startdate?basicInfomation.startdate:'—'}}</p> -->
										<p>{{startdate?startdate:'—'}}</p>
										<p class="title">到期日期</p>
										<p>{{maturitydate?maturitydate:'—'}}</p>
									</li>
									<li>
										<p class="title">特殊条款</p>
										<p>{{cLSTYPE[basicInfomation.clstype]?cLSTYPE[basicInfomation.clstype]:'—'}}</p>
										<p class="title">是否担保</p>
										<p>{{eXENHANCEMODE[basicInfomation.exenhancemode]?eXENHANCEMODE[basicInfomation.exenhancemode]:'—'}}</p>
									</li>
									<div class="" style="clear:both">
									</div>
								</ul>
							</div>
					</div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--债项评级与担保情况-->
    <div id="voucherSoce" class="voucherFrame">
      <div class="divh">3.债项评级与债项担保</div>
      <div class="frameContent">
        <el-row>
          <el-col :span="24" v-if="size!=0">
            <h4 class="bisc-tit">债项评级情况</h4>
          </el-col>
					<el-col :span="24" style="margin-bottom:10px" v-if="size==0">
            <div class="bisc-tit divh">债项评级情况</div>
          </el-col>
					<el-col :span="24" v-if="size==0">
						<div class="baseinfo-boxone">
							本债券暂无债项评级信息
					</div>
          </el-col>
          <el-col :span="8" v-if="size!=0">
          <template>
            <el-table
              class="tablepre tablethree"
              :data="tabledebt"
              style="width: 100%;margin-top: 10px;text-align: center">
              <el-table-column label=中债资信>
                <el-table-column
                  prop="name"
                  label="级别"
                  >
                </el-table-column>
                <el-table-column
                  prop="num"
                  label="变动情况"
                >
                </el-table-column>
                <el-table-column
									prop="time"
                  label="时间"
                  >
									<!-- <span slot-scope="scope">
										{{ scope.row.publishdate | timeFilter('yyyy-mm-dd') }}
									</span> -->
                </el-table-column>
              </el-table-column>
            </el-table>
          </template>
        </el-col>
          <el-col :span="16" v-if="tableproindex" style="overflow-x: auto;white-space: nowrap;padding-bottom:10px">
						<div class="boxwidth" style="overflow:hidden;width:100%">
							<template>
								<el-table
									class="tablepre tablethr-two"
									v-for="item in tableproindex"
									max-height="260"
									:key="item[0].id"
									:data="item"
									style="margin-top: 10px;width:50%;text-align: center;float: left">
									<el-table-column :label="item[0].ratecompname">
										<el-table-column
											prop="newestcreditrate"
											label="级别"
										>
										</el-table-column>
										<el-table-column
											prop="chgrsn"
											label="变动情况"
											:formatter="changchgrsnc"
											>
										</el-table-column>
										<el-table-column
											label="时间"
											>
											<span slot-scope="scope">
												{{ scope.row.publishdate | timeFilter('yyyy-mm-dd') }}
											</span>
										</el-table-column>
									</el-table-column>
								</el-table>
							</template>
						</div>
          </el-col>
        </el-row>
      </div>
      <div class="frameContent">
        <el-row>
          <el-col :span="24" style="margin-bottom:10px">
            <div class="bisc-tit divh">债项担保情况</div>
          </el-col>
          <el-col :span="24" v-for="item in tablefinProindex" :key="item.id" v-if="flag">
						<div class="baseinfo-boxone">
							<div class="baseinfo-box-table flex-div" style="height:100px">
								<ul>
									<li>
										<p class="title">担保方</p>
										<p>{{item.guarantorhqcode?(item.guarantorhqcode==null||item.guarantorhqcode=='"null"'||item.guarantorhqcode=="null"||item.guarantorhqcode=="NULL"?'—':item.guarantorhqcode):'—'}}</p>
									</li>
									<li>
										<p class="title">担保方式</p>
										<p>{{item.guartype?(item.guartype==null||item.guartype=='"null"'||item.guartype=="null"||item.guartype=="NULL"?'—':gUARTYPE[item.guartype]):'—'}}</p>
									</li>
									<div class="" style="clear:both"></div>
								</ul>
								<ul>
									<li>
										<p class="title">担保方中债评价</p>
										<p>{{item.rating?(item.rating==null||item.rating=='"null"'||item.rating=="null"||item.rating=="NULL"?'—':item.rating):'—'}}</p>
									</li>
									<li>
										<p class="title">担保方外部级别</p>
										<p>{{item.creditrate?(item.creditrate==null||item.creditrate=='"null"'||item.creditrate=="null"||item.creditrate=="NULL"?'—':item.creditrate):'—'}}</p>
									</li>
									<div class="" style="clear:both">
									</div>
								</ul>
							</div>
					</div>
          </el-col>
					<el-col :span="24" v-if="!flag">
						<div class="baseinfo-boxone">
							本债券无担保
					</div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--锚点-->
    <!-- <el-card class="box-card fixcard">
      <ul>
        <li><a href="#voucher">个券信息</a></li>
        <li><a href="#bisc">基本信息</a></li>
        <li><a href="#voucherSoce">债项评级与债项担保</a></li>
      </ul>
    </el-card> -->
		<span :class="anchorPucker?'anchorList anchorOut':'anchorList anchorIn'">
			<p :class="anchorNum==0?'anchorTrue':'anchorFalse'" @click="anchorBTN(0)"><i class="fa fa-circle" aria-hidden="true"></i>1.个券选择</p>
			<p :class="anchorNum==1?'anchorTrue':'anchorFalse'" @click="anchorBTN(1)"><i class="fa fa-circle" aria-hidden="true"></i>2.基本信息</p>
			<p :class="anchorNum==2?'anchorTrue':'anchorFalse'" @click="anchorBTN(2)"><i class="fa fa-circle" aria-hidden="true"></i>3.债项评级与债项担保</p>
			<i class="fa fa-caret-right" @click="anchorFold"></i>
		</span>
	</el-row>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
