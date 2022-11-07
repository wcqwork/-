import viLocale from 'element-ui/lib/locale/lang/vi';

const vi = {
  common: {
    zhifu: 'tiền',
    zhifufangshi: 'Phương pháp thanh toán',
    zhifufangshiguanli: 'Quản lý phương pháp',
    huobihuilvguanli: 'Quản lý tiền tệ',
    xuanzeshoukuanfangshi: 'Chọn phương pháp thu thập',
    shoukuan: 'Bộ',
    jihuo: 'Kích hoạt PayPal',
    gengduo: 'thêm',
    yikaiqi: 'Quay lại',
    weikaiqi: 'Chưa mở',
    buKeYong: 'Không có',
    baocun: 'bảo:',
    geRenZhangHao: 'Tài khoản doanh nghiệp',
    shangHu: 'Thương',
    zhangHuGuanLiYe: 'Trang quản lý tài khoản',
    gunaLi: 'Chính:',
    fanHuiShouKuanYe: 'Quay lại trang bộ sưu tập',
    quKaiTong: 'Đi đến mở',
    shiYongZhong: 'Sử dụng',
    bangDing: 'Trói buộc',
    jieBang: 'Cởi trói',
    bangDingZhangHao: 'Tài khoản ràng buộc',
    tingYong: 'Hủy kích hoạt',
    zhangHuXinXi: 'thông tin tài khoản',
    quXiao: 'hủy bỏ',
    queDing: 'mục đích',
    qingShuRu: 'vui lòng nhập ',
    zhangHaoXinXi: 'thông tin tài khoản',
    gengHuanZhangHu: 'Thay đổi tài khoản',
    quanXuan: 'chọn tất cả',
    tianJia: 'Thêm vào',
    pay: 'Thanh toán',
    payMethodTitle: 'Lựa chọn hình thức thanh toán'
  },
  operate: {
    biTianXiang: 'Cần thiết',
    yiQuXiaoCaoZuo: 'Đã hủy hoạt động',
    caoZuoChengGong: 'Hoạt động thành công',
  },
  request: {
    error1: 'Xin lỗi, đã xảy ra lỗi trong nền và thao tác không thành công',
    error2:
      'Xin lỗi, đã xảy ra lỗi trong nền và khởi tạo dữ liệu không thành công',
    error3:
      'Dữ liệu trang không thể được nhảy nếu quá trình khởi tạo chưa hoàn tất, vui lòng đợi quá trình khởi tạo dữ liệu hoàn tất',
  },
  Paypal: {
    title: 'Công việc toàn cầu, trong tầm tay',
    desc1:
      'Liên kết với tài khoản PayPal, đáp ứng đầy đủ nhu cầu bộ sưu tập online, hỗ trợ phiên bản kinh doanh PayPal',
    desc2: 'Chấp nhận tiền công bằng khoản thương gia PayPal',
    info1: 'Lợi:',
    info2:
      'Kết nối tài khoản PayPal với một cú nhấp chuột để thiết lập tài khoản nhanh chóng và tự động kiếm những chức năng thanh to án mới nhất',
    info3:
      'Tốc độ kiểm tra nhanh hơn và thông minh hơn để cải thiện tỷ lệ chuyển hóa và lòng trung thành của khách hàng',
    info4:
      'Giá 37 triệu người dùng PayPal khắp thế giới,Nhiều hơn trăm tiền tệ, bao gồm hơn 200, mở rộng cơ hội bán hàng toàn cầu.',
    info5:
      'Dễ nhận giao dịch có thể được bảo vệ bởi người mua và người bán, để anh và khách hàng có thể giao dịch an toàn hơn.',
    info6: 'Không hỗ trợ&nbsp;&nbsp;PayPal&nbsp;&nbsp;giao dịch giữa các tài khoản trong nước',
    ninKeYiZai: 'Anh có thể dùng',
  },
  delivery: {
    title: 'Thanh toán khi giao hàng',
    formLabel1: 'Tên thanh toán khi nhận hàng',
    placeholder1: 'Vui lòng nhập tên của khoản thanh toán tiền mặt khi giao hàng',
    formDesc1: 'Khi điền thông tin vào trang thanh toán sẽ hiển thị dưới dạng nút để khách hàng lựa chọn',
    formLabel2: 'Hướng dẫn thanh toán',
    placeholder2: 'Vui lòng nhập hướng dẫn thanh toán',
    formDesc2: 'Được hiển thị trên trang phương thức thanh toán, khi khách hàng đang chọn cách thanh toán',
    formLabel3: 'Hướng dẫn thanh toán',
    placeholder3: 'Vui lòng nhập hướng dẫn thanh toán',
    formDesc3: 'Sau khi khách hàng hoàn tất đơn hàng sẽ hiển thị trên trang cảm ơn',
  },
  creditCard: {
    maintitle: 'Thẻ tín dụng',
    title: 'Bộ sưu tập bằng cách kích hoạt thẻ tín dụng',
    desc: 'Bạn có thể chọn kênh sọc, allinpay và các kênh khác để chấp nhận các loại thanh to án thẻ tín dụng khác nhau, và chỉ một kênh thu thập có thể được kích hoạt tối đa.',
    stripe: {
      title: 'Chấp nhận thẻ tín dụng qua đường sọc',
      desc: 'Các kiểu thẻ tín dụng được hỗ trợ sẽ được hiển thị sau khi ra ngoài.Bạn có thể quản lý tài khoản sọc trên trang quản lý tài khoản',
      info: 'Nếu bạn cần sử dụng<a href="//stripe.com/docs/apple-pay" target="_blank">Apple Pay</a>hoặc<a href="//stripe.com/docs/payments/afterpay-clearpay" target="_blank">Afterpay</a>, vui lòng truy cập Stripe ở hậu trường để biết chi tiết và kích hoạt.'
    },
    allinpay: {
      title:
        'Chấp nhận thẻ tín dụng qua <a class="link" href="https://www.allinpay.com/" target="_blank">ALLINPAY</a>',
      desc: 'Các kiểu thẻ tín dụng được hỗ trợ sẽ được hiển thị sau khi ra ngoài.Bạn có thể quản lý tài khoản trong trang quản lý tài khoản <a class="link" href="https://www.allinpay.com/" target="_blank">ALLINPAY</a>',
    },
    Wintopay: {
      title:
        'Chấp nhận thẻ tín dụng qua <a class="link" href="https://www.Wintopay.com/" target="_blank">Wintopay</a>',
      desc: 'Các kiểu thẻ tín dụng được hỗ trợ sẽ được hiển thị sau khi ra ngoài.Bạn có thể quản lý tài khoản trong trang quản lý tài khoản <a class="link" href="https://www.Wintopay.com/" target="_blank">Wintopay</a>',
    },
    EecPay: {
      title:
        'Chấp nhận thẻ tín dụng qua <a class="link" href="https://www.EecPay.com/" target="_blank">EecPay</a>',
      desc: 'Các kiểu thẻ tín dụng được hỗ trợ sẽ được hiển thị sau khi ra ngoài.Bạn có thể quản lý tài khoản trong trang quản lý tài khoản <a class="link" href="https://www.EecPay.com/" target="_blank">EecPay</a>',
    },
    Cashier: {
      title:
        'Chấp nhận thẻ tín dụng qua <a class="link" href="https://www.Cashier.com/" target="_blank">Cashier</a>',
      desc: 'Các kiểu thẻ tín dụng được hỗ trợ sẽ được hiển thị sau khi ra ngoài.Bạn có thể quản lý tài khoản trong trang quản lý tài khoản <a class="link" href="https://www.Cashier.com/" target="_blank">Cashier</a>',
    },
    PingPong: {
      title:
        'Chấp nhận thẻ tín dụng qua <a class="link" href="https://www.pingpongx.com/" target="_blank">PingPong</a>',
      desc: 'Các kiểu thẻ tín dụng được hỗ trợ sẽ được hiển thị sau khi ra ngoài.Bạn có thể quản lý tài khoản trong trang quản lý tài khoản <a class="link" href="https://www.pingpongx.com/" target="_blank">PingPong</a>',
    },
    LianLianPay: {
      title:
        'Chấp nhận thẻ tín dụng qua <a class="link" href="https://www.lianlianpay.com/" target="_blank">LianLianPay</a>',
      desc: 'Các kiểu thẻ tín dụng được hỗ trợ sẽ được hiển thị sau khi ra ngoài.Bạn có thể quản lý tài khoản trong trang quản lý tài khoản <a class="link" href="https://www.lianlianpay.com/" target="_blank">LianLianPay</a>',
    },
    Cybersource: {
      title:
        'Chấp nhận thẻ tín dụng qua <a class="link" href="https://www.Cybersource.com/" target="_blank">Cybersource</a>',
      desc: 'Các kiểu thẻ tín dụng được hỗ trợ sẽ được hiển thị sau khi ra ngoài.Bạn có thể quản lý tài khoản trong trang quản lý tài khoản <a class="link" href="https://www.Cybersource.com/" target="_blank">Cybersource</a>',
    },
    payTips: 'Vui lòng chọn phương thức thanh toán trước',
  },
  paymentMethod: {
    info: 'Sau khi ràng buộc thông tin tài khoản, bạn có thể chọn bật phương thức thu thập thẻ tín dụng và bạn chỉ có thể chọn một kênh thu thập thẻ tín dụng tại một thời điểm.',
    creditCardInfo: {
      lable: 'Phí thẻ tín dụng',
      linkDesc: 'Đặt bởi ALLINPAY',
    },
    payInnerTitle: 'Sau khi ràng buộc thông tin tài khoản, bạn có thể chọn bật phương thức thu thập thẻ tín dụng và bạn chỉ có thể chọn một kênh thu thập thẻ tín dụng tại một thời điểm.'
  },
  payManage: {
    confirm1: 'Sau khi khai trương, cửa hàng của bạn sẽ hỗ trợ kênh thu tiền này và khách hàng có thể thanh toán qua kênh này',
    confirm2: 'Mở kênh thanh toán này',
    confirm3:
      'Sau khi đóng cửa, cửa hàng của bạn sẽ không hỗ trợ kênh thanh toán này nữa',
    confirm4: 'Đóng kênh thanh toán này',
    confirm5: 'Hủy các thay đổi hiện tại?',
    confirm6: 'Nội dung chỉnh sửa hiện tại vẫn chưa được lưu, bạn có chắc chắn sẽ thu gọn hộp chỉnh sửa',
    paypalIsisSmartPaymentTips: 'Sau khi mở, nút thanh toán PayPal sẽ hiển thị nút thanh toán nhanh trên trang chi tiết sản phẩm và giỏ hàng',
    paypalIsisSmartPaymentTitle1: 'Bật tính năng này',
    paypalIsisSmartPaymentTitle2: 'Tắt tính năng này',
    paypalIsisSmartPaymentContent1: 'Sau khi mở, nút thanh toán PayPal sẽ được hiển thị trên trang chi tiết sản phẩm và giỏ hàng, cung cấp cho người mua một mục thanh toán nhanh chóng và cải thiện chuyển đổi thanh toán',
    paypalIsisSmartPaymentContent2: 'Sau khi đóng, nút thanh toán PayPal sẽ không hiển thị trên trang chi tiết sản phẩm hoặc giỏ hàng, người mua vẫn có thể chọn PayPal để thanh toán trên trang thanh toán',
  },
  otherPaymentMethod: {
    BankPlaceHolder: "Vui lòng nhập thông tin thanh toán tài khoản. Ví dụ \nTài khoản: 328 **** **** 713 \n Ngân hàng: Chi nhánh Gulou của Ngân hàng Thương gia Trung Quốc \n Người nhận thanh toán: Wang",
    detail1: 'Thanh toán các loại phương thức thanh toán khác',
    detail2: 'Bao gồm một loạt các phương thức thanh toán chuyển khoản ngân hàng như BankTransfer, WestUnion, T / T, Wise, vv, để cung cấp cho người tiêu dùng với các tùy chọn thanh toán đa dạng hơn',
    desc1: 'Chuyển khoản ngân hàng, chuyển khoản.',
    desclabel2: 'WestUnion Công đoàn phương Tây.',
    desclabel3: 'TT chuyển khoản.',
    desclabel4: 'Wise Bộ sưu tập xuyên biên giới.',
    desclabel5: 'Bộ sưu tập xuyên biên giới XTransfer',
    desc2: 'Quý khách vui lòng điền chính xác thông tin thanh toán để người mua có thể thanh toán theo thông tin Quý khách cung cấp sau khi đặt hàng.',
    label1: 'Thông tin thanh toán tài khoản:',
    mainTitle: 'phương thức thanh toán khác',
    isActiveTitle: 'Phương thức thanh toán đã kích hoạt',
    payInnerTitle: 'Sau khi ràng buộc thông tin tài khoản, hãy chọn bật phương thức thanh toán và bạn có thể chọn nhiều phương thức thanh toán'
  },
  localPaymentMethod: {
    mainTitle: 'Thanh toán địa phương',
    detail1: 'Truy cập một cửa vào thanh toán địa phương chính thống ở các quốc gia trên thế giới',
    localInnerTitle: 'Chỉ có thể mở một nhà cung cấp dịch vụ thanh toán được bản địa hóa',
    localFormDesc1: 'Alipay',
    localFormDesc2: 'Phương thức thanh toán áp dụng cho thị trường Trung Quốc',
    localFormLabel1: 'APPID ứng dụng',
    localFormLabel2: 'Khóa ứng dụng',
    localFormLabel3: 'Khóa công khai Alipay'
  },
  exchange: {
    huilvguanli: 'Tiền tệ',
    huobimingcheng: 'Tên tiền tệ',
    huobitubiao: 'Biểu tượng tiền tệ',
    jiagefuhao: 'Biểu tượng giá cả',
    huilv: 'trao đổi',
    qiyong: 'Bật',
    moren: 'mặc định',
    sheiweimoren: 'Đặt là mặc định',
    left_title: 'Các loại thẻ tín dụng được chấp nhận',
    left_button: 'Chỉnh sửa loại thẻ tín dụng',
    zhangHu_info: 'Cách định cấu hình thông tin tài khoản',
    keFaBuMiShi: 'Khóa có thể xuất bản',
    safeCode: 'Mã bảo mật giao dịch',
    userName: 'Số tài khoản',
    gongyao: 'Khóa công khai',
    logingongyao: 'đăng nhập khóa công khai',
    loginyanzhi: 'khóa đăng nhập',
    yanzhi: 'Chìa khóa bí mật',
    pingpangCode: 'Số hiệu thương mại',
    winToPayShangHuHao: 'Thương nhân',
    mishi: 'Chìa khóa',
    miShiQianMing: 'Chữ ký chính',
    zhiFuShangHuHao: 'Số người bán thanh toán',
    confirm1:
      'Sau khi hủy kích hoạt phương thức thanh toán này, khách hàng sẽ không thể thanh toán qua phương thức thanh toán này. Vui lòng xác nhận xem có tắt nó hay không',
    confirm2: 'Tắt phương thức thanh toán này',
    confirm3:
      'Sau khi thay đổi phương thức thanh toán, khách hàng sẽ kiểm tra qua phương thức thanh toán đã thay đổi, vui lòng xác nhận xem có thay đổi hay không',
    confirm4: 'Thay đổi phương pháp thanh toán',
    message1: 'Vui lòng vô hiệu hóa nó trước khi hủy liên kết',
    confirm5:
      'Sau khi hủy liên kết, cửa hàng của bạn sẽ không hỗ trợ phương thức thanh toán này nữa và khách hàng sẽ không thể thanh toán qua phương thức thanh toán này',
    confirm6: 'Hủy liên kết tài khoản phương thức thu tiền này',
    currency: {
      TWD: 'TWD đô la Đài Loan mới',
      SGD: 'Đô la Singapore SGD',
      HKD: 'Đô la Hồng Kông HKD',
      JPY: 'Yên Nhật JPY',
      EUR: 'Euro EUR',
      CAD: 'Đô la Canada CAD',
      AUD: 'Đô la Úc AUD',
      GBP: 'Bảng Anh GBP',
      CZK: 'Koruna Séc CZK',
      MXN: 'Mexico MXD',
      USD: 'Đô la Mỹ USD',
      CNY: 'RMB CNY',
      MYR: 'Ringgit Malaysia MYR',
      NZD: 'New Zealand NZD'
    },
  },
  ...viLocale,
};
export { vi };
