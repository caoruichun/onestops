<!--铜-->
<template>
	<!--投诚-铜  -->
	    <div class="Tong">
	      <!-- 基本信息-->
	      <div class="ct_con_jiben">
	        <div class="cb_titi1">
	          基本信息
	        </div>
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
	                <el-button type="success" class="bs_sall" @click="bs_seeall">查看全部</el-button>
	            </el-col>
	        </el-row>
	        <div class="ct_con_content">
	          <div class="ct_con_left">
	            <ul>
	              <li class="ct_con_li1">指标名称</li>
	              <li>
	                  供水能力(单位：万吨/日)
	              </li>
	              <li>
	                漏损率(单位：%)
	              </li>
	            </ul>
	          </div>
	          <div class="ct_con_right">
	            <ul v-for="item1 in Lists1">
	              <li class="ct_con_li1">{{item1.time}}</li>
	              <li>{{item1.gonshui}}</li>
	              <li>{{item1.lv}}</li>
	            </ul>
	          </div>
	        </div>
	      </div>
	      <div class="ct_con_hangye">
	        <div class="cb_titi1">
	          行业对比
	        </div>
	        <el-row  class="bs">
	            <el-col :span="24">
	                期间选择：
	                <el-select v-model="date3" placeholder="请选择">
	                  <el-option v-for="item in dateList" :key="item.value" :label="item.label" :value="item.label"></el-option>
	                </el-select>
	                <el-button type="primary" class="bs_search" @click="hy_search">搜索</el-button>
	                <el-button type="success" class="bs_sall" @click="hy_seall">查看全部</el-button>
	            </el-col>
	        </el-row>
	        <div class="ct_con_content2">
							<el-table :data="dataHangye" border showsummary :span-method="arrayHangye">
								<el-table-column :prop="item.key" :label="item.label" :width="item.dwidth" :formatter="isNUll" :key="index" v-for="(item,index) in table_headhangye" ></el-table-column>
	            </el-table>
	        </div>
	      </div>

	    </div>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
