import zhtwLocale from 'element-ui/lib/locale/lang/zh-TW';

const zhtw = {
  common: {
    zhifu: '支付',
    zhifufangshi: '支付方式',
    zhifufangshiguanli: '支付方式管理',
    huobihuilvguanli: '貨幣匯率管理',
    xuanzeshoukuanfangshi: '選擇收款管道',
    shoukuan: '收款',
    jihuo: '啟動 PayPal',
    gengduo: '更多',
    yikaiqi: '已開啟',
    weikaiqi: '未開啟',
    buKeYong: '不可用',
    baocun: '保存',
    geRenZhangHao: '企業賬號',
    shangHu: '商戶',
    zhangHuGuanLiYe: '帳戶管理頁',
    gunaLi: '管理',
    fanHuiShouKuanYe: '返回收款頁',
    quKaiTong: '去開通',
    shiYongZhong: '使用中',
    bangDing: '綁定',
    jieBang: '解綁',
    bangDingZhangHao: '綁定賬號',
    tingYong: '停用',
    zhangHuXinXi: '賬戶信息',
    quXiao: '取消',
    queDing: '確定',
    qingShuRu: '請輸入',
    zhangHaoXinXi: '賬號信息',
    gengHuanZhangHu: '更換賬戶',
    quanXuan: '全選',
    tianJia: '添加',
    pay: '付款',
    payMethodTitle: '選擇收款方式'
  },
  operate: {
    biTianXiang: '必填項',
    yiQuXiaoCaoZuo: '已取消操作',
    caoZuoChengGong: '操作成功',
  },
  request: {
    error1: '抱歉，後台返回了錯誤，操作未成功',
    error2: '抱歉，後台返回了錯誤，初始化數據失敗',
    error3: '頁面數據未完成初始化不能跳轉，請等待數據初始化完成',
  },
  Paypal: {
    title: '全球業務，觸手可及',
    desc1:
      '一鍵關聯您的PayPal帳戶，全方位滿足您的線上收款需求，支持企業版PayPal帳戶',
    desc2: '通過綁定PayPal商戶帳號接受PayPal付款',
    info1: '優勢：',
    info2: '一鍵關聯您的PayPal帳戶，快速完成帳戶設定，自動獲取最新的支付功能',
    info3: '更快捷、智慧的無縫結帳體驗，提升銷售轉化率及客戶忠誠度',
    info4:
      '觸達全球3.77億PayPal活躍用戶，支持100多種貨幣，覆蓋200多個市場，解鎖全球銷售機遇',
    info5: '符合條件的交易可享受買家保障和賣家保障，讓您和客戶更安心交易',
    info6: '不支持&nbsp;&nbsp;PayPal&nbsp;&nbsp;境內賬號之間進行交易',
    ninKeYiZai: '您可以在',
  },
  delivery: {
    title: '貨到付款',
    formLabel1: '貨到付款支付名稱',
    placeholder1: '請輸入貨到付款支付名稱',
    formDesc1: '顯示在結賬頁面填寫信息時，以按鈕的形式供顧客選擇',
    formLabel2: '支付說明',
    placeholder2: '請輸入支付說明',
    formDesc2: '顯示在付款方式頁面，顧客正在選擇如何支付時展示',
    formLabel3: '支付指示',
    placeholder3: '請輸入支付指示',
    formDesc3: '在顧客完成訂單後，在感謝頁面顯示',
  },
  creditCard: {
    maintitle: '信用卡收款',
    title: '通過啟動信用卡收款',
    desc: '可選擇Stripe，ALLINPAY等收款通路，接受不同類型信用卡付款，最多只能啟動一種信用卡收款通路',
    stripe: {
      title:
        '通過 <a class="link" href="https://stripe.com/" target="_blank">Stripe</a> 接受信用卡付款',
      desc: '可支持的信用卡類型將在結帳時顯示。您可以在 <a class="link" href="https://stripe.com/" target="_blank">Stripe</a> 帳戶管理頁管理帳戶',
      info: '若需使用<a href="//stripe.com/docs/apple-pay" target="_blank">Apple Pay</a>或<a href="//stripe.com/docs/payments/afterpay-clearpay" target="_blank">Afterpay</a>, 請至Stripe後台了解詳情並開通.'
    },
    allinpay: {
      title:
        '通過 <a class="link" href="https://www.allinpay.com/" target="_blank">ALLINPAY</a> 接受信用卡付款',
      desc: '可支持的信用卡類型將在結帳時顯示。您可以在 <a class="link" href="https://www.allinpay.com/" target="_blank">ALLINPAY</a> 帳戶管理頁管理帳戶',
    },
    Wintopay: {
      title:
        '通過 <a class="link" href="https://wintopay.com/" target="_blank">Wintopay</a> 接受信用卡付款',
      desc: '可支持的信用卡類型將在結帳時顯示。您可以在 <a class="link" href="https://wintopay.com/" target="_blank">Wintopay</a> 帳戶管理頁管理帳戶',
    },
    EecPay: {
      title:
        '通過 <a class="link" href="https://www.eecPay.com/" target="_blank">EecPay</a> 接受信用卡付款',
      desc: '可支持的信用卡類型將在結帳時顯示。您可以在 <a class="link" href="https://www.eecpay.com/" target="_blank">EecPay</a> 帳戶管理頁管理帳戶',
    },
    Cashier: {
      title:
        '通過 <a class="link" href="https://Cashier.com/" target="_blank">Cashier</a> 接受信用卡付款',
      desc: '可支持的信用卡類型將在結帳時顯示。您可以在 <a class="link" href="https://cashier.com/" target="_blank">cashier</a> 帳戶管理頁管理帳戶',
    },
    PingPong: {
      title:
        '通過 <a class="link" href="https://www.pingpongx.com/" target="_blank">PingPong</a> 接受信用卡付款',
      desc: '可支持的信用卡類型將在結帳時顯示。您可以在 <a class="link" href="https://www.pingpongx.com/" target="_blank">PingPong</a> 帳戶管理頁管理帳戶',
    },
    LianLianPay: {
      title:
        '通過 <a class="link" href="https://www.lianlianpay.com/" target="_blank">LianLianPay</a> 接受信用卡付款',
      desc: '可支持的信用卡類型將在結帳時顯示。您可以在 <a class="link" href="https://www.lianlianpay.com/" target="_blank">LianLianPay</a> 帳戶管理頁管理帳戶',
    },
    Cybersource: {
        title:
          '通過 <a class="link" href="https://www.Cybersource.com/" target="_blank">Cybersource</a> 接受信用卡付款',
        desc: '可支持的信用卡類型將在結帳時顯示。您可以在 <a class="link" href="https://www.Cybersource.com/" target="_blank">Cybersource</a> 帳戶管理頁管理帳戶',
      },
    payTips: '請先選擇支付方式',
  },
  paymentMethod: {
    info: '通過綁定賬號信息後選擇啟用信用卡收款方式，每次最多只能選擇一種信用卡收款渠道',
    creditCardInfo: {
      lable: '信用卡手續費',
      linkDesc: '由ALLINPAY設置',
    },
    payInnerTitle: '通過綁定賬號信息後選擇啟用信用卡收款方式，每次最多只能選擇一種信用卡收款渠道'
  },
  payManage: {
    confirm1: '開啟後您的店鋪將支持此收款渠道，顧客可通過此渠道進行結賬',
    confirm2: '打開此收款渠道',
    confirm3: '關閉後您的店鋪將不再支持此收款渠道',
    confirm4: '關閉此收款渠道',
    confirm5: '放棄當前更改內容？',
    confirm6: '當前編輯內容暫未保存，是否確定收起編輯框',
    paypalIsisSmartPaymentTips: '開啟後PayPal收款按鈕將在產品詳情頁、購物車展示快捷收款按鈕',
    paypalIsisSmartPaymentTitle1: '打開此功能',
    paypalIsisSmartPaymentTitle2: '關閉此功能',
    paypalIsisSmartPaymentContent1: '開啟後PayPal收款按鈕將在產品詳情頁、購物車展示，為買家提供快捷支付的入口，提高付費轉化',
    paypalIsisSmartPaymentContent2: '關閉後PayPal收款按鈕將不在產品詳情頁、購物車展示，買家仍能在結算頁選擇PayPal支付',
  },
  otherPaymentMethod: {
    BankPlaceHolder: "請輸入賬號付款信息例如\n賬號：328 **** **** 713\n銀行：招行銀行鼓樓支行\n收款人：王強",
    detail1: '支付其他類型的收款方式',
    detail2: '包括BankTransfer、WestUnion、T/T、Wise等多種銀行匯款支付方式，為消費者提供更多樣的支付選擇',
    desc1: '銀行轉帳，電匯。',
    desclabel2: 'WestUnion 西聯匯款。',
    desclabel3: 'T/T 電匯。',
    desclabel4: 'Wise跨境收款。',
    desclabel5: 'XTransfer跨境收款',
    desc2: '請準確填寫收款信息，方便買家下單後按照您提供的信息進行支付。',
    label1: '賬號付款信息：',
    mainTitle: '其他收款方式',
    isActiveTitle: '已激活的收款方式',
    payInnerTitle: '通過綁定賬號信息後選擇啟用收款方式，可選擇多個收款方式'
  },
  localPaymentMethod: {
    mainTitle: '本地支付',
    detail1: '一站接入全球各國主流本地支付',
    localInnerTitle: '只能開啟一個本地化支付服務商',
    localFormDesc1: '支付寶',
    localFormDesc2: '適用於中國市場的收款方式',
    localFormLabel1: '應用APPID',
    localFormLabel2: '應用密鑰',
    localFormLabel3: '支付寶公鑰'
  },
  exchange: {
    huilvguanli: '匯率管理',
    huobimingcheng: '貨幣名稱',
    huobitubiao: '貨幣圖標',
    jiagefuhao: '價格符號',
    huilv: '匯率',
    qiyong: '啟用',
    moren: '默認',
    sheiweimoren: '設為默認',
    left_title: '接受信用卡類型',
    left_button: '編輯信用卡類型',
    zhangHu_info: '如何配置賬戶信息',
    keFaBuMiShi: '可發布密匙',
    mishi: '密匙',
    miShiQianMing: '密匙簽名',
    zhiFuShangHuHao: '支付商戶號',
    safeCode: '交易安全碼',
    userName: '賬戶號',
    gongyao: '公鑰',
    yanzhi: '秘鑰',
    logingongyao: '登錄公鑰',
    loginyanzhi: '登錄秘鑰',
    pingpangCode: '商戶店鋪號',
    winToPayShangHuHao: '商戶號',
    confirm1:
      '停用此收款方式後，顧客將無法通過此收款方式進行結賬，請確認是否停用',
    confirm2: '停用此收款方式',
    confirm3:
      '更換後收款方式後，顧客將通過更換後的收款方式進行結賬，請確認是否更換',
    confirm4: '更換收款方式',
    message1: '請先停用才能解綁',
    confirm5:
      '解綁後你的店鋪將不再支持啟用此收款方式，顧客將不能通過此收款方式進行結賬',
    confirm6: '解綁此收款方式賬號',
    currency: {
      TWD: '新台幣TWD',
      SGD: '新加坡元SGD',
      HKD: '港幣HKD',
      JPY: '日元JPY',
      EUR: '歐元EUR',
      CAD: '加拿大元CAD',
      AUD: '澳大利亞元AUD',
      GBP: '英鎊GBP',
      CZK: '捷克克朗CZK',
      MXN: '墨西哥MXD',
      USD: '美元USD',
      CNY: '人民幣',
      MYR: '馬來西亞林吉特MYR',
      NZD: '新西蘭NZD'
    },
  },
  ...zhtwLocale,
};
export { zhtw };
