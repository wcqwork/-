<template>
  <div class="main_con">
    <div class="left">
      <div class="top">
        <span>{{ $t('common.zhifu') }}</span>
      </div>
      <div class="bottom">
        <ul>
          <li
            class="nav"
            :class="selected_module === 'payManage' ? 'selected' : ''"
            @click="do_select('payManage')"
          >
            {{ $t('common.zhifufangshiguanli') }}
          </li>
          <li
            class="nav"
            :class="
              selected_module === 'currencyExchangeManage' ? 'selected' : ''
            "
            @click="do_select('currencyExchangeManage')"
          >
            {{ $t('common.huobihuilvguanli') }}
          </li>
        </ul>
      </div>
    </div>
    <div class="right" id="rightContainer">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'payIndex',
  data() {
    return {
      selected_module: 'payManage',
    };
  },
  mounted() {
    const _this = this;
    window.addEventListener(
      'message',
      function (event) {
        if (event.data.message) {
          const url = event.data.message.url || '';
          if (url && url.split('?')[1]) {
            _this.$router.push(`/currencyExchangeManage`);
            _this.selected_module = 'currencyExchangeManage';
          } else {
            _this.$router.push(`/payManage`);
            _this.selected_module = 'payManage';
          }
        }
      },
      false,
    );
  },
  methods: {
    do_select(select_module) {
      this.selected_module = select_module;
      this.$router.push(`/${select_module}`);
    },
  },
};
</script>

<style lang="less" scoped>
.main_con {
  background: white;
  width: 100%;
  height: 100%;
  .left {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 129px;
    height: 100%;
    background: #f1f1f1;
    .top {
      width: 129px;
      height: 72px;
      background: #e8e6e6;
      font-size: 16px;
      display: flex;
      vertical-align: middle;
      justify-content: flex-start;
      align-items: center;
      padding-left: 30px;
      box-sizing: border-box;
    }
    .bottom {
      width: 129px;
      height: calc(100% - 112px);
      .nav {
        width: 100%;
        height: 42px;
        font-size: 12px;
        display: flex;
        vertical-align: middle;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .selected {
        background: white;
      }
    }
  }
  .right {
    position: fixed;
    left: 129px;
    top: 0;
    bottom: 0;
    right: 0;
    overflow-y: auto;
    overflow-x: auto;
  }
}
</style>
