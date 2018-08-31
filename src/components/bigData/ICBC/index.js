import globalFilter from '../../../assets/global/globalFilter.js'
import globalFC from '../../../assets/global/globalFC.js'
export default {
  name: 'bigData',
  data() {
    return {
      color:['i1','i2','i3','i4','i5'],  //北京色
      span:['span1','span2','span3','span4','span5'],  //时间颜色
      sp:['sp1','sp2','sp3','sp4','sp5'],  //时间轴的背景色
      jumpFlag: '#biscfomation1',
      jumpShowFlag: true,
      // 标签信息
      mationLable:[
        {name:'股权出质',num:'',label:'#assetsfomation1',C:{color:'#66b3ff'},B:{background:'#72aFFF',
        'box-shadow': '1px 1px 6px 1px #72aFFF',
        '-webkit-box-shadow': '1px 1px 6px 1px #72aFFF',
        '-moz-box-shadow': '1px 1px 6px 1px #72aFFF',
        '-o-box-shadow': '1px 1px 6px 1px #72aFFF',
        '-ms-box-shadow': '1px 1px 6px 1px #72aFFF'}},
        {name:'股权冻结',num:'',label:'#StockRight1',C:{color:'#8cea00'},B:{background:'#ef7e4d',
        'box-shadow': '1px 1px 6px 1px #ef7e4d',
        '-webkit-box-shadow': '1px 1px 6px 1px #ef7e4d',
        '-moz-box-shadow': '1px 1px 6px 1px #ef7e4d',
        '-o-box-shadow': '1px 1px 6px 1px #ef7e4d',
        '-ms-box-shadow': '1px 1px 6px 1px #ef7e4d'}},
        {name:'动产抵押',num:'',label:'#ChattelMortgage1',C:{color:'#921aff'},B:{background:'#f3b954',
        'box-shadow': '1px 1px 6px 1px #f3b954',
        '-webkit-box-shadow': '1px 1px 6px 1px #f3b954',
        '-moz-box-shadow': '1px 1px 6px 1px #f3b954',
        '-o-box-shadow': '1px 1px 6px 1px #f3b954',
        '-ms-box-shadow': '1px 1px 6px 1px #f3b954'}},
        {name:'严重违法失信',num:'',label:'#SeriousIllegality1',C:{color:'#ff0000'},B:{background:'#9e84fd',
        'box-shadow': '1px 1px 6px 1px #9e84fd',
        '-webkit-box-shadow': '1px 1px 6px 1px #9e84fd',
        '-moz-box-shadow': '1px 1px 6px 1px #9e84fd',
        '-o-box-shadow': '1px 1px 6px 1px #9e84fd',
        '-ms-box-shadow': '1px 1px 6px 1px #9e84fd'}},
        {name:'经营异常',num:'',label:'#abnormalfomation1',C:{color:'#ff8000'},B:{background:'#72aFFF',
        'box-shadow': '1px 1px 6px 1px #72aFFF',
        '-webkit-box-shadow': '1px 1px 6px 1px #72aFFF',
        '-moz-box-shadow': '1px 1px 6px 5px #72aFFF',
        '-o-box-shadow': '1px 1px 6px 1px #72aFFF',
        '-ms-box-shadow': '1px 1px 6px 1px #72aFFF'}},
        {name:'行政处罚',num:'',label:'#punishfomation1',C:{color:'#005ab5'},B:{background:'#f3b954',
        'box-shadow': '1px 1px 6px 1px #f3b954',
        '-webkit-box-shadow': '1px 1px 6px 1px #f3b954',
        '-moz-box-shadow': '1px 1px 6px 5px #f3b954',
        '-o-box-shadow': '1px 1px 6px 1px #f3b954',
        '-ms-box-shadow': '1px 1px 6px 1px #f3b954'}},
        {name:'被执行人',num:'',label:'#implementfomation1',C:{color:'#46a3ff'},B:{background:'#72e6ff',
        'box-shadow': '1px 1px 6px 1px #72e6ff',
        '-webkit-box-shadow': '1px 1px 6px 1px #72e6ff',
          '-moz-box-shadow': '1px 1px 6px 5px #72e6ff',
        '-o-box-shadow': '1px 1px 6px 1px #72e6ff',
        '-ms-box-shadow': '1px 1px 6px 1px #72e6ff'}},
        {name:'失信被执行',num:'',label:'#Dishonesty1',C:{color:'#c6a300'},B:{background:'#9e84fd',
        'box-shadow': '1px 1px 6px 1px #9e84fd',
        '-webkit-box-shadow': '1px 1px 6px 1px #9e84fd',
        '-moz-box-shadow': '1px 1px 6px 5px #9e84fd',
        '-o-box-shadow': '1px 1px 6px 1px #9e84fd',
        '-ms-box-shadow': '1px 1px 6px 1px #9e84fd'}}
      ],
      CompanyInfo:[],  //企业照面信息
      CompanyInfo1:{
        frName:'',
        entType:'',
        regCap:'',
        recCap:'',
        esDate:'',
        regOrg:'',
        apprDate:'',
        openFrom:'',
        openTo:'',
        Address:'', // 所在地
        industryCode:'',
        industryName:'',
        industryPhyCode:'',
        industryPhyName:'',
        county:'',
        province:'',
        city:'',
        areaCode:'',
        address:'',
        operateScope:''
      },
      shortName:'',//公司简称
      stockId:'',//股票代码
      listingArea:'',//模块
      shortName1:'',//公司简称
      stockId1:'',//股票代码
      listingArea1:'',//模块
      companyName: '',
      Manager:[],  // 主要人员信息
      man_total:'',
      Managershow:true,   // 主要人员信息显示更多信息
      Manager1:[],  // 主要人员信息
      Shareholder:[], //企业股东信息
      Shareholdershow:true,//企业股东信息显示更多
      Share_total:'',
      Shareholder1:[],
      InformationChange:[], //企业名称信息
      InformationConent:[],//企业变更信息
      Branching:[],  //企业分支结构信息
      Branching1:[],
      Branchingshow:true,  //企业分支结构信息显示更多
      Branchingtol:'',
      OutboundInvest:[],  //企业对外投资信息
      OutboundInvest1:[],
      OutboundInvest_1:'',
      OutboundInvestshow:true,  //企业对外投资信息显示更多
      OutboundInvesttol:'',
      ClearInfor:[],   //清算信息
      ClearInforshow:true,    //清算信息显示gengduo
      ClearInfor1:[],
      ClearInfortol:'',
      EquityRegshow:true,  //股权出质登记信息显示更多
      EquityReg:{     //股权出质登记信息
        impEquityNo:'',
        impExeState:'',
        impPledgor:'',
        impPrLicensenNo:'',
        impAm:'',
        impOrg:'',
        impOrgLicenseNo:'',
        impEqupleDate:'',
        impPubDate:'',
        impAltList:'',
        altDate:'',
        altContent:''
      },
      EquityReg1:[],
      StockRight1:[],
      StockRightshow:true,   //股权解冻信息显示更多
      StockRigh1:[],
      StockRight:{     //股权解冻信息
        judicialInv:'',
        judicialFrozState:'',
        judicialFroAm:'',
        frozPublicDate:'',
        frozDeadline:'',
        frozFrom:'',
        frozTo:'',
        judicialCerTypeName:'',
        judicialCerNo:'',
        frozAuth:'',
        frozExecuteItem:'',
        frozExecuteNo:'',
        frozDocNo:'',
        keepFrozDeadline:'',
        keepFrozFrom:'',
        keepFrozTo:'',
        thawAuth:'',
        thawExecuteItem:'',
        thawExecuteNo:'',
        thawDocNo:'',
        thawDate:'',
        thawPublicDate:'',
        invalidTime:'',
        invalidReason:''
      },
      ChattelMortgageshow:true,    //动产抵押登记信息显示更多
      ChattelMortgage1:[],
      ChattelMortgage1List:[],
      ChattelMortgage:{     //动产抵押登记信息
        mortRegNo:'',
        mortStatus:'',
        regDate:'',
        regOrg:'',
        priclasecKind:'',
        priclasecAm:'',
        warcov:'',
        pefperFrom:'',
        pefperTo:'',
        canDate:'',
        canReason:'',
        canReason:'',
        mortOrg:'',
        blicType:'',
        blicNo:'',
        mortLoc:'',
        morguaInfoList:'',
        guaName:'',
        guaOwn:'',
        guaDes:''
      },
      EquityRegList:[],
      Administrative:[],  //企业行政处罚历史
      Administrativeshow:true,  //企业行政处罚历史显示更多
      Administrative1:[],
      SeriousIllegality:[],  //严重违法失信信息
      SeriousIllegalityshow:true,  //严重违法失信信息显示更多
      SeriousIllegality1:[],
      AbnormalOpera:[],  //经营异常信息经营
      AbnormalOperashow:true,  //经营异常信息经营更多显示与否
      AbnormalOpera1:[],
      ListMort:[],
      Beexecutedc:[], //被执行人详细信息
      Beexecutedcshow:true, // ?
      Beexecutedc1:[],
      Dishonesty:[],  //失信被执行人的详细信息
      Dishonestyshow:true,   //失信被执行人的详细信息更多显示与否
      Dishonesty1:[],
      historyNameList:[],//企业历史名称
      creditCode:'',//统一社会信用代码：
      regNo:'',//注册号：
      orgCode:'',//组织机构代码：
      table_headComInfo:[],
      table_headBran:[],
      table_headOutbound:[],
      table_headpunish:[],
      table_headSerious:[],
      table_headSeriousru:[],
      table_headSeriouschu:[],
      table_headabnormal:[],
      table_headabnormalru:[],
      table_headabnormalchu:[],
      table_headimplement:[],
      table_headDishonesty:[],
      value7:[
        {name:'eee',age:34},
        {name:'eee',age:34}
      ],
      companyName:[],
      qiye_change:[],
      qiyeData:[],
      denjZT:'',//登记状态
      zhuxiaoRQ:'',//注销日期
      diaoxiaoRQ:'',//吊销日期
      updateDate:'',//截止日期
      moreShow:false,
      // assets:false,
      historyName: false,
      historyName2: false,
      // Stockshow1:false,
      // Stockshow12:false,
      index:'',
      enter1:'',
      changeInfo1:[],// 企业变更时间轴上方的
      time_zhou:[],//企业变更时间轴
      change_time:[],//企业变更时间
      changeInfo2:[],//企业变更时间轴下方的
      searchData:'',
      tableHeight:390,
      ChattelMortgageList:[],
      downmore:false,
      show5Flag: false,
      show8Flag:false,
      dialogVisible: false,
      more12Show: true,
      more13Show: true,
      Beexecutedcstshow:true //被执行人信息更多显示与否
    }
  },
  created(){
    // 获取企业名称
     if(this.globalInfo.companyName==""){
       this.companyName  =''
     }else{
       this.companyName = this.globalInfo.companyName
     }
      this.getCompanyInfo(this.companyName);  //企业照面信息
      this.getCompanyManagementList(this.companyName,1,3);  //企业主要人员管理信息
      this.getShareholderContributionList(this.companyName,1,5);//公司股东信息
      this.getInformationChangeList(this.companyName);    // 企业变更信息
      this.getBranchingStructureList(this.companyName,1,5);  //企业分支结构信息
      this.getOutboundInvestmentCompanyList(this.companyName);    //企业对外投资信息
      this.getClearInformationList(this.companyName,1,5);  //清算信息
      this.getEquityRegistrationList(this.companyName,1,1);//股权出质登记信息
      this.getStockRightThawingList(this.companyName,1,1);//股权解冻信息
      this.getChattelMortgageList(this.companyName,1,1); //动产抵押登记信息
      this.getAdministrativeSanctionList(this.companyName,1,5); //企业行政处罚历史
      this.getSeriousIllegalityList(this.companyName,1,5);// 严重违法失信信息
      this.getAbnormalOperationList(this.companyName,1,5);   // 经营异常信息经营
      this.getBeexecutedcList(this.companyName,1,5);  //被执行人详细信息
      this.getDishonestyBeexecutedcList(this.companyName,1,5);   //失信被执行人的详细信息
      this.gethistoryNameChangeList(this.companyName); //获取企业历史名称变更信息

    // 抽调表头
    this.table_headComInfo =  this.globalData.basePageInfo.bigData.table_headComInfo
    this.table_headBran = this.globalData.basePageInfo.bigData.table_headBran
    this.table_headOutbound = this.globalData.basePageInfo.bigData.table_headOutbound
    this.table_headpunish = this.globalData.basePageInfo.bigData.table_headpunish
    this.table_headSerious = this.globalData.basePageInfo.bigData.table_headSerious
    this.table_headSeriousru = this.globalData.basePageInfo.bigData.table_headSeriousru
    this.table_headSeriouschu = this.globalData.basePageInfo.bigData.table_headSeriouschu
    this.table_headabnormal = this.globalData.basePageInfo.bigData.table_headabnormal
    this.table_headabnormalru = this.globalData.basePageInfo.bigData.table_headabnormalru
    this.table_headabnormalchu = this.globalData.basePageInfo.bigData.table_headabnormalchu
    this.table_headimplement = this.globalData.basePageInfo.bigData.table_headimplement
    this.table_headDishonesty = this.globalData.basePageInfo.bigData.table_headDishonesty


  },
  methods: {
    clickTabhandler(item) {
      this.current = item;
    },
    //清空输入框内容
    ClearNull(){
      // this.searchData = ''
    },
    // 搜索开始----------------
    search(e,index){
      let res1 = /[*$<>%.?#^&!@]/g;
      if(res1.test(this.searchData)){
        this.searchData=this.searchData.replace(res1,'')
      }
      // Enter回车事件
      if(e.keyCode ===13){
        $('button#clearSearch').css({
          background:'#72afff',
          color: '#fff'
        })
        // 移除span标签避免二次搜索的bug
          $('.red').each(function(){
            let txt= $(this).html()
            $(this).replaceWith(txt)
          })
          switch(index){
            case 1: let content = $('.more1 .tablge_g tr td div.cell')

                      if(this.searchData!==''){
                        let regExp = new RegExp(this.searchData,'g')
                        let re = '<span class="red">'+this.searchData+'</span>'
                        for(let i=0;i<content.length;i++){
                          // console.log(content[i]);
                          if($('.more1 .tablge_g tr td div.cell').eq(i).html().indexOf(this.searchData)>=0) {
                            $('.more1 .tablge_g tr td div.cell').eq(i).html(content[i].innerText.replace(regExp,re))
                          }
                        }
                    //     // 显示搜索内容相关的table
                    //     for(var i=0; i<$('.more1 .tablge_g table tbody tr').length; i++) {
                    //       if($('.more1 .tablge_g table tbody tr').eq(i).html().indexOf(this.searchData)<0) {
                    //         $('.more1 .tablge_g table tbody tr').eq(i).hide();
                    //       }
                    //     }
                    //   }else{
                    //       $('.more1 .tablge_g table tbody').hide();
                    //   }
                       $('.more1 .tablge_g table tbody tr').hide().filter(":contains('"+this.searchData+"')").show()
                      //  $('.more1 .tablge_g table tr ').eq(0).show()
                    }else{
                      $('.more1 .tablge_g table tbody tr').hide()
                    }
                      break
            case 2:   let content1 = $('.more2 .tablge_g tr td div.cell')
                      if(this.searchData!==''){
                        let regExp = new RegExp(this.searchData,'g')
                        for(let i=0;i<content1.length;i++){
                          let re = '<span class="red ">'+this.searchData+'</span>'
                          $('.more2 .tablge_g tr td div.cell').eq(i).html(content1[i].innerText.replace(regExp,re))
                        }
                        // 显示搜索内容相关的table
                      //   for(var i=0; i<$('.more2 .tablge_g table tbody tr').length; i++) {
                      //     if($('.more2 .tablge_g table tbody tr').eq(i).html().indexOf(this.searchData)>0) {
                      //       // console.log(i);
                      //       for(let j=0;j<$('.more2 .tablge_g table tbody tr').length; j++){
                      //         if(j==i){
                      //           $('.more2 .tablge_g table tbody .tablename'+j).show()
                      //         }else{
                      //           $('.more2 .tablge_g table tbody .tablename'+j).hide()
                      //         }
                      //       }
                      //     }
                      //   }
                      // }
                        $('.more2 .tablge_g table tbody tr').hide().filter(":contains('"+this.searchData+"')").show()

                      }else{
                        $('.more2 .tablge_g table tbody tr').hide()
                      }
                      break
            case 3: let content2 = $('.more3 .tablge_g  tr td div.cell')
                      if(this.searchData!==''){
                        let regExp = new RegExp(this.searchData,'g')
                        for(let i=0;i<content2.length;i++){
                          let re = '<span class="red ">'+this.searchData+'</span>'
                          $('.more3 .tablge_g tr td div.cell').eq(i).html(content2[i].innerText.replace(regExp,re))
                        }
                        // 显示搜索内容相关的table
                      //   for(var i=0; i<$('.more3 .tablge_g table tbody tr').length; i++) {
                      //     if($('.more3 .tablge_g table tbody tr').eq(i).html().indexOf(this.searchData)>0) {
                      //       // console.log(i);
                      //       for(let j=0;j<$('.more3 .tablge_g table tbody tr').length; j++){
                      //         if(j==i){
                      //           $('.more3 .tablge_g table tbody .tablename'+j).show()
                      //         }else{
                      //           $('.more3 .tablge_g table tbody .tablename'+j).hide()
                      //         }
                      //       }
                      //     }
                      //   }
                      // }
                      $('.more3 .tablge_g table tbody tr').hide().filter(":contains('"+this.searchData+"')").show()

                    }else{
                      $('.more3 .tablge_g table tbody tr').hide()
                    }
                      break
            case 4:   let content3 = $('.more4 .tablge_g  tr td div.cell')
                      // console.log(content3);
                     if(this.searchData!==''){
                       let regExp = new RegExp(this.searchData,'g')
                       for(let i=0;i<content3.length;i++){
                         let re = '<span class="red ">'+this.searchData+'</span>'
                         $('.more4 .tablge_g tr td div.cell').eq(i).html(content3[i].innerText.replace(regExp,re))
                       }
                       // 显示搜索内容相关的table
                      //  for(var i=0; i<$('.more4 .tablge_g table tbody tr').length; i++) {
                      //    if($('.more4 .tablge_g table tbody tr').eq(i).html().indexOf(this.searchData)>0) {
                      //     //  console.log(i);
                      //      for(let j=0;j<$('.more4 .tablge_g table tbody tr').length; j++){
                      //        if(j==i){
                      //          $('.more4 .tablge_g table tbody tr').eq(j).show()
                      //        }else{
                      //          $('.more4 .tablge_g table tbody tr').eq(j).hide()
                      //        }
                      //      }
                      //    }
                      //  }
                      $('.more4 .tablge_g table tbody tr').hide().filter(":contains('"+this.searchData+"')").show()

                    }else{
                      $('.more4 .tablge_g table tbody tr').hide()
                    }
                      break
            case 5: let content4 = $('.more5 .tablge_g  tr td div.cell')
                      if(this.searchData!==''){
                        let regExp = new RegExp(this.searchData,'g')
                        for(let i=0;i<content4.length;i++){
                          let re = '<span class="red ">'+this.searchData+'</span>'
                          $('.more5 .tablge_g tr td div.cell').eq(i).html(content4[i].innerText.replace(regExp,re))
                        }
                        // 显示搜索内容相关的table
                      //   for(var i=0; i<$('.more5 .tablge_g table tbody tr').length; i++) {
                      //     if($('.more5 .tablge_g table tbody tr').eq(i).html().indexOf(this.searchData)>0) {
                      //       // console.log(i);
                      //       for(let j=0;j<$('.more5 .tablge_g table tbody tr').length; j++){
                      //         if(j==i){
                      //           $('.more5 .tablge_g table tbody tr').eq(j).show()
                      //         }else{
                      //           $('.more5 .tablge_g table tbody tr').eq(j).hide()
                      //         }
                      //       }
                      //     }
                      //   }
                      // }
                      $('.more5 .tablge_g table tbody tr').hide().filter(":contains('"+this.searchData+"')").show()

                      }else{
                        $('.more5 .tablge_g table tbody tr').hide()
                      }
                      break
            case 6:   let content5 = $('.more6 .tablge_g  tr td div.cell')
                        if(this.searchData!==''){
                          let regExp = new RegExp(this.searchData,'g')
                          for(let i=0;i<content5.length;i++){
                            let re = '<span class="red ">'+this.searchData+'</span>'
                            $('.more6 .tablge_g tr td div.cell').eq(i).html(content5[i].innerText.replace(regExp,re))
                          }
                        //   // 显示搜索内容相关的table
                        //   for(var i=0; i<$('.more6 .tablge_g table tbody tr').length; i++) {
                        //     if($('.more6 .tablge_g table tbody tr').eq(i).html().indexOf(this.searchData)>0) {
                        //       // console.log(i);
                        //       for(let j=0;j<$('.more6 .tablge_g table tbody tr').length; j++){
                        //         if(j==i){
                        //           $('.more6 .tablge_g table tbody tr').eq(j).show()
                        //         }else{
                        //           $('.more6 .tablge_g table tbody tr').eq(j).hide()
                        //         }
                        //       }
                        //     }
                        //   }
                        // }
                          $('.more6 .tablge_g table tbody tr').hide().filter(":contains('"+this.searchData+"')").show()

                        }else{
                          $('.more6 .tablge_g table tbody tr').hide()
                        }
                        break
            case 7: let content6 = $('.more7 .tablge_g  tr td div.cell')
                      if(this.searchData!==''){
                        let regExp = new RegExp(this.searchData,'g')
                        for(let i=0;i<content6.length;i++){
                          let re = '<span class="red ">'+this.searchData+'</span>'
                          $('.more7 .tablge_g tr td div.cell').eq(i).html(content6[i].innerText.replace(regExp,re))
                        }
                        // 显示搜索内容相关的table
                      //   for(var i=0; i<$('.more7 .tablge_g table tbody tr').length; i++) {
                      //     if($('.more7 .tablge_g table tbody tr').eq(i).html().indexOf(this.searchData)>0) {
                      //       // console.log(i);
                      //       for(let j=0;j<$('.more7 .tablge_g table tbody tr').length; j++){
                      //         if(j==i){
                      //           $('.more7 .tablge_g table tbody tr').eq(j).show()
                      //         }else{
                      //           $('.more7 .tablge_g table tbody tr').eq(j).hide()
                      //         }
                      //       }
                      //     }
                      //   }
                      // }
                        $('.more7 .tablge_g table tbody tr').hide().filter(":contains('"+this.searchData+"')").show()

                      }else{
                        $('.more7 .tablge_g table tbody tr').hide()
                      }
                      break
            case 8:   let content7 = $('.more8 .tablge_g  tr td div.cell')
                      if(this.searchData!==''){
                        let regExp = new RegExp(this.searchData,'g')
                        for(let i=0;i<content7.length;i++){
                          let re = '<span class="red ">'+this.searchData+'</span>'
                          $('.more8 .tablge_g tr td div.cell').eq(i).html(content7[i].innerText.replace(regExp,re))
                        }
                        // 显示搜索内容相关的table
                      //   for(var i=0; i<$('.more8 .tablge_g table tbody tr').length; i++) {
                      //     if($('.more8 .tablge_g table tbody tr').eq(i).html().indexOf(this.searchData)>0) {
                      //       // console.log(i);
                      //       for(let j=0;j<$('.more8 .tablge_g table tbody tr').length; j++){
                      //         if(j==i){
                      //           $('.more8 .tablge_g table tbody tr').eq(j).show()
                      //         }else{
                      //           $('.more8 .tablge_g table tbody tr').eq(j).hide()
                      //         }
                      //       }
                      //     }
                      //   }
                      // }
                        $('.more8 .tablge_g table tbody tr').hide().filter(":contains('"+this.searchData+"')").show()

                      }else{
                        $('.more8 .tablge_g table tbody tr').hide()
                      }

                      break
            case 9:   let content8 = $('.more9 .tablge_g  tr td div.cell')
                      if(this.searchData!==''){
                        let regExp = new RegExp(this.searchData,'g')
                        for(let i=0;i<content8.length;i++){
                          let re = '<span class="red ">'+this.searchData+'</span>'
                          $('.more9 .tablge_g tr td div.cell').eq(i).html(content8[i].innerText.replace(regExp,re))
                        }
                        // 显示搜索内容相关的table
                      //   for(var i=0; i<$('.more9 .tablge_g table tbody tr').length; i++) {
                      //     if($('.more9 .tablge_g table tbody tr').eq(i).html().indexOf(this.searchData)<0) {
                      //       $('.more9 .tablge_g table tbody tr').eq(i).hide()
                      //     }
                      //   }
                      // }
                      $('.more9 .tablge_g table tbody tr').hide().filter(":contains('"+this.searchData+"')").show()

                    }else{
                      $('.more9 .tablge_g table tbody tr').hide()
                    }
                      break
            case 10:   let content9 = $('.more10 .tablge_g  tr td div.cell')
                      if(this.searchData!==''){
                        let regExp = new RegExp(this.searchData,'g')
                        for(let i=0;i<content9.length;i++){
                          let re = '<span class="red ">'+this.searchData+'</span>'
                          $('.more10 .tablge_g tr td div.cell').eq(i).html(content9[i].innerText.replace(regExp,re))
                        }
                        // 显示搜索内容相关的table
                        // for(var i=0; i<$('.more10 .tablge_g table tbody tr').length; i++) {
                        //   if($('.more10 .tablge_g table tbody tr').eq(i).html().indexOf(this.searchData)>0) {
                        //     // console.log(i);
                        //     for(let j=0;j<$('.more10 .tablge_g table tbody tr').length; j++){
                        //       if(j==i){
                        //         $('.more10 .tablge_g table tbody tr').eq(j).show()
                        //       }else{
                        //         $('.more10 .tablge_g table tbody tr').eq(j).hide()
                        //       }
                        //     }
                        //   }
                        // }
                      // }
                      $('.more10 .tablge_g table tbody tr').hide().filter(":contains('"+this.searchData+"')").show()

                    }else{
                      $('.more10 .tablge_g table tbody tr').hide()
                    }
                      break

            case 12:   let content11 = $('.more12 .tablge_g  tr td')
                       let arr12 = this.EquityReg1;
                      if(this.searchData!==''){
                        let regExp = new RegExp(this.searchData,'g')
                        for(let i=0;i<content11.length;i++){
                          let re = '<span class="red ">'+this.searchData+'</span>'
                          $('.more12 .tablge_g tr td').eq(i).html(content11[i].innerText.replace(regExp,re))
                        };
                        // 显示搜索内容相关的table
                        // $('.more12 .tablge_g table').hide().filter(":contains('"+this.searchData+"')").show()
                        // for(var i=0; i<arr12.length; i++) {
                        //   if($('.more12 .tablge_g table').eq(i).html().indexOf(this.searchData)<0) {
                        //       arr12[i].tableShowFlag = false;
                        //       this.$set(this.EquityReg1, i, arr12[i]);
                        //    }
                        // };
                        // // console.log('b',this.EquityReg1)
                        // this.EquityReg1 = arr;
                      // }
                      // else{
                      //   this.more12Show = false;
                      // }
                      $('.more12 .tablge_g table').hide().filter(":contains('"+this.searchData+"')").show()

                    }else{
                      $('.more12 .tablge_g table ').hide()
                    }
                      break;
            case 13:   let content12 = $('.more13 .tablge_g  tr td');
                      let arr13 = this.StockRight1;
                      if(this.searchData!==''){
                        let regExp = new RegExp(this.searchData,'g')
                        for(let i=0;i<content12.length;i++){
                          let re = '<span class="red ">'+this.searchData+'</span>'
                          $('.more13 .tablge_g tr td').eq(i).html(content12[i].innerText.replace(regExp,re))
                        }
                        // 显示搜索内容相关的table
                      //   for(var i=0; i<$('.more13 .tablge_g table').length; i++) {
                      //     if($('.more13 .tablge_g table').eq(i).html().indexOf(this.searchData)<0) {
                      //       arr13[i].tableShowFlag = false;
                      //       this.$set(this.StockRight1,i,arr13[i]);
                      //     }
                      //   }
                      // }else{
                      //   this.more13Show =false
                      // }
                      $('.more13 .tablge_g table').hide().filter(":contains('"+this.searchData+"')").show()

                    }else{
                      $('.more13 .tablge_g table ').hide()
                    }
                      break;
            case 14:   let content13 = $('.more14 .tablge_g div table tr td')
                        // console.log(content13);
                          if(this.searchData!==''){
                            let regExp = new RegExp(this.searchData,'g');
                            let re = '<span class="red ">'+this.searchData+'</span>';
                            for(let i=0;i<content13.length;i++){
                              if($('.more14 .tablge_g tr td').eq(i).html().indexOf(this.searchData)>=0) {
                                $('.more14 .tablge_g tr td').eq(i).html(content13[i].innerText.replace(regExp,re))
                              }
                            }
                            // 显示搜索内容相关的table
                          //   for(var i=0; i<$('.more14 .tablge_g div').length; i++) {
                          //     if($('.more14 .tablge_g div table').eq(i).html().indexOf(this.searchData)<0) {
                          //       this.ChattelMortgage1[i].tableShowFlag = false;
                          //     }
                          //   }
                          // }
                          // else{
                          //   for(var i=0; i<$('.more14 .tablge_g div').length; i++) {
                          //       this.ChattelMortgage1[i].tableShowFlag = false;
                          //   }
                          // }
                          $('.more14 .tablge_g div').hide().filter(":contains('"+this.searchData+"')").show()

                        }else{
                          $('.more14 .tablge_g div ').hide()
                        }
                          break;
          }
      }
    },
    searchdata(index){
      $('button#clearSearch').css({
        background:'#72afff',
        color: '#fff'
      })
      let res1 = /[*$<>%.?#^&!@]/g;
      if(res1.test(this.searchData)){
        this.searchData=this.searchData.replace(res1,'')
      }
      // 移除span标签避免二次搜索的bug
        $('.red').each(function(){
          let txt= $(this).html()
          $(this).replaceWith(txt)
        })
        switch(index){
          case 1: let content = $('.more1 .tablge_g tr td div.cell')

                    if(this.searchData!==''){
                      let regExp = new RegExp(this.searchData,'g')
                      let re = '<span class="red">'+this.searchData+'</span>'
                      for(let i=0;i<content.length;i++){
                        // console.log(content[i]);
                        if($('.more1 .tablge_g tr td div.cell').eq(i).html().indexOf(this.searchData)>=0) {
                          $('.more1 .tablge_g tr td div.cell').eq(i).html(content[i].innerText.replace(regExp,re))
                        }
                      }
                  //     // 显示搜索内容相关的table
                  //     for(var i=0; i<$('.more1 .tablge_g table tbody tr').length; i++) {
                  //       if($('.more1 .tablge_g table tbody tr').eq(i).html().indexOf(this.searchData)<0) {
                  //         $('.more1 .tablge_g table tbody tr').eq(i).hide();
                  //       }
                  //     }
                  //   }else{
                  //       $('.more1 .tablge_g table tbody').hide();
                  //   }
                     $('.more1 .tablge_g table tbody tr').hide().filter(":contains('"+this.searchData+"')").show()
                    //  $('.more1 .tablge_g table tr ').eq(0).show()
                  }else{
                    $('.more1 .tablge_g table tbody tr').hide()
                  }
                    break
          case 2:   let content1 = $('.more2 .tablge_g tr td div.cell')
                    if(this.searchData!==''){
                      let regExp = new RegExp(this.searchData,'g')
                      for(let i=0;i<content1.length;i++){
                        let re = '<span class="red ">'+this.searchData+'</span>'
                        $('.more2 .tablge_g tr td div.cell').eq(i).html(content1[i].innerText.replace(regExp,re))
                      }
                      // 显示搜索内容相关的table
                    //   for(var i=0; i<$('.more2 .tablge_g table tbody tr').length; i++) {
                    //     if($('.more2 .tablge_g table tbody tr').eq(i).html().indexOf(this.searchData)>0) {
                    //       // console.log(i);
                    //       for(let j=0;j<$('.more2 .tablge_g table tbody tr').length; j++){
                    //         if(j==i){
                    //           $('.more2 .tablge_g table tbody .tablename'+j).show()
                    //         }else{
                    //           $('.more2 .tablge_g table tbody .tablename'+j).hide()
                    //         }
                    //       }
                    //     }
                    //   }
                    // }
                      $('.more2 .tablge_g table tbody tr').hide().filter(":contains('"+this.searchData+"')").show()

                    }else{
                      $('.more2 .tablge_g table tbody tr').hide()
                    }
                    break
          case 3: let content2 = $('.more3 .tablge_g  tr td div.cell')
                    if(this.searchData!==''){
                      let regExp = new RegExp(this.searchData,'g')
                      for(let i=0;i<content2.length;i++){
                        let re = '<span class="red ">'+this.searchData+'</span>'
                        $('.more3 .tablge_g tr td div.cell').eq(i).html(content2[i].innerText.replace(regExp,re))
                      }
                      // 显示搜索内容相关的table
                    //   for(var i=0; i<$('.more3 .tablge_g table tbody tr').length; i++) {
                    //     if($('.more3 .tablge_g table tbody tr').eq(i).html().indexOf(this.searchData)>0) {
                    //       // console.log(i);
                    //       for(let j=0;j<$('.more3 .tablge_g table tbody tr').length; j++){
                    //         if(j==i){
                    //           $('.more3 .tablge_g table tbody .tablename'+j).show()
                    //         }else{
                    //           $('.more3 .tablge_g table tbody .tablename'+j).hide()
                    //         }
                    //       }
                    //     }
                    //   }
                    // }
                    $('.more3 .tablge_g table tbody tr').hide().filter(":contains('"+this.searchData+"')").show()

                  }else{
                    $('.more3 .tablge_g table tbody tr').hide()
                  }
                    break
          case 4:   let content3 = $('.more4 .tablge_g  tr td div.cell')
                    // console.log(content3);
                   if(this.searchData!==''){
                     let regExp = new RegExp(this.searchData,'g')
                     for(let i=0;i<content3.length;i++){
                       let re = '<span class="red ">'+this.searchData+'</span>'
                       $('.more4 .tablge_g tr td div.cell').eq(i).html(content3[i].innerText.replace(regExp,re))
                     }
                     // 显示搜索内容相关的table
                    //  for(var i=0; i<$('.more4 .tablge_g table tbody tr').length; i++) {
                    //    if($('.more4 .tablge_g table tbody tr').eq(i).html().indexOf(this.searchData)>0) {
                    //     //  console.log(i);
                    //      for(let j=0;j<$('.more4 .tablge_g table tbody tr').length; j++){
                    //        if(j==i){
                    //          $('.more4 .tablge_g table tbody tr').eq(j).show()
                    //        }else{
                    //          $('.more4 .tablge_g table tbody tr').eq(j).hide()
                    //        }
                    //      }
                    //    }
                    //  }
                    $('.more4 .tablge_g table tbody tr').hide().filter(":contains('"+this.searchData+"')").show()

                  }else{
                    $('.more4 .tablge_g table tbody tr').hide()
                  }
                    break
          case 5: let content4 = $('.more5 .tablge_g  tr td div.cell')
                    if(this.searchData!==''){
                      let regExp = new RegExp(this.searchData,'g')
                      for(let i=0;i<content4.length;i++){
                        let re = '<span class="red ">'+this.searchData+'</span>'
                        $('.more5 .tablge_g tr td div.cell').eq(i).html(content4[i].innerText.replace(regExp,re))
                      }
                      // 显示搜索内容相关的table
                    //   for(var i=0; i<$('.more5 .tablge_g table tbody tr').length; i++) {
                    //     if($('.more5 .tablge_g table tbody tr').eq(i).html().indexOf(this.searchData)>0) {
                    //       // console.log(i);
                    //       for(let j=0;j<$('.more5 .tablge_g table tbody tr').length; j++){
                    //         if(j==i){
                    //           $('.more5 .tablge_g table tbody tr').eq(j).show()
                    //         }else{
                    //           $('.more5 .tablge_g table tbody tr').eq(j).hide()
                    //         }
                    //       }
                    //     }
                    //   }
                    // }
                    $('.more5 .tablge_g table tbody tr').hide().filter(":contains('"+this.searchData+"')").show()

                    }else{
                      $('.more5 .tablge_g table tbody tr').hide()
                    }
                    break
          case 6:   let content5 = $('.more6 .tablge_g  tr td div.cell')
                      if(this.searchData!==''){
                        let regExp = new RegExp(this.searchData,'g')
                        for(let i=0;i<content5.length;i++){
                          let re = '<span class="red ">'+this.searchData+'</span>'
                          $('.more6 .tablge_g tr td div.cell').eq(i).html(content5[i].innerText.replace(regExp,re))
                        }
                      //   // 显示搜索内容相关的table
                      //   for(var i=0; i<$('.more6 .tablge_g table tbody tr').length; i++) {
                      //     if($('.more6 .tablge_g table tbody tr').eq(i).html().indexOf(this.searchData)>0) {
                      //       // console.log(i);
                      //       for(let j=0;j<$('.more6 .tablge_g table tbody tr').length; j++){
                      //         if(j==i){
                      //           $('.more6 .tablge_g table tbody tr').eq(j).show()
                      //         }else{
                      //           $('.more6 .tablge_g table tbody tr').eq(j).hide()
                      //         }
                      //       }
                      //     }
                      //   }
                      // }
                        $('.more6 .tablge_g table tbody tr').hide().filter(":contains('"+this.searchData+"')").show()

                      }else{
                        $('.more6 .tablge_g table tbody tr').hide()
                      }
                      break
          case 7: let content6 = $('.more7 .tablge_g  tr td div.cell')
                    if(this.searchData!==''){
                      let regExp = new RegExp(this.searchData,'g')
                      for(let i=0;i<content6.length;i++){
                        let re = '<span class="red ">'+this.searchData+'</span>'
                        $('.more7 .tablge_g tr td div.cell').eq(i).html(content6[i].innerText.replace(regExp,re))
                      }
                      // 显示搜索内容相关的table
                    //   for(var i=0; i<$('.more7 .tablge_g table tbody tr').length; i++) {
                    //     if($('.more7 .tablge_g table tbody tr').eq(i).html().indexOf(this.searchData)>0) {
                    //       // console.log(i);
                    //       for(let j=0;j<$('.more7 .tablge_g table tbody tr').length; j++){
                    //         if(j==i){
                    //           $('.more7 .tablge_g table tbody tr').eq(j).show()
                    //         }else{
                    //           $('.more7 .tablge_g table tbody tr').eq(j).hide()
                    //         }
                    //       }
                    //     }
                    //   }
                    // }
                      $('.more7 .tablge_g table tbody tr').hide().filter(":contains('"+this.searchData+"')").show()

                    }else{
                      $('.more7 .tablge_g table tbody tr').hide()
                    }
                    break
          case 8:   let content7 = $('.more8 .tablge_g  tr td div.cell')
                    if(this.searchData!==''){
                      let regExp = new RegExp(this.searchData,'g')
                      for(let i=0;i<content7.length;i++){
                        let re = '<span class="red ">'+this.searchData+'</span>'
                        $('.more8 .tablge_g tr td div.cell').eq(i).html(content7[i].innerText.replace(regExp,re))
                      }
                      // 显示搜索内容相关的table
                    //   for(var i=0; i<$('.more8 .tablge_g table tbody tr').length; i++) {
                    //     if($('.more8 .tablge_g table tbody tr').eq(i).html().indexOf(this.searchData)>0) {
                    //       // console.log(i);
                    //       for(let j=0;j<$('.more8 .tablge_g table tbody tr').length; j++){
                    //         if(j==i){
                    //           $('.more8 .tablge_g table tbody tr').eq(j).show()
                    //         }else{
                    //           $('.more8 .tablge_g table tbody tr').eq(j).hide()
                    //         }
                    //       }
                    //     }
                    //   }
                    // }
                      $('.more8 .tablge_g table tbody tr').hide().filter(":contains('"+this.searchData+"')").show()

                    }else{
                      $('.more8 .tablge_g table tbody tr').hide()
                    }

                    break
          case 9:   let content8 = $('.more9 .tablge_g  tr td div.cell')
                    if(this.searchData!==''){
                      let regExp = new RegExp(this.searchData,'g')
                      for(let i=0;i<content8.length;i++){
                        let re = '<span class="red ">'+this.searchData+'</span>'
                        $('.more9 .tablge_g tr td div.cell').eq(i).html(content8[i].innerText.replace(regExp,re))
                      }
                      // 显示搜索内容相关的table
                    //   for(var i=0; i<$('.more9 .tablge_g table tbody tr').length; i++) {
                    //     if($('.more9 .tablge_g table tbody tr').eq(i).html().indexOf(this.searchData)<0) {
                    //       $('.more9 .tablge_g table tbody tr').eq(i).hide()
                    //     }
                    //   }
                    // }
                    $('.more9 .tablge_g table tbody tr').hide().filter(":contains('"+this.searchData+"')").show()

                  }else{
                    $('.more9 .tablge_g table tbody tr').hide()
                  }
                    break
          case 10:   let content9 = $('.more10 .tablge_g  tr td div.cell')
                    if(this.searchData!==''){
                      let regExp = new RegExp(this.searchData,'g')
                      for(let i=0;i<content9.length;i++){
                        let re = '<span class="red ">'+this.searchData+'</span>'
                        $('.more10 .tablge_g tr td div.cell').eq(i).html(content9[i].innerText.replace(regExp,re))
                      }
                      // 显示搜索内容相关的table
                      // for(var i=0; i<$('.more10 .tablge_g table tbody tr').length; i++) {
                      //   if($('.more10 .tablge_g table tbody tr').eq(i).html().indexOf(this.searchData)>0) {
                      //     // console.log(i);
                      //     for(let j=0;j<$('.more10 .tablge_g table tbody tr').length; j++){
                      //       if(j==i){
                      //         $('.more10 .tablge_g table tbody tr').eq(j).show()
                      //       }else{
                      //         $('.more10 .tablge_g table tbody tr').eq(j).hide()
                      //       }
                      //     }
                      //   }
                      // }
                    // }
                    $('.more10 .tablge_g table tbody tr').hide().filter(":contains('"+this.searchData+"')").show()

                  }else{
                    $('.more10 .tablge_g table tbody tr').hide()
                  }
                    break

          case 12:   let content11 = $('.more12 .tablge_g  tr td')
                     let arr12 = this.EquityReg1;
                    if(this.searchData!==''){
                      let regExp = new RegExp(this.searchData,'g')
                      for(let i=0;i<content11.length;i++){
                        let re = '<span class="red ">'+this.searchData+'</span>'
                        $('.more12 .tablge_g tr td').eq(i).html(content11[i].innerText.replace(regExp,re))
                      };
                      // 显示搜索内容相关的table
                      // $('.more12 .tablge_g table').hide().filter(":contains('"+this.searchData+"')").show()
                      // for(var i=0; i<arr12.length; i++) {
                      //   if($('.more12 .tablge_g table').eq(i).html().indexOf(this.searchData)<0) {
                      //       arr12[i].tableShowFlag = false;
                      //       this.$set(this.EquityReg1, i, arr12[i]);
                      //    }
                      // };
                      // // console.log('b',this.EquityReg1)
                      // this.EquityReg1 = arr;
                    // }
                    // else{
                    //   this.more12Show = false;
                    // }
                    $('.more12 .tablge_g table').hide().filter(":contains('"+this.searchData+"')").show()

                  }else{
                    $('.more12 .tablge_g table ').hide()
                  }
                    break;
          case 13:   let content12 = $('.more13 .tablge_g  tr td');
                    let arr13 = this.StockRight1;
                    if(this.searchData!==''){
                      let regExp = new RegExp(this.searchData,'g')
                      for(let i=0;i<content12.length;i++){
                        let re = '<span class="red ">'+this.searchData+'</span>'
                        $('.more13 .tablge_g tr td').eq(i).html(content12[i].innerText.replace(regExp,re))
                      }
                      // 显示搜索内容相关的table
                    //   for(var i=0; i<$('.more13 .tablge_g table').length; i++) {
                    //     if($('.more13 .tablge_g table').eq(i).html().indexOf(this.searchData)<0) {
                    //       arr13[i].tableShowFlag = false;
                    //       this.$set(this.StockRight1,i,arr13[i]);
                    //     }
                    //   }
                    // }else{
                    //   this.more13Show =false
                    // }
                    $('.more13 .tablge_g table').hide().filter(":contains('"+this.searchData+"')").show()

                  }else{
                    $('.more13 .tablge_g table ').hide()
                  }
                    break;
          case 14:   let content13 = $('.more14 .tablge_g div table tr td')
                      // console.log(content13);
                        if(this.searchData!==''){
                          let regExp = new RegExp(this.searchData,'g');
                          let re = '<span class="red ">'+this.searchData+'</span>';
                          for(let i=0;i<content13.length;i++){
                            if($('.more14 .tablge_g tr td').eq(i).html().indexOf(this.searchData)>=0) {
                              $('.more14 .tablge_g tr td').eq(i).html(content13[i].innerText.replace(regExp,re))
                            }
                          }
                          // 显示搜索内容相关的table
                        //   for(var i=0; i<$('.more14 .tablge_g div').length; i++) {
                        //     if($('.more14 .tablge_g div table').eq(i).html().indexOf(this.searchData)<0) {
                        //       this.ChattelMortgage1[i].tableShowFlag = false;
                        //     }
                        //   }
                        // }
                        // else{
                        //   for(var i=0; i<$('.more14 .tablge_g div').length; i++) {
                        //       this.ChattelMortgage1[i].tableShowFlag = false;
                        //   }
                        // }
                        $('.more14 .tablge_g div').hide().filter(":contains('"+this.searchData+"')").show()

                      }else{
                        $('.more14 .tablge_g div ').hide()
                      }
                        break;
        }
    },
    // 搜索结束--------------
    // 法人跳转
    getDescribe(){
      this.$router.push({
        name: 'society',
        path:'/society',
        params: {
          enterpriseName:this.companyName,
          frName: this.CompanyInfo1.frName
        }
      })
    },
    // 向下更多
    Downmore(item,index){
      this.ChattelMortgage1[index].showFlag = !this.ChattelMortgage1[index].showFlag
      // console.log(this.ChattelMortgage1[index].showFlag);
    },
    Downmore1(){
      this.downmore = !this.downmore
      if(this.downmore){
        $('span.Downmore').removeClass('fa fa-angle-double-down').addClass('fa fa-angle-double-up')
      }else{
        $('span.Downmore').removeClass('fa fa-angle-double-up').addClass('fa fa-angle-double-down')
      }
    },
    // 清楚搜索
    clearSearch(){
      $('button#clearSearch').css({
        background:'#ddd',
        color:'#000'
      })
      this.searchData = ''
      $('.red').each(function(){
        let txt= $(this).html()
        $(this).replaceWith(txt)
      })
      this.more12Show = true
      this.more13Show = true
      for(var i=0; i<this.StockRight1.length; i++) {
          this.StockRight1[i].tableShowFlag = true;
      }
      for(var i=0; i<this.EquityReg1.length; i++) {
          this.EquityReg1[i].tableShowFlag = true;
      }
      for(var i=0; i<this.ChattelMortgage1.length; i++) {
          this.ChattelMortgage1[i].tableShowFlag = true;
          this.ChattelMortgage1[i].showFlag = false;
      }
      for(var i=0; i<$('.dialogName .tablge_g table tbody tr').length; i++) {
        $('.dialogName .tablge_g table tbody tr').show()
      }
      $('.more4 .tablge_g table tbody').show()
      $('.more12 .tablge_g table').show()
      $('.more13 .tablge_g table ').show()
      $('.more14 .tablge_g div ').show()
    },
    // 点击更多显示弹框
    more(enter,pageNum,pageSize,index){
      this.dialogVisible = true
      this.index= index
      this.moreShow =true
      this.enter1 = enter
      if(index==1){
        this.axios({
          method: 'POST',
          url: '/CompanyManagementList',
          params: {
            enterpriseName:this.companyName ,
            pageNum:pageNum,
            pageSize:pageSize
          },
        })
        .then((res)=>{
          // console.log("3、企业主要人员管理信息")
          // console.log(res.data)
          this.Manager1 = res.data.data.list;
        })
      }
      else if(index==2){
          if(this.CompanyInfo.data.shortName==""||this.CompanyInfo.data.shortName==null || this.CompanyInfo.data.shortName=="undefined" || this.CompanyInfo.data.shortName=="null"){  //公司简称
            this.shortName1 = '—'
          }else{
            this.shortName1 = this.CompanyInfo.data.shortName
          }
          if(this.CompanyInfo.data.stockId==""||this.CompanyInfo.data.stockId==null || this.CompanyInfo.data.stockId=="undefined" || this.CompanyInfo.data.stockId=="null"){  //股票代码
            this.stockId1 = '—'
          }else{
            this.stockId1 = this.CompanyInfo.data.stockId
          }
          if(this.CompanyInfo.data.listingArea==""||this.CompanyInfo.data.listingArea==null || this.CompanyInfo.data.listingArea=="undefined"  ||this.CompanyInfo.data.listingArea=="null"){  //模块
            this.listingArea1 = '—'
          }else{
            this.listingArea1 = this.CompanyInfo.data.listingArea
          }
      }
      else if(index == 3){
        this.axios({
          method: 'POST',
          url: '/BranchingStructureList',
          params: {
            enterpriseName:enter,
            pageNum:pageNum,
            pageSize:pageSize
          },
        })
        .then((res)=>{
            this.Branching1 = res.data.data.list;
        })
      }
      else if(index == 4){}
      else if(index == 5){
        this.axios({
          method: 'POST',
          url: '/ClearInformationList',
          params: {
            enterpriseName:enter,
            pageNum:pageNum,
            pageSize:pageSize
          },
        })
        .then((res)=>{
         this.ClearInfortol= res.data.data.total
            this.ClearInfor1 = res.data.data.list;
        })
      }
      else if(index == 6){
        this.axios({
          method: 'POST',
          url: '/AdministrativeSanctionList',
          params: {
            enterpriseName:enter,
            pageNum:pageNum,
            pageSize:pageSize
          },
        })
        .then((res)=>{
          if(res.data.data.list.length<=0){
            $('#Administrative1 .tablge_g').text('无企业对外投资信息')
          }else{
            this.Administrative1 = res.data.data.list
          }
        })
      }
      else if(index == 7){
        this.axios({
          method: 'POST',
          url: '/SeriousIllegalityList',
          params: {
            enterpriseName:enter,
            pageNum:pageNum,
            pageSize:pageSize
          },
        })
        .then((res)=>{
          if(res.data.data.list.length<=0){
            $('#SeriousIllegality1 .tablge_g').text('无严重违法失信信息')
          }else{
            this.SeriousIllegality1 = res.data.data.list
          }
        })
      }
      else if(index == 8){
        this.axios({
          method: 'POST',
          url: '/AbnormalOperationList',
          params: {
            enterpriseName:enter,
            pageNum:pageNum,
            pageSize:pageSize
          },
        })
        .then((res)=>{
          if(res.data.data.list.length<=0){
            $('#AbnormalOpera1 .tablge_g').text('无经营异常信息经营')
          }else{
          this.AbnormalOpera1  = res.data.data.list;

          }
        })
      }
      else if(index == 9){
        this.axios({
          method: 'POST',
          url: '/BeexecutedcList',
          params: {
            enterpriseName:enter,
            pageNum:pageNum,
            pageSize:pageSize
          },
        })
        .then((res)=>{
          if(res.data.data.list.length<=0){
            $('#Beexecutedc1 .tablge_g').text('无被执行人详细信息')
          }else{

          this.Beexecutedc1 = res.data.data.list;
          this.Beexecutedc1.forEach((value,index)=>{
            value.execmoney= this.globalFC.scientificNotation(Number(value.execmoney).toFixed(2))
          })
          }
        })
      }
      else if(index == 10){
        this.axios({
          method: 'POST',
          url: '/DishonestyBeexecutedcList',
          params: {
            enterpriseName:enter,
            pageNum:pageNum,
            pageSize:pageSize
          },
        })
        .then((res)=>{
          if(res.data.data.list.length<=0){
            $('#Dishonesty1 .tablge_g').text('无失信被执行人的详细信息')
          }else{
            this.Dishonesty1 = res.data.data.list;
            this.Dishonesty1.forEach((value,index)=>{
              let date1=value.publishDate
              let dateYear1=date1.slice(0,date1.indexOf('/'))
              let dateMont1=date1.slice(date1.indexOf('/')+1,date1.lastIndexOf('/'))<10?'0'+date1.slice(date1.indexOf('/')+1,date1.lastIndexOf('/')):date1.slice(date1.indexOf('/')+1,date1.lastIndexOf('/')-1)
              let dateDay1=date1.slice(date1.lastIndexOf('/')+1,)<10?'0'+date1.slice(date1.lastIndexOf('/')+1,):date1.slice(date1.lastIndexOf('/')+1,)
              let startdate1 = dateYear1 + '-' + dateMont1 + '-' + dateDay1;
              let date=value.regDate
              let dateYear=date.slice(0,date.indexOf('/'))
              let dateMont=date.slice(date.indexOf('/')+1,date.lastIndexOf('/'))<10?'0'+date.slice(date.indexOf('/')+1,date.lastIndexOf('/')):date.slice(date.indexOf('/')+1,date.lastIndexOf('/')-1)
              let dateDay=date.slice(date.lastIndexOf('/')+1,)<10?'0'+date.slice(date.lastIndexOf('/')+1,):date.slice(date.lastIndexOf('/')+1,)
              let startdate = dateYear + '-' + dateMont + '-' + dateDay;
              value.publishDate = startdate1
              value.regDate = startdate
            })
          }
        })
      }
      else if(index == 11){
         this.qiye_change.forEach((value,index)=>{
           if(value.id == this.enter1){
            this.qiyeData = value
           }
         })
      }
      else if(index== 12){
        this.axios({
          method: 'POST',
          url: '/EquityRegistrationList',
          params: {
            enterpriseName:enter,
            pageNum:pageNum,
            pageSize:pageSize
          },
        })
        .then((res)=>{
          let data1= res.data.data.list
          if(data1.length<=0){
            $('#EquityReg .tablge_g').text('无股权出质登记信息')
          }else{
            for(let i in data1) {
              for(let j in data1[i]) {
                // console.log(j);
                if(data1[i][j]==""|| data1[i][j]=="undefined" || data1[i][j]== null) {
                  data1[i][j]='—'
                }
              }
            }
            this.EquityReg1 = data1;
            for(let i=0;i<this.EquityReg1.length;i++){
              this.EquityReg1[i].tableShowFlag = true;
            }
            // console.log(this.EquityReg1)
          }
        })
      }
      else if(index== 13){
        this.axios({
          method: 'POST',
          url: '/StockRightThawingList',
          params: {
            enterpriseName:enter,
            pageNum:pageNum,
            pageSize:pageSize
          },
        })
        .then((res)=>{
          let data2 = res.data.data.list
          if(data2.length<=0){
            $('#StockRight .tablge_g').text('无股权冻结信息')
          }else{
            for(let i in data2) {
              for(let j in data2[i]) {
                if(data2[i][j]==""|| data2[i][j]=="undefined" || data2[i][j]== null) {
                  data2[i][j]='—'
                }
              }
            };
            this.StockRight1 = data2;
            for(let i=0;i<this.StockRight1.length;i++){
              this.StockRight1[i].tableShowFlag = true
            }
          }
        })
      }
      else if(index== 14){
        this.axios({
          method: 'POST',
          url: '/ChattelMortgageList',
          params: {
            enterpriseName:enter,
            pageNum:pageNum,
            pageSize:pageSize
          },
        })
        .then((res)=>{
          for(var i=0;i<res.data.data.list.length;i++){
            res.data.data.list[i].showFlag = false;
            res.data.data.list[i].tableShowFlag = true;
          }
          let data3 = res.data.data.list;
          let data7 = new Array()
          if(data3.length<=0){
            $('#ChattelMortgage .tablge_g').text('无动产抵押登记信息')
          }else{
            for(let i=0;i<data3.length;i++){
              if(data3[i].mortRegNo==""|| data3[i].mortRegNo=="undefined" || data3[i].mortRegNo== null){
                data3[i].mortRegNo = '—'
              }
              if(data3[i].mortStatus==""|| data3[i].mortStatus=="undefined" || data3[i].mortStatus== null){
                data3[i].mortStatus = '—'
              }
              if(data3[i].regDate==""|| data3[i].regDate=="undefined" || data3[i].regDate== null){
                data3[i].regDate = '—'
              }
              if(data3[i].regOrg==""|| data3[i].regOrg=="undefined" || data3[i].regOrg== null){
                data3[i].regOrg = '—'
              }
              if(data3[i].priclasecKind==""|| data3[i].priclasecKind=="undefined" || data3[i].priclasecKind== null){
                data3[i].priclasecKind = '—'
              }
              if(data3[i].priclasecAm==""|| data3[i].priclasecAm=="undefined" || data3[i].priclasecAm== null){
                data3[i].priclasecAm = '—'
              }else{
                let reg1 =new RegExp('万元','g')
                if(reg1.test(data3[i].priclasecAm)){
                  data3[i].priclasecAm = this.globalFC.scientificNotation((Number(data3[i].priclasecAm.replace(reg1,''))*10000).toFixed(2))
                }else{
                  data3[i].priclasecAm = this.globalFC.scientificNotation((Number(data3[i].priclasecAm.replace(reg1,''))/10000).toFixed(2))
                }
              }
              if(data3[i].warcov==""|| data3[i].warcov=="undefined" || data3[i].warcov== null){
                data3[i].warcov = '—'
              }
              if(data3[i].pefperFrom==""|| data3[i].pefperFrom=="undefined" || data3[i].pefperFrom== null){
                data3[i].pefperFrom = '—'
              }
              if(data3[i].pefperTo==""|| data3[i].pefperTo=="undefined" || data3[i].pefperTo== null){
                data3[i].pefperTo = '—'
              }
              if(data3[i].canDate==""|| data3[i].canDate=="undefined" || data3[i].canDate== null){
                data3[i].canDate = '—'
              }
              if(data3[i].canReason==""|| data3[i].canReason=="undefined" || data3[i].canReason== null){
                data3[i].canReason = '—'
              }
              if(data3[i].mortOrg==""|| data3[i].mortOrg=="undefined" || data3[i].mortOrg== null){
                data3[i].mortOrg = '—'
              }
              if(data3[i].blicType==""|| data3[i].blicType=="undefined" || data3[i].blicType== null){
                data3[i].blicType = '—'
              }
              if(data3[i].blicNo==""|| data3[i].blicNo=="undefined" || data3[i].blicNo== null){
                data3[i].blicNo = '—'
              }
              if(data3[i].mortLoc==""|| data3[i].mortLoc=="undefined" || data3[i].mortLoc== null){
                data3[i].mortLoc = '—'
              }
              if(data3[i].morguaInfoList==""|| data3[i].morguaInfoList=="undefined" || data3[i].morguaInfoList== null){
                data3[i].morguaInfoList = '—'
              }
              data7[i] = new Array()
              for(let  m=0;m<data3[i].list.length;m++){
                if(data3[i].list[m].guaName==""|| data3[i].list[m].guaName=="undefined" || data3[i].list[m].guaName== null){
                  data3[i].list[m].guaName='—'
                }
                if(data3[i].list[m].guaOwn==""|| data3[i].list[m].guaOwn=="undefined" || data3[i].list[m].guaOwn== null){
                  data3[i].list[m].guaOwn='—'
                }
                if(data3[i].list[m].guaDes==""|| data3[i].list[m].guaDes=="undefined" || data3[i].list[m].guaDes== null){
                  data3[i].list[m].guaDes='—'
                }
              }
              data7[i] = data3[i].list
              this.ChattelMortgage1List.push(data7[i])
             this.ChattelMortgage1.push(data3[i])
            }
          //   console.log('this.ChattelMortgage1List',this.ChattelMortgage1List)
          //     console.log('this.ChattelMortgage1List[0]',this.ChattelMortgage1List[0])
          //  console.log('this.ChattelMortgage1',this.ChattelMortgage1)
          }
        })
      }

    },
    close(){
      this.dialogVisible = false
      // $('button#clearSearch').css({
      //   background:'#ddd',
      //   color:'#000'
      // })
      // this.moreShow = false
      // $('.red').each(function(){
      //   let txt= $(this).html()
      //   $(this).replaceWith(txt)
      // })
      // $('table').show()
      // $('table tr').show()
      // this.searchData = ''
      $('button#clearSearch').css({
        background:'#ddd',
        color:'#000'
      })

      this.searchData = ''
      $('.red').each(function(){
        let txt= $(this).html()
        $(this).replaceWith(txt)
      })

      for(var i=0; i<$('.dialogName .tablge_g table tbody tr').length; i++) {
        $('.dialogName .tablge_g table tbody tr').show()
      }
      this.more12Show = true
      this.more13Show = true
      for(var i=0; i<this.StockRight1.length; i++) {
          this.StockRight1[i].tableShowFlag = true;
      }
      for(var i=0; i<this.EquityReg1.length; i++) {
          this.EquityReg1[i].tableShowFlag = true;
      }
      for(var i=0; i<this.ChattelMortgage1.length; i++) {
          this.ChattelMortgage1[i].tableShowFlag = true;
          this.ChattelMortgage1[i].showFlag = false;
      }
        this.downmore = false
          // console.log('close4',this.downmore);
    },
    anchorFold(){  //切换锚点显示隐藏
      this.jumpShowFlag = !this.jumpShowFlag
    },
    jump(id) {  //锚点
      this.jumpFlag = id
      // console.log(id)
      let anchor=this.$el.querySelector(id)
      $(".ICBC")[0].scrollTop=anchor.offsetTop
    },
    // show_titm(){
    //   this.value
    makeRequest(url,params){
      return this.$ajax.post(url,params);
    },
    // 公司对外投资信息------排序
    indexMethod(index){
      return index+1
    },
    // 判断表格单元格内容是否为空
    isNUll(row,column,val,index){
      // 处理数字的科学计数法
      if(column.label == "认缴出资额(万元)" ||column.label == "注册资本(万元)" ){
        if(val) {
          return  this.globalFC.scientificNotation(val.toFixed(2))
        }
        else {
          return '—';
        }
      }
      else if(val==''||val==undefined||val==null ||val=="" || val =="null" ||val == "NULL" || val=='"null"'){
        return "—";
      }else {
        return val;
      }
    },
    // 时间格式转换
    timeFilter: (time,type) => {
      time = new Date(time);
      let Y = time.getFullYear() + '-',
      M = (time.getMonth()+1 < 10 ? '0'+(time.getMonth()+1) : time.getMonth()+1) + '-',
      D = time.getDate()< 10 ? '0'+time.getDate() : time.getDate(),
      H = ' ' + (time.getHours()< 10 ? '0'+time.getHours() : time.getHours()),
      MM = ':' + (time.getMinutes()< 10 ? '0'+time.getMinutes() : time.getMinutes()),
      y = time.getFullYear(),
      m = (time.getMonth()+1 < 10 ? '0'+(time.getMonth()+1) : time.getMonth()+1);
      if(type=='yyyy-mm-dd') {
        time = Y+M+D;
      }
      else if(type=='yyyy-mm-dd/hh:mm') {
        time = Y+M+D+H+MM;
      }else if(type=='yyyy.mm.dd/hh:mm') {
        time = y+'年'+m+'月'+D+'日'+H+MM;
      };
      return time;
    },
    // 企业照面信息
    getCompanyInfo(enter){
      this.axios({
        method: 'POST',
        url: '/CompanyInfo',
        params: {
          enterpriseName:enter
        },
      })
      .then((res)=>{
        // console.log(res.data);
        if(res.data.data == "" || res.data.data == null){
            this.updateDate = '—'   //截止日期
            this.frName= '—'  //法代表人
            this.denjZT = '—'   //登记状态：
            this.zhuxiaoRQ= '—'  //注销日期：
            this.diaoxiaoRQ = '—'   //吊销日期：
            this.CompanyInfo1.frName= '—'
            this.CompanyInfo1.entType= '—'
            this.CompanyInfo1.regCap= '—'
            this.CompanyInfo1.recCap= '—'
            this.CompanyInfo1.esDate= '—'
            this.CompanyInfo1.regOrg= '—'
            this.CompanyInfo1.apprDate= '—'
            this.CompanyInfo1.openFrom= '—'
            this.CompanyInfo1.openTo= '—'
            this.CompanyInfo1.industryCode= '—'
            this.CompanyInfo1.industryName= '—'
            this.CompanyInfo1.industryPhyCode= '—'
            this.CompanyInfo1.industryPhyName= '—'
            this.CompanyInfo1.county= '—'
            this.CompanyInfo1.province= '—'
            this.CompanyInfo1.city= '—'
            this.CompanyInfo1.areaCode= '—'
            this.CompanyInfo1.address= '—'
            this.CompanyInfo1.operateScope= '—'
            this.creditCode = '—'  //统一社会信用代码：
            this.regNo = '—'  //注册号：
            this.orgCode = '—'  //组织机构代码：
            this.shortName = '—'  //简称：
            this.stockId = '—'  //股票代码：
            this.listingArea = '—'  //板块：
            this.Address =  '—' //  所在地(省/地级市/区县)
        }else{
          this.CompanyInfo= res.data
          if(this.CompanyInfo.data.updateDate==""||this.CompanyInfo.data.updateDate==null || this.CompanyInfo.data.updateDate=="undefined"){  //截止日期
            this.updateDate = '—'
          }else{
            this.updateDate = this.timeFilter(new Date().getTime(),'yyyy-mm-dd')
           //console.log('updateDate',this.updateDate);
          }
          // 表格开始
          if(this.CompanyInfo.data.frName==""||this.CompanyInfo.data.frName==null || this.CompanyInfo.data.frName=="undefined"){
            this.CompanyInfo1.frName = '—'
          }else{
            this.CompanyInfo1.frName = this.CompanyInfo.data.frName
          }
          if(this.CompanyInfo.data.entType==""||this.CompanyInfo.data.entType==null || this.CompanyInfo.data.entType=="undefined"){
            this.CompanyInfo1.entType = '—'
          }else{
            this.CompanyInfo1.entType = this.CompanyInfo.data.entType
          }
          if(this.CompanyInfo.data.regCap==""||this.CompanyInfo.data.regCap==null || this.CompanyInfo.data.regCap=="undefined"){
            this.CompanyInfo1.regCap = '—'
          }else{
            this.CompanyInfo1.regCap =this.globalFC.scientificNotation((this.CompanyInfo.data.regCap/10000).toFixed(2))
          }
          if(this.CompanyInfo.data.recCap==""||this.CompanyInfo.data.recCap==null || this.CompanyInfo.data.recCap=="undefined"){
            this.CompanyInfo1.recCap = '—'
          }else{
            this.CompanyInfo1.recCap = this.globalFC.scientificNotation((this.CompanyInfo.data.recCap/10000).toFixed(2))
          }
          if(this.CompanyInfo.data.esDate==""||this.CompanyInfo.data.esDate==null || this.CompanyInfo.data.esDate=="undefined"){
            this.CompanyInfo1.esDate = '—'
          }else{
            this.CompanyInfo1.esDate = this.CompanyInfo.data.esDate
          }
          if(this.CompanyInfo.data.regOrg==""||this.CompanyInfo.data.regOrg==null || this.CompanyInfo.data.regOrg=="undefined"){
            this.CompanyInfo1.regOrg = '—'
          }else{
            this.CompanyInfo1.regOrg = this.CompanyInfo.data.regOrg
          }
          if(this.CompanyInfo.data.apprDate==""||this.CompanyInfo.data.apprDate==null || this.CompanyInfo.data.apprDate=="undefined"){
            this.CompanyInfo1.apprDate = '—'
          }else{
            this.CompanyInfo1.apprDate = this.timeFilter(this.CompanyInfo.data.apprDate,'yyyy-mm-dd')
          }
          if(this.CompanyInfo.data.openTo==""||this.CompanyInfo.data.openTo==null || this.CompanyInfo.data.openTo=="undefined"){
            this.CompanyInfo1.openTo = '—'
          }
          else{
            this.CompanyInfo1.openTo = this.CompanyInfo.data.openTo
          }
          if(this.CompanyInfo.data.openFrom==""||this.CompanyInfo.data.openFrom==null || this.CompanyInfo.data.openFrom=="undefined"){
            this.CompanyInfo1.openFrom = '—'
          }else{
            this.CompanyInfo1.openFrom = this.CompanyInfo.data.openFrom
          }
          if(this.CompanyInfo.data.industryCode==""||this.CompanyInfo.data.industryCode==null || this.CompanyInfo.data.industryCode=="undefined"){
            this.CompanyInfo1.industryCode = '—'
          }else{
            this.CompanyInfo1.industryCode = this.CompanyInfo.data.industryCode
          }
          if(this.CompanyInfo.data.industryName==""||this.CompanyInfo.data.industryName==null || this.CompanyInfo.data.industryName=="undefined"){
            this.CompanyInfo1.industryName = '—'
          }else{
            this.CompanyInfo1.industryName = this.CompanyInfo.data.industryName
          }
          if(this.CompanyInfo.data.industryPhyCode==""||this.CompanyInfo.data.industryPhyCode==null || this.CompanyInfo.data.industryPhyCode=="undefined"){
            this.CompanyInfo1.industryPhyCode = '—'
          }else{
            this.CompanyInfo1.industryPhyCode = this.CompanyInfo.data.industryPhyCode
          }
          if(this.CompanyInfo.data.industryPhyName==""||this.CompanyInfo.data.industryPhyName==null || this.CompanyInfo.data.industryPhyName=="undefined"){
            this.CompanyInfo1.industryPhyName = '—'
          }else{
            this.CompanyInfo1.industryPhyName = this.CompanyInfo.data.industryPhyName
          }

          if(this.CompanyInfo.data.province==""||this.CompanyInfo.data.province==null || this.CompanyInfo.data.province=="undefined"){
            this.CompanyInfo1.province = '—'
          }else{
            this.CompanyInfo1.province = this.CompanyInfo.data.province
          }
          if(this.CompanyInfo.data.city==""||this.CompanyInfo.data.city==null || this.CompanyInfo.data.city=="undefined"){
            this.CompanyInfo1.city = '—'
          }else{
            this.CompanyInfo1.city = this.CompanyInfo.data.city
          }
          if(this.CompanyInfo.data.county==""||this.CompanyInfo.data.county==null || this.CompanyInfo.data.county=="undefined"){
            this.CompanyInfo1.county = '—'
          }else{
            this.CompanyInfo1.county = this.CompanyInfo.data.county
          }
          if(this.CompanyInfo.data.areaCode==""||this.CompanyInfo.data.areaCode==null || this.CompanyInfo.data.areaCode=="undefined"){
            this.CompanyInfo1.areaCode = '—'
          }else{
            this.CompanyInfo1.areaCode = this.CompanyInfo.data.areaCode
          }
          if(this.CompanyInfo.data.address==""||this.CompanyInfo.data.address==null || this.CompanyInfo.data.address=="undefined"){
            this.CompanyInfo1.address = '—'
          }else{
            this.CompanyInfo1.address = this.CompanyInfo.data.address
          }
          if(this.CompanyInfo.data.operateScope==""||this.CompanyInfo.data.operateScope==null || this.CompanyInfo.data.operateScope=="undefined"){
            this.CompanyInfo1.operateScope = '—'
          }else{
            this.CompanyInfo1.operateScope = this.CompanyInfo.data.operateScope
          }
          // 表格结束
          if(this.CompanyInfo.data.creditCode==""||this.CompanyInfo.data.creditCode==null || this.CompanyInfo.data.creditCode=="undefined"){  //统一社会信用代码：
            this.creditCode = '—'
          }else{
            this.creditCode = this.CompanyInfo.data.creditCode
          }
          if(this.CompanyInfo.data.regNo==""||this.CompanyInfo.data.regNo==null || this.CompanyInfo.data.regNo=="undefined"){  //注册号：
            this.regNo = '—'
          }else{
            this.regNo = this.CompanyInfo.data.regNo
          }
          if(this.CompanyInfo.data.orgCode==""||this.CompanyInfo.data.orgCode==null || this.CompanyInfo.data.orgCode=="undefined"){  //组织机构代码：
            this.orgCode = '—'
          }else{
            this.orgCode = this.CompanyInfo.data.orgCode
          }
          if(this.CompanyInfo.data.entName==""||this.CompanyInfo.data.entName==null || this.CompanyInfo.data.entName=="undefined"){  //截止日期
            this.companyName = '—'
          }else{
            this.companyName = this.CompanyInfo.data.entName
          }
          if(this.CompanyInfo.data.updateDate==""||this.CompanyInfo.data.updateDate==null || this.CompanyInfo.data.updateDate=="undefined"){  //截止日期
            this.updateDate = '—'
          }else{
            this.updateDate = this.CompanyInfo.data.updateDate
          }
          if(this.CompanyInfo.data.shortName==""||this.CompanyInfo.data.shortName==null || this.CompanyInfo.data.shortName=="undefined" || this.CompanyInfo.data.shortName=="null"){  //公司简称
            this.shortName = '—'
          }else{
            this.shortName = this.CompanyInfo.data.shortName
          }
          if(this.CompanyInfo.data.stockId==""||this.CompanyInfo.data.stockId==null || this.CompanyInfo.data.stockId=="undefined" || this.CompanyInfo.data.stockId=="null"){  //股票代码
            this.stockId = '—'
          }else{
            this.stockId = this.CompanyInfo.data.stockId
          }
          if(this.CompanyInfo.data.listingArea==""||this.CompanyInfo.data.listingArea==null || this.CompanyInfo.data.listingArea=="undefined" || this.CompanyInfo.data.listingArea=="null"){  //模块
            this.listingArea = '—'
          }else{
            this.listingArea = this.CompanyInfo.data.listingArea
          }
          if(this.CompanyInfo.data.entStatus==""||this.CompanyInfo.data.entStatus==null || this.CompanyInfo.data.entStatus=="undefined"){  //登记状态
            this.denjZT = '—'
          }else{
            this.denjZT = this.CompanyInfo.data.entStatus
          }
          if(this.CompanyInfo.data.canDate==""||this.CompanyInfo.data.canDate==null || this.CompanyInfo.data.canDate=="undefined"){  //注销日期
            this.zhuxiaoRQ = '—'
          }else{
            this.zhuxiaoRQ = this.CompanyInfo.data.canDate
          }
          if(this.CompanyInfo.data.revDate==""||this.CompanyInfo.data.revDate==null || this.CompanyInfo.data.revDate=="undefined"){  //吊销日期
            this.diaoxiaoRQ = '—'
          }else{
            this.diaoxiaoRQ = this.CompanyInfo.data.revDate
          }
        }


      }).catch((error)=>{
        this.updateDate = '—'   //截止日期
        this.frName= '—'  //法代表人
        this.denjZT = '—'   //登记状态：
        this.zhuxiaoRQ= '—'  //注销日期：
        this.diaoxiaoRQ = '—'   //吊销日期：
        this.CompanyInfo1.frName= '—'
        this.CompanyInfo1.entType= '—'
        this.CompanyInfo1.regCap= '—'
        this.CompanyInfo1.recCap= '—'
        this.CompanyInfo1.esDate= '—'
        this.CompanyInfo1.regOrg= '—'
        this.CompanyInfo1.apprDate= '—'
        this.CompanyInfo1.openFrom= '—'
        this.CompanyInfo1.openTo= '—'
        this.CompanyInfo1.industryCode= '—'
        this.CompanyInfo1.industryName= '—'
        this.CompanyInfo1.industryPhyCode= '—'
        this.CompanyInfo1.industryPhyName= '—'
        this.CompanyInfo1.county= '—'
        this.CompanyInfo1.province= '—'
        this.CompanyInfo1.city= '—'
        this.CompanyInfo1.areaCode= '—'
        this.CompanyInfo1.address= '—'
        this.CompanyInfo1.operateScope= '—'
        this.creditCode = '—'  //统一社会信用代码：
        this.regNo = '—'  //注册号：
        this.orgCode = '—'  //组织机构代码：
        this.shortName = '—'  //简称：
        this.stockId = '—'  //股票代码：
        this.listingArea = '—'  //板块：
        this.Address =  '—' //  所在地(省/地级市/区县)
      })
    },
    //主要人员信息
    getCompanyManagementList(enter,pageNum,pageSize){
      this.axios({
        method: 'POST',
        url: '/CompanyManagementList',
        params: {
          enterpriseName:enter,
          pageNum:pageNum,
          pageSize:pageSize
        },
      })
      .then((res)=>{
        // console.log("3、企业主要人员管理信息")
        // console.log(res.data)
        this.man_total= res.data.data.total
        this.Manager = res.data.data.list;
        if(this.man_total<=0){
          $('#Manager1 .tablge_g').text('无主要人员信息')
          this.Managershow = false
        }else{
          if(this.man_total<=3){
            this.Managershow = false
          }
          this.Manager = res.data.data.list;
        }
      })
    },
    // 获取企业历史名称
    gethistoryNameChangeList(enter,pageNum,pageSize){
      this.axios({
        method: 'POST',
        url: '/historyNameChangeList',
        params: {
          enterpriseName:enter,
          pageNum:pageNum,
          pageSize:pageSize
        },
      }).then((res)=>{
        //判断历史信息是否为空
        if(res.data.data.list.length<=0){
          this.historyName = false
          this.historyName2 = true
        }else{
            this.historyName = true
            this.historyName2 = false
            this.historyNameList = res.data.data.list
            for(let i=0;i<this.historyNameList.length;i++ ){
              if(this.historyNameList[i].altDate!== ""||this.historyNameList[i].altDate!== "null" ||this.historyNameList[i].altDate!== "undefined"){
                this.historyNameList[i].altDate = this.timeFilter(this.historyNameList[i].altDate,'yyyy-mm-dd')
              }else{
                this.historyNameList[i].altDate = '—'
              }
              if(this.historyNameList[i].altBe!== ""||this.historyNameList[i].altBe!== "null" ||this.historyNameList[i].altBe!== "undefined"){

              }else{
                this.historyNameList[i].altBe = '—'
              }
            }
        }
      })
    },

    //企业变更信息
    getInformationChangeList(enter){
      // console.log(enter);
     this.axios({
       method: 'POST',
       url: '/InformationChangeList',
       params: {
         enterpriseName:enter
       },
     })
     .then((res)=>{

       if(res.data.data.list.length<=0){
         $('#qiyebg1 .qiye_change').text('无企业变更信息')
       }else{
         this.qiye_change = res.data.data.list
        //  for(let i=0;i<3;i++){
        //    this.change_time.push(res.data.data.list[i])
        //  }
        //  console.log('this.change_time',this.change_time);
         let list = res.data.data.list
         for(let i=0;i<list.length; i++){
           if(i%12==0){
             list[i].background = this.span[0]
             list[i].sp = this.sp[0]
             list[i].color = this.color[0]
           }
           else if(i%12==1){
             list[i].background = this.span[1]
               list[i].sp = this.sp[1]
               list[i].color = this.color[1]
           }
           else if(i%12==2){
             list[i].background = this.span[2]
               list[i].sp = this.sp[2]
               list[i].color = this.color[2]
           }
           else if(i%12==3){
             list[i].background = this.span[3]
               list[i].sp = this.sp[3]
               list[i].color = this.color[3]
           }
           else if(i%12==4){
             list[i].background = this.span[4]
               list[i].sp = this.sp[4]
               list[i].color = this.color[4]
           }
           else if(i%12==5){
             list[i].background = this.span[1]
               list[i].sp = this.sp[1]
               list[i].color = this.color[1]
           }
           else if(i%12==6){
             list[i].background = this.span[0]
               list[i].sp = this.sp[0]
               list[i].color = this.color[0]
           }
           else if(i%12==7){
             list[i].background = this.span[3]
               list[i].sp = this.sp[3]
               list[i].color = this.color[3]
           }
           else if(i%12==8){
             list[i].background = this.span[2]
               list[i].sp = this.sp[2]
               list[i].color = this.color[2]
           }
           else if(i%12==9){
             list[i].background = this.span[1]
               list[i].sp = this.sp[1]
               list[i].color = this.color[1]
           }
           else if(i%12==10){
             list[i].background = this.span[4]
               list[i].sp = this.sp[4]
               list[i].color = this.color[4]
           }
           else if(i%12==11){
             list[i].background = this.span[3]
               list[i].sp = this.sp[3]
               list[i].color = this.color[3]
           }
         }
        this.change_time = list
         if(this.change_time.length==3){
           this.show5Flag = true
           this.change_time.forEach((value,index)=>{
             value.width="33.3vw"
             value.margin ="1.4vw"
           })
         }else if(this.change_time.length==4){
           this.show5Flag = true
           this.change_time.forEach((value,index)=>{
             value.width="25vw"
             value.margin ="1vw"
           })
         }else if(this.change_time.length==5){
           this.show5Flag = true
           this.change_time.forEach((value,index)=>{
             value.width="20vw"
             value.margin =".8vw"
           })
         }else{
           this.show5Flag = false
           this.show8Flag = true
         }
       }
     })
    },
    //分支机构信息
    getBranchingStructureList(enter,pageNum,pageSize){
      this.axios({
        method: 'POST',
        url: '/BranchingStructureList',
        params: {
          enterpriseName:enter,
          pageNum:pageNum,
          pageSize:pageSize
        },
      })
      .then((res)=>{
        if(res.data.data.total<=0){
          $('#Branching1 .tablge_g').text('无分支机构信息')
          this.Branchingshow = false
        }else{
          if(res.data.data.total<=5){
            this.Branchingshow = false
          }
          this.Branchingtol = res.data.data.total
          this.Branching = res.data.data.list;
        }

      })
    },
    // 公司股东信息
    getShareholderContributionList(enter,pageNum,pageSize){
      this.axios({
        method: 'POST',
        url: '/ShareholderContributionList',
        params: {
          enterpriseName:enter,
          pageNum:pageNum,
          pageSize:pageSize
        },
      })
      .then((res)=>{
        // console.log("6、企业股东及出自信息")
        // console.log(res.data)
        this.Share_total= res.data.data.total
        if(this.Share_total<=0){
          $('#CompanyInfo1 .tablge_g').text('无公司股东信息')
          this.Shareholdershow = false
        }else{
          if(this.Share_total<=5){
            this.Shareholdershow = false
            this.Shareholder= res.data.data.list
          }else{
            for(let i=0;i<5;i++){
              this.Shareholder.push(res.data.data.list[i])
            }
            this.Shareholder1 = res.data.data.list;
          }

        }
      })
    },
    // 企业对外投资信息
    getOutboundInvestmentCompanyList(enter){
      this.axios({
        method: 'POST',
        url: '/OutboundInvestmentCompanyList',
        params: {
          enterpriseName:enter,
        },
      })
      .then((res)=>{
        // console.log("7、企业对外投资信息")
        // console.log(res.data)
          if(res.data.data.list.length<=0){
            $('#OutboundInvest1 .tablge_g').text('无公司对外投资信息')
            this.OutboundInvestshow = false
          }else{
            if(res.data.data.total<=5){
              this.OutboundInvestshow = false
            }
            this.OutboundInvest_1 = res.data.data
            this.OutboundInvesttol = res.data.data.total
            res.data.data.list.forEach((value,index)=>{
              if(index<5){
                this.OutboundInvest.push(value)  //企业对外投资信息
              }
            })
            // console.log('this.OutboundInvest',this.OutboundInvest)
            this.OutboundInvest1 = res.data.data.list;  //更多
          }

      })
    },
    //清算信息
    getClearInformationList(enter,pageNum,pageSize){
      this.axios({
        method: 'POST',
        url: '/ClearInformationList',
        params: {
          enterpriseName:enter,
          pageNum:pageNum,
          pageSize:pageSize
        },
      })
      .then((res)=>{
       this.ClearInfortol= res.data.data.total
        if(res.data.data.list.length<=0){
          $('#ClearInfor1 .tablge_g').text('无清算信息')
          this.ClearInforshow = false
        }else{
          if(this.ClearInfortol<=5){
            this.ClearInforshow = false
          }
          this.ClearInfor = res.data.data.list;
        }
      })
    },
    // 股权出质登记信息
    getEquityRegistrationList(enter,pageNum,pageSize){
      this.axios({
        method: 'POST',
        url: '/EquityRegistrationList',
        params: {
          enterpriseName:enter,
          pageNum:pageNum,
          pageSize:pageSize
        },
      })
      .then((res)=>{
        let data1= res.data.data.list
        // console.log("9、股权出质登记信息")
        // console.log(data1)
        this.mationLable[0].num = res.data.data.total;
        if(this.mationLable[0].num<=0){
          $('#assetsfomation1 .tablge_g').text('无股权出质登记信息')
          this.EquityRegshow= false
        }else{
          if(this.mationLable[0].num<=1){
            this.EquityRegshow = false
          }
          for(let i=0;i<data1.length;i++){
            if(data1[i].impEquityNo==""|| data1[i].impEquityNo=="undefined" || data1[i].impEquityNo== null){
              this.EquityReg.impEquityNo = '—'
            }else{
              this.EquityReg.impEquityNo=data1[i].impEquityNo
            }
            if(data1[i].impExeState==""|| data1[i].impExeState=="undefined" || data1[i].impExeState== null){
              this.EquityReg.impExeState='—';
            }else{
              this.EquityReg.impExeState=data1[i].impExeState
            }
            if(data1[i].impPledgor==""|| data1[i].impPledgor=="undefined" || data1[i].impPledgor== null){
              this.EquityReg.impPledgor='—'
            }else{
              this.EquityReg.impPledgor=data1[i].impPledgor
            }
            if(data1[i].impPrLicensenNo==""|| data1[i].impPrLicensenNo=="undefined" || data1[i].impPrLicensenNo== null){
              this.EquityReg.impPrLicensenNo='—'
            }else{
              this.EquityReg.impPrLicensenNo=data1[i].impPrLicensenNo
            }
            if(data1[i].impAm==""|| data1[i].impAm=="undefined" || data1[i].impAm== null){
              this.EquityReg.impAm='—';
            }else{
              // data1[i].impAm=this.globalFC.scientificNotation(data1[i].impAm)
          //  console.log();
              this.EquityReg.impAm = this.globalFC.scientificNotation(Number(data1[i].impAm).toFixed(2))
            }
            if(data1[i].impOrg==""|| data1[i].impOrg=="undefined" || data1[i].impOrg== null){
              this.EquityReg.impOrg='—'
            }else{
              this.EquityReg.impOrg=data1[i].impOrg
            }
            if(data1[i].impOrgLicenseNo==""|| data1[i].impOrgLicenseNo=="undefined" || data1[i].impOrgLicenseNo== null){
              this.EquityReg.impOrgLicenseNo='—'
            }else{
              this.EquityReg.impOrgLicenseNo=data1[i].impOrgLicenseNo
            }
            if(data1[i].impEqupleDate==""|| data1[i].impEqupleDate=="undefined" || data1[i].impEqupleDate== null){
              this.EquityReg.impEqupleDate='—'
            }else{
              this.EquityReg.impEqupleDate=data1[i].impEqupleDate
            }
            if(data1[i].impPubDate==""|| data1[i].impPubDate=="undefined" || data1[i].impPubDate== null){
              this.EquityReg.impPubDate='—'
            }else{
              this.EquityReg.impPubDate=data1[i].impPubDate
            }
            if(data1[i].impAltList==""|| data1[i].impAltList=="undefined" || data1[i].impAltList== null){
              this.EquityReg.impAltList='—'
            }else{
              this.EquityReg.impAltList=data1[i].impAltList
            }
            if(data1[i].altDate==""|| data1[i].altDate=="undefined" || data1[i].altDate== null){
              this.EquityReg.altDate='—'
            }else{
              this.EquityReg.altDate=data1[i].altDate
            }
            if(data1[i].altContent==""|| data1[i].altContent=="undefined" || data1[i].altContent== null){
              this.EquityReg.altContent='—'
            }else{
              this.EquityReg.altContent=data1[i].altContent
            }
          }

        }

      })
    },
    //股权解冻信息
    getStockRightThawingList(enter,pageNum,pageSize){
      this.axios({
        method: 'POST',
        url: '/StockRightThawingList',
        params: {
          enterpriseName:enter,
          pageNum:pageNum,
          pageSize:pageSize
        },
      })
      .then((res)=>{
        // console.log("12、股权解冻信息")
        // console.log(res.data)
        let data2 = res.data.data.list
        this.mationLable[1].num = res.data.data.total;
        if(this.mationLable[1].num<=0){
          $('#StockRight1 .tablge_g').text('无股权冻结信息')
          this.StockRightshow = false
        }else{
          if(this.mationLable[1].num<=1){
            this.StockRightshow = false
          }
          for(let i=0;i<data2.length;i++){
            if(data2[i].judicialInv==""|| data2[i].judicialInv=="undefined" || data2[i].judicialInv== null){
              this.StockRight.judicialInv='—'
            }else{
              this.StockRight.judicialInv=data2[i].judicialInv
            }
            if(data2[i].judicialFrozState==""|| data2[i].judicialFrozState=="undefined" || data2[i].judicialFrozState== null){
              this.StockRight.judicialFrozState='—'
            }else{
              this.StockRight.judicialFrozState=data2[i].judicialFrozState
            }
            if(data2[i].judicialFroAm==""|| data2[i].judicialFroAm=="undefined" || data2[i].judicialFroAm== null){
              this.StockRight.judicialFroAm='—'
            }else{
              this.StockRight.judicialFroAm=this.globalFC.scientificNotation(Number(data2[i].judicialFroAm).toFixed(2))
            }
            if(data2[i].frozPublicDate==""|| data2[i].frozPublicDate=="undefined" || data2[i].frozPublicDate== null){
              this.StockRight.frozPublicDate='—'
            }else{
              this.StockRight.frozPublicDate=data2[i].frozPublicDate
            }
            if(data2[i].frozDeadline==""|| data2[i].frozDeadline=="undefined" || data2[i].frozDeadline== null){
              this.StockRight.frozDeadline='—'
            }else{
              this.StockRight.frozDeadline=data2[i].frozDeadline
            }
            if(data2[i].frozFrom==""|| data2[i].frozFrom=="undefined" || data2[i].frozFrom== null){
              this.StockRight.frozFrom='—'
            }else{
              this.StockRight.frozFrom=data2[i].frozFrom
            }
            if(data2[i].frozTo==""|| data2[i].frozTo=="undefined" || data2[i].frozTo== null){
              this.StockRight.frozTo='—'
            }else{
              this.StockRight.frozTo=data2[i].frozTo
            }
            if(data2[i].judicialCerTypeName==""|| data2[i].judicialCerTypeName=="undefined" || data2[i].judicialCerTypeName== null){
              this.StockRight.judicialCerTypeName='—'
            }else{
              this.StockRight.judicialCerTypeName=data2[i].judicialCerTypeName
            }
            if(data2[i].judicialCerNo==""|| data2[i].judicialCerNo=="undefined" || data2[i].judicialCerNo== null){
              this.StockRight.judicialCerNo='—'
            }else{
              this.StockRight.judicialCerNo=data2[i].judicialCerNo
            }
            if(data2[i].frozAuth==""|| data2[i].frozAuth=="undefined" || data2[i].frozAuth== null){
              this.StockRight.frozAuth='—'
            }else{
              this.StockRight.frozAuth=data2[i].frozAuth
            }
            if(data2[i].frozExecuteItem==""|| data2[i].frozExecuteItem=="undefined" || data2[i].frozExecuteItem== null){
              this.StockRight.frozExecuteItem='—'
            }else{
              this.StockRight.frozExecuteItem=data2[i].frozExecuteItem
            }
            if(data2[i].frozExecuteNo==""|| data2[i].frozExecuteNo=="undefined" || data2[i].frozExecuteNo== null){
              this.StockRight.frozExecuteNo='—'
            }else{
              this.StockRight.frozExecuteNo=data2[i].frozExecuteNo
            }
            if(data2[i].frozDocNo==""|| data2[i].frozDocNo=="undefined" || data2[i].frozDocNo== null){
              this.StockRight.frozDocNo='—'
            }else{
              this.StockRight.frozDocNo=data2[i].frozDocNo
            }
            if(data2[i].keepFrozDeadline==""|| data2[i].keepFrozDeadline=="undefined" || data2[i].keepFrozDeadline== null){
              this.StockRight.keepFrozDeadline='—'
            }else{
              this.StockRight.keepFrozDeadline=data2[i].keepFrozDeadline
            }
            if(data2[i].keepFrozFrom==""|| data2[i].keepFrozFrom=="undefined" || data2[i].keepFrozFrom== null){
              this.StockRight.keepFrozFrom='—'
            }else{
              this.StockRight.keepFrozFrom=data2[i].keepFrozFrom
            }
            if(data2[i].keepFrozTo==""|| data2[i].keepFrozTo=="undefined" || data2[i].keepFrozTo== null){
              this.StockRight.keepFrozTo='—'
            }else{
              this.StockRight.keepFrozTo=data2[i].keepFrozTo
            }
            if(data2[i].thawAuth==""|| data2[i].thawAuth=="undefined" || data2[i].thawAuth== null){
              this.StockRight.thawAuth='—'
            }else{
              this.StockRight.thawAuth=data2[i].thawAuth
            }
            if(data2[i].thawExecuteItem==""|| data2[i].thawExecuteItem=="undefined" || data2[i].thawExecuteItem== null){
              this.StockRight.thawExecuteItem='—'
            }else{
              this.StockRight.thawExecuteItem=data2[i].thawExecuteItem
            }
            if(data2[i].thawExecuteNo==""|| data2[i].thawExecuteNo=="undefined" || data2[i].thawExecuteNo== null){
              this.StockRight.thawExecuteNo='—'
            }else{
              this.StockRight.thawExecuteNo=data2[i].thawExecuteNo
            }
            if(data2[i].thawDocNo==""|| data2[i].thawDocNo=="undefined" || data2[i].thawDocNo== null){
              this.StockRight.thawDocNo='—'
            }else{
              this.StockRight.thawDocNo=data2[i].thawDocNo
            }
            if(data2[i].thawDate==""|| data2[i].thawDate=="undefined" || data2[i].thawDate== null){
              this.StockRight.thawDate='—'
            }else{
              this.StockRight.thawDate=data2[i].thawDate
            }
            if(data2[i].thawPublicDate==""|| data2[i].thawPublicDate=="undefined" || data2[i].thawPublicDate== null){
              this.StockRight.thawPublicDate='—'
            }else{
              this.StockRight.thawPublicDate=data2[i].thawPublicDate
            }
            if(data2[i].invalidTime==""|| data2[i].invalidTime=="undefined" || data2[i].invalidTime== null){
              this.StockRight.invalidTime='—'
            }else{
              this.StockRight.invalidTime=data2[i].invalidTime
            }
            if(data2[i].invalidReason==""|| data2[i].invalidReason=="undefined" || data2[i].invalidReason== null){
              this.StockRight.invalidReason='—'
            }else{
              this.StockRight.invalidReason=data2[i].invalidReason
            }

          }
        }



      })
    },
    // 动产抵押登记信息
    getChattelMortgageList(enter,pageNum,pageSize){
      this.axios({
        method: 'POST',
        url: '/ChattelMortgageList',
        params: {
          enterpriseName:enter,
          pageNum:pageNum,
          pageSize:pageSize
        },
      })
      .then((res)=>{
        // console.log("13、动产抵押登记信息")
        let data3 = res.data.data.list;
        this.mationLable[2].num = res.data.data.total;
        if(this.mationLable[2].num<=0){
          $('#ChattelMortgage1 .tablge_g').text('无动产抵押登记信息')
          this.ChattelMortgageshow = false
        }else{
          if(this.mationLable[2].num<=1){
            this.ChattelMortgageshow = false
          }
          for(let i=0;i<data3.length;i++){
            if(data3[i].mortRegNo==""|| data3[i].mortRegNo=="undefined" || data3[i].mortRegNo== null){
              this.ChattelMortgage.mortRegNo = '—'
            }else{
              this.ChattelMortgage.mortRegNo=data3[i].mortRegNo
            }
            if(data3[i].mortStatus==""|| data3[i].mortStatus=="undefined" || data3[i].mortStatus== null){
              this.ChattelMortgage.mortStatus = '—'
            }else{
              this.ChattelMortgage.mortStatus=data3[i].mortStatus
            }
            if(data3[i].regDate==""|| data3[i].regDate=="undefined" || data3[i].regDate== null){
              this.ChattelMortgage.regDate = '—'
            }else{
              this.ChattelMortgage.regDate=data3[i].regDate
            }
            if(data3[i].regOrg==""|| data3[i].regOrg=="undefined" || data3[i].regOrg== null){
              this.ChattelMortgage.regOrg = '—'
            }else{
              this.ChattelMortgage.regOrg=data3[i].regOrg
            }
            if(data3[i].priclasecKind==""|| data3[i].priclasecKind=="undefined" || data3[i].priclasecKind== null){
              this.ChattelMortgage.priclasecKind = '—'
            }else{
              this.ChattelMortgage.priclasecKind=data3[i].priclasecKind
            }
            if(data3[i].priclasecAm==""|| data3[i].priclasecAm=="undefined" || data3[i].priclasecAm== null){
              this.ChattelMortgage.priclasecAm = '—'
            }else{
              this.ChattelMortgage.priclasecAm=this.globalFC.scientificNotation((Number(data3[i].priclasecAm)/10000).toFixed(2))
            }
            if(data3[i].warcov==""|| data3[i].warcov=="undefined" || data3[i].warcov== null){
              this.ChattelMortgage.warcov = '—'
            }else{
              this.ChattelMortgage.warcov=data3[i].warcov
            }
            if(data3[i].pefperFrom==""|| data3[i].pefperFrom=="undefined" || data3[i].pefperFrom== null){
              this.ChattelMortgage.pefperFrom = '—'
            }else{
              this.ChattelMortgage.pefperFrom=data3[i].pefperFrom
            }
            if(data3[i].pefperTo==""|| data3[i].pefperTo=="undefined" || data3[i].pefperTo== null){
              this.ChattelMortgage.pefperTo = '—'
            }else{
              this.ChattelMortgage.pefperTo=data3[i].pefperTo
            }
            if(data3[i].canDate==""|| data3[i].canDate=="undefined" || data3[i].canDate== null){
              this.ChattelMortgage.canDate = '—'
            }else{
              this.ChattelMortgage.canDate=data3[i].canDate
            }
            if(data3[i].canReason==""|| data3[i].canReason=="undefined" || data3[i].canReason== null){
              this.ChattelMortgage.canReason = '—'
            }else{
              this.ChattelMortgage.canReason=data3[i].canReason
            }
            if(data3[i].mortOrg==""|| data3[i].mortOrg=="undefined" || data3[i].mortOrg== null){
              this.ChattelMortgage.mortOrg = '—'
            }else{
              this.ChattelMortgage.mortOrg=data3[i].mortOrg
            }
            if(data3[i].blicType==""|| data3[i].blicType=="undefined" || data3[i].blicType== null){
              this.ChattelMortgage.blicType = '—'
            }else{
              this.ChattelMortgage.blicType=data3[i].blicType
            }
            if(data3[i].blicNo==""|| data3[i].blicNo=="undefined" || data3[i].blicNo== null){
              this.ChattelMortgage.blicNo = '—'
            }else{
              this.ChattelMortgage.blicNo=data3[i].blicNo
            }
            if(data3[i].mortLoc==""|| data3[i].mortLoc=="undefined" || data3[i].mortLoc== null){
              this.ChattelMortgage.mortLoc = '—'
            }else{
              this.ChattelMortgage.mortLoc=data3[i].mortLoc
            }
            if(data3[i].morguaInfoList==""|| data3[i].morguaInfoList=="undefined" || data3[i].morguaInfoList== null){
              this.ChattelMortgage.morguaInfoList = '—'
            }else{
              this.ChattelMortgage.morguaInfoList=data3[i].morguaInfoList
            }
            if(data3[i].guaName==""|| data3[i].guaName=="undefined" || data3[i].guaName== null){
              this.ChattelMortgage.guaName = '—'
            }else{
              this.ChattelMortgage.guaName=data3[i].guaName
            }
            if(data3[i].guaOwn==""|| data3[i].guaOwn=="undefined" || data3[i].guaOwn== null){
              this.ChattelMortgage.guaOwn = '—'
            }else{
              this.ChattelMortgage.guaOwn=data3[i].guaOwn
            }
            if(data3[i].guaDes==""|| data3[i].guaDes=="undefined" || data3[i].guaDes== null){
              this.ChattelMortgage.guaDes = '—'
            }else{
              this.ChattelMortgage.guaDes=data3[i].guaDes
            }
            let  data6 = data3[i].list
            for(let  m=0;m<data6.length;m++){
              if(data6[m].guaName==""|| data6[m].guaName=="undefined" || data6[m].guaName== null){
                tdata6[m].guaName='—'
              }
              if(data6[m].guaOwn==""|| data6[m].guaOwn=="undefined" || data6[m].guaOwn== null){
                data6[m].guaOwn='—'
              }
              if(data6[m].guaDes==""|| data6[m].guaDes=="undefined" || data6[m].guaDes== null){
                data6[m].guaDes='—'
              }
            }
            this.ChattelMortgageList = data6
          }
          // console.log(this.ChattelMortgage)
        }
      })
    },
    // 企业行政处罚历史
    getAdministrativeSanctionList(enter,pageNum,pageSize){
      this.axios({
        method: 'POST',
        url: '/AdministrativeSanctionList',
        params: {
          enterpriseName:enter,
          pageNum:pageNum,
          pageSize:pageSize
        },
      })
      .then((res)=>{
        this.mationLable[5].num = res.data.data.total;
        if(res.data.data.list.length<=0){
          $('#punishfomation1 .tablge_g').text('无行政处罚信息')
          this.Administrativeshow = false
        }else{
          if(this.mationLable[5].num<=5){
            this.Administrativeshow = false
          }
          this.Administrative = res.data.data.list
        }
      })
    },
    // 严重违法失信信息
    getSeriousIllegalityList(enter,pageNum,pageSize){
      this.axios({
        method: 'POST',
        url: '/SeriousIllegalityList',
        params: {
          enterpriseName:enter,
          pageNum:pageNum,
          pageSize:pageSize
        },
      })
      .then((res)=>{
        // console.log("15、严重违法失信信息")
        // console.log(res.data)

        this.mationLable[3].num = res.data.data.total;
        if(res.data.data.list.length<=0){
          $('#SeriousIllegality1 .tablge_g').text('无严重违法失信信息')
          this.SeriousIllegalityshow = false
        }else{
          if(this.mationLable[3].num<=5){
            this.SeriousIllegalityshow = false
          }
          this.SeriousIllegality = res.data.data.list
        }
      })
    },
    // 经营异常信息经营
    getAbnormalOperationList(enter,pageNum,pageSize){
      this.axios({
        method: 'POST',
        url: '/AbnormalOperationList',
        params: {
          enterpriseName:enter,
          pageNum:pageNum,
          pageSize:pageSize
        },
      })
      .then((res)=>{
        // console.log("16、经营异常信息经营")
        // console.log(res.data)
        // console.log(res.data.data.list[0].resultOut =="")
        this.mationLable[4].num = res.data.data.total;
        if(res.data.data.list.length<=0){
          $('#abnormalfomation1 .tablge_g').text('无经营异常信息')
          this.AbnormalOperashow = false
        }else{
          if(this.mationLable[4].num<=5){
            this.AbnormalOperashow = false
          }
        this.AbnormalOpera  = res.data.data.list;
          for(let n=0;n<this.AbnormalOpera.length;n++){
            if(this.AbnormalOpera[n].resultOut == ""){
              this.AbnormalOpera[n].resultOut = "—"
            }

          }
        }
      })
    },
    // 被执行人信息
    getBeexecutedcList(enter,pageNum,pageSize){
      this.axios({
        method: 'POST',
        url: '/BeexecutedcList',
        params: {
          enterpriseName:enter,
          pageNum:pageNum,
          pageSize:pageSize
        },
      })
      .then((res)=>{
        // console.log("17、被执行人信息")
        // console.log(res.data);

        this.mationLable[6].num = res.data.data.total;
        if(res.data.data.list.length<=0){
          $('#implementfomation1 .tablge_g').text('无被执行人信息')
          this.Beexecutedcstshow = false
        }else{
          if(this.mationLable[6].num<=5){
            this.Beexecutedcstshow = false
          }
          this.Beexecutedc = res.data.data.list;
          this.Beexecutedc.forEach((value,index)=>{
            value.execmoney= this.globalFC.scientificNotation(Number(value.execmoney).toFixed(2))
          })
        }
      })
    },
    // 失信被执行人的详细信息
    getDishonestyBeexecutedcList(enter,pageNum,pageSize){
      this.axios({
        method: 'POST',
        url: '/DishonestyBeexecutedcList',
        params: {
          enterpriseName:enter,
          pageNum:pageNum,
          pageSize:pageSize
        },
      })
      .then((res)=>{
        // console.log('18、失信被执行人的详细信息'+res.data)
        // console.log(res.data)
        this.mationLable[7].num = res.data.data.total;
        if(res.data.data.list.length<=0){
          $('#Dishonesty1 .tablge_g').text('无失信被执行信息')
          this.Dishonestyshow = false
        }else{
          if(this.mationLable[7].num<=5){
          this.Dishonestyshow = false
          }
          this.Dishonesty = res.data.data.list;
          this.Dishonesty.forEach((value,index)=>{
            let date1=value.publishDate
            let dateYear1=date1.slice(0,date1.indexOf('/'))
            let dateMont1=date1.slice(date1.indexOf('/')+1,date1.lastIndexOf('/'))<10?'0'+date1.slice(date1.indexOf('/')+1,date1.lastIndexOf('/')):date1.slice(date1.indexOf('/')+1,date1.lastIndexOf('/')-1)
            let dateDay1=date1.slice(date1.lastIndexOf('/')+1,)<10?'0'+date1.slice(date1.lastIndexOf('/')+1,):date1.slice(date1.lastIndexOf('/')+1,)
            let startdate1 = dateYear1 + '-' + dateMont1 + '-' + dateDay1;
            let date=value.regDate
            let dateYear=date.slice(0,date.indexOf('/'))
            let dateMont=date.slice(date.indexOf('/')+1,date.lastIndexOf('/'))<10?'0'+date.slice(date.indexOf('/')+1,date.lastIndexOf('/')):date.slice(date.indexOf('/')+1,date.lastIndexOf('/')-1)
            let dateDay=date.slice(date.lastIndexOf('/')+1,)<10?'0'+date.slice(date.lastIndexOf('/')+1,):date.slice(date.lastIndexOf('/')+1,)
            let startdate = dateYear + '-' + dateMont + '-' + dateDay;
            value.publishDate = startdate1
            value.regDate = startdate
          })
        }
      })
    }
  }
}
