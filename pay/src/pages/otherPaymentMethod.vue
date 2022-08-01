<template>
  <div class="main other-pay-container">
    <div class="top" :class="isFixd?'fix-container':''">
      <router-link to="/payManage">
        <span><i class="el-icon-arrow-left"></i> {{ $t('common.fanHuiShouKuanYe') }}</span>
      </router-link>
    </div>
    <div class="page-title-container" :class="isFixd?'fix-mt93':''">
        <span class="title">{{ $t('common.payMethodTitle') }}</span>
        <span class="desc">{{ $t('otherPaymentMethod.payInnerTitle') }}</span>
    </div>
    <div class="bottom">
      <creditCard
        :payTypeObject="payTypeObject"
        @showControl="showControl"
        :isShowCredit="false"
        v-for="payTypeObject in otherPayData"
        :key="payTypeObject.payTypeId"
        @activeCard="activeCard"
        @stopCard="stopCard"
      >
        <!-- 银行汇款 -->
        <template v-if="Number(payTypeObject.payGroup) === 5">
          <template slot="textInner">
            <div class="cons">
              <p class="text-desc">{{ $t('otherPaymentMethod.desc1') }}</p>
              <p class="text-desc">

                {{ $t('otherPaymentMethod.desc2') }}
              </p>
            </div>
          </template>
          <template slot="form">
            <div class="paypal_infos_con">
              <el-form
                :model="ruleForm1"
                :rules="rules1"
                ref="ruleForm1"
                class="demo-ruleForm"
                labelPosition="right"
                label-width="0"
              >
                <div class="title">{{ $t('otherPaymentMethod.label1') }}</div>
                <el-form-item prop="bankTransferInfo">
                  <el-input
                    v-model="ruleForm1.bankTransferInfo"
                    class="inputs-textarea"
                    resize="none"
                    type="textarea"
                    maxlength="255"
                    show-word-limit
                    :placeholder="$t('otherPaymentMethod.BankPlaceHolder')"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <div class="buttons">
                    <el-button
                      class="sumbit_button"
                      @click="
                        sumbit_Pay(payTypeObject, 'ruleForm1', { bankTransferInfo: '' })
                      "
                    >
                      {{ $t('common.bangDing') }}
                    </el-button>
                    <el-button
                      v-if="payTypeObject.Pay_change"
                      class="cancel_button"
                      @click="cancel_Change(payTypeObject, 'ruleForm1')"
                    >
                      {{ $t('common.quXiao') }}
                    </el-button>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </template>
          <template slot="formInfo">
            <div style="padding-left: 50px" class="textarea-container">
              <div class="title">{{ $t('otherPaymentMethod.label1') }}</div>
              <div class="infos bankinfos">
                <span class="content" style="white-space: pre-line;">{{
                  payTypeObject ? payTypeObject.payProperty.bankTransferInfo : ''
                }}</span>
              </div>
              <div class="buttons" style="margin-top: 30px">
                <el-button
                  class="sumbit_button"
                  @click="
                    Pay_change(payTypeObject, 'ruleForm1', { bankTransferInfo: '' })
                  "
                >
                  {{ $t('common.gengHuanZhangHu') }}
                </el-button>
                <el-button
                  class="cancel_button"
                  @click="
                    unbind_Pay(payTypeObject, 'ruleForm1', { bankTransferInfo: '' })
                  "
                >
                  {{ $t('common.jieBang') }}
                </el-button>
              </div>
            </div>
          </template>
        </template>
         <!-- WestUnion -->
         <template v-if="Number(payTypeObject.payGroup) === 7">
          <template slot="textInner">
            <div class="cons">
              <p class="text-desc">{{ $t('otherPaymentMethod.desclabel2') }}</p>
              <p class="text-desc">

                {{ $t('otherPaymentMethod.desc2') }}
              </p>
            </div>
          </template>
          <template slot="form">
            <div class="paypal_infos_con">
              <el-form
                :model="ruleForm2"
                :rules="rules2"
                ref="ruleForm2"
                class="demo-ruleForm"
                labelPosition="right"
                label-width="0"
              >
                <div class="title">{{ $t('otherPaymentMethod.label1') }}</div>
                <el-form-item prop="WestUnionInfo">
                  <el-input
                    v-model="ruleForm2.WestUnionInfo"
                    class="inputs-textarea"
                    resize="none"
                    type="textarea"
                    maxlength="255"
                    show-word-limit
                    :placeholder="$t('otherPaymentMethod.BankPlaceHolder')"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <div class="buttons">
                    <el-button
                      class="sumbit_button"
                      @click="
                        sumbit_Pay(payTypeObject, 'ruleForm2', { WestUnionInfo: '' })
                      "
                    >
                      {{ $t('common.bangDing') }}
                    </el-button>
                    <el-button
                      v-if="payTypeObject.Pay_change"
                      class="cancel_button"
                      @click="cancel_Change(payTypeObject, 'ruleForm2')"
                    >
                      {{ $t('common.quXiao') }}
                    </el-button>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </template>
          <template slot="formInfo">
            <div style="padding-left: 50px" class="textarea-container">
              <div class="title">{{ $t('otherPaymentMethod.label1') }}</div>
              <div class="infos bankinfos">
                <span class="content" style="white-space: pre-line;">{{
                  payTypeObject ? payTypeObject.payProperty.WestUnionInfo : ''
                }}</span>
              </div>
              <div class="buttons" style="margin-top: 30px">
                <el-button
                  class="sumbit_button"
                  @click="
                    Pay_change(payTypeObject, 'ruleForm2', { WestUnionInfo: '' })
                  "
                >
                  {{ $t('common.gengHuanZhangHu') }}
                </el-button>
                <el-button
                  class="cancel_button"
                  @click="
                    unbind_Pay(payTypeObject, 'ruleForm2', { WestUnionInfo: '' })
                  "
                >
                  {{ $t('common.jieBang') }}
                </el-button>
              </div>
            </div>
          </template>
        </template>
         <!-- TT -->
         <template v-if="Number(payTypeObject.payGroup) === 16">
          <template slot="textInner">
            <div class="cons">
              <p class="text-desc">{{ $t('otherPaymentMethod.desclabel3') }}</p>
              <p class="text-desc">

                {{ $t('otherPaymentMethod.desc2') }}
              </p>
            </div>
          </template>
          <template slot="form">
            <div class="paypal_infos_con">
              <el-form
                :model="ruleForm3"
                :rules="rules3"
                ref="ruleForm3"
                class="demo-ruleForm"
                labelPosition="right"
                label-width="0"
              >
                <div class="title">{{ $t('otherPaymentMethod.label1') }}</div>
                <el-form-item prop="TTInfo">
                  <el-input
                    v-model="ruleForm3.TTInfo"
                    class="inputs-textarea"
                    resize="none"
                    type="textarea"
                    maxlength="255"
                    show-word-limit
                    :placeholder="$t('otherPaymentMethod.BankPlaceHolder')"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <div class="buttons">
                    <el-button
                      class="sumbit_button"
                      @click="
                        sumbit_Pay(payTypeObject, 'ruleForm3', { TTInfo: '' })
                      "
                    >
                      {{ $t('common.bangDing') }}
                    </el-button>
                    <el-button
                      v-if="payTypeObject.Pay_change"
                      class="cancel_button"
                      @click="cancel_Change(payTypeObject, 'ruleForm3')"
                    >
                      {{ $t('common.quXiao') }}
                    </el-button>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </template>
          <template slot="formInfo">
            <div style="padding-left: 50px" class="textarea-container">
              <div class="title">{{ $t('otherPaymentMethod.label1') }}</div>
              <div class="infos bankinfos">
                <span class="content" style="white-space: pre-line;">{{
                  payTypeObject ? payTypeObject.payProperty.TTInfo : ''
                }}</span>
              </div>
              <div class="buttons" style="margin-top: 30px">
                <el-button
                  class="sumbit_button"
                  @click="
                    Pay_change(payTypeObject, 'ruleForm3', { TTInfo: '' })
                  "
                >
                  {{ $t('common.gengHuanZhangHu') }}
                </el-button>
                <el-button
                  class="cancel_button"
                  @click="
                    unbind_Pay(payTypeObject, 'ruleForm3', { TTInfo: '' })
                  "
                >
                  {{ $t('common.jieBang') }}
                </el-button>
              </div>
            </div>
          </template>
        </template>
         <!-- wise -->
         <template v-if="Number(payTypeObject.payGroup) === 19">
          <template slot="textInner">
            <div class="cons">
              <p class="text-desc">{{ $t('otherPaymentMethod.desclabel4') }}</p>
              <p class="text-desc">

                {{ $t('otherPaymentMethod.desc2') }}
              </p>
            </div>
          </template>
          <template slot="form">
            <div class="paypal_infos_con">
              <el-form
                :model="ruleForm4"
                :rules="rules4"
                ref="ruleForm4"
                class="demo-ruleForm"
                labelPosition="right"
                label-width="0"
              >
                <div class="title">{{ $t('otherPaymentMethod.label1') }}</div>
                <el-form-item prop="wiseInfo">
                  <el-input
                    v-model="ruleForm4.wiseInfo"
                    class="inputs-textarea"
                    resize="none"
                    type="textarea"
                    maxlength="255"
                    show-word-limit
                    :placeholder="$t('otherPaymentMethod.BankPlaceHolder')"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <div class="buttons">
                    <el-button
                      class="sumbit_button"
                      @click="
                        sumbit_Pay(payTypeObject, 'ruleForm4', { wiseInfo: '' })
                      "
                    >
                      {{ $t('common.bangDing') }}
                    </el-button>
                    <el-button
                      v-if="payTypeObject.Pay_change"
                      class="cancel_button"
                      @click="cancel_Change(payTypeObject, 'ruleForm4')"
                    >
                      {{ $t('common.quXiao') }}
                    </el-button>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </template>
          <template slot="formInfo">
            <div style="padding-left: 50px" class="textarea-container">
              <div class="title">{{ $t('otherPaymentMethod.label1') }}</div>
              <div class="infos bankinfos">
                <span class="content" style="white-space: pre-line;">{{
                  payTypeObject ? payTypeObject.payProperty.wiseInfo : ''
                }}</span>
              </div>
              <div class="buttons" style="margin-top: 30px">
                <el-button
                  class="sumbit_button"
                  @click="
                    Pay_change(payTypeObject, 'ruleForm4', { wiseInfo: '' })
                  "
                >
                  {{ $t('common.gengHuanZhangHu') }}
                </el-button>
                <el-button
                  class="cancel_button"
                  @click="
                    unbind_Pay(payTypeObject, 'ruleForm4', { wiseInfo: '' })
                  "
                >
                  {{ $t('common.jieBang') }}
                </el-button>
              </div>
            </div>
          </template>
        </template>
        <!-- XTransfer -->
         <template v-if="Number(payTypeObject.payGroup) === 22">
          <template slot="textInner">
            <div class="cons">
              <p class="text-desc">{{ $t('otherPaymentMethod.desclabel5') }}</p>
              <p class="text-desc">

                {{ $t('otherPaymentMethod.desc2') }}
              </p>
            </div>
          </template>
          <template slot="form">
            <div class="paypal_infos_con">
              <el-form
                :model="ruleForm5"
                :rules="rules5"
                ref="ruleForm5"
                class="demo-ruleForm"
                labelPosition="right"
                label-width="0"
              >
                <div class="title">{{ $t('otherPaymentMethod.label1') }}</div>
                <el-form-item prop="XTransferInfo">
                  <el-input
                    v-model="ruleForm5.XTransferInfo"
                    class="inputs-textarea"
                    resize="none"
                    type="textarea"
                    maxlength="255"
                    show-word-limit
                    :placeholder="$t('otherPaymentMethod.BankPlaceHolder')"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <div class="buttons">
                    <el-button
                      class="sumbit_button"
                      @click="
                        sumbit_Pay(payTypeObject, 'ruleForm5', { XTransferInfo: '' })
                      "
                    >
                      {{ $t('common.bangDing') }}
                    </el-button>
                    <el-button
                      v-if="payTypeObject.Pay_change"
                      class="cancel_button"
                      @click="cancel_Change(payTypeObject, 'ruleForm5')"
                    >
                      {{ $t('common.quXiao') }}
                    </el-button>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </template>
          <template slot="formInfo">
            <div style="padding-left: 50px" class="textarea-container">
              <div class="title">{{ $t('otherPaymentMethod.label1') }}</div>
              <div class="infos bankinfos">
                <span class="content" style="white-space: pre-line;">{{
                  payTypeObject ? payTypeObject.payProperty.XTransferInfo : ''
                }}</span>
              </div>
              <div class="buttons" style="margin-top: 30px">
                <el-button
                  class="sumbit_button"
                  @click="
                    Pay_change(payTypeObject, 'ruleForm5', { XTransferInfo: '' })
                  "
                >
                  {{ $t('common.gengHuanZhangHu') }}
                </el-button>
                <el-button
                  class="cancel_button"
                  @click="
                    unbind_Pay(payTypeObject, 'ruleForm5', { XTransferInfo: '' })
                  "
                >
                  {{ $t('common.jieBang') }}
                </el-button>
              </div>
            </div>
          </template>
        </template>
      </creditCard>
    </div>
  </div>
</template>

<script>
import creditCard from '@/components/creditCard';
import { postMethods } from '@/config/api';
import mixins from '@/Mixins/card';
import watchpageSroll from '@/Mixins/watchpageSroll';

export default {
  name: 'otherPaymentMethod',
  data() {
    return {
      ruleForm1: {
        bankTransferInfo: '',
      },
      ruleForm2: {
        WestUnionInfo: ''
      },
      ruleForm3: {
        TTInfo: ''
      },
      ruleForm4: {
        wiseInfo: ''
      },
      ruleForm5: {
        XTransferInfo: ''
      },
      rules5: {
        XTransferInfo: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
      },
      rules1: {
        bankTransferInfo: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
      },
      rules4: {
        wiseInfo: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
      },
      rules2: {
        WestUnionInfo: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
      },
      rules3: {
        TTInfo: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
      },
      otherPayData: [],
      oldForm: {}
    };
  },
  mounted() {
    if (!this.$route.params.data) {
      this.$router.back();
      return;
    }
    let otherData = JSON.parse(this.$route.params.data);
    otherData.forEach(ele => {
      ele.Pay_info_show = false;
      ele.Pay_change = false;
      if (ele.payGroup && Number(ele.payGroup) === 5) {
        ele.payTypeName = 'BankTransfer';
        ele.logoSrc = require('@/assets/BankTransfer.png');
        this.otherPayData.push(ele)
      }
      if (ele.payGroup && Number(ele.payGroup) === 7) {
        ele.payTypeName = 'WestUnion';
        ele.logoSrc = require('@/assets/WestUnion.png');
        this.otherPayData.push(ele)
      }
      if (ele.payGroup && Number(ele.payGroup) === 16) {
        ele.payTypeName = 'T/T';
        ele.logoSrc = require('@/assets/TT.png');
        this.otherPayData.push(ele)
      }
      if (ele.payGroup && Number(ele.payGroup) === 19) {
        ele.payTypeName = 'Wise';
        ele.logoSrc = require('@/assets/wise.png');
        this.otherPayData.push(ele)
      }
      if (ele.payGroup && Number(ele.payGroup) === 22) { // XTransfer支付
        ele.payTypeName = 'XTransfer';
        ele.logoSrc = require('@/assets/XTransfer.png');
        this.otherPayData.push(ele)
      }
    });
    // this.otherPayData = otherData;
  },
  components: { creditCard },
  mixins: [mixins,watchpageSroll],
  methods: {
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
            let result = await postMethods('post','/shoppay_v2/activebanktransferstatus' ,{
              payTypeId: item.payTypeId,
            });
            if (result.data.message === 'SUCCESS') {
              this.otherPayData.forEach(ele => {
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
      console.log(item)
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
            let result = await postMethods('post','/shoppay_v2/inactivebanktransferstatus',{
              payTypeId: item.payTypeId,
            });
            if (result.data.message === 'SUCCESS') {
              this.otherPayData.forEach(ele => {
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
<style lang="less">
.other-pay-container {
  min-width: 947px;
  width: 100%;
  height: 100%;
  .page-title-container {
    margin: 24px 0;
    color: #343A56;
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
  .cons {
    // height: ;
    .inputs-textarea {
      max-width: 500px;
      height: 160px;
      .el-textarea__inner {
        width: 100%;
        height: 100%;
      }
       .el-input__count {
         right: 20px;
      }
    }
  }
  .paypal_infos_con .cons.left {
    padding-left: 0;
  }
  .label {
    width: 84px;
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
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
  }
  .textarea-container .bankinfos{
       overflow-y: auto;
    height: 197px !important;
  }
}
</style>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  .top {
    width: 100%;
    height: 72px;
    background: #f1f1f1;
    font-size: 18px;
    display: flex;
    vertical-align: middle;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    padding-left: 30px;
    border-bottom: 1px solid #dddfe3;
    box-sizing: border-box;
    a {
      color: #000;
      &:hover {
        text-decoration: none;
      }
    }
  }
  .bottom {
    width: 100%;
    height: calc(100% - 112px);
    padding: 30px;
    padding-top: 0;
    box-sizing: border-box;
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
      background: #f1f1f1;
      margin-top: 30px;
      padding: 25px;
      box-sizing: border-box;
      overflow: hidden;
      .logo_con {
        width: 154px;
        height: 70px;
        border-radius: 6px;
        float: left;
        background: url('../assets/PayPal_logo.png') round;
      }
      .center_con {
        width: 770px;
        height: 70px;
        padding-left: 60px;
        float: left;
        .detail1 {
          font-size: 26px;
          font-family: Arial-BoldMT, Arial;
          font-weight: bold;
          color: #343a56;
          line-height: 38px;
        }
        .operate {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #008cff;
          line-height: 26px;
          .span1 {
            color: #343a56;
          }
        }
        .info {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #343a56;
          line-height: 19px;
          font-weight: normal;
        }
      }
      .button_con {
        width: 131px;
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
        height: 348px;
        float: left;
        border-right: 1px solid rgba(151, 151, 151, 0.7);
        box-sizing: border-box;
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
        }
        .cards {
          width: 100%;
          height: 34px;
          margin-top: 20px;
          .card {
            width: 50px;
            height: 34px;
            float: left;
            background: url('../assets/PayPal_logo.png') round;
            margin-left: 10px;
          }
          .card:first-child {
            margin-left: 0;
          }
        }
        .detail_con {
          width: 407px;
          margin-top: 14px;
          .label_con {
            font-size: 16px;
            font-family: MicrosoftYaHei;
            color: #343a56;
            line-height: 21px;
            font-weight: bold;
          }
          .detail {
            font-size: 16px;
            font-family: MicrosoftYaHei;
            color: #343a56;
            line-height: 21px;
          }
        }
        .detail_con:first-child {
          margin-top: 0;
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
          height: auto;
          /deep/.el-form-item__label {
            font-size: 14px !important;
            font-family: MicrosoftYaHei;
            color: #343a56 !important;
            line-height: 24px !important;
            margin-top: 8px;
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
          .inputs-textarea {
            width: 500px;
            height: 160px;
            /deep/.el-textarea__inner {
              width: 500px;
              height: 160px;
            }
          }
        }
        .buttons {
          width: 100%;
          height: 36px;
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
        .text-desc {
          font-size: 14px;
          color: #666666;
        }
      }
      .cons:last-child {
        width: 50%;
        border-right: 0;
        padding-left: 50px;
      }
    }
  }
}
</style>
