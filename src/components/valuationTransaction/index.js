import globalFilter from '../../assets/global/globalFilter.js'
export default {
  name: 'valutionTranscation',
  data () {
    return {
      BigDataList: [
        {name: '公开市场操作', id: 0},
        {name: '同行业拆借利率', id: 1},
        {name: '质押回购利率', id: 2},
        {name: '国开债利率', id: 3}
      ],
      tabData:[
        '公开市场操作','同行业拆借利率','质押回购利率','国开债利率'
      ],
      // activeItem: 0,
      datashow:0,
      table_headcxsc:[],
      // 存续券表格信息
      tableData: '',
      // 分页信息
      pageInfo: {
        pageSize: 10, // 条数
        pageNum: 5, // 页码
        pageTotal: '', // 总页数
        sortBy: '', // 选择的排序列
        sort: 0, // 升降序（0：升；1：降）
      },
      orgName:'',
      depName:'',
      cunxuFlag: false, // 存续券交易市场是否显示
      companyName:''
    }
  },
  mounted() {
    // ECharts数据可视化
    let _this =  this;
    _this.getTqBdRepurchaseList();//获得公开市场操作列表
  },
  created(){
      if(this.globalInfo.usrID == ""){
        this.globalInfo.usrID = ''
      }
      this.getUsrInfo()
      this.table_headcxsc =  this.globalData.basePageInfo.valutionTranscation.table_headcxsc;
      $('.Nav span').eq(0).addClass('active')
      if(this.globalInfo.companyName==""){
        this.companyName  ='中央汇金投资有限责任公司'
      }else{
        this.companyName = this.globalInfo.companyName
      }
  },
  methods: {
    QBJurisdiction(){
      this.$router.push({
        name: 'QBJurisdiction',
      })
    },
    change($index) {
      this.datashow = $index;
      $('.Nav span').eq($index).addClass('active').siblings().removeClass('active')
      if($index == 0){
        this.getTqBdRepurchaseList();//获得公开市场操作列表
      }else if($index == 1){
        this.getTqRtShiborList();//获取同行拆借利率列表
      }else if($index == 2){
        this.getTqQtRepoList();// 获取质押回购利率列表
      }else{
        this.getTqQtYieldcurveList();//获得国家开债利率列表
      }
    },
    changePage(num) {
      this.pageInfo.pageNum = num; // 页码
      // console.log(this.pageInfo.pageNum);
      this.getvoucherMarketTrading(this.pageInfo.pageNum,this.pageInfo.sortBy, this.pageInfo.sort,this.orgName,this.depName);
    },
    // 表头首列
    renderHeader(h, info) {
      return h('span',[
        h('span', this.table_headcxsc[info.$index].label),
        h('i', {
          'class': 'fa fa-caret-up',
          'aria-hidden': true
        }),
        h('i', {
          'class': 'fa fa-caret-down',
          'aria-hidden': true
        })
      ])
    },
    // 表格排序
    tableOrder(col,e) {
      // alert(JSON.parse(JSON.stringify(col)).property)
      // this.pageInfo.sort = 0
      this.pageInfo.sortBy = JSON.parse(JSON.stringify(col)).property
      if(this.pageInfo.sort==0) {
        this.pageInfo.sort = 1;
      }
      else if (this.pageInfo.sort==1) {
        this.pageInfo.sort = 0;
      };
      // console.log(this.pageInfo.pageNum,this.pageInfo.sortBy,this.pageInfo.sort)
      this.getvoucherMarketTrading(this.pageInfo.pageNum,this.pageInfo.sortBy,this.pageInfo.sort,this.orgName,this.depName);
    },
    // 判断表格单元格内容是否为空
    isNUll(row,column,val,index){
      // 处理数字的科学计数法
      if((val==''&&val!=0)||(val=='null'&&val!=0 )|| (val == null&&val!=0)){
        return "—";
      }else {
        if(column.label == "债券余额" || column.label == "最高成交价" || column.label == "最低成交价" || column.label == "平均成交" || column.label == "换手率"){
          if(val) {
            return  this.globalFC.scientificNotation(Number(val).toFixed(2))
          }
          else {
            return '—';
          }
        }else if(column.label == "日期"){
          val= Number(val.slice(0,4))+'/'+ Number(val.slice(4,6))+'/'+Number(val.slice(6,8))
          return this.timeFilter(val,'yyyy-mm-dd')
        }else if(column.label == "涨跌BP"){
          if(val==0){
            return '0.00';
          }
        }else{
          return val;
        }
      }
    },
    // 时间格式转换
    timeFilter: (time,type) => {
      time = new Date(time);
      let Y = time.getFullYear() + '-',
      M = (time.getMonth()+1 < 10 ? '0'+(time.getMonth()+1) : time.getMonth()+1) + '-',
      D = time.getDate()< 10 ? '0'+time.getDate() : time.getDate(),
      H = ' ' + (time.getHours()< 10 ? '0'+time.getHours() : time.getHours()),
      MM = ':' + (time.getMinutes()< 10 ? '0'+time.getMinutes() : time.getMinutes()),
      y = time.getFullYear(),
      m = (time.getMonth()+1 < 10 ? '0'+(time.getMonth()+1) : time.getMonth()+1);
      if(type=='yyyy-mm-dd') {
        time = Y+M+D;
      }
      else if(type=='yyyy-mm-dd/hh:mm') {
        time = Y+M+D+H+MM;
      }else if(type=='yyyy.mm.dd/hh:mm') {
        time = y+'年'+m+'月'+D+'日'+H+MM;
      };
      return time;
    },
    // 导出excel
    exportEXCEL() {
      this.axios({
        method: 'POST',
        url: '/VoucherMarketTradingExport',
        responseType: 'arraybuffer',
        params:{
          companyName:this.companyName
        },
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
    },
    // 获取用户名称
    getUsrInfo() {
     this.axios({
       method:'post',
       url:'/getUserInfo',
       data:{
         phone: this.globalInfo.usrID // 用户ID
       }
     })
     .then((res)=>{
       if(res.data.success){
        //  console.log(res.data);
         this.orgName = res.data.data.orgName
         this.depName = res.data.data.deptName
         this.getvoucherMarketTrading('','','',this.orgName,this.depName)
       }else {

       }
     })
   },
    // 存续券交易市场
    getvoucherMarketTrading(pageNum,sortBy,sort,orgName,depName){
      // 表格信息
      this.axios({
        method:'POST',
        url:'/voucherMarketTrading',
        params:{
          pageNum: pageNum,
          sortBy: sortBy,
          sort:sort,
          orgName: orgName,
          depName: depName,
          companyName:this.companyName
        }
      }).then((res)=>{
        // console.log(res.data);
        if(res.data.statusCode){
          // res.data.statusCode    1为没有QB权限  0为有QB权限
          this.cunxuFlag = false
        }else{
          this.cunxuFlag = true
          this.tableData = res.data.data.list;
         //this.tableData.forEach((value,index)=>{
            //console.log(value.riseAndFallBp ==0);
            //if(value.riseAndFallBp == 0){
            //  value.riseAndFallBp == 0.00
              //console.log(value.riseAndFallBp);
          //  }
        //  })
           this.pageInfo.pageTotal = res.data.data.pages; // 总页数
          this.pageInfo.pageNum = res.data.data.pageNum; // 总页数
        }
      }).catch(err => {
        // console.log(err)
      });
    },
    // 获取同行拆借利率列表
    getTqRtShiborList(){
      this.axios({
        method:'POST',
        url:'/TqRtShiborList'
      }).then((res)=>{
        let TqRtShiborX =[]
        let oneDay = []
        let oneWeek = []
        res.data.data.list.forEach((value,index)=>{
          let date1=String(value.tradedate)
          let dateYear1=date1.slice(0,4)
          let dateMont1=date1.slice(4,6)
          let dateDay1=date1.slice(6,8)
          let startdate1 = dateYear1 + '-' + dateMont1 + '-' + dateDay1;
          TqRtShiborX.push(startdate1);
          oneDay.push(value.sh001d)
          oneWeek.push(value.sh001w)
        })
        let option={
          tooltip: {
            trigger: 'axis',
            textStyle:{
              fontFamily:'Times New Roman'
            }
          },
          legend: {           //图标
            data:['SHIBOR隔夜','SHIBOR一周'],
            bottom:'10%'
          },
          grid: {         //布局
            left: '3%',
            right: '4%',
            bottom: '20%',
            containLabel: true
          },
          xAxis: {            //x轴
            type: 'category',
            boundaryGap: false,
            axisLabel:{
                // rotate: 90,
                // color: '#00f',
                fontFamily:'Times New Roman'
            },
            data: TqRtShiborX
          },
          yAxis: {              //y轴
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
            },
            min: function(value){
              return value.min
            }
          },
          series:[         //用于指定图标的类型（饼图、柱状图）之类
            {
              name:'SHIBOR隔夜',
              type:'line',
              symbol: 'none',
              color:'#46a0fc',
              data:oneDay
            },
            {
              name:'SHIBOR一周',
              type:'line',
              symbol: 'none',
              color:'#f36d6f',
              data:oneWeek
            }
          ],
          dataZoom:[
            {
              type:'slider',
              xAxisIndex: 0,
              filterMode:'filter',
              bottom:-8,
              start:93,
              end: 100
            }
          ],
        }
        let myChart = this.echarts.init(document.getElementById('tonghang'));
        myChart.resize()
        myChart.clear()
        myChart.setOption(option);
      }).catch(error=>{
        // console.log(error)
      })
    },
    //获取质押回购利率列表
    getTqQtRepoList(){
      this.axios({
        method:'POST',
        url:'/TqQtRepoList'
      }).
      then((res)=>{
        let ZYdata = res.data.data.list
        // console.log('获取质押回购利率列表');
        // console.log(res.data)
        let TqQtRepo =[]
        let R001 = []
        let R007 = []
        let R014 = []
        let R021 = []
        // if(!(ZYdata[0]=="")){
        //   ZYdata[0].forEach((value,index)=>{
        //     let date1=value.tradedate
        //     let dateYear1=date1.slice(0,4)
        //     let dateMont1=date1.slice(4,6)
        //     let dateDay1=date1.slice(6,8)
        //     let startdate1 = dateYear1 + '-' + dateMont1 + '-' + dateDay1;
        //     TqQtRepo.push(startdate1)
        //   })
        // }else
        let maxValue = 0
        let maxIndex = 0
        for(let i=0;i<ZYdata.length;i++){
          if(ZYdata[i].length>maxValue){
            maxIndex = i
          }
        }
        // console.log(maxIndex);
        ZYdata[maxIndex].forEach((value,index)=>{
          let date1=value.tradedate
          let dateYear1=date1.slice(0,4)
          let dateMont1=date1.slice(4,6)
          let dateDay1=date1.slice(6,8)
          let startdate1 = dateYear1 + '-' + dateMont1 + '-' + dateDay1;
          TqQtRepo.push(startdate1)
        })
        ZYdata[0].forEach((value,index)=>{
          R001.push(value.tdayavginterate)
        })
        ZYdata[1].forEach((value,index)=>{
          R007.push(value.tdayavginterate)
        })
        ZYdata[2].forEach((value,index)=>{
          R014.push(value.tdayavginterate)
        })
        ZYdata[3].forEach((value,index)=>{
          R021.push(value.tdayavginterate)
        })
        let r021 = ''
        let r021color =''
        if(R021==""||R021=="null"||R021==null){
          r021 ='R-021: 暂无数据'
          r021color = '#ddd'
        }else{
          r021 ='R-021: 加权平均'
          r021color = '#49feed'
        }
        // console.log(R001)
        // console.log(R007)
        // console.log(R014)
        // console.log(R021)
        let option1 ={
          tooltip: {
            trigger: 'axis',
            textStyle:{
              fontFamily:'Times New Roman'
            }
          },
          legend: {           //图标
            data:['R-001: 加权平均','R-007: 加权平均','R-014: 加权平均',r021],
            bottom: '10%'
          },
          grid: {         //布局
            left: '3%',
            right: '4%',
            bottom: '20%',
            containLabel: true
          },
          xAxis: {            //x轴
            type: 'category',
            boundaryGap: false,
            axisLabel:{
                // rotate: 90,
                // color: '#00f',
                fontFamily:'Times New Roman'
            },
            data: TqQtRepo
          },
          yAxis: {              //y轴
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
            },
            min: function(value){
              return value.min
            }
          },
          series:[         //用于指定图标的类型（饼图、柱状图）之类
            {
              name:'R-001: 加权平均',
              type:'line',
              symbol: 'none',
              color:'#9a8abb',
              data:R001
            },
            {
              name:'R-007: 加权平均',
              type:'line',
              symbol: 'none',
              color:'#e9735b',
              data:R007
            },
            {
              name:'R-014: 加权平均',
              type:'line',
              symbol: 'none',
              color:'#f60eb5',
              data:R014
            },
            {
              name: r021,
              type:'line',
              symbol: 'none',
              color: r021color,
              data: R021
            }
          ],
          dataZoom:[
            {
              type:'slider',
              xAxisIndex: 0,
              filterMode:'filter',
              bottom:-8,
               start:93,
               end:100
            }
          ],
        }
        let myChart1 = this.echarts.init(document.getElementById('zhiya'));
        myChart1.resize()
        myChart1.clear()
        myChart1.setOption(option1);
      }).catch(error=>{
        // console.log(error)
      })
    },
    //获取国开债券收益列表
    getTqQtYieldcurveList(){
      this.axios({
        method:'POST',
        url:'/TqQtYieldcurveList'
      })
      .then((res)=>{
        // console.log(res.data.data.list)
        let data = res.data.data.list
        let guoTime =[]
        let one = []
        let three = []
        let five = []
        let ten = []
        let maxValue = 0
        let maxIndex = 0
        for(let i=0;i<data.length;i++){
          if(data[i].length>maxValue){
            maxIndex = i
          }
        }

        data[maxIndex].forEach((value,index)=>{
          let date1=value.tradedate
          let dateYear1=date1.slice(0,4)
          let dateMont1=date1.slice(4,6)
          let dateDay1=date1.slice(6,8)
          let startdate1 = dateYear1 + '-' + dateMont1 + '-' + dateDay1;
          guoTime.push(startdate1)
        })
        data[0].forEach((value,index)=>{
          one.push(value.yield)
        })
        data[1].forEach((value,index)=>{
          three.push(value.yield)
        })
        data[2].forEach((value,index)=>{
          five.push(value.yield)
        })
        data[3].forEach((value,index)=>{
          ten.push(value.yield)
        })
        let option5 ={
          tooltip: {
            trigger: 'axis',
            textStyle:{
              fontFamily:'Times New Roman'
            }
          },
          legend: {           //图标
            data:['国开债到期收益：1年','国开债到期收益：3年','国开债到期收益：5年','国开债到期收益：10年'],
            bottom: '10%'
          },
          grid: {         //布局
            left: '3%',
            right: '4%',
            bottom: '20%',
            containLabel: true
          },
          xAxis: {            //x轴
            type: 'category',
            boundaryGap: false,
            axisLabel:{
                // rotate: 90,
                // color: '#00f',
                fontFamily:'Times New Roman'
            },
            data: guoTime
          },
          yAxis: {              //y轴
            type: 'value',
            min: function(value){
              return value.min
            },
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
          },
          series:[         //用于指定图标的类型（饼图、柱状图）之类
            {
              name:'国开债到期收益：1年',
              type:'line',
              symbol: 'none',
              color:'#46a0fc',
              data:one
            },
            {
              name:'国开债到期收益：3年',
              type:'line',
              symbol: 'none',
              color:'#f36d6f',
              data:three
            },
            {
              name:'国开债到期收益：5年',
              type:'line',
              symbol: 'none',
              color:'#a998df',
              data:five
            },
            {
              name:'国开债到期收益：10年',
              type:'line',
              symbol: 'none',
              color:'#f60eb5',
              data:ten
            }
          ],
          dataZoom:[
            {
              type:'slider',
              xAxisIndex: 0,
              filterMode:'filter',
              bottom:-8,
              start:40,
              end:100
            }
          ],
        }
        let myChart5 = this.echarts.init(document.getElementById('zhaiwu'));
        myChart5.resize()
        myChart5.clear()
        myChart5.setOption(option5);
      }).catch(error=>{
        // console.log(error)
      })

    },
    // 获得公开市场操作列表
    getTqBdRepurchaseList(){
      this.axios({
        method:'POST',
        url:'/TqBdRepurchaseList'
      }).then((res)=>{
        let GKdata= res.data.data.list
        let dataX = []
        let Touf= []
        let Huil = []
        let Jingtf = []
        let maxValue = 0
        let maxIndex = 0
        for(let i=0;i<GKdata.length;i++){
          if(GKdata[i].length>maxValue){
            maxIndex = i
          }
        }
        GKdata[maxIndex].forEach((value,index)=>{
          var date=value.declaredate
          var dateYear=date.slice(0,4)
          var dateMont=date.slice(4,6)
          var dateDay=date.slice(6,8)
          var startdate = dateYear + '-' + dateMont + '-' + dateDay;
          dataX.push(startdate)
        })

        GKdata[0].forEach((value,index)=>{
          Touf.push(value.tradevol)
        })
        GKdata[1].forEach((value,index)=>{
          Huil.push(value.tradevol)
        })
        GKdata[2].forEach((value,index)=>{
          Jingtf.push(value.tradevol)
        })
        //滚动条数据处理
        // var olsPos = []
        // var year = Number(dataX[dataX.length-1].slice(0,4))
        // var month =  Number(dataX[dataX.length-1].slice(6,7))
        // if(month<=3){
        //   if(month==3){
        //     year--;
        //     month=12;
        //   }else if(month==2){
        //     year--;
        //     month = 11
        //   }else if(month==1){
        //     year--;
        //     month = 10
        //   }
        // }else{
        //    month = month-3
        // }
        //
        // dataX.forEach((value,index)=>{
        //   let year1 = Number(value.slice(0,4))
        //   let month1 =  Number(value.slice(6,7))
        //   console.log(year1 == year && month1 == month);
        //   if(year1 == year && month1 == month){
        //     olsPos.push(index)
        //     // console.log('index',index);
        //     console.log('olsPos',olsPos);
        //   }
        // })
        //
        // console.log('dataX[index]',dataX[index]);
        // console.log('dataX[dataX.lenght-1]',dataX[dataX.lenght-1]);
        //
        // let startCode = parseInt((olsPos/dataX.length)*90)
        // let lastNum = dataX[dataX.length-1].slice(5,7)
        let option2={
          tooltip: {        //提示框组件
            trigger: 'axis',
            axisPointer:{
              type: 'cross'
            },
            backgroundColor: '#eee',
            borderWidth: 1,
            borderColor:'#000',
            padding: 10,
            textStyle:{
              color: '#000',
              fontsize: 18,
              fontFamily:'Times New Roman'
            },
            extraCssText:'width: 180px'
          },
          legend: {           //图标
            left: 'center',
            data:['操作规模','投放规模','回笼规模'],
            bottom: '10%'
          },
          grid: {         //布局
            left: '3%',
            right: '4%',
            bottom: '20%',
            containLabel: true  //决定的是包括了坐标轴标签在内的所有内容所形成的矩形的位置－－－－防止标签溢出的
          },
          xAxis: {            //x轴
            type: 'category',
            // name: '时间轴',
            nameLocation: 'end',
            boundaryGap: true,
            axisLabel:{
                // rotate: 90,
                color: '#00f',
                fontFamily:'Times New Roman'
            },
            axisLine:{
              onZero: true
            },
            nameTextStyle:{
              color: '#f0f'
            },
            data: dataX,

          },
          yAxis: [       //y轴
            {
              type: 'value',
              nameLocation: 'end',
              boundaryGap: true,
              position: 'left',
              splitLine:{
                show:true,
                lineStyle:{
                  color:'#CCC',
                  width:1,
                  type:'dashed'
                }
              },
              axisLabel:{
                formatter:'{value}亿元',
                fontFamily:'Times New Roman'
              }
            },
            {
              type: 'value',

              nameLocation: 'end',
              boundaryGap: true,
              position: 'right',
              splitLine:{
                show:true,
                lineStyle:{
                  color:'#CCC',
                  width:1,
                  type:'dashed'
                }
              },
              axisLine:{
                onZero: false,
                lineStyle:{
                  color: '#f00'
                }
              },
              axisLabel:{
                formatter:'{value}亿元',
                fontFamily:'Times New Roman'
              }
            }

          ],
          dataZoom:[
            {
              type:'slider',
              xAxisIndex: 0,
              filterMode:'filter',
              bottom: -8,
              start:90,
              end:100
              // minValueSpan: dataX[olsPos[0]],
              // maxValueSpan: dataX[dataX.length-1]
            }
          ],
          series:[         //用于指定图标的类型（饼图、柱状图）之类
            {
              name:'操作规模',
              type:'bar',
              symbol: 'none',
              barWidth: '20%',
              color: '#fcc643',
              data:Jingtf
            },
            {
              name:'投放规模',
              type:'line',
              symbol: 'none',
              color:'#35b1f1',
              lineStyle:{
                color:'#35B1f1'
              },
              yAxisIndex: 1,
              data: Touf
            },
            {
              name:'回笼规模',
              type:'line',
              symbol: 'none',
              color:'#ed574e',
              lineStyle:{
                color:'#ed574e'
              },
              data:Huil
            }
          ]
        }
        let myChart2 = this.echarts.init(document.getElementById('gongkai'));
        myChart2.resize()
        myChart2.clear()
        myChart2.setOption(option2);
      }).catch(error=>{
        // console.log(error)
      })
    },

  }

}
