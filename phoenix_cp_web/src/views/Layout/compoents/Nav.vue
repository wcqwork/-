<template>
  <div class="leftNav">
    <el-tabs
      tab-position="left"
      style="height: 100%;"
      @tab-click="handleClick"
      class="tablIcon"
      :model-value="tabActive"
    >
      <template v-for="item in routerNav" :key="item.path">
        <template v-if="!!!item.hidden">
          <el-tab-pane :name="item.name">
            <template #label>
              <div class="custom-tabs-label" @click="linkProps(item.name)">
                <el-tooltip
                  class="box-item"
                  effect="customized"
                  :content="item.meta.title"
                  placement="right"
                  :disabled="tabActive == item.name"
                >
                  <el-button
                    ><i class="iconfont navtab-icon" :class="item.meta.icon"></i
                  ></el-button>
                </el-tooltip>
              </div>
            </template>
          </el-tab-pane>
        </template>
      </template>
    </el-tabs>
    <div class="navTabs" v-if="!$store.state.global.showDetail">
      <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical-nav"
        @open="handleOpen"
        @close="handleClose"
        :default-openeds="defaultOpeneds"
        ref="leftmenu"
      >
        <sidebar-item
          v-for="(item, index) in routerNav"
          :key="index"
          :indexKey="index"
          :item="item"
          @linkProps="linkProps"
        />
      </el-menu>
      <!-- 访客情报来源 -->

      <div
        class="source"
        v-show="$store.state.global.tabActive == 'Intelligence'"
      >
        <el-row justify="space-between" style="padding: 0 10px;">
          <strong>来源</strong>
          <div class="source-r" @click="towebmanagement">
            <i class="iconfont icon-guanli"></i>管理<i
              class="iconfont icon-tiaozhuan"
            ></i>
          </div>
        </el-row>
      </div>
    </div>
    <div v-else class="navTabs">
      <!-- <intelligence-list></intelligence-list> -->
    </div>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import SidebarItem from "./SidebarItem.vue";
import { useStore } from "vuex";
export default {
  name: "LayoutNav",
  components: { SidebarItem },
  setup() {
    const defaultOpeneds = ref(["Intelligence", "Manage"]);
    let router = useRouter();
    const store = useStore();
    const { options } = useRouter();
    const routerNav = options.routes;
    let leftmenu = ref(null);
    //切换左侧图标
    const handleClick = () => {
      // console.log(tab.paneName);
      // console.log(event);
    };
    const defaultActive = computed(() => {
      return store.state.global.defaultActive;
    });
    const tabActive = computed(() => {
      return store.state.global.tabActive;
    });
    //左侧点击图标跳转
    const linkProps = (name) => {
      router.push({ name: name });
    };
    const handleOpen = () => {
      // console.log(key, keyPath);
    };
    
    const handleClose = (key, keyPath) => {
      leftmenu.value.open(keyPath);
      console.log(key);
      console.log(keyPath);
    };
    const sourceLink = (query) => {
      router.push({
        path: "/intelligence/source",
        query: { sourceId: query },
      });
    };
    let towebmanagement = () => {
      router.push({
        path: "/manage/webmanagement",
      });
    };
    return {
      leftmenu,
      handleClick,
      routerNav,
      handleOpen,
      handleClose,
      defaultOpeneds,
      linkProps,
      defaultActive,
      tabActive,
      sourceLink,
      towebmanagement,
    };
  },
};
</script>
<style scoped lang="scss">
.leftNav {
  display: flex;
  height: calc(100vh - 60px);
  :deep(.el-tabs.tablIcon) {
    .el-tabs__header {
      margin-right: 0;
      width: 64px;
      > .is-left {
        background-color: RGB(50, 58, 86);
      }
      .el-tabs__active-bar.is-left {
        display: none;
      }
      .el-tabs__nav-wrap::after {
        display: none;
      }
      .el-tabs--left .el-tabs__nav-wrap.is-left::after {
        display: none;
      }
    }
    .el-tabs__item.is-left {
      text-align: center;
      width: 100%;
      padding: 0;
      height: 64px;
      line-height: 64px;
    }
    .el-tabs__item.is-active {
      background: #041527;
      .iconfont {
        opacity: 1;
      }
    }
    .navtab-icon {
      color: #fff;
      font-size: 20px;
      opacity: 0.8;
    }
  }
  .navTabs {
    width: 200px;
        background-color: white;
    :deep(.el-sub-menu__title) {
      .el-sub-menu__icon-arrow {
        display: none;
      }
    }
  }
}
.el-menu-vertical-nav {
  border: 0;
}
.source {
  margin: 10px;
  padding-top: 20px;
  border-top: 1px solid #d8dbe6;
  .source-ul {
    margin-top: 10px;
  }
  .source-li:hover {
    background: #e9edf7;
    border-radius: 4px;
  }
  .source-li.source-active {
    background: #e9edf7;
    font-weight: 600;
    border-radius: 4px;
  }
  .source-li {
    padding: 8px 10px;
    font-size: 14px;
    margin-bottom: 5px;
    cursor: pointer;
    .source-num {
      height: 20px;
      background-color: #5f6884;
      border-radius: 3px;
      text-align: center;
      line-height: 20px;
      color: #fff;
      padding: 0 5px;
      min-width: 28px;
      box-sizing: border-box;
    }
  }
  .source-r {
    font-size: 12px;
    display: flex;
    align-items: center;
    cursor: pointer;
    i {
      font-size: 12px;
    }
  }
}
.Intelligence.source-active {
  :deep(.el-menu-item.is-active .childNav) {
    background-color: transparent;
    font-weight: inherit;
  }
}
:deep(.el-menu-item:hover .childNav) {
  background: #e9edf7;
  border-radius: 4px;
}
:deep(.custom-tabs-label) .el-tooltip__trigger {
  background: transparent;
  border: 0;
}
</style>
