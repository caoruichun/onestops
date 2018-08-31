import globalFilter from '../../../../assets/global/globalFilter.js'
export default {
  name: 'Tong',
  data () {
    return {
      dataHangye:[
        {id:'最大值',model:200,num:1000,price:300,path:'/valuationTransactio'},
        {id:'最小值',model:200,num:1000,price:300,path:'/valuationTransactio'},
        {id:'平均值',model:200,num:1000,price:300,path:'/valuationTransactio'},
        {id:1,name:'tom',model:200,num:1000,price:300,path:'/valuationTransactio'},
        {id:2,name:'tom',model:200,num:1000,price:300,path:'/valuationTransactio'},
        {id:3,name:'tom',model:200,num:1000,price:300,path:'/valuationTransactio'},
        {id:4,name:'tom',model:200,num:1000,price:300,path:'/valuationTransactio'}

      ],
      dataHangye1:[
        {id:'最大值',model:200,num:1000,price:300},
        {id:'最小值',model:200,num:1000,price:300},
        {id:'平均值',model:200,num:1000,price:300},
        {id:4,name:'tom',model:200,num:1000,price:300},
        {id:5,name:'tom',model:200,num:1000,price:300},
        {id:6,name:'tom',model:200,num:1000,price:300},
        {id:7,name:'tom',model:200,num:1000,price:300}

      ],
      dateList:[
      {
        value:'选项1',
        label:'2017/4/18'
      },
      {
        value:'选项2',
        label:'2017/4/28'
      },
      {
        value:'选项3',
        label:'2017/5/18'
      },
      {
        value:'选项4',
        label:'2017/5/28'
      },
      {
        value:'选项5',
        label:'2017/6/8'
      }
    ],
    date1:'',
    date2:'',
    date3:'',
    Lists1:[
      {time:2014,gonshui: 2000, lv: 20},
      {time:2015,gonshui: 2000, lv: 20},
      {time:2016,gonshui: 2000, lv: 20},
      {time:2017,gonshui: 2000, lv: 20}

    ],
    Lists2:[
      {time:2018,gonshui: 2000, lv: 20},
      {time:2019,gonshui: 2000, lv: 20},
      {time:2020,gonshui: 2000, lv: 20},
      {time:2021,gonshui: 2000, lv: 20},
      {time:2022,gonshui: 2000, lv: 20},
      {time:2023,gonshui: 2000, lv: 20}
    ],
    table_headhangye:[]
    }
  },
  created(){
    this.table_headhangye = this.globalData.basePageInfo.operationAnalysis.table_headhangye
  },
  methods:{
    // 铜行业对比
    arrayHangye({row,column,rowIndex,columnIndex}){
      if(rowIndex === 0 || rowIndex ===1 ||rowIndex===2){
        if(columnIndex === 0){
          return [1,2];
        }else if (columnIndex ===1){
          return [0,0];
        }
      }
    },
    // 判断表格单元格内容是否为空
    isNUll(row,column,val,index){
      if(val==""||val==undefined||val==null){
        return "—";
      }else if(val!=""){
        return val;
      }
    },
    bs_search(){
      console.log(this.date1+'-'+this.date2);
      this.Lists1= this.Lists2;
    },
    bs_seeall(){
        console.log('我是全部搜索里面的'+this.date1+'-'+this.date2);
        this.Lists1= this.Lists2;
    },
    hy_search(){
        console.log(this.date3);
        this.dataHangye= this.dataHangye1;
    },
    hy_seall(){
        console.log('我是全部搜索里面的'+this.date3);
        this.dataHangye= this.dataHangye1;
    }
  }
}
