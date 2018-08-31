
export default {
  name: 'subjectInfo',
  data () {
    return {
    	// 折线图数据
      // 债卷发行分页设置
      pageInfo: {
        pageSize: 10, // 条数
        pageNum: 1, // 页码
        pageTotal: '', // 总页数
        startRow:1,//当前页
      },
      //风险分页设置
      pageInfoFX: {
        pageSize: 10, // 条数
        pageNum: 1, // 页码
        pageTotal: '', // 总页数
        startRow:1,//当前页
      },
      //股权分页设置
      pageInfoGQ: {
        pageSize: 10, // 条数
        pageNum: 1, // 页码
        pageTotal: '', // 总页数
        startRow:1,//当前页
      },
      ratingFlag:'rating_zhong',
      //基本信息
      baseinfoData:{},
      //舆情信息
      enterpriseOpinionInfo:[],
      //风险预警
      enterpriseRiskWarning:[],
      //股权与投资机构
      enterpriseEquityInvestment:[],
      //债券发行情况
      tqBasicInformation:[],
      //中债评级
      enterpriseRatingHistory:[],
      //外部评级
      extRatingHistory:[],
      compCode: '',
      jumpFlag:'#index1',//锚点样式
      jumpShowFlag:true,//锚点框显示隐藏
      infoShowFlag:false,
      isbaseinfozhong:false,//基本信息赋值
      isbaseinfozheng:false,//基本信息赋值
      isbaseinfofu:false,//基本信息赋值
      symbol:null,
      newslink:'',//舆情信息连接
      newstitle:'',//舆情信息标题
      newslinkiframe:'',//舆情信息标题连接
      tableHead_rthistory:'',
      tableHead_extRthistory:'',
      tableHead_riskWarning:'',
      tableHead_investment:'',
      tableHead_tqInfo:'',
      tableHead_xianjin:'',
    }
  },
  created() {
    this.tableHead_rthistory =  this.globalData.basePageInfo.subjectInfoData.tableHead_rthistory;//历史评级情况
    this.tableHead_extRthistory = this.globalData.basePageInfo.subjectInfoData.tableHead_extRthistory;//外部评级公司
    this.tableHead_riskWarning = this.globalData.basePageInfo.subjectInfoData.tableHead_riskWarning;//风险预警情况
    this.tableHead_investment = this.globalData.basePageInfo.subjectInfoData.tableHead_investment;//股权结构
    this.tableHead_tqInfo = this.globalData.basePageInfo.subjectInfoData.tableHead_tqInfo;//债券发行情况
    this.tableHead_xianjin = this.globalData.basePageInfo.subjectInfoData.tableHead_xianjin;//最近一期现金流发生情况分类
  },
  mounted() {
    if(this.globalInfo.compCode!=''){
      this.compCode=this.globalInfo.compCode;
    }else{
      this.compCode='100759';
    }
    this.getEnterpriseRiskWarning();//获得风险预警
    this.getEnterpriseEquityInvestment();//获得股权
    this.getBaseinfoData();//获得基本数据
    this.getRatingHistory();//获得历史评级
    this.getTqBasicInformation();//债券发行情况
  },
  methods: {
    //点击舆情信息展示
    openNewsLink(item){
      this.infoShowFlag = true
      this.newstitle = item.newstitle
      this.newslink = item.newslink
      //this.tqnews();//获取舆情信息连接；
    },
    tqnews(){
      let datas = {
        tqnews:this.newslink
      }
      this.axios({
        method: 'post',
        url:'/tqnews',
        data: datas
      })
      .then((res) => {
        if(res.data.success){
          this.newslinkiframe=res.data.data.replace(/↵/g,'')
        }
      })
      .catch(err => {
        console.log(err);
      })
    },
    //风险预警
    changePageFX(num) {
      this.pageInfoFX.pageNum = num;
      this.getEnterpriseRiskWarning(this.pageInfoFX);
    },
    //获得风险预警数据+_fenye
    getEnterpriseRiskWarning() {
      let datas = {
        enterpriseId:this.compCode,
        pageNum:this.pageInfoFX.pageNum,// 页码
        pageSize:this.pageInfoFX.pageSize
      }
      this.axios({
        method: 'post',
        url:'/RiskWarnInformation',
        data: datas
      })
      .then((res) => {
        if(res.data.success){
          this.enterpriseRiskWarning  = res.data.data.enterpriseRiskWarning.list;//给风险预警赋值
          for(var i=0;i<this.enterpriseRiskWarning.length;i++){
            let warnResult=this.enterpriseRiskWarning[i].warnResult;
            if(warnResult=='红'||warnResult=='橙'|| warnResult == '黄'){
              this.enterpriseRiskWarning[i].warnType = "红橙黄预警";
            }else if(warnResult == 'III类'|| warnResult == 'II类'|| warnResult == 'I类'){
              this.enterpriseRiskWarning[i].warnType = "风险排查名单";
              this.enterpriseRiskWarning[i].warnResult=warnResult+'预警企业';
            }else if(warnResult == null ||warnResult == 'null' || warnResult == '-'){
              this.enterpriseRiskWarning[i].warnType = '—';
              this.enterpriseRiskWarning[i].warnResult = '—';
              this.enterpriseRiskWarning[i].warnDate = '—';
            }
          }
          this.pageInfoFX.pageTotal=res.data.data.enterpriseRiskWarning.pages;
          this.pageInfoFX.startRow = res.data.data.enterpriseRiskWarning.total;
        }
      })
      .catch(err => {
        console.log(err);
      })
    },
    //股权结构
    changePageGQ(num) {
      this.pageInfoGQ.pageNum = num; // 页码
      this.getEnterpriseEquityInvestment(this.pageInfoGQ);
    },
    //获得股权结构+fenye
    getEnterpriseEquityInvestment() {
      let datas = {
        enterpriseId:this.compCode,
        pageNum:this.pageInfoGQ.pageNum,
        pageSize:this.pageInfoGQ.pageSize
      }
      this.axios({
        method: 'post',
        url:'/OwnershipStructure',
        data: datas
      })
      .then((res) => {
        if(res.data.success){
          this.enterpriseEquityInvestment  = res.data.data.enterpriseEquityInvestment.list;//给股权赋值
          this.pageInfoGQ.pageSize = res.data.data.enterpriseEquityInvestment.pageSize;
          this.pageInfoGQ.pageTotal = res.data.data.enterpriseEquityInvestment.pages;
        }
      })
      .catch(err => {
        console.log(err);
      })
    },
    //债券发行情况索引
    indexStartRow(index){
      return index+this.pageInfo.startRow;
    },
     //债卷发行情况（债券代码）
    tqBasicHover(row,column,cell,event){
      if(column.label=="债券代码"){
        cell.style.backgroundColor="#72AFFF";
        cell.style.cursor="pointer";
      }
    },
    tqBasicOut(row,column,cell,event){
      if(column.label=="债券代码"){
        cell.style.backgroundColor="#FFF";
      }
    },
    toPage(row,column,cell,event){
      if(column.label=="债券代码"){
        let id=row.symbol
        this.$router.push({
          path:"/voucherInfo",
          //企业id
          query: {
            id:id,
            partnum: 1
          }
        })
      }
    },
    changePage(num) {
      this.pageInfo.pageNum = num; // 页码
      this.getTqBasicInformation(this.pageInfo);
    },
    //债券发行情况+fenye
    getTqBasicInformation() {
      let datas = {
        enterpriseId:this.compCode,
        pageNum:this.pageInfo.pageNum,
        pageSize:this.pageInfo.pageSize
      }
      this.axios({
        method: 'post',
        url:'/DebtIssuanceSituation',
        data: datas
      })
      .then((res) => {
        if(res.data.success){
          this.tqBasicInformation  = res.data.data.tqBasicInformation.list;
          for(var i=0;i<this.tqBasicInformation.length;i++ ){
            if(this.tqBasicInformation[i].creditrate&&this.tqBasicInformation[i].creditrate!='null'){
              if(this.tqBasicInformation[i].newestcreditrate&&this.tqBasicInformation[i].newestcreditrate!='null'){
                this.tqBasicInformation[i].newestcreditrate=this.tqBasicInformation[i].newestcreditrate+" / "+this.tqBasicInformation[i].creditrate.split('/')[0];
              }else{
                let newestcreditrate=this.tqBasicInformation[i].newestcreditrate='—';
                this.tqBasicInformation[i].newestcreditrate=newestcreditrate+" / "+this.tqBasicInformation[i].creditrate.split('/')[0];
              }
            }else{
              let creditrate=this.tqBasicInformation[i].creditrate='—';
              this.tqBasicInformation[i].newestcreditrate=this.tqBasicInformation[i].newestcreditrate+" / "+creditrate;
            }
          }
          this.pageInfo.pageTotal=res.data.data.tqBasicInformation.pages;
          this.pageInfo.startRow = res.data.data.tqBasicInformation.startRow;
        }
      })
      .catch(err => {
        console.log(err);
      })
    },
    getBaseinfoData() {
      //获得基本信息
      let datas = {
        enterpriseId:this.compCode
      }
      this.axios({
        method: 'post',
        url:'/getEnterpriseBasisInfo',
        data: datas
      })
      .then((res) => {
        if(res.data.data.enterpriseBasisInfo != null){
          this.baseinfoData = res.data.data.enterpriseBasisInfo;//给基本信息赋值
          //红橙黄预警处理
          if(this.baseinfoData.warnType == '-' ||this.baseinfoData.warnType == undefined ||this.baseinfoData.warnType == ''||this.baseinfoData.warnType == 'null'){
            this.baseinfoData.warnType = null
          }
          //风险排查名单处理
          if(this.baseinfoData.riskList == '-' ||this.baseinfoData.riskList == undefined ||this.baseinfoData.riskList == ''||this.baseinfoData.riskList == 'null'){
            this.baseinfoData.riskList = null
          }
          //根据正面，负面，中性判断颜色
          res.data.data.OpinionInfoList.forEach((value,index)=>{
            if(res.data.data.OpinionInfoList[index].newssourceid >= 1){
              res.data.data.OpinionInfoList[index].color="#6CC925";
              res.data.data.OpinionInfoList[index].newssourceid = "正面";
              this.isbaseinfozheng=true;
            }else if (res.data.data.OpinionInfoList[index].newssourceid == 0) {
              res.data.data.OpinionInfoList[index].color = "#F78D37";
              res.data.data.OpinionInfoList[index].newssourceid = '中性'
              this.isbaseinfozhong=true;
            }else if (res.data.data.OpinionInfoList[index].newssourceid <= -1) {
              res.data.data.OpinionInfoList[index].color = "#F00000";
              res.data.data.OpinionInfoList[index].newssourceid = "负面";
              this.isbaseinfofu=true;
            }
          })
          this.enterpriseOpinionInfo = res.data.data.OpinionInfoList;//给舆情信息赋值

        }
      })
      .catch(err => {
        console.log(err);
      })
    },
    getRatingHistory() {
      //获得历史评级
      let datas = {
        enterpriseId:this.compCode
      }
      this.axios({
        method: 'post',
        url:'/CreditRatingInformation',
        data: datas
      })
      .then((res) => {
        if(res.data.success){
          //外部评级
          this.extRatingHistory = res.data.data.extRatingHistory;

          this.enterpriseRatingHistory = res.data.data.enterpriseRatingHistory;

          if(this.enterpriseRatingHistory.forcast&&this.enterpriseRatingHistory.grade&&this.enterpriseRatingHistory.radjustmemo){
            this.enterpriseRatingHistory.creditdate='—';
          }
          var all_list = [];
          res.data.data.Rating_All.forEach((value,index) => {
            all_list.push(((res.data.data.Rating_All[index].num/res.data.data.Rating_All[index].total)*100).toFixed(2));
          })
          //处理X轴
          var Rating_All_X=[];
          res.data.data.Rating_All.forEach((value,index) => {
            Rating_All_X.push(res.data.data.Rating_All[index].rating);
          })
          var xAxisData_All = [];//x轴
          res.data.data.X_ZHOU.forEach((value,index) => {
            xAxisData_All.push(res.data.data.X_ZHOU[index].rating);
          })
          for(var i=0;i<xAxisData_All.length;i++){
            if(xAxisData_All[i]!=Rating_All_X[i]){
              Rating_All_X.splice(i,0,xAxisData_All[i]);
              all_list.splice(i,0,0);
            }
          }
          //7.3处理
          // var xAxisData_AllLast=xAxisData_All[xAxisData_All.length-1];
          // xAxisData_AllLast=xAxisData_AllLast+'及以下';
          // xAxisData_All.splice(xAxisData_All.length-1,1,xAxisData_AllLast);
           //主体所在行业级别
          if(res.data.data.Rating_Industry){
            var Rating_Industry = [];
            var Rating_Industry_rating = [];
            res.data.data.Rating_Industry.forEach((value,index) => {
              Rating_Industry.push(((res.data.data.Rating_Industry[index].num/res.data.data.Rating_Industry[index].total)*100).toFixed(2));
              Rating_Industry_rating.push(res.data.data.Rating_Industry[index].rating)
            })
            for(var i = 0;i < xAxisData_All.length; i++) {
              if(xAxisData_All[i] != Rating_Industry_rating[i]) {
                Rating_Industry_rating.splice(i,0,xAxisData_All[i]);
                Rating_Industry.splice(i,0,0);
              }
            };
          }
          //本企业位置
          var Rating_Self_2 = [];
          var Rating_Self = res.data.data.Rating_Self;
          // console.log(Rating_Self);
          // if(Rating_Self=='D'){
          //   Rating_Self= Rating_Self+'及以下';
          // }
          //   console.log(Rating_Self);
          // console.log(Rating_Self);
          // xAxisData_All.forEach((value,index)=>{
          //   if(xAxisData_All[index]==Rating_Self){
          //     console.log(1);
          //   }
          // })
          res.data.data.Rating_All.forEach((value,index) => {
            if(res.data.data.Rating_All[index].rating==Rating_Self){
                Rating_Self_2.push(Rating_Self);
                Rating_Self_2.push(((res.data.data.Rating_All[index].num/res.data.data.Rating_All[index].total)*100).toFixed(2));
            }
          });

          // console.log(res.data);
          // console.log('X轴',xAxisData_All);
          // console.log('X轴值',all_list);
          // console.log(Rating_Self_2);
          //2级行业本企业位置
          var Rating_Self_3 = [];
          var Rating_Self = res.data.data.Rating_Self;
          res.data.data.Rating_Industry.forEach((value,index) => {
            if(res.data.data.Rating_Industry[index].rating==Rating_Self){
                Rating_Self_3.push(Rating_Self);
                Rating_Self_3.push(((res.data.data.Rating_Industry[index].num/res.data.data.Rating_Industry[index].total)*100).toFixed(2));
            }
          });
          var Rating_Self_Position='';
          var Rating_Self_color='';
          if(res.data.data.Rating_Self==null||res.data.data.Rating_Self=='null'){
             Rating_Self_Position='本企业未在级别分布'
             Rating_Self_color="#DDDDDD";
          }else{
             Rating_Self_Position='企业所在位置';
             Rating_Self_color="#FF0000";
          }


          //6-25日修改
          // var Rating_aside_2=[];
          // var Rating_aside=res.data.data.Rating_aside;
          // res.data.data.Rating_Industry.forEach((value,index)=>{
          //   if(res.data.data.Rating_Industry[index].rating==Rating_aside){
          //     Rating_aside_2.push(Rating_aside)
          //     Rating_aside_2.push(((res.data.data.Rating_Industry[index].num/res.data.data.Rating_Industry[index].total)*100).toFixed(2))
          //   }
          // })

          //YY评级ID_Rating_YY
        if(res.data.data.ID_Rating_YY){
          var yy_all_list = [];//产业债num
          var yy_xAxisData_All = [];//产业债rating
          res.data.data.ID_Rating_YY.forEach((value,index) => {
            yy_all_list.push(((res.data.data.ID_Rating_YY[index].num/res.data.data.ID_Rating_YY[index].total)*100).toFixed(2));
            yy_xAxisData_All.push(Number(res.data.data.ID_Rating_YY[index].rating.split('/')[0]));
          });
          if(yy_xAxisData_All.length<10){
            for(var i=0;i<10;i++){
              if(yy_xAxisData_All[i]!=i+1){
                yy_xAxisData_All.splice(i+1,0,i+1);
                yy_all_list.splice(i+1,0,0)
              }
            }
          }
        }
          //城投债
          if(res.data.data.CID_Rating_YY){
            var CID_Rating_yy = [];//城投债num
            var cid_Rating_yy_rating = [];//城投债rating
            res.data.data.CID_Rating_YY.forEach((value,index) => {
              CID_Rating_yy.push(((res.data.data.CID_Rating_YY[index].num/res.data.data.CID_Rating_YY[index].total)*100).toFixed(2));
              cid_Rating_yy_rating.push(Number(res.data.data.CID_Rating_YY[index].rating.split('/')[0]))
            })
            var dataArr=[0,0,0,0,0,0,0,0,0,0]//num
            if(cid_Rating_yy_rating.length<10){
              dataArr.forEach(function(value,index){
                for(var i=0;i<cid_Rating_yy_rating.length;i++){
                  if(index+1==cid_Rating_yy_rating[i]){
                    dataArr[index] = CID_Rating_yy[i];
                  }
                }
              })
            }
          }
          if(yy_xAxisData_All==undefined){
            yy_xAxisData_All=[1,2,3,4,5,6,7,8,9,10];
          }
          //YY本企业位置
        if(res.data.data.ID_Rating_Score){
            var yy_Rating_Self_2 = [];
            var yy_Rating_Self = res.data.data.ID_Rating_Score.split('/')[0];
            res.data.data.ID_Rating_YY.forEach((value,index) => {
              if(res.data.data.ID_Rating_YY[index].rating.split('/')[0]==yy_Rating_Self){
                  yy_Rating_Self_2.push(yy_Rating_Self);
                  yy_Rating_Self_2.push(((res.data.data.ID_Rating_YY[index].num/res.data.data.ID_Rating_YY[index].total)*100).toFixed(2));
              }
           });
         }
         if(res.data.data.CID_Rating_Score){
            var yy_CID_Rating_Score = [];
            var CID_Rating_Score = res.data.data.CID_Rating_Score.split('/')[0];
             res.data.data.CID_Rating_YY.forEach((value,index) => {
               if(res.data.data.CID_Rating_YY[index].rating.split('/')[0]==CID_Rating_Score){
                   yy_CID_Rating_Score.push(CID_Rating_Score);
                   yy_CID_Rating_Score.push(((res.data.data.CID_Rating_YY[index].num/res.data.data.CID_Rating_YY[index].total)*100).toFixed(2));
               }
             });
           }
           var enterprisePosition='';
           var color='';
           if((res.data.data.ID_Rating_Score==null||res.data.data.ID_Rating_Score=='null')&&(res.data.data.CID_Rating_Score==null||res.data.data.CID_Rating_Score=='null')){
              enterprisePosition='本企业无YY评分';
              color="#DDDDDD";
           }else{
              enterprisePosition='企业所在位置';
              color="#FF0000";
           }
          //中债资信二级行业
          var option = {
    		    tooltip: {
    		      trigger: 'axis',
              formatter: function(a) {
                 var res = '';
                 var nameList = a;
                 for(var i=0;i<a.length;i++){
                   if(nameList[i].data != undefined){
                     res += nameList[i].seriesName+":"+nameList[i].data+'%'+'<br/>'
                   }
                 }
                 res=res.split('<br/>');
                 return res[0]+'<br/>'+res[1];
               }
    		    },
    		    legend: {
    		      data:['中债资信全行业级别分布','主体所在行业级别分布',''+Rating_Self_Position+''],
              x:'20%',
              y:'bottom'
    		    },
            grid: {
    	        x: 40,
    	        y: 20,
    	        x2:20,
              y2:70,
              borderWidth:1
    	        //containLabel: true
    		    },
    		    toolbox: {
    		    	show: false,
    	        feature: {
    	          saveAsImage: {}
    	        }
    		    },
    		    xAxis: {
    	        type: 'category',
    	        boundaryGap: false,
    	        data:xAxisData_All,
              axisLabel:{
                rotate:45,
                fontFamily:'Times New Roman'
              }
    		    },
    		    yAxis:[ {
    		      type: 'value',
              splitLine:{
                show:true,
                lineStyle:{
                  color:'#CCC',
                  width:1,
                  type:'dashed'
                }
              },
              axisLabel:{
                formatter:'{value}%',
                fontFamily:'Times New Roman'
              }
    		    }],
    		    series:[
              {
                name:'中债资信全行业级别分布',
                type:'line',
                data:all_list,
                symbol:'none',//隐藏折线上的小点
                itemStyle:{
                  normal:{
                    color:"#0CC18D",
                    lineStyle:{
                      color:"#0CC18D"
                    }
                  }
                }
              },
              {
                name:'主体所在行业级别分布',
                type:"line",//line_scatter,
                symbolSize:6,
                //symbol:"circle",
                symbol:'none',
                data:Rating_Industry,
                itemStyle:{
                  normal:{
                    color:"#6C97ED",
                    lineStyle:{
                      color:"#6C97ED"
                    }
                  }
                }
              },
              {
                name:Rating_Self_Position,
                type:'scatter',
                symbol:"circle",//设置为实心圆
                symbolSize:6,
                data:[Rating_Self_2],
                itemStyle:{
                  normal:{
                    color:Rating_Self_color,
                    lineStyle:{
                      color:"#ff0000"
                    }
                  }
                }
              },
              {
                name:Rating_Self_Position,
                type:'scatter',
                symbol:"circle",//设置为实心圆
                symbolSize:6,
                data:[Rating_Self_3],
                itemStyle:{
                  normal:{
                    color:Rating_Self_color,
                    lineStyle:{
                      color:"#ff0000"
                    }
                  }
                }
              }
    			  ]
    			}
          let myChart = this.echarts.init(document.getElementById('echarts_line'));
          myChart.resize()
          myChart.clear()
        	myChart.setOption(option);
          var optionYY = {
    		    tooltip: {
    		      trigger: 'axis',
              formatter: function(a) {
                 var res = '';
                 var nameList = a;
                 for(var i=0;i<a.length;i++){
                   if(nameList[i].data != undefined){
                       res += nameList[i].seriesName+":"+nameList[i].data+'%'+'<br/>'
                   }
                 }
                 res=res.split('<br/>');
                 return res[0]+'<br/>'+res[1];
                 return res;
               }
    		    },
    		    legend: {
              data:['产业债','城投债',''+enterprisePosition+''],
              x:'20%',
              y:'bottom'
    		    },
            grid: {
              x: 40,
              y: 20,
              x2:20,
              y2:70,
              borderWidth:1
            },
    		    toolbox: {
    		    	show: false,
    	        feature: {
    	          saveAsImage: {}
    	        }
    		    },
    		    xAxis: {
    	        type: 'category',
    	        boundaryGap: false,
    	        data: yy_xAxisData_All,
              axisLabel:{
                fontFamily:'Times New Roman'
              }
    		    },
            yAxis:[ {
    		      type: 'value',
              splitLine:{
                show:true,
                lineStyle:{
                  color:'#CCC',
                  width:1,
                  type:'dashed'
                }
              },
              axisLabel:{
                formatter:'{value}%',
                fontFamily:'Times New Roman'
              }
    		    }],
    		    series:[
              {
                name:'城投债',
                type:'line',
                stack: '总量',
                symbol:'none',
                data:dataArr,
                itemStyle:{
                  normal:{
                    color:"#0CC18D",
                    lineStyle:{
                      color:"#0CC18D"
                    }
                  }
                }
              },
              {
                name:'产业债',
                type:"line",
                symbolSize:6,
                //symbol:"circle",
                symbol:'none',
                data:yy_all_list,
                itemStyle:{
                  normal:{
                    color:"#6C97ED",
                    lineStyle:{
                      color:"#6C97ED"
                    }
                  }
                }
              },{
                name:enterprisePosition,
                type:'scatter',
                symbol:"circle",//设置为实心圆
                symbolSize:6,
                data:[yy_Rating_Self_2],
                itemStyle:{
                  normal:{
                    color:color,
                    lineStyle:{
                      color:"#ff0000"
                    }
                  }
                }
              },
              {
                name:'企业所在位置',
                type:'scatter',
                symbol:"circle",//设置为实心圆
                symbolSize:6,
                data:[yy_CID_Rating_Score],
                itemStyle:{
                  normal:{
                    color:"#ff0000",
                    lineStyle:{
                      color:"#ff0000"
                    }
                  }
                }
              }

    			  ]
    			}
          let myChartYY =   this.echarts.init(document.getElementById('echarts_line_YY'));
          myChartYY.resize()
          myChartYY.setOption(optionYY);
        }
      })
      .catch(err => {
        console.log(err);
      })
    },
    changeRatingPane(item){
      //切换echarts
      this.ratingFlag = item;
    },
    //切换锚点显示隐藏
    anchorFold(){
      this.jumpShowFlag = !this.jumpShowFlag
    },
    //锚点
    jump(id) {
      this.jumpFlag = id
      let anchor=this.$el.querySelector(id)
      $(".subjectInfo")[0].scrollTop=anchor.offsetTop
    },

    timeChange(row,col,val,index) {
      // 时间转换
      if(col.property=="creditdate"){
        let valnew
        if(val&&val!='null'){
         valnew = this.timeformatter(val,'yyyy-mm-dd')
       }else{
         valnew='—'
       }
        return  valnew;

      }else if (col.property=="warnDate") {
        let valnew
        if(val){
         valnew = this.timeformatter(val,'yyyy-mm-dd')
       }else{
         valnew='—'
       }
        return  valnew;
      }else if (col.property=="primaryIndustry") {
        let valnew
        if(val&&val!='null'){
         valnew = val
       }else{
         valnew='—'
       }
        return  valnew;
      }else if (col.property=="forcast") {
        let valnew
        if(val&&val!='null'&&val!='-'){
         valnew = val
       }else{
         valnew='—'
       }
        return  valnew;
      }else
      if (col.property=="listdate") {
        let valnew
        if(val){
         valnew = this.timeformatter(val,'yyyy-mm-dd')
       }else{
         valnew='—'
       }
        return  valnew;
      }else if (col.property=="delistdate") {
        let valnew
        if(val){
         valnew = this.timeformatter(val,'yyyy-mm-dd')
       }else{
         valnew='—'
       }
        return  valnew;
      }else if (col.property == "declaredate") {
        let valnew
        if(val){
         valnew = this.timeformatter(val,'yyyy-mm-dd')
       }else{
         valnew='—'
       }
        return  valnew;
      }else if(col.property == "clstype") {
        let valnwm;// 特殊条款
        if(val) {
          valnwm = this.globalData.basePageInfo.subjectInfoData.speClause[Number(val)-1]
        }
        else {
          valnwm = '—';
        }
        return valnwm;
      }else if(col.property == "couponrate") {
        let valnwm;//债卷发行-票面利率

        if(val) {
          valnwm = this.globalFC.scientificNotation(Number(val).toFixed(2));
        }
        else {
          valnwm = '—';
        }
        return valnwm;
      }else if(col.property == "amountOfMoney") {
        let valnwm;//债卷发行-最近一期现金流（金额）
        if(val) {
          valnwm = this.globalFC.scientificNotation(Number(val).toFixed(2));
        }
        else {
          valnwm ='—';
        }
        return valnwm;
      }else if(col.property == "balance") {
        let valnwm;//债卷发行金额处理
        if(val) {
          valnwm = this.globalFC.scientificNotation(Number(val/100000).toFixed(2));
        }
        else {
          valnwm = '—';
        }
        return valnwm;
      }else
      //  if(col.property == "changetype") {
      //   let valnwm;//最近一期现金流（类型）

      //   if(val) {
      //     valnwm = this.globalData.basePageInfo.subjectInfoData.crashNowBlow[Number(val)-1]
      //   }
      //   else {
      //     valnwm = '—';
      //   }
      //   return valnwm;
      // }else
       if(col.property == "radjustmemo") {
    //历史评级情况的变动情况
        let valnwm;
        if(val) {
          valnwm = this.globalData.basePageInfo.subjectInfoData.radjustmemo[Number(val)-1]
        }
        else {
          valnwm = '—';
        }
        return valnwm;
      }else if(col.property == "exenhancemode") {
        let valnwm;
        if(val) {
          valnwm = this.globalData.basePageInfo.subjectInfoData.exenhancemode[Number(val)]
        }  else {
          valnwm = '—';
        }
        return valnwm;
      }else if(col.property == "newestexptrating") {
        let valnwm;
        if(val) {
          valnwm = this.globalData.basePageInfo.subjectInfoData.newestexptrating[Number(val-1)]
        }  else {
          valnwm = '—';
        }
        return valnwm;
      }else  if(col.property == "remaineYears") {
        let valnwm;
        if(Number(val)) {
          valnwm=Number(val).toFixed(2);
        }  else {
          valnwm = '—';
        }
        return valnwm;
      }else if(col.property == "holderrto") {
        let valnwm;
        if(val) {
          valnwm = Number(val).toFixed(2)+'%';
        }  else {
          valnwm = '—';
        }
        return valnwm;
      }else{
        if(val==""||val=='null'||val==undefined||val==null){
          return "—";
        }else if(val!=""){
          return val;
        }
      }
    },
    timeformatter(time,type){
      if(time!='—'){
        time = new Date(time);
        let Y = time.getFullYear() + '-',
        M = (time.getMonth()+1 < 10 ? '0'+(time.getMonth()+1) : time.getMonth()+1) + '-',
        D = time.getDate()< 10 ? '0'+time.getDate() : time.getDate(),
        H = ' ' + (time.getHours()< 10 ? '0'+time.getHours() : time.getHours()),
        MM = ':' + (time.getMinutes()< 10 ? '0'+time.getMinutes() : time.getMinutes());
        if(type=='yyyy-mm-dd') {
          time = Y+M+D;
        }
        else if(type=='yyyy-mm-dd/hh:mm') {
          time = Y+M+D+H+MM;
        };
      };
      return time;
    }
  }
}
