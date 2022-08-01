export function setCookieTime() {
  var curDate = new Date(); //当前时间戳
  var curTamp = curDate.getTime(); //当日凌晨的时间戳,减去一毫秒是为了防止后续得到的时间不会达到00:00:00的状态
  var curWeeHours = new Date(curDate.toLocaleDateString()).getTime() - 1; //当日已经过去的时间（毫秒）
  var passedTamp = curTamp - curWeeHours; //当日剩余时间
  var leftTamp = 24 * 60 * 60 * 1000 - passedTamp;
  var leftTime = new Date();
  leftTime.setTime(leftTamp + curTamp);
  return leftTime.toGMTString();
}

//设置cookie
export function setCookie(name, value, time) {
  document.cookie = name + "=" + escape(value) + ";expires=" + time;
}

//获取cookie
export function getCookie(name) {
  var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
  if (arr != null) {
    return unescape(arr[2]);
  } else {
    return null;
  }
}
