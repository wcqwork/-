var setWorkFaqCate = function () {
    window.keywords = {
        websiteNoOpen: ['打不开', '404'],
        facebook: ['facebook', '分享', '链接展示'],
        swiperFaq: ['幻灯片', '内容放大', 'banner', ''],
        ieBrowser: ['ie', 'TSL', 'Internet', '安全链接', '安全连接'],
        OEM: ['oem', '后台操作卡', '服务商', '宁夏', '目标群组', 'cdn', 'nginx', '机器带宽', 'host'],
        pagespeed: ['google', 'pagespeed', '速度优化', 'dns', '亚马逊', 'cdn'],
        sdmw: ['sdmw', '单域名多语种', 'x-forwarded-deploy-ip', 'nginx', '网站域名',],
        ssl: ['SSL', '不安全', '证书', '过期', 'https', ''],
        form: ['表单', '人机校验', '反垃圾', '防攻击', 'ip', '黑名单', '数据库'],
        lookLogs: ['日志', '堡垒机', '阿里云'],
        prodlist: ['产品列表', 'new', 'async', 'prodlist', '简介'],
        timeout: ['超时', '打不开', 'nginx', '服务器', 'dns', '官网'],
        disorderWeb: ['加载失败', '错乱', '防盗链', '黑名单', '阿里云', '静态资源', 'dns', '抓包'],
        uneffective: ['新功能', '不生效', '发布'],
        garbageInquiry: ['询盘', '垃圾询盘', 'amp', '验证', '404'],
        accessDenied: ['密码访问', '页面', 'cookie', '拒绝访问'],
        blockFamily: ['区块', '字体', '字体不同步'],
        awsCdn: ['cdn', '亚马逊', '日志', '数据库'],
        InquiryMail: ['询盘', '询盘提醒', '垃圾邮件', '服务配置', '阿里云', '收不到询盘'],
        selectLogin: ['登录', 'login', '账号'],
        cannotOpen: ['网站打不开', '404', '报错', '代码有问题', '全局代码'],
        pageToken: ['权限', '邮箱订阅', '表单访问', '邮件'],
        scamSite: ['诈骗网站'],
        minorLanguage: ['404', '小语种', '拒绝访问', '翻译', '后台进不去'],
        InquiryDetail: ['询盘', '询盘提醒', '邮件提醒'],
        cdnCallback: ['cdn', '亚马逊', '领动网站', '网站发开返回'],
        lambda: ['lambda', '503', 'Amacon', 'CloudFront', '请求', '日志', '鉴权'],
        emailDefense: ['防御垃圾邮件', '人机验证', '整站发布', '邮箱订阅'],
        aliPay: ['支付宝', '支付公钥', '秘钥工具', '企业账号', '开放平台'],
        dataSolw: ['智慧数据打开慢', 'ngnix', '日志'],
        dataProblems: ['智慧数据', '谷歌搜索', 'google账号', '授权', '管理第三方访问权限'],
        smartDataOut: ['智慧数据', '询盘', '单页面访问'],
        faqOother: ['页面布局错乱', '页面导航数据异常', '网站打不开', 'ga测速', '速度优化', '询盘收不到', '前后台展示不一致', '视频不能自动播放', '视频只有声音没有图像', 'mp4', '结构错误']
    }
    window.allWorkFaq = [
        {
            title: '网站无法打开', keywords: keywords.websiteNoOpen, address: 'https://doc.weixin.qq.com/doc/w2_AJgAkQaIAL8yvIqKsWPQQy6Zum4CP?scode=ADEAhgd4AAgHWGVMdw'
        },
        {
            title: 'facebook分享链接', keywords: keywords.facebook, address: 'https://doc.weixin.qq.com/doc/w3_APMAOAaoAL80y8I9xLlRPCxJO9c5k?scode=ADEAhgd4AAgC07UFP0'
        },
        {
            title: 'FAQ 幻灯片视频', keywords: keywords.swiperFaq, address: 'https://doc.weixin.qq.com/doc/w2_AKMA5AaeAMEy9N3acnMT0OacoNLgl?scode=ADEAhgd4AAgBtDw9e0'
        },
        {
            title: 'ie浏览器打开前台显示无法安全连接此页面（过期或不安全TSL）', keywords: keywords.ieBrowser, address: 'https://doc.weixin.qq.com/doc/w3_AGIAIwbqACo7rbduWMmSCOaDXVonG?scode=ADEAhgd4AAgkxrBhoH'
        },
        {
            title: 'oem服务商后台操作卡（进不去）排查和解决思路', keywords: keywords.OEM, address: 'https://doc.weixin.qq.com/doc/w3_AGIAIwbqACo7rbduWMmSCOaDXVonG?scode=ADEAhgd4AAgkxrBhoH'
        },
        {
            title: 'pagespeed评测时访问到国内服务器问题处理', keywords: keywords.pagespeed, address: 'https://doc.weixin.qq.com/doc/w3_AGIAIwbqACo7rbduWMmSCOaDXVonG?scode=ADEAhgd4AAgkxrBhoH'
        },
        {
            title: 'sdmw问题排查', keywords: keywords.sdmw, address: 'https://doc.weixin.qq.com/doc/w3_AGIAIwbqACo7rbduWMmSCOaDXVonG?scode=ADEAhgd4AAgkxrBhoH'
        },
        {
            title: 'ssl网站打开显示不安全', keywords: keywords.ssl, address: 'https://doc.weixin.qq.com/doc/w3_AGIAIwbqACo7rbduWMmSCOaDXVonG?scode=ADEAhgd4AAgkxrBhoH'
        },
        {
            title: '表单设置问题', keywords: keywords.form, address: 'https://doc.weixin.qq.com/doc/w3_AGIAIwbqACo7rbduWMmSCOaDXVonG?scode=ADEAhgd4AAgkxrBhoH'
        },
        {
            title: '查看客户网站访问日志', keywords: keywords.lookLogs, address: 'https://doc.weixin.qq.com/doc/w3_APMAOAaoAL82K7U5FRVQqqMZT052W?scode=ADEAhgd4AAgNi08ONL'
        },
        {
            title: '产品列表指定产品无法显示简介', keywords: keywords.prodlist, address: 'https://doc.weixin.qq.com/doc/w2_AOcALQYSAL8eMc5g4iJRsatPYXvv9?scode=ADEAhgd4AAgZ2c0Au5'
        },
        {
            title: '官网前后台打不开，访问超时', keywords: keywords.timeout, address: 'https://doc.weixin.qq.com/doc/w2_AOcALQYSAL8q15Wto71QQ2KRK6w8f?scode=ADEAhgd4AAgtFYCPUs'
        },
        {
            title: '后台或者网站前台打开错乱（图片和样式加载失败）', keywords: keywords.disorderWeb, address: 'https://doc.weixin.qq.com/doc/w2_AOcALQYSAL8M9CxnlSgRJSYMJO32S?scode=ADEAhgd4AAg83pcH9m'
        },
        {
            title: '开通新功能不生效', keywords: keywords.uneffective, address: 'https://doc.weixin.qq.com/doc/w2_APMAOAaoAL8qaswS736RRqIoGkx3r?scode=ADEAhgd4AAgNgxFlMd'
        },
        {
            title: '垃圾询盘处置方法', keywords: keywords.garbageInquiry, address: 'https://doc.weixin.qq.com/doc/w2_AOEA3gZ5AL8EtGvQHrcS8mxQoDih2?scode=ADEAhgd4AAgH9c34ehACUAJQbqACo'
        },
        {
            title: '前台网页设置了密码访问输入密码后不能访问页面', keywords: keywords.accessDenied, address: 'https://doc.weixin.qq.com/txdoc/word?docid=w2_AAoAugZtAMEPt0N6vz1S7mLWDkWcG&scode=ADEAhgd4AAgTIYD1ow&type=0'
        },
        {
            title: '区块富文本字体font-family设置不生效', keywords: keywords.blockFamily, address: 'https://doc.weixin.qq.com/doc/w3_ACUAJQbqACoEeRDFOhMQdqVg1NmU1?scode=ADEAhgd4AAg0Jfl6tD'
        },
        {
            title: '使用AWS Athena分析CDN访问日志', keywords: keywords.awsCdn, address: 'https://doc.weixin.qq.com/doc/w3_APMAOAaoAL8eRWLkB2rSHSjQLivUc?scode=ADEAhgd4AAgNqhFkya'
        },
        {
            title: '收不到询盘提醒检查流程', keywords: keywords.InquiryMail, address: 'https://doc.weixin.qq.com/doc/w2_AOEA3gZ5AL8Qwr0bgthRDCjsXfFRb?scode=ADEAhgd4AAgFdsq7EA'
        }
        ,
        {
            title: '授权网站管理登录名条件查询', keywords: keywords.selectLogin, address: 'https://doc.weixin.qq.com/doc/w2_AOoAZgZ8ADgbE1aVgUeTwi9zpw1iQ?scode=ADEAhgd4AAgJ002zXr'
        },
        {
            title: '网站打开404', keywords: keywords.cannotOpen, address: 'https://doc.weixin.qq.com/doc/w2_AOcALQYSAL8kOvURpvpT6KxM7Zk2b?scode=ADEAhgd4AAgjCsnhr8'
        },
        {
            title: '网站打开空白-页面访问权限-表单访问-邮件订阅', keywords: keywords.pageToken, address: 'https://doc.weixin.qq.com/doc/w2_AOcALQYSAL8I60mKPpgROu1ikOmhg?scode=ADEAhgd4AAgFLS1PHP'
        },
        {
            title: '显示为诈骗网站', keywords: keywords.scamSite, address: 'https://doc.weixin.qq.com/doc/w2_AJgAkQaIAL8ESk1iDwPTD6QchzR2a?scode=ADEAhgd4AAgkuAhZym'
        },
        {
            title: '小语种网站进入后台编辑404', keywords: keywords.minorLanguage, address: 'https://doc.weixin.qq.com/doc/w3_APMAkwZqAL8D0OXSqbfRgGPigyZKg?scode=ADEAhgd4AAgj3B1Ett'
        },
        {
            title: '询盘提醒细则', keywords: keywords.InquiryDetail, address: 'https://doc.weixin.qq.com/doc/w3_AOEA3gZ5AL8L2A1vRoWQCW3r1dJRq?scode=ADEAhgd4AAgYOIkpoN'
        },
        {
            title: '亚马逊cdn网站打开返回的不是领动网站', keywords: keywords.cdnCallback, address: 'https://doc.weixin.qq.com/doc/w3_AOcALQYSAL8L01IUOFZR802lKqPds?scode=ADEAhgd4AAg0oFBe1GACUAJQbqACo'
        },
        {
            title: '亚马逊Lambda报错排查流程（以下载附件503为例）', keywords: keywords.lambda, address: 'https://doc.weixin.qq.com/doc/w3_APMAOAaoAL8YUqoJ59CR0a3ltnAiP?scode=ADEAhgd4AAgSAO0rEk'
        },
        {
            title: '邮件订阅垃圾数据防御', keywords: keywords.emailDefense, address: 'https://doc.weixin.qq.com/doc/w3_AOEA3gZ5AL86fzbBu92RnKMgMJY1r?scode=ADEAhgd4AAgg15G1Sj'
        },
        {
            title: '支付宝获取支付公钥和系统公钥的步骤', keywords: keywords.aliPay, address: 'https://doc.weixin.qq.com/doc/w3_APgAVwZAACEVPQYs28YQ1aA3nzF71?scode=ADEAhgd4AAgkqVgFTO'
        },
        {
            title: '智慧数据案例网站打开慢', keywords: keywords.dataSolw, address: 'https://doc.weixin.qq.com/doc/w3_APMAOAaoAL8x9IXoMYkRpGA22sSvs?scode=ADEAhgd4AAg8eGzkHp'
        },
        {
            title: '智慧数据谷歌搜索授权后一直都没有数据问题', keywords: keywords.dataProblems, address: 'https://doc.weixin.qq.com/doc/w2_APMAkwZqAL8360jgInGS1uRzebH1y?scode=ADEAhgd4AAgTK3vJ0r'
        },
        {
            title: '智慧数据页面访问时长逻辑', keywords: keywords.smartDataOut, address: 'https://doc.weixin.qq.com/doc/w2_APMAOAaoAL8PyH7791cQiiq6p9821?scode=ADEAhgd4AAgAIUPvfx'
        },
        {
            title: 'FAQ工单记录', keywords: keywords.faqOother, address: 'https://doc.weixin.qq.com/doc/w2_ACcAYwYZAMAQatNnKO3TJ6Kub4ukN?scode=ADEAhgd4AAgYJlkz8l'
        }
    ]
}



var script = document.createElement("script");
script.innerHTML = `
window.setWorkFaqCate = ${setWorkFaqCate};
window.setWorkFaqCate();
`
document.head.appendChild(script)