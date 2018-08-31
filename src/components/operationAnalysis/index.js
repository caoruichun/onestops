export default {
  name: 'operationAnalysis',
  data () {
    return {
      AnaList:[
        {
    			link: '/businessStruct',
    			item: '业务结构'
    		},
        {
    			link: '/centerBusiness',
    			item: '核心经营指标'
    		},{
    			link: '/touRongzi',
    			item: '投融资'
    		}
      ],
      activeItem: 0
    }
  },
  methods:{
    exportFile(){

    }
  }
}
