

class collectBlock {
    constructor(submitBtn) {
        this.submitBtn = submitBtn;

        this.init();
    }

    init() {
        this.bindStyleCollect();
    }

    sendMessageToContentScript(message, callback) {
        chrome.tabs.query({
          active: true,
          currentWindow: true
        }, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
            if (callback) callback(response);
          });
        });
      }


    // 绑定收集
    bindStyleCollect() {
        let _that = this;
        this.submitBtn.click(function () {
            _that.sendMessageToContentScript('msg-dialog',(response) => {
                console.log(response);
            });
        });
    }
}



(function () {
    let submitBtn = $("#collectbtn");
    new collectBlock(submitBtn);
})();