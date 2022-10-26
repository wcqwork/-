/**
 * content_scripts里更改标签页面的js，插件js不能操作打开标签页的dom
 * */
(function () {
	class contentScript {
		constructor() {

			this.init();
		}
		init() {
			window.getStateFun = () => {
				console.log(111111111);
			}
		}
	}

	console.log(33333333);

	var GoogleContentScript = null;

	chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
		console.log(request);
		if (!GoogleContentScript) {
			GoogleContentScript = new contentScript();
		}
		let backFun = {
			"msg-dialog": function () {
				var script = document.createElement("script");
				script.innerHTML = `
				window.startTreeStyle();
				`
				document.head.appendChild(script)
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