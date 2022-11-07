<template>
  <div class="main-c">
    <router-view v-slot="{ Component }" :key="$store.state.global.rootkey + 1">
      <keep-alive :include="includeList">
          <component
            :is="Component"
            :key="$route.name"
            v-if="$store.state.global.transition"
          ></component>
        </keep-alive>
    </router-view>
  </div>
</template>
<script setup>
import { ref } from "vue";
let includeList = ref(["otherSource", "WatchList", "CompanyCompany"]);
</script>
<style lang="scss" scoped>
.main-c {
  background: RGB(240, 242, 246);
  height: calc(100vh - 60px);
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
}
</style>
