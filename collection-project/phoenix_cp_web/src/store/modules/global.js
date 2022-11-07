import { userInfo, getWebsiteInfo } from "@/api/global";
// import { getLogo } from "@/utils/getLogo";

const global = {
  state: {
    Authorization: "",
    accessKey: "", //用户标识
    returnUrl: "", //返回我的网站
    rootkey: new Date().getTime(),
    defaultActive: "", //菜单选中状态
    defaultIntelligence: "", //访客详情-来源，选中控制
    showDetail: false, //显示左侧详情列表
    tabActive: "", //菜单icon选中状态
    breadCrumb: [], //面包屑导航
    showMenu: false, //控制面包屑、菜单显示隐藏
    webSiteSelect: 0,
    webSiteList: [
      {
        orgName: "",
        domain: "",
        installTime:"",
        publishTime:""
      },
    ],
    hoverWebSiteList: false,
    userInfo: "", //用户信息
    defaultLogo: "", //默认头像
    isKeepAlive: false,
    transition: true,
    pageSizeNum:10, // 全局表格分页条数
    pageListParams:{
      searchkeyWords:'',
      searchPageLink:'',
      stateChoose:'',
      orderByField:null,
      orderByMode:null,
      pageCurrent:1
    }
  },
  mutations: {
    // 设置查询参数
    SETPAGELISTPARAMS(state,params){
      state.pageListParams = params;
    },
    // 设置分页条数
    SETPAGESIZE(state,num){
      state.pageSizeNum = num;
    },
    //设置用户信息
    SETAUTHOR(state, data) {
      state.Authorization = data.Authorization;
      state.accessKey = data.accessKey;
      state.returnUrl = decodeURIComponent(data.returnUrl);
    },
    SETROOTKEY(state) {
      state.rootkey = new Date().getTime();
    },
    SETACTIVE(state, to) {
      if (to.meta.keepAlive) {
        state.isKeepAlive = true;
      } else {
        state.isKeepAlive = false;
      }
      state.defaultActive = to.matched[1].name;
      // if(state.defaultActive == 'cpEditor'){
      //   state.defaultActive = "cpManage";
      // }
      state.tabActive = to.matched[0].name;
      //面包屑导航
      state.breadCrumb = to.matched.map((item) => {
        let obj = {
          name: item.name,
          title: item.meta.title,
        };
        return obj;
      });
      //判断显示左侧菜单导航
      let children = to.matched[0].children;
      if (children) {
        let showChildrenLength = children.filter((item) => !item.hidden).length;
        if (showChildrenLength > 1) {
          state.showMenu = true;
        } else {
          state.showMenu = false;
        }
      }
    },
    //设置网站语种
    SETWEBSITE(state, siteUniqueId) {
      state.webSiteSelect = siteUniqueId;
      state.hoverWebSiteList = false;
    },
    HOVER(state, val) {
      state.hoverWebSiteList = val;
    },
    //访客详情-来源选中
    SETMEUN(state, to) {
      state.defaultIntelligence = to;
    },
    SHOWDETAIL(state, val) {
      state.showDetail = val;
    },
    setUserInfo(state, data) {
      state.userInfo = data.user;
    },
    setSiteLsit(state, data) {
      let newList = {
        orgName: data.organizationName || '',
        domain: data.domainRecord || '',
        installTime: data.installTime || '',
        publishTime: data.publishTime || '',
        logo:data.logo || '',
        isPublish:data.isPublish || '',
        hasCpOperateAuth:data.hasCpOperateAuth || false
      };
      // debugger
      state.webSiteList = newList;
    },
    //单页面跳转过渡动画
    setTransition(state) {
      state.transition = false;
      setTimeout(() => {
        state.transition = true;
      }, 300);
    },
  },
  actions: {
    //获取用户信息
    reqUserInfo({ commit }, params) {
      return userInfo(params).then((res) => {
        commit("setUserInfo", res);
      });
    },
    //获取网站信息
    reqSiteLsit({ commit }, params) {
      return getWebsiteInfo(params).then((res) => {
        commit("setSiteLsit", res);
      });
    },
  },
};

export default global;
