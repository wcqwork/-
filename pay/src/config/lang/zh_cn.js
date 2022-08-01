import zhcnLocale from 'element-ui/lib/locale/lang/zh-CN';

const zhcn = {
  common: {
    zhifu: '支付',
    zhifufangshi: '支付方式',
    zhifufangshiguanli: '支付方式管理',
    huobihuilvguanli: '货币汇率管理',
    xuanzeshoukuanfangshi: '选择收款方式',
    shoukuan: '收款',
    jihuo: '激活 PayPal',
    gengduo: '更多',
    yikaiqi: '已开启',
    weikaiqi: '未开启',
    buKeYong: '不可用',
    baocun: '保存',
    geRenZhangHao: '企业账号',
    shangHu: '商户',
    zhangHuGuanLiYe: '账户管理页',
    gunaLi: '管理',
    fanHuiShouKuanYe: '返回收款页',
    quKaiTong: '去开通',
    shiYongZhong: '使用中',
    bangDing: '绑定',
    jieBang: '解绑',
    bangDingZhangHao: '绑定账号',
    tingYong: '停用',
    zhangHuXinXi: '账户信息',
    quXiao: '取消',
    queDing: '确定',
    qingShuRu: '请输入',
    zhangHaoXinXi: '账号信息',
    gengHuanZhangHu: '更换账户',
    quanXuan: '全选',
    tianJia: '添加',
    pay: '付款',
    payMethodTitle: '选择收款方式'
  },
  operate: {
    biTianXiang: '必填项',
    yiQuXiaoCaoZuo: '已取消操作',
    caoZuoChengGong: '操作成功',
  },
  request: {
    error1: '抱歉，后台返回了错误，操作未成功',
    error2: '抱歉，后台返回了错误，初始化数据失败',
    error3: '页面数据未完成初始化不能跳转，请等待数据初始化完成',
  },
  Paypal: {
    title: '全球业务，触手可及',
    desc1:
      '一键关联您的PayPal账户，全方位满足您的在线收款需求，支持企业版PayPal账户',
    desc2: '通过绑定PayPal商户账号接受PayPal付款',
    info1: '优势：',
    info2: '一键关联您的PayPal账户，快速完成账户设置，自动获取最新的支付功能',
    info3: '更快捷、智能的无缝结账体验，提升销售转化率及客户忠诚度',
    info4:
      '触达全球3.77亿PayPal活跃用户，支持100多种货币，覆盖200多个市场，解锁全球销售机遇',
    info5: '符合条件的交易可享受买家保障和卖家保障，让您和客户更安心交易',
    info6: '不支持&nbsp;&nbsp;PayPal&nbsp;&nbsp;境内账号之间进行交易',
    ninKeYiZai: '您可以在',
  },
  delivery: {
    title: '货到付款',
    formLabel1: '货到付款支付名称',
    placeholder1: '请输入货到付款支付名称',
    formDesc1: '显示在结账页面填写信息时，以按钮的形式供顾客选择',
    formLabel2: '支付说明',
    placeholder2: '请输入支付说明',
    formDesc2: '显示在付款方式页面，顾客正在选择如何支付时展示',
    formLabel3: '支付指示',
    placeholder3: '请输入支付指示',
    formDesc3: '在顾客完成订单后，在感谢页面显示',
  },
  creditCard: {
    maintitle: '信用卡收款',
    title: '通过激活信用卡收款',
    desc: '可选择Stripe，ALLINPAY等收款渠道，接受不同类型信用卡付款，最多只能激活一种信用卡收款渠道',
    stripe: {
      title:
        '通过 <a class="link" href="https://stripe.com/" target="_blank">Stripe</a> 接受信用卡付款',
      desc: '可支持的信用卡类型将在结账时显示。您可以在 <a class="link" href="https://stripe.com/" target="_blank">Stripe</a> 账户管理页管理账户',
      info: '若需使用<a href="//stripe.com/docs/apple-pay" target="_blank">Apple Pay</a>或<a href="//stripe.com/docs/payments/afterpay-clearpay" target="_blank">Afterpay</a>, 请至Stripe后台了解详情并开通。'
    },
    allinpay: {
      title:
        '通过 <a class="link" href="https://www.allinpay.com/" target="_blank">ALLINPAY</a> 接受信用卡付款',
      desc: '可支持的信用卡类型将在结账时显示。您可以在 <a class="link" href="https://www.allinpay.com/" target="_blank">ALLINPAY</a> 账户管理页管理账户',
    },
    Wintopay: {
      title:
        '通过 <a class="link" href="https://www.Wintopay.com/" target="_blank">Wintopay</a> 接受信用卡付款',
      desc: '可支持的信用卡类型将在结账时显示。您可以在 <a class="link" href="https://www.Wintopay.com/" target="_blank">Wintopay</a> 账户管理页管理账户',
    },
    EecPay: {
      title:
        '通过 <a class="link" href="https://www.EecPay.com/" target="_blank">EecPay</a> 接受信用卡付款',
      desc: '可支持的信用卡类型将在结账时显示。您可以在 <a class="link" href="https://www.EecPay.com/" target="_blank">EecPay</a> 账户管理页管理账户',
    },
    Cashier: {
      title:
        '通过 <a class="link" href="https://www.Cashier.com/" target="_blank">Cashier</a> 接受信用卡付款',
      desc: '可支持的信用卡类型将在结账时显示。您可以在 <a class="link" href="https://www.Cashier.com/" target="_blank">Cashier</a> 账户管理页管理账户',
    },
    PingPong: {
      title:
        '通过 <a class="link" href="https://www.pingpongx.com/zh" target="_blank">PingPong</a> 接受信用卡付款',
      desc: '可支持的信用卡类型将在结账时显示。您可以在 <a class="link" href="https://www.pingpongx.com/zh" target="_blank">PingPong</a> 账户管理页管理账户',
    },
    LianLianPay: {
      title:
        '通过 <a class="link" href="https://www.lianlianpay.com/" target="_blank">LianLianPay</a> 接受信用卡付款',
      desc: '可支持的信用卡类型将在结账时显示。您可以在 <a class="link" href="https://www.lianlianpay.com/" target="_blank">LianLianPay</a> 账户管理页管理账户',
    },
    Oceanpayment: {
      title:
        '通过 <a class="link" href="https://www.Oceanpayment.com/" target="_blank">Oceanpayment</a> 接受信用卡付款',
      desc: '可支持的信用卡类型将在结账时显示。您可以在 <a class="link" href="https://www.Oceanpayment.com/" target="_blank">Oceanpayment</a> 账户管理页管理账户',
    },
    Cybersource: {
        title:
          '通过 <a class="link" href="https://www.Cybersource.com/" target="_blank">Cybersource</a> 接受信用卡付款',
        desc: '可支持的信用卡类型将在结账时显示。您可以在 <a class="link" href="https://www.Cybersource.com/" target="_blank">Cybersource</a> 账户管理页管理账户',
      },
    payTips: '请先选择支付方式',
  },
  paymentMethod: {
    info: '通过绑定账号信息后选择启用信用卡收款方式，每次最多只能选择一种信用卡收款渠道',
    creditCardInfo: {
      lable: '信用卡手续费',
      linkDesc: '由ALLINPAY设置',
    },
    payInnerTitle: '通过绑定账号信息后选择启用信用卡收款方式，每次最多只能选择一种信用卡收款渠道'
  },
  payManage: {
    confirm1: '开启后您的店铺将支持此收款渠道，顾客可通过此渠道进行结账',
    confirm2: '打开此收款渠道',
    confirm3: '关闭后您的店铺将不再支持此收款渠道',
    confirm4: '关闭此收款渠道',
    confirm5: '放弃当前更改内容？',
    confirm6: '当前编辑内容暂未保存，是否确定收起编辑框',
    paypalIsisSmartPaymentTips: '开启后PayPal收款按钮将在产品详情页、购物车展示快捷收款按钮',
    paypalIsisSmartPaymentTitle1: '打开此功能',
    paypalIsisSmartPaymentTitle2: '关闭此功能',
    paypalIsisSmartPaymentContent1: '开启后PayPal收款按钮将在产品详情页、购物车展示，为买家提供快捷支付的入口，提高付费转化',
    paypalIsisSmartPaymentContent2: '关闭后PayPal收款按钮将不在产品详情页、购物车展示，买家仍能在结算页选择PayPal支付',
  },
  otherPaymentMethod: {
    BankPlaceHolder: "请输入账号付款信息例如\n账号：328 **** **** 713\n银行：招行银行鼓楼支行\n收款人：王强",
    detail1: '支付其他类型的收款方式',
    detail2: '包括BankTransfer、WestUnion、T/T、Wise等多种银行汇款支付方式，为消费者提供更多样的支付选择',
    desc1: '银行转帐，电汇。',
    desclabel2: 'WestUnion 西联汇款。',
    desclabel3: 'T/T 电汇。',
    desclabel4: 'Wise跨境收款。',
    desclabel5: 'XTransfer跨境收款',
    desc2: '请准确填写收款信息，方便买家下单后按照您提供的信息进行支付。',
    label1: '账号付款信息：',
    mainTitle: '其他收款方式',
    isActiveTitle: '已激活的收款方式',
    payInnerTitle: '通过绑定账号信息后选择启用收款方式，可选择多个收款方式'
  },
  localPaymentMethod: {
    mainTitle: '本地支付',
    detail1: '一站接入全球各国主流本地支付',
    localInnerTitle: '只能开启一个本地化支付服务商',
    localFormDesc1: '支付宝',
    localFormDesc2: '适用于中国市场的收款方式',
    localFormLabel1: '应用APPID',
    localFormLabel2: '应用密钥',
    localFormLabel3: '支付宝公钥'
  },
  exchange: {
    huilvguanli: '汇率管理',
    huobimingcheng: '货币名称',
    huobitubiao: '货币图标',
    jiagefuhao: '价格符号',
    huilv: '汇率',
    qiyong: '启用',
    moren: '默认',
    sheweimoren: '设为默认',
    left_title: '接受信用卡类型',
    left_button: '编辑信用卡类型',
    zhangHu_info: '如何配置账户信息',
    keFaBuMiShi: '可发布密匙',
    mishi: '密匙',
    miShiQianMing: '密匙签名',
    zhiFuShangHuHao: '支付商户号',
    winToPayShangHuHao: '商户号',
    winToPayZhongDuanHao: '终端号',
    safeCode: '交易安全码',
    userName: '账户号',
    gongyao: '公钥',
    yanzhi: '秘钥',
    logingongyao: '登录公钥',
    loginyanzhi: '登录秘钥',
    pingpangCode: '商户店铺号',
    confirm1:
      '停用此收款方式后，顾客将无法通过此收款方式进行结账，请确认是否停用',
    confirm2: '停用此收款方式',
    confirm3:
      '更换后收款方式后，顾客将通过更换后的收款方式进行结账，请确认是否更换',
    confirm4: '更换收款方式',
    message1: '请先停用才能解绑',
    confirm5:
      '解绑后你的店铺将不再支持启用此收款方式，顾客将不能通过此收款方式进行结账',
    confirm6: '解绑此收款方式账号',
    currency: {
      TWD: '新台币TWD',
      SGD: '新加坡元SGD',
      HKD: '港币HKD',
      JPY: '日元JPY',
      EUR: '欧元EUR',
      CAD: '加拿大元CAD',
      AUD: '澳大利亚元AUD',
      GBP: '英镑GBP',
      CZK: '捷克克朗CZK',
      MXN: '墨西哥MXD',
      USD: '美元USD',
      CNY: '人民币CNY',
      MYR: '马来西亚林吉特MYR',
      NZD: '新西兰NZD'
    },
  },
  ...zhcnLocale,
};
export { zhcn };
