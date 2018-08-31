<template>
	<el-row class="QBJurisdiction">
		<el-col :span="24">
			<el-card class="box-card">
				<!-- query view -->
				<div class="timeSelector" :style="{display:block_none}">
					<div class="query_box">
						<label for="textQuery">机构名称:</label>
						<el-input id="textQuery" v-model.trim="text" style="width:200px;" placeholder="请输入内容"></el-input>
						<label for="startDate">合同到期区间</label>
						<el-date-picker id="startDate" v-model="startDate" format="yyyy-MM-dd" value-format="yyyy-MM-dd"
						type="date"  placeholder="选择日期">
						</el-date-picker>
						<span>——</span>
						<el-date-picker v-model="endDate" format="yyyy-MM-dd" value-format="yyyy-MM-dd"
						type="date" placeholder="选择日期">
						</el-date-picker>
						<el-button icon="el-icon-search" type="primary" @click="timeSelectBtn">搜索</el-button>
					</div>
						<div class="btn_box">
							<el-button  type="primary" :class="{actvebg:color1}" :disabled="addBtn" @click="add">新增机构</el-button>
							<el-button  type="primary" :class="{actvebg:color2}" :disabled="exportEXCELBtn" @click="exportEXCEL">数据导出</el-button>
							<el-button  type="primary" :class="{actvebg:color3}" @click="save">保存</el-button>
						</div>
				</div>
							<!-- table view  -->
							<!-- :default-sort="{prop:'endTime',order:'ascending'}" sortable -->
					<div class="QBtable">
						<el-table	 ref="multipleTable"
						 :data="newAdd"
						 tooltip-effect="dark"
						 style="width:100%"
						 @selection-change="handleSelecionChange">
						<el-table-column align="center" type="selection" width="60">
						</el-table-column>
						<el-table-column align="center" label="机构名称" show-oveflow-tooltip>
							<template slot-scope="scope">
								<span v-show="scope.row.id">{{scope.row.orgName}}</span>
									<el-autocomplete
									class="inline-input"
									v-show="!scope.row.id"
									v-model="orgNameWrite"
									placeholder="请输入内容"
									:fetch-suggestions="querySearchAsync"
									@select="handleSelect"
									:trigger-on-focus="false">
									</el-autocomplete>
							</template>
						</el-table-column>
						<el-table-column align="center" label="部门名称" >
							<template slot-scope="scope">
								<span v-show="scope.row.id">{{scope.row.depName}}</span>
								<el-autocomplete
								class="inline-input"
								v-show="!scope.row.id"
								v-model="depNameWrite"
								placeholder="请输入内容"
								:fetch-suggestions="querySearchAsyncDepName"
								@select="handleSelectDepName">
									</el-autocomplete>
							</template>
						</el-table-column>
						<el-table-column align="center" label="付费情况" width="100">
							<template slot-scope="scope">
							  <el-select v-model="scope.row.payStatus" :disabled='scope.row.newAddCloseFlag'  @change='payStatus'>
							  	<el-option v-for="item in pays"
									:key='item.value'
									:label='item.label'
									:value='item.value'>
							  	</el-option>
							  </el-select>
							</template>
						</el-table-column>
						<el-table-column align="center" label="合同到期日" width="200">
							<template slot-scope="scope">
								<el-date-picker
								v-show="!scope.row.id"
								value-format="yyyy-MM-dd"
								type="date"
								placeholder="选择日期"
								clear-icon=""
								format="yyyy-MM-dd"
								v-model="value2">
							</el-date-picker>
								<el-date-picker
								v-show="scope.row.id"
								clearable=false
								value-format="timestamp"
								type="date"
								clear-icon=""
								:disabled="disabled[scope.$index]==0||scope.row.newAddCloseFlag"
								format="yyyy-MM-dd"
								v-model="scope.row.endTime"
								@change="endTime(scope.$index,scope.row)">
							</el-date-picker>
							</template>
						</el-table-column>
						<el-table-column align="center" label="合同剩余期限" prop='surplusDay' width="110">
							<template slot-scope="scope">
								<span v-show="scope.row.surplusDay||scope.row.surplusDay===0">{{scope.row.surplusDay}}</span>
							</template>
						</el-table-column>
						<el-table-column align="center" label="数据权限设置"  width="110">
							<template slot-scope="scope">
							  <el-select  @change="dataStatus(scope.$index,scope.row)" :disabled = "dataTokenFlag==scope.$index||scope.row.newAddCloseFlag" v-model="scope.row.dataStatus" align="center">
							  	<el-option v-for="item in Authority"
									:key='item.value'
									:label='item.label'
									:value='item.value'>
							  	</el-option>
							  </el-select>
							</template>
						</el-table-column>
						<el-table-column align="center" label="设置日期" width="90">
							<template slot-scope="scope">
								<span v-show="scope.row.setDate">{{scope.row.setDate | timeFilter('yyyy-mm-dd')}}</span>
							</template>
						</el-table-column>
						<el-table-column align="center" label="操作人" prop="setUser" width="100">
						</el-table-column>
					</el-table>
					</div>
			</el-card>
		</el-col>
	</el-row>
</template>
<style src="./index.less" lang="less" scoped></style>
<script src="./index.js"></script>
