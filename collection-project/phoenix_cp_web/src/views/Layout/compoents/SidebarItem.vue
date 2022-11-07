<template>
  <el-sub-menu :index="item.name" v-if="!!item.children && !!!item.hidden && hasOneShowingChild()"
    v-show="showSidebar == item.name">
    <template #title>
      <span class="navTitle">{{ item.meta.title }}</span>
    </template>
    <!-- 二级菜单 -->
    <template v-for="itemChild in item.children">
      <el-menu-item :key="itemChild.path" :index="itemChild.name" v-if="!!!itemChild.hidden">
        <div class="f-menu-title" v-if="specialMenu[itemChild.name]">
          {{specialMenu[itemChild.name]}}
        </div>
        <div @click="toLinkProps(itemChild.name)" class="childNav">
          <p class="childNav-name" :class="itemChild.name">
            {{ itemChild.meta.title }}
          </p>
        </div>
      </el-menu-item>
    </template>
  </el-sub-menu>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "SidebarItem",
  props: {
    item: {
      type: Object,
    },
    indexKey: {
      type: Number,
    },
  },
  setup(props, { emit }) {
    const store = useStore();
    const getProps = props;
    let specialMenu = {
      'pageDescLib':'系统库',
      'articleLib':'私有库'
    }

    //判断是否存在显示子集菜单
    const hasOneShowingChild = () => {
      if (!getProps.item.children) return false;
      return getProps.item.children.filter((item) => !item.hidden).length
        ? true
        : false;
    };
    //当前选中菜单
    const showSidebar = computed(() => {
      return store.state.global.tabActive;
    });
    //子菜单路由跳转
    const toLinkProps = (name) => {
      emit("linkProps", name);
    };
    return {
      showSidebar,
      hasOneShowingChild,
      toLinkProps,
      specialMenu
    };
  },
};
</script>

<style scoped lang="scss">
.navTitle {
  font-size: 18px;
  color: #333;
  font-weight: bold;
}

.el-sub-menu .el-menu-item {
  padding: 0 !important;
  text-align: left;
  height: auto;
  line-height: 40px;
  margin-bottom: 5px;

  flex-direction: column;

  .childNav {
    width: calc(100% - 40px);
    margin: 0 10px;
    padding: 0 10px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .childNav-name {
      height: 100%;
      color: #343a56;
    }

    .source-num {
      height: 20px;
      background-color: #008cff;
      border-radius: 3px;
      text-align: center;
      line-height: 20px;
      color: #fff;
      padding: 0 5px;
      min-width: 28px;
      box-sizing: border-box;
    }
  }
}

.el-sub-menu .el-menu-item.is-active {
  .childNav {
    background: #e9edf7;
    font-weight: 600;
    border-radius: 4px;
  }
}

.el-menu-item:hover {
  background-color: inherit;
}

.f-menu-title {
  border-top: 1px solid #d8dbe6;
  height: 33px;
  line-height: 26px;
  width: 100%;

  padding-left: 12px;
  box-sizing: border-box;

  opacity: 0.8;
  font-size: 12px;
  font-weight: 400;
  color: #343a56;
}
</style>
