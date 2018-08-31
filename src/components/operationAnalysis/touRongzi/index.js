import globalFilter from '../../../assets/global/globalFilter.js'
export default {
  name: 'touRongzi',
  data () {
    return {
      touziData:[
        {name:'锦江港项目',all: 1000,bili:20, touziA:1000,w1:1000,w2:1000,w3:1000,now:'在建'},
        {name:'丹东港项目',all: 2000,bili:20, touziA:1000,w1:1000,w2:1000,w3:1000,now:'在建'},
        {name:'锦江港项目',all: 3000,bili:20, touziA:1000,w1:1000,w2:1000,w3:1000,now:'拟建'},
        {name:'大连港项目',all: 4000,bili:20, touziA:1000,w1:1000,w2:1000,w3:1000,now:'在建'},
        {name:'锦江港项目',all: 5000,bili:20, touziA:1000,w1:1000,w2:1000,w3:1000,now:'拟建'}
      ],
      rongziData:[
        {methods:'银行',max: 1000,min:20, average:1000},
        {methods:'信托',max: 2000,min:20, average:1000},
        {methods:'融资租赁',max: 3000,min:20, average:1000}
      ],
      rongzisx:[
        {moneyAll:1000,shouxian: 1000,sxbili:20},
        {moneyAll:1000,shouxian: 2000,sxbili:20},
        {moneyAll:1000,shouxian: 3000,sxbili:20}
      ],
      feibiaoC:[
        {name:'北大信托',model:1000,chengben:20,datetime:'2008/09-2010/09'},
        {name:'交通银行',model:1000,chengben:20,datetime:'2008/09-2010/09'},
        {name:'中国银行',model:1000,chengben:20,datetime:'2008/09-2010/09'},
        {name:'某农村信用社',model:1000,chengben:20,datetime:'2008/09-2010/09'},
      ],
      rongziTit:[
        {
          link: '/rongzicb',
          item: '融资成本'
        },
        {
          link: '/shouxianzc',
          item: '受限资产'
        },{
          link: '/feibaiocp',
          item: '非标产品'
        }
      ],
      activeItem1: 0,
      show: 0,
      table_headtouziData:[],
      table_headrongziData:[],
      table_headrongzisx:[],
      table_headfeibiaoC:[]
    }
  },
  created(){
    this.table_headtouziData = this.globalData.basePageInfo.operationAnalysis.table_headtouziData
    this.table_headrongziData = this.globalData.basePageInfo.operationAnalysis.table_headrongziData
    this.table_headrongzisx = this.globalData.basePageInfo.operationAnalysis.table_headrongzisx
    this.table_headfeibiaoC = this.globalData.basePageInfo.operationAnalysis.table_headfeibiaoC
  },
  methods:{
    change(index){
      this.show = index;
    }

  }
}
