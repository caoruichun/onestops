export default {
  name: 'valuationTransaction',
  data() {
    return {
      options: [],//个券信息
      basicInfomation:{},//基本信息
      value: '',
      tableData: [],
      exenhancemodeflag:'',
      tabledebt:[
          {name:'—',num:'—',time:'—'},
        ],
      tableproindex: [],
      tablefinProindex:[],
      sdnewestcreditrate:'',
      enterpriseId:102760,//100806天津例子    102760启德例子
      anchorNum: 0, // 锚点定位
      anchorPucker: true, // 锚点展开
      flag: true,
      startdate:'',
      maturitydate:'',
      widthSize:'',
      size:'',
      exchangeduty:'',
      compCode:102760,//企业ID
      bondID: '', // 债券ID
      // 数据字典
      // 债券类型
      bondType:['国债','地方政府债券','央行票据','汇金债','中国铁道部一般债券','中国铁道部中期票据','中国铁道部短期融资券','中国铁道部超短期融资券','国际开发机构债券','政策性银行普通金融债','政策性银行次级金融债','商业银行普通金融债','商业银行混合资本债','商业银行次级金融债','保险公司普通金融债','保险公司次级金融债','证券公司普通金融债','证券公司次级金融债','证券公司短期融资券','其他金融机构金融债','中央企业债券','地方企业债券','集合债券','普通公司债','可转换公司债','分离式可转换公司债','可交换公司债券','一般短期融资券','超短期融资债券','中期票据','中小企业集合票据','信贷资产证券化(ABS)','住房抵押贷款证券化(MBS)','券商专项资产管理(BBS)','汽车抵押贷款证券化(LBS)','资产支持票据','大额可转让同业存单','项目收益票据'],
      bondTypeTwo:['','政府债券','央行票据','','国际开发机构债券','金融债','企业(公司)债券','资产支持证券','资产支持票据','大额可转让同业存单'],
      // 发行方式
      rAISEMODE:['','公募债券','私募债券'],
      // 交易市场
      eXCHANGE:['','未上市债券市场','上海证券交易所','深圳证券交易所','银行间市场','上交所固定收益平台','债券柜台交易市场','深交所综合协议交易平台'],
      // 利率类型
      // bASERATECODEList:{
      //   a:['','活期存款','三个月存款','半年存款','一年存款','二年存款','三年存款','五年存款','八年及以上存款','一年（零存整取、整存零取、存本取息）','三年（零存整取、整存零取、存本取息）','五年（零存整取、整存零取、存本取息）','定活两便','协定存款','一天（通知存款）','七天（通知存款）','一个月存款'],
      //   b:['','六个月以内（含6个月）贷款','六个月至一年（含1年）贷款','一至三年（含3年）贷款','三至五年（含5年）贷款','五年以上贷款','贴现','信托贷款','租赁贷款','逾期贷款—银行等金融机构罚息','挤占挪用贷款—银行等金融机构罚息','逾期贷款—农村信用社罚息','挤占挪用贷款—农村信用社罚息'],
      //   c:['','1天回购','2天回购','3天回购','7天回购','14天回购','21天回购','30天回购','61天回购','91天回购','122天回购','183天回购','273天回购','365天回购'],
      //   d:['','超额储备','法定准备金','对金融机构贷款20天以内','对金融机构贷款3个月以内','对金融机构贷款6个月以内','对金融机构贷款1年期','再贴现'],
      //   e:['','无'],
      // },
       bASERATECODEList:['','零息','固定利率','浮动利率','递进利率','其他'],
      // 息票品种
      vARIETYTYPE:['','按月付息','按季付息','半年付息','每年付息','到期一次还本付息'],
      // 基本信息担保方式
      eXENHANCEMODE:['无担保','第三方担保','抵押担保','抵押担保和质押担保','质押担保','第三方担保和抵押担保','第三方担保和质押担保','第三方担保、质押担保和抵押担保','个人担保、质押担保和抵押担保','未披露','个人担保','第三方担保和个人担保','第三方担保、个人担保和抵押担保'],
      // 类型
      // changeType:['','回售','赎回','首发','增发','转股','换入','换出','并入债券','并出债券','到期','并入交易','并出交易','发行并出','注销','资产支持证券偿还本金','延期兑付','债券偿付本金'],
     // 担保方外部级别
      cREDITRATE:['','D','CCC-','CCC','CCC+','B-','B+','BB-','BB','BB+','BBB-','BBB','BBB+','A-','A','A+','AA-','AA','AA+','AAA-','AAA','AAA+'],
      // 变动情况
      rADJUSTMEMO:['','维持','上调','下调','首次评级'],
      // 担保方式
      gUARTYPE:['','保证担保','抵押担保','留置担保','信用担保','质押担保','抵押担保和质押担保','个人担保','第三方担保和质押担保'],
      // 特殊条款
      cLSTYPE:['','利率条款','回售条款','赎回条款','可调换条款','利息递延条款','暂停索偿权条款','延期选择权条款','提前偿还条款','回拨选择权条款','增发选择权条款','定向转让选择权条款','票面利率选择权','流动性支持','触发性回售条款','加速到期条款','有条件赎回条款','收购承诺条款','持有期利率条款','债券核销或转股条款','担保选择权','减记条款','债券发行失败条款','发行人续期选择权','持有人救济条款','减少持仓还本','发行人优先行使赎回权','投资者优先行使回售权','期初付息','交叉违约条款','投资者品种置换选择权','违约罚息条款','事先约束条款','控制权变更条款','差额补偿条款','期限条款','取消选择权']

    }
  },
    // filters:{
    //   // 表格保留两位小数
    //   tableCheck(val) {
    //     if(typeof(val) == 'number') {
    //       val = this.globalFC.scientificNotation(Number(val).toFixed(2));
    //     };
    //     return val;
    //   },
    // },
  created() {
    if(this.globalInfo.compCode !=''){
      this.compCode=this.globalInfo.compCode
    }
    this.alltq(this.compCode);//个券选择
    // this.basicinfo();//基本信息
    // this.stockchg();//现金流
    // this.debt();//内部债项评级
    // this.proindex();//外部债项评级
    // this.finProindex();//债项担保期情况
  },
  methods:{
    anchorBTN(num) {
      this.anchorNum = num;
      if(num==0) {
        $('.valuationTransaction')[0].scrollTop = 0;
      }
      else if(num==1) {
        $('.valuationTransaction')[0].scrollTop = $('.valuationTransaction .voucherFrame').eq(0).height();
      }else{
        $('.valuationTransaction')[0].scrollTop = $('.valuationTransaction .voucherFrame').eq(0).height()+$('.valuationTransaction .voucherFrame').eq(1).height();
      }
    },
    // 锚点折叠
    anchorFold() {
      this.anchorPucker=!this.anchorPucker;
    },
    // 表格保留两位小数
    tableCheck(row,col,val,cell) {
      if(typeof(val) == 'number') {
        val = this.globalFC.scientificNotation(Number(val).toFixed(2));
      };
      return val;
    },
    // 个券选择
    alltq(enterpriseId){
      this.axios({
        method: 'post',
        url: '/tq/alltq',
        data: {
          id:enterpriseId
        },
      })
      .then((res)=>{
        if(res.data.success) {
          this.options= res.data.data;
          this.value = res.data.data[0].bondsname;
          if(this.globalInfo.bondID&&this.globalInfo.type==2){
            this.basicinfo(this.globalInfo.bondID);
            this.stockchg(this.globalInfo.bondID);
            // this.debt(this.globalInfo.bondID);
            this.proindex(this.globalInfo.bondID);
          }else if(this.$route.query.id !='' && this.$route.query.id !=undefined){
            this.basicinfo(this.$route.query.id);
            this.stockchg(this.$route.query.id);
            // this.debt(this.options[0].symbol);
            this.proindex(this.$route.query.id);
          }else{
            this.basicinfo(this.options[0].symbol);
            this.stockchg(this.options[0].symbol);
            // this.debt(this.options[0].symbol);
            this.proindex(this.options[0].symbol);
          }
        }
      })
      .catch(err => {
        console.log(err)
      });
    },
    //基本信息
    basicinfo(enterpriseId){
      this.axios({
        method: 'post',
        url: '/tq/basicinfo',
        data: {
          compCode:this.compCode,
          symbol:enterpriseId
        },
      })
      .then((res)=>{
        if(res.data.success) {
          this.basicInfomation = res.data.data;
          this.exenhancemodeflag = res.data.data.exenhancemode;
          if(this.exenhancemodeflag != 0){
            this.flag=true;
              this.finProindex(enterpriseId);
          }else {
            this.flag=false;
          }
          var  exchangearry = this.basicInfomation.exchange.split("/");
          this.value = res.data.data.bondsname;
          this.startdate = res.data.data.startdate
          var dateYear=this.startdate.slice(0,4)
          var dateMont=this.startdate.slice(4,6)
          var dateDay=this.startdate.slice(6,8)
          this.startdate = dateYear + '-' + dateMont + '-' + dateDay;
          this.maturitydate = res.data.data.maturitydate
          var dateYear2=this.maturitydate.slice(0,4)
          var dateMont2=this.maturitydate.slice(4,6)
          var dateDay2=this.maturitydate.slice(6,8)
          this.maturitydate = dateYear2 + '-' + dateMont2 + '-' + dateDay2;
          switch(this.basicInfomation.baseratecode) {
            case '10':
              this.basicInfomation.baseratecode = this.bASERATECODEList[1];
              break;
            case '20':
              this.basicInfomation.baseratecode = this.bASERATECODEList[2];
              break;
            case '21':
              this.basicInfomation.baseratecode = this.bASERATECODEList[3];
              break;
            case '22':
              this.basicInfomation.baseratecode = this.bASERATECODEList[4];
              break;
            case '99':
              this.basicInfomation.baseratecode = this.bASERATECODEList[5];
              break;
          };
          this.exchangeduty='';
          for(var i=0;i<exchangearry.length;i++){
            switch(exchangearry[i]) {
              case '001001':
                exchangearry[i] = this.eXCHANGE[1];
                break;
              case '001002':
                exchangearry[i] = this.eXCHANGE[2];
                break;
              case '001003':
                exchangearry[i] = this.eXCHANGE[3];
                break;
              case '001005':
                exchangearry[i] = this.eXCHANGE[4];
                break;
              case '001006':
                exchangearry[i] = this.eXCHANGE[5];
                break;
              case '001007':
                exchangearry[i] = this.eXCHANGE[6];
                break;
              case '001018':
                exchangearry[i] = this.eXCHANGE[7];
                break;
            };
            this.exchangeduty = this.exchangeduty+exchangearry[i]+'/';
          }
          this.exchangeduty = this.exchangeduty.substr(0,this.exchangeduty.length-1);
          switch(this.basicInfomation.bondtype2) {
            case '111':
              this.basicInfomation.bondtype2 = this.bondType[0];
              break;
            case '121':
              this.basicInfomation.bondtype2 = this.bondType[1];
              break;
            case '211':
              this.basicInfomation.bondtype2 = this.bondType[2];
              break;
            case '311':
              this.basicInfomation.bondtype2 = this.bondType[3];
              break;
            case '321':
              this.basicInfomation.bondtype2 = this.bondType[4];
              break;
            case '322':
              this.basicInfomation.bondtype2 = this.bondType[5];
              break;
            case '323':
              this.basicInfomation.bondtype2 = this.bondType[6];
              break;
              case '324':
                this.basicInfomation.bondtype2 = this.bondType[7];
                break;
              case '411':
                this.basicInfomation.bondtype2 = this.bondType[8];
                break;
              case '511':
                this.basicInfomation.bondtype2 = this.bondType[9];
                break;
              case '512':
                this.basicInfomation.bondtype2 = this.bondType[10];
                break;
              case '521':
                this.basicInfomation.bondtype2 = this.bondType[11];
                break;
              case '522':
                this.basicInfomation.bondtype2 = this.bondType[12];
                break;
              case '523':
                this.basicInfomation.bondtype2 = this.bondType[13];
                break;
                case '531':
                  this.basicInfomation.bondtype2 = this.bondType[14];
                  break;
                case '532':
                  this.basicInfomation.bondtype2 = this.bondType[15];
                  break;
                case '541':
                  this.basicInfomation.bondtype2 = this.bondType[16];
                  break;
                case '542':
                  this.basicInfomation.bondtype2 = this.bondType[17];
                  break;
                case '543':
                  this.basicInfomation.bondtype2 = this.bondType[18];
                  break;
                case '590':
                  this.basicInfomation.bondtype2 = this.bondType[19];
                  break;
                case '611':
                  this.basicInfomation.bondtype2 = this.bondType[20];
                  break;
                  case '612':
                    this.basicInfomation.bondtype2 = this.bondType[21];
                    break;
                  case '613':
                    this.basicInfomation.bondtype2 = this.bondType[22];
                    break;
                  case '621':
                    this.basicInfomation.bondtype2 = this.bondType[23];
                    break;
                  case '622':
                    this.basicInfomation.bondtype2 = this.bondType[24];
                    break;
                  case '623':
                    this.basicInfomation.bondtype2 = this.bondType[25];
                    break;
                  case '624':
                    this.basicInfomation.bondtype2 = this.bondType[26];
                    break;
                  case '631':
                    this.basicInfomation.bondtype2 = this.bondType[27];
                    break;
                    case '632':
                      this.basicInfomation.bondtype2 = this.bondType[28];
                      break;
                    case '641':
                      this.basicInfomation.bondtype2 = this.bondType[29];
                      break;
                    case '651':
                      this.basicInfomation.bondtype2 = this.bondType[30];
                      break;
                    case '711':
                      this.basicInfomation.bondtype2 = this.bondType[31];
                      break;
                    case '712':
                      this.basicInfomation.bondtype2 = this.bondType[32];
                      break;
                    case '713':
                      this.basicInfomation.bondtype2 = this.bondType[33];
                      break;
                    case '714':
                      this.basicInfomation.bondtype2 = this.bondType[34];
                      break;
                      case '811':
                        this.basicInfomation.bondtype2 = this.bondType[35];
                        break;
                      case '911':
                        this.basicInfomation.bondtype2 = this.bondType[36];
                        break;
                      case '1011':
                        this.basicInfomation.bondtype2 = this.bondType[37];
                        break;
          }
        }
      })
      .catch(err => {
        console.log(err)
      });
    },
    //现金流
    stockchg(enterpriseId){
      this.axios({
        method: 'post',
        url: '/tq/stockchg',
        data: {
          compCode:this.compCode,
          symbol:enterpriseId
        },
      })
      .then((res)=>{
        if(res.data.success) {
          this.tableData= res.data.data;
          if(this.tableData == ''|| this.tableData == [] || this.tableData ==null){
            this.tableData.push({'declaredate':'—','guaramt':'—','changetype':'—'})
          }
        }
      })
      .catch(err => {
        console.log(err)
      });
    },
    //内部债项评级
    // debt(enterpriseId){
    //   this.axios({
    //     method: 'post',
    //     url: '/tq/debt',
    //     data: {
    //       symbol:enterpriseId
    //     },
    //   })
    //   .then((res)=>{
    //     if(res.data.success) {
    //       this.tabledebt = res.data.data;
    //     }
    //   })
    // },
    //外部债项评级
    proindex(enterpriseId){
      this.axios({
        method: 'post',
        url: '/tq/proindex',
        data: {
            compCode:this.compCode,
          symbol:enterpriseId
        },
      })
      .then((res)=>{
        if(res.data.success) {
        this.size = res.data.data.size[0];
          delete res.data.data.size;
          this.tableproindex = res.data.data;
          if(this.size == 1){
            $('.boxwidth').css({'width':100+'%'});
            $('.boxwidth .tablepre').css({'width':50+'%'});
          }else {
              this.widthSize = 100/this.size;
              $('.boxwidth .tablepre').css({'width':this.widthSize+'%'});
              $('.boxwidth').css({'width':$('.boxwidth .tablepre').width()*this.size+'px'});
          }
            if(res.data.data == ''){
              $('.boxwidth').css({'overflow-x':'hidden'});
            }
        }else{
          this.tableproindex = '';
        }
      })
    },
    //债项担保期情况
    finProindex(enterpriseId){
        this.axios({
          method: 'post',
          url: '/tq/fin_proindex',
          data: {
            compCode:this.compCode,
            symbol:enterpriseId
          },
        })
        .then((res)=>{
          if(res.data.success) {
            this.tablefinProindex= res.data.data;
            if(res.data.data!=''){
              this.flag=true
            }else {
              this.flag=false
            }
          }
        })
        .catch(err => {
          console.log(err)
        });
    },
    // 时间过滤

    change(){
      this.basicinfo(this.value);
      this.stockchg(this.value);
      // this.debt(this.value);
      this.proindex(this.value);
    },
    // changetypeFsc(row,col,val,index) {
    //   return this.changeType[val]
    // },
    changchgrsnc(row,col,val,index) {
      return this.rADJUSTMEMO[val]
    },
  },
}
