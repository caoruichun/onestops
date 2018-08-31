export default {
  name: 'intelligentModel',
  data () {
    return {
      znmxNav:[
      {title:'财智测',name: 'wealth',id:1},
      {title:'近压测',name: 'near',id:2},
      {title:'险智测',name: 'risk',id:3},
      {title:'综智测',name: 'comprehensive',id:4}
    ],
     showIframe:false,
      activeName:0,//默认显示第几个
      phone:this.globalInfo.usrID ,//用户手机号|| 13681220303
      access_token:'',//安全吗
      userId:'',
      modelIframe:this.globalInfo.modelIframe,
      enterpriseName:'中信资产管理有限公司',//公司名称
      src:'',//目标地址
    }
  },
  created(){
    this.getUserViewToken();//调用接口
    this.session();//获取存储数据
    console.log('123123',this.globalInfo.modelIframe);
  },
  mounted(){
  },
  methods:{
    session(){
      //获取主体的公司名称
        this.enterpriseName = this.globalInfo.companyName;
        let access_token = sessionStorage.getItem('access_token');
      if(access_token == undefined || access_token == 'undefined' || access_token == null || access_token == ''){
        //调用接口Token
        this.getUserViewToken();
      }else{
        this.access_token=access_token;
      }
    },
    getUserViewToken() {
      let datas = {
        phone:this.phone
      }
      this.axios({
        method: 'post',
        url:'/getUserViewToken',
        data:datas
      })
      .then((res) => {
        if(res.data.success){
          this.access_token=res.data.data;
          sessionStorage.setItem("access_token",this.access_token);
          this.btnClick(0);
        }
      })
      .catch(err => {
        console.log(err)
      })
    },
    btnClick(index){
      this.activeName=index;
      this.src=`${this.modelIframe}?module_id=${index+1}&enterpriseName=${this.enterpriseName}&access_token=${this.access_token}`;
      this.showIframe=true;
    }
  }
}
