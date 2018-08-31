export default {
  name: 'lineChart',
  data () {
    return {
      option: {
        title: {                    //标题
          text: '同行业拆借利率'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {           //图标
          data:['SHIBOR隔夜','SHIBOR一周']
        },
        grid: {         //布局
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {            //x轴
          type: 'category',
          boundaryGap: false,
          data: ['一期','二期','三期','四期','一期','二期','三期','四期','一期','二期','三期','四期','一期','二期','三期','四期']
        },
        yAxis: {              //y轴
          type: 'value'
        },
        series:[         //用于指定图标的类型（饼图、柱状图）之类
          {
            name:'SHIBOR隔夜',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234,120, 132, 101, 134,120, 132, 101, 134,120, 132, 101, 134]
          },
          {
            name:'SHIBOR一周',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234,120, 132, 101, 134,120, 132, 101, 134,120, 132, 101, 134]
          }
        ]
      },
      option1:{
        title: {                    //标题
          text: '公开市场操作界面',
          subtext: '虚拟数据'
        },
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
            fontsize: 18
          },
          // position: function(pos,params,el,elRect,size){
          //   var obj = {top: 10};
          //   obj[['left','right'][+(pos[0]<size.viewSize[0]/2)]] =30;
          //   return obj;
          // },
          extraCssText:'width: 180px'
        },
        legend: {           //图标
          left: 'center',
          data:['操作规模','投放规模','回笼规模']
        },
        grid: {         //布局
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true  //决定的是包括了坐标轴标签在内的所有内容所形成的矩形的位置－－－－防止标签溢出的
        },
        xAxis: {            //x轴
          type: 'category',
          name: '时间轴',
          nameLocation: 'end',
          boundaryGap: true,
          axisLabel:{
              rotate: 90,
              color: '#00f',
          },
          axisLine:{
            onZero: true
          },
          nameTextStyle:{
            color: '#f0f',
            fontStyle: 'italic'
          },
          data: ['2013/1/3','2013/1/4','2013/1/5','2013/1/6','2013/1/7','2013/1/8','2013/1/9','2013/1/10','2013/1/11',
                  '2013/1/12','2013/1/13','2013/1/14','2013/1/15','2013/1/16','2013/1/17','2013/1/18','2013/1/19','2013/1/20','2013/1/21',
                          '2013/1/22']
        },
        yAxis: [       //y轴
          {
            type: 'value',
            name: '亿元',
            nameLocation: 'end',
            boundaryGap: true,
            position: 'left',
            data:[-1000,-800,-600,-400,0,200,400,600,800,1000],

          },
          {
            type: 'value',
            name: '亿元',
            nameLocation: 'end',
            boundaryGap: true,
            position: 'right',
            axisLine:{
              onZero: false,
              lineStyle:{
                color: '#f00'
              }
            },
            data:[0,200,400,600,800,1000,1200,1400,1600,1800],

          }

        ],
        dataZoom:[
          {
            type:'slider',
            xAxisIndex: [0],
            filterMode:'filter',
            bottom: 10
          }
        ],
        series:[         //用于指定图标的类型（饼图、柱状图）之类
          {
            name:'操作规模',
            type:'bar',
            barWidth: '20%',
            color: '#ff0',
            stack: '总量',
            data:[-220, 182, 191, -234,120, 132, 101, -134,120, 132, -101, 134,120, 132, 101, 134]
          },
          {
            name:'投放规模',
            type:'line',
            symbol: '',
            stack: '总量',
            yAxisIndex: 1,
            data:[-220, -182, 191, -234,-120, 132, 101, -134,120, 132, -101, 134,-120, 132, 101, 134]
          },
          {
            name:'回笼规模',
            type:'line',
            symbol: 'emptyCircle',
            stack: '总量',
            data:[220, 182, 191, 234,120, 132, 101, 134,120, 132, 101, 134,120, 132, 101, 134]
          }
        ]
      }
    }
  },
  mounted() {
    // ECharts数据可视化
    let myChart = this.echarts.init(document.getElementById('tonghang'));
    myChart.setOption(this.option);
    let myChart1 = this.echarts.init(document.getElementById('gongkai'));
    myChart1.setOption(this.option1);
  },
  methods: {

  }

}
