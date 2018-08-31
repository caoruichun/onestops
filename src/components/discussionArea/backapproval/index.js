import UEditor from '../ueditor/index.vue'
export default {
  name: 'backapproval',
  data () {
    return {
      cities: [{
        value: '三个月内',
        symble:'A'
      }, {
        value: '半年内',
        symble:'B'
      }, {
        value: '一年内',
        symble:'C'
      },{
          value: '全部',
          symble:'D'
      }],
      value6: '',
      input10:'',
      tableData: [],
      tableDataalet:[],
      input3:'',
      info:'D',
      addflag:true,
      replyTimeflag:true,
      sID:'',
      stype:'',
      flag:true,
      flag2:true,
      tabjectmsg:'',
      pageInfo: {
        pageSize: 10, // 条数
        pageNum: 1, // 页码
        pageTotal: '', // 总页数
        startRow:1,//当前页
        // compCode: '10010', // 企业ID
      },
      outerVisible: false,
      checked: false,
    }
  },
  components:{
    UEditor,
  },
  created() {
    // console.log(this.$route.query.cbradminusr);
    this.discussionAreaInfoList(this.info);//表格初始化
  },
  methods: {
    // 时间选择：
    change(){
      if(this.value6=='三个月内'){
          this.info = 'A'
      }else if(this.value6=='半年内'){
        this.info = 'B'
      }else if(this.value6=='一年内'){
        this.info = 'C'
      }else if(this.value6=='全部'){
        this.info = 'D'
      }
    },
    // // 下载
    // downdocument(path){
    //   window.open("path")
    // },
    // 分页
    changePage(num) {
      this.pageInfo.pageNum = num; // 页码
      this.discussionAreaInfoList(this.pageInfo);
    },
    //基本信息
    discussionAreaInfoList(info){
      this.axios({
        method: 'post',
        url: '/getExamineInitralPage',
        data: {
          searchKey:this.input10,
          searchDate:this.info,
          pageNum:this.pageInfo.pageNum,
          pageSize:this.pageInfo.pageSize,
          // cbr_admin_user: this.$route.query.cbr_admin_user
          cbr_admin_user: '3KplYfDwi+E=#/',
          // cbr_admin_user: 'gJxygtQzqEUH5GtIGaqXcg=='
          //this.$route.query.cbr_admin_usr //'3KplYfDwi+E='
        },
      })
      .then((res)=>{
        if(res.data.success) {
          this.tableData= res.data.data.list;
          this.pageInfo.pageTotal = res.data.data.pages;
          this.pageInfo.startRow = res.data.data.startRow;
        }
      })
      .catch(err => {
        console.log(err)
      });
    },
    // 搜索
    searchDate (){
      this.pageInfo.pageNum = 1;
      this.discussionAreaInfoList();
    },
    // 清空搜索
    clearsearchDate (){
      this.pageInfo.pageNum = 1;
      this.input10 = '';
      this.info = '';
      this.value6 = '';
      this.discussionAreaInfoList();
    },
    // 弹窗关闭回调
    close(done){
      this.discussionAreaInfoList();
      done();
    },
    // 审核弹窗
    outerVisibled(type,id,state){
      this.outerVisible = true;
      this.flag = true;
      this.flag2 = true;
      if(state == '拒绝发布'){
        this.flag = false;
      }else if(state == '审核通过'){
        this.flag2 = false;
      }
      if(type=='新增主题'){
        this.addflag = true;
      }else {
        this.addflag = false;
      }
      this.sID = id
      this.axios({
        method: 'post',
        url: '/getExamineInfo',
        data: {
          type:type,
          subId:id,
        },
      })
      .then((res)=>{
        if(res.data.success) {
          this.tableDataalet = res.data.data;
          if(res.data.data[0].subjectMsg){
            this.tabjectmsg = res.data.data[0].subjectMsg;
          }else {
            this.tabjectmsg = res.data.data[0].replyMsg;
          }
          if( res.data.data[0].replyObject == 1 || res.data.data[0].replyObject == null){
            this.replyTimeflag = true;
            this.input3 =  res.data.data[0].subjectName;
          }else{
          this.replyTimeflag = false;
            this.input3 =  res.data.data[0].replyName+' '+ res.data.data[0].replyNameMent
          }
        }
      })
      .catch(err => {
        console.log(err)
      });
    },
    //审核判断
    innerVisibled(numtype){
      if(this.addflag){
      this.stype='新增主题';
      }else {
        this.stype='回复主题'
      }
      this.axios({
        method: 'post',
        url: '/passReview',
        data: {
          type:numtype,
          objectType:this.stype,
          objectId:this.sID,
          // cbr_admin_user: this.$route.query.cbr_admin_user
          cbr_admin_user: '3KplYfDwi+E=#/',
          // cbr_admin_user: 'gJxygtQzqEUH5GtIGaqXcg==',
          //this.$route.query.cbr_admin_usr //'3KplYfDwi+E='
        },
      })
      .then((res)=>{
        if(res.data.success) {
          this.outerVisible=false;
          this.$message({
            message:'操作成功',
            type:'success'
          })
          this.discussionAreaInfoList();
        }else{
          this.$message({
            message:'您没有审核权限',
            type:'warning'
          })
        }
      })
      .catch(err => {
        console.log(err)
      });
    },
    getDescribe(id){
      this.$router.push({
        name: 'publishEditor',
        params: {
          id: id
        }
      })
    },
  },
}
