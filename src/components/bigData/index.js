import globalFilter from '../../assets/global/globalFilter.js'
export default {
  name: 'bigData',
  data() {
    return {
      BigDataList: [
        {name: '工商信息', id: 1,path:'/ICBC'},
        {name: '司法信息', id: 2,path:'/judicial',disabled:'true'},
        {name: '海关信息', id: 3,path:'/customs',disabled:'true'},
        {name: '税收信息', id: 4,path:'/revenue',disabled:'true'}
      ],
      activeItem: 0
    }
  },
  created(){

  }
}
