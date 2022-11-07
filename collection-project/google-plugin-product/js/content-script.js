/**
 * content_scripts里更改标签页面的js，插件js不能操作打开标签页的dom
 * */
(function () {
	chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
		if (request === "getPrdoDetailJson") {
			if ($(document).find("#pro-crawl-btn").length == 0) {
				var msgTpl = '<p class="text">' + i18nObj[lang].no_crawl + '</p>';
				backFn.tipsAlert(msgTpl);
			} else {
				$(document).find("#pro-crawl-btn").click();
			}
		}
	});

	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i].trim();
			if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
		}
		return "";
	}

	function scrollToBottom(callback) {
		debugger
		(function smoothscroll() {
			const currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // 已经被卷掉的高度
			const clientHeight = document.documentElement.clientHeight; // 浏览器高度
			const scrollHeight = document.documentElement.scrollHeight; // 总高度
			if (scrollHeight - 10 > currentScroll + clientHeight) {
				window.requestAnimationFrame(smoothscroll);
				var timer = setTimeout(() => {
					window.scrollTo(currentScroll, currentScroll + 1000);
				}, 500);
			} else {
				setTimeout(timer);
				callback(true);
			}
		})();
	}

	// var Authorization = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbkluZm8iOiJna29tS0JiNDRiejMxdjZoUnppU2xpa25TUjdmMTdBWlhXWFc2MXg0Zzg1N1JRM2hXVnpkeHczNDVlNGZWMWdXYjRBWnJtcnBTUlJualNyalJqclNTUnpkeHczNFJlaVNwIiwiZXhwIjoxNjI5NzI3OTY3fQ.0oOjkE9QNjM6k6u095uLxVsrJsfdYapoO4Z9QqP8Ekk";
	var Authorization = "";
	if (getCookie("Authorization")) {
		Authorization = getCookie("Authorization");
	}


	chrome.runtime.sendMessage({
		type: 'setUser',
		params: {
			Authorization: Authorization
		}
	}, function (response) {
		if (response.data.Authorization) {
			Authorization = response.data.Authorization
		}
	})
	chrome.runtime.sendMessage({
		type: 'crawlStatus',
		params: {
			type: ""
		}
	})

	// var lang = window.navigator.language === 'zh-CN' ? 'zh-CN' : 'en-US';
	var lang = "zh-CN";
	// 需要抓取的产品信息
	var prodDetailData = {
		"prodName": "", // 产品名称
		"prodPrice": "", // 产品原价（保留两位小数）
		"prodPriceMax": "", // 产品最大原价（保留两位小数）
		"prodDiscountPrice": "", // 产品售价（保留两位小数） 必填
		"prodDiscountPriceMax": "", // 产品最大售价（保留两位小数）
		"stock": "", // 产品库存
		"originType": "", // 来源网站类型
		"originUrl": "", // 来源URL
		"productPicUrl": "", // 主图URL
		"skuNum": "0",
		"prodText": {
			"prodBrief": "", // 产品简介
			"prodDesc": "", // 产品描述
			"prodKeyword": [], // 产品关键词
			"prodPicList": [] // 产品图片
		},
		"skuInfo": {
			"skuOption": [],
			"skuValues": []
		}
	}
	var loginUrl = "https://www.leadongshop.com/login.html?redirectUrl=multi"; //登录链接
	var i18nObj = {
		'zh-CN': {
			"sku_owner": "领售·产品搬家",
			"connected": "信号连接正常，立即体验商品抓取",
			"add_to_sku_owner": "立即抓取",
			"added": "已添加",
			"add_failed": "添加失败",
			"please_retry": "请重试",
			"failed_and_retry": "抓取失败，请重试",
			"not_login": "尚未登录，登录后即可抓取 ",
			"repetition_crawl": "当前产品已经收集, 请更换其他产品进行操作",
			"login_error": "登录校验失败，请重新登录 ",
			"no_crawl": "当前不存在可抓取的产品",
			"login": "去登录",
			"adding": "抓取中..."
		}
	}
	var svgIcon = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 72 72" enable-background="new 0 0 72 72" xml:space="preserve">  <image id="image0" width="72" height="72" x="0" y="0" href="data:image/png;base64,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XJ/A+W/jMb6sPe14qA2Bgw+2CqdpQF623dkakmNgfzM40950LA4Bnr0LljV+57T0E7hc6ZawqoDs8ll+O5K7f17Bf5XtJd9yxWtwau0NLC76xKnY/4hHS3z5XNfZqmlATm7RclrCWT0PhIB/fAcrv/RQAEmZ4McFWcAYvCj+QovSgd4r2/kUQUU6zxIVJMLHS9zijB0CR14BjQLLtsGfOgHn0b+1Ym4IjmsRwoCUXgXU4AXHvJt8O8uj+o+zHXD2nnDCiQxqHQ6AyQJSwtbv24DjEIMC7KG3S1EC5Hv2O98S7/jbvIuU1sA7+93hDG800zYdgrv/o104INmjoPH7zHHRRy+WH6Z6VGsViO7n+L+gwjXs5W2QvNS1W+W8AU9PcTzvP90OHJBo+ExxXBEjdvc0g1bFHAC5nkcAmwpnG91AnlbBlyqccFbPc3TFaSkdzFewW26guHEkFUu9Md37RM6OA5tfq8EHGlcAyx6AEA+u5uemug7Ij6/pEBwVhaXQuFCUKWtPIuT6nmbhUc63PX+8vBWKjRAXDtmvwWMTYFgUTBkOf3+2g7OVu7wvN3ASmt3+IgoWB1BZe6hX3d+hamDl260apE1y503w8SKIbGX3ec0+yNjcYThZhDNZrqDeBRD0wutxLiXBlhc7FDVcD6//BqYmO0yHKhMcz4fXdsK+jn7gKCikD+PlOq76F3v3BUtHZ8DX137ngV7n8PFc49SchY7ZzeGAB2NVjl5XQKh+Mgrv9fjAXdG5by1qrwWOQEXwHuFMbgkHevslbx/8AYqH+Cp1iWA3CkubBmSPDK79mkCGOG5r6IZrAlf+Fcxe+PBOoCIpQ1AEXECyBw2fyQ20e03g/wFtQtCo7BWukAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOS0wM1QxMToyMjo0MSswODowMBe2V7MAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDktMDNUMTE6MjI6NDErMDg6MDBm6+8PAAAAEXRFWHRleGlmOkNvbG9yU3BhY2UAMQ+bAkkAAAASdEVYdGV4aWY6RXhpZk9mZnNldAAyNlMbomUAAAAXdEVYdGV4aWY6UGl4ZWxYRGltZW5zaW9uADcy7MCiEwAAABd0RVh0ZXhpZjpQaXhlbFlEaW1lbnNpb24ANzIxVnuWAAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAXdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADcyTJg98AAAABZ0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA3MrQ3/X0AAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYzMDYzOTM2MUNqh44AAAASdEVYdFRodW1iOjpTaXplADQ3NDFCQr1neY4AAABGdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMvaW1ndmlldzJfOV8xNjI2Njc5MDIyNzgxOTM2NV83MF9bMF38WXVmAAAAAElFTkSuQmCC"></image></svg>'
	// 抓取按钮
	var crawlBtnTpl = '<div id="pro-crawl-btn" class="pro-crawl-btn">' + svgIcon + '<span id="pro-crawl-text" style="padding-left: 10px;">' + i18nObj[lang].add_to_sku_owner + '</span>' + '</div>';

	// 处理价钱, 保留两位小数
	//四舍五入保留2位小数（不够位数，则用0替补）
	function keepTwoDecimalFull(num) {
		var result = parseFloat(num);
		if (isNaN(result)) {
			return 0;
		}
		result = Math.round(num * 100) / 100;
		var s_x = result.toString();
		var pos_decimal = s_x.indexOf('.');
		if (pos_decimal < 0) {
			pos_decimal = s_x.length;
			s_x += '.';
		}
		while (s_x.length <= pos_decimal + 2) {
			s_x += '0';
		}
		return s_x;
	}
	//获取当前域名配置信息
	function preload() {
		var linkrule = getLinkRule(location.href);
		try {
			CONFIG = JSON.parse(linkrule);
			var test = (new Function("url", CONFIG.detect))(location.href);
			return test
		} catch (e) {
			return;
		}
	}
	// 判断是否存在同名的SKU
	function getCharCount(str, char) {
		var regex = new RegExp(char, 'g'); // 使用g表示整个字符串都要匹配
		var result = str.match(regex); //match方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
		var count = !result ? 0 : result.length;
		return count;
	}

	var backFn = {
		init: function () {
			backFn.initScriptAtAliExpress();
			backFn.initScriptAtMIC();
			backFn.initScriptAt1688();
		},

		initScriptAtAliExpress: function () {
			if (location.host.indexOf('aliexpress.com') === -1) return;
			backFn.insertAliExpressDetailPageCrawlBtnIfNeeded();
			backFn.insertAliExpressPageCrawlBtn();
		},
		initScriptAtMIC: function () {
			if (location.host.indexOf('made-in-china.com') === -1) return;
			backFn.insertMICDetailPageCrawlBtnIfNeeded();
			backFn.insertMICPageCrawlBtn();
		},
		initScriptAt1688: function () {
			if (location.host.indexOf('1688.com') === -1) return;
			setTimeout(() => {
				var urlTest = preload();
				if (urlTest == "detail") {
					backFn.insert1688DetailPageCrawlBtnIfNeeded();
					backFn.insert1688PageCrawlBtn();
				}
			}, 200);
		},
		insertAliExpressDetailPageCrawlBtnIfNeeded: function () {
			if (location.host === 'shoppingcart.aliexpress.com') {
				return;
			}
			var getHref = location.href;

			if (getHref.indexOf('aliexpress.com/item/') > -1 || getHref.indexOf('aliexpress.com/store/product/') > -1) {
				$('html').append(crawlBtnTpl);
				$('#pro-crawl-btn').on('click', function () {
					var $this = $(this);
					if ($this.attr('data-status') === 'crawling') {
						return;
					}
					if (getHref.indexOf('aliexpress.com/item/') > -1 || getHref.indexOf('aliexpress.com/store/product/') > -1) {
						backFn.crawlAliexpressProductData($this);
					}
				});
			}
		},
		insertMICDetailPageCrawlBtnIfNeeded: function () {
			var getHref = location.href;

			if (getHref.indexOf('made-in-china.com/gongying/') > -1 || getHref.indexOf('made-in-china.com/product/') > -1) {
				$('html').append(crawlBtnTpl);

				$('#pro-crawl-btn').on('click', function () {
					var $this = $(this);
					if ($this.attr('data-status') === 'crawling') {
						return;
					}
					if (getHref.indexOf('made-in-china.com/gongying/') > -1 || getHref.indexOf('made-in-china.com/product/') > -1) {
						backFn.crawlMICProductData($this);
					}
				});
			}
		},
		insert1688DetailPageCrawlBtnIfNeeded: function () {
			$('html').append(crawlBtnTpl);

			$('#pro-crawl-btn').on('click', function () {
				var $this = $(this);
				if ($this.attr('data-status') === 'crawling') {
					return;
				}
				backFn.crawl1688ProductData($this);
			});
		},
		insertAliExpressPageCrawlBtn: function () {
			var $body = $('body');
			$body.on('click', '.crawl-btn-wrap .crawl-btn', function () {
				var $this = $(this);
				var getUrl = $this.attr('data-url');
				var getProtocol = location.protocol;
				if ($this.attr('data-status') === 'crawling') {
					return;
				}
				if (getUrl.indexOf('http') === -1) {
					getUrl = getProtocol + getUrl;
				}

				if (getUrl.indexOf('aliexpress.com/item/') > -1 || getUrl.indexOf('aliexpress.com/store/product/') > -1) {
					backFn.crawlAliexpressProductData($this);
				}
			});
		},
		insertMICPageCrawlBtn: function () {
			var $body = $('body');
			$body.on('click', '.crawl-btn-wrap .crawl-btn', function () {
				var $this = $(this);
				var getUrl = $this.attr('data-url');
				var getProtocol = location.protocol;
				if ($this.attr('data-status') === 'crawling') {
					return;
				}
				if (getUrl.indexOf('http') === -1) {
					getUrl = getProtocol + getUrl;
				}
				if (getUrl.indexOf('made-in-china.com/gongying/') > -1 || getUrl.indexOf('made-in-china.com/product/') > -1) {
					backFn.crawlMICProductData($this);
				}
			});
		},
		insert1688PageCrawlBtn: function () {
			var $body = $('body');
			$body.on('click', '.crawl-btn-wrap .crawl-btn', function () {
				var $this = $(this);
				var getUrl = $this.attr('data-url');
				var getProtocol = location.protocol;
				if ($this.attr('data-status') === 'crawling') {
					return;
				}
				if (getUrl.indexOf('http') === -1) {
					getUrl = getProtocol + getUrl;
				}
				backFn.crawl1688ProductData($this);
			});
		},
		// 抓取aliexpress产品信息
		crawlAliexpressProductData($target) {
			backFn.resetBtnStatus($target, i18nObj[lang].adding, 'crawling');
			scrollToBottom(function (res) {
				if (res) {
					// // 判断是否登录
					checkLoginStatus().then((res) => {
						if (res.status) {
							var script = document.createElement('script');
							var inputPlace = document.createElement('input');
							script.type = 'text/javascript';
							inputPlace.type = 'hidden';
							inputPlace.className = "runParamsPlace"
							document.head.appendChild(inputPlace);
							script.innerHTML = "try{document.querySelector('.runParamsPlace').setAttribute('data-runParams', JSON.stringify(runParams));}catch(err){}";
							document.head.appendChild(script);
							document.head.removeChild(script);
							var prodDetailJson = JSON.parse($('.runParamsPlace').attr("data-runparams"));
							var prodDescription = $("#product-description").html();
							var prodName = prodDetailJson.data.titleModule.subject;
							var priceGet = prodDetailJson.data.priceModule;
							var prodPrice = priceGet.minAmount ? keepTwoDecimalFull(priceGet.minAmount.value) : '';
							var prodPriceMax = priceGet.maxAmount ? keepTwoDecimalFull(priceGet.maxAmount.value) : '';
							var prodDiscountPrice = priceGet.minActivityAmount ? keepTwoDecimalFull(priceGet.minActivityAmount.value) : '';
							var prodDiscountPriceMax = priceGet.maxActivityAmount ? keepTwoDecimalFull(priceGet.maxActivityAmount.value) : '';
							var stock = prodDetailJson.data.quantityModule ? prodDetailJson.data.quantityModule.totalAvailQuantity : 0;
							var originType = '0';
							var originUrl = location.href;
							var productPicUrl = prodDetailJson.data.pageModule ? prodDetailJson.data.pageModule.imagePath : '';
							var skuNum = 0;
							var prodBrief = '';
							var prodDesc = prodDescription;
							var prodKeyword = prodDetailJson.data.pageModule ? [prodDetailJson.data.pageModule.keywords] : '';
							var prodPicList = prodDetailJson.data.imageModule ? prodDetailJson.data.imageModule.imagePathList : '';
							var skuModule = prodDetailJson.data.skuModule ? prodDetailJson.data.skuModule : '';
							var productSKUPropertyList = skuModule.productSKUPropertyList ? skuModule.productSKUPropertyList : [];
							var skuPriceList = skuModule.skuPriceList ? skuModule.skuPriceList : [];
							var skuOption = [];
							var skuValueListStr = "";
							var skuOptionList = []; // 用于收集sku对应的id
							if (productSKUPropertyList.length > 0) {
								productSKUPropertyList.forEach(item => {
									var pushOptionJson = {}
									pushOptionJson['skuName'] = item.skuPropertyName;
									var skuPropertyValues = [];
									item.skuPropertyValues.forEach((element, index) => {
										var eachSkuPropertyValue = {};
										var eachSkuPropertyId = {};
										skuValueListStr += (element.skuPropertyValueTips + "_");
										var tipsCount = getCharCount(skuValueListStr, (element.skuPropertyValueTips + "_"));
										if (tipsCount > 1) {
											eachSkuPropertyValue['skuValue'] = (element.skuPropertyValueTips + (tipsCount - 1));
											eachSkuPropertyId['name'] = (element.skuPropertyValueTips + (tipsCount - 1));
										} else {
											eachSkuPropertyValue['skuValue'] = element.skuPropertyValueTips;
											eachSkuPropertyId['name'] = element.skuPropertyValueTips;
										}
										eachSkuPropertyValue['image'] = element.skuPropertyImagePath ? element.skuPropertyImagePath : '';
										eachSkuPropertyValue['order'] = index;
										eachSkuPropertyId['id'] = item.skuPropertyId
										eachSkuPropertyId['label'] = item.skuPropertyName
										eachSkuPropertyId['value'] = element.propertyValueId
										eachSkuPropertyId['order'] = index
										eachSkuPropertyId['img'] = element.skuPropertyImagePath ? element.skuPropertyImagePath : ''
										skuPropertyValues.push(eachSkuPropertyValue);
										skuOptionList.push(eachSkuPropertyId);
									})
									pushOptionJson['values'] = skuPropertyValues;
									skuOption.push(pushOptionJson);
								});
							}
							var skuValues = [];
							skuPriceList.forEach(item => {
								var pushValuesJson = {};
								var skuAttr = item.skuAttr;
								var skuArr = skuAttr.split(";");
								var skuKey = '';
								var skuValue = '';
								var skuImg = '';
								var skuKeyArr = [];
								var skuValArr = [];
								var skuImgArr = [];
								skuArr.forEach(item => {
									for (let _index = 0; _index < skuOptionList.length; _index++) {
										const el = skuOptionList[_index];
										if (item.indexOf(el.id + ':' + el.value) != -1) {
											skuKeyArr.push(el.label + '_' + el.order)
											skuValArr.push(el.name)
											skuImgArr.push(el.img)
										}
									}
								})
								skuKey = skuKeyArr.join("~!!~");
								skuValue = skuValArr.join("/");
								skuImg = skuImgArr.join("");
								pushValuesJson["skuKey"] = skuKey;
								pushValuesJson["skuValue"] = skuValue;
								pushValuesJson["image"] = skuImg;
								var getValue = {
									skuCode: '',
									importPrice: 0,
									comparePrice: 0,
									price: 0,
									stock: 0
								}
								var skuVal = item.skuVal
								getValue.skuCode = item.skuIdStr
								getValue.importPrice = skuVal.skuActivityAmount ? keepTwoDecimalFull(skuVal.skuActivityAmount.value) : ''
								getValue.comparePrice = skuVal.skuAmount ? keepTwoDecimalFull(skuVal.skuAmount.value) : ''
								getValue.price = skuVal.skuActivityAmount ? keepTwoDecimalFull(skuVal.skuActivityAmount.value) : ''
								getValue.stock = skuVal.inventory
								pushValuesJson['value'] = getValue
								skuValues.push(pushValuesJson)
							});
							skuNum = skuValues.length;
							prodDetailData.prodName = prodName ? prodName : '';
							prodDetailData.prodPrice = prodPrice ? prodPrice : '';
							prodDetailData.prodPriceMax = prodPriceMax ? prodPriceMax : '';
							prodDetailData.prodDiscountPrice = prodDiscountPrice ? prodDiscountPrice : '';
							prodDetailData.prodDiscountPriceMax = prodDiscountPriceMax ? prodDiscountPriceMax : '';
							prodDetailData.stock = stock ? stock : 0;
							prodDetailData.originType = originType;
							prodDetailData.originUrl = originUrl ? originUrl : '';
							prodDetailData.productPicUrl = productPicUrl ? productPicUrl : '';
							prodDetailData.skuNum = skuNum ? skuNum : 0;
							prodDetailData.prodText.prodBrief = prodBrief ? prodBrief : '';
							prodDetailData.prodText.prodDesc = prodDesc ? prodDesc : '';
							prodDetailData.prodText.prodKeyword = prodKeyword ? prodKeyword : [];
							prodDetailData.prodText.prodPicList = prodPicList ? prodPicList : [];
							prodDetailData.skuInfo.skuOption = skuOption ? skuOption : [];
							prodDetailData.skuInfo.skuValues = skuValues ? skuValues : [];
							let data = {
								importJson: encodeURI(JSON.stringify(prodDetailData))
							};
							postProductData(data);
						} else {
							// 未登录
							var msgTpl = '<p class="text">' + i18nObj[lang].login_error + '<a target="_blank" class="login" href="' + loginUrl + '">' + i18nObj[lang].login + '</a>' + '</p>';
							backFn.tipsAlert(msgTpl);
						}
					}).catch((err) => {
						// 未登录
						var msgTpl = '<p class="text">' + i18nObj[lang].login_error + '<a target="_blank" class="login" href="' + loginUrl + '">' + i18nObj[lang].login + '</a>' + '</p>';
						backFn.tipsAlert(msgTpl);
					});
				}
			})
		},
		//抓取MIC的产品信息
		crawlMICProductData($target) {
			backFn.resetBtnStatus($target, i18nObj[lang].adding, 'crawling');
			scrollToBottom(function (res) {
				if (res) {
					checkLoginStatus().then((res) => {
						if (res.status) {
							if (location.href.indexOf('made-in-china.com/gongying/') > -1) {
								var prodName = $(".halfImg").find("h1").text();
								var proDetail_box = $(".proDetail_box").find(".description").html();
								var stock = parseFloat($("#prodetails_data").find(".tr-total td").text());
								var prodKeyword = $("meta[name='Keywords']").attr("content");
								var originUrl = location.href;
								var productPicUrl = $("img.imgborderdetails").attr("src");
								var imgsList = $(".imgs-out .mImgs").find(".td-odd");
								var prodPicList = []
								for (let idx = 0; idx < imgsList.length; idx++) {
									const element = imgsList[idx];
									if (document.createEvent) {
										const event = document.createEvent('MouseEvents');
										event.initEvent('mouseover', true, false);
										element.dispatchEvent(event);
									} else if (document.createEventObject) {
										//兼容IE
										element.fireEvent('onmouseover');
									}
									var selectImg = $("img.imgborderdetails").attr("src")
									if (!prodPicList.includes(selectImg)) {
										prodPicList.push(selectImg)
									}
								}
								prodDetailData.prodName = prodName;
								prodDetailData.originType = '1';
								prodDetailData.stock = stock ? stock : 0;
								prodDetailData.originUrl = originUrl ? originUrl : "";
								prodDetailData.productPicUrl = productPicUrl ? productPicUrl : "";
								prodDetailData.prodText.prodPicList = prodPicList ? prodPicList : [];
								prodDetailData.prodText.prodDesc = proDetail_box ? proDetail_box : '';
								prodDetailData.prodText.prodKeyword = prodKeyword ? [prodKeyword] : [];
								let data = {
									importJson: encodeURI(JSON.stringify(prodDetailData))
								};
								postProductData(data);
							}
							if (location.href.indexOf('made-in-china.com/product/') > -1) {
								// 新版Dom
								if ($(".sr-proMainInfo-baseInfo-name").length>0) {
									var _prodName = $(".sr-proMainInfo-baseInfo-name").find("h1").text().trim();
									if (!_prodName) {
										_prodName = $(".base-info-wrap .pro-name").find("h1").text().trim();
									}
									var _proDetail_box = $(".detail-desc").html();
									var proDetail_img = $(_proDetail_box).find("img");
									if (proDetail_img.length > 0) {
										for (let img = 0; img < proDetail_img.length; img++) {
											const element = proDetail_img[img];
											$(element).attr("src", $(element).attr("data-original"));
										}
									}
									var _originUrl = location.href;
									var _productPicUrl = "";
									var _prodKeyword = $("meta[name='Keywords']").attr("content");
									var _imgsList = $(".sr-proMainInfo-slide-pageUl").find(".J-pic-dot");
									var _prodPicList = [];
									var _price = $("meta[property='product:price:amount']").attr("content");
									var highPrice = $("meta[itemprop='highPrice']").attr("content");
									for (let _idx = 0; _idx < _imgsList.length; _idx++) {
										const _element = _imgsList[_idx];
										if (document.createEvent) {
											const event = document.createEvent('MouseEvents');
											event.initEvent('mouseover', true, false);
											_element.dispatchEvent(event);
										} else if (document.createEventObject) {
											//兼容IE
											_element.fireEvent('onmouseover');
										}
										var _selectImg = $(".swiper-wrapper").find(".swiper-slide-active").attr("fsrc");
										if (!_selectImg) {
											_selectImg = $(".swiper-wrapper").find(".swiper-slide-active img").attr("src");
										}
										if (!_prodPicList.includes(_selectImg)) {
											_prodPicList.push(_selectImg)
										}
									}
									if (_prodPicList.length == 0) {
										_productPicUrl = $("#pic-list .hvalign-cnt").find("img").attr("src");
									}
									prodDetailData.prodName = _prodName;
									prodDetailData.originType = '1';
									prodDetailData.stock = 0;
									prodDetailData.prodPrice = _price ? keepTwoDecimalFull(_price) : 0;
									prodDetailData.prodDiscountPrice = _price ? keepTwoDecimalFull(_price) : 0;
									prodDetailData.prodPriceMax = highPrice ? keepTwoDecimalFull(highPrice) : '';
									prodDetailData.prodDiscountPriceMax = highPrice ? keepTwoDecimalFull(highPrice) : '';
									prodDetailData.productPicUrl = _prodPicList[0] ? _prodPicList[0] : _productPicUrl;
									prodDetailData.originUrl = _originUrl ? _originUrl : "";
									prodDetailData.prodText.prodDesc = _proDetail_box ? _proDetail_box : '';
									prodDetailData.prodText.prodKeyword = _prodKeyword ? [_prodKeyword] : [];
									prodDetailData.prodText.prodPicList = _prodPicList ? _prodPicList : [];
								};
								// 旧版Dom
								if ($(".page-product-details").length>0) {
									var _prodName = $(".page-product-details .main-info .base-info .pro-name h1").text().trim();
									var _proDetail_box = $(".page-product-details .product-info .main-block-wrap .desc.rich-text").html();
									var proDetail_img = $(_proDetail_box).find("img");
									if (proDetail_img.length > 0) {
										for (let img = 0; img < proDetail_img.length; img++) {
											const element = proDetail_img[img];
											$(element).attr("src", $(element).attr("data-original"));
										}
									}
									var _originUrl = location.href;
									var _productPicUrl = $(".page-product-details .gallary-box .pic-list .hvalign img").attr("src");
									var _prodKeyword = $("meta[name='Keywords']").attr("content");
									var _price = $("meta[property='product:price:amount']").attr("content");
									prodDetailData.prodName = _prodName;
									prodDetailData.originType = '1';
									prodDetailData.stock = 0;
									prodDetailData.prodPrice = _price ? keepTwoDecimalFull(_price) : 0;
									prodDetailData.prodDiscountPrice = _price ? keepTwoDecimalFull(_price) : 0;
									prodDetailData.prodPriceMax =  '';
									prodDetailData.prodDiscountPriceMax = '';
									prodDetailData.productPicUrl = _productPicUrl;
									prodDetailData.originUrl = _originUrl ? _originUrl : "";
									prodDetailData.prodText.prodDesc = _proDetail_box ? _proDetail_box : '';
									prodDetailData.prodText.prodKeyword = _prodKeyword ? [_prodKeyword] : [];
									prodDetailData.prodText.prodPicList =  [];
								}
								let _data = {
									importJson: encodeURI(JSON.stringify(prodDetailData))
								};
								postProductData(_data);
							}
						} else {
							// 未登录
							var msgTpl = '<p class="text">' + i18nObj[lang].login_error + '<a target="_blank" class="login" href="' + loginUrl + '">' + i18nObj[lang].login + '</a>' + '</p>';
							backFn.tipsAlert(msgTpl);
						}
					}).catch((err) => {
						// 未登录
						var msgTpl = '<p class="text">' + i18nObj[lang].login_error + '<a target="_blank" class="login" href="' + loginUrl + '">' + i18nObj[lang].login + '</a>' + '</p>';
						backFn.tipsAlert(msgTpl);
					});
				}
			})
		},
		// 抓取1688产品信息
		crawl1688ProductData($target) {
			backFn.resetBtnStatus($target, i18nObj[lang].adding, 'crawling');
			scrollToBottom(function (res) {
				if (res) {
					checkLoginStatus().then((res) => {
						if (res.status) {
							var script = document.createElement('script');
							var inputPlace = document.createElement('input');
							script.type = 'text/javascript';
							inputPlace.type = 'hidden';
							inputPlace.className = "iDetailData"
							document.head.appendChild(inputPlace);
							script.innerHTML = "try{document.querySelector('.iDetailData').setAttribute('data-iDetailData', JSON.stringify(iDetailData));}catch(err){}";
							document.head.appendChild(script);
							document.head.removeChild(script);
							var prodDetailJson = JSON.parse($('.iDetailData').attr("data-iDetailData"));
							var prodPrice = "";
							var prodPriceMax = "";
							var prodDiscountPrice = "";
							var prodDiscountPriceMax = "";
							var stock = 0;
							var skuOption = [];
							var skuValues = [];
							var skuOptionList = []; // 用于收集sku对应的id
							if (prodDetailJson.sku) {
								var skuProps = prodDetailJson.sku.skuProps
								if (skuProps.length > 0) {
									skuProps.forEach(element => {
										var pushOptionJson = {};
										var skuPropertyValues = [];
										pushOptionJson['skuName'] = element.prop;
										element.value.forEach((item, index) => {
											var eachSkuPropertyValue = {};
											var eachSkuPropertyId = {};
											if ($(".table-sku").find("tr").length > 0) {
												var tableSku = $(".table-sku").find("tr");
												for (let _id = 0; _id < tableSku.length; _id++) {
													const element = tableSku[_id];
													var dataSkuConfig = JSON.parse($(element).attr("data-sku-config"));
													var priceValue = $(element).find(".price").find(".value").text();
													if (item.name === dataSkuConfig.skuName) {
														if (priceValue) {
															eachSkuPropertyId["price"] = priceValue;
														} else {
															eachSkuPropertyId["price"] = "";
														}
													}
												}
											}
											eachSkuPropertyValue['skuValue'] = item.name ? item.name : '';
											eachSkuPropertyValue['image'] = item.imageUrl ? item.imageUrl : '';
											eachSkuPropertyValue['order'] = index;
											eachSkuPropertyId['name'] = element.prop;
											eachSkuPropertyId['value'] = item.name ? item.name : '';
											eachSkuPropertyId['order'] = index;
											skuPropertyValues.push(eachSkuPropertyValue);
											skuOptionList.push(eachSkuPropertyId);
										})
										pushOptionJson['values'] = skuPropertyValues;
										skuOption.push(pushOptionJson)
									})
								}
								var skuMap = prodDetailJson.sku.skuMap
								for (const key in skuMap) {
									var eachSkuValuesJson = {};
									var skuValueJson = {};
									var skuKeyArr = [];
									var skuKey = "";
									var skuValue = "";
									if (Object.hasOwnProperty.call(skuMap, key)) {
										const element = skuMap[key];
										var keysArr = key.split("&gt;");
										keysArr.forEach(item => {
											skuOptionList.forEach(el => {
												if (el.value == item) {
													skuKeyArr.push(el.name + '_' + el.order)
													skuValueJson['price'] = element.price ? element.price : el.price;
													skuValueJson['importPrice'] = element.price ? element.price : el.price;
													skuValueJson['comparePrice'] = element.price ? element.price : el.price;
													prodPrice = element.price ? element.price : el.price;
													prodDiscountPrice = element.price ? element.price : el.price;
												}
											})
										})
										skuKey = skuKeyArr.join("~!!~");
										skuValue = keysArr.join("/");
										eachSkuValuesJson['skuKey'] = skuKey;
										eachSkuValuesJson['skuValue'] = skuValue;
										eachSkuValuesJson['image'] = ''
										skuValueJson['skuCode'] = ''
										skuValueJson['stock'] = element.canBookCount ? element.canBookCount : '';
										stock += Number(element.canBookCount);
										eachSkuValuesJson['value'] = skuValueJson;
										skuValues.push(eachSkuValuesJson);
									}
								}
							}
							var prodName = $("#mod-detail-title").find("h1.d-title").text();
							var dataRange = $("#mod-detail-price").find(".ladder-2-1").attr("data-range");
							if (dataRange) {
								prodDiscountPrice = JSON.parse(dataRange).price
							}
							if (prodDetailJson.sku.price) {
								var price = prodDetailJson.sku.price.split("-");
								if (price && price.length == 2) {
									prodDiscountPrice = price[0]
									prodDiscountPriceMax = price[1]
								}
							}
							var originUrl = location.href;
							var prodDesc = $(".offerdetail_w1190_description").html();
							var productPicUrl = $(".box-img[trace='largepic']").find("img").attr("src");
							var skuNum = "";
							var prodImgList = [];
							var prodImgDom = $("#dt-tab").find("li.tab-trigger");
							if (prodImgDom.length > 0) {
								for (let idx = 0; idx < prodImgDom.length; idx++) {
									const element = prodImgDom[idx];
									var imgs = $(element).attr("data-imgs");
									if (imgs) {
										prodImgList.push(JSON.parse(imgs).preview)
									}
								}
							}
							prodDetailData.prodName = prodName;
							prodDetailData.originType = '2';
							prodDetailData.prodDiscountPrice = prodDiscountPrice;
							prodDetailData.prodDiscountPriceMax = prodDiscountPriceMax;
							prodDetailData.originUrl = originUrl;
							prodDetailData.productPicUrl = productPicUrl;
							prodDetailData.prodText.prodPicList = prodImgList;
							prodDetailData.prodText.prodDesc = prodDesc ? prodDesc : '';
							prodDetailData.skuInfo.skuOption = skuOption;
							prodDetailData.skuInfo.skuValues = skuValues;
							skuNum = skuValues.length;
							prodDetailData.skuNum = skuNum ? skuNum : 0;
							prodDetailData.stock = stock ? stock : 0;
							prodDetailData.prodPrice = prodPrice ? prodPrice : '';
							prodDetailData.prodPriceMax = prodPriceMax ? prodPriceMax : '';
							let data = {
								importJson: encodeURI(JSON.stringify(prodDetailData))
							};
							postProductData(data);
						} else {
							// 未登录
							var msgTpl = '<p class="text">' + i18nObj[lang].login_error + '<a target="_blank" class="login" href="' + loginUrl + '">' + i18nObj[lang].login + '</a>' + '</p>';
							backFn.tipsAlert(msgTpl);
						}
					}).catch((err) => {
						// 未登录
						var msgTpl = '<p class="text">' + i18nObj[lang].login_error + '<a target="_blank" class="login" href="' + loginUrl + '">' + i18nObj[lang].login + '</a>' + '</p>';
						backFn.tipsAlert(msgTpl);
					});
				}
			})
		},
		// 更新按钮状态
		resetBtnStatus: function ($target, text, status) {
			$target.removeClass('crawling');
			$target.removeClass('crawled');
			$target.text(text).addClass(status).attr('data-status', status);
		},
		tipsAlert: function (msg, type) {
			$('body').find('#multi-tips').remove();
			var tipsTpl = '<div id="multi-tips" class="multi-tips ' + (type ? type : '') + '">' + msg + '<span class="close-btn">×</span>' + '</div>';
			$('body').append(tipsTpl);
			var $tips = $('body').find('#multi-tips');
			setTimeout(function () {
				$tips.remove();
			}, 8000);
			$tips.on('click', '.close-btn', function () {
				$tips.remove();
			});
		},

		showLogo: function ($target, type) {
			var $parent = $target.parents('.crawl-btn-wrap');
			if (!$parent.length) {
				return;
			}
			if (type === 'success') {
				var getImgUrl = (chrome && chrome.extension && chrome.extension.getURL('images/icon48.png')) || '';
				var logoTpl = '<img class="hj-logo" src="' + getImgUrl + '">';
				$parent.append(logoTpl);
				// 调整按钮位置
				var getLogoParentTop = $parent.offset().top;
				var getLogoTop = $parent.find('.hj-logo').offset().top;
				if (getLogoParentTop > 0 && getLogoTop > 0 && getLogoParentTop > getLogoTop) {
					$parent.find('.hj-logo').css({
						'margin-top': getLogoParentTop - getLogoTop + 3 + 'px',
					});
				}
			}
		},
	};

	backFn.init();

	// 判断是否登录
	function checkLoginStatus() {
		var promise = new Promise(function (resolve, reject) {
			if (Authorization) {
				chrome.runtime.sendMessage({
					type: 'setCookie',
					params: {
						Authorization: Authorization
					}
				}, function (response) {
					var data = JSON.parse(response.data);
					if (data.authFlag) {
						resolve({
							status: true
						})
					} else {
						reject({
							status: false
						})
					}
				})
			} else {
				// 未登录
				var msgTpl = '<p class="text">' + i18nObj[lang].not_login + '<a target="_blank" class="login" href="' + loginUrl + '">' + i18nObj[lang].login + '</a>' + '</p>';
				backFn.tipsAlert(msgTpl);
			}
		});
		return promise;
	}

	//去后台采集
	function postProductData(data) {
		var _data = data;
		var curUrl = location.href;
		chrome.runtime.sendMessage({
			type: 'importJudge',
			params: {
				Authorization: Authorization,
				data: {
					"curUrl": curUrl
				}
			}
		}, function (response) {
			var data = JSON.parse(response.data);
			if (data.code == '200') {
				chrome.runtime.sendMessage({
					type: 'pluginImport',
					params: {
						Authorization: Authorization,
						data: _data
					}
				}, function (response) {
					var data = JSON.parse(response.data);
					if (data.code == '200') {
						$("#pro-crawl-btn").addClass("success-crawl");
						$("#pro-crawl-btn").text("抓取成功");
						var myPort_s = chrome.runtime.connect({
							name: "port-connect"
						});
						myPort_s.postMessage({
							greeting: "success"
						});
						chrome.runtime.sendMessage({
							type: 'crawlStatus',
							params: {
								type: "success"
							}
						})
					} else {
						$("#pro-crawl-btn").addClass("error-crawl");
						$("#pro-crawl-btn").text("抓取失败");
						var myPort_e = chrome.runtime.connect({
							name: "port-connect"
						});
						myPort_e.postMessage({
							greeting: "error"
						});
						chrome.runtime.sendMessage({
							type: 'crawlStatus',
							params: {
								type: "error"
							}
						})
					}
				})
			} else {
				$("#pro-crawl-btn").addClass("error-crawl");
				$("#pro-crawl-btn").text("重复抓取");
				chrome.runtime.sendMessage({
					type: 'crawlStatus',
					params: {
						type: "repetition"
					}
				});
				var myPort_r = chrome.runtime.connect({
					name: "port-connect"
				});
				myPort_r.postMessage({
					greeting: "repetition"
				});
				// 已经抓取
				var msgTpl = '<p class="text">' + i18nObj[lang].repetition_crawl + '</p>';
				backFn.tipsAlert(msgTpl);
			}
		})
	}
})();