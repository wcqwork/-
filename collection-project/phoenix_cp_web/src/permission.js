import router from "./router";
import store from "./store";
import { getShowNav } from "@/utils/navRouter";
import NProgress from "nprogress"; // Progress 进度条
import "nprogress/nprogress.css"; // Progress 进度条样式
import { getQueryVariable } from "@/utils/navRouter";
import { setCookie, getCookie } from "@/utils/cookies";
import { getSession } from "@/utils/mylocal";

let Authorization = getQueryVariable("Authorization"),
  accessKey = getQueryVariable("accessKey"),
  // initSite = getQueryVariable("initSite"),
  returnUrl = getQueryVariable("returnUrl");
//设置网站标识
store.commit("SETAUTHOR", { Authorization, accessKey, returnUrl });

let cookieTime = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
let key_user = getCookie(`${accessKey}_user`);
//操作已识别公司tip
if (key_user != Authorization) {
  //显示tip
  setCookie(`${accessKey}_tipopen`, "true", cookieTime);
}
//设置用户cookie
setCookie(`${accessKey}_user`, Authorization, cookieTime);
//设置当前选中的网站
if (getSession(`${accessKey}_website`)) {
  store.commit("SETWEBSITE", getSession(`${accessKey}_website`));
}

router.beforeEach((to, from, next) => {
  //修改菜单路由切换状态
  if (getShowNav(to.matched[0])) {
    store.commit("SETACTIVE", to);
  }
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
});
