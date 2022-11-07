<template>
  <el-breadcrumb separator="/" v-if="showMenu">
    <el-breadcrumb-item
      v-for="item in breadCrumb"
      :key="item.name"
      :to="{ name: item.name }"
      >{{ item.title }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";
export default {
  name: "breadCrumb",
  setup() {
    const store = useStore();
    let storeLsit = reactive(store.state.global);
    return {
      ...toRefs(storeLsit),
    };
  },
};
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  margin-bottom: 20px;
}
</style>
