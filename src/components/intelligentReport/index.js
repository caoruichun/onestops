import defaultTemp from './defaultTemp/index.vue'
export default {
  name: 'intelligentReport',
  data () {
    return {
      // 评价报告
    	reportTabs: ['中债报告', '其他机构报告'], // 评价报告标签
      selectTab: '中债报告', // 评价报告标签（选中）
    	reportList: '', // 评价报告列表
      showPDF: false, // 是否预览并下载PDF
      pdfWidth: '70%', // pdf全屏预览切换大小
      pdfMarginTop: '5vh', // pdf全屏预览切换顶部距离
      pdfEmbedHeight: '80vh', // pdf全屏预览切换高度
      pdfShowClass: 'fa fa-window-maximize', // pdf全屏预览切换按钮
      pdfShowLink: '', // pdf预览地址
      pdfDownloadLink: '', // pdf下载地址
      pdfShowTitle: '', // pdf预览标题
      pdfShowTD: '', // pdf预览ID
      reportHead: this.globalData.basePageInfo.intelligentReport.tableHead_inside, // 评价报告列表（表头）
      editor: null, // 富文本编辑器
    	editors: null, // 富文本编辑器
      // 分页信息
      pageInfo: {
        pageSize: 10, // 条数 
        pageNum: 1, // 页码
        pageTotal: '', // 总页数   
        enterpriseId: this.globalInfo.compCode || '101337', // 企业ID      
      },
      reportURL: '/getEnterpriseReportInfoList', // 报告接口
      // 自动生成报告
      outputPDFShow: false,  // 导出报告对话框
      outputPDFTitle: '', // 导出报告标题
      templateList: '', // 模板列表
      selectTemp: '', // 选择的模板
      newsList: '', // 报告列表
      selectNews: '', // 选择的报告
      showReportList: false, // 报告列表是否存在
      companyLOGO: '', // 上传的公司Logo
      uploadIMGURL: process.env.API+'/uploadLogo', // 上传公司Logo接口
      deleteUEId: '', // 删除模板、报告的ID
      deleteUENum: '', // 1：删除模板、2：删除报告
      deleteUEcontent: false, // 是否显示删除模板、报告对话框
      saveUEcontent: false, // 是否显示保存模板、报告对话框
      UEtitle: '', // 保存的模板、报告标题
      tempOrReport: '模板', // 模板、报告
      defaultReportStatus: false, // 默认模板是否加载完成
      anchorNum: 0, // 锚点定位
      anchorPucker: true, // 锚点展开
    }
  },
  created() {
    this.getReportList(this.pageInfo); // 获取报告列表（评价报告）
    this.autoGetTempReportList(this.pageInfo.enterpriseId); // 获得获得模板列表（自动生成报告）
  },
  mounted() {
    //初始化UE
    UE.delEditor('intelligentEditor');
    this.editor = UE.getEditor('intelligentEditor', {
      toolbars: [
        [
        	'undo', // 撤销
        	'redo', // 重做
        	'fontfamily', // 字体
        	'fontsize', // 字号
          'bold', // 加粗
          'italic', // 斜体
          'underline', // 下划线
          'forecolor', // 字体颜色
          'backcolor', // 字体颜色
          'spechars', // 特殊字符
          'removeformat', // 清除格式
          'formatmatch', // 格式刷
          'justifyleft', // 左对齐
          'justifyright', // 右对齐
          'justifycenter', // 居中
          'justifyjustify', // 两端对齐
          'lineheight', // 段间距
          'insertorderedlist', // 有序列表
          'insertunorderedlist', // 无序列表
          'inserttable', //插入表格
          'searchreplace', // 查询替换
          'fullscreen', // 全屏
          'preview', // 预览
          'print', // 打印
        ]
      ],
      initialFrameWidth: '100%', // 初始化编辑器宽度
      initialFrameHeight: '500', // 初始化编辑器高度
      wordCount: false, // 是否开启字数统计
      autoHeightEnabled: false, // 是否自动长高
      enableAutoSave: false, // 是否启用自动保存
      autoFloatEnabled: true, // toolbar的位置不动
      elementPathEnabled: false, // 是否启用元素路径
      UEDITOR_HOME_URL: 'static/ueditor/'
    }).ready(function() {
      this.setContent('')
    });
  },
  methods: {
    printPDF() {
      try {
        $('#pdfEmbed')[0].focus();
        $('#pdfEmbed')[0].contentWindow.print();
      }
      catch(err) {
        this.showPDF = false;  
        this.$message({
          message: '打印失败，请重试！',
          type: 'warning'
        });
      }
    },
    // 锚点定位
    anchorBTN(num) {
      this.anchorNum = num;
      if(num==0) {
        $('.intelligentReport')[0].scrollTop = 0;
      }
      else {
        $('.intelligentReport')[0].scrollTop = $('.intelligentReport .el-col').eq(0).height();
      }
    },
    // 锚点折叠
    anchorFold() {
      this.anchorPucker=!this.anchorPucker;
    },
    // 分页
    changePage(num) {
      this.pageInfo.pageNum = num; // 页码
      this.getReportList(this.pageInfo);
    },
    // 列表点击预览下载
    printFile(row,col,cell,event) {
      if(col.columnKey==0) {
        switch(this.selectTab) {
          case '中债报告':
            this.fileDownloadInner(row.objectId,row.contentStreamFileName);
            this.pdfWidth = '70%';
            this.pdfMarginTop='5vh';
            this.pdfEmbedHeight='80vh';
            this.pdfShowClass='fa fa-window-maximize';
            break;
          case '其他机构报告':
            this.fileDownloadOuter(row.objectId,row.yytype);
            break;
        };
      }
    },
    // 报告列表单元格数据处理
    reportListCellVal(row,col,cell,index) {
      if(col.columnKey==4) {
        cell = row.readNum + ' / ' + cell;
      }
      return cell;
    },
    // pdf全屏预览切换
    maxResPdf() {
      this.pdfWidth=='100%' ? (this.pdfWidth='70%',this.pdfMarginTop='5vh',this.pdfEmbedHeight='80vh',this.pdfShowClass='fa fa-window-maximize') : (this.pdfWidth='100%',this.pdfMarginTop='0',this.pdfEmbedHeight='100vh',this.pdfShowClass='fa fa-window-restore');
    },
    // 预览下载PDF、WORD、EXCEL等文件
    fileDownloadInner(fileID,fileName) { // 内部
      this.axios({
        method: 'post',
        url: '/getReportInfo',
        data: {
          objectId: fileID,
          contentStreamFileName: fileName,
          userId: this.globalInfo.usrID // 用户ID
        },
      })
      .then((res) => {
        if(res.data.data.type=='pdf') {
          this.pdfShowID = fileID;
          this.pdfShowTitle = fileName;
          this.pdfShowLink = res.data.data.pathList[0];
          this.pdfDownloadLink = res.data.data.pathList[1];
          this.showPDF = true;       
        }
        else {
          window.open(res.data.data.pathList[1]);
        };
        this.getReportList(this.pageInfo);
      })
      .catch(err => {
        // console.log(err);
      });
    },
    fileDownloadOuter(fileID,type) { // 外部
      this.axios({
        method: 'post',
        url: '/downloadYYInfo',
        data: {
          objectId: fileID,
          YYType: type,
          userId: this.globalInfo.usrID // 用户ID
        },
        responseType: 'arraybuffer',
        transformResponse:[function (data) {
          return data;
        }]
      })
      .then((res) => {
        this.globalFC.downFile(res);
        this.getReportList(this.pageInfo);
      })
      .catch(err => {
        // console.log(err);
      });
    },
    pdfdownload() { // 下载文件
      let listInfo = this;
      this.axios({
        method: 'post',
        url: '/downLoadEnterpriseReport',
        data: {
          objectId: listInfo.pdfShowID,
        },
      })
      .then((res) => {
        if(res.data.success) {
          window.open(listInfo.pdfDownloadLink);
          this.getReportList(listInfo.pageInfo);           
        }
        else {
          this.$message({
            message: '下载失败',
            type: 'error'
          });           
        }
        this.showPDF = false;
      })
      .catch(err => {
        // console.log(err);
        this.showPDF = false; 
        this.$message({
          message: '下载失败',
          type: 'error'
        });
      });
    },
    // 切换评价报告（评价报告）
    changeTab() {
      switch(this.selectTab) {
        case '中债报告':
          this.reportURL = '/getEnterpriseReportInfoList';
          this.reportHead = this.globalData.basePageInfo.intelligentReport.tableHead_inside;
          break;
        case '其他机构报告':
          this.reportURL = '/getOtherReportList';
          this.reportHead = this.globalData.basePageInfo.intelligentReport.tableHead_outside;
          break;
      };
      this.pageInfo.pageNum = 1;
      this.getReportList(this.pageInfo);
    },
    // 获取报告列表（评价报告）
    getReportList(info) {
      let reportDataList = this;
      // 表格信息
      this.axios({
        method: 'post',
        url: reportDataList.reportURL,
        data: info,
      })
      .then((res) => {
        if(res.data.success) {
          reportDataList.reportList = res.data.data.list;
          reportDataList.pageInfo.pageTotal = res.data.data.pages; // 总页数
        }
      })
      .catch(err => {
        // console.log(err);
      });
    },
    // 上传公司logo
    ueditorPrependHmtl(res,file,fileList) {
      let ue = UE.getEditor('intelligentEditor');
      if(res.success) {
        ue.ready(function() {
          let contentHTML =  ue.getContent();
          ue.setContent('<img src="'+res.data+'" width="100px" height="100px"/>'+contentHTML);
        });
      }
      else {
        this.$message({
          message: '上传失败，请重试！（支持格式：jpg、png、jpeg、bmp）',
          type: 'error'
        });
      }
    },
    // 报告导出
    outputPDF() {
      this.outputPDFTitle = this.outputPDFTitle.replace(/\s/g,'');
      if(this.outputPDFTitle) {  
        let ue = UE.getEditor('intelligentEditor');
        let pdfFC = this;
        ue.ready(function() {
          $('#outputReportHTML').html(ue.getContent());
          pdfFC.outputPDFShow = pdfFC.globalFC.installPDF(['#outputReportHTML', pdfFC.outputPDFTitle]);
        });
      }
      else {
        this.$message({
          message: '请输入报告名称',
          type: 'error'
        })
      }
      // $('#intelligentEditor iframe')[0].focus();
      // $('#intelligentEditor iframe')[0].contentWindow.print();
    },
    // 保存模板
    saveTemp() {
      this.UEtitle = '';
      this.tempOrReport = '模板';
      this.saveUEcontent = true;
    },
    // 判断默认模板是否加载完成
    defaultStatus(status) {
      this.defaultReportStatus = status;
    },
    // 切换模板
    changeTempTab(tab,event) {
      let ue = UE.getEditor('intelligentEditor');
      ue.ready(function() {
        ue.execCommand('intelligentEditor');
      });
      if(Number(tab.index)==0) {
        ue.ready(function() {
          let contentHTML =  ue.getContent();
          ue.setContent($('.defaultReportTemp').html());
        });        
      }
      this.changeTempReport(1,tab.name,this.pageInfo.enterpriseId);        
    },
    // 删除模板
    editTemp(targetName,action) { // 弹出确认对话框
      if(targetName==0) {
        this.$message({
          message: '默认模板不能删除',
          type: 'warning'
        })
      }
      else {
        this.deleteUENum = 1;
        this.deleteUEId = targetName;
        this.deleteUEcontent = true;
      }
    },
    // 切换报告
    changeNewsTab(tab,event) {      
      let ue = UE.getEditor('intelligentEditor');
      ue.ready(function() {
        ue.execCommand('intelligentEditor');
      });
      this.changeTempReport(2,tab.name,this.pageInfo.enterpriseId);
    },
    // 保存报告
    saveReport() {
      this.UEtitle = '';
      this.tempOrReport = '报告';
      this.saveUEcontent = true;
    },
    // 删除报告
    editNews(targetName,action) {
      this.deleteUENum = 2;
      this.deleteUEId = targetName;
      this.deleteUEcontent = true;
    },
    // 保存模板、报告
    saveOPeration() { // 确认保存
      let ue = UE.getEditor('intelligentEditor'),htmlCheck='';
      ue.ready(function() {
        htmlCheck = ue.getContent();
      });
      if(this.UEtitle.replace(/\s/g,'')==''||this.UEtitle.replace(/\s/g,'')==null||this.UEtitle.replace(/\s/g,'')==undefined||this.UEtitle.replace(/\s/g,'')=='undefined') {
        this.$message({
          message: '请输入正确的'+this.tempOrReport+'名称',
          type: 'error'
        })
      }
      else {
        if(htmlCheck.replace(/\s/g,'')==''||htmlCheck.replace(/\s/g,'')==null||htmlCheck.replace(/\s/g,'')==undefined||htmlCheck.replace(/\s/g,'')=='undefined') {
          this.$message({
            message: '要保存的'+this.tempOrReport+'内容为空',
            type: 'error'
          })
        }
        else {
          switch(this.tempOrReport) {
            case '模板':
              this.saveTempReport('/saveModel', {
                modelName: this.UEtitle, // 模板名称
                modelContent: htmlCheck, // 模板内容
                userId: this.globalInfo.usrID // 用户ID
              });
              break;
            case '报告':
              this.saveTempReport('/saveReport', {
                reportName: this.UEtitle, // 报告名称
                reportContent: htmlCheck, // 报告内容
                enterpriseId: this.pageInfo.enterpriseId, // 企业ID
                modelId: this.selectTemp, // 模板ID
                userId: this.globalInfo.usrID // 用户ID
              });
              break;
          };
        }        
      }
    },
    saveTempReport(link,info) { // 保存操作
      this.axios({
        method: 'post',
        url: link,
        data: info,
      })
      .then((res) => {
        if(res.data.success) {
          this.$message({
            message: '保存成功',
            type: 'success'
          })
        }
        else {
          this.$message({
            message: '保存失败',
            type: 'error'
          })
        };
        this.saveUEcontent = false;
        this.autoGetTempReportList(this.pageInfo.enterpriseId);
      })
      .catch(err => {
        this.$message({
          message: '保存失败',
          type: 'error'
        });
        this.saveUEcontent = false;
        this.autoGetTempReportList(this.pageInfo.enterpriseId);
      });
    },
    // 删除模板、报告
    deleteOPeration() { // 确认删除
      this.deleteTempReport(this.deleteUENum,this.deleteUEId);
      this.deleteUEcontent = false;
    },
    deleteTempReport(typeNum,idNum) { // 删除操作
      this.axios({
        method: 'post',
        url: '/deleteReportOrModelInfo',
        data: {
          objectType: typeNum.toString(), // 1：模板；2：报告
          objectId: Number(idNum), // 报告、模板ID
          userId: this.globalInfo.usrID // 用户ID
        },
      })
      .then((res) => {
        if(res.data.success) {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
        }
        else {
          this.$message({
            message: '删除失败',
            type: 'error'
          })
        };
        this.autoGetTempReportList(this.pageInfo.enterpriseId);
      })
      .catch(err => {
        this.$message({
          message: '删除失败',
          type: 'error'
        });
        this.autoGetTempReportList(this.pageInfo.enterpriseId);
      });
    },
    // 切换模板、报告
    changeTempReport(typeNum,idNum,companyID) {
      let tempReportList = this;
      this.axios({
        method: 'post',
        url: '/getReportOrModelInfo',
        data: {
          objectType: typeNum.toString(), // 1：模板；2：报告
          objectId: Number(idNum), // 报告、模板ID
          enterpriseId: Number(companyID), // 企业ID
        },
      })
      .then((res) => {
        if(res.data.success) {
          let htmlContent;
          switch(Number(typeNum)){
            case 1:
              if(res.data.data.reportList.length>0) {
                tempReportList.newsList = res.data.data.reportList;
                tempReportList.selectNews = '';
                tempReportList.showReportList = true;
              }
              else {
                tempReportList.showReportList = false;
              };
              htmlContent = res.data.data.content.modelContent;
              break;
            case 2:
              htmlContent = res.data.data.content.reportContent;
              break;
          };  
          let ue = UE.getEditor('intelligentEditor');
          ue.ready(function() {
            ue.execCommand('cleardoc');
            ue.setContent(htmlContent);
          });
        }
      })
      .catch(err => {
      });
    },
    // 保存模板、报告
    saveTempOrReport(link,info) {
      // 表格信息
      this.axios({
        method: 'post',
        url: link,
        data: info,
      })
      .then((res) => {

      })
      .catch(err => {
        // console.log(err);
      });
    },
    // 获得模板列表（自动生成报告）
    autoGetTempReportList(ID) {
      let tempReportList = this;
      this.axios({
        method: 'post',
        url: '/getAutoProduceReportInfo',
        data: {
          enterpriseId: Number(ID),
          userId: this.globalInfo.usrID // 用户ID
        },
      })
      .then((res) => {
        if(res.data.success) {
          if(res.data.data.model.length>0) {
            tempReportList.templateList = res.data.data.model;
            tempReportList.templateList.unshift({
              modelId: 0,
              modelName:'默认'
            });
          }
          else {
            tempReportList.templateList = [{
              modelId: 0,
              modelName:'默认'
            }];
          };
          if(res.data.data.report.length>0) {
            tempReportList.newsList = res.data.data.report;
            tempReportList.selectNews = '';
            tempReportList.showReportList = true;
          }
          else {
            tempReportList.showReportList = false;
          };
          tempReportList.selectTemp = 0;
          let ue = UE.getEditor('intelligentEditor');        
          ue.ready(function() {
            var ueInterval = setInterval(function() {
              if(tempReportList.defaultReportStatus) {
                ue.setContent($('.defaultReportTemp').html());
                clearInterval(ueInterval)
              };
            },500)
          }); 
        }
      })
      .catch(err => {
        // console.log(err);
      });
    }
  },
  components:{
    defaultTemp, // 默认报告
  }
}