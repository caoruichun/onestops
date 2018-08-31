import tableInnerA from './tableInnerA/index.vue' // 本企业表格
import tableInnerB from './tableInnerB/index.vue' // 同行业表格
export default {
  name: 'financialAnalysis',
  data () {
    return {
    	enterpriseNum: ['',0], // 本企业默认sheet
      enterpriseTable: true, // 是否显示本企业表格
      sameIndustryNum: ['',6], // 同行业默认sheet
      sameIndustryTable: true, // 是否显示同行业表格
      labelList: [
        { label: '核心财务指标', eNum: 0, sNum: 6 },
        { label: '资产质量', eNum: 1, sNum: 7 },
        { label: '资本结构', eNum: 2, sNum: 8 },
        { label: '盈利能力', eNum: 3, sNum: 9 },
        { label: '现金流', eNum: 4, sNum: 10 },
        { label: '偿债能力', eNum: 5, sNum: 11 },
      ],
      // 时间选择
      timeInfo: {
        timeList: '', // 时间列表
        timeValue: '', // 选择的时间
      },
      anchorNum: 0, // 锚点定位
      anchorPucker: true, // 锚点展开
    }
  },
  created() {
    // 获得时间列表
    this.timeSelect();
  },
  methods: {
    // 锚点定位
    anchorBTN(num) {
      this.anchorNum = num;
      if(num==0) {
        $('.financialAnalysis')[0].scrollTop = 0;
      }
      else {
        $('.financialAnalysis')[0].scrollTop = $('.financialAnalysis .el-col').eq(0).height();
      }
    },
    // 锚点折叠
    anchorFold() {
      this.anchorPucker=!this.anchorPucker;
    },
    // 获得时间列表
    timeSelect() {
      let timeInformation = this;
      this.axios({
        method: 'post',
        url: '/dateSel',
        data: {
          compCode: this.globalInfo.compCode || '100759',
        }
      })
      .then((res) => {
        timeInformation.timeInfo.timeList = res.data;
        timeInformation.timeInfo.timeValue = res.data[0];
        this.$set(timeInformation.sameIndustryNum,0,timeInformation.timeInfo.timeValue);
      })
      .catch(err => {
        console.log(err)
      })      
    },
    // 时间选择 
    timeSelectBtn() {
      this.$set(this.sameIndustryNum,0,this.timeInfo.timeValue);
    },
    // 本企业切换
    enterpriseChange() {
      $('.financialAnalysis')[0].scrollTop = 0;
      this.enterpriseTable = false;
      let enterpriseShow = this;
      setTimeout(function() {
        enterpriseShow.enterpriseTable = true;
      },100);
    },
    // 同行业切换
    sameIndustryChange() {
      this.sameIndustryTable = false;
      let sameIndustryShow = this;
      setTimeout(function() {
        sameIndustryShow.sameIndustryTable = true;
      },100);
    },
    // 导出excel
    exportEXCEL() {
      this.axios({
        method: 'get',
        url: '/excelExport',
        params: {
          compCode: this.globalInfo.compCode || '100759'
        },
        responseType: 'arraybuffer',
        transformResponse:[function (data) {
          return data;
        }]
      })
      .then((res) => {
        this.globalFC.downFile(res);
      })
      .catch(err => {
        // console.log(err);
      })
    }
  },
  components:{
    tableInnerA, // 本企业表格
    tableInnerB, // 同行业表格
  }
}