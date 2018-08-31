import globalFilter from '../../../../assets/global/globalFilter.js'
export default {
  name: 'chengTou',
  data () {
    return {
      dateList:[
      {
        value:'选项1',
        label:'2017-4-18'
      },
      {
        value:'选项2',
        label:'2017-4-28'
      },
      {
        value:'选项3',
        label:'2017-5-18'
      },
      {
        value:'选项4',
        label:'2017-5-28'
      },
      {
        value:'选项5',
        label:'2017-6-8'
      }
    ],
    date1:'',
    date2:'',
    pingtai:{
        fz:'是',
        ym: '北京市新世纪有限责任公司',
        scr: '北京市人民政府',
        zfjb: '市本级',
        ywr: '北京市财政局',
        huik: 'XX财政局',
        ztzn:'北京市' ,
        ptdw:'北京市'
      },
    table_headquyuData:[],
    table_headfature:[]
    }
  },
  created(){
      this.table_headquyuData = this.globalData.basePageInfo.operationAnalysis.table_headquyuData
      this.table_headfature = this.globalData.basePageInfo.operationAnalysis.table_headfature

  },
  methods:{
    // 判断表格单元格内容是否为空
    isNUll(row,column,val,index){
      if(val==""||val==undefined||val==null){
        return "—";
      }else if(val!=""){
        return val;
      }
    }
  }
}
