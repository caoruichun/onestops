import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 首页
import mainPage from '@/components/mainPage/index.vue'
// 主体信息
import subjectInfo from '@/components/subjectInfo/index.vue'
// 个券信息
import voucherInfo from '@/components/voucherInfo/index.vue'
// 大数据看板
import bigData from '@/components/bigData/index.vue'
import ICBC from '@/components/bigData/ICBC/index.vue'   //工商信息
import judicial from '@/components/bigData/judicial/index.vue'   //司法信息
import customs from '@/components/bigData/customs/index.vue'   //海关信息
import revenue from '@/components/bigData/revenue/index.vue'   //税收信息
import society from '@/components/bigData/society/index.vue'  //工商信息----法人代表
// 财务分析
import financialAnalysis from '@/components/financialAnalysis/index.vue'
// 经营分析
import operationAnalysis from '@/components/operationAnalysis/index.vue'
// 经营分析子组件
import businessStruct from '@/components/operationAnalysis/businessStruct/index.vue'
import centerBusiness from '@/components/operationAnalysis/centerBusiness/index.vue'
import touRongzi from '@/components/operationAnalysis/touRongzi/index.vue'
// 经营分析-核心经营-投城
import chengTou from '@/components/operationAnalysis/centerBusiness/chengTou/index.vue'
import Tong from '@/components/operationAnalysis/centerBusiness/Tong/index.vue'
import gongShui from '@/components/operationAnalysis/centerBusiness/gongShui/index.vue'
// 智能模型
import intelligentModel from '@/components/intelligentModel/index.vue'
// 估值交易
import valuationTransaction from '@/components/valuationTransaction/index.vue'
//估值交易后台QB
import QBJurisdiction from '@/components/valuationTransaction/QBJurisdiction/index.vue'
// 智能报告
import intelligentReport from '@/components/intelligentReport/index.vue'
// 讨论区
import discussionArea from '@/components/discussionArea/index.vue'
// 讨论区-主题发布
import publishEditor from '@/components/discussionArea/publishEditor/index.vue'
// 讨论区-后台审核
import backapproval from '@/components/discussionArea/backapproval/index.vue'

export default new Router({
	// mode: 'history',
	base: '/onestop',
  routes: [
    {
      path: '*',
      component: mainPage // 404页面
    },
    {
      path: '/',
      name: 'mainPage',
      component: mainPage, // 整体页面
      children: [{
        path: '/subjectInfo',
        name: 'subjectInfo',
        component: subjectInfo // 主体信息
      },{
        path: '/voucherInfo',
        name: 'voucherInfo',
        component: voucherInfo // 个券信息
      },{
        path: '/bigData',
        name: 'bigData',
        component: bigData, // 大数据看板
				children:[
					{
						path:'/',
						name:'ICBC',
						component: ICBC
					},
					{
						path:'/ICBC',   //工商信息
						name:'ICBC',
						component: ICBC
					},
					{
						path:'/judicial',     //司法信息
						name:'judicial',
						component: judicial
					},
					{
						path:'/customs',   //海关信息
						name:'customs',
						component: customs
					},
					{
						path:'/revenue',    //税收信息
						name:'revenue',
						component: revenue
					}
				]
      },{
				path: '/society',
				name: 'society',
				component: society
			},{
        path: '/financialAnalysis',
        name: 'financialAnalysis',
        component: financialAnalysis // 财务分析
      },{
        path: '/operationAnalysis',
        name: 'operationAnalysis',
        component: operationAnalysis, // 经营分析
				children:[
					{
						path: '/',
			      name: 'businessStruct',
			      component: businessStruct,
					},{
						path:'/businessStruct',
						name:'businessStruct',
						component: businessStruct//经营分析里边的--业务结构
					},{
						path:'/centerBusiness',
						redirect: '/chengTou',
						name:'centerBusiness',
						component: centerBusiness,//经营分析里边的--核心经营指标
						children:[
							{
								path: '/',
					      name: 'chengTou',
					      component: chengTou,
							},
							{
								path: '/chengTou',
					      name: 'chengTou',
					      component: chengTou,
							},
							{
								path: '/Tong',
					      name: 'Tong',
					      component: Tong,
							},
							{
								path: '/gongShui',
					      name: 'gongShui',
					      component: gongShui,
							}
						]
					},{
						path:'/touRongzi',
						name:'touRongzi',
						component: touRongzi//经营分析里边的--投融资
					}
				]
      },{
        path: '/intelligentModel',
        name: 'intelligentModel',
        component: intelligentModel // 智能模型
      },{
        path: '/valuationTransaction',
        name: 'valuationTransaction',
        component: valuationTransaction // 估值交易
      },{
        path: '/valuationTransaction/QBJurisdiction',
        name: 'QBJurisdiction',
        component: QBJurisdiction // 估值交易-后台
      },{
        path: '/intelligentReport',
        name: 'intelligentReport',
        component: intelligentReport // 智能报告
      },{
        path: '/discussionArea',
        name: 'discussionArea',
        component: discussionArea // 讨论区
      },{
        path: '/discussionArea/publishEditor',
        name: 'publishEditor',
        component: publishEditor // 讨论区-主题发布
      },{
        path: '/discussionArea/backapproval',
        name: 'backapproval',
        component: backapproval // 讨论区-后台审核
      }]
    }
  ]
})
