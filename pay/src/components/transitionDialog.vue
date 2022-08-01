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
export default {
  name: 'transitionDialog',
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
  computed:{
    checkboxGroups:{
       get(){
           return this.checkboxGroup
       },
       set(val){
        this.$emit('update:checkboxGroup', val);
       }
    },
    checkAll:{
        get(){
            return this.creditCardTypes.length === this.checkboxGroup.length
        },
        set(){
        }
    }
  },
  methods: {
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
    }
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
    width: 380px;
    height: 495px;
    background: #ffffff;
    border-radius: 10px;
    position: absolute;
    top: calc(50% - 250px);
    left: calc(50% - 247px);
    .header {
      width: 380px;
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
          font-size: 16px;
          font-family: ArialMT;
          color: rgba(0, 0, 0, 0.8);
          line-height: 18px;
          margin-left: 40px;
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