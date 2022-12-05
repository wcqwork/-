

class collectBlock {
  constructor(submitBtn, workCfn, workFaq) {
    this.submitBtn = submitBtn;
    this.workCfn = workCfn;
    this.workFaq = workFaq;
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
        window.close()
        if (callback) callback(response);
      });
    });
  }


  // 绑定收集
  bindStyleCollect() {
    let _that = this;
    this.submitBtn.click(function () {
      _that.sendMessageToContentScript('msg-dialog', (response) => {
        console.log(response);
      });
    });
    this.submitBtn.click(function () {
      _that.sendMessageToContentScript('msg-dialog-cfn', (response) => {
        console.log(response);
      });
    });
    this.submitBtn.click(function () {
      _that.sendMessageToContentScript('msg-dialog-faq', (response) => {
        console.log(response);
      });
    });
  }
}



(function () {
  let submitBtn = $("#collectbtn");
  let workCfn = $("#work-cfn");
  let workFaq = $("#work-faq");
  new collectBlock(submitBtn, workCfn, workFaq);
})();