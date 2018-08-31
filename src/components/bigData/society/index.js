import globalFC from '../../../assets/global/globalFC.js'
export default {
  name: 'society',
  data() {
    return {
      OutboundInvest:{//企业法定代表人对外投资信息
        entName:'',
        fundedRatio:'',
        subConam:'',
        subCurrency:'',
        creditCode:'',
        regNo:'',
        entType:'',
        entStatus:'',
        regCap:'',
        regCapCur:'',
        esDate:'',
        regOrg:'',
        canDate:'',
        revDate:'',
      },
      OutboundInvestshow:true,
      OutboundInvesttol:'',
      OutboundInvest1:[//企业法定代表人对外投资信息
      ],
      OutboundInvest2:[],
      OtherCompanies:{//企业法定代表人其他公司任职信息
        entName:'',
        frName:'',
        creditCode:'',
        regNo:'',
        entType:'',
        entStatus:'',
        canDate:'',
        revDate:'',
        esDate:'',
        regOrg:'',
        regCap:'',
        regCapCur:''
      },
      OtherCompanies1:{//企业法定代表人其他公司任职信息
        entName:'',
        frName:'',
        creditCode:'',
        regNo:'',
        entType:'',
        entStatus:'',
        canDate:'',
        revDate:'',
        esDate:'',
        regOrg:'',
        regCap:'',
        regCapCur:''
      },
      OtherCompanies2:[],
      OtherCompaniesshow:false,
      OtherCompaniestol:'',
      OtherCompanies1:[],
      tableData:[
        {id:1,name: 'xiaoming',value: 'value0',date:'2017-02-02'},
        {id:2,name: 'xiaoming',value: 'value1',date:'2017-02-03'},
        {id:3,name: 'xiaoming',value: 'value2',date:'2017-02-04'},
        {id:4,name: 'xiaoming',value: 'value3',date:'2017-02-05'},
        {id:5,name: 'xiaoming',value: 'value4',date:'2017-02-06'},
        {id:6,name: 'xiaoming',value: 'value5',date:'2017-02-07'}
      ],
      moreShow: false,
      searchData:'',
      searchFlag:true,
      enterpriseName:'',
      frName:'',  //法人
      dialogVisible: false
    }
  },
  created(){
    this.enterpriseName=this.$route.params.enterpriseName
    this.frName = this.$route.params.frName
    console.log(this.enterpriseName)
    console.log(this.frName);
    this.getOutboundInvestmentPersonalList(this.enterpriseName,1,1);  //企业法定代表人对外投资信息
    this.getOtherCompaniesOfficeList(this.enterpriseName,1,1);  //企业法定代表人其他公司任职信息
  },
  // mounted(){
  //   $('.el-dialog__wrapper').scroll(function(){
  //     let conH = $('.el-dialog__body').offset().top
  //     let scrollTop = $(this).scrollTop()
  //     if(scrollTop>conH){
  //       $('.tit1').css({
  //         width:'100%',
  //         position:'fixed',
  //         top:0,
  //         // left:'80px',
  //         // right:'93px'
  //       })
  //     }else{
  //       $('.tit1').css({
  //         position:'absolute',
  //         top:0,
  //         left:0,
  //         right:0,
  //       })
  //       $('.el-dialog__body ').eq(0).css({
  //         'padding-top':'50px'
  //       })
  //     }
  //   })
  // },
  methods:{
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
      $('table').show()
      $('table tr').show()
    },
    // 点击更多显示弹框
    more(enter,pageNum,pageSize,index){
      this.dialogVisible = true
      this.index= index
      this.moreShow =true;
      let time =new Date()
      if(index==1){
        this.axios({
          method: 'POST',
          url: '/OutboundInvestmentPersonalList?timer='+time.getTime(),
          params: {
            enterpriseName:enter,
            pageNum:pageNum,
            pageSize:pageSize
          },
        })
        .then((res)=>{
          // console.log("1、企业法定代表人对外投资信息")
          // console.log(res.data)
          let data = res.data.data.list

            for(let i=0;i<data.length;i++){
              if(data[i].entName==""|| data[i].entName=="undefined" || data[i].entName== "null"){
                data[i].entName = '—'
              }
              if(data[i].fundedRatio==""|| data[i].fundedRatio=="undefined" || data[i].fundedRatio== "null"){
                data[i].fundedRatio = '—'
              }
              if(data[i].subConam==""|| data[i].subConam=="undefined" || data[i].subConam== "null"){
                data[i].subConam = '—'
              }else{
                data[i].subConam = this.globalFC.scientificNotation((data[i].subConam).toFixed(2))
              }
              if(data[i].subCurrency==""|| data[i].subCurrency=="undefined" || data[i].subCurrency== "null"){
                data[i].subCurrency = '—'
              }
              if(data[i].creditCode==""|| data[i].creditCode=="undefined" || data[i].creditCode== "null"){
                data[i].creditCode = '—'
              }
              if(data[i].regNo==""|| data[i].regNo=="undefined" || data[i].regNo== "null"){
                data[i].regNo = '—'
              }
              if(data[i].entType==""|| data[i].entType=="undefined" || data[i].entType== "null"){
                data[i].entType = '—'
              }
              if(data[i].entStatus==""|| data[i].entStatus=="undefined" || data[i].entStatus== "null"){
                data[i].entStatus = '—'
              }
              if(data[i].regCap==""|| data[i].regCap=="undefined" || data[i].regCap== "null"){
                data[i].regCap = '—'
              }else{
                data[i].regCap=this.globalFC.scientificNotation((data[i].regCap).toFixed(2))
              }
              if(data[i].regCapCur==""|| data[i].regCapCur=="undefined" || data[i].regCapCur== "null"){
                data[i].regCapCur = '—'
              }
              if(data[i].esDate==""|| data[i].esDate=="undefined" || data[i].esDate== "null"){
                data[i].esDate = '—'
              }
              if(data[i].regOrg==""|| data[i].regOrg=="undefined" || data[i].regOrg== "null"){
                data[i].regOrg = '—'
              }
              if(data[i].revDate==""|| data[i].revDate=="undefined" || data[i].revDate== "null"){
                data[i].revDate = '—'
              }
              if(data[i].canDate==""|| data[i].canDate=="undefined" || data[i].canDate== "null"){
                data[i].canDate = '—'
              }
              this.OutboundInvest2.push(data[i])
            }
        })
      }
      else if(index==2){
        this.axios({
          method: 'POST',
          url: '/OtherCompaniesOfficeList',
          params: {
            enterpriseName:enter,
            pageNum:pageNum,
            pageSize:pageSize
          },
        })
        .then((res)=>{
          let data1 = res.data.data.list
            for(let i=0;i<data1.length;i++){
              if(data1[i].position==""|| data1[i].position=="undefined" || data1[i].position== "null"){
                data1[i].position = '—'
              }
              if(data1[i].lerepsign==""|| data1[i].lerepsign=="undefined" || data1[i].lerepsign== "null"){
                data1[i].lerepsign = '—'
              }
              if(data1[i].entName==""|| data1[i].entName=="undefined" || data1[i].entName== "null"){
                data1[i].entName = '—'
              }
              if(data1[i].frName==""|| data1[i].frName=="undefined" || data1[i].frName== "null"){
                data1[i].frName = '—'
              }
              if(data1[i].creditCode==""|| data1[i].creditCode=="undefined" || data1[i].creditCode== "null"){
                data1[i].creditCode = '—'
              }
              if(data1[i].regNo==""|| data1[i].regNo=="undefined" || data1[i].regNo== "null"){
                data1[i].regNo = '—'
              }
              if(data1[i].entType==""|| data1[i].entType=="undefined" || data1[i].entType== "null"){
                data1[i].entType = '—'
              }
              if(data1[i].entStatus==""|| data1[i].entStatus=="undefined" || data1[i].entStatus== "null"){
                data1[i].entStatus = '—'
              }
              if(data1[i].canDate==""|| data1[i].canDate=="undefined" || data1[i].canDate== "null" ){
                data1[i].canDate = '—'
              }
              if(data1[i].revDate==""|| data1[i].revDate=="undefined" || data1[i].revDate== "null"){
                data1[i].revDate = '—'
              }
              if(data1[i].esDate==""|| data1[i].esDate=="undefined" || data1[i].esDate== "null"){
                data1[i].esDate = '—'
              }
              if(data1[i].regOrg==""|| data1[i].regOrg=="undefined" || data1[i].regOrg== "null"){
                data1[i].regOrg = '—'
              }
              if(data1[i].regCap==""|| data1[i].regCap=="undefined" || data1[i].regCap== "null"){
                data1[i].regCap = '—'
              }else{
                data1[i].regCap=this.globalFC.scientificNotation((data1[i].regCap).toFixed(2))
              }
              if(data1[i].regCapCur==""|| data1[i].regCapCur=="undefined" || data1[i].regCapCur== "null"){
                data1[i].regCapCur = '—'
              }
              this.OtherCompanies2.push(data1[i])
            }

        })
      }

    },
    close(){
      this.dialogVisible = false
      this.moreShow = false
      this.searchData = ''
      $('button#clearSearch').css({
        background:'#ddd',
        color:'#000'
      })
      // 移除span标签避免二次搜索的bug
        $('.red').each(function(){
          let txt= $(this).html()
          $(this).replaceWith(txt)
        })
        $('table').show()

    },
     //清空输入框内容
    ClearNull(){
      this.searchData = ''
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
            case 1:    let content = $('.more1 .tablge_g tr td')
                        if(this.searchData!==''){
                          let regExp = new RegExp(this.searchData,'g')
                          for(let i=0;i<content.length;i++){
                            let re = '<span class="red ">'+this.searchData+'</span>'
                            $('.more1 .tablge_g tr td').eq(i).html(content[i].innerText.replace(regExp,re))
                          }
                          // 显示搜索内容相关的table
                          $('.more1 .tablge_g table').hide().filter(":contains('"+this.searchData+"')").show()

                        }else{
                          $('.more1 .tablge_g table').hide()
                        }
                        break
            case 2:    let content1 = $('.more2 .tablge_g tr td')
                       console.log(content1);
                        if(this.searchData!==''){
                          let regExp = new RegExp(this.searchData,'g')
                          for(let i=0;i<content1.length;i++){
                            let re = '<span class="red ">'+this.searchData+'</span>'
                            $('.more2 .tablge_g tr td').eq(i).html(content1[i].innerText.replace(regExp,re))
                          }
                          // 显示搜索内容相关的table
                          $('.more2 .tablge_g table').hide().filter(":contains('"+this.searchData+"')").show()
                        }else{
                            $('.more2 .tablge_g table').hide()
                        }
                        break
          }
      }
    },
    searchdata(index){
      let res1 = /[*$<>%.?#^&!@]/g;
      if(res1.test(this.searchData)){
        this.searchData=this.searchData.replace(res1,'')
      }
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
          case 1:    let content = $('.more1 .tablge_g tr td')
                      if(this.searchData!==''){
                        let regExp = new RegExp(this.searchData,'g')
                        for(let i=0;i<content.length;i++){
                          let re = '<span class="red ">'+this.searchData+'</span>'
                          $('.more1 .tablge_g tr td').eq(i).html(content[i].innerText.replace(regExp,re))
                        }
                        // 显示搜索内容相关的table
                        $('.more1 .tablge_g table').hide().filter(":contains('"+this.searchData+"')").show()

                      }else{
                        $('.more1 .tablge_g table').hide()
                      }
                      break
          case 2:    let content1 = $('.more2 .tablge_g tr td')
                     console.log(content1);
                      if(this.searchData!==''){
                        let regExp = new RegExp(this.searchData,'g')
                        for(let i=0;i<content1.length;i++){
                          let re = '<span class="red ">'+this.searchData+'</span>'
                          $('.more2 .tablge_g tr td').eq(i).html(content1[i].innerText.replace(regExp,re))
                        }
                        // 显示搜索内容相关的table
                        $('.more2 .tablge_g table').hide().filter(":contains('"+this.searchData+"')").show()
                      }else{
                          $('.more2 .tablge_g table').hide()
                      }
                      break
        }
    },
    // 搜索结束--------------
    // 返回大数据看板
    reback() {
      this.router.push({ path : 'bigData', query : { partnum: 2 } })
    },
    // 企业法定代表人对外投资信息
    getOutboundInvestmentPersonalList(enter,pageNum,pageSize){
      this.axios({
        method: 'POST',
        url: '/OutboundInvestmentPersonalList',
        params: {
          enterpriseName:enter,
          pageNum:pageNum,
          pageSize:pageSize
        },
      })
      .then((res)=>{
        this.OutboundInvesttol = res.data.data.total
        let data = res.data.data.list
        if(this.OutboundInvesttol<=0){
          $('#OutboundInvest .tablge_g').text('无法定代表人对外投资信息')
          this.OutboundInvestshow = false
        }else{
          if(this.OutboundInvesttol<=1){
            this.OutboundInvestshow = false
          }else{
            this.OutboundInvestshow = true
          }

          for(let i=0;i<data.length;i++){
            if(data[i].entName==""|| data[i].entName=="undefined" || data[i].entName== "null"){
              this.OutboundInvest.entName = '—'
            }else{
              this.OutboundInvest.entName=data[i].entName
            }
            if(data[i].fundedRatio==""|| data[i].fundedRatio=="undefined" || data[i].fundedRatio== "null"){
              this.OutboundInvest.fundedRatio = '—'
            }else{
              this.OutboundInvest.fundedRatio=data[i].fundedRatio
            }
            if(data[i].subConam==""|| data[i].subConam=="undefined" || data[i].subConam== "null"){
              this.OutboundInvest.subConam = '—'
            }else{
              this.OutboundInvest.subConam=this.globalFC.scientificNotation((data[i].subConam).toFixed(2))
            }
            if(data[i].subCurrency==""|| data[i].subCurrency=="undefined" || data[i].subCurrency== "null"){
              this.OutboundInvest.subCurrency = '—'
            }else{
              this.OutboundInvest.subCurrency=data[i].subCurrency
            }
            if(data[i].creditCode==""|| data[i].creditCode=="undefined" || data[i].creditCode== "null"){
              this.OutboundInvest.creditCode = '—'
            }else{
              this.OutboundInvest.creditCode=data[i].creditCode
            }
            if(data[i].regNo==""|| data[i].regNo=="undefined" || data[i].regNo== "null"){
              this.OutboundInvest.regNo = '—'
            }else{
              this.OutboundInvest.regNo=data[i].regNo
            }
            if(data[i].entType==""|| data[i].entType=="undefined" || data[i].entType== "null"){
              this.OutboundInvest.entType = '—'
            }else{
              this.OutboundInvest.entType=data[i].entType
            }
            if(data[i].entStatus==""|| data[i].entStatus=="undefined" || data[i].entStatus== "null"){
              this.OutboundInvest.entStatus = '—'
            }else{
              this.OutboundInvest.entStatus=data[i].entStatus
            }
            if(data[i].regCap==""|| data[i].regCap=="undefined" || data[i].regCap== "null"){
              this.OutboundInvest.regCap = '—'
            }else{
              this.OutboundInvest.regCap=this.globalFC.scientificNotation((data[i].regCap).toFixed(2))
            }
            if(data[i].regCapCur==""|| data[i].regCapCur=="undefined" || data[i].regCapCur== "null"){
              this.OutboundInvest.regCapCur = '—'
            }else{
              this.OutboundInvest.regCapCur=data[i].regCapCur
            }
            if(data[i].esDate==""|| data[i].esDate=="undefined" || data[i].esDate== "null"){
              this.OutboundInvest.esDate = '—'
            }else{
              this.OutboundInvest.esDate=data[i].esDate
            }
            if(data[i].regOrg==""|| data[i].regOrg=="undefined" || data[i].regOrg== "null"){
              this.OutboundInvest.regOrg = '—'
            }else{
              this.OutboundInvest.regOrg=data[i].regOrg
            }
            if(data[i].revDate==""|| data[i].revDate=="undefined" || data[i].revDate== "null"){
              this.OutboundInvest.revDate = '—'
            }else{
              this.OutboundInvest.revDate=data[i].revDate
            }
            if(data[i].canDate==""|| data[i].canDate=="undefined" || data[i].canDate== "null"){
              this.OutboundInvest.canDate = '—'
            }else{
              this.OutboundInvest.canDate=data[i].canDate
            }
          }
        }
      })
    },
    // 企业法定代表人其他公司任职信息
    getOtherCompaniesOfficeList(enter,pageNum,pageSize){
      this.axios({
        method: 'POST',
        url: '/OtherCompaniesOfficeList',
        params: {
          enterpriseName:enter,
          pageNum:pageNum,
          pageSize:pageSize
        },
      })
      .then((res)=>{
        this.OtherCompaniestol = res.data.data.total
        this.OtherCompanies = res.data;
        let data1 = res.data.data.list
        if(this.OtherCompaniestol<=0){
          $('#OtherCompanies .tablge_g').text('无法定代表人其他公司任职信息')
          this.OtherCompaniesshow = false
        }else{
          if(this.OtherCompaniestol<=1){
            this.OtherCompaniesshow = false
          }else{
            this.OtherCompaniesshow = true
          }
          for(let i=0;i<data1.length;i++){
            if(data1[i].position==""|| data1[i].position=="undefined" || data1[i].position== "null"){
              this.OtherCompanies.position = '—'
            }else{
              this.OtherCompanies.position=data1[i].position
            }
            if(data1[i].lerepsign==""|| data1[i].lerepsign=="undefined" || data1[i].lerepsign== "null"){
              this.OtherCompanies.lerepsign = '—'
            }else{
              this.OtherCompanies.lerepsign=data1[i].lerepsign
            }
            if(data1[i].entName==""|| data1[i].entName=="undefined" || data1[i].entName== "null"){
              this.OtherCompanies.entName = '—'
            }else{
              this.OtherCompanies.entName=data1[i].entName
            }
            if(data1[i].frName==""|| data1[i].frName=="undefined" || data1[i].frName== "null"){
              this.OtherCompanies.frName = '—'
            }else{
              this.OtherCompanies.frName=data1[i].frName
            }
            if(data1[i].creditCode==""|| data1[i].creditCode=="undefined" || data1[i].creditCode== "null"){
              this.OtherCompanies.creditCode = '—'
            }else{
              this.OtherCompanies.creditCode=data1[i].creditCode
            }
            if(data1[i].regNo==""|| data1[i].regNo=="undefined" || data1[i].regNo== "null"){
              this.OtherCompanies.regNo = '—'
            }else{
              this.OtherCompanies.regNo=data1[i].regNo
            }
            if(data1[i].entType==""|| data1[i].entType=="undefined" || data1[i].entType== "null"){
              this.OtherCompanies.entType = '—'
            }else{
              this.OtherCompanies.entType=data1[i].entType
            }
            if(data1[i].entStatus==""|| data1[i].entStatus=="undefined" || data1[i].entStatus== "null"){
              this.OtherCompanies.entStatus = '—'
            }else{
              this.OtherCompanies.entStatus=data1[i].entStatus
            }
            if(data1[i].canDate==""|| data1[i].canDate=="undefined" || data1[i].canDate== "null" ){
              this.OtherCompanies.canDate = '—'
            }else{
              this.OtherCompanies.canDate=data1[i].canDate
            }
            if(data1[i].revDate==""|| data1[i].revDate=="undefined" || data1[i].revDate== "null"){
              this.OtherCompanies.revDate = '—'
            }else{
              this.OtherCompanies.revDate=data1[i].revDate
            }
            if(data1[i].esDate==""|| data1[i].esDate=="undefined" || data1[i].esDate== "null"){
              this.OtherCompanies.esDate = '—'
            }else{
              this.OtherCompanies.esDate=data1[i].esDate
            }
            if(data1[i].regOrg==""|| data1[i].regOrg=="undefined" || data1[i].regOrg== "null"){
              this.OtherCompanies.regOrg = '—'
            }else{
              this.OtherCompanies.regOrg=data1[i].regOrg
            }
            if(data1[i].regCap==""|| data1[i].regCap=="undefined" || data1[i].regCap== "null"){
              this.OtherCompanies.regCap = '—'
            }else{
              this.OtherCompanies.regCap=this.globalFC.scientificNotation((data1[i].regCap).toFixed(2))
            }
            if(data1[i].regCapCur==""|| data1[i].regCapCur=="undefined" || data1[i].regCapCur== "null"){
              this.OtherCompanies.regCapCur = '—'
            }else{
              this.OtherCompanies.regCapCur=data1[i].regCapCur
            }
          }
        }
      })
    },
  }
}
