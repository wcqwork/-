/**
 * content_scripts里更改标签页面的js，插件js不能操作打开标签页的dom
 * */
(function () {
	class contentScript {
		constructor() {
			this.startFlag = true;
			this.init();
		}
		init() {
			window.getStateFun = () => {
			}
		}
	}

	var GoogleContentScript = null;

	chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
		if ((!document.getElementById('backstage-headArea') && !document.getElementById('backstage-bodyArea') && !document.getElementById('backstage-footArea')) && !document.getElementById('backstage-syleEdit-iframe')) {
			if (!document.getElementById('backstage-pc-priview')) {
				alert('禁止第三方网站调用，谢谢！')
				return
			}
		}
		if (!GoogleContentScript) {
			GoogleContentScript = new contentScript();
		}
		let backFun = {
			"msg-dialog": function () {
				if(GoogleContentScript.startFlag){
					GoogleContentScript.startFlag = false;
					var script = document.createElement("script");
					script.innerHTML = `
					window.startTreeStyle();
					`
					document.head.appendChild(script);
				}else{
					console.log("请勿重复start");
					alert('已初始化成功，请勿重复点击！')
				}
				
				sendResponse({ status: true });
			}
		}
		if (backFun[request]) {
			backFun[request]();
		} else {
			sendResponse({ status: false });
		}
		return true;
	});
})();