export default {
  name: 'QBJurisdiction',
  data () {
    return {
      textQuery:'',//搜索机构名称
      orgNameWrite:'',//写入机构名称
      depNameWrite:'',//写入部门名称
      startDate:'',//搜索的开始时间
      endDate:'',//搜索的结束时间
      dateflag:true,//搜索的控制器
      dataTokenFlag:-1,//权限关闭对应的时间控制
      color1:false,//添加按钮点击后的颜色
      color2:false,//EXCEL按钮点击后的颜色
      color3:false,//保存按钮点击后的颜色
      value2:'',//新增后的到期时间
      addBtn:false,//添加按钮禁用
      exportEXCELBtn:false,//导出按钮控制器
      disabled:[],//日期只读
      setTime:[],
      Authority:[//权限设置
        {value:'0',label:'关闭'},
        {value:'1',label:'开通'}
      ],
      //权限设置-默认值
      AuthorityDefault:'1',
      pays:[//付费情况
        {value:'0',label:'试用'},
        {value:'1',label:'付费'}
      ],
      newAdd:[],//新增一条
      userSetTime:[],
      multipleSelection:[],
      newAddCloseFlag:false,//新增之后不能修改
      currentdate:'',//设置时间
      updateTime:'',//更新时间
      _date:'',//新增发个后台的数据集合
      orgNameContainer:[],//新增机构名称返回数据
      depNameContainer:[],//新增部门名称返回数据
      setName:'',//操作人
      admin_user: '3KplYfDwi+E=#/',//操作人
      block_none:'block'//没有权限隐藏页面
    }
  },
  created() {
    this.getUserName();
  },
  watch:{
    value2(val,oldval){
      this._date.endTime=val
      let endTime=new Date(val.replace(/-/g,'/'));
        endTime=endTime.getTime();
      let nowTime=new Date().getTime();
      let resDate=Math.floor((endTime-nowTime)/86400000);
      if(resDate<0){
        resDate=-1;
      }
      this._date.surplusDay=resDate+1;
    },
    endDate(val,oldval){
      let end_time=new Date(val.replace(/-/g,'/'));
        end_time=end_time.getTime();
      let start_time = new Date(this.startDate.replace(/-/g,'/'));
        start_time=start_time.getTime();
        if(end_time-start_time<0){
          this.$message({
            message:'开始日期不能大于结束日期',
            type:'error'
          });
         this.dateflag=false;
       }else{
         this.dateflag=true;
       }

    }
  },
  methods: {
    //机构名称写入
    querySearchAsync(queryString,cb){
      this.orgNameContainer=[];
      let datas = {
          orgName:queryString,
      }
      this.axios({
        method: 'POST',
        url: '/EnterpriseAuthInstallOrgName',
        data:datas
      })
      .then((res) => {
        if(res.data.data){
          if(res.data.data.list.length>0){
            var ls=res.data.data.list;
              for(var i=0;i<ls.length;i++){
                var objLs={};
                objLs.value=ls[i];
                this.orgNameContainer.push(objLs)
                cb(this.orgNameContainer)
              }
          }
        }
      })
      .catch(err => {
        console.log(err);
      })
    },
    handleSelect(item){
      this._date.orgName=item.value;
    },
    //部门名称写入
    querySearchAsyncDepName(queryString,cb){
      this. depNameContainer=[];
      let datas = {
          depName:queryString,
      }
      this.axios({
        method: 'POST',
        url: '/EnterpriseAuthInstallDepName',
        data:datas
      })
      .then((res) => {
        if(res.data.data){
          if(res.data.data.list.length>0){
            var ls=res.data.data.list;
              for(var i=0;i<ls.length;i++){
                var objLs={};
                objLs.value=ls[i];
                this.depNameContainer.push(objLs)
                cb(this.depNameContainer)
              }
          }
        }
      })
      .catch(err => {
        console.log(err);
      })
    },
    handleSelectDepName(item){
      this._date.depName=item.value;
    },
    //付费情况
    payStatus(index,res){
      this.addBtn=true;
      this.exportEXCELBtn=true;
      this.newAdd[index].updateTime=new Date().getTime();
      this.newAdd[index].setUser=this.setName;
    },
    //结束时间
    endTime(index,res){
      this.addBtn=true;
      this.exportEXCELBtn=true;
      let endTime=res.endTime;
      let newDate=new Date();
      let year=newDate.getFullYear();
      let month=newDate.getMonth()+1;
      let strDate=newDate.getDate();
      let currentdate=year+'/'+month+'/'+strDate;
      let nowTime=new Date(currentdate).getTime()
      let resDate=Math.floor((endTime-nowTime)/86400000);
      if(resDate<=0){
        resDate=0;
      }
      this.newAdd[index].surplusDay=resDate;//剩余时间
      this.newAdd[index].endTime=res.endTime;
      this.newAdd[index].updateTime=new Date().getTime();
      this.newAdd[index].setUser=this.setName;
    },
    //数据权限设置
    dataStatus(index,row){
      //1开启 0关闭
      this.addBtn = true;
      this.exportEXCELBtn = true;
      this.newAdd[index].updateTime=new Date().getTime();
      row.setUser=this.setName;
      row.setDate=new Date().getTime();
      if(row.dataStatus=='0'){
        this.disabled[index]=0;
      }
      if(row.dataStatus=='1'){
        this.disabled[index]=1;
      }
    },
    //添加数据
    add(){
      // this.newAddCloseFlag=true;
      this.exportEXCELBtn=true;
      this.addBtn=true;
      this.color1=true;
      this.dataTokenFlag = 0;
      this.dateHandle();//时间处理
       this._date={
         orgName:'',
         depName:'',
         payStatus:'试用',
         endTime:this.value2,
         surplusDay:'',
         dataStatus:'开通',
         startTime:this.currentdate,
         setDate:this.currentdate,
         setUser:this.setName
      }
      this.newAdd.unshift(this._date);
      this.dataDeal(this.newAdd);
      for(var i=0;i<this.newAdd.length;i++){
        this.newAdd[i].newAddCloseFlag=true;
      }
      this.newAdd[0].newAddCloseFlag=false;
    },
    //保存数据
    save(){
      this.color3=true;
      if(this.dataTokenFlag!=0){
        //修改保存
        for(var i=0;i<this.newAdd.length;i++){
          if(this.newAdd[i].dataStatus=="关闭"){
             this.newAdd[i].dataStatus='0'
          }else if(this.newAdd[i].dataStatus=="开通"){
             this.newAdd[i].dataStatus='1'
          }
          if(this.newAdd[i].payStatus=="试用"){
            this.newAdd[i].payStatus='0'
          }else if(this.newAdd[i].payStatus=="付费"){
            this.newAdd[i].payStatus='1'
          }
        }
        let datas = {
            param:JSON.stringify(this.newAdd)
        }
        this.axios({
          method: 'POST',
          url: '/EnterpriseAuthInstallUpdate',
          data:datas
        })
        .then((res) => {
          if(res.data.message){
            this.$message({
              message:res.data.message,
              type:'success'
            });
            this.color3=false;
            this.exportEXCELBtn=false;
            this.addBtn=false;
            this._date='';
            setTimeout(()=>{
              this.timeSelectBtn();
            },1000);
          }

        })
        .catch(err => {
          console.log(err);
        })
      }else{
        if(this.orgNameWrite){
          this._date.orgName=this.orgNameWrite;
        }
        if(this.depNameWrite){
          this._date.depName=this.depNameWrite;
        }
        if(this._date.payStatus=="试用"){
          this._date.payStatus='0'
        }else{
          this._date.payStatus='1'
        }
          this._date.dataStatus='1';
          var _date=this._date,flag=true;
          for(var i in _date){
            if(_date[i]===''){
              this.$message({
                message:'警告！数据不能为空',
                type:'warning'
              });
              flag=false;
              break;
            }
          }
          if(flag){
            this.axios({
              method: 'POST',
              url: '/EnterpriseAuthInstallInsert',
              data:_date
            })
            .then((res) => {
              console.log(res);
              if(res.data.success){
                console.log(res.data.statusCode);
                if(res.data.statusCode==1){
                  this.$message({
                    message:'此机构名称与部门名称已存在请查询后修改！',
                    type:'error'
                  });
                  this.color1 = false;
                  this.addBtn = false;
                  this.color3 = false;
                  this.exportEXCELBtn = false;
                  this.orgNameWrite='';
                  this.depNameWrite='';
                  this.value2='';
                  setTimeout(()=>{
                    this.timeSelectBtn();
                    this.dataTokenFlag = -1;
                  },1000);
                } else if(res.data.statusCode==0){
                  this.$message({
                    message:res.data.message,
                    type:'success'
                  });
                  this.color1 = false;
                  this.addBtn = false;
                  this.color3 = false;
                  this.exportEXCELBtn = false;
                  this.orgNameWrite='';
                  this.depNameWrite='';
                  this.value2='';
                  setTimeout(()=>{
                    this.timeSelectBtn();
                    this.dataTokenFlag = -1;
                  },1000);
                }
              }
            })
            .catch(err => {
              console.log(err);
            })
          }
      }
    },
    //获取用户信息
    getUserName(){
      //this.admin_user = this.$route.query.admin_user
      this.axios({
        method: 'POST',
        url: '/UserInfoSelect',
        data:{
          userId:this.admin_user
        }
      })
      .then((res) => {
        //console.log(res);
          if(res.data.data) {
          this.setName=res.data.data;
          this.timeSelectBtn();
          }else{
            this.$message({
              message:'您没有操作权限',
              type:'warning'
            })
            this.block_none='none'
          }
      })
      .catch(err => {
        console.log(err);
      })
  },
    //搜索功能和展示
    timeSelectBtn(){
      this.color1 = false;
      this.color2 = false;
      this.addBtn = false;
      this.color3 = false;
      this.exportEXCELBtn = false;
      this.dataTokenFlag = -1;
      if(this.dateflag){
        let datas = {
            orgName:this.text,
            startDate:this.startDate,
            endDate:this.endDate
        }
        this.axios({
          method: 'POST',
          url: '/EnterpriseAuthInstallShow',
          data:datas
        })
        .then((res) => {
          if(res.status==200)
          // for(var i=0;i<res.data.data.list.length;i++){
          //   if(res.data.data.list[i].dataStatus==0){
          //      res.data.data.list[i].dataStatus="关闭"
          //      this.disabled[i] = 0;
          //   }else if(res.data.data.list[i].dataStatus==1){
          //      res.data.data.list[i].dataStatus="开通"
          //      this.disabled[i] = 1;
          //   }
          //   if(res.data.data.list[i].payStatus==0){
          //     res.data.data.list[i].payStatus="试用"
          //   }else if(res.data.data.list[i].payStatus==1){
          //     res.data.data.list[i].payStatus="付费"
          //   }
          // }
          this.newAdd=this.dataDeal(res.data.data.list);
        })
        .catch(err => {
          console.log(err);
        })
      }
    },
    // 数据处理对应关系
    dataDeal(list) {
      this.disabled = [];
      for(var i=0;i<list.length;i++){
        if(list[i].dataStatus==0||list[i].dataStatus=="关闭"){
           list[i].dataStatus="关闭"
           this.disabled[i] = 0;
        }else if(list[i].dataStatus==1||list[i].dataStatus=="开通"){
           list[i].dataStatus="开通"
           this.disabled[i] = 1;
        }
        if(list[i].payStatus==0){
          list[i].payStatus="试用"
        }else if(list[i].payStatus==1){
          list[i].payStatus="付费"
        }
      }
      return list;
    },
    //当前时间处理
    dateHandle(){
      let newDate=new Date();
      let year=newDate.getFullYear();
      let month=newDate.getMonth()+1;
      let strDate=newDate.getDate();
      if(month>=1&&month<=9){
        month='0'+month;
      }
      if(strDate>=0&&strDate<=9){
        strDate='0'+strDate;
      }
       this.currentdate=year+'-'+month+'-'+strDate;
    },
    //全选按钮
    handleSelecionChange(val){
      var multipleSelecte=[];
      for(var i=0;i<val.length;i++){
        multipleSelecte.push(val[i].id);
      }
      this.multipleSelection=Array.from(new Set(multipleSelecte));
    },
      // 导出excel
    exportEXCEL() {
      this.exportEXCELBtn=true;//导出按钮权限
      this.color2=true;//导出按钮颜色
      if(this.multipleSelection.length<=0){
        this.$message({
          message:'请选择后导出!',
          type:'warning'
        });
        this.color2=false;
        this.exportEXCELBtn=false;
      }else{
        let multip=JSON.stringify(this.multipleSelection)
        this.axios({
          method: 'post',
          url: '/EnterpriseAuthInstallExport',
          params: {
              id:multip
          },
          responseType: 'arraybuffer',
          transformResponse:[function (data) {
            return data;
          }]
        })
        .then((res) => {
          if(res.status==200){
            this.globalFC.downFile(res);
            this.color2=false;
            this.exportEXCELBtn=false;
            setTimeout(()=>{
              this.timeSelectBtn();
            },1000);
          }
        })
        .catch(err => {
          console.log(err);
        })
      }
    }
  }
}
