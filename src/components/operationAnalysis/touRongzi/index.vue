<!-- 投融资 -->
<template>
  <div class="touRongzi">
     <!--投资  -->
     <div class="touzi">
        <el-row class="touzi_tit">
          <el-col :span="24">投资</el-col>
        </el-row>
        <el-row class="tz_seledate">
          <el-col :span="24">
            期间选择：
            <el-select v-model="date1" placeholder="请选择">
              <el-option v-for="item in dateList" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <el-button type="primary" class="bs_search">搜索</el-button>
          </el-col>
        </el-row>
        <div class="touziData">
          <el-table :data="touziData" show-summary border sum-text="合计">
            <el-table-column :prop="item.key" :label="item.label" :width="item.dwidth" :key="index" :formatter="isNUll" v-for="(item,index) in table_headtouziData" ></el-table-column>
          </el-table>
        </div>

     </div>
     <!--融资  -->
     <div class="rongzi">
        <el-row class="touzi_tit">
          <el-col :span="24">融资</el-col>
        </el-row>
        <el-row class="tz_seledate">
          <el-col :span="24">
            期间选择：
            <el-select v-model="date1" placeholder="请选择">
              <el-option v-for="item in dateList" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <el-button type="primary" class="bs_search">搜索</el-button>
          </el-col>
        </el-row>
        <!--融资三级导航  -->
        <el-row class="rongzi_tit">
          <el-col :span="24">
    				<el-menu :default-active="activeItem1" class="el-menu-demo" mode="horizontal" @select="navChange">
    					<el-menu-item :index="index" v-for="(data,index) in rongziTit" :key="index" @click="change(index)">{{ data.item }}</el-menu-item>
    				</el-menu>
    			</el-col>
        </el-row>
        <div class="rongzi_content">
          <!--融资成本  -->
          <el-table v-show="show===0" :data="rongziData" border>
            <el-table-column :prop="item.key" :label="item.label" :width="item.dwidth" :formatter="isNUll" :key="index" v-for="(item,index) in table_headrongziData" ></el-table-column>
          </el-table>
          <!--受限资产  -->
          <el-table v-show="show===1"  :data="rongzisx" border>
            <el-table-column :prop="item.key" :label="item.label" :width="item.dwidth" :formatter="isNUll" :key="index" v-for="(item,index) in table_headrongzisx" ></el-table-column>
          </el-table>
          <!-- 非标产品 -->
          <el-table v-show="show===2"  :data="feibiaoC" border show-summary sun-text="合计">
            <el-table-column :prop="item.key" :label="item.label" :width="item.dwidth" :formatter="isNUll" :key="index" v-for="(item,index) in table_headfeibiaoC" ></el-table-column>
          </el-table>
        </div>

     </div>
  </div>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
