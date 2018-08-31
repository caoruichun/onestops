export default {
  name: 'navBar',
  data () {
    return {
      enterpriseId: '',//企业id
    	activeItem: 0, // 默认显示板块
      navBarMasterShow: true, // 导航条是否可点（不能：true；能：false）
      navList: this.globalData.basePageInfo.navList, // 导航条
    }
  },
  created() {
    if(this.$route.query.enterpriseId != undefined) {
      this.globalInfo.usrID = this.$route.query.userName; // 用户ID
      this.globalInfo.bondID = this.$route.query.bondCode; // 债券ID
      this.globalInfo.type = this.$route.query.pageType; // 用户ID
      this.getEnterpriseId(); //获取企业id
    }
    else {
      if(this.$route.query.partnum == undefined) {
        this.$router.push({path: '/subjectInfo', query: { partnum: 0 }})
      }
      else {
        this.activeItem = Number(this.$route.query.partnum);
      }
    };
  },
  watch: {
    $route() {
      if(this.$route.query.partnum != undefined) {
        this.activeItem = Number(this.$route.query.partnum);
      }
      if(this.$route.query.enterpriseId != undefined){
        this.getEnterpriseId();
      }
    }
  },
  methods: {
    // 获取企业id
    getEnterpriseId() {
      this.axios({
        method:'post',
        url:'/getEnterpriseId',
        data: {
          finchina_id: this.$route.query.enterpriseId //获取财会id
        }
      })
      .then((res)=>{
        if(res.data.success) {
          this.globalInfo.compCode = res.data.data; // 企业ID
          this.getUsrInfo(); // 后台存储session
        }
        else {
          this.$alert('暂无数据', '提示', {
            confirmButonText: '确定',
            callback: action => {
              let type='backZhaiwuyou';
              let targetOrigin="*";
              window.parent.postMessage(type,targetOrigin);               
            }
          })
        }
      })
      .catch(err=>{
        this.$alert('暂无数据', '提示', {
          confirmButonText: '确定',
          callback: action => {
            let type='backZhaiwuyou';
            let targetOrigin="*";
            window.parent.postMessage(type,targetOrigin);               
          }
        })
        // console.log(err);
      });
    },
    // 后台存储session
    getUsrInfo() {
      this.axios({
        method:'post',
        url:'/getUserInfo',
        data:{
          phone: this.$route.query.userName // 用户ID
        }
      })
      .then((res)=>{
        if(res.data.data) {
          this.getSessionUsrInfo(); // session校验
        }
        else {
          this.$alert('session存储失败', '提示', {
            confirmButonText: '确定',
            callback: action => {
              let type='backZhaiwuyou';
              let targetOrigin="*";
              window.parent.postMessage(type,targetOrigin);               
            }
          });          
        };
      })
      .catch(err=>{
        this.$alert('session存储失败', '提示', {
          confirmButonText: '确定',
          callback: action => {
            let type='backZhaiwuyou';
            let targetOrigin="*";
            window.parent.postMessage(type,targetOrigin);               
          }
        }); 
        // console.log(err);
      });
    },
    // session校验
    getSessionUsrInfo() {
      this.axios({
        method:'post',
        url:'/getSessionUserInfo',
        data:{
          userId: this.$route.query.userName // 用户ID
        }
      }).then((res)=>{
        //跳转到债无忧
        if(res.data.statusCode==999) {
          this.$alert('session已过期', '提示', {
            confirmButonText: '确定',
            callback: action => {
              let type='backZhaiwuyou';
              let targetOrigin="*";
              window.parent.postMessage(type,targetOrigin);               
            }
          })        
        }
        else {
          this.navBarMasterShow = false;
          this.getCompanyName();
          if(this.globalInfo.type==1) {
            this.$router.push({path: '/subjectInfo', query: { partnum: 0 }});
          }
          else if(this.globalInfo.type==2) {
            this.$router.push({path: '/voucherInfo', query: { partnum: 1 }});
          }
        }
      })
      .catch(err=>{
        this.$alert('session已过期', '提示', {
          confirmButonText: '确定',
          callback: action => {
            let type='backZhaiwuyou';
            let targetOrigin="*";
            window.parent.postMessage(type,targetOrigin);               
          }
        }); 
        // console.log(err);
      });
    },
    // 获得企业名
    getCompanyName() {
      this.axios({
        method: 'post',
        url: '/getEnterpriseName',
        data: {
          compCode: Number(this.globalInfo.compCode)
        },
      })
      .then((response) => {
        if(response.data.success) {
          this.globalInfo.companyName = response.data.data;
        }
      })
      .catch(err => {
        // console.log(err);
      });
    }
  }
}
