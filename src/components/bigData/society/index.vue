<template>
  <div class="society" gutter="10">
    <!-- 返回上级 -->
    <el-row>
      <el-col :span="24" class="reLevel">
        <el-button type="text" @click="reback"><<返回大数据看板</el-button>
      </el-col>
    </el-row>
    <div :span="12">
      <h3 class="tabtit">{{frName}}</h3>
    </div>
    <!-- 弹窗开始 -->
      <el-dialog width="90%" :visible.sync="dialogVisible">
        <!-- <el-row class="moreShow" v-show="moreShow" > -->
          <div class="moreShow_con"  >
            <!-- 企业法定代表人对外投资信息 -->
            <div class="more1" v-show="index==1">
              <div class="bigModel">
                <div class="tit tit1">
                  <h3>法定代表人对外投资信息</h3>
                  <div class="titRight">
                    <span class="tit_con">
                      <i class="fa fa-search" aria-hidden="true" @click="searchdata(1)"></i>
                      <input type="text" class="search" placeholder="搜索查找" v-model="searchData" @keydown="search($event,index)" @click="ClearNull()" />
                    </span>
                    <button id="clearSearch" @click="clearSearch()">清除搜索</button>
                    <div class="close_box" @click="close()">
                      <span class="close" ></span>
                    </div>
                  </div>

                </div>
                <div class="tablge_g table_g">
                  <div >
                    <table class="table table-bordered socitable" v-for="item in OutboundInvest2">
                      <tbody>
                      <tr>
                        <td class="table_tit"  width="25%">企业名称</td>
                        <td  width="25%">{{item.entName}}</td>
                        <td class="table_tit"  width="25%">出资比例</td>
                        <td  width="25%">{{item.fundedRatio}}</td>
                      </tr>
                      <tr>
                        <td class="table_tit"  width="25%">认缴出资额(万元)</td>
                        <td  width="25%">{{item.subConam}}</td>
                        <td class="table_tit"  width="25%">认缴出资币种</td>
                        <td  width="25%">{{item.subCurrency}}</td>
                      </tr>
                      <tr>
                        <td class="table_tit"  width="25%">统一社会信用代码</td>
                        <td  width="25%">{{item.creditCode}}</td>
                        <td class="table_tit"  width="25%">注册号</td>
                        <td  width="25%">{{item.regNo}}</td>
                      </tr>
                      <tr>
                        <td class="table_tit"  width="25%">类型</td>
                        <td  width="25%">{{item.entType}}</td>
                        <td class="table_tit"  width="25%">登记状态</td>
                        <td  width="25%">{{item.entStatus}}</td>
                      </tr>
                      <tr>
                        <td class="table_tit"  width="25%">注册资本(万元)</td>
                        <td  width="25%">{{item.regCap}}</td>
                        <td class="table_tit"  width="25%">注册币种</td>
                        <td  width="25%">{{item.regCapCur}}</td>
                      </tr>
                      <tr>
                        <td class="table_tit"  width="25%">成立日期</td>
                        <td  width="25%">{{item.esDate}}</td>
                        <td class="table_tit"  width="25%">登记机关</td>
                        <td  width="25%">{{item.regOrg}}</td>
                      </tr>
                      <tr>
                        <td class="table_tit"  width="25%">注销日期</td>
                        <td  width="25%">{{item.canDate}}</td>
                        <td class="table_tit"  width="25%">吊销日期</td>
                        <td  width="25%">{{item.revDate}}</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <!--法定代表人在其他企业任职信息  -->
            <div class="more2" v-show="index==2">
              <div :span="24" class="bigModel">
                <div class="tit tit1">
                  <h3>法定代表人在其他企业任职信息</h3>
                  <div class="titRight">
                    <span class="tit_con">
                      <i class="fa fa-search" aria-hidden="true" @click="searchdata(2)"></i>
                      <input type="text" class="search" placeholder="搜索查找" v-model="searchData" @keydown="search($event,index)" @click="ClearNull()"/>
                    </span>
                    <button id="clearSearch" @click="clearSearch()">清除搜索</button>
                    <div class="close_box" @click="close()">
                      <span class="close"  ></span>
                    </div>
                  </div>
                </div>
                <!--表格信息-->
                <div class="tablge_g table_g">
                  <div :span="24">
                    <table class="table table-bordered socitable" v-for="item1 in OtherCompanies2">
                      <tbody>
                        <tr>
                          <td class="table_tit"  width="25%" >职务</td>
                          <td width="25%" >{{item1.position}}</td>
                          <td  class="table_tit" width="30%" >是否法定代表人</td>
                          <td width="20%">{{item1.lerepsign}}</td>
                        </tr>
                      <tr>
                        <td class="table_tit"  width="25%">企业名称</td>
                        <td  width="25%">{{item1.entName}}</td>
                        <td class="table_tit"  width="30%">法定代表人/负责人/执行事务合伙人/投资人/经营者</td>
                        <td  width="20%">{{item1.frName}}</td>
                      </tr>
                      <tr>
                        <td class="table_tit"  width="25%">统一社会信用代码</td>
                        <td  width="25%">{{item1.creditCode}}</td>
                        <td class="table_tit"  width="30%">注册号</td>
                        <td  width="20%">{{item1.regNo}}</td>
                      </tr>
                      <tr>
                        <td class="table_tit"  width="25%">类型</td>
                        <td  width="25%">{{item1.entType}}</td>
                        <td class="table_tit"  width="30%">登记状态</td>
                        <td  width="20%">{{item1.entStatus}}</td>
                      </tr>
                      <tr>
                        <td class="table_tit"  width="25%">注销日期</td>
                        <td width="25%">{{item1.canDate}}</td>
                        <td class="table_tit"  width="30%">吊销日期</td>
                        <td  width="20%">{{item1.revDate}}</td>
                      </tr>
                      <tr>
                        <td class="table_tit"  width="25%">成立日期</td>
                        <td width="25%">{{item1.esDate}}</td>
                        <td class="table_tit"  width="30%">登记机关</td>
                        <td  width="20%">{{item1.regOrg}}</td>
                      </tr>
                      <tr>
                        <td class="table_tit"  width="25%">注册资本(万元)</td>
                        <td  width="25%">{{item1.regCap}}</td>
                        <td class="table_tit"  width="30%">注册币种</td>
                        <td  width="20%">{{item1.regCapCur}}</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-row>
      </el-dialog>

      <!-- 弹窗结束 -->
    <!-- 企业法定代表人对外投资信息 -->
    <div id="OutboundInvest" class="bigModel">
      <div class="tit">
        <h3>法定代表人对外投资信息</h3>
        <span v-show="OutboundInvestshow" class="more" @click="more(enterpriseName,1,OutboundInvesttol,1)">更多</span>
          <!-- <a class="more" href="javascript:(0);" @click="more()">更多</a> -->
      </div>
      <div class="tablge_g">
        <div :span="24">
          <table class="table table-bordered socitable">
            <tbody>
            <tr>
              <td class="table_tit"  width="25%">企业名称</td>
              <td  width="25%">{{OutboundInvest.entName}}</td>
              <td class="table_tit"  width="25%">出资比例</td>
              <td  width="25%">{{OutboundInvest.fundedRatio}}</td>
            </tr>
            <tr>
              <td class="table_tit"  width="25%">认缴出资额(万元)</td>
              <td  width="25%">{{OutboundInvest.subConam | scientificNotation()}}</td>
              <td class="table_tit"  width="25%">认缴出资币种</td>
              <td  width="25%">{{OutboundInvest.subCurrency}}</td>
            </tr>
            <tr>
              <td class="table_tit"  width="25%">统一社会信用代码</td>
              <td  width="25%">{{OutboundInvest.creditCode}}</td>
              <td class="table_tit"  width="25%">注册号</td>
              <td  width="25%">{{OutboundInvest.regNo}}</td>
            </tr>
            <tr>
              <td class="table_tit"  width="25%">类型</td>
              <td  width="25%">{{OutboundInvest.entType}}</td>
              <td class="table_tit"  width="25%">登记状态</td>
              <td  width="25%">{{OutboundInvest.entStatus}}</td>
            </tr>
            <tr>
              <td class="table_tit"  width="25%">注册资本(万元)</td>
              <td  width="25%">{{OutboundInvest.regCap}}</td>
              <td class="table_tit"  width="25%">注册币种</td>
              <td  width="25%">{{OutboundInvest.regCapCur}}</td>
            </tr>
            <tr>
              <td class="table_tit"  width="25%">成立日期</td>
              <td  width="25%">{{OutboundInvest.esDate| timeformatter('yyyy-mm-dd')}}</td>
              <td class="table_tit"  width="25%">登记机关</td>
              <td  width="25%">{{OutboundInvest.regOrg}}</td>
            </tr>
            <tr>
              <td class="table_tit"  width="25%">注销日期</td>
              <td  width="25%">{{OutboundInvest.canDate| timeformatter('yyyy-mm-dd')}}</td>
              <td class="table_tit"  width="25%">吊销日期</td>
              <td  width="25%">{{OutboundInvest.revDate| timeformatter('yyyy-mm-dd')}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!--法定代表人在其他企业任职信息  -->
    <div id="OtherCompanies" class="bigModel">
      <div class="tit">
        <h3>法定代表人在其他企业任职信息</h3>
        <span v-show="OtherCompaniesshow" class="more" @click="more(enterpriseName,1,OtherCompaniestol,2)">更多</span>
      </div>
      <!--表格信息-->
      <div class="tablge_g">
        <div :span="24">
          <table class="table table-bordered socitable">
            <tbody>
              <tr>
                <td class="table_tit"  width="25%" >职务</td>
                <td width="25%" >{{OtherCompanies.position}}</td>
                <td  class="table_tit" width="30%" >是否法定代表人</td>
                <td width="20%">{{OtherCompanies.lerepsign}}</td>
              </tr>
            <tr>
              <td class="table_tit"  width="25%">企业名称</td>
              <td  width="25%">{{OtherCompanies.entName}}</td>
              <td class="table_tit"  width="30%">法定代表人/负责人/执行事务合伙人/投资人/经营者</td>
              <td  width="20%">{{OtherCompanies.frName}}</td>
            </tr>
            <tr>
              <td class="table_tit"  width="25%">统一社会信用代码</td>
              <td  width="25%">{{OtherCompanies.creditCode}}</td>
              <td class="table_tit"  width="30%">注册号</td>
              <td  width="20%">{{OtherCompanies.regNo}}</td>
            </tr>
            <tr>
              <td class="table_tit"  width="25%">类型</td>
              <td  width="25%">{{OtherCompanies.entType}}</td>
              <td class="table_tit"  width="30%">登记状态</td>
              <td  width="20%">{{OtherCompanies.entStatus}}</td>
            </tr>
            <tr>
              <td class="table_tit"  width="25%">注销日期</td>
              <td width="25%">{{OtherCompanies.canDate}}</td>
              <td class="table_tit"  width="30%">吊销日期</td>
              <td  width="20%">{{OtherCompanies.revDate}}</td>
            </tr>
            <tr>
              <td class="table_tit"  width="25%">成立日期</td>
              <td width="25%">{{OtherCompanies.esDate}}</td>
              <td class="table_tit"  width="30%">登记机关</td>
              <td  width="20%">{{OtherCompanies.regOrg}}</td>
            </tr>
            <tr>
              <td class="table_tit"  width="25%">注册资本(万元)</td>
              <td  width="25%">{{OtherCompanies.regCap}}</td>
              <td class="table_tit"  width="30%">注册币种</td>
              <td  width="20%">{{OtherCompanies.regCapCur}}</td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>

  </div>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
