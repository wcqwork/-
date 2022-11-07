export default {
  init: function () {
    const lang = "ZH-ch";
    const bingKey =
      "Alfxl0RnjZNpBuuTaBOoWUaV1HZMB8lR7TlSWkOCXDwLiqqmYhqhz1A8Wd8ypENA";
    const BingMapUrl =
      "http://www.bing.com/api/maps/mapcontrol?setLang=" +
      lang +
      "&key=" +
      bingKey;
    return new Promise((resolve, reject) => {
      if (typeof Microsoft !== "undefined") {
        resolve(window.Microsoft);
        return true;
      }

      // 插入script脚本
      let scriptNode = document.createElement("script");
      scriptNode.setAttribute("type", "text/javascript");
      scriptNode.setAttribute("src", BingMapUrl);
      document.body.appendChild(scriptNode);
      //   scriptNode.onload = scriptNode.onreadystatechange = () => {
      //     var state = this.readyState;
      //     if (!state || state === "loaded" || state === "complete") {
      //       console.log("地图", window.Microsoft);
      //       resolve(window.Microsoft);
      //     } else {
      //       reject();
      //     }
      //   };
      // 等待页面加载完毕回调
      let timeout = 0;
      let interval = setInterval(() => {
        // 超时10秒加载失败
        if (timeout >= 100) {
          reject("binMap加载失败！");
          clearInterval(interval);
        }
        // 加载成功
        if (typeof Microsoft !== "undefined") {
          resolve(window.Microsoft);
          clearInterval(interval);
        }
        timeout += 1;
      }, 100);
    });
  },
};
