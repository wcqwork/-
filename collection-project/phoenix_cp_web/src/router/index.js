
import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'
const Layout = () => import("@/views/Layout/index.vue");

const routes = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/cpManage',
    meta: {
      title: "CP页管理",
      icon: "icon-CPyeguanli",
    },
    children: [
      {
        path: 'cpManage',
        name: 'cpManage',
        component: () => import('@/pages/Manger/cpManage'),
        meta: {
          title: "CP页列表",
          isBack: false,
          pageType: "companyTotal",
        }
      },
      {
        path: 'cpEditor',
        name: 'cpEditor',
        component: () => import('@/pages/Manger/cpEditor'),
        hidden: true,
        meta: {
          title: "CP页编辑"
        },
      },
      {
        path: "generateRecord",
        name: "generateRecord",
        component: () => import("@/pages/Manger/generateRecord"),
        meta: {
          title: "生成记录",
          isBack: false,
          pageType: "interest",
        },
      },
      {
        path: "setup",
        name: "setup",
        component: () => import("@/pages/Manger/setup"),
        meta: {
          title: "设置",
          isBack: false,
          pageType: "setup",
        },
      },
      {
        path: 'cpGenerate',
        name: 'cpGenerate',
        component: () => import('@/pages/Manger/cpGenerate'),
        hidden: true,
        meta: {
          title: "CP页生成"
        },
      },
    ],
  },
  {
    path: "/resource",
    redirect: "/resource/pageDescLib",
    name: "resource",
    meta: {
      title: "共享资源库",
      icon: "icon-gongxiangziyuanku",
    },
    component: Layout,
    children: [
      {
        path: "pageDescLib",
        name: "pageDescLib",
        component: () => import("@/pages/Resource/System/pageDescLib"),
        meta: { title: "页面描述库" },
      },
      {
        path: "commentLib",
        name: "commentLib",
        component: () => import("@/pages/Resource/System/commentLib"),
        meta: { title: "评论库" },
      },
      {
        path: "articleLib",
        name: "articleLib",
        component: () => import("@/pages/Resource/Private/articleLib"),
        meta: { title: "文章库" },
      },
      {
        path: "videoLib",
        name: "videoLib",
        component: () => import("@/pages/Resource/Private/videoLib"),
        meta: { title: "视频库" },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
