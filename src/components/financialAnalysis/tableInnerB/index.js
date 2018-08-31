export default {
  name: 'tableListB',
  data () {
    return {
      // 表头信息 
      tableHead: '',
      // 企业名称
      companyName: '',
      // 固定行
      tableHead_fixed: this.globalData.basePageInfo.financialAnalysisData.tableHead_fixed,
      tableHead_fixed_info1: '', // 平均值
      tableHead_fixed_info2: '', // 中位数
      tableHead_fixed_info3: '', // 本企业
      tableHead_fixed_info4: '',// 最大值
      tableHead_fixed_info5: '', // 最小值
      // 表格信息
      tableData: '',
      // 分页信息
      pageInfo: {
        pageSize: 10, // 条数 
        pageNum: 1, // 页码
        pageTotal: '', // 总页数    
        compCode: this.globalInfo.compCode || '100759', // 企业ID
        dateSel: '', // 选择的时间
        sortBy: '', // 选择的排序列
        sort: 0, // 升降序（0：升；1：降）       
      },
      // 表格API
      tableURL: '',
      tableLink: '', // 固定列
      // 表格高度
      tableHeight: 'none',
    }
  },
  props:['tableNumB'],
  created() {
    let pageInformation = this;
    this.pageInfo.dateSel = this.tableNumB[0];
    this.beforeGetTable();
    this.axios({
      method: 'post',
      url: '/getEnterpriseName',
      data: {
        compCode: Number(pageInformation.pageInfo.compCode)
      },
    })
    .then((res) => {
      if(res.data.success) {
        pageInformation.companyName = res.data.data;
      }
      else {
        pageInformation.companyName = pageInformation.tableHead_fixed[2];
      }
    })
    .catch(err => {
      pageInformation.companyName = pageInformation.tableHead_fixed[2];
      // console.log(err);
    });
  },
  watch: {
    'tableNumB': function() {
      this.pageInfo.dateSel = this.tableNumB[0]; 
      this.beforeGetTable();
    }
  },
  methods: {
    // 分页
    changePage(num) {
      this.pageInfo.pageNum = num; // 页码
      this.getTableList(this.pageInfo);
    },
    // 表头首列
    renderHeader(h, info) {
      if(info.$index>0) {
        return h('span',[
          h('span', this.tableHead[info.$index].label),
          h('i', {
            'class': 'fa fa-caret-up',
            'aria-hidden': true
          }),
          h('i', {
            'class': 'fa fa-caret-down',
            'aria-hidden': true
          })
        ])        
      }
      else {
        return h('span', this.tableHead[info.$index].label);       
      }
    },
    // 表格排序
    tableOrder(col,e) {
      let index;
      for(var i=0; i<this.tableHead.length; i++) {
        if(col.label==this.tableHead[i].label) {
          index = i;
          this.pageInfo.sortBy = this.tableHead[i].key.toUpperCase();
          break;
        }
      };
      if(this.pageInfo.sort==0) {
        this.pageInfo.sort = 1;
      }
      else if (this.pageInfo.sort==1) {
        this.pageInfo.sort = 0;
      };
      if(index>0) {
        this.getTableList(this.pageInfo);
      };
    },
    // 表头
    tablefilterHeader(info) {
      if(info.rowIndex==1) {
        return 'avgCell'; // 平均值
      }
      else if(info.rowIndex==2) {
        return 'medCell'; // 中位数
      }
      else if(info.rowIndex==3) {
        if(info.columnIndex>0 && info.column.label == this.tableHead_fixed_info1[info.columnIndex-1]) {
          return 'avgCell'; // 平均值
        }
        else if(info.columnIndex>0 && info.column.label == this.tableHead_fixed_info2[info.columnIndex-1]) {
          return 'medCell'; // 中位数
        }
        else if(info.columnIndex>0 && info.column.label == this.tableHead_fixed_info4[info.columnIndex-1]) {
          return 'maxCell'; // 最大值
        }
        else if(info.columnIndex>0 && info.column.label == this.tableHead_fixed_info5[info.columnIndex-1]) {
          return 'minCell'; // 最小值
        }
        else {
          return;
        }
      }
      else {
        return;
      }
    },
    // 表格平均值、中位数、最大值、最小值
    tablefilterBody(info) {
      let rowArray = this.fixedInfoDeal(info.row);
      if(info.columnIndex>0 && rowArray[info.columnIndex-1] == this.tableHead_fixed_info1[info.columnIndex-1]) {
        return 'avgCell'; // 平均值
      }
      else if(info.columnIndex>0 && rowArray[info.columnIndex-1] == this.tableHead_fixed_info2[info.columnIndex-1]) {
        return 'medCell'; // 中位数
      }
      else if(info.columnIndex>0 && rowArray[info.columnIndex-1] == this.tableHead_fixed_info4[info.columnIndex-1]) {
        return 'maxCell'; // 最大值
      }
      else if(info.columnIndex>0 && rowArray[info.columnIndex-1] == this.tableHead_fixed_info5[info.columnIndex-1]) {
        return 'minCell'; // 最小值
      }
      else {
        return;
      }
    },
    // 表格保留两位小数
    tableCheck(row,col,val,cell) {
      if((typeof(val)=='number' || col.property!='enterpriseName') && val!='—') {
        val = this.globalFC.scientificNotation(Number(val).toFixed(2));
      }; 
      return val;
    },
    // 获取表格信息之前的设置
    beforeGetTable() {
      switch(Number(this.tableNumB[1])) {
        case 6: // 财务指标首页
          this.tableHead = this.globalData.basePageInfo.financialAnalysisData.tableHead_aa;
          this.tableURL = '/tFinancialIndexFrontPage';
          this.tableLink = '/tFinancialFixedCol';
          break;
        case 7: // 资产质量
          this.tableHead = this.globalData.basePageInfo.financialAnalysisData.tableHead_bb;
          this.tableURL = '/tAssetQuality';
          this.tableLink = '/assetQualityFixedCol';
          break;
        case 8: // 资本结构
          this.tableHead = this.globalData.basePageInfo.financialAnalysisData.tableHead_cc;
          this.tableURL = '/tCapitalStructure';
          this.tableLink = '/capitalFixedCol';
          break;
        case 9: // 盈利能力
          this.tableHead = this.globalData.basePageInfo.financialAnalysisData.tableHead_dd;
          this.tableURL = '/tProfitability';
          this.tableLink = '/profitabilityFixedCol';
          break;
        case 10: // 现金流
          this.tableHead = this.globalData.basePageInfo.financialAnalysisData.tableHead_ee;
          this.tableURL = '/tCashflow';
          this.tableLink = '/cashflowFixedCol';
          break;
        case 11: // 偿债能力
          this.tableHead = this.globalData.basePageInfo.financialAnalysisData.tableHead_ff;
          this.tableURL = '/tSolvency';
          this.tableLink = '/solvencyFixedCol';
          break;
      };
      this.pageInfo.sortBy = this.tableHead[1].key.toUpperCase();
      this.pageInfo.pageNum = 1; // 页码
      this.pageInfo.pageTotal = ''; // 总页数
      this.getTableList(this.pageInfo);
    },
    // 获取表格数据
    getTableList(info) {
      let pageInformation = this;
      // 表格信息
      this.axios({
        method: 'post',
        url: pageInformation.tableURL,
        data: info,
      })
      .then((res) => {
        if(res.data.success) {
          if(res.data.data.list.length>0) {
            pageInformation.tableData = res.data.data.list;
            for(var i=0; i<pageInformation.tableData.length; i++) { // 去除本企业
              if(res.data.data.list[i].enterpriseId==pageInformation.pageInfo.compCode) {
                pageInformation.tableData.splice(i,1);
              }
            };
            pageInformation.pageInfo.pageTotal = res.data.data.pages; // 总页数
          }
          else {
            pageInformation.tableData = '';
            pageInformation.pageInfo.pageTotal = '';  // 总页数
          }
        }
      })
      .catch(err => {
        // console.log(err);
      });
      // 固定列
      if(pageInformation.pageInfo.pageNum == 1) {
        this.axios({
          method: 'post',
          url: pageInformation.tableLink,
          data: info,
        })
        .then((res) => {
          if(res.data.success) {
            pageInformation.tableHead_fixed_info1 = pageInformation.fixedInfoDeal(res.data.data[0]); // 平均值
            pageInformation.tableHead_fixed_info2 = pageInformation.fixedInfoDeal(res.data.data[3]); // 中位数
            pageInformation.tableHead_fixed_info3 = pageInformation.fixedInfoDeal(res.data.data[4]); // 本企业
            pageInformation.tableHead_fixed_info4 = pageInformation.fixedInfoDeal(res.data.data[1]); // 最大值
            pageInformation.tableHead_fixed_info5 = pageInformation.fixedInfoDeal(res.data.data[2]); // 最小值
            if(Number(pageInformation.tableNumB[1]!=6)) {
              $('.financialAnalysis')[0].scrollTop = $('.financialAnalysis .el-col').eq(0).height();
            }
          }
        })
        .catch(err => {
          // console.log(err);
        });
      }
    },
    // 固定列数据处理
    fixedInfoDeal(list) {
      let arr = new Array();
      if(list!=undefined&&list!=null) {
        for(var i in list) {
          for(var j in this.tableHead) {
            if(i==this.tableHead[j].key&&i!='enterpriseName') {
              if(list[i]==null) {
                list[i] = '—';
                arr.push(list[i]);
              }
              else {
                arr.push(this.tableCheck('','',Number(Number(list[i]).toFixed(2)),''));
              }
            }
          }
        };        
      }
      else {
        for(var i in this.tableHead) {
          arr.push('—');
        }
      }
      return arr;
    },
  }
}