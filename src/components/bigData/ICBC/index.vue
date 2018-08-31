<!-- 工商信息 -->
<template >
    <el-row class="ICBC" gutter="10">
      <!-- 锚点 -->
      <span :class="jumpShowFlag? 'anchorList anchorOut':'anchorList anchorIn'">
        <p :class="(jumpFlag == '#biscfomation1') ? 'jumpClass':''"><a href="javascript:;" style="color:#333" @click="jump('#biscfomation1')">1.企业基本信息</a></p>
        <p :class="(jumpFlag == '#StockRight1') ? 'jumpClass':''"><a href="javascript:;" style="color:#333" @click="jump('#StockRight1')">2.股权冻结信息</a></p>
        <p :class="(jumpFlag == '#punishfomation1') ? 'jumpClass':''"><a href="javascript:;" style="color:#333" @click="jump('#punishfomation1')">3.行政处罚信息</a></p>
        <p :class="(jumpFlag == '#abnormalfomation1') ? 'jumpClass':''"><a href="javascript:;" style="color:#333" @click="jump('#abnormalfomation1')">4.经营异常信息</a></p>
        <p :class="(jumpFlag == '#implementfomation1') ? 'jumpClass':''"><a href="javascript:;" style="color:#333" @click="jump('#implementfomation1')">5.被执行信息</a></p>
        <i class="fa fa-caret-right" @click="anchorFold"></i>
      </span>
      <!--工商内容  -->
      <div class="ICBC_con">
      <!-- 弹框开始  -->
        <el-dialog class="dialogName" width="90%" :visible.sync="dialogVisible">
          <!-- <el-row  class="moreShow" id="moreShow" v-show="moreShow"> -->
            <!-- <div class="moreShow_con" v-dialogDragWidth="$refs.dialog_wrapper"> -->
              <!--主要人员信息  -->
                <div id="Manager" class="bigModel more1" v-show="index==1">
                  <div class="tit tit1">
                    <h3>主要人员信息 </h3>
                    <div class="titRight">
                      <span class="tit_con">
                        <i class="fa fa-search" aria-hidden="true" @click="searchdata(1)"></i>
                        <input type="text" class="search" placeholder="搜索查找" @click="ClearNull()" v-model="searchData" @keydown="search($event,1)" />
                      </span>
                      <button id="clearSearch" @click="clearSearch()">清除搜索</button>
                      <div class="close_box" @click="close()">
                        <span class="close"></span>
                    </div>
                  </div>
                  </div>
                  <div class="tablge_g table_g">
                    <el-table :data="Manager1" :span-method="arraySpanMethod"  border  style="width: 100%" class="line-table">
                      <el-table-column class="table_head"  prop="name"  label="姓名" :formatter="isNUll"  width="">  </el-table-column>
                      <el-table-column class="table_head"   prop="position" :formatter="isNUll"  label="职务">  </el-table-column>
                    </el-table>
                  </div>
                </div>
              <!-- 公司股东信息 -->
                <div id="CompanyInfo" class="bigModel more2" v-show="index ==2">
                  <div class="tit tit1">
                    <h3>公司股东信息</h3>
                    <div class="titRight">
                      <span class="tit_con">
                        <i class="fa fa-search" aria-hidden="true" @click="searchdata(2)"></i>
                        <input type="text" class="search" placeholder="搜索查找" @click="ClearNull()" v-model="searchData" @keydown="search($event,2)" />
                      </span>
                      <button id="clearSearch" @click="clearSearch()">清除搜索</button>
                      <div class="close_box" @click="close()">
                        <span class="close" ></span>
                      </div>
                    </div>
                  </div>
                  <el-row class="Com_tit">
                    <el-col :span="2"><i class="icon"></i>简称：</el-col>
                    <el-col :span="2">{{shortName}}</el-col>
                    <el-col :span="2">股票代码：</el-col>
                    <el-col :span="2">{{stockId}}</el-col>
                    <el-col :span="2">模块：</el-col>
                    <el-col :span="2">{{listingArea}}</el-col>
                  </el-row>
                  <div class="tablge_g table_g">
                    <el-row class="combackcolor">
                      <el-col :span="12"><h4>{{companyName}}</h4></el-col>
                      <el-col :span="12" class="comuter">截止日期：<span>{{new Date().getTime()|timeFilter('yyyy-mm-dd')}}</span></el-col>
                    </el-row>
                    <el-table :data="Shareholder1" :row-class-name="RowName" :span-method="arraySpanMethod" border style="width: 100%" class="line-table shareholder">
                      <el-table-column :resizable="false" :prop="item.key" :label="item.label" :formatter="isNUll" width="item.twidth" :key="index" v-for="(item,index) in table_headComInfo"> </el-table-column>
                    </el-table>
                  </div>
                </div>
              <!--分之机构信息  -->
                <div id="Branching" class="bigModel more3" v-show="index ==3">
                  <div class="tit tit1">
                    <h3>分支机构信息</h3>
                    <div class="titRight">
                      <span class="tit_con" >
                        <i class="fa fa-search" aria-hidden="true" @click="searchdata(3)"></i>
                        <input type="text" class="search" placeholder="搜索查找" @click="ClearNull()" v-model="searchData" @keydown="search($event,3)" />
                      </span>
                      <button id="clearSearch" @click="clearSearch()">清除搜索</button>
                      <div class="close_box" @click="close()">
                        <span class="close" ></span>
                      </div>
                    </div>
                  </div>
                  <div class="tablge_g table_g">
                    <el-table  :data="Branching1" :row-class-name="RowName" :formatter="isNUll"  style="width: 100%">
                      <el-table-column  :prop="item.key"  :label="item.label" :resizable="false"  :width="item.twidth"  :formatter="isNUll" :key="index" v-for="(item,index) in table_headBran"></el-table-column>
                    </el-table>
                  </div>
                </div>
              <!-- 公司对外投资信息 -->
                <div id="OutboundInvest" class="bigModel more4" v-show="index ==4">
                  <div class="tit tit1">
                    <h3>公司对外投资信息</h3>
                    <div class="titRight">
                      <span class="tit_con" >
                        <i class="fa fa-search" aria-hidden="true" @click="searchdata(4)"></i>
                        <input type="text" class="search" placeholder="搜索查找" @click="ClearNull()" :index="indexMethod"  v-model="searchData" @keydown="search($event,4)" />
                      </span>
                      <button id="clearSearch" @click="clearSearch()">清除搜索</button>
                      <div class="close_box" @click="close()">
                        <span class="close"></span>
                      </div>
                    </div>
                  </div>
                  <div class="tablge_g table_g ">
                    <el-table  :data="OutboundInvest1" style="width: 100%" :formatter="isNUll" class="investment">
                         <el-table-column :prop="item.key" :label="item.label" :resizable="false" :width="item.twidth" :formatter="isNUll" :type="item.type" :index ="indexMethod" :key= "index" v-for="(item,index) in table_headOutbound" ></el-table-column>
                    </el-table>
                  </div>
                </div>
              <!-- 清算信息 -->
                <div id="ClearInfor" class="bigModel more5" v-show="index ==5">
                  <div class="tit tit1">
                    <h3>清算信息</h3>
                    <div class="titRight">
                      <span class="tit_con" >
                        <i class="fa fa-search" aria-hidden="true" @click="searchdata(5)"></i>
                        <input type="text" class="search" placeholder="搜索查找" @click="ClearNull()" v-model="searchData" @keydown="search($event,5)" />
                      </span>
                      <button id="clearSearch" @click="clearSearch()">清除搜索</button>
                      <div class="close_box" @click="close()">
                        <span class="close" ></span>
                      </div>
                    </div>
                  </div>
                  <div class="tablge_g table_g">
                    <el-table  :data="ClearInfor1"  :span-method="arraySpanMethod" :formatter="isNUll"  border  style="width: 100%"  class="line-table">
                      <el-table-column  prop="liqPrincipal"  label="清算负责人"  width="">  </el-table-column>
                      <el-table-column  prop="liqMen"  label="清算组成员"></el-table-column>
                    </el-table>
                  </div>
                </div>
              <!-- 行政处罚信息 -->
                <div id="punishfomation" class="bigModel more6" v-show="index ==6">
                  <div class="tit tit1">
                    <h3>行政处罚信息</h3>
                    <div class="titRight">
                      <span class="tit_con">
                        <i class="fa fa-search" aria-hidden="true" @click="searchdata(6)"></i>
                        <input type="text" class="search" placeholder="搜索查找" @click="ClearNull()" v-model="searchData" @keydown="search($event,6)" />
                      </span>
                      <button id="clearSearch" @click="clearSearch()">清除搜索</button>
                      <div class="close_box" @click="close()">
                        <span class="close"></span>
                      </div>
                    </div>
                  </div>
                    <div class="tablge_g table_g">
                    <el-table  :data="Administrative1"  :span-method="arraySpanMethod" :formatter="isNUll"  border  style="width: 100%"  class="line-table shareholder administration">
                      <el-table-column :prop="item.key" :label="item.label" :resizable="false" :width="item.twidth" :formatter="isNUll"  :type="item.type" :index ="indexMethod" :key="index" v-for="(item,index) in table_headpunish"></el-table-column>
                    </el-table>
                  </div>
                </div>
              <!-- 严重违法失信息 -->
                <div id="SeriousIllegality" class="bigModel more7" v-show="index ==7">
                  <div class="tit tit1">
                    <h3>严重违法失信息</h3>
                    <div class="titRight">
                      <span class="tit_con" >
                        <i class="fa fa-search" aria-hidden="true" @click="searchdata(7)"></i>
                        <input type="text" class="search" placeholder="搜索查找" @click="ClearNull()" v-model="searchData" @keydown="search($event,7)" />
                      </span>
                      <button id="clearSearch" @click="clearSearch()">清除搜索</button>
                      <div class="close_box" @click="close()">
                        <span class="close"></span>
                      </div>
                    </div>
                  </div>
                  <div class="tablge_g table_g">
                    <el-table  class="tablepre tablethree"  :data="SeriousIllegality1" :formatter="isNUll"  style="width: 100%;margin-top: 10px;text-align: center">
                      <el-table-column>
                        <el-table-column  prop="illegalType"  label="类别">  </el-table-column>
                      </el-table-column>
                      <el-table-column align="center" :resizable="false" :label="item.label" :key="index" v-for="(item,index) in table_headSerious"  :formatter="timeChange">
                        <el-table-column v-if="(item.label == '列入')" align="center" :resizable="false" :width="item1.twidth" :prop="item1.key" :label="item1.label" :key="index" v-for="(item1,index) in table_headSeriousru" :formatter="isNULL"></el-table-column>
                        <el-table-column v-if="(item.label == '移出')" align="center" :resizable="false" :width="item2.twidth" :prop="item2.key" :label="item2.label" :key="index" v-for="(item2,index) in table_headSeriouschu" :formatter="isNULL"></el-table-column>
                      </el-table-column>
                    </el-table>
                  </div>
                </div>
              <!-- 经营异常信息 -->
                <div id="abnormalfomation" class="bigModel more8" v-show="index ==8">
                  <div class="tit tit1">
                    <h3>经营异常信息</h3>
                    <div class="titRight">
                      <span class="tit_con" >
                        <i class="fa fa-search" aria-hidden="true" @click="searchdata(8)"></i>
                        <input type="text" class="search" placeholder="搜索查找" @click="ClearNull()" v-model="searchData" @keydown="search($event,8)" />
                      </span>
                      <button id="clearSearch" @click="clearSearch()">清除搜索</button>
                      <div class="close_box" @click="close()">
                        <span class="close"  ></span>
                      </div>
                    </div>
                  </div>
                  <div class="tablge_g table_g">
                    <el-table class="tablepre tablethree"  :data="AbnormalOpera1" :formatter="isNUll" style="width: 100%;margin-top: 10px;text-align: center">
                      <el-table-column align="center" :resizable="false" :label="item.label" :key="index" v-for="(item,index) in table_headabnormal"  :formatter="timeChange">
                        <el-table-column v-if="(item.label == '列入')" align="center" :resizable="false" :width="item1.twidth" :prop="item1.key" :label="item1.label":key="index" v-for="(item1,index) in table_headabnormalru" :formatter="isNULL"></el-table-column>
                        <el-table-column v-if="(item.label == '移出')" align="center" :resizable="false" :width="item2.twidth" :prop="item2.key" :label="item2.label":key="index" v-for="(item2,index) in table_headabnormalchu" :formatter="isNULL"></el-table-column>
                      </el-table-column>
                    </el-table>
                  </div>
                </div>
              <!-- 被执行人信息 -->
                <div id="implementfomation" class="bigModel more9" v-show="index ==9">
                  <div class="tit tit1">
                    <h3>被执行人信息</h3>
                    <div class="titRight">
                      <span class="tit_con">
                        <i class="fa fa-search" aria-hidden="true" @click="searchdata(9)"></i>
                        <input type="text" class="search" placeholder="搜索查找" @click="ClearNull()" v-model="searchData" @keydown="search($event,9)" />
                      </span>
                      <button id="clearSearch" @click="clearSearch()">清除搜索</button>
                      <div class="close_box" @click="close()">
                        <span class="close" ></span>
                      </div>
                    </div>
                  </div>
                    <div class="tablge_g table_g">
                      <el-table :data="Beexecutedc1" :span-method="arraySpanMethod"  border style="width: 100%" class="line-table">
                          <el-table-column :prop="item.key" :label="item.label" :resizable="false" :width="item.twidth" :formatter="isNUll" :key="index" v-for="(item,index) in table_headimplement"></el-table-column>
                      </el-table>
                    </div>
                </div>
              <!-- 失信被执行信息 -->
                <div id="Dishonesty" class="bigModel more10" v-show="index ==10">
                  <div class="tit tit1">
                    <h3>失信被执行信息</h3>
                    <div class="titRight">
                      <span class="tit_con">
                        <i class="fa fa-search" aria-hidden="true" @click="searchdata(10)"></i>
                        <input type="text" class="search" placeholder="搜索查找" @click="ClearNull()" v-model="searchData" @keydown="search($event,10)" />
                      </span>
                      <button id="clearSearch" @click="clearSearch()">清除搜索</button>
                      <div class="close_box" @click="close()">
                        <span class="close"></span>
                      </div>
                    </div>
                  </div>
                  <div class="tablge_g table_g">
                    <el-table :data="Dishonesty1"  :span-method="arraySpanMethod"  :formatter="isNUll"  border  style="width: 100%"  class="line-table">
                          <el-table-column  :prop="item.key"  :label="item.label" :resizable="false"  :width="item.twidth"  :formatter="isNUll" :key="index"  v-for="(item,index) in table_headDishonesty"  ></el-table-column>
                    </el-table>
                  </div>
                </div>
              <!--企业变更信息 -->
                <div id="QYchange" class="bigModel more11" v-show="index ==11">
                  <div class="tit tit1">
                    <h3>企业信息变更</h3>
                    <div class="titRight">
                      <div class="close_box" @click="close()">
                        <span class="close" ></span>
                      </div>
                    </div>
                  </div>
                  <div class="tablge_g table_g">
                    <el-row>
                      <el-col :span="24" class="QYchange_tit">变更标题:{{qiyeData.altItem}}</el-col>
                      <el-col :span="24" class="QYchange_tit">变更时间:{{qiyeData.altDate| timeFilter('yyyy-mm-dd')}}</el-col>
                    </el-row>
                    <el-row class="cont" >
                      <el-col :span="12">
                        <p class="QYchange_tit p1">
                          变更前信息：
                        </p>
                        <div class="content ">
                            {{qiyeData.altBe}}
                        </div>
                      </el-col>
                      <el-col :span="12">
                        <p class="QYchange_tit">
                          变更后信息：
                        </p>
                        <div class="content">
                            {{qiyeData.altAf}}
                        </div>
                      </el-col>

                    </el-row>
                  </div>
                </div>
              <!-- 股权出质登记信息 -->
                <div id="assetsfomation" class="bigModel more12" v-show="index== 12">
                  <div class="tit tit1">
                    <h3>股权出质登记信息</h3>
                    <div class="titRight">
                      <span class="tit_con">
                        <i class="fa fa-search" aria-hidden="true" @click="searchdata(12)"></i>
                        <input type="text" class="search" placeholder="搜索查找" @click="ClearNull()" v-model="searchData" @keydown="search($event,12)" />
                      </span>
                      <button id="clearSearch" @click="clearSearch()">清除搜索</button>
                      <div class="close_box" @click="close()">
                        <span class="close"></span>
                      </div>
                    </div>
                  </div>
                  <el-row>
                    <el-col :span="24" class="tablge_g table_g" v-show="more12Show">
                      <table class="table table-bordered" style="border: 0px" v-for="(item,index) in EquityReg1" :key="index" v-show="item.tableShowFlag">
                        <tbody>
                          <tr>
                            <td  width="25%"  class="table_tit" >登记编号</td>
                            <td  width="25%">{{item.impEquityNo}}</td>
                            <td  width="25%"  class="table_tit">状态</td>
                            <td  width="25%">{{item.impExeState}}</td>
                          </tr>
                          <tr>
                           <td  width="25%"  class="table_tit">出质人</td>
                           <td  width="25%">{{item.impPledgor}}</td>
                           <td  width="25%"  class="table_tit">出质人证照/证件号码</td>
                           <td  width="25%">{{item.impPrLicensenNo}}</td>
                          </tr>
                          <tr>
                            <td width="25%"  class="table_tit">质权人</td>
                            <td width="25%">{{item.impOrg}}</td>
                            <td width="25%"  class="table_tit">质权人证照/证件号码</td>
                            <td width="25%">{{item.impOrgLicenseNo}}</td>
                          </tr>
                          <tr>
                            <td width="25%"  class="table_tit">出质股权数额</td>
                            <td width="25%">{{item.impAm}}</td>
                           <td width="25%"  class="table_tit">股权出质设立登记日期</td>
                           <td width="25%">{{item.impEqupleDate | timeformatter('yyyy-mm-dd')}}</td>
                          </tr>
                          <tr>
                           <td width="25%"  class="table_tit">公示日期</td>
                           <td width="25%">{{item.impPubDate | timeformatter('yyyy-mm-dd')}}</td>
                           <td width="25%"  class="table_tit">股权出质变更信息</td>
                           <td width="25%">{{item.impAltList}}</td>
                          </tr>
                          <tr>
                           <td width="25%"  class="table_tit">变更日期</td>
                           <td width="25%">{{item.altDate | timeformatter('yyyy-mm-dd')}}</td>
                           <td width="25%"  class="table_tit">变更内容</td>
                           <td width="25%">{{item.altContent}}</td>
                          </tr>
                        </tbody>
                      </table>
                    </el-col>
                  </el-row>
                </div>
              <!--股权冻结信息  -->
                <div id="StockRight" class="bigModel more13" v-show="index== 13">
                  <div class="tit tit1">
                    <h3>股权冻结信息</h3>
                    <div class="titRight">
                      <span class="tit_con">
                        <i class="fa fa-search" aria-hidden="true" @click="searchdata(13)"></i>
                        <input type="text" class="search" placeholder="搜索查找" @click="ClearNull()" v-model="searchData" @keydown="search($event,13)" />
                      </span>
                      <button id="clearSearch" @click="clearSearch()">清除搜索</button>
                      <div class="close_box" @click="close()">
                        <span class="close"></span>
                      </div>
                    </div>
                  </div>
                  <el-row>
                    <el-col :span="24" class="tablge_g table_g" v-show="more13Show">
                      <table class="table table-bordered" style="border: 0px" v-show="item1.tableShowFlag" v-for="item1 in StockRight1">
                        <tbody>
                          <tr>
                             <td  width="25%"  class="table_tit">被执行人</td>
                             <td  width="25%">{{item1.judicialInv}}</td>
                             <td  width="25%"  class="table_tit">类型/状态</td>
                             <td  width="25%">{{item1.judicialFrozState}}</td>
                          </tr>
                          <tr>
                             <td  width="25%"  class="table_tit">股权数额</td>
                             <td  width="25%">{{item1.judicialFroAm}}</td>
                             <td  width="25%"  class="table_tit">冻结公示日期</td>
                             <td  width="25%">{{item1.frozPublicDate | timeformatter('yyyy-mm-dd')}}</td>
                          </tr>
                          <tr>
                             <td  width="25%"  class="table_tit">冻结期限</td>
                             <td  width="25%">{{item1.frozDeadline}}</td>
                             <td  width="25%" class="table_tit">冻结期限(时间段)
                             <td>自{{item1.frozFrom  | timeformatter('yyyy-mm-dd')}}至{{item1.frozTo | timeformatter('yyyy-mm-dd')}}</td>
                          </tr>
                          <tr>
                             <td  width="25%"  class="table_tit">被执行人证件类型</td>
                             <td  width="25%">{{item1.judicialCerTypeName}}</td>
                             <td  width="25%"  class="table_tit">被执行人证件号码</td>
                             <td  width="25%">{{item1.judicialCerNo}}</td>
                          </tr>
                          <tr>
                             <td  width="25%"  class="table_tit">冻结执行法院</td>
                             <td  width="25%">{{item1.frozAuth}}</td>
                             <td  width="25%"  class="table_tit">冻结执行事项</td>
                             <td  width="25%">{{item1.frozExecuteItem}}</td>
                          </tr>
                          <tr>
                             <td  width="25%"  class="table_tit">冻结执行通知书文号</td>
                             <td  width="25%">{{item1.frozExecuteNo}}</td>
                             <td  width="25%"  class="table_tit">冻结执行裁定数文号</td>
                             <td  width="25%">{{item1.frozDocNo}}</td>
                          </tr>
                          <tr>
                             <td  width="25%"  class="table_tit">续行冻结期限</td>
                             <td  width="25%">{{item1.keepFrozDeadline}}</td>
                             <td width="25%"  class="table_tit">续行冻结期限自  </td>
                             <td  width="25%">
                               <span>{{item1.keepFrozFrom  | timeformatter('yyyy-mm-dd')}}</span>
                               至 <span>{{item1.keepFrozTo | timeformatter('yyyy-mm-dd')}}</span>
                             </td>
                          </tr>
                          <tr>
                             <td  width="25%"  class="table_tit">解冻执行法院</td>
                             <td  width="25%">{{item1.thawAuth}}</td>
                             <td  width="25%"  class="table_tit">解冻执行事项</td>
                             <td  width="25%">{{item1.thawExecuteItem}}</td>
                          </tr>
                          <tr>
                             <td  width="25%"  class="table_tit">解冻执行通知书文号</td>
                             <td  width="25%">{{item1.thawExecuteNo}}</td>
                             <td  width="25%"  class="table_tit">解冻执行裁定文书号</td>
                             <td  width="25%">{{item1.thawDocNo}}</td>
                          </tr>
                          <tr>
                             <td  width="25%"  class="table_tit">解除冻结日期</td>
                             <td  width="25%">{{item1.thawDate | timeformatter('yyyy-mm-dd')}}</td>
                             <td  width="25%"  class="table_tit">解冻公示日期</td>
                             <td  width="25%">{{item1.thawPublicDate | timeformatter('yyyy-mm-dd') }}</td>
                          </tr>
                          <tr>
                             <td  width="25%"  class="table_tit">失效时间</td>
                             <td  width="25%">{{item1.invalidTime}}</td>
                             <td  width="25%"  class="table_tit">失效原因</td>
                             <td  width="25%">{{item1.invalidReason}}</td>
                          </tr>
                        </tbody>
                      </table>
                     </el-col>
                  </el-row>
                </div>
              <!-- 动产抵押登记信息 -->
                <div id="ChattelMortgage" class="bigModel more14" v-show="index== 14">
                  <div class="tit tit1">
                    <h3>动产抵押登记信息</h3>
                    <div class="titRight">
                      <span class="tit_con">
                        <i class="fa fa-search" aria-hidden="true" @click="searchdata(14)"></i>
                        <input type="text" class="search" placeholder="搜索查找" @click="ClearNull()" v-model="searchData" @keydown="search($event,14)" />
                      </span>
                      <button id="clearSearch" @click="clearSearch()">清除搜索</button>
                      <div class="close_box" @click="close()">
                        <span class="close" ></span>
                      </div>
                    </div>
                  </div>
                  <div class="tablge_g table_g">
                      <div  v-for="(item3,index) in ChattelMortgage1" v-show="item3.tableShowFlag">
                        <table class="table table-bordered table1" style="border: 0px" >
                          <tbody>
                            <tr>
                              <td width="25%"  class="table_tit">动产抵押登记编号</td>
                              <td width="25%">{{item3.mortRegNo}}</td>
                              <td width="25%"  class="table_tit">状态</td>
                              <td width="25%">{{item3.mortStatus}}</td>
                            </tr>
                            <tr>
                              <td width="25%"  class="table_tit">登记日期</td>
                              <td width="25%">{{item3.regDate|timeformatter("yyyy-mm-dd")}}</td>
                              <td width="25%"  class="table_tit">登记机关</td>
                              <td width="25%">{{item3.regOrg}}</td>
                            </tr>
                            <tr>
                              <td width="25%"  class="table_tit">被担保的主债权种类</td>
                              <td width="25%">{{item3.priclasecKind}}</td>
                              <td width="25%"  class="table_tit">被担保的主债权数额(万元)</td>
                              <td width="25%">{{item3.priclasecAm}}</td>
                             </tr>
                             <tr>
                              <td width="25%"  class="table_tit">担保范围</td>
                              <td width="25%">{{item3.warcov}}</td>
                              <td width="25%"  class="table_tit">履行期限</td>
                              <td>自{{item3.pefperFrom}}至{{item3.pefperTo}}</td>
                             </tr>
                             <tr>
                              <td width="25%"  class="table_tit">注销日期</td>
                              <td width="25%">{{item3.canDate}}</td>
                              <td width="25%"  class="table_tit">注销原因</td>
                              <td width="25%">{{item3.canReason}}</td>
                             </tr>
                             <tr>
                              <td width="25%"  class="table_tit">抵押权人名称</td>
                              <td width="25%">{{item3.mortOrg}}</td>
                              <td width="25%"  class="table_tit">抵押权人证照类型</td>
                              <td width="25%">{{item3.blicType}}</td>
                             </tr>
                             <tr>
                              <td width="25%"  class="table_tit">抵押权人证照号码</td>
                              <td width="25%">{{item3.blicNo}}</td>
                              <td width="25%"  class="table_tit">抵押权人住所地</td>
                              <td width="25%">{{item3.mortLoc}}</td>
                             </tr>
                             <!--   v-show="item3.showFlag"-->
                             <!-- <tr v-show="item3.showFlag">
                               <td colspan="4" class="Mort">
                                 <table class="table table-bordered tableMort" style="border: 0px" v-for="(item4,index1) in ChattelMortgage1List[index]">
                                   <tbody>
                                     <tr>
                                      <td width="25%"  class="table_tit">抵押物名称{{index1}}</td>
                                      <td width="25%">{{item4.guaName}}</td>
                                      <td width="25%"  class="table_tit">抵押物所有权或使用权{{index1}}</td>
                                      <td width="25%">{{item4.guaOwn}}</td>
                                     </tr>
                                     <tr>
                                      <td width="25%"  class="table_tit">抵押物数量、质量、状况、所在地等情况{{index1}}</td>
                                      <td colspan="3" width="25%">{{item4.guaDes}}</td>
                                     </tr>
                                  </tbody>
                                </table>
                               </td>
                             </tr> -->
                             <!-- <tr>
                               <td colspan="4">
                                 <span :class="item3.showFlag ? 'Downmore fa fa-angle-double-up':'Downmore fa fa-angle-double-down'" @click="Downmore(item3,index)"></span>
                               </td>
                             </tr> -->
                           </tbody>
                        </table>
                        <table v-show="item3.showFlag" class="table table-bordered tableMort" style="border: 0px" v-for="(item4,index1) in ChattelMortgage1List[index]">
                           <tbody>
                             <tr>
                              <td width="25%"  class="table_tit">抵押物名称{{index1+1}}</td>
                              <td width="25%">{{item4.guaName}}</td>
                              <td width="25%"  class="table_tit">抵押物所有权或使用权{{index1+1}}</td>
                              <td width="25%">{{item4.guaOwn}}</td>
                             </tr>
                             <tr>
                              <td width="25%"  class="table_tit">抵押物数量、质量、状况、所在地等情况{{index1+1}}</td>
                              <td colspan="3" width="25%">{{item4.guaDes}}</td>
                             </tr>
                          </tbody>
                        </table>
                        <span :class="item3.showFlag ? 'Downmore fa fa-angle-double-up':'Downmore fa fa-angle-double-down'" @click="Downmore(item3,index)"></span>
                      </div>

                  </div>
                </div>
              <!-- </div> -->
          <!-- </el-row> -->
        </el-dialog>

        <!--弹框结束  -->
        <!--企业照面基本信息-->
        <div id="biscfomation1" class="bigModel bigModelenterpriseBasic">
          <el-row  class="tit">
            <el-col :span="24" v-show="historyName2"><h3>{{companyName}}</h3>
            </el-col>
            <el-col :span="8" v-show="historyName"><h3>{{companyName}}</h3>
            </el-col>
            <el-col id="el-col" :span="16" v-show="historyName" >
              <el-popover popper-class="popver_ceng" placement="right-start"  trigger="click">
                <el-table  id="ICBC_popver" border  :data="historyNameList">
                  <el-table-column width="300"  property="altBe" label="历史名称"></el-table-column>
                  <el-table-column width="150" property="altDate" label="名称变更时间"></el-table-column>
                </el-table>
                <a class="nameHistory" slot="reference">历史名称信息</a>
              </el-popover>
            </el-col>
            <!-- <el-col :span="10" style="text-align: right;float: right;padding-right: 28px;line-height: 70px">上次更新日期：<span style="color: red">{{updateDate}}</span></el-col> -->
          </el-row>
          <!--标签信息-->
          <el-row class="biscfo_info">
            <el-col :span="3" class="lableEight" :label="item.label"    v-for="item in mationLable" :key="item.name">
              <div @click="jump(item.label)">
                <div >{{item.name}}</div><div class="lableNum" :style="[item.B]"  v-text="item.num"></div>
              </div>
            </el-col>
          </el-row>
          <!--登记状态-->
          <el-row class="biscfo_info row-bg" type="flex" >
            <el-col :span="5"><div class="grid-content">登记状态：</div><span style="color: red">{{denjZT}}</span></el-col>
            <el-col :span="5"><div class="grid-content">注销日期：</div><span>{{zhuxiaoRQ}}</span></el-col>
            <el-col :span="5"><div class="grid-content">吊销日期：</div><span>{{diaoxiaoRQ}}</span></el-col>
          </el-row>
          <!--注册信息-->
          <el-row type="flex" class="biscfo_info row-bg register">
            <el-col :span="7"><div class="grid-content">统一社会信用代码：</div><span>{{creditCode}}</span></el-col>
            <el-col :span="7"><div class="grid-content">注册号：<span>{{regNo}}</span></div></el-col>
            <el-col :span="4"><div class="grid-content">组织机构代码：</div><span>{{orgCode}}</span></el-col>
          </el-row>
          <!--企业基本信息-->
          <el-row class="qiyeInfo">
            <el-col :span="24">
              <table class="table table-bordered" style="border: 0px">
                <tbody>
                <tr>
                  <td width="35%" class="table_tit">法定人代表/负责人/执行事务合伙人/投资者/经营者</td>
                  <td width="15%"><a class="societabn" @click="getDescribe()"> {{CompanyInfo1.frName}}</a></td>
                  <td width="25%" class="table_tit">类型</td>
                  <td width="25%">{{CompanyInfo1.entType}}</td>
                </tr>
                <tr>
                  <td width="35%" class="table_tit">注册资本(万元)</td>
                  <td width="15%">{{CompanyInfo1.regCap}}  </td>
                  <td width="25%" class="table_tit">实收资本(万元)</td>
                  <td width="25%">{{CompanyInfo1.recCap}}</td>
                </tr>
                <tr>
                  <td width="35%" class="table_tit">成立时间</td>
                  <td width="15%"> {{CompanyInfo1.esDate}}</td>
                  <td width="25%" class="table_tit">登记机关</td>
                  <td width="25%">{{CompanyInfo1.regOrg}}</td>
                </tr>
                <tr>
                  <td width="35%" class="table_tit">核准时间</td>
                  <td width="15%">{{CompanyInfo1.apprDate}} </td>
                  <td width="25%" class="table_tit">营业期限</td>
                  <td width="25%"><span >自</span>{{CompanyInfo1.openFrom}} <span >至</span>{{CompanyInfo1.openTo}} </td>
                </tr>
                <tr>
                  <td width="35%" class="table_tit">国民经济行业代码</td>
                  <td width="15%">{{CompanyInfo1.industryCode}} </td>
                  <td width="25%"class="table_tit" >国民经济行业名称</td>
                  <td width="25%">{{CompanyInfo1.industryName}}</td>
                </tr>
                <tr>
                  <td width="35%" class="table_tit">行业门类代码</td>
                  <td width="15%"> {{CompanyInfo1.industryPhyCode}}</td>
                  <td width="25%" class="table_tit">行业门类名称</td>
                  <td width="25%">{{CompanyInfo1.industryPhyName}}</td>
                </tr>
                <tr>
                  <td width="35%" class="table_tit">所在地(省/地级市/区县) </td>
                  <td width="15%">{{CompanyInfo1.province}}/{{CompanyInfo1.city}}/{{CompanyInfo1.county}} </td>
                  <td width="25%" class="table_tit">住所所在行政区划代码 </td>
                  <td width="25%" >{{CompanyInfo1.areaCode}}</td>
                </tr>
                <tr>
                  <td width="35%" class="table_tit">详细住所</td>
                  <td colspan="3" >{{CompanyInfo1.address}}</td>
                </tr>
                <tr>
                  <td width="35%" class="table_tit">经营范围</td>
                  <td colspan="3" style="text-align:left;">{{CompanyInfo1.operateScope}}</td>
                </tr>
                </tbody>
              </table>
            </el-col>
          </el-row>
        </div>
        <!--主要人员信息-->
        <div id="Manager1" class="bigModel">
          <div class="tit">
            <h3>主要人员信息</h3>
            <span class="more" v-show="Managershow" @click="more(companyName,1,man_total,1)">更多</span>
          </div>
          <div class="tablge_g">
            <el-table :data="Manager"   border  style="width: 100%">
              <el-table-column class="table_head"  prop="name"  label="姓名" :formatter="isNUll"  width="">  </el-table-column>
              <el-table-column class="table_head"   prop="position" :formatter="isNUll"  label="职务">  </el-table-column>
            </el-table>
          </div>
        </div>
        <!--公司股东信息-->
        <div id="CompanyInfo1" class="bigModel">
          <div class="tit">
            <h3>公司股东信息</h3>
            <span class="more" v-show="Shareholdershow"  @click="more(companyName,1,Share_total,2)">更多</span>
          </div>
          <el-row class="Com_tit">
            <el-col :span="2"><i class="icon"></i>简称：</el-col>
            <el-col :span="2">{{shortName}}</el-col>
            <el-col :span="2">股票代码：</el-col>
            <el-col :span="2">{{stockId}}</el-col>
            <el-col :span="2">板块：</el-col>
            <el-col :span="2">{{listingArea}}</el-col>
          </el-row>
          <div class="tablge_g">
            <el-row class="combackcolor">
              <el-col :span="12"><h4>{{companyName}}</h4></el-col>
              <el-col :span="12" class="comuter">截止日期：<span>{{new Date().getTime()|timeFilter('yyyy-mm-dd')}}</span></el-col>
            </el-row>
            <el-table :data="Shareholder"  border style="width: 100%" >
              <el-table-column :resizable="false" :prop="item.key" :label="item.label" :formatter="isNUll" :width="item.twidth" :key="index" v-for="(item,index) in table_headComInfo"> </el-table-column>
            </el-table>
          </div>
        </div>
        <!--分之机构信息-->
        <div id="Branching1" class="bigModel">
          <div class="tit">
            <h3>分支机构信息</h3>
            <span class="more" v-show="Branchingshow" @click="more(companyName,1,Branchingtol,3)">更多</span>
          </div>
          <div class="tablge_g">
            <el-table  :data="Branching" :formatter="isNUll" border style="width: 100%">
              <el-table-column  :prop="item.key"  :label="item.label" :resizable="false"  :width="item.twidth"  :formatter="isNUll" :key="index" v-for="(item,index) in table_headBran"></el-table-column>
            </el-table>
          </div>
        </div>
        <!--企业变更信息-->
        <div id="qiyebg1" class="bigModel">
            <div class="tit">
              <h3>企业变更信息</h3>
            </div>
            <div class="qiye_change">
                <ul class="time_zhou" v-show="show8Flag">
                  <li v-for="item in change_time">
                    <i @click="more(item.id,'','',11)" :class="[item.color]" :index="index"><em>{{item.altItem}}</em></i>
                    <b :class="[item.background]">{{item.altDate | timeFilter('yyyy-mm-dd')}}</b>
                    <span :class="[item.sp]"></span><span class="sp11"></span><span class="sp11"></span><span class="sp11"></span><span class="sp11"></span>
                    <span class="sp11"></span><span class="sp11"></span><span class="sp11"></span><span class="sp11"></span><span class="sp11"></span><span class="sp11"></span>
                  </li>
                </ul>
                <ul class="time_zhou1" v-show="show5Flag">
                  <li v-for="item in change_time" :style="'width:'+item.width">
                    <i @click="more(item.id,'','',11)" :class="[item.color]" :index="index"><em>{{item.altItem}}</em></i>
                    <b :class="[item.backgrond]">{{item.altDate | timeFilter('yyyy-mm-dd')}}</b>
                    <span :class="[item.sp]"></span>
                    <span class="sp11" :style="'margin:'+item.margin"></span><span class="sp11" :style="'margin:'+item.margin"></span>
                    <span class="sp11" :style="'margin:'+item.margin"></span><span class="sp11" :style="'margin:'+item.margin"></span>
                    <span class="sp11" :style="'margin:'+item.margin"></span><span class="sp11" :style="'margin:'+item.margin"></span>
                    <span class="sp11" :style="'margin:'+item.margin"></span><span class="sp11" :style="'margin:'+item.margin"></span>
                    <span class="sp11" :style="'margin:'+item.margin"></span><span class="sp11" :style="'margin:'+item.margin"></span>
                  </li>
                </ul>
            </div>
        </div>
        <!--公司对外投资信息-->
        <div id="OutboundInvest1" class="bigModel">
          <div class="tit">
            <h3>公司对外投资信息</h3>
            <span class="more" v-show= "OutboundInvestshow" @click="more(companyName,1,OutboundInvesttol,4)">更多</span>
          </div>
            <div class="tablge_g">
            <el-table  :data="OutboundInvest" border style="width: 100%" :formatter="isNUll" >
                 <el-table-column :prop="item.key" :label="item.label" :resizable="false"  :width="item.twidth" :formatter="isNUll" :type="item.type" :index ="indexMethod"  :key= "index" v-for="(item,index) in table_headOutbound" ></el-table-column>
            </el-table>
          </div>
        </div>
        <!--清算信息-->
        <div id="ClearInfor1" class="bigModel">
          <div class="tit">
            <h3>清算信息</h3>
            <span class="more" v-show="ClearInforshow" @click="more(companyName,1,ClearInfortol,5)">更多</span>

          </div>
          <div class="tablge_g">
            <el-table  :data="ClearInfor"   :formatter="isNUll"  border  style="width: 100%"  class="line-table">
              <el-table-column  prop="liqPrincipal"  label="清算负责人"  width="">  </el-table-column>
              <el-table-column  prop="liqMen"  label="清算组成员"></el-table-column>
            </el-table>
          </div>
        </div>
        <!--股权出质登记信息-->
        <div id="assetsfomation1" class="bigModel">
          <div class="tit">
            <h3>股权出质登记信息</h3>
            <span class="more"v-show="EquityRegshow" @click="more(companyName,1,mationLable[0].num,12)">更多</span>
          </div>
          <el-row>
            <el-col :span="24" class="tablge_g">
              <table class="table table-bordered" style="border: 0px">
                <tbody>
                  <tr>
                    <td  width="25%"  class="table_tit" >登记编号</td>
                    <td  width="25%">{{EquityReg.impEquityNo}}</td>
                    <td  width="25%"  class="table_tit">状态</td>
                    <td  width="25%">{{EquityReg.impExeState}}</td>
                  </tr>
                  <tr>
                   <td  width="25%"  class="table_tit">出质人</td>
                   <td  width="25%">{{EquityReg.impPledgor}}</td>
                   <td  width="25%"  class="table_tit">出质人证照/证件号码</td>
                   <td  width="25%">{{EquityReg.impPrLicensenNo}}</td>
                  </tr>
                  <tr>
                   <td width="25%"  class="table_tit">质权人</td>
                   <td width="25%">{{EquityReg.impOrg}}</td>
                   <td width="25%"  class="table_tit">质权人证照/证件号码</td>
                   <td width="25%">{{EquityReg.impOrgLicenseNo}}</td>
                  </tr>
                  <tr>
                   <td width="25%"  class="table_tit">出质股权数额</td>
                   <td width="25%">{{EquityReg.impAm }}</td>
                   <td width="25%"  class="table_tit">股权出质设立登记日期</td>
                   <td width="25%">{{EquityReg.impEqupleDate | timeformatter('yyyy-mm-dd')}}</td>
                  </tr>
                  <tr>
                   <td width="25%"  class="table_tit">公示日期</td>
                   <td width="25%">{{EquityReg.impPubDate | timeformatter('yyyy-mm-dd')}}</td>
                   <td width="25%"  class="table_tit">股权出质变更信息</td>
                   <td width="25%">{{EquityReg.impAltList}}</td>
                  </tr>
                  <tr>
                   <td width="25%"  class="table_tit">变更日期</td>
                   <td width="25%">{{EquityReg.altDate | timeformatter('yyyy-mm-dd')}}</td>
                   <td width="25%"  class="table_tit">变更内容</td>
                   <td width="25%">{{EquityReg.altContent}}</td>
                  </tr>
                </tbody>
              </table>
            </el-col>
          </el-row>
        </div>
        <!--股权冻结信息-->
        <div id="StockRight1" class="bigModel">
          <div class="tit">
            <h3>股权冻结信息</h3>
            <span class="more" v-show="StockRightshow"  @click="more(companyName,1,mationLable[1].num,13)">更多</span>

          </div>
          <el-row>
            <el-col :span="24" class="tablge_g">
              <table class="table table-bordered" style="border: 0px">
                <tbody>
                  <tr>
                     <td  width="25%"  class="table_tit">被执行人</td>
                     <td  width="25%">{{StockRight.judicialInv}}</td>
                     <td  width="25%"  class="table_tit">类型/状态</td>
                     <td  width="25%">{{StockRight.judicialFrozState}}</td>
                  </tr>
                  <tr>
                     <td  width="25%"  class="table_tit">股权数额</td>
                     <td  width="25%">{{StockRight.judicialFroAm}}</td>
                     <td  width="25%"  class="table_tit">冻结公示日期</td>
                     <td  width="25%">{{StockRight.frozPublicDate | timeformatter('yyyy-mm-dd')}}</td>
                  </tr>
                  <tr>
                     <td  width="25%"  class="table_tit">冻结期限</td>
                     <td  width="25%">{{StockRight.frozDeadline}}</td>
                     <td  width="25%" class="table_tit">冻结期限(时间段)
                     <td>自{{StockRight.frozFrom  | timeformatter('yyyy-mm-dd')}}至{{StockRight.frozTo | timeformatter('yyyy-mm-dd')}}</td>
                  </tr>
                  <tr>
                     <td  width="25%"  class="table_tit">被执行人证件类型</td>
                     <td  width="25%">{{StockRight.judicialCerTypeName}}</td>
                     <td  width="25%"  class="table_tit">被执行人证件号码</td>
                     <td  width="25%">{{StockRight.judicialCerNo}}</td>
                  </tr>
                  <tr>
                     <td  width="25%"  class="table_tit">冻结执行法院</td>
                     <td  width="25%">{{StockRight.frozAuth}}</td>
                     <td  width="25%"  class="table_tit">冻结执行事项</td>
                     <td  width="25%">{{StockRight.frozExecuteItem}}</td>
                  </tr>
                  <tr>
                     <td  width="25%"  class="table_tit">冻结执行通知书文号</td>
                     <td  width="25%">{{StockRight.frozExecuteNo}}</td>
                     <td  width="25%"  class="table_tit">冻结执行裁定数文号</td>
                     <td  width="25%">{{StockRight.frozDocNo}}</td>
                  </tr>
                  <tr>
                     <td  width="25%"  class="table_tit">续行冻结期限</td>
                     <td  width="25%">{{StockRight.keepFrozDeadline}}</td>
                     <td width="25%"  class="table_tit">续行冻结期限自  </td>
                     <td  width="25%">
                       <span>{{StockRight.keepFrozFrom  | timeformatter('yyyy-mm-dd')}}</span>
                       至 <span>{{StockRight.keepFrozTo | timeformatter('yyyy-mm-dd')}}</span>
                     </td>
                  </tr>
                  <tr>
                     <td  width="25%"  class="table_tit">解冻执行法院</td>
                     <td  width="25%">{{StockRight.thawAuth}}</td>
                     <td  width="25%"  class="table_tit">解冻执行事项</td>
                     <td  width="25%">{{StockRight.thawExecuteItem}}</td>
                  </tr>
                  <tr>
                     <td  width="25%"  class="table_tit">解冻执行通知书文号</td>
                     <td  width="25%">{{StockRight.thawExecuteNo}}</td>
                     <td  width="25%"  class="table_tit">解冻执行裁定文书号</td>
                     <td  width="25%">{{StockRight.thawDocNo}}</td>
                  </tr>
                  <tr>
                     <td  width="25%"  class="table_tit">解除冻结日期</td>
                     <td  width="25%">{{StockRight.thawDate | timeformatter('yyyy-mm-dd')}}</td>
                     <td  width="25%"  class="table_tit">解冻公示日期</td>
                     <td  width="25%">{{StockRight.thawPublicDate | timeformatter('yyyy-mm-dd') }}</td>
                  </tr>
                  <tr>
                     <td  width="25%"  class="table_tit">失效时间</td>
                     <td  width="25%">{{StockRight.invalidTime}}</td>
                     <td  width="25%"  class="table_tit">失效原因</td>
                     <td  width="25%">{{StockRight.invalidReason}}</td>
                  </tr>
                </tbody>
              </table>
             </el-col>
          </el-row>
        </div>
        <!--动产抵押登记信息-->
        <div id="ChattelMortgage1" class="bigModel">
          <div class="tit">
            <h3>动产抵押登记信息</h3>
            <span class="more"  v-show="ChattelMortgageshow" @click="more(companyName,1,mationLable[2].num,14)">更多</span>
          </div>
          <el-row>
            <el-col :span="24" class="tablge_g">
              <table class="table table-bordered" style="border: 0px">
                <tbody>
                  <tr>
                    <td width="25%"  class="table_tit">动产抵押登记编号</td>
                    <td width="25%">{{ChattelMortgage.mortRegNo}}</td>
                    <td width="25%"  class="table_tit">状态</td>
                    <td width="25%">{{ChattelMortgage.mortStatus}}</td>
                  </tr>
                  <tr>
                    <td width="25%"  class="table_tit">登记日期</td>
                    <td width="25%">{{ChattelMortgage.regDate|timeformatter("yyyy-mm-dd")}}</td>
                    <td width="25%"  class="table_tit">登记机关</td>
                    <td width="25%">{{ChattelMortgage.regOrg}}</td>
                  </tr>
                  <tr>
                    <td width="25%"  class="table_tit">被担保的主债权种类</td>
                    <td width="25%">{{ChattelMortgage.priclasecKind}}</td>
                    <td width="25%"  class="table_tit">被担保的主债权数额(万元)</td>
                    <td width="25%">{{ChattelMortgage.priclasecAm}}</td>
                   </tr>
                   <tr>
                    <td width="25%"  class="table_tit">担保范围</td>
                    <td width="25%">{{ChattelMortgage.warcov}}</td>
                    <td width="25%"  class="table_tit">履行期限</td>
                    <td>自{{ChattelMortgage.pefperFrom}}至{{ChattelMortgage.pefperTo}}</td>
                   </tr>
                   <tr>
                    <td width="25%"  class="table_tit">注销日期</td>
                    <td width="25%">{{ChattelMortgage.canDate}}</td>
                    <td width="25%"  class="table_tit">注销原因</td>
                    <td width="25%">{{ChattelMortgage.canReason}}</td>
                   </tr>
                   <tr>
                    <td width="25%"  class="table_tit">抵押权人名称</td>
                    <td width="25%">{{ChattelMortgage.mortOrg}}</td>
                    <td width="25%"  class="table_tit">抵押权人证照类型</td>
                    <td width="25%">{{ChattelMortgage.blicType}}</td>
                   </tr>
                   <tr>
                    <td width="25%"  class="table_tit">抵押权人证照号码</td>
                    <td width="25%">{{ChattelMortgage.blicNo}}</td>
                    <td width="25%"  class="table_tit">抵押权人住所地</td>
                    <td width="25%">{{ChattelMortgage.mortLoc}}</td>
                   </tr>
                   <tr>
                   </tr>
                   <tr v-show="downmore">
                     <td colspan="4">
                       <table class="table table-bordered tableMort"  style="border: 0px" v-for="(item4,index) in ChattelMortgageList">
                         <tbody>
                           <tr>
                            <td width="25%"  class="table_tit">抵押物名称{{index+1}}</td>
                            <td width="25%">{{item4.guaName}}</td>
                            <td width="25%"  class="table_tit">抵押物所有权或使用权{{index+1}}</td>
                            <td width="25%">{{item4.guaOwn}}</td>
                           </tr>
                           <tr>
                            <td width="25%"  class="table_tit">抵押物数量、质量、状况、所在地等情况{{index+1}}</td>
                            <td colspan="3" width="25%">{{item4.guaDes}}</td>
                           </tr>
                        </tbody>
                      </table>
                     </td>
                   </tr>
                   <tr>
                     <td colspan="4">
                       <span class="Downmore fa fa-angle-double-down" @click="Downmore1()"></span>
                     </td>
                   </tr>
                 </tbody>
               </table>

            </el-col>
          </el-row>
        </div>
        <!--行政处罚信息-->
        <div id="punishfomation1" class="bigModel">
          <div class="tit">
            <h3>行政处罚信息</h3>
            <span class="more" v-show="Administrativeshow" @click="more(companyName,1,mationLable[5].num,6)">更多</span>
          </div>
          <div class="tablge_g">
            <el-table  :data="Administrative"  :formatter="isNUll"  border  style="width: 100%">
              <el-table-column :prop="item.key" :label="item.label" :resizable="false" :width="item.twidth" :formatter="isNUll"  :type="item.type" :index ="indexMethod" :key="index" v-for="(item,index) in table_headpunish"></el-table-column>
            </el-table>
          </div>
        </div>
        <!--严重违法失信信息-->
        <div id="SeriousIllegality1" class="bigModel">
          <div class="tit">
            <h3>严重违法失信信息</h3>
            <span class="more" v-show="SeriousIllegalityshow"  @click="more(companyName,1,mationLable[3].num,7)">更多</span>

          </div>
          <el-row class="abnormal">
            <el-col :span="24">
              <div class="tablge_g">
                <el-table   :data="SeriousIllegality" border :formatter="isNUll"  style="width: 100%;margin-top: 10px;text-align: center">
                  <el-table-column>
                    <el-table-column  prop="illegalType"  label="类别">  </el-table-column>
                  </el-table-column>
                  <el-table-column align="center" :resizable="false" :label="item.label" :key="index" v-for="(item,index) in table_headSerious"  :formatter="timeChange">
                    <el-table-column v-if="(item.label == '列入')" align="center" :resizable="false" :width="item1.twidth" :prop="item1.key" :label="item1.label" :key="index" v-for="(item1,index) in table_headSeriousru" :formatter="isNULL"></el-table-column>
                    <el-table-column v-if="(item.label == '移出')" align="center" :resizable="false" :width="item2.twidth" :prop="item2.key" :label="item2.label" :key="index" v-for="(item2,index) in table_headSeriouschu" :formatter="isNULL"></el-table-column>
                  </el-table-column>
                </el-table>
              </div>
            </el-col>
          </el-row>
        </div>
        <!--经营异常信息-->
        <div id="abnormalfomation1" class="bigModel">
          <div class="tit">
            <h3>经营异常信息</h3>
            <span class="more" v-show="AbnormalOperashow" @click="more(companyName,1,mationLable[4].num,8)">更多</span>

          </div>
          <el-row class="abnormal">
            <el-col>
              <div class="tablge_g">
                <el-table  :data="AbnormalOpera" :formatter="isNUll" style="width: 100%;margin-top: 10px;text-align: center">
                  <el-table-column align="center" :resizable="false" :label="item.label" :key="index" v-for="(item,index) in table_headabnormal"  :formatter="timeChange">
                    <el-table-column v-if="(item.label == '列入')" align="center" :resizable="false" :width="item1.twidth" :prop="item1.key" :label="item1.label":key="index" v-for="(item1,index) in table_headabnormalru" :formatter="isNULL"></el-table-column>
                    <el-table-column v-if="(item.label == '移出')" align="center" :resizable="false" :width="item2.twidth" :prop="item2.key" :label="item2.label":key="index" v-for="(item2,index) in table_headabnormalchu" :formatter="isNULL"></el-table-column>
                  </el-table-column>
                </el-table>
              </div>
            </el-col>
          </el-row>
        </div>
        <!--被执行人信息-->
        <div id="implementfomation1" class="bigModel">
          <div class="tit">
            <h3>被执行人信息</h3>
            <span class="more" v-show="Beexecutedcstshow"  @click="more(companyName,1,mationLable[6].num,9)">更多</span>
          </div>
            <div class="tablge_g">
              <el-table :data="Beexecutedc" border style="width: 100%" >
                  <el-table-column :prop="item.key" :label="item.label" :resizable="false" :width="item.twidth" :formatter="isNUll" :key="index" v-for="(item,index) in table_headimplement"></el-table-column>
              </el-table>
            </div>
        </div>
        <!--失信被执行信息-->
        <div id="Dishonesty1" class="bigModel">
          <div class="tit">
            <h3>失信被执行信息</h3>
            <span class="more" v-show="Dishonestyshow"  @click="more(companyName,1,mationLable[7].num,10)">更多</span>

          </div>
          <div class="tablge_g">
            <el-table :data="Dishonesty"  :formatter="isNUll"  border  style="width: 100%">
                  <el-table-column  :prop="item.key"  :label="item.label" :resizable="false"  :width="item.twidth"  :formatter="isNUll" :key="index"  v-for="(item,index) in table_headDishonesty"  ></el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </el-row>

</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
