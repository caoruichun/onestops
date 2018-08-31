// 导航条
import navBar from '../navBar/index.vue'
export default {
  name: 'mainPage',
  data () {
    return {
      showFlag:true,
      showView:true
    }
  },
  created() {
    if (this.$route.query.partnum == 8||this.$route.query.partnum ==9) {
      this.showFlag = false
    }
  },
  watch:{
    $route(now,oldVlu) {
      if(now.path =="/society" || now.path =="/discussionArea/publishEditor" || now.path =="/discussionArea/backapproval"|| now.path =="/valuationTransaction/QBJurisdiction"){
        this.showFlag = false
      } else {
        this.showFlag = true
      };
      if(now.path == "/bigData"){
        this.showView =false
      } else{
        this.showView = true
      };
    }
  },
  methods: {
    // 返回上级
    reback() {
      //跳转到债无忧
      let type='backZhaiwuyou';
      let targetOrigin="*";
      window.parent.postMessage(type,targetOrigin)
      window.close();
    },
  },
  components:{
    navBar, // 导航条
  }
}
