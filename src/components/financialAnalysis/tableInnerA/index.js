export default {
  name: 'tableListA',
  data () {
    return {
      // 表头信息 
      tableHead: '',
      // 表格信息
      tableData: [],
      // 分页信息
      pageInfo: {
        pageSize: 8, // 条数 
        pageNum: 1, // 页码
        pageTotal: '', // 总页数    
        compCode: this.globalInfo.compCode || '100759', // 企业ID        
      },
      // 表格API
      tableURL: '',
      // 表格高度
      tableHeight: 360,
    }
  },
  props:['tableNumA'],
  created() {
      switch(Number(this.tableNumA[1])) {
        case 0: // 财务指标首页
          this.tableHead = this.globalData.basePageInfo.financialAnalysisData.tableHead_a;
          this.tableURL = '/financialIndexFrontPage';
          break;
        case 1: // 资产质量
          this.tableHead = this.globalData.basePageInfo.financialAnalysisData.tableHead_b;
          this.tableURL = '/assetQuality';
          break;
        case 2: // 资本结构
          this.tableHead = this.globalData.basePageInfo.financialAnalysisData.tableHead_c;
          this.tableURL = '/capitalStructure';
          break;
        case 3: // 盈利能力
          this.tableHead = this.globalData.basePageInfo.financialAnalysisData.tableHead_d;
          this.tableURL = '/profitability';
          break;
        case 4: // 现金流
          this.tableHead = this.globalData.basePageInfo.financialAnalysisData.tableHead_e;
          this.tableURL = '/cashflow';
          break;
        case 5: // 偿债能力
          this.tableHead = this.globalData.basePageInfo.financialAnalysisData.tableHead_f;
          this.tableURL = '/solvency';
          break;
      };
      this.getTableList(this.pageInfo);
  },
  mounted() {
    // 表格滚动监听
    let tableInfo = this;
    const tableWrap = $('.tableListA .el-table__body-wrapper')[0];
    tableWrap.addEventListener('scroll',function() {
      const scrollDistance = tableWrap.scrollHeight - tableWrap.scrollTop - tableWrap.clientHeight;
        if(scrollDistance==0) {
          tableInfo.pageInfo.pageNum+=1; // 页码
          tableInfo.getTableList(tableInfo.pageInfo);
        }
    });
  },
  methods: {
    // 分页
    changePage(num) {
      this.pageInfo.pageNum = num; // 页码
      this.getTableList(this.pageInfo);
    },
    // 表格数据
    dataFilter(row,col,cellval,index) {
      if((cellval==''||cellval==null||cellval==undefined||cellval=='undefined')&&cellval!=0) {
        cellval = '—';
      }
      else if(col.label!='时间') {
        cellval = this.globalFC.scientificNotation(Number(cellval).toFixed(2));
      };   
      return cellval;
    },
    // 获取表格数据
    getTableList(info) {
      let pageInformation = this;
      this.axios({
        method: 'post',
        url: pageInformation.tableURL,
        data: info,
      })
      .then((res) => {
        if(res.data.success) {
          if((res.data.data.pageNum+1)>pageInformation.pageInfo.pageNum && res.data.data.pageNum>1) {
            pageInformation.tableData = pageInformation.tableData.concat(res.data.data.list);
          }
          else if(res.data.data.pageNum==1) {
            pageInformation.tableData = res.data.data.list;
          }
          pageInformation.pageInfo.pageTotal = res.data.data.pages; // 总页数
        }
      })
      .catch(err => {
        // console.log(err);
      })
    }
  }
}