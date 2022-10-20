/**
 * content_scripts里更改标签页面的js，插件js不能操作打开标签页的dom
 * */
(function () {
	class contentScript {
		constructor() {
			this.blockList = []; //所有的区块
			this.isNumberFlag = true;

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
		innersetMsgDialog(){
			if(!this.isNumberFlag){
				return;
			}
			this.isNumberFlag = false
			let boxContent = $("<div id='boxContent'></div>")
			let msgboxStyle = `
				<style>
					#blockMsgBox{
						z-index: 999999999999;
						width: 500px;
						height: 300px;
						background-color: #3a3f3780;
						position: fixed;
						top: 50%;
						left: 50%;
						transform: translate(-50%,-50%);
						border: 1px solid;
						color: white;
						text-align: center;
						display: flex;
						align-items: center;
						justify-content: center;
					}
				</style>
			`
			let msgBox = $("<div id='blockMsgBox'>正在抓取中……</div>");
			msgBox.html(msgboxStyle);
			boxContent.html(msgBox);

			$("body").append(boxContent);
		}
	}

	var GoogleContentScript = null;

	chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
		console.log(request);
		if(!GoogleContentScript){
			GoogleContentScript = new contentScript();
		}	
		let backFun = {
			"init-block": function(){
				sendResponse({ status: true,blockList: GoogleContentScript.blockList});
			},
			"msg-dialog": function(){
				GoogleContentScript.innersetMsgDialog();
				sendResponse({ status: true});
			}
		}
		if(backFun[request]){
			backFun[request]();
		}else{
			sendResponse({ status: false });
		}
		return true;
	});
})();