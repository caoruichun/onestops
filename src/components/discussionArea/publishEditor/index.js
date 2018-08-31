import UEditor from '../ueditor/index.vue'
export default {
  name: 'publishEditor',
  data () {
    return {
      tableDatamaic:[],
      tableData:[],
      outerVisible: false,
      innerVisible: false,
      input3:'',
      info:'',
      typenum:'',
      twoId:'',
      list:[],
      listtit:[],
      zhusubjectMsg:'',
      huireplyMsg:'',
      checkedd:0,
      addflag:true,
      msg:'',
      path:'',
      subSize:'',
      checked: false,
      disabled:false,
      pageInfo: {
        pageSize: 10, // 条数
        pageNum: 1, // 页码
        pageTotal: '', // 总页数
        startRow:1,//当前页
        // compCode: '10010', // 企业ID
      },
    }
  },
  components:{
    UEditor,
  },
  created() {
    this.info=this.$route.params.id;
    if(this.info){
      this.getSubInfo(this.info);
      this.getReplyInfoList(this.info);
    }

  },
  methods: {
    // downdocument(path){
    //   // var elemtf = document.createElement('iframe');
    //   // elemtf.src = path;
    //   // document.body.appendChild(elemtf)
    //   // window.location.href=path
    // },
    // 分页
    changePage(num) {
      this.pageInfo.pageNum = num; // 页码
      this.getReplyInfoList(this.info,this.pageInfo);
    },
    //主题信息
    getSubInfo(info){
      this.axios({
        method: 'post',
        url: '/getSubInfo',
        data: {
          subId:info,
        },
      })
      .then((res)=>{
        if(res.data.success) {
          this.tableDatamaic= res.data.data;
          this.subSize = Math.abs(res.data.data[0].subSize);
          this.zhusubjectMsg = res.data.data[0].subjectMsg;
        }
      })
      .catch(err => {
        console.log(err)
      });
    },
    //主题信息
    getReplyInfoList(info){
      this.axios({
        method: 'post',
        url: '/getReplyInfoList',
        data: {
          subId:info,
          pageNum:this.pageInfo.pageNum,
          pageSize:this.pageInfo.pageSize
        },
      })
      .then((res)=>{
        if(res.data.success) {
          this.pageInfo.pageTotal = res.data.data.pages;
          for (var i=0; i<res.data.data.list.length; i++) {
            for (var j=0; j<res.data.data.list.length; j++) {
              if(res.data.data.list[i].replyId==res.data.data.list[j].replyId && i!=j && res.data.data.list[i].replyPath != null && res.data.data.list[j].replyPath != null) {
                res.data.data.list[i].replyPath+=(','+res.data.data.list[j].replyPath);
                res.data.data.list[i].replyPathName+=(','+res.data.data.list[j].replyPathName);
                res.data.data.list.splice(j,1);
                j--;
              }
            }
          };
          for(var item in res.data.data.list) {
            if(res.data.data.list[item].replyPath !=null){
              res.data.data.list[item].replyPath = res.data.data.list[item].replyPath.split(',');
              res.data.data.list[item].replyPathName = res.data.data.list[item].replyPathName.split(',');
            }

          };
          this.tableData = res.data.data.list;
        }
      })
      .catch(err => {
        console.log(err)
      });
    },
    // 点赞
    agreeOrUnagree(objectType,objectId,index){
      this.axios({
        method: 'post',
        url: '/agreeOrUnagree',
        data: {
          objectType:objectType,
          objectId:objectId,
          index:index,
          userId: this.globalInfo.usrID // 用户ID
        },
      })
      .then((res)=>{
        if(res.data.success) {
          if( res.data.data[1] == "1"){
            this.subSize= Math.abs(res.data.data[2]);
          }else {
            this.tableData[res.data.data[0]].replySize= res.data.data[2];
          }
        }
      })
      .catch(err => {
        console.log(err)
      });
    },
    outerVisiblee(typeId,subName,typenum,twoId,four){
      // if(!!window.ActiveXObject || "ActiveXObject" in window){
      //   this.$message({
      //     message: '该浏览器暂不支持图片和附件上传功能，请切换其他浏览器！',
      //     type: 'warning'
      //   });
      // }
      this.outerVisible = true;
      // let ue = UE.getEditor('editor');
      // ue.execCommand('cleardoc');
      // $('dia-document').remove();
      this.input3 = subName;
      this.typenum = typenum;
      if(typenum==1){
        this.addflag = true;
      }else {
        this.addflag = false;
        this.input3 = four;
      }
      if(typeId){
          this.twoId = typeId;
      }else {
          this.twoId = twoId;
      }
    },
    // 删除
      delet(e){
        let dom = e.target.parentNode
        dom.remove()
      },
    // 是否匿名
    changeName(){
      if(this.checked){
        this.checkedd = 1;
      }else {
        this.checkedd = 0;
      }
    },
    //回复信息
    replaySubOrReplayList(){
      this.disabled = true;
      let msg = UE.getEditor('editor').getContent();
     if(msg==''){
        this.$message('请填写内容');
        this.innerVisible=false;
          this.disabled = false;
        return
      }
      if($('.documt').attr('title')){
        for(var i= 0; i<$('.documt').length;i++){
          this.listtit[i]=$('.documt')[i].title;
          this.list[i]=$('.documt')[i].attributes[2].nodeValue;
        }
      }
      this.axios({
        method: 'post',
        url: '/replySubOrReply',
        data: {
          objectId:this.twoId,
          objectType:this.typenum,
          objectMsg:msg,
          isAnonymous:this.checkedd,
          replyPathName:this.listtit.toString(),
          replyPath:this.list.toString(),
          userId: this.globalInfo.usrID // 用户ID
        },
      })
      .then((res)=>{
        if(res.data.success) {
          this.$message('回复成功，开始审核');
          this.outerVisible=false;
          this.innerVisible=false;
            this.disabled = false;
        }
      })
      .catch(err => {
        console.log(err)
          this.disabled = false;
      });
    },
    agreeOr(objectType,objectId,index){
      this.agreeOrUnagree(objectType,objectId,index);
    },

    getDescribe(){
      this.$router.push({
        name: 'backapproval'
      })
    },
    goback(){
      this.$router.push({
        name: 'discussionArea'
      })
    },
  }
}
