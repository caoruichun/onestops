<!-- 业务结构 -->
<template>
  <div class="businessStruct">
    <!--期间选择-->
    <el-row  class="bs">
        <el-col :span="24">
            期间选择：
            <el-select v-model="date1" placeholder="请选择">
              <el-option v-for="item in dateList" :key="item.value" :label="item.label" :value="item.label"></el-option>
            </el-select>
            至
            <el-select v-model="date2" placeholder="请选择">
              <el-option v-for="item in dateList" :key="item.value" :label="item.label" :value="item.label"></el-option>
            </el-select>
            <el-button type="primary" class="bs_search" @click="bs_search">搜索</el-button>
            <el-button type="success" class="bs_sall" @click="bs_searchAll">查看全部</el-button>
        </el-col>
    </el-row>
    <div class="bs_content">
      <div class="bs_cleft">
         <ul>
           <li class="table_header">业务板块</li>
           <li class="main_t1">主营业务收入</li>
           <li>基础设施建设</li>
           <li>铜</li>
           <li>合计</li>
           <!-- 主营业务成本 -->
           <li class="main_t1">主营业务成本</li>
           <li>基础设施建设</li>
           <li>铜</li>
           <li>合计</li>
           <!-- 主营业务毛利润 -->
           <li class="main_t1">主营业务毛利润</li>
           <li>基础设施建设</li>
           <li>铜</li>
           <li>合计</li>
           <!--  主营业务毛利率-->
           <li class="main_t1">主营业务毛利率</li>
           <li class="table_header">业务板块</li>
           <li>基础设施建设</li>
           <li>铜</li>
           <li>平均毛利率</li>
         </ul>
      </div>
     <div class="bs_cright">
        <ul v-for="item in businessData">
          <li class="bs_li1">
           {{item.time}}
          </li>
          <li class="bs_li2">
            <span class="bs_span1">金额(亿元)</span>
            <span class="bs_span2">占比(%)</span>
          </li>
          <!-- 主营业务收入 -->
          <li class="bs_li3"></li>
          <li class="bs_li5">
            <span class="bs_span3">{{item.main_jichu}}</span>
            <span class="bs_span4">{{item.main_jichu_zb}}</span>
          </li>
          <li class="bs_li5">
            <span class="bs_span3">{{item.main_tong}}</span>
            <span class="bs_span4">{{item.main_tong_zb}}</span>
          </li>
          <li class="bs_li5">
            <span class="bs_span3">{{item.main_jichu + item.main_tong}}</span>
            <span class="bs_span4">{{item.main_jichu_zb + item.main_tong_zb}}</span>
          </li>
          <!-- 主营业务成本 -->
          <li class="bs_li3"> </li>
          <li class="bs_li5">
            <span class="bs_span3">{{item.cost_jichu}}</span>
            <span class="bs_span4">{{item.cost_jichu_zb}}</span>
          </li>
          <li class="bs_li5">
            <span class="bs_span3">{{item.cost_tong}}</span>
            <span class="bs_span4">{{item.cost_tong_zb}}</span>
          </li>
          <li class="bs_li5">
            <span class="bs_span3">{{item.cost_jichu+item.cost_tong}}</span>
            <span class="bs_span4">{{item.cost_jichu_zb+item.cost_tong_zb }}</span>
          </li>
          <!-- 主营业务毛利润 -->
          <li class="bs_li3"></li>
          <li class="bs_li5">
            <span class="bs_span3">{{item.profit_jichu}}</span>
            <span class="bs_span4">{{item.profit_jichu_zb}}</span>
          </li>
          <li class="bs_li5">
            <span class="bs_span3">{{item.profit_tong}}</span>
            <span class="bs_span4">{{item.profit_tong_zb}}</span>
          </li>
          <li class="bs_li5">
            <span class="bs_span3">{{item.profit_jichu+item.profit_tong}}</span>
            <span class="bs_span4">{{item.profit_jichu_zb+item.profit_tong_zb}}}</span>
          </li>
          <!-- 主营业务毛利率 -->
          <li class="bs_li3"></li>
          <li class="bs_li4">  {{item.time}}</li>
          <li class="bs_li4">数额(%)</li>
          <li>{{item.m_profit_jichu}}</li>
          <li>{{item.m_profit_tong}}</li>
          <li>{{(item.m_profit_jichu+item.m_profit_tong)/2}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
