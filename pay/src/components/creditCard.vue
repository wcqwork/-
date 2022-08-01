<template>
  <div class="creditcard-container">
    <div class="method_details">
      <div class="logo_con AllinPay_logo">
        <img
          :src="payTypeObject.logoSrc"
          alt=""
          style="width: 100%; height: 100%"
        />
      </div>
      <div class="center_con">
        <div
          class="detail1"
          :style="!isShowCredit ? { lineHeight: '78px' } : ''"
        >
          {{ payTypeObject.payTypeName && payTypeObject.payTypeName.split(',')[0] }}
        </div>
        <div class="operate" v-if="isShowCredit && (!payTypeObject || payTypeObject.payProperty.length == '' || (payTypeObject && payTypeObject.usingStatus == 1))">
          <span
            @click="to_location"
            style="cursor: pointer"
            v-if="!payTypeObject || payTypeObject.payProperty.length == ''"
            >{{ $t('common.quKaiTong') }}</span
          >
          <i
            class="el-icon-arrow-right"
            @click="to_location"
            style="cursor: pointer"
            v-if="!payTypeObject || payTypeObject.payProperty.length == ''"
          ></i>
          <span
            class="using"
            v-if="payTypeObject && payTypeObject.usingStatus == 1"
            >{{ $t('common.shiYongZhong') }}</span
          >
        </div>
      </div>
      <div class="button_con">
        <el-button
          class="active_button"
          v-if="
            payTypeObject &&
            payTypeObject.usingStatus != 1 &&
            payTypeObject.payProperty != ''
          "
          @click="activeCard(payTypeObject)"
        >
          <span>{{ $t('exchange.qiyong') }}</span>
        </el-button>
        <el-button
          class="sumbit_button"
          v-if="!payTypeObject || payTypeObject.payProperty == ''"
          @click="showControl(payTypeObject)"
        >
          <span
            >{{ $t('common.bangDingZhangHao') }}
            <i
              :class="
                payTypeObject.Pay_info_show ? 'triangle_up' : 'triangle_down'
              "
            ></i
          ></span>
        </el-button>
        <el-button
          class="stop_button"
          v-if="payTypeObject && payTypeObject.usingStatus == 1"
          @click="stopCard(payTypeObject)"
        >
          <span>{{ $t('common.tingYong') }}</span>
        </el-button>
        <el-button
          class="open_button"
          @click="showControl(payTypeObject)"
          v-if="payTypeObject && payTypeObject.payProperty != ''"
        >
          <span>{{ $t('common.gengduo') }}</span>
          <i
            :class="
              payTypeObject.Pay_info_show ? 'triangle_up' : 'triangle_down'
            "
          ></i>
        </el-button>
      </div>
    </div>
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      :duration="1000"
    >
      <div class="paypal_infos_con" v-show="payTypeObject.Pay_info_show">
        <div class="cons" v-if="isShowCredit">
          <slot name="cardInfo"></slot>
          <div class="title">{{ $t('exchange.left_title') }}：</div>
          <div
            class="cards"
            v-if="
              payTypeObject &&
              payTypeObject.payProperty &&
              payTypeObject.payProperty.selectedCreditCardList
            "
          >
            <div
              v-for="item in payTypeObject.payProperty.selectedCreditCardList"
              :key="item"
              class="card"
            >
              <img
                class="card_img"
                :src="get_creditCardType(item)"
                :alt="item.name"
              />
            </div>
          </div>
          <div class="cards" v-else></div>
          <div class="type_con">
            <el-button
              class="sumbit_button"
              :disabled="!payTypeObject || payTypeObject.payProperty == ''"
              @click="credit_dialog_control(payTypeObject)"
            >
              {{ $t('exchange.left_button') }}
            </el-button>
          </div>
        </div>
        <slot name="textInner"></slot>
        <div
          class="cons left"
          v-if="
            !payTypeObject ||
            payTypeObject.payProperty == '' ||
            payTypeObject.Pay_change
          "
        >
          <!-- <div class="title">{{ $t('common.zhangHuXinXi') }}：</div> -->
          <slot name="form"></slot>
        </div>
        <div class="cons left" v-else>
          <slot name="formInfo"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'creditCard',
  props: {
    payTypeObject: {
      type: Object,
      default: () => {
        return {};
      },
    },
    registerUrl: {
      type: String,
      default: 'https://dashboard.stripe.com/register',
    },
    isShowCredit: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    // 页面跳转
    to_location() {
      parent.open(this.registerUrl, '_blank');
    },
    showControl(item) {
      this.$emit('showControl', item);
    },
    get_creditCardType(val) {
      try {
        let res = require(`../assets/creditCardTypes/${val}.png`);
        return res;
      } catch (error) {
        return require(`../assets/nodata.png`);
      }
    },
    //stripe信用卡绑定弹窗
    credit_dialog_control(item) {
      this.$emit('credit_dialog_control', item);
    },
    stopCard(item) {
      this.$emit('stopCard', item);
    },
    activeCard(item) {
      this.$emit('activeCard', item);
    },
  },
};
</script>
<style lang="less" scoped>
.creditcard-container {
 margin-bottom: 16px;
.method_details {
  width: 100%;
  background: #f6f8fe;
  padding: 16px 25px;
  box-sizing: border-box;
  overflow: hidden;
  .logo_con {
    width: 154px;
    height: 70px;
    border-radius: 6px;
    float: left;
  }
  // .stripe_logo {
  //   background: url('../assets/stripe_logo.png') round;
  // }
  // .AllinPay_logo {
  //   background: url('../assets/AllinPay_logo.png') round;
  // }
  .center_con {
    width: calc(100% - 200px - 131px - 130px);
    height: 70px;
    padding-left: 60px;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .detail1 {
      font-size: 18px;
      font-family: Arial-BoldMT, Arial;
      color: #343a56;
      font-weight: 600;
    }
    .operate {
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: #008cff;
      margin-top: 12px;
      .using {
        background: #4dcb73;
        border-radius: 13px;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #ffffff;
        line-height: 26px;
        display: inline-block;
        padding: 0 13px 0 28px;
        position: relative;
      }
      .using::before {
        content: '';
        width: 12px;
        height: 12px;
        background: #ffffff;
        opacity: 0.3;
        border-radius: 50%;
        position: absolute;
        top: 7px;
        left: 11px;
        display: block;
      }
    }
  }
  .button_con {
    width: 220px;
    height: 70px;
    float: right;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-right: 20px;
    .sumbit_button {
      width: 132px;
      height: 45px;
      background: #ffffff;
      border-radius: 4px;
      border: 1px solid #eaeaea;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: #666666;
      line-height: 21px;
    }
    .stop_button {
      background: #ff2600;
      border-radius: 4px;
      border: 1px solid #eaeaea;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: #ffffff;
    }
    .active_button {
      background: #4dcb73;
      border-radius: 4px;
      border: 1px solid #eaeaea;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: #ffffff;
    }
    .open_button {
      background: #ffffff;
      border-radius: 4px;
      width: 100px;
      height: 45px;
      font-family: ArialMT;
      font-size: 16px;
      color: #666666;
    }
    .triangle_up {
      width: 13px;
      height: 8px;
      background: url('../assets/icon/triangle.png') round;
      margin-left: 15px;
      display: inline-block;
    }
    .triangle_down {
      width: 13px;
      height: 8px;
      background: url('../assets/icon/triangle.png') round;
      margin-left: 15px;
      display: inline-block;
      transform: rotate(180deg);
    }
  }
}
.paypal_infos_con {
  width: 100%;
  box-sizing: border-box;
  background: #ecf0f8;
  border: 1px solid #f8fafe;
  padding: 40px 50px 50px 50px;
  overflow: hidden;
  .cons {
    width: calc(50% - 1px);
    min-height: 197px;
    float: left;
    border-right: 1px dotted rgba(151, 151, 151, 0.7);
    box-sizing: border-box;
    position: relative;
    .title {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: #666666;
      display: inline-block;
      padding-right: 10%;
      box-sizing: border-box;
      .help {
        font-size: 12px;
        color: #008cff;
        margin-left: 184px;
        cursor: pointer;
      }
    }
    .cards {
      width: 100%;
      height: auto;
      margin-top: 10px;
      box-sizing: border-box;
      overflow: hidden;
      .card {
        width: 35px;
        height: 24px;
        float: left;
        margin-left: 10px;
        margin-top: 10px;
        .card_img {
          width: 100%;
          height: 100%;
        }
      }
      .card:first-child {
        margin-left: 0;
      }
    }
    .type_con {
      width: 100%;
      height: 36px;
      margin-top: 30px;
      .sumbit_button {
        width: 158px;
        height: 36px;
        background: #f6f8fe;
        border-radius: 4px;
        border: 1px solid #eaeaea;
      }
    }
    .infos {
      width: 100%;
      height: 56px;
      /deep/.el-form-item__label {
        font-size: 14px !important;
        font-family: MicrosoftYaHei;
        color: #343a56 !important;
        line-height: 24px !important;
        margin-top: 8px;
      }
      /deep/.el-form-item__error {
        top: 10px;
        left: 281px;
      }
      .inputs {
        width: 274px;
        height: 32px;
        border-radius: 4px;
        /deep/.el-input__inner {
          height: 32px !important;
          line-height: 32px !important;
        }
      }
      .label {
        width: 84px;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #343a56;
        line-height: 56px;
        text-align: right;
        vertical-align: middle;
        display: inline-block;
        white-space: nowrap;
      }
      .content {
        width: calc(100% - 140px);
        font-size: 16px;
        font-family: ArialMT;
        color: #343a56;
        line-height: 56px;
        margin-left: 10px;
        text-align: left;
        text-overflow: ellipsis;
        overflow: hidden;
        display: inline-block;
        vertical-align: middle;
      }
    }
    .buttons {
      width: 100%;
      height: 36px;
      padding-left: 100px;
      position: absolute;
      left: 0;
      bottom: 0;
      .sumbit_button {
        width: 97px;
        height: 36px;
        background: #008cff;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 20px;
      }
      .cancel_button {
        width: 97px;
        height: 36px;
        background: #ffffff;
        border: 1px solid #eaeaea;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        line-height: 20px;
      }
      /deep/.el-button {
        padding: 5px 20px;
      }
    }
    .card-type {
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: #666666;
      margin-bottom: 15px;
      a {
        text-decoration: underline;
        color: #008cff;
      }
    }
  }
  .cons.left {
    width: 50%;
    border-right: 0;
    padding-left: 50px;
  }
}
  
}
</style>