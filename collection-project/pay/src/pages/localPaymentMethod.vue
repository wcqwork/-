<template>
  <div class="main">
    <div class="top" :class="isFixd?'fix-container':''">
      <span @click="to_url('/payManage')" class="top-title" style="cursor: pointer"
        ><i class="el-icon-arrow-left"></i>
        {{ $t('common.fanHuiShouKuanYe') }}</span
      >
    </div>
    <div class="page-title-container"  :class="isFixd?'fix-mt93':''">
      <span class="title">{{ $t('common.xuanzeshoukuanfangshi') }}</span>
      <span class="desc">{{ $t('localPaymentMethod.localInnerTitle') }}</span>
    </div>
    <!-- <div class="method_details">
        <div class="logo_con"></div>
        <div class="center_con">
          <div class="detail1">
            <span>通过</span> Payssion
            <span class="info"
              >可一站接收欧洲，中东，东南亚，南美等全球200多种本地支付</span
            >
          </div>
          <div class="operate">
            <span class="span1">如何申请接入</span> <span>Payssion </span>
            <span>去查看</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
        <div class="button_con">
          <el-button class="sumbit_button">
            <span>绑定账号 <i class="el-icon-caret-bottom"></i></span>
          </el-button>
        </div>
      </div>
      <div class="paypal_infos_con">
        <div class="cons">
          <div class="title">接受信用卡类型：</div>
          <div class="cards">
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
          </div>
          <div class="type_con">
            <el-button class="sumbit_button" @click="credit_dialog_control">
              添加本地支付方式
            </el-button>
          </div>
        </div>
        <div class="cons">
          <div class="title">PAYSSION账号：</div>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <div class="infos">
              <el-form-item label="API Key" prop="code">
                <el-input
                  v-model="ruleForm.name"
                  class="inputs"
                  placeholder="请输入您的支付商户号"
                ></el-input>
              </el-form-item>
            </div>
            <div class="infos">
              <el-form-item label="SecretKey" prop="key">
                <el-input
                  v-model="ruleForm.key"
                  class="inputs"
                  placeholder="请输入您的密钥"
                ></el-input>
              </el-form-item>
            </div>
            <div class="buttons">
              <el-button class="sumbit_button"> 绑定 </el-button>
              <el-button class="cancel_button"> 取消 </el-button>
            </div>
          </el-form>
        </div>
      </div> -->
    <div class="bottom">
      <creditCard
        :payTypeObject="payTypeObject"
        @showControl="showControl"
        :isShowCredit="false"
        v-for="payTypeObject in Alipay"
        @activeCard="activeCard"
        @stopCard="stopCard"
        :key="payTypeObject.payTypeId"
      >
        <!-- 支付宝 -->
        <template>
          <template slot="textInner">
            <div class="cons">
              <p class="text-desc">
                {{ $t('localPaymentMethod.localFormDesc1') }}
              </p>
              <p class="text-desc">
                {{ $t('localPaymentMethod.localFormDesc2') }}
                <!-- 适用于中国市场的收款方式 -->
              </p>
            </div>
          </template>
          <template slot="form">
            <div class="title">{{ $t('common.zhangHaoXinXi') }}：</div>
            <!-- <div class="paypal_infos_con"> -->
            <el-form
              :model="AliPayForm1"
              :rules="AliPayRules1"
              ref="AliPayForm1"
              class="demo-ruleForm"
              labelPosition="right"
              label-width="auto"
            >
              <div class="infos">
                <el-form-item
                  prop="AliPatAppId"
                  :label="$t('localPaymentMethod.localFormLabel1')"
                >
                  <el-input
                    v-model="AliPayForm1.AliPatAppId"
                    class="inputs"
                    :placeholder="
                      $t('common.qingShuRu') +
                      $t('localPaymentMethod.localFormLabel1')
                    "
                  ></el-input>
                </el-form-item>
              </div>
              <div class="infos">
                <el-form-item
                  prop="AliPayKey"
                  :label="$t('localPaymentMethod.localFormLabel2')"
                >
                  <el-input
                    v-model="AliPayForm1.AliPayKey"
                    class="inputs"
                    :placeholder="
                      $t('common.qingShuRu') +
                      $t('localPaymentMethod.localFormLabel2')
                    "
                  ></el-input>
                </el-form-item>
              </div>
              <div class="infos">
                <el-form-item
                  prop="AliPayPublicKey"
                  :label="$t('localPaymentMethod.localFormLabel3')"
                >
                  <el-input
                    v-model="AliPayForm1.AliPayPublicKey"
                    class="inputs"
                    :placeholder="
                      $t('common.qingShuRu') +
                      $t('localPaymentMethod.localFormLabel3')
                    "
                  ></el-input>
                </el-form-item>
              </div>

              <div class="buttons">
                <el-button
                  class="sumbit_button"
                  @click="
                    sumbit_Pay(payTypeObject, 'AliPayForm1', {
                      AliPayPublicKey: '',
                      AliPatAppId: '',
                      AliPayKey: '',
                    })
                  "
                >
                  {{ $t('common.bangDing') }}
                </el-button>
                <el-button
                  class="cancel_button"
                  v-if="payTypeObject && payTypeObject.Pay_change"
                  @click="cancel_Change(payTypeObject, 'AliPayForm1')"
                >
                  {{ $t('common.quXiao') }}
                </el-button>
              </div>
            </el-form>
            <!-- </div> -->
          </template>
          <template slot="formInfo">
            <div class="title">{{ $t('common.zhangHaoXinXi') }}：</div>
            <div class="infos">
              <span class="label"
                >{{ $t('localPaymentMethod.localFormLabel1') }}：</span
              >
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.AliPatAppId : ''
              }}</span>
            </div>
            <div class="infos">
              <span class="label"
                >{{ $t('localPaymentMethod.localFormLabel2') }}：</span
              >
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.AliPayKey : ''
              }}</span>
            </div>
            <div class="infos">
              <span class="label"
                >{{ $t('localPaymentMethod.localFormLabel3') }}：</span
              >
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.AliPayPublicKey : ''
              }}</span>
            </div>
            <div class="buttons" style="margin-top: 30px">
              <el-button
                class="sumbit_button"
                @click="
                  Pay_change(payTypeObject, 'AliPayForm1', {
                    AliPayPublicKey: '',
                    AliPatAppId: '',
                    AliPayKey: '',
                  })
                "
              >
                {{ $t('common.gengHuanZhangHu') }}
              </el-button>
              <el-button
                class="cancel_button"
                @click="
                  unbind_Pay(payTypeObject, 'AliPayForm1', {
                    AliPayPublicKey: '',
                    AliPatAppId: '',
                    AliPayKey: '',
                  })
                "
              >
                {{ $t('common.jieBang') }}
              </el-button>
            </div>
          </template>
        </template>
      </creditCard>
    </div>
    <!-- 绑定本地支付弹框 -->
    <transitionLocalDialog
      :creditCardTypes_show="creditCardTypes_show"
      :checkboxGroup.sync="checkboxGroup"
      :creditCardTypes="creditCardTypes"
      @save_select_credits="save_select_credits"
      @credit_dialog_control="credit_dialog_control"
    ></transitionLocalDialog>
  </div>
</template>

<script>
import transitionLocalDialog from '../components/transitionLocalDialog.vue';
import creditCard from '@/components/creditCard';
import mixins from '@/Mixins/card';
import watchpageSroll from '@/Mixins/watchpageSroll';
import { postMethods } from '@/config/api';

export default {
  name: 'payManage',
  data() {
    return {
      ruleForm: {
        code: '',
        key: '',
      },
      rules: {
        code: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
        key: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
      },
      AliPayForm1: {
        AliPayPublicKey: '',
        AliPatAppId: '',
        AliPayKey: '',
      },
      creditCardTypes: require('../assets/data/creditCardTypes.json'),
      creditCardTypes_show: false,
      payProperty: {},
      checkboxGroup: [],
      countryData: [],
      Alipay: [],
      AliPayRules1: {
        AliPayPublicKey: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
        AliPatAppId: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
        AliPayKey: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
      },
      oldForm: {},
    };
  },
  mixins: [mixins, watchpageSroll],
  components: { transitionLocalDialog, creditCard },
  mounted() {
    if (this.$route.params.data && this.$route.params.data.length) {
      let Alipay = JSON.parse(this.$route.params.data).filter(
        ele => Number(ele.payGroup) === 2,
      );
      // console.log(Alipay);
      if (Alipay && Alipay.length) {
        this.Alipay = Alipay.map(ele => {
          ele.payProperty = ele.payProperty ? ele.payProperty : {};
          ele.payTypeName = '支付宝';
          ele.logoSrc = require('@/assets/AliPay.png');
          ele.Pay_info_show = false;
          ele.Pay_change = false;
          return ele;
        });

        // this.$set(this.Alipay)
      } else {
        this.$message.warning('暂无本地支付方式');
        setTimeout(() => {
          this.$router.back();
        }, 1000);
      }
      // console.log(this.Alipay);
    }
  },
  methods: {
    //stripe信用卡绑定弹窗
    credit_dialog_control() {
      this.creditCardTypes_show = !this.creditCardTypes_show;
      if (this.creditCardTypes_show) {
        this.checkboxGroup = this.payProperty.selectedCreditCardList || [];
      }
    },
    save_select_credits() {
      this.creditCardTypes_show = !this.creditCardTypes_show;
      // if (
      //   !this[this.credit_editing] ||
      //   this[this.credit_editing].payProperty == '' ||
      //   !this[this.credit_editing].payProperty
      // ) {
      //   return;
      // }

      // updatepayproperty({
      //   payTypeId: this[this.credit_editing].payTypeId,
      //   payProperty: JSON.stringify(this[this.credit_editing].payProperty),
      // })
      //   .then(res => {
      //     if (res.data.message === 'SUCCESS') {
      //       this.$message({
      //         showClose: true,
      //         message: this.$t('operate.caoZuoChengGong'),
      //         type: 'success',
      //       });
      //       this.creditCardTypes_show = false;
      //          this[this.credit_editing].payProperty.selectedCreditCardList =
      //   this.checkboxGroup;
      //     } else {
      //       this.$message.error(this.$t('request.error1'));
      //       this[this.credit_editing].payProperty.selectedCreditCardList = [];
      //     }
      //   })
      //   .catch(() => {
      //     this.$message.error(this.$t('request.error1'));
      //     this[this.credit_editing].payProperty.selectedCreditCardList = [];
      //   });
    },
    to_url(url) {
      // if (data) {
      //   this.$router.push({ path: url, query: { data: data } });
      // } else {
      //   this.$router.push(url);
      // }
      // this.$router.back();
       this.$router.push(url);
    },
    // 启用
    activeCard(item) {
      this.$confirm(
        this.$t('exchange.confirm3'),
        this.$t('exchange.confirm4'),
        {
          confirmButtonText: this.$t('common.queDing'),
          cancelButtonText: this.$t('common.quXiao'),
          type: 'warning',
          customClass: 'confrim_costom',
        },
      )
        .then(async () => {
          try {
            let result = await postMethods(
              'post',
              '/shoppay_v2/activelocalstatus',
              {
                payTypeId: item.payTypeId,
              },
            );
            if (result.data.message === 'SUCCESS') {
              this.Alipay.forEach(ele => {
                if (ele.payTypeId === item.payTypeId) {
                  ele.usingStatus = 1;
                }
              });
            } else {
              this.$message.error(this.$t('request.error1'));
            }
          } catch (error) {
            this.$message.error(this.$t('request.error1'));
          }
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: this.$t('operate.yiQuXiaoCaoZuo'),
          });
        });
    },
    // 停用
    stopCard(item) {
      console.log(item);
      this.$confirm(
        this.$t('exchange.confirm1'),
        this.$t('exchange.confirm2'),
        {
          confirmButtonText: this.$t('common.queDing'),
          cancelButtonText: this.$t('common.quXiao'),
          type: 'warning',
          customClass: 'confrim_costom',
        },
      )
        .then(async () => {
          try {
            let result = await postMethods(
              'post',
              '/shoppay_v2/inactivelocalstatus',
              {
                payTypeId: item.payTypeId,
              },
            );
            if (result.data.message === 'SUCCESS') {
              this.Alipay.forEach(ele => {
                if (ele.payTypeId === item.payTypeId) {
                  ele.usingStatus = 0;
                }
              });
            } else {
              this.$message.error(this.$t('request.error1'));
            }
          } catch (error) {
            this.$message.error(this.$t('request.error1'));
          }
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: this.$t('operate.yiQuXiaoCaoZuo'),
          });
        });
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  min-width: 947px;
  .page-title-container {
    margin: 24px 0;
    color: #343a56;
    font-family: MicrosoftYaHei;
    margin-left: 30px;
    .title {
      font-size: 18px;
      margin-right: 14px;
    }
    .desc {
      font-size: 14px;
    }
  }
  .top {
    width: calc(100% - 30px);
    height: 72px;
    background: #f1f1f1;
    font-size: 18px;
    display: flex;
    vertical-align: middle;
    justify-content: flex-start;
    align-items: center;
    padding-left: 30px;
    border-bottom: 1px solid #dddfe3;
    font-weight: bold;
    .top-title {
      font-size: 18px;
      font-weight: bold;
      color: #000;
    }
    a {
      font-size: 18px;
      font-weight: bold;
      color: #000;
      text-decoration: none;
    }
  }
  .bottom {
    width: 100%;
    height: calc(100% - 74px);
    padding: 30px;
    box-sizing: border-box;
    overflow: auto;
    padding-top: 0;
    .main_title_con {
      width: 100%;
      height: 25px;
      .main_title {
        font-size: 20px;
        font-family: MicrosoftYaHei;
        color: #343a56;
        line-height: 26px;
      }
      .subtitle {
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #343a56;
        line-height: 19px;
        margin-left: 18px;
      }
    }
    .method_details {
      width: 100%;
      background: #f6f8fe;
      margin-top: 16px;
      padding: 16px 25px;
      box-sizing: border-box;
      overflow: hidden;
      .logo_con {
        width: 154px;
        height: 70px;
        border-radius: 6px;
        float: left;
      }
      .stripe_logo {
        background: url('../assets/stripe_logo.png') round;
      }
      .AllinPay_logo {
        background: url('../assets/AllinPay_logo.png') round;
      }
      .center_con {
        width: calc(100% - 180px - 131px - 130px);
        height: 70px;
        padding-left: 60px;
        float: left;
        .detail1 {
          font-size: 26px;
          font-family: Arial-BoldMT, Arial;
          color: #343a56;
          line-height: 38px;
        }
        .operate {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #008cff;
          line-height: 26px;
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
          margin-top: 12px;
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
          margin-top: 12px;
        }
        .open_button {
          background: #ffffff;
          border-radius: 4px;
          width: 100px;
          height: 45px;
          font-family: ArialMT;
          font-size: 16px;
          color: #666666;
          margin-top: 30px;
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
  }
  .paypal_infos_con {
    width: 100%;
    box-sizing: border-box;
    background: #ecf0f8;
    padding: 40px 50px 50px 50px;
    overflow: hidden;
    .cons {
      width: calc(50% - 1px);
      float: left;
      border-right: 1px dotted rgba(151, 151, 151, 0.7);
      box-sizing: border-box;
      position: relative;
      min-height: 197px;
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
          width: 50px;
          height: 34px;
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
        height: 40px;
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
          width: 120px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #343a56;
          line-height: 40px;
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
          line-height: 40px;
          margin-left: 10px;
          text-align: left;
          text-overflow: ellipsis;
          overflow: hidden;
          display: inline-block;
          vertical-align: middle;
        }
      }
      .buttons {
        padding-left: 100px;
        margin-top: 10px;
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
  .text-desc {
    font-size: 14px;
    color: #666666;
  }
}
// .main {
//   width: 100%;
//   height: 100%;

//   .page-title-container {
//     margin: 24px 0;
//     color: #343a56;
//     font-family: MicrosoftYaHei;
//     margin-left: 30px;
//     .title {
//       font-size: 18px;
//       margin-right: 14px;
//     }
//     .desc {
//       font-size: 14px;
//     }
//   }
//   .infos {
//     width: 100%;
//     height: 40px;
//     min-width: 450px;
//     /deep/.el-form-item__label {
//       font-size: 14px !important;
//       font-family: MicrosoftYaHei;
//       color: #343a56 !important;
//       line-height: 24px !important;
//       margin-top: 8px;
//     }
//     /deep/.el-form-item__error {
//       top: 10px;
//       left: 281px;
//     }
//     .inputs {
//       width: 274px;
//       height: 32px;
//       border-radius: 4px;
//       /deep/.el-input__inner {
//         height: 32px !important;
//         line-height: 32px !important;
//       }
//     }
//     .label {
//       width: 84px;
//       font-size: 14px;
//       font-family: MicrosoftYaHei;
//       color: #343a56;
//       line-height: 40px;
//       text-align: right;
//       vertical-align: middle;
//       display: inline-block;
//       white-space: nowrap;
//     }
//     .content {
//       width: calc(100% - 140px);
//       font-size: 16px;
//       font-family: ArialMT;
//       color: #343a56;
//       line-height: 40px;
//       margin-left: 10px;
//       text-align: left;
//       text-overflow: ellipsis;
//       overflow: hidden;
//       display: inline-block;
//       vertical-align: middle;
//     }
//   }
//   .top {
//     width: 100%;
//     height: 72px;
//     background: #f1f1f1;
//     font-size: 18px;
//     display: flex;
//     vertical-align: middle;
//     justify-content: flex-start;
//     align-items: center;
//     font-weight: bold;
//     padding-left: 30px;
//     border-bottom: 1px solid #dddfe3;
//     box-sizing: border-box;
//   }
//   .bottom {
//     width: 100%;
//     height: calc(100% - 112px);
//     padding: 30px;
//     padding-top: 0;
//     box-sizing: border-box;
//     .main_title_con {
//       width: 100%;
//       height: 25px;
//       .main_title {
//         font-size: 20px;
//         font-family: MicrosoftYaHei;
//         color: #343a56;
//         line-height: 26px;
//       }
//       .subtitle {
//         font-size: 14px;
//         font-family: MicrosoftYaHei;
//         color: #343a56;
//         line-height: 19px;
//         margin-left: 18px;
//       }
//     }
//     .method_details {
//       width: 100%;
//       background: #f1f1f1;
//       margin-top: 30px;
//       padding: 25px;
//       box-sizing: border-box;
//       overflow: hidden;
//       .logo_con {
//         width: 154px;
//         height: 70px;
//         border-radius: 6px;
//         float: left;
//         background: url('../assets/payssion.png') round;
//       }
//       .center_con {
//         width: 770px;
//         height: 70px;
//         padding-left: 60px;
//         float: left;
//         .detail1 {
//           font-size: 26px;
//           font-family: Arial-BoldMT, Arial;
//           font-weight: bold;
//           color: #343a56;
//           line-height: 38px;
//         }
//         .operate {
//           font-size: 14px;
//           font-family: MicrosoftYaHei;
//           color: #008cff;
//           line-height: 26px;
//           .span1 {
//             color: #343a56;
//           }
//         }
//         .info {
//           font-size: 14px;
//           font-family: MicrosoftYaHei;
//           color: #343a56;
//           line-height: 19px;
//           font-weight: normal;
//         }
//       }
//       .button_con {
//         width: 131px;
//         height: 70px;
//         float: right;
//         .sumbit_button {
//           width: 132px;
//           height: 45px;
//           background: #ffffff;
//           border-radius: 4px;
//           border: 1px solid #eaeaea;
//           font-size: 16px;
//           font-family: MicrosoftYaHei;
//           color: #666666;
//           line-height: 21px;
//           margin-top: 12px;
//         }
//       }
//     }
//     .paypal_infos_con {
//       width: 100%;
//       box-sizing: border-box;
//       background: #ecf0f8;
//       padding: 40px 50px 50px 50px;
//       overflow: hidden;
//       .cons {
//         width: calc(50% - 1px);
//         height: 197px;
//         float: left;
//         border-right: 1px solid rgba(151, 151, 151, 0.7);
//         box-sizing: border-box;
//         .title {
//           width: 100%;
//           height: 40px;
//           line-height: 40px;
//           font-size: 16px;
//           font-family: MicrosoftYaHei;
//           color: #666666;
//           display: inline-block;
//           padding-right: 10%;
//           box-sizing: border-box;
//         }
//         .cards {
//           width: 100%;
//           height: 34px;
//           margin-top: 20px;
//           .card {
//             width: 50px;
//             height: 34px;
//             float: left;
//             background: url('../assets/PayPal_logo.png') round;
//             margin-left: 10px;
//           }
//           .card:first-child {
//             margin-left: 0;
//           }
//         }
//         .type_con {
//           width: 100%;
//           height: 36px;
//           margin-top: 30px;
//           .sumbit_button {
//             width: 158px;
//             height: 36px;
//             background: #f6f8fe;
//             border-radius: 4px;
//             border: 1px solid #eaeaea;
//           }
//         }
//         .infos {
//           width: 100%;
//           height: 40px;
//           /deep/.el-form-item__label {
//             font-size: 14px !important;
//             font-family: MicrosoftYaHei;
//             color: #343a56 !important;
//             line-height: 24px !important;
//             margin-top: 8px;
//           }
//           .inputs {
//             width: 274px;
//             height: 32px;
//             border-radius: 4px;
//             /deep/.el-input__inner {
//               height: 32px !important;
//               line-height: 32px !important;
//             }
//           }
//         }
//         .buttons {
//           width: 100%;
//           height: 36px;
//           // padding-left: 100px;
//           margin-top: 30px;
//           .sumbit_button {
//             width: 97px;
//             height: 36px;
//             background: #008cff;
//             font-size: 14px;
//             font-family: PingFangSC-Regular, PingFang SC;
//             font-weight: 400;
//             color: #ffffff;
//             line-height: 20px;
//           }
//           .cancel_button {
//             width: 97px;
//             height: 36px;
//             background: #ffffff;
//             border: 1px solid #eaeaea;
//             font-size: 14px;
//             font-family: PingFangSC-Regular, PingFang SC;
//             font-weight: 400;
//             color: #666666;
//             line-height: 20px;
//           }
//           /deep/.el-button {
//             padding: 5px 20px;
//           }
//         }
//       }
//       .cons:last-child {
//         width: 50%;
//         border-right: 0;
//         padding-left: 50px;
//       }
//     }
//   }
// }
</style>
