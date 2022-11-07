import enLocale from 'element-ui/lib/locale/lang/en';

var en = {
  common: {
    zhifu: 'Payment',
    zhifufangshi: 'Payment method',
    zhifufangshiguanli: 'Payments',
    huobihuilvguanli: 'Currencies',
    xuanzeshoukuanfangshi: 'Select',
    shoukuan: 'Collection',
    jihuo: 'Activate PayPal',
    gengduo: 'More',
    yikaiqi: 'Enable',
    weikaiqi: 'Disable',
    buKeYong: 'Disabled',
    baocun: 'save',
    geRenZhangHao: 'Enterprise account',
    shangHu: 'Merchant',
    zhangHuGuanLiYe: 'Account management page',
    gunaLi: 'manage',
    fanHuiShouKuanYe: 'Return to the collection page',
    quKaiTong: 'Go to open',
    shiYongZhong: 'In use',
    bangDing: 'Bind',
    jieBang: 'Unbind',
    bangDingZhangHao: 'Bind',
    tingYong: 'Disable',
    zhangHuXinXi: 'Account',
    quXiao: 'Cancel',
    queDing: 'Confirm',
    qingShuRu: 'please enter ',
    zhangHaoXinXi: 'account information',
    gengHuanZhangHu: 'Change',
    quanXuan: 'Select All',
    tianJia: 'Add',
    pay: 'Payment',
    payMethodTitle: 'Choose payment method'
  },
  operate: {
    biTianXiang: 'Required',
    yiQuXiaoCaoZuo: 'Operation cancelled',
    caoZuoChengGong: 'Successful operation',
  },
  request: {
    error1:
      'Sorry, an error was returned in the background, and the operation was not successful',
    error2:
      'Sorry, an error was returned in the background, and the data initialization failed',
    error3:
      'The page data cannot be jumped if the initialization is not completed, please wait for the data initialization to complete',
  },
  Paypal: {
    title: 'Global business, within reach',
    desc1:
      'One click association with your PayPal account, fully meet your online collection needs, support enterprise version PayPal account',
    desc2: 'Accept paypal payment by binding PayPal merchant account',
    info1: 'Advantages:',
    info2:
      'Connect your PayPal account with one click to quickly complete account settings and automatically obtain the latest payment functions',
    info3:
      'Faster and more intelligent seamless checkout experience to improve sales conversion rate and customer loyalty',
    info4:
      'Reach 377 million active PayPal users worldwide, support more than 100 currencies, cover more than 200 markets, and unlock global sales opportunities',
    info5:
      'Eligible transactions can enjoy the protection of buyers and sellers, so that you and customers more secure transactions',
    info6: 'Does not support&nbsp;&nbsp;PayPal&nbsp;&nbsp;transactions between domestic accounts',
    ninKeYiZai: 'You can use the',
  },
  creditCard: {
    maintitle: 'Credit Card',
    title: 'Collection by activating credit card',
    desc: 'You can choose stripe, allinpay and other collection channels to accept different types of credit card payment, and only one collection channel can be activated at most',
    stripe: {
      title:
        'Accept credit card payment via <a class="link" href="https://stripe.com/" target="_blank">stripe</a>',
      desc: 'Supported credit card types will be displayed at checkout. You can manage your account on the <a class="link" href="https://stripe.com/" target="_blank">stripe</a> account management page',
      info: 'If you need to use<a href="//stripe.com/docs/apple-pay" target="_blank">Apple Pay</a>or<a href="//stripe.com/docs/payments/afterpay-clearpay" target="_blank">Afterpay</a>, please go to Stripe backstage for details and activate.'
    },
    allinpay: {
      title:
        'Accept credit card payment through <a class="link" href="https://www.allinpay.com/" target="_blank">ALLINPAY</a>',
      desc: 'Supported credit card types will be displayed at checkout. You can manage the account on the <a class="link" href="https://www.allinpay.com/" target="_blank">ALLINPAY</a> account management page',
    },
    Wintopay: {
      title:
        'Accept credit card payment through <a class="link" href="https://www.Wintopay.com/" target="_blank">Wintopay</a>',
      desc: 'Supported credit card types will be displayed at checkout. You can manage the account on the <a class="link" href="https://www.Wintopay.com/" target="_blank">Wintopay</a> account management page',
    },
    EecPay: {
      title:
        'Accept credit card payment through <a class="link" href="https://www.EecPay.com/" target="_blank">EecPay</a>',
      desc: 'Supported credit card types will be displayed at checkout. You can manage the account on the <a class="link" href="https://www.EecPay.com/" target="_blank">EecPay</a> account management page',
    },
    Cashier: {
      title:
        'Accept credit card payment through <a class="link" href="https://www.Cashier.com/" target="_blank">Cashier</a>',
      desc: 'Supported credit card types will be displayed at checkout. You can manage the account on the <a class="link" href="https://www.Cashier.com/" target="_blank">Cashier</a> account management page',
    },
    PingPong: {
      title:
        'Accept credit card payment through <a class="link" href="https://www.pingpongx.com/" target="_blank">PingPong</a>',
      desc: 'Supported credit card types will be displayed at checkout. You can manage the account on the <a class="link" href="https://www.pingpongx.com/" target="_blank">PingPong</a> account management page',
    },
    LianLianPay: {
      title:
        'Accept credit card payment through <a class="link" href="https://www.lianlianpay.com/" target="_blank">LianLianPay</a>',
      desc: 'Supported credit card types will be displayed at checkout. You can manage the account on the <a class="link" href="https://www.lianlianpay.com/" target="_blank">LianLianPay</a> account management page',
    },
    Cybersource: {
      title:
        'Accept credit card payment through <a class="link" href="https://www.Cybersource.com/" target="_blank">Cybersource</a>',
      desc: 'Supported credit card types will be displayed at checkout. You can manage the account on the <a class="link" href="https://www.Cybersource.com/" target="_blank">Cybersource</a> account management page',
    },
    payTips: 'Please select payment method first',
  },
  paymentMethod: {
    info: 'After binding the account information, you can choose to enable the credit card collection method, and you can only select one credit card collection channel at a time.',
    creditCardInfo: {
      lable: 'Credit card fees',
      linkDesc: 'Set by ALLINPAY',
    },
    payInnerTitle: 'After binding the account information, you can choose to enable the credit card collection method, and you can only choose one credit card collection channel at a time.'
  },
  payManage: {
    confirm1: 'After opening, your store will support this collection channel, and customers can checkout through this channel',
    confirm2: 'Open this payment channel',
    confirm3:
      'After closing, your store will no longer support this payment channel',
    confirm4: 'Close this payment channel',
    confirm5: 'Discard the current changes?',
    confirm6: 'The current edit content has not been saved yet, are you sure to collapse the edit box',
    paypalIsisSmartPaymentTips: 'After opening, the PayPal payment button will display the quick payment button on the product details page and shopping cart',
    paypalIsisSmartPaymentTitle1: 'Turn on this feature',
    paypalIsisSmartPaymentTitle2: 'Turn off this feature',
    paypalIsisSmartPaymentContent1: 'After opening, the PayPal payment button will be displayed on the product details page and shopping cart, providing buyers with a fast payment entry and improving payment conversion',
    paypalIsisSmartPaymentContent2: 'After closing, the PayPal payment button will not be displayed on the product details page or shopping cart, and buyers can still choose PayPal to pay on the checkout page',
  },
  otherPaymentMethod: {
    BankPlaceHolder: "Please enter the account payment information. For example\nAccount: 328 **** **** 713\nBank: China Merchants Bank Gulou Branch\nPayee: Wang Qiang",
    detail1: 'Pay other types of payment methods',
    detail2: 'Including a variety of bank transfer payment methods such as BankTransfer, WestUnion, T/T, Wise, etc., to provide consumers with more diverse payment options',
    desc1: 'Bank transfer, wire transfer.',
    desclabel2: 'WestUnion Western Union Money Transfer.',
    desclabel3: 'T/T wire transfer.',
    desclabel4: 'Wise cross-border collection.',
    desclabel5: 'XTransfer cross-border collection',
    desc2: 'Please fill in the payment information accurately so that the buyer can pay according to the information you provide after placing the order.',
    label1: 'Account payment information:',
    mainTitle: 'Other payment methods',
    isActiveTitle: 'Activated payment method',
    payInnerTitle: 'After binding the account information, select to enable the payment method, and you can choose multiple payment methods'
  },
  delivery: {
    title: 'Cash on delivery',
    formLabel1: 'Cash on delivery payment name',
    placeholder1: 'Please enter the name of the cash on delivery payment',
    formDesc1: 'When filling in information on the checkout page, it is displayed as a button for customers to choose',
    formLabel2: 'Payment instructions',
    placeholder2: 'Please enter payment instructions',
    formDesc2: 'Displayed on the payment method page, when the customer is choosing how to pay',
    formLabel3: 'Payment instructions',
    placeholder3: 'Please enter payment instructions',
    formDesc3: 'After the customer completes the order, it will be displayed on the thank you page',
  },
  localPaymentMethod: {
    mainTitle: 'Local payment',
    detail1: 'One-stop access to mainstream local payments in countries around the world',
    localInnerTitle: 'Only one localized payment service provider can be opened',
    localFormDesc1: 'Alipay',
    localFormDesc2: 'Payment methods applicable to the Chinese market',
    localFormLabel1: 'Application APPID',
    localFormLabel2: 'Application key',
    localFormLabel3: 'Alipay public key'
  },
  exchange: {
    huilvguanli: 'Currencies',
    huobimingcheng: 'Name of currency',
    huobitubiao: 'Currency icon',
    jiagefuhao: 'Price symbol',
    huilv: 'exchange rate',
    qiyong: 'Enable',
    moren: 'default',
    sheweimoren:'Set as default',
    sheiweimoren: 'Set as default',
    left_title: 'Types of credit cards accepted',
    left_button: 'Edit credit card type',
    zhangHu_info: 'How to configure account information',
    keFaBuMiShi: 'Releasable key',
    mishi: 'Key',
    miShiQianMing: 'Key signature',
    safeCode: 'Transaction security code',
    userName: 'Account number',
    gongyao: 'Public key',
    yanzhi: 'Secret',
    winToPayShangHuHao: 'ClientId',
    logingongyao: 'login public key',
    loginyanzhi: 'login key',
    pingpangCode: 'AccId',
    zhiFuShangHuHao: 'Payment merchant number',
    confirm1:
      'After deactivating this payment method, customers will not be able to check out through this payment method. Please confirm whether to disable it',
    confirm2: 'Disable this payment method',
    confirm3:
      'After changing the payment method, the customer will check out through the changed payment method, please confirm whether to change',
    confirm4: 'Change payment method',
    message1: 'Please disable before unbinding',
    confirm5:
      'After unbinding, your store will no longer support this payment method, and customers will not be able to check out through this payment method',
    confirm6: 'Unbind this collection method account',
    currency: {
      TWD: 'New Taiwan Dollar TWD',
      SGD: 'Singapore Dollar SGD',
      HKD: 'Hong Kong Dollar HKD',
      JPY: 'Japanese Yen JPY',
      EUR: 'Euro EUR',
      CAD: 'Canadian Dollar CAD',
      AUD: 'Australian Dollar AUD',
      GBP: 'British Pound GBP',
      CZK: 'Czech Koruna CZK',
      MXN: 'Mexico MXD',
      USD: 'U.S. dollar USD',
      CNY: 'Renminbi CNY',
      MYR: 'Ringgit Malaysia MYR',
      NZD: 'New Zealand NZD'
    },
  },
  ...enLocale,
};
export { en };
