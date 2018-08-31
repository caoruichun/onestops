const basePageInfo = {
	// 导航条
	navList: [
		{ link: '/subjectInfo', item: '主体信息' },
		{ link: '/voucherInfo', item: '个券信息' },
		{ link: '/bigData', item: '大数据看板' },
		{ link: '/financialAnalysis', item: '财务分析' },
		// { link: '/operationAnalysis', item: '经营分析' },
		{ link: '/intelligentModel', item: '智能模型' },
		{ link: '/valuationTransaction', item: '估值交易' },
		{ link: '/intelligentReport', item: '智能报告' },
		{ link: '/discussionArea', item: '讨论区' }
	],
	sideList: [
		{ item:'中债智测', },
		{ item:'债金典' },
		{ item:'债无忧' },
		{ item:'新债参考' },
		{ item:'风险排查名单' },
		{ item:'行业数据库' },
		{ item:'研究报告类产品', opition: ['研究报告类产品-1','研究报告类产品-2','研究报告类产品-3'] },
		{ item:'全覆盖数据库'
		},
		{ item:'中债智投' },
		{ item:'资产证券化信息服务平台' },
		{ item:'城投企业信息分析平台' },
		{ item:'资产池信用...风险管理咨询' },
		{ item:'深度调研服务解决方案' },
		{ item:'新产品专区', opition: ['新产品专区-1','新产品专区-2','新产品专区-3'] }
	],
	// 财务分析
	financialAnalysisData: {
		// 头部信息
    tableHead_fixed: ['行业平均','行业中位','本企业'], // 固定行
		tableHead_a: [ // 财务指标首页
      { label: '时间', twidth: '100', key: 'enddate', },
      { label: '资产总额（亿元）', twidth: '150', key: 'totasset', },
      { label: '全部债务（亿元）', twidth: '150', key: 'alldebt', },
      { label: '营业收入（亿元）', twidth: '150', key: 'bizinco', },
      { label: 'EBITDA（亿元）', twidth: '150', key: 'ebitda', },
      { label: '利润总额（亿元）', twidth: '150', key: 'totprofit', },
      { label: '经营净现金流（亿元）', twidth: '180', key: 'mananetr', },
      { label: '营业毛利率（%）', twidth: '150', key: 'bizmargin', },
      { label: '总资产报酬率（%）', twidth: '150', key: 'roa', },
      { label: '资产负债率（%）', twidth: '150', key: 'assliabrt', },
      { label: '全部债务资本化比率（%）', twidth: '200', key: 'tdebtcaprt', },
      { label: '速动比率（倍）', twidth: '150', key: 'quickrt', },
      { label: 'EBITDA利息保障倍数（倍）', twidth: '200', key: 'ebitdascover', },
      { label: '全部债务/EBITDA（倍）', twidth: '180', key: 'alldebtdivebitda', },
    ],
    tableHead_aa: [ // 财务指标首页（同行业）
      { label: '企业名称', twidth: '250', key: 'enterpriseName', },
      { label: '资产总额（亿元）', twidth: '180', key: 'totasset', },
      { label: '全部债务（亿元）', twidth: '180', key: 'alldebt', },
      { label: '营业收入（亿元）', twidth: '180', key: 'bizinco', },
      { label: 'EBITDA（亿元）', twidth: '180', key: 'ebitda', },
      { label: '利润总额（亿元）', twidth: '180', key: 'totprofit', },
      { label: '经营净现金流（亿元）', twidth: '200', key: 'mananetr', },
      { label: '营业毛利率（%）', twidth: '180', key: 'bizmargin', },
      { label: '总资产报酬率（%）', twidth: '180', key: 'roa', },
      { label: '资产负债率（%）', twidth: '180', key: 'assliabrt', },
      { label: '全部债务资本化比率（%）', twidth: '240', key: 'tdebtcaprt', },
      { label: '速动比率（倍）', twidth: '180', key: 'quickrt', },
      { label: 'EBITDA利息保障倍数（倍）', twidth: '240', key: 'ebitdascover', },
      { label: '全部债务/EBITDA（倍）', twidth: '200', key: 'alldebtdivebitda', },
    ],
    tableHead_b: [ // 资产质量
      { label: '时间', twidth: '100', key: 'enddate', },
      { label: '流动资产（亿元）', twidth: '180', key: 'totcurrasset', },
      { label: '非流动资产（亿元）', twidth: '180', key: 'totalnoncassets', },
      { label: '应收款周转率（次）', twidth: '180', key: 'accrecgturnrt', },
      { label: '其他应收款周转率（次）', twidth: '200', key: 'otheraccrecgturnrt', },
      { label: '存货周转率（次）', twidth: '180', key: 'invturnrt', },
      { label: '流动资产周转率（次）', twidth: '200', key: 'curassturnrt', },
      { label: '总资产周转率（次）', twidth: '180', key: 'taturnrt', },
    ],
    tableHead_bb: [ // 资产质量（同行业）
      { label: '企业名称', twidth: '250', key: 'enterpriseName', },
      { label: '流动资产（亿元）', twidth: '180', key: 'totcurrasset', },
      { label: '非流动资产（亿元）', twidth: '180', key: 'totalnoncassets', },
      { label: '应收款周转率（次）', twidth: '180', key: 'accrecgturnrt', },
      { label: '其他应收款周转率（次）', twidth: '200', key: 'otheraccrecgturnrt', },
      { label: '存货周转率（次）', twidth: '180', key: 'invturnrt', },
      { label: '流动资产周转率（次）', twidth: '200', key: 'curassturnrt', },
      { label: '总资产周转率（次）', twidth: '180', key: 'taturnrt', },
    ],
    tableHead_c: [ // 资本结构
      { label: '时间', twidth: '100', key: 'enddate', },
      { label: '资产总额（亿元）', twidth: '150', key: 'totasset', },
      { label: '负债总额（亿元）', twidth: '150', key: 'totliab', },
      { label: '流动负债（亿元）', twidth: '150', key: 'totalcurrliab', },
      { label: '非流动负债（亿元）', twidth: '150', key: 'totalnoncliab', },
      { label: '所有者权益（亿元）', twidth: '150', key: 'righaggr', },
      { label: '现金类资产（亿元）', twidth: '150', key: 'cashasset', },
      { label: '短期债务（亿元）', twidth: '150', key: 'shortdebt', },
      { label: '长期债务（亿元）', twidth: '150', key: 'longdebt', },
      { label: '全部债务（亿元）', twidth: '150', key: 'alldebt', },
      { label: '净债务（亿元）', twidth: '150', key: 'netdebt', },
      { label: '资产负债率（%）', twidth: '150', key: 'assliabrt', },
      { label: '长期债务资本化比率（%）', twidth: '200', key: 'ltmdebtcaprt', },
      { label: '全部债务资本化比率（%）', twidth: '200', key: 'tdebtcaprt', },
      { label: '短期债务/长期债务（倍）', twidth: '200', key: 'shortdebtdivlongdebt', },
    ],
    tableHead_cc: [ // 资本结构（同行业）
      { label: '企业名称', twidth: '250', key: 'enterpriseName', },
      { label: '资产总额（亿元）', twidth: '180', key: 'totasset', },
      { label: '负债总额（亿元）', twidth: '180', key: 'totliab', },
      { label: '流动负债（亿元）', twidth: '180', key: 'totalcurrliab', },
      { label: '非流动负债（亿元）', twidth: '180', key: 'totalnoncliab', },
      { label: '所有者权益（亿元）', twidth: '180', key: 'righaggr', },
      { label: '现金类资产（亿元）', twidth: '180', key: 'cashasset', },
      { label: '短期债务（亿元）', twidth: '180', key: 'shortdebt', },
      { label: '长期债务（亿元）', twidth: '180', key: 'longdebt', },
      { label: '全部债务（亿元）', twidth: '180', key: 'alldebt', },
      { label: '净债务（亿元）', twidth: '180', key: 'netdebt', },
      { label: '资产负债率（%）', twidth: '180', key: 'assliabrt', },
      { label: '长期债务资本化比率（%）', twidth: '240', key: 'ltmdebtcaprt', },
      { label: '全部债务资本化比率（%）', twidth: '240', key: 'tdebtcaprt', },
      { label: '短期债务/长期债务（倍）', twidth: '240', key: 'shortdebtdivlongdebt', },
    ],
    tableHead_d: [ // 盈利能力
      { label: '时间', twidth: '100', key: 'enddate', },
      { label: '营业收入（亿元）', twidth: '150', key: 'bizinco', },
      { label: '营业成本（亿元）', twidth: '150', key: 'bizcost', },
      { label: '期间费用（亿元）', twidth: '150', key: 'expe', },
      { label: 'EBIT（亿元）', twidth: '150', key: 'ebit', },
      { label: '经营性业务利润（亿元）', twidth: '200', key: 'bizporfit', },
      { label: '营业外损益（亿元）', twidth: '150', key: 'nonoprofitloss', },
      { label: '利润总额（亿元）', twidth: '150', key: 'totprofit', },
      { label: '营业毛利率（%）', twidth: '150', key: 'bizmargin', },
      { label: 'EBIT利润率（%）', twidth: '150', key: 'ebitprofitrto', },
      { label: '净资产收益率（%）', twidth: '150', key: 'roe', },
      { label: '总资产收益率（%）', twidth: '150', key: 'toe', },
      { label: '销售净利率（%）', twidth: '150', key: 'npmargin', },
      { label: '期间费用收入比率（%）', twidth: '200', key: 'pexpeincrto', },
      { label: '成本费用率（%）', twidth: '150', key: 'tcexprt', },
    ],
    tableHead_dd: [ // 盈利能力（同行业）
      { label: '企业名称', twidth: '250', key: 'enterpriseName', },
      { label: '营业收入（亿元）', twidth: '180', key: 'bizinco', },
      { label: '营业成本（亿元）', twidth: '180', key: 'bizcost', },
      { label: '期间费用（亿元）', twidth: '180', key: 'expe', },
      { label: 'EBIT（亿元）', twidth: '180', key: 'ebit', },
      { label: '经营性业务利润（亿元）', twidth: '240', key: 'bizporfit', },
      { label: '营业外损益（亿元）', twidth: '180', key: 'nonoprofitloss', },
      { label: '利润总额（亿元）', twidth: '180', key: 'totprofit', },
      { label: '营业毛利率（%）', twidth: '180', key: 'bizmargin', },
      { label: 'EBIT利润率（%）', twidth: '180', key: 'ebitprofitrto', },
      { label: '净资产收益率（%）', twidth: '180', key: 'roe', },
      { label: '总资产收益率（%）', twidth: '180', key: 'toe', },
      { label: '销售净利率（%）', twidth: '180', key: 'npmargin', },
      { label: '期间费用收入比率（%）', twidth: '240', key: 'pexpeincrto', },
      { label: '成本费用率（%）', twidth: '180', key: 'tcexprt', },
    ],
    tableHead_e: [ // 现金流
      { label: '时间', twidth: '100', key: 'enddate', },
      { label: '经营活动现金流入量（亿元）', twidth: '250', key: 'bizcashinfl', },
      { label: '投资活动现金流入量（亿元）', twidth: '250', key: 'invcashinfl', },
      { label: '筹资活动现金流入量（亿元）', twidth: '250', key: 'fincashinfl', },
      { label: '经营活动现金净流量（亿元）', twidth: '250', key: 'mananetr', },
      { label: '投资活动现金净流量（亿元）', twidth: '250', key: 'invnetcashflow', },
      { label: '筹资活动现金净流量（亿元）', twidth: '250', key: 'finnetcflow', },
      { label: '现金收入比（%）', twidth: '150', key: 'cashincomert', },
      { label: '付现比（%）', twidth: '150', key: 'paycostrt', },
      { label: '经营净现金/EBITDA（%）', twidth: '200', key: 'mananetrdivebitda', },
    ],
    tableHead_ee: [ // 现金流（同行业）
      { label: '企业名称', twidth: '250', key: 'enterpriseName', },
      { label: '经营活动现金流入量（亿元）', twidth: '250', key: 'bizcashinfl', },
      { label: '投资活动现金流入量（亿元）', twidth: '250', key: 'invcashinfl', },
      { label: '筹资活动现金流入量（亿元）', twidth: '250', key: 'fincashinfl', },
      { label: '经营活动现金净流量（亿元）', twidth: '250', key: 'mananetr', },
      { label: '投资活动现金净流量（亿元）', twidth: '250', key: 'invnetcashflow', },
      { label: '筹资活动现金净流量（亿元）', twidth: '250', key: 'finnetcflow', },
      { label: '现金收入比（%）', twidth: '180', key: 'cashincomert', },
      { label: '付现比（%）', twidth: '180', key: 'paycostrt', },
      { label: '经营净现金/EBITDA（%）', twidth: '200', key: 'mananetrdivebitda', },
    ],
    tableHead_f: [ // 偿债能力
      { label: '时间', twidth: '100', key: 'enddate', },
      { label: '流动比率（倍）', twidth: '150', key: 'currentrt', },
      { label: '速动比率（倍）', twidth: '150', key: 'quickrt', },
      { label: '经营现金总流入/流动负债（倍）', twidth: '250', key: 'bizcashinfldivcurrliab', },
      { label: '经营净现金/流动负债（倍）', twidth: '200', key: 'mananetrcurrliabrt', },
      { label: '经营净现金/短期债务（倍）', twidth: '200', key: 'mananetrdivshortdebt', },
      { label: '现金类资产/短期债务（倍）', twidth: '200', key: 'cashassetdivshortdebt', },
      { label: 'EBITDA利息保障倍数（倍）', twidth: '200', key: 'ebitdascover', },
      { label: '全部债务/EDITDA（倍）', twidth: '200', key: 'alldebtdivebitda', },
      { label: '全部债务/经营净现金（倍）', twidth: '200', key: 'alldebtdivmananetr', },
      { label: '经营净现金利息保障倍数（倍）', twidth: '250', key: 'mananetrscover', },
    ],
    tableHead_ff: [ // 偿债能力（同行业）
      { label: '企业名称', twidth: '250', key: 'enterpriseName', },
      { label: '流动比率（倍）', twidth: '150', key: 'currentrt', },
      { label: '速动比率（倍）', twidth: '150', key: 'quickrt', },
      { label: '经营现金总流入/流动负债（倍）', twidth: '250', key: 'bizcashinfldivcurrliab', },
      { label: '经营净现金/流动负债（倍）', twidth: '240', key: 'mananetrcurrliabrt', },
      { label: '经营净现金/短期债务（倍）', twidth: '240', key: 'mananetrdivshortdebt', },
      { label: '现金类资产/短期债务（倍）', twidth: '240', key: 'cashassetdivshortdebt', },
      { label: 'EBITDA利息保障倍数（倍）', twidth: '240', key: 'ebitdascover', },
      { label: '全部债务/EDITDA（倍）', twidth: '200', key: 'alldebtdivebitda', },
      { label: '全部债务/经营净现金（倍）', twidth: '240', key: 'alldebtdivmananetr', },
      { label: '经营净现金利息保障倍数（倍）', twidth: '250', key: 'mananetrscover', },
    ],
	},
  //主体
	subjectInfoData:{
    tableHead_rthistory:[//历史评级情况
      {label:'级别',twidth:'60',key:'grade'},
      {label:'展望',twidth:'60',key:'forcast'},
      {label:'变动情况',twidth:'',key:'radjustmemo'},
      {label:'时间',twidth:'',key:'creditdate'}
    ],
		tableHead_extRthistory:[//外部评级公司
			{label:'级别/评分',twidth:'85',key:'newestcreditrate'},
			{label:'展望',twidth:'120',key:'newestexptrating'},
			{label:'变动情况',twidth:'80',key:'radjustmemo'},
			{label:'时间',twidth:'100',key:'creditdate'},
			{label:'出具机构',twidth:'',key:'ratecompname'}
		],
		tableHead_riskWarning:[//风险预警情况
			{label:'预警时间',twidth:'',key:'warnDate'},
			{label:'预警类型',twidth:'',key:'warnType'},
			{label:'预警结果',twidth:'',key:'warnResult'}
		],
		tableHead_investment:[//股权结构
			{label:'股东情况',twidth:'',key:'shholdername'},
			{label:'持股比例',twidth:'140',key:'holderrto'},
			{label:'企业性质',twidth:'140',key:'enterpriseProperty'},
			{label:'中债行业',twidth:'',key:'primaryIndustry'},
			{label:'中债评价',twidth:'120',key:'rating'}
		],
		tableHead_tqInfo:[//债券发行情况
			{label:'债券代码',twidth:'100',key:'symbol'},
			{label:'债券简称',twidth:'180',key:'bondsname'},
			{label:'发行时间',twidth:'100',key:'listdate'},
			{label:'票面利率(%)',twidth:'100',key:'couponrate'},
			{label:'剩余期限（年）',twidth:'120',key:'remaineYears'},
			{label:'余额（亿元）',twidth:'105',key:'balance'},
			{label:'到期时间',twidth:'100',key:'delistdate'},
			{label:'特殊条款',twidth:'140',key:'clstype'},
			{label:'担保情况',twidth:'100',key:'exenhancemode'},
			{label:'中债资信债项级别',twidth:'150',key:'rating'},
			{label:'最近一期现金流发生情况',twidth:'360',key:'xianjinliu'},
			{label:' 外部级别（主体/债项）',twidth:'180',key:'newestcreditrate'}
		],
		tableHead_xianjin:[//最近一期现金流发生情况分类
			{label:'日期',twidth:'100',key:'declaredate'},
			{label:'类别',twidth:'100',key:'changetype'},
			{label:'税前金额(元/百元)',twidth:'160',key:'amountOfMoney'},//key:guaramt
		],
		// crashNowBlow: [ // 最近一期现金流（类型）
		// 	'回售','赎回','首发','增发','转股','换入','换出','并入债券','并出债券','到期','并入交易','并出交易','发行并出','注销','资产支持证券偿还本金','延期兑付','债券偿付本金'
		// ],
		speClause :[ // 特殊条款
			'利率条款','回售条款','赎回条款','可调换条款','利息递延条款','暂停索偿权条款','延期选择权条款','提前偿还条款','回拨选择权条款','增发选择权条款','定向转让选择权条款','票面利率选择权','流动性支持','触发性回售条款','加速到期条款','有条件赎回条款','收购承诺条款','持有期利率条款','债券核销或转股条款','担保选择权','减记条款','债券发行失败条款','发行人续期选择权','持有人救济条款','减少持仓还本','发行人优先行使赎回权','投资者优先行使回售权','期初付息','交叉违约条款','投资者品种置换选择权','违约罚息条款','事先约束条款','控制权变更条款','差额补偿条款','期限条款','取消选择权'
		],
		// 基本信息担保方式-债卷发行情况的是否担保
		exenhancemode:[
			'无担保','第三方担保','抵押担保','抵押担保和质押担保','质押担保','第三方担保和抵押担保','第三方担保和质押担保','第三方担保、质押担保和抵押担保','个人担保、质押担保和抵押担','未披露','个人担保','第三方担保和个人担保','第三方担保、个人担保和抵押担保'
		],
    //历史评级情况（变动情况）123
    radjustmemo:['调高','调低','维持'],
    //外部评级公司(展望)123
    newestexptrating:['正面','稳定','负面','列入评级观察(可能调高)','列入评级观察(可能调低)','列入评级观察(走势不明)','待决','—','—','—','—','—','—','—','—','—','—','—','—','—']

	},
	// 大数据看板
	bigData:{
		table_headComInfo:[ //公司股东信息
			{label:'股东名称',twidth:'250',key:'shareholderName'},
			{label:'股东类型',twidth:'100',key:'shareholderType'},
			{label:'股东证件类型',twidth:'120',key:'blicType'},
			{label:'股东证件号码',twidth:'200',key:'blicNo'},
			{label:'认缴出资额(万元)',twidth:'150',key:'subConam'},
			{label:'认缴出资币种',twidth:'',key:'subCurrency'},
			{label:'出资日期',twidth:'',key:'conDate'},
			{label:'出资比例',twidth:'100',key:'fundedRatio'},
			{label:'国别(地区)',twidth:'100',key:'country'}
		],
		table_headBran:[ //分之机构信息
			{label:'机构名称',twidth:'240',key:'brName'},
			{label:'负责人',twidth:'70',key:'brPrincipal'},
			{label:'统一社会信用代码',twidth:'180',key:'brCreditCode'},
			{label:'分支机构注册号',twidth:'160',key:'brRegNo'},
			{label:'经营范围',twidth:'900',key:'operateScope'},
			{label:'机构地址',twidth:'300',key:'brAddr'}
		],
		table_headOutbound:[  //公司对外投资信息
			{label:'序号',twidth:'50',key:'index',type:'index'},
			{label:'企业名称',twidth:'250',key:'entName'},
			{label:'出资比例',twidth:'80',key:'fundedRatio'},
			{label:'认缴出资额(万元)',twidth:'150',key:'subConam'},
			{label:'统一社会信用代码',twidth:'180',key:'creditCode'},
			{label:'注册号',twidth:'150',key:'regNo'},
			{label:'类型',twidth:'180',key:'entType'},
			{label:'成立日期',twidth:'90',key:'esDate'},
			{label:'注册资本(万元)',twidth:'150',key:'regCap'},
			{label:'法定人代表/负责人/执行事务合伙人/投资者/经营者',twidth:'400',key:'frName'},
			{label:'登记状态',twidth:'120',key:'entStatus'}
		],
		table_headpunish:[  //行政处罚信息
			{label:'公示日期',twidth:'90',key:'openDate'},
			{label:'处罚决定日期',twidth:'120',key:'penDecissDate'},
			{label:'违法行为类型',twidth:'',key:'illegactTypeName'},
			{label:'决定文书号',twidth:'220',key:'penDecNo'},
			{label:'行政处罚内容',twidth:'130',key:'penResultName'},
			{label:'决定机关名称',twidth:'150',key:'penAuthName'}
		],
		table_headSerious:[  //严重违法失信息
			{label:'列入',twidth:'',key:''},
			{label:'移出',twidth:'',key:''}
		],
		table_headSeriousru:[
			{label:'列入日期',twidth:'',key:'illegalDateIn'},
			{label:'列入原因',twidth:'',key:'illegalResultIn'},
			{label:'列入做出决定机关',twidth:'',key:'illegalOrgNameIn'}
		],
		table_headSeriouschu:[
			{label:'移出日期',twidth:'',key:'illegalDateOut'},
			{label:'移出原因',twidth:'',key:'illegalResultOut'},
			{label:'移出做出决定机关',twidth:'',key:'illegalOrgNameOut'}
		],
		table_headabnormal:[  //经营异常信息
			{label:'列入',twidth:'',key:''},
			{label:'移出',twidth:'',key:''}
		],
		table_headabnormalru:[
			{label:'列入日期',twidth:'',key:'dateIn'},
			{label:'列入原因',twidth:'',key:'resultIn'},
			{label:'列入做出决定机关',twidth:'',key:'orgNameIn'}
		],
		table_headabnormalchu:[
			{label:'移出日期',twidth:'',key:'dateOut'},
			{label:'移出原因',twidth:'',key:'resultOut'},
			{label:'移出做出决定机关',twidth:'',key:'orgNameOut'}
		],
		table_headimplement:[ //被执行人信息
			{label:'立案时间',twidth:'',key:'regDate'},
			{label:'案号',twidth:'',key:'caseCode'},
			{label:'被执行人姓名',twidth:'',key:'enforcedName'},
			{label:'执行法院名称',twidth:'',key:'courtName'},
			{label:'身份证/组织机构代码',twidth:'',key:'cardNum'},
			{label:'执行标的（元）',twidth:'',key:'execmoney'},
			{label:'司法类型',twidth:'',key:'dataType'}
		],
		table_headDishonesty:[ //失信被执行信息
			{label:'发布时间',twidth:'90',key:'publishDate'},
			{label:'立案时间',twidth:'90',key:'regDate'},
			{label:'案号',twidth:'220',key:'caseCode'},
			{label:'被执行人姓名',twidth:'200',key:'name'},
			{label:'性别',twidth:'50',key:'sex'},
			{label:'年龄',twidth:'50',key:'age'},
			{label:'被执行人的履行情况',twidth:'150',key:'performance'},
			{label:'执行依据文号',twidth:'220',key:'gistId'},
			{label:'执行法院名称',twidth:'200',key:'courtName'},
			{label:'身份证/组织机构代码',twidth:'200',key:'cardNum'},
			{label:'做出执行依据单位',twidth:'200',key:'gistUnit'},
			{label:'失信被执行人行为具体情形',twidth:'200',key:'duty'},
			{label:'司法类型',twidth:'80',key:'dataType'}
		]
	},
	// 经营分析
	operationAnalysis:{
		table_headquyuData:[  // 城投---区域财政数据
			{label:'年份',twidth:'',key:'year'},
			{label:'亿元',twidth:'',key:'country'},
			{label:'GDP增速(亿元)',twidth:'',key:'country'},
			{label:'公共财政预算收入(亿元)',twidth:'',key:'country'},
			{label:'政府性基金收入(亿元)',twidth:'',key:'country'},
			{label:'转移性收入(亿元)',twidth:'',key:'country'},
			{label:'综合财力(亿元)',twidth:'',key:'country'},
			{label:'政府负有偿还责任的债务负担(%)',twidth:'',key:'country'}
		],
		table_headfature:[  // 城投---政府支持与未来财政需求
			{label:'年份',twidth:'',key:'year'},
			{label:'资本金注入(亿元)',twidth:'',key:'country'},
			{label:'补贴收入(%)',twidth:'',key:'country'},
			{label:'专项资金(亿元)',twidth:'',key:'country'},
			{label:'在建/拟建项目剩余投资(亿元)',twidth:'',key:'country'},
			{label:'到期债务(亿元)',twidth:'',key:'country'},
			{label:'资金缺口(亿元)',twidth:'',key:'country'},
			{label:'剩余授信(亿元)',twidth:'',key:'country'}
		],
		table_headhangye:[  // 铜----行业对比
			{label:'序号',twidth:'',key:'id'},
			{label:'主体名称',twidth:'',key:'name'},
			{label:'装机规模(万千瓦时)',twidth:'',key:'model'},
			{label:'上网电量(亿千瓦时)',twidth:'',key:'num'},
			{label:'平均电价(元/千瓦时)',twidth:'',key:'price'}
		],
		table_headtouziData:[  //投资融--投资
			{label:'项目名称',twidth:'',key:'name'},
			{label:'总投资(亿元)',twidth:'',key:'all'},
			{label:'资本金比例(%)',twidth:'',key:'bili'},
			{label:'已投资(亿元)',twidth:'',key:'touziA'},
			{label:'未来第一年(亿元)',twidth:'',key:'w1'},
			{label:'未来第二年(亿元)',twidth:'',key:'w2'},
			{label:'未来第三年(亿元)',twidth:'',key:'w3'},
			{label:'在建/拟建',twidth:'',key:'now'}
		],
		table_headrongziData:[  //投资融--融资---融资成本
			{label:'融资方式',twidth:'',key:'methods'},
			{label:'最高值(%)',twidth:'',key:'max'},
			{label:'最低值(%)',twidth:'',key:'min'},
			{label:'平均值(%)',twidth:'',key:'average'}
		],
		table_headrongzisx:[  //投资融--融资---受限资产
			{label:'资产总额(亿元)',twidth:'',key:'moneyAll'},
			{label:'受限资产总额(亿元)',twidth:'',key:'shouxian'},
			{label:'受限资产比例(%)',twidth:'',key:'sxbili'}
		],
		table_headfeibiaoC:[  //投资融--融资---非标产品
			{label:'投资方',twidth:'',key:'name'},
			{label:'融资规模(亿元)',twidth:'',key:'model'},
			{label:'融资成本(%)',twidth:'',key:'chengben'},
			{label:'使用期限',twidth:'',key:'datetime'}
		],
	},
  // 智能报告
  intelligentReport: {
    tableHead_inside: [ // 中债报告
      { label: '报告标题', twidth: '350', key: 'reportTitle', },
      { label: '报告类型', twidth: '150', key: 'type', },
      { label: '行业', twidth: '400', key: 'industry', },
      { label: '报告日期', twidth: '235', key: 'reportDate', },
      { label: '阅读/下载次数', twidth: '130', key: 'downloadNum', },
    ],
    tableHead_outside: [ // 外部机构报告
      { label: '报告标题', twidth: '350', key: 'reportTitle', },
      { label: '研究机构', twidth: '150', key: 'type', },
      { label: '行业', twidth: '400', key: 'industry', },
      { label: '报告日期', twidth: '235', key: 'reportDate', },
      { label: '阅读/下载次数', twidth: '130', key: 'downloadNum', },
    ],
    defaultReport: { // 默认模板
      defaultReport_a: {
        table_title: '表1：内部信用评级结果',
        col_name: ['信用等级', '本次', '上次'],
        row_name: [
          {
            label: '债券信用等级',
            key: ['creditrate', 'creditratePre']
          },{
            label: '主体信用等级/展望',
            key: ['graderate', 'forcast', 'graderatePre', 'forcastPre']
          },{
            label: '担保主体名称',
            key: ['guarantorhqcode']
          },{
            label: '担保主体信用等级/展望',
            key: ['guaGraderate', 'guaForcast', 'guaGraderatePre', 'guaGorcastPre']
          }
        ],
      },
      defaultReport_b: {
        table_title: '表2：发债主体及本期债券基本情况',
        row_name: [
          {
            label: ['公司名称'],
            key: ['enterpriseName']
          },{
            label: ['企业性质'],
            key: ['enterpriseProperty']
          },{
            label: ['中债行业', 'GICS行业'],
            key: ['primaryIndustry', 'secondIndustry']
          },{
            label: ['控股股东', '持股比例'],
            key: ['controllingStockholder', 'holderrto']
          }
        ],
      },
      defaultReport_c: {
        table_title: '表3：近三年外部信用评级记录',
        row_name: [
          {
            label: '信用等级',
            key: ['start1', 'start2', 'start3']
          },
          {
            label: '评级机构',
            key: ['debtRatecompname1', 'debtRatecompname2', 'debtRatecompname3']
          },
          {
            label: '债券信用等级/展望',
            key: ['debtNewestcreditrate1', 'debtEwstexptrating1', 'debtNewestcreditrate2', 'debtEwstexptrating2', 'debtNewestcreditrate3', 'debtEwstexptrating3']
          },
          {
            label: '评级机构',
            key: ['entRatecompname1', 'entRatecompname2', 'entRatecompname3']
          },
          {
            label: '主体信用等级/展望',
            key: ['entNewestcreditrate1', 'entNewestexptrating1', 'entNewestcreditrate2', 'entNewestexptrating2', 'entNewestcreditrate3', 'entNewestexptrating3']
          },
          {
            label: '评级机构',
            key: ['guaRatecompname1', 'guaRatecompname2', 'guaRatecompname3']
          },
          {
            label: '担保主体信用等级/展望',
            key: ['guaNewestcreditrate1', 'guaNewestexptrating1', 'guaNewestcreditrate2', 'guaNewestexptrating2', 'guaNewestcreditrate3', 'guaNewestexptrating3']
          }
        ]
      },
      defaultReport_d: {
        table_title: '表4：: 城市基础设施建设业务核心经营指标 ',
        row_name: [
          {
            label: '项目',
            key: ['', '', '']
          },
          {
            label: '地区生产总值（亿元）',
            key: ['', '', '']
          },
          {
            label: '一般公共预算收入（亿元）',
            key: ['', '', '']
          },
          {
            label: '规模以上工业增加值（亿元）',
            key: ['', '', '']
          },
          {
            label: '进出口总额（亿元）',
            key: ['', '', '']
          },
          {
            label: '三次产业结构',
            key: ['', '', '']
          }
        ]
      },
      defaultReport_e: {
        table_title: '表5：房地产销售业务核心经营指标 ',
        row_name: [
          {
            label: '项目',
            key: ['', '', '']
          },
          {
            label: '房屋销售面积（万平方米）',
            key: ['', '', '']
          },
          {
            label: '房屋销售单价（元/平方米）',
            key: ['', '', '']
          },
          {
            label: '签约率（%）',
            key: ['', '', '']
          }
        ]
      },
      defaultReport_f: {
        table_title: '表4：公司核心财务指标',
        row_name: [
          {
            label: '项目',
            key: ['start3', 'start2', 'start1']
          },
          {
            label: '经营性业务利润（亿元）',
            key: ['fpmBizporfit3', 'fpmBizporfit2', 'fpmBizporfit1']
          },
          {
            label: '经营性现金净流入（亿元）',
            key: ['ffmMananetr3', 'ffmMananetr2', 'ffmMananetr1']
          },
          {
            label: '现金收入比（%）',
            key: ['fcmCashincomert3', 'fcmCashincomert2', 'fcmCashincomert1']
          },
          {
            label: '资产负债率（%）',
            key: ['ffmAssliabrt3', 'ffmAssliabrt2', 'ffmAssliabrt1']
          },
          {
            label: '全部债务资本化比率（%）',
            key: ['ffmTdebtcaprt3', 'ffmTdebtcaprt2', 'ffmTdebtcaprt1']
          },
          {
            label: '流动比率（%）',
            key: ['fsmCurrentrt3', 'fsmCurrentrt2', 'fsmCurrentrt1']
          },
          {
            label: '现金类资产/短期债务',
            key: ['fsmCashassetdivshortdebt3', 'fsmCashassetdivshortdebt2', 'fsmCashassetdivshortdebt1']
          },
          {
            label: '全部债务/EBITDA（倍）',
            key: ['ffmAlldebtdivebitda3', 'ffmAlldebtdivebitda2', 'ffmAlldebtdivebitda1']
          },
          {
            label: 'EBITDA利息保障倍数（倍）',
            key: ['ffmEbitdascover3', 'ffmEbitdascover2', 'ffmEbitdascover1']
          }
        ]
      }
    }
  },
	// 估值交易
	valutionTranscation:{
		table_headcxsc:[//存续券市场交易行情
			{ label: '日期', twidth: '120', key: 'date'},
			{ label: '债券代码', twidth: '120', key: 'symbol' },
			{ label: '债券简称', twidth: '140', key: 'bondsname' },
			{ label: '发行人', twidth: '300', key: 'enterpriseName' },
			{ label: '行业', twidth: '600', key: 'primaryIndustry'},
			{ label: '发行人中债级别', twidth: '300', key: 'rating'},
			{ label: '外部级别', twidth: '300', key: 'newestcreditrate'},
			{ label: '债券级别', twidth: '300', key: 'bondcgchgid' },
			{ label: '债券余额', twidth: '120', key: 'balance' },
			{ label: '剩余期限', twidth: '120', key: 'remaineYears' },
			// { label: '交易市场', twidth: '120', key: 'hy'},
			{ label: '平均成交', twidth: '120', key: 'averageTransaction'},
			{ label: '涨跌BP', twidth: '120', key: 'riseAndFallBp'},
			{ label: '成交笔数', twidth: '120', key: 'zbs' },
			{ label: '最高成交价', twidth: '120', key: 'highCurrentRate' },
			{ label: '最低成交价', twidth: '120', key: 'lowCurrentRate' },
			{ label: '换手率', twidth: '120', key: 'turnoverRate'},
		]
	},
}

// 输出
export default {
  basePageInfo
}
