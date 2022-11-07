<template>
  <div>
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      :duration="500"
    >
      <div
        class="mask"
        v-show="creditCardTypes_show"
        @click="credit_dialog_control"
      >
        <div class="dialog_con" @click.stop="e_prevent">
          <div class="header">
            <span class="title">{{ $t('exchange.left_button') }}</span>
            <i
              class="el-icon-error icon_close"
              @click="credit_dialog_control"
            ></i>
          </div>
          <div class="search-body">
            <el-form
              :inline="true"
              label-width="0"
              :model="localPaySession"
              class="demo-form-inline"
            >
              <el-form-item>
                <el-select
                  v-model="localPaySession.countryKey"
                  placeholder="国家"
                  @change="searchPaySession"
                >
                  <el-option
                    :label="country.countryName"
                    :value="country.countryKey"
                    v-for="country in countryData"
                    :key="country.countryId"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-select
                  v-model="localPaySession.paySessionName"
                  placeholder="支付方式"
                >
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="mini">查询</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="content">
            <el-checkbox-group v-model="checkboxGroups">
              <div
                v-for="(item, index) in creditCardTypes"
                :key="index"
                class="detail"
              >
                <el-checkbox :label="item"></el-checkbox>
                >
                <img
                  class="credit_logo"
                  :src="require(`../assets/creditCardTypes/${item}.png`)"
                  :alt="item.name"
                />
                <span class="credit_label">{{ item }}</span>
                <span class="credit_label">{{ item }}</span>
              </div>
            </el-checkbox-group>
          </div>
          <div class="btns">
            <div class="add_con">
              <el-checkbox v-model="checkAll" @change="handleCheckAllChange">{{
                $t('common.quanXuan')
              }}</el-checkbox>
            </div>
            <el-button class="sumbit" @click="save_select_credits">{{
              $t('common.tianJia')
            }}</el-button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { postMethods } from '@/config/api';
export default {
  name: 'transitionLocalDialog',
  props: {
    creditCardTypes_show: {
      type: Boolean,
      default: false,
    },
    checkboxGroup: {
      type: Array,
      default: () => {
        return [];
      },
    },
    creditCardTypes: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      localPaySession: {
        countryKey: '',
        paySessionName: '',
      },
      countryData: [],
    };
  },
  computed: {
    checkboxGroups: {
      get() {
        return this.checkboxGroup;
      },
      set(val) {
        this.$emit('update:checkboxGroup', val);
      },
    },
    checkAll: {
      get() {
        return this.creditCardTypes.length === this.checkboxGroup.length;
      },
      set() {},
    },
  },
  mounted() {
    postMethods('get', '/shoppay_v2/paysession/country/query', {}).then(
      response => {
        // console.log(response)
        if (response.data.message === 'SUCCESS') {
          this.countryData = response.data.result;
        }
      },
    );
  },
  methods: {
    searchPaySession() {
      postMethods('get', '/shoppay_v2/paysession/query', {
        countryKey: this.localPaySession.countryKey,
        paySessionName: this.localPaySession.paySessionName,
      }).then(response => {
        console.log(response);
      });
    },
    handleCheckAllChange(val) {
      if (val) {
        let temp = [];
        this.creditCardTypes.map(param => {
          temp.push(param);
        });
        this.$emit('update:checkboxGroup', temp);
      } else {
        this.$emit('update:checkboxGroup', []);
      }
    },
    save_select_credits() {
      this.$emit('save_select_credits');
    },
    credit_dialog_control() {
      this.$emit('credit_dialog_control');
    },
    e_prevent() {
      this.$emit('e_prevent');
    },
  },
};
</script>
<style lang="less" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  .dialog_con {
    width: 432px;
    height: auto;
    background: #ffffff;
    border-radius: 10px;
    position: absolute;
    top: calc(50% - 250px);
    left: calc(50% - 247px);
    .header {
      width: 100%;
      height: 56px;
      padding: 16px 15px 16px 24px;
      box-sizing: border-box;
      .title {
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        line-height: 16px;
      }
      .icon_close {
        float: right;
        font-size: 20px;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.39);
      }
    }
    /deep/.el-checkbox__inner {
      width: 16px;
      height: 16px;
    }
    .search-body {
      text-align: center;
      /deep/.el-select {
        width: 150px;
        height: 32px;
      }
      /deep/.el-input__inner {
        height: 32px;
      }
    }
    .content {
      padding: 0 24px;
      border-top: 1px solid rgba(0, 0, 0, 0.06);
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      height: 370px;
      box-sizing: border-box;
      overflow: auto;
      .detail {
        width: 100%;
        height: 68px;
        border-bottom: 1px solid rgba(217, 217, 217, 0.5);
        display: flex;
        align-items: center;
        flex-direction: row;
        /deep/.el-checkbox__label {
          display: none;
        }
        .credit_logo {
          width: 50px;
          height: 34px;
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          background-repeat: round;
          margin-left: 30px;
        }
        .credit_label {
          display: inline-block;
          width: 80px;
          overflow: hidden;
          font-size: 16px;
          font-family: ArialMT;
          color: rgba(0, 0, 0, 0.8);
          line-height: 18px;
          margin-left: 40px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .btns {
      width: 380px;
      height: 68px;
      box-sizing: border-box;
      padding-top: 15px;
      padding-right: 24px;
      padding-left: 20px;
      display: flex;
      justify-content: space-between;
      .add_con {
        height: 38px;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: rgba(0, 0, 0, 0.65);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .sumbit {
        width: 85px;
        height: 38px;
        background: #1890ff;
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: white;
      }
    }
  }
}
</style>