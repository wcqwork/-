<template>
  <div class="common-layout">
    <el-container>
      <el-header><layout-header></layout-header></el-header>
      <el-container>
        <el-aside :class="hasChildsClass"><layout-nav></layout-nav></el-aside>
        <el-container>
          <el-main class="mainBox"><layout-main></layout-main></el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import LayoutHeader from "@/views/Layout/compoents/Header.vue";
import LayoutNav from "@/views/Layout/compoents/Nav.vue";
import LayoutMain from "@/views/Layout/compoents/Main.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  name: "vueLayout",
  components: { LayoutHeader, LayoutNav, LayoutMain },
  setup() {
    const store = useStore();
    //获取网站信息
    store.dispatch("reqSiteLsit");
    //设置菜单类
    const hasChildsClass = computed(() => {
      let selectNavTab = store.state.global.showMenu;
      return {
        hasChildsClass: selectNavTab,
        noChildsClass: !selectNavTab,
      };
    });

    onMounted(() => {});
    return {
      hasChildsClass,
    };
  },
};
</script>
<style scoped lang="scss">
.mainBox {
  padding: 0;
  overflow: hidden;
}
</style>
