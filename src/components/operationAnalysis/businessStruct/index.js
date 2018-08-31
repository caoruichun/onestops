export default {
  name: 'businessStruct',
  data () {
    return {
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
      businessData: [
        {time: 2014,
          main_jichu: 1000,main_jichu_zb:20, main_tong: 1500,main_tong_zb: 20,
          cost_jichu: 600,cost_jichu_zb:10, cost_tong: 800,cost_tong_zb:10,
          profit_jichu: 800, profit_jichu_zb:15,profit_tong: 1000,profit_tong_zb:15,
          m_profit_jichu: 2000, m_profit_tong: 4000},
        {time: 2015,
          main_jichu: 1000,main_jichu_zb:20, main_tong: 1500,main_tong_zb: 20,
          cost_jichu: 600,cost_jichu_zb:10, cost_tong: 800,cost_tong_zb:10,
          profit_jichu: 800, profit_jichu_zb:15,profit_tong: 1000,profit_tong_zb:15,
          m_profit_jichu: 2000, m_profit_tong: 4000},
        {time: 2016,
          main_jichu: 1000,main_jichu_zb:20, main_tong: 1500,main_tong_zb: 20,
          cost_jichu: 600,cost_jichu_zb:10, cost_tong: 800,cost_tong_zb:10,
          profit_jichu: 800, profit_jichu_zb:15,profit_tong: 1000,profit_tong_zb:15,
          m_profit_jichu: 2000, m_profit_tong: 4000},
        {time: 2017,
          main_jichu: 1000,main_jichu_zb:20, main_tong: 1500,main_tong_zb: 20,
          cost_jichu: 600,cost_jichu_zb:10, cost_tong: 800,cost_tong_zb:10,
          profit_jichu: 800, profit_jichu_zb:15,profit_tong: 1000,profit_tong_zb:15,
          m_profit_jichu: 2000, m_profit_tong: 4000},
      ],
      businessData1: [
        {time: 2018,
          main_jichu: 1000,main_jichu_zb:20, main_tong: 1500,main_tong_zb: 20,
          cost_jichu: 600,cost_jichu_zb:10, cost_tong: 800,cost_tong_zb:10,
          profit_jichu: 800, profit_jichu_zb:15,profit_tong: 1000,profit_tong_zb:15,
          m_profit_jichu: 2000, m_profit_tong: 4000},
        {time: 2019,
          main_jichu: 1000,main_jichu_zb:20, main_tong: 1500,main_tong_zb: 20,
          cost_jichu: 600,cost_jichu_zb:10, cost_tong: 800,cost_tong_zb:10,
          profit_jichu: 800, profit_jichu_zb:15,profit_tong: 1000,profit_tong_zb:15,
          m_profit_jichu: 2000, m_profit_tong: 4000}
      ],
    }
  },
  created: function () {
    this.axios({
      method: 'post',
      url:'',
      params:{
        start_time: this.date1,
        stop_time: this.date2
      }
    }).then(response=>{
      console.log(response);
      this.businessData1 = response.data;
    }).catch(error=>{
      console.log(error);
    })
  },
  methods: {
    //   条件搜索
    bs_search() {
      console.log(this.date1+"-"+this.date2);
      this.businessData = this.businessData1;
      // this.axios({
      //   method: 'post',
      //   url: '/',
      //   params: {
      //     compCode: '10010'
      //   },
      //   responseType: 'arraybuffer',
      // })
      // .catch(err => {
      //   console.log(err);
      // })
    },
    bs_searchAll() {
      console.log(this.date1+"-"+this.date2);
      this.businessData = this.businessData1;
    }
  }
}
