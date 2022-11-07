<template>
  <div class="header">
    <div class="logo">
      <!-- <svg-icon name="logo" className="logo" size="185"></svg-icon> -->
      <img :src="mylogo" alt="">
      <span class="txt"><span class="line1"></span> 运营管理 <span class="tools">Tools</span></span>
    </div>
    <div class="userInfo">
      <span class="info_item">{{ company }}</span>
      <span class="line_v"></span>
      <span class="info_item">{{ url }}</span>
      <span class="line_v"></span>
      <span class="info_item">绑定域名时间：{{ bindTime }}</span>
      <span class="line_v"></span>
      <span class="info_item">最新发布时间：{{ newTime }}</span>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

// logo 
const mylogo = computed(() => {
  return store.state.global.webSiteList.logo;
})

//公司
const company = computed(() => {
  return store.state.global.webSiteList.orgName;
});
//公司
const url = computed(() => {
  return store.state.global.webSiteList.domain;
});
//公司
const bindTime = computed(() => {
  return store.state.global.webSiteList.installTime;
});
//公司
const newTime = computed(() => {
  return store.state.global.webSiteList.publishTime;
});
</script>
<style scoped lang="scss">
.header {
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 6px 0px rgb(0 0 0 / 12%);
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  background-color: RGB(50, 58, 86);
}

.logo {
  max-height: 60px;
  display: flex;
  align-items: center;
  // color: #003b83;
  color: white;
  font-weight: 600;
  font-size: 18px;

  .line1 {
    width: 1.5px;
    // background-color: blue;
    background-color: white;
    margin-right: 10px;
  }

  .txt {
    display: flex;
    white-space: nowrap;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    max-width: 60px;
    max-height: 30px;
    display: inline-block;
    margin-right: 10px;
  }

  .tools {
    font-size: 13px;
    // color: #0064ff;
    border: 1px solid;
    padding: 3px 8px;

    margin-left: 6px;
  }
}

.userInfo {
  // color: #333333;
  color: white;
  font-weight: 400;
  font-size: 14px;

  display: flex;
  align-items: center;

  .info_item {
    margin: 0 18px;
  }

  .line_v {
    display: inline-block;
    width: 0px;
    height: 15px;
    border: 1px solid #e9edf7;
    background-color: #e9edf7;
  }
}

.userLogo {
  margin-right: 10px;
}
</style>
<style lang="scss">
.icon-zhankai {
  font-size: 12px;
  transform: scale(0.6);
}

.el-dropdown-link {
  height: 60px;
  line-height: 60px;

  .icon-zhankai {
    transition: all 0.1s;
  }
}

.el-dropdown-link.active {
  color: #008cff;

  .icon-zhankai {
    transform: scale(0.6) rotate(-180deg);
  }
}

.namedown {
  transform: translate(5px, -12px) !important;
  width: 237px;
  height: 60px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 0px 12px 0px rgba(87, 107, 137, 0.2);

  .el-popper__arrow {
    display: none;
  }

  .el-dropdown-menu__item {
    height: 50px;
    line-height: 50px;
    position: relative;

    .out {
      position: absolute;
      right: 20px;
    }

    a {
      color: rgb(96, 98, 102);
      text-decoration: none;
    }
  }

  .el-dropdown-menu__item:hover {
    a {
      // color: $df_blue;
    }
  }
}
</style>
