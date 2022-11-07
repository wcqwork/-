// 获取当前选项卡ID
function getCurrentTabId(callback) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    if (callback) {
      callback(tabs.length ? tabs[0].id : null)
    };
  });
}
// 向content-script主动发送消息
function sendMessageToContentScript(message, callback) {
  getCurrentTabId((tabId) => {
    chrome.tabs.sendMessage(tabId, message, function (response) {
      if (callback) {
        callback(response)
      };
    });
  });
}

function sendMessageToContentScript(message, callback) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
      if (callback) callback(response);
    });
  });
}
chrome.runtime.onConnect.addListener(function (port) {
  if (port.name == "port-connect") {
    port.onMessage.addListener(function (msg) {
      if (msg.greeting == "success") {
        $("#start-coll").html("<p class='start-coll-btn success-coll-btn'><span class='icon-2'></span>抓取成功</p>");
      }
      if (msg.greeting == "error" || msg.greeting == "repetition") {
        $("#start-coll").html("<p class='start-coll-btn error-coll-btn'><span class='icon-4'></span>抓取失败</p>");
      }
    });
  }
});


(function () {
  var Authorization = localStorage.getItem("Authorization");
  var crawlStatus = localStorage.getItem("crawlStatus");
  if (Authorization) {
    chrome.runtime.sendMessage({
      type: 'setCookie',
      params: {
        Authorization: Authorization
      }
    }, function (response) {
      var data = JSON.parse(response.data);
      console.log("response", response);
      var logonName = data.logonName ? data.logonName : '--';
      $("#start-coll").show();
      $("#plugin-message").show();
      $("#init-coll").hide();
      if (data.authFlag) {
        $("#no-login").hide();
        if (crawlStatus && crawlStatus == 'success') {
          $("#start-coll").html("<p class='start-coll-btn success-coll-btn'><span class='icon-2'></span>抓取成功</p>");
        } else if (crawlStatus && (crawlStatus == 'error' || crawlStatus == 'repetition')) {
          $("#start-coll").html("<p class='start-coll-btn error-coll-btn'><span class='icon-4'></span>抓取失败</p>");
        } else {
          $("#start-coll").html("<p class='start-coll-btn default-coll-btn' id='getProdDetailJson'><span class='icon-5'><span class='path2'></span></span>开始抓取</p>");
        }
        $("#go-login").hide();
        $("#plugin-message").html("<span class='user-msg'>" + logonName + "</span><a href='https://products-in.leadongshop.com/index/?Authorization=" +Authorization+ "' target='_black'><span class='go-admin'>进入管理后台 > </span></a>");
        $('#getProdDetailJson').click(() => {
          sendMessageToContentScript('getPrdoDetailJson', function (response) {});
        });
      }
    })
  }
})();