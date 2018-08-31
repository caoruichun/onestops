export default {
  name: 'defaultTemp',
  data () {
    return {     
      compCode: this.globalInfo.compCode || '100759', // 企业ID
      companyName: this.globalInfo.companyName, // 企业名称
      // 表格固定信息
      tableStatic_aName: this.globalData.basePageInfo.intelligentReport.defaultReport.defaultReport_a.table_title, // 表1
      tableStatic_aCol: this.globalData.basePageInfo.intelligentReport.defaultReport.defaultReport_a.col_name,
      tableStatic_aRow: this.globalData.basePageInfo.intelligentReport.defaultReport.defaultReport_a.row_name,
      tableStatic_bName: this.globalData.basePageInfo.intelligentReport.defaultReport.defaultReport_b.table_title, // 表2
      tableStatic_bCol: this.globalData.basePageInfo.intelligentReport.defaultReport.defaultReport_b.col_name,
      tableStatic_bRow: this.globalData.basePageInfo.intelligentReport.defaultReport.defaultReport_b.row_name,
      tableStatic_cName: this.globalData.basePageInfo.intelligentReport.defaultReport.defaultReport_c.table_title, // 表3
      tableStatic_cCol: this.globalData.basePageInfo.intelligentReport.defaultReport.defaultReport_c.col_name,
      tableStatic_cRow: this.globalData.basePageInfo.intelligentReport.defaultReport.defaultReport_c.row_name,
      tableStatic_dName: this.globalData.basePageInfo.intelligentReport.defaultReport.defaultReport_d.table_title, // 表4
      tableStatic_dCol: this.globalData.basePageInfo.intelligentReport.defaultReport.defaultReport_d.col_name,
      tableStatic_dRow: this.globalData.basePageInfo.intelligentReport.defaultReport.defaultReport_d.row_name,
      tableStatic_eName: this.globalData.basePageInfo.intelligentReport.defaultReport.defaultReport_e.table_title, // 表5
      tableStatic_eCol: this.globalData.basePageInfo.intelligentReport.defaultReport.defaultReport_e.col_name,
      tableStatic_eRow: this.globalData.basePageInfo.intelligentReport.defaultReport.defaultReport_e.row_name,
      tableStatic_fName: this.globalData.basePageInfo.intelligentReport.defaultReport.defaultReport_f.table_title, // 表6
      tableStatic_fCol: this.globalData.basePageInfo.intelligentReport.defaultReport.defaultReport_f.col_name,
      tableStatic_fRow: this.globalData.basePageInfo.intelligentReport.defaultReport.defaultReport_f.row_name,
      // 表格信息
      tableInfo_a: '', // 表1
      tableInfo_b: '', // 表2
      tableInfo_c: '', // 表3
      tableInfo_d: '', // 表4
      tableInfo_e: '', // 表5
      tableInfo_f: '', // 表6
      // 财务要素分析
      financialInfo: {
        tdebtcaprt: '【XXXX】',
        assliabrt: '【XXXX】',
        bizporfit: '【XXXX】',
        alldebtdivebitda: '【XXXX】',
        zczlTime: '【XXXX】',
        currentrt: '【XXXX】',
        czTime: '【XXXX】',
        mananetr2: '【XXXX】',
        mananetr3: '【XXXX】',
        mananetr1: '【XXXX】',
        cashincomert: '【XXXX】',
        ebitdascover: '【XXXX】',
        date: '【XXXX】',
        zbjgTime: '【XXXX】',
        cashassetdivshortdebt: '【XXXX】'
      },
      // 页面样式
      pageStyle: {
        title: {
          textAlign: 'center',
          fontFamily: 'Times New Roman, SimHei'
        },
        tableHead: {          
          padding: 0, 
          color: '#fff',
          fontWeight: 500,  
          fontSize: '14px', 
          lineHeight: '40px',
          fontFamily: 'Times New Roman, SimHei'
        },
        tableBody: {
          width: '100%',
          maxWidth: '100%',
          margin: '0 auto',
          fontFamily: 'Times New Roman, SimHei'
        },
        tableHead_td: {
          padding: 0,
          color: '#fff', 
          fontWeight: 900,
          minWidth: '200px',
          fontSize: '1.2em',
          textAlign: 'left',
          textIndent: '1em',
          lineheight: '1.2em', 
          background: '#4E83BA',
          fontFamily: 'Times New Roman, SimHei'
        },
        td: {
          color: '#303133', 
          minWidth: '300px',
          padding: '0.5rem 0', 
          textAlign: 'center',
          verticalAlign: 'middle', 
          border: '1px solid #000',
          fontFamily: 'Times New Roman, SimHei'
        },
        tdCol_1: {
          width: '20%',
          minWidth: '20%',
          color: '#303133', 
          fontWeight: '700',
          textAlign: 'left',
          textIndent: '1em',
          padding: '0.5rem 0', 
          verticalAlign: 'middle', 
          border: '1px solid #000',
          fontFamily: 'Times New Roman, SimHei'
        },
        tdRow_1a: {
          width: '20%',
          minWidth: '20%',
          color: '#303133', 
          fontWeight: '700',
          padding: '0.5rem 0', 
          textAlign: 'center',
          verticalAlign: 'middle', 
          border: '1px solid #000',
          backgroundColor: '#E6E6E6',
          fontFamily: 'Times New Roman, SimHei'
        },
        tdRow_1b: {
          color: '#303133', 
          minWidth: '300px',
          padding: '0.5rem 0', 
          textAlign: 'center',
          verticalAlign: 'middle', 
          border: '1px solid #000',
          backgroundColor: '#E6E6E6',
          fontFamily: 'Times New Roman, SimHei'
        },
        tableHead_tdEmpty: {
          padding: 0,
          color: '#fff', 
          fontWeight: 900,
          minWidth: '200px',
          fontSize: '1.2em',
          textIndent: '1em',
          lineheight: '1.2em', 
          textAlign: 'center',
          background: '#4E83BA',
          fontFamily: 'Times New Roman, SimHei'
        },
        tdEmpty: {
          display: 'block',
          color: '#303133', 
          padding: '0.5rem', 
          textAlign: 'justify',
          fontFamily: 'Times New Roman, SimHei' 
        },
        divStyle: {
          width: '100%',
          fontWeight: 500,
          padding: '1rem',
          display: 'block',
          textIndent: '2rem',
          margin: '1rem auto',
          fontSize: '16px',
          border: '1px solid #000',
          fontFamily: 'Times New Roman, SimHei'
        },
      },
    }
  },
  created() {
    this.getReportInfo(this.compCode);
  },
  methods: {
    // 获得默认模板数据
    getReportInfo(info) {
      let tableInner = this;
      this.axios({
        method: 'post',
        url: '/IntelligentReport',
        data: {
          enterpriseId: Number(info)
        },
      })
      .then((res) => {
        tableInner.tableInfo_a = this.tableInfoCheck(res.data.data.list[0]); // 表1
        tableInner.tableInfo_b = this.tableInfoCheck(res.data.data.list[1]); // 表2
        tableInner.tableInfo_c = this.tableInfoCheck(res.data.data.list[2]); // 表3
        tableInner.tableInfo_f = this.tableDataCheck(res.data.data.list[3]); // 表6
        this.axios({
          method: 'post',
          url: '/IntelligentReport1',
          data: {
            enterpriseId: Number(info)
          },
        })
        .then((response) => {
          tableInner.financialInfo = response.data.data.list[0];
          let list = response.data.data.list[0];
          for(var i in list) {
            if(list[i]) {
              if(i=='assliabrt' || i=='tdebtcaprt') {
                tableInner.financialInfo[i] = list[i]+'%';
              }
              else {
                tableInner.financialInfo[i] = list[i];  
              }
            };
          };
          this.$emit('defaultOK',true);
        })
        .catch(error => {
          // console.log(err);
        })
      })
      .catch(err => {
        // console.log(err);
      });
    },
    // 表格数据处理
    tableInfoCheck(info) {
      if(info) {
        for(var i in info) {
          if(info[i]) {
            continue;
          }
          else {
            info[i] = '—'
          }
        }        
      };
      return info;
    },
    // 表格千位符数据处理
    tableDataCheck(info) {
      if(info) {
        for(var i in info) {
          if(info[i]) {
            if(i!='start1'&&i!='start2'&&i!='start3') {
              info[i] = this.globalFC.scientificNotation(Number(info[i]).toFixed(2));
            };
            continue;
          }
          else {
            info[i] = '—'
          }
        }        
      };
      return info;
    }
  }
}