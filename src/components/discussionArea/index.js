import UEditor from './ueditor/index.vue'
export default {
  name: 'discussionArea',
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
      state4:'',
      value6: '',
      tableData: [],
      input3:'',
      list:[],
      listtit:[],
      datedocument:[],
      msg:'',
      checkedd:0,
      outerVisible: false,
      innerVisible: false,
      checked: false,
      disabled:false,
      pageInfo: {
        pageSize: 10, // 条数
        pageNum: 1, // 页码
        pageTotal: '', // 总页数
        startRow:1,//当前页
        // compCode: '10010', // 企业ID
      },
      input:'',
      info:'D'
    }
  },
  components:{
    UEditor,
  },
  created() {
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
    // 是否匿名
    changeName(){
      if(this.checked){
        this.checkedd = 1;
      }else {
        this.checkedd = 0;
      }
    },
    // 分页
    changePage(num) {
      this.pageInfo.pageNum = num; // 页码
      this.discussionAreaInfoList(this.pageInfo);
    },
    //基本信息
    discussionAreaInfoList(info){
      this.axios({
        method: 'post',
        url: '/DiscussionAreaInfoList',
        data: {
          searchKey:this.input,
          searchDate:this.info,
          pageNum:this.pageInfo.pageNum,
          pageSize:this.pageInfo.pageSize
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
    // 删除
      delet(e){
        if($('.dia-document').html() !=""){
           let dom = e.target.parentNode
           try{
             dom.remove();
           }
           catch(err) {
             dom.removeNode(true);
           }
        }
      },

    // 发布
    insertSubjectInfoList(){
      let msg = UE.getEditor('editor').getContent();
      if(this.input3==''){
        this.$message('请填写主题');
        this.innerVisible=false;
        this.disabled = false;
        return
      }else if(msg==''){
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
        url: '/insertSubjectInfo',
        data: {
          subjectName:this.input3,
          subjectMsg:msg,
          subAnonymous:this.checkedd,
          subPathName:this.listtit.toString(),
          subPath:this.list.toString(),
          userId: this.globalInfo.usrID // 用户ID
        },
      })
      .then((res)=>{
        if(res.data.success) {
        this.$message('发布完成，开始审核');
        this.input3 ='';
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
    outerVisibleS(){
        // var A_arry = [];
        // for(var i=0;i<this.tableData.length;i++){
        //   if(this.tableData[i].subjectName.search(this.state4) != -1){
        //   A_arry.push(this.tableData[i]);
        //   }
        // }
        // return this.tableData = A_arry;
        // if(!!window.ActiveXObject || "ActiveXObject" in window){
        //   this.$message({
        //     message: '该浏览器暂不支持图片和附件上传功能，请切换其他浏览器！',
        //     type: 'warning'
        //   });
        // }
      this.outerVisible=true;
      this.input3 = '';
    },
    // 搜索
    searchDate (){
      this.pageInfo.pageNum = 1;
      this.discussionAreaInfoList();
    },
    // 清空搜索
    clearsearchDate (){
      this.pageInfo.pageNum = 1;
      this.input = '';
      this.info = '';
      this.value6 = '';
      this.discussionAreaInfoList();
    },
    open() {
      this.disabled = true;
      this.insertSubjectInfoList();
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
