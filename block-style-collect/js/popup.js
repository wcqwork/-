

class collectBlock {
    constructor(submitBtn, selectBtn) {
        this.submitBtn = submitBtn;
        this.selectBtn = selectBtn;

        this.blockCollectInit();
    }

    blockCollectInit() {
        this.sendMessageToContentScript('init-block',(response) => {
            console.log(response);
            if(response && response.status){
                this.insertBlockChoose(response.blockList || []);
            }
        });
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

    insertBlockChoose(blockArr) {
        let $select = $("<select></select>");
        console.log(this.selectBtn);
        if (blockArr && blockArr.length <= 0) {
            this.selectBtn.html("没有找到区块呀！");
            this.submitBtn.remove();
            return;
        }
        blockArr.forEach((item, index) => {
            var $option = "<option value=" + item + "区块>" + item + "区块</option>";
            $select.append($option);
        })
        this.selectBtn.html($select);

        this.bindStyleCollect();
    }

    // 绑定收集
    bindStyleCollect() {
        this.submitBtn.click(function () {
            console.log('收集中……');
        });
    }
}



(function () {
    let submitBtn = $("#collectbtn");
    let selectBtn = $("#plugin-select");
    new collectBlock(submitBtn, selectBtn);
})();