export default {
  name: 'sideBar',
  data () {
    return {
    	activeItem: 0, // 默认显示板块
      sideList: this.globalData.basePageInfo.sideList, // 侧边栏
    }
  },
  methods: {
  	// 切换板块
		sideChange(num) {
	    console.log(num);
	  },
	  // 展开更多
	  moreOpen(num) {
	    console.log(num);
	  },
	  // 收起更多
	  moreClose(num) {
	    console.log(num);
	  }
  }
}