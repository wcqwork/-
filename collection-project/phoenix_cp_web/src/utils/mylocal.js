// 存数据--列表历史数据使用
function setLocal(key, value) {
  let getVal = getLocal(key) || [];
  let getSome = getVal.some(function (item) {
    return item == value;
  });
  if (getSome || !value) return;
  console.log("value", value);
  getVal.unshift(value);
  //保存最新的8个
  window.localStorage.setItem(key, JSON.stringify(getVal.slice(0, 8)));
}
// 存数据--公用
function setAllLocal(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}
// 存数据sessionStorage
function setSession(key, value) {
  window.sessionStorage.setItem(key, JSON.stringify(value));
}
// 取数据
function getLocal(key) {
  return JSON.parse(window.localStorage.getItem(key)) || [];
}
// 取数据sessionStorage
function getSession(key) {
  return JSON.parse(window.sessionStorage.getItem(key)) || [];
}
// 删数据
function delLocal(key) {
  window.localStorage.removeItem(key);
}
// 全部清空
function clearLocal() {
  window.localStorage.clear();
}

export {
  setLocal,
  setAllLocal,
  setSession,
  getSession,
  getLocal,
  delLocal,
  clearLocal,
};
