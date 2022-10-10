/**
 * content_scripts里更改标签页面的js，插件js不能操作打开标签页的dom
 * */
(function () {
	class contentScript {
		constructor() {
			this.blockList = []; //所有的区块

			this.init();
		}
		init() {
			// 获取页面所有区块
			this.getPageBlock($("body"));
		}
		getPageBlock(domContainer) {
			domContainer.find("div[data-appid]").each((index, item) => {
				let appid = $(item).attr("data-appid");
				this.blockList.push(appid);
			})
		}
	}

	chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
		console.log('init-block');
		if (request == "init-block") {
			let _contentScript = new contentScript();
			sendResponse({ status: true,blockList: _contentScript.blockList});
		}else{
			sendResponse({ status: false });
		}
		return true;
	});
})();