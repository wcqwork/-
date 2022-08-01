<template>
  <div class="main pay-manage-container">
    <div class="top" :class="isFixd?'fix-container':''">
      <span>{{ $t('common.zhifufangshi') }}</span>
    </div>
    <div class="bottom" v-if="payList " :class="isFixd?'fix-mt73':''">
      <!-- paypal -->
      <div
        class="paypal-container"
        v-if="payList && payList[1] && payList[1].length"
      >
        <div class="pay_details">
          <div class="title_con">
            <div class="title">
              <span class="main_title"
                >PayPal &nbsp;&nbsp;{{ $t('common.pay') }}</span
              >
            </div>
            <div class="operate_con">
              <span class="operate_span">{{
                paypal_data.groupEnableInfo == 1
                  ? $t('common.yikaiqi')
                  : paypal_data.groupEnableInfo == -1
                  ? $t('common.buKeYong')
                  : $t('common.weikaiqi')
              }}</span>
              <section
                class="switch_con"
                @click="enable_group('1', 'paypal_data', 'groupEnableInfo')"
                :style="
                  paypal_data.groupEnableInfo == -1
                    ? { cursor: 'not-allowed' }
                    : { cursor: 'pointer' }
                "
              ></section>
              <el-switch
                class="switch_main"
                v-model="paypal_data.swichValue"
                inactive-color="#9399AD"
                :disabled="paypal_data.groupEnableInfo == -1"
              >
              </el-switch>
            </div>
          </div>
          <div class="details_con">
            <div class="logo_con PayPal_logo"></div>
            <div class="center_con">
              <div class="detail1">{{ $t('Paypal.title') }}</div>
              <div class="detail2">
                {{ $t('Paypal.desc1') }}
              </div>
              <div class="detail3">{{ $t('Paypal.desc2') }}</div>
            </div>
            <div class="button_con">
              <el-button
                type="primary"
                class="sumbit_button"
                v-if="paypal_data.paypalNeedBind"
                @click="to_location(paypal_data.paypalActionUrl)"
              >
                <!--  v-if="paypal_data.paypalNeedBind" -->
                <span>{{ $t('common.jihuo') }}</span>
              </el-button>
              <el-button
                class="open_button"
                v-else
                @click="show_control('PayPal_show')"
              >
                <span>{{ $t('common.gengduo') }}</span>
                <i :class="PayPal_show ? 'triangle_up' : 'triangle_down'"></i>
              </el-button>
            </div>
          </div>
        </div>
        <transition
          enter-active-class="animate__animated animate__fadeIn"
          leave-active-class="animate__animated animate__fadeOut"
          :duration="1000"
        >
          <div v-if="PayPal_show" class="paypal_infos_con">
            <div class="cons">
              <div class="title">{{ $t('Paypal.info1') }}</div>
              <div class="infos" style="margin-top: 0">
                {{ $t('Paypal.info2') }}
              </div>
              <div class="infos">
                {{ $t('Paypal.info3') }}
              </div>
              <div class="infos">
                {{ $t('Paypal.info4') }}
              </div>
              <div class="infos">
                {{ $t('Paypal.info5') }}
              </div>
              <div class="infos">
               <span v-html=" $t('Paypal.info6')" style="padding-left:3px;"></span>

              </div>
            </div>
            <div class="cons right" v-show="!paypal_data.needBind">
              <div class="title">PayPal {{ $t('common.geRenZhangHao') }}：</div>
              <div class="infos">
                {{ $t('common.shangHu') }} ID :
                {{
                  paypal_data ? paypal_data.payList[0].payProperty.account : ''
                }}
              </div>
              <div class="infos">
                {{ $t('Paypal.ninKeYiZai') }}
                <span
                  class="managepage"
                  @click="to_new_page('https://www.paypal.com/signin')"
                  >PayPal {{ $t('common.zhangHuGuanLiYe') }}</span
                >
                {{ $t('common.gunaLi') }}
              </div>
              <div class="is-switch-container">
                <span> {{ $t('exchange.qiyong') }} Smart Payment Buttons </span>
                <div class="is-switch">
                  <el-switch
                    class="switch_main"
                    v-model="paypal_data.isSmartPayment"
                    inactive-color="#9399AD"
                  >
                  </el-switch>
                  <section
                    class="switch_con"
                    @click="isSmartPayment(paypal_data)"
                  ></section>
                </div>
                <el-tooltip
                  :content="$t('payManage.paypalIsisSmartPaymentTips')"
                  placement="top"
                >
                  <span class="tips-container">?</span>
                </el-tooltip>
              </div>
            </div>
            <div class="cons right" v-show="paypal_data.needBind">
              <div class="title">PayPal {{ $t('common.geRenZhangHao') }}：</div>
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <div class="form_infos">
                  <el-form-item
                    :label="`${$t('common.shangHu')} ID`"
                    prop="code"
                  >
                    <el-input
                      v-model="ruleForm.payAccount"
                      class="inputs"
                      :placeholder="`${$t('common.qingShuRu')}${$t(
                        'common.shangHu',
                      )} ID`"
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="buttons">
                  <el-button class="sumbit_button" @click="sumbit_paypal">
                    {{ $t('common.bangDing') }}
                  </el-button>
                </div>
              </el-form>
            </div>
          </div>
        </transition>
      </div>
      <!-- 信用卡 -->
      <div
        class="pay_details"
        v-if="payList && payList[2] && payList[2].length"
      >
        <div class="title_con">
          <div class="title">
            <span class="main_title">{{ $t('creditCard.maintitle') }}</span>
          </div>
          <div class="operate_con">
            <span class="operate_span">{{
              creditCard_data.groupEnableInfo == 1
                ? $t('common.yikaiqi')
                : creditCard_data.groupEnableInfo == -1
                ? $t('common.buKeYong')
                : $t('common.weikaiqi')
            }}</span>
            <section
              class="switch_con"
              :style="
                creditCard_data.groupEnableInfo == -1
                  ? { cursor: 'not-allowed' }
                  : { cursor: 'pointer' }
              "
              @click="enable_group('2', 'creditCard_data', 'groupEnableInfo')"
            ></section>
            <el-switch
              class="switch_main"
              v-model="creditCard_data.swichValue"
              inactive-color="#9399AD"
              :disabled="creditCard_data.groupEnableInfo == -1"
            >
            </el-switch>
            <el-tooltip
              v-if="creditCard_data.groupEnableInfo != 1"
              :content="$t('creditCard.payTips')"
              placement="top"
            >
              <span class="tips-container">?</span>
            </el-tooltip>
          </div>
        </div>
        <div class="details_con">
          <div class="logo_con" :class="creditCard_data.logo"></div>
          <div class="center_con">
            <div
              class="detail1"
              v-html="$t(creditCard_data.desc + '.title')"
            ></div>
            <div
              class="detail2"
              v-html="$t(creditCard_data.desc + '.desc')"
            ></div>
            <div
              class="detail3 card-images"
              v-if="creditCard_data.desc != 'creditCard'"
            >
              {{ $t('exchange.left_title') }}：
              <img
                class="card_img"
                v-for="item in creditCard_data.isActiveIdCards"
                :key="item"
                :src="get_creditCardType(item)"
                :alt="item.name"
              />
            </div>
          </div>
          <div class="button_con">
            <el-button
              type="primary"
              class="sumbit_button"
              @click="to_url('paymentMethod', creditCard_data, true)"
            >
              <span>{{ $t('common.xuanzeshoukuanfangshi') }}</span>
            </el-button>
          </div>
        </div>
      </div>
      <!-- 本地支付 v-if="payList && payList[3] && payList[3].length" -->
      <div
        class="pay_details"
        v-if="payList && payList[3] && payList[3].length"
      >
        <div class="title_con">
          <div class="title">
            <span class="main_title"> {{ $t('localPaymentMethod.mainTitle') }}</span>
          </div>
          <div class="operate_con">
            <span class="operate_span">{{
              local_data.groupEnableInfo == 1
                ? $t('common.yikaiqi')
                : local_data.groupEnableInfo == -1
                ? $t('common.buKeYong')
                : $t('common.weikaiqi')
            }}</span>
            <section
              class="switch_con"
              :style="
                local_data.groupEnableInfo == -1
                  ? { cursor: 'not-allowed' }
                  : { cursor: 'pointer' }
              "
              @click="enable_group('3', 'local_data', 'groupEnableInfo')"
            ></section>
            <el-switch
                v-model="local_data.swichValue"
                inactive-color="#9399AD"
                :disabled="local_data.groupEnableInfo == -1"
            >
            </el-switch>
          </div>
        </div>
        <div class="details_con">
          <div class="logo_con localPayment_logo"></div>
          <div class="center_con">
            <div class="detail1">{{ $t('localPaymentMethod.detail1') }}</div>
          </div>
          <div class="button_con">
            <el-button
              type="primary"
              class="sumbit_button"
              @click="to_url('localPaymentMethod', local_data.data)"
            >
              <span>{{ $t('common.xuanzeshoukuanfangshi') }}</span>
            </el-button>
          </div>
        </div>
      </div>
      <!-- 货到付款  v-if="payList && payList[4] && payList[4].length"-->
      <div class="delivery-container">
        <div class="pay_details">
          <div class="title_con">
            <div class="title">
              <span class="main_title">{{ $t('delivery.title') }}</span>
            </div>
            <div class="operate_con">
              <span class="operate_span">{{
                deliveryData.groupEnableInfo == 1
                  ? $t('common.yikaiqi')
                  : deliveryData.groupEnableInfo == -1
                  ? $t('common.buKeYong')
                  : $t('common.weikaiqi')
              }}</span>
              <section
                class="switch_con"
                @click="enable_group('4', 'deliveryData', 'groupEnableInfo')"
                :style="
                  deliveryData.groupEnableInfo == -1
                    ? { cursor: 'not-allowed' }
                    : { cursor: 'pointer' }
                "
              ></section>
              <el-switch
                class="operate_span"
                inactive-color="#9399AD"
                v-model="deliveryData.swichValue"
                :disabled="deliveryData.groupEnableInfo == -1"
              >
              </el-switch>
            </div>
          </div>
          <div class="details_con">
            <div class="logo_con cashDelivery_logo"></div>
            <div class="center_con">
              <div class="detail1">Cash on Delivery</div>
            </div>
            <div class="button_con">
              <el-button
                class="open_button"
                @click="show_control('cashDelivery_show')"
              >
                <span>{{ $t('common.gengduo') }}</span>
                <i
                  :class="cashDelivery_show ? 'triangle_up' : 'triangle_down'"
                ></i>
              </el-button>
            </div>
          </div>
        </div>
        <transition
          enter-active-class="animate__animated animate__fadeIn"
          leave-active-class="animate__animated animate__fadeOut"
          :duration="1000"
        >
          <div v-show="cashDelivery_show" class="cashDelivery_infos_con">
            <el-form
              ref="deliveryForm"
              :rules="deliveryRule"
              :model="delivery"
              label-width="0"
            >
              <div class="label_con">
                {{ $t('delivery.formLabel1') }}
              </div>

              <el-form-item prop="name">
                <div class="operation_con">
                  <el-input
                    :placeholder="$t('delivery.placeholder1')"
                    class="input_class"
                    v-model="delivery.name"
                    maxlength="20"
                    resize="none"
                    @change="is_delivery_change = true"
                    show-word-limit
                  ></el-input>
                </div>
              </el-form-item>
              <div class="info_con">
                {{ $t('delivery.formDesc1') }}
              </div>
              <div class="label_con" style="margin-top: 24px">
                {{ $t('delivery.formLabel2') }}
              </div>
              <el-form-item prop="desc">
                <div class="operation_con">
                  <el-input
                    type="textarea"
                    :placeholder="$t('delivery.placeholder2')"
                    class="textarea_class"
                    maxlength="255"
                    rows="3"
                    resize="none"
                    @change="is_delivery_change = true"
                    v-model="delivery.desc"
                    show-word-limit
                  ></el-input>
                </div>
              </el-form-item>
              <div class="info_con">
                {{ $t('delivery.formDesc2') }}
              </div>
              <div class="label_con" style="margin-top: 24px">
                {{ $t('delivery.formLabel3') }}
              </div>
              <el-form-item prop="instruct">
                <div class="operation_con">
                  <el-input
                    type="textarea"
                    :placeholder="$t('delivery.placeholder3')"
                    class="textarea_class"
                    maxlength="255"
                    v-model="delivery.instruct"
                    @change="is_delivery_change = true"
                    rows="3"
                    resize="none"
                    show-word-limit
                  ></el-input>
                </div>
              </el-form-item>
              <div class="info_con">{{ $t('delivery.formDesc3') }}</div>
              <div class="buttons_con">
                <el-button
                  type="primary"
                  class="save_button"
                  @click="sumbit_delivery(payList[4])"
                  >{{ $t('common.baocun') }}</el-button
                >
                <el-button
                  class="cancel_button"
                  @click="show_control('cashDelivery_show')"
                  >{{ $t('common.quXiao') }}</el-button
                >
              </div>
            </el-form>
          </div>
        </transition>
      </div>
      <!-- 其他收款方式 -->
      <div
        class="pay_details"
        v-if="payList && payList[5] && payList[5].length"
      >
        <div class="title_con">
          <div class="title">
            <span class="main_title">{{
              $t('otherPaymentMethod.mainTitle')
            }}</span>
          </div>
          <div class="operate_con">
            <span class="operate_span">{{
              otherPay.groupEnableInfo == 1
                ? $t('common.yikaiqi')
                : otherPay.groupEnableInfo == -1
                ? $t('common.buKeYong')
                : $t('common.weikaiqi')
            }}</span>
            <section
              class="switch_con"
              @click="enable_group('5', 'otherPay', 'groupEnableInfo')"
              :style="
                otherPay.groupEnableInfo == -1
                  ? { cursor: 'not-allowed' }
                  : { cursor: 'pointer' }
              "
            ></section>
            <el-switch
              class="operate_span"
              v-model="otherPay.swichValue"
              :disabled="otherPay.groupEnableInfo == -1"
              inactive-color="#9399AD"
            >
            </el-switch>
          </div>
        </div>
        <div class="details_con">
          <div class="logo_con otherPayment_logo"></div>
          <div class="center_con">
            <div class="detail1">
              {{ $t('otherPaymentMethod.detail1') }}
            </div>
            <div class="detail2">
              {{ $t('otherPaymentMethod.detail2') }}
            </div>
            <div class="detail3 card-images">
              {{ $t('otherPaymentMethod.isActiveTitle') }}：
              <img
                class="card_img"
                v-for="item in payList[5].filter(
                  ele => Number(ele.usingStatus) === 1,
                )"
                :key="item.payGroup"
                style="width: 53px"
                :src="get_otherPayType(item)"
                :alt="item.name"
              />
            </div>
          </div>
          <div class="button_con">
            <el-button
              type="primary"
              class="sumbit_button"
              @click="to_url('otherPaymentMethod', payList[5])"
            >
              <span>{{ $t('common.xuanzeshoukuanfangshi') }}</span>
            </el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div ></div> -->
    <el-empty description="Empty" v-else-if="leadend"></el-empty>
  </div>
</template>

<script>
import {
  postPaymanagements,
  inactivegroupusingstatus,
  activegroupusingstatus,
  updatepayproperty,
  postMethods,
} from '@/config/api';
import watchpageSroll from '@/Mixins/watchpageSroll';

export default {
  name: 'payManage',
  mounted() {
    // this.$cookies.set('BOPL', 'ZH_CN');
    // this.$cookies.set('BDP', 'http');
    // this.$cookies.set(
    //   'C',
    //   '63397532534537584d786e35657558595a384569344c4c7175306931506b3577755477432b706c2b6f644e7a5675436877677a6259566832546742347467567230724f4d716375686b7836350d0a71412f7048355875694d6c38344c336b2b6a5a590d0a',
    // );
    // this.$cookies.set(
    //   'BCT',
    //   '9853372315e793d24d5860df8608b9cb928930eec783e0bdfa8accad95b171ecc26eadfd7ad2cd9b',
    // );
    // this.$cookies.set('BAIC', '3279a2f97b7f3384d30153d4ff27be6d');
    // this.$cookies.set('SLE', 'ZH_CN');
    // this.$cookies.set('ST', 0);
    // this.$cookies.set('BPC', 'lwKfApUZcHNS');
    // this.$cookies.set('JSESSIONID', 'C1005A1BB105442BDB29B8DCB176CE72');
    this.init();
    if (parent) {
      let lang = window.$cookies.get('BOPL');
      if (lang) {
        lang = lang.toLowerCase();
        this.qiehuan(lang);
      }
    }
  },
  watch: {
    creditCard_data: {
      handler(val) {
        if (val.isActiveId == 9) {
          val.logo = 'stripe_logo';
          val.desc = 'creditCard.stripe';
        } else if (val.isActiveId == 15) {
          val.logo = 'allinpay_logo';
          val.desc = 'creditCard.allinpay';
        } else if (val.isActiveId == 11) {
          val.logo = 'Wintopay_logo';
          val.desc = 'creditCard.Wintopay';
        } else if (val.isActiveId == 14) {
          val.logo = 'EecPay_logo';
          val.desc = 'creditCard.EecPay';
        } else if (val.isActiveId == 1) {
          val.logo = 'Cashier_logo';
          val.desc = 'creditCard.Cashier';
        } else if (val.isActiveId == 17) {
          val.logo = 'PingPong_logo';
          val.desc = 'creditCard.PingPong';
        } else if (val.isActiveId == 18) {
          val.logo = 'LianLianPay_logo';
          val.desc = 'creditCard.LianLianPay';
        } else if (val.isActiveId == 20) {
          val.logo = 'Oceanpayment_logo';
          val.desc = 'creditCard.Oceanpayment';
        } else if (val.isActiveId == 21) {
          val.logo = 'Cybersource_logo';
          val.desc = 'creditCard.Cybersource';
        } else {
          val.logo = 'creditCard_logo';
          val.desc = 'creditCard';
        }
      },
      deep: true,
    },
  },
  data() {
    return {
      creditCardTypes: require('../assets/data/creditCardTypes.json'),
      complete_init: false,
      ajax_loading: false,
      PayPal_show: false,
      cashDelivery_show: false,
      leadend: false,
      paypal_data: {}, //payPal模块数据
      creditCard_data: {
        logo: 'creditCard_logo',
        desc: 'creditCard',
      }, //信用卡模块数据
      ruleForm: {
        payAccount: '',
      },
      rules: {
        payAccount: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
      },
      deliveryRule: {
        name: [
          {
            required: true,
            message: '名称不能为空',
            trigger: 'blur',
          },
        ],
      },
      value1: false,
      payList: null,
      delivery: {
        name: '',
        desc: '',
        instruct: '',
      },
      oldDelivery: {
        name: '',
        desc: '',
        instruct: '',
      },
      is_delivery_change: false,
      // 货到付款
      deliveryData: {
        groupEnableInfo: 1,
      },
      // 本地支付
      local_data: {
        groupEnableInfo: 1,
      },
      otherPay: {}, // 其他付款方式
      smartPayment: 1,
    };
  },
  mixins: [watchpageSroll],
  methods: {
    async isSmartPayment(item) {
      if (this.ajax_loading) return;
      this.ajax_loading = true;
      let confirmTitle = this.$t('payManage.paypalIsisSmartPaymentTitle1');
      let confirmContent = this.$t('payManage.paypalIsisSmartPaymentContent1');
      if (item.payProperty.isSmartPayment == '1') {
        confirmTitle = this.$t('payManage.paypalIsisSmartPaymentTitle2');
        confirmContent = this.$t('payManage.paypalIsisSmartPaymentContent2');
      }
      this.$confirm(confirmContent, confirmTitle, {
        confirmButtonText: this.$t('common.queDing'),
        cancelButtonText: this.$t('common.quXiao'),
        customClass: 'confrim_costom',
      })
        .then(async () => {
          try {
            item.payProperty.isSmartPayment =
              item.payProperty.isSmartPayment == '1' ? '0' : '1';
            await postMethods('post', '/shoppay_v2/update/payproperty', {
              payTypeId: item.payList[0].payTypeId,
              payProperty: JSON.stringify(item.payProperty),
            }).then(response => {
              if (response && response.data.message === 'SUCCESS') {
                this.init();
              }
            });
          } catch (err) {
            console.log(err);
          }
          this.ajax_loading = false;
        })
        .catch(() => {
          this.ajax_loading = false;
          this.$message({
            type: 'info',
            message: this.$t('operate.yiQuXiaoCaoZuo'),
          });
        });
    },
    init() {
      this.complete_init = false;
      postPaymanagements({}).then(res => {
        this.leadend = true;
        // 1：paypal，2：信用卡，3：全球本地支付，4：COD，5：其他
        if (res && res.data.message === 'SUCCESS') {
          let data = res.data.result;

          for (const key in data.payList) {
            if (data.payList[key].length) {
              data.payList[key].map(param => {
                if (param.payProperty) {
                  param.payProperty = JSON.parse(param.payProperty);
                }
              });
            }
          }
          this.payList = data.payList;
          if (this.payList[4]) {
            let deliveryPayProperty = this.payList[4][0]['payProperty'] || {};
            Object.keys(this.delivery).forEach(ele => {
              this.delivery[ele] = deliveryPayProperty[ele];
              this.oldDelivery[ele] = deliveryPayProperty[ele];
            });
            this.deliveryData = this.payList[4][0];
            this.deliveryData.groupEnableInfo = data.groupEnableInfo[4];
            // this.deliveryData.groupEnableInfo = data.groupEnableInfo[4]
            this.deliveryData.swichValue =
              Number(data.groupEnableInfo[4]) === 1;
          }
          if (this.payList[5]) {
            this.otherPay.groupEnableInfo = data.groupEnableInfo[5];
            this.otherPay.swichValue = Number(data.groupEnableInfo[5]) === 1;
          }
          //初始化PayPal模块数据
          let paypal_data = {};
          if (this.payList[3]) {
            this.local_data.groupEnableInfo = data.groupEnableInfo[3];
            this.local_data.swichValue = Number(data.groupEnableInfo[3]) === 1
            this.local_data.data = this.payList[3];
          }
          paypal_data.payList = data.payList[1];
          paypal_data.groupEnableInfo = data.groupEnableInfo[1];
          paypal_data.swichValue = Number(data.groupEnableInfo[1]) === 1;
          paypal_data.isSmartPayment =
            Number(paypal_data.payList[0]['payProperty'].isSmartPayment) === 1;
          paypal_data.paypalActionUrl = data.paypalActionUrl;
          paypal_data.paypalNeedBind = data.paypalNeedBind;
          //判断是是不是老板payPal用户
          // console.log(paypal_data.payList[0]);
          if (
            paypal_data.payList[0] &&
            paypal_data.payList[0].payProperty &&
            paypal_data.payList[0].payProperty.payAccount != undefined
          ) {
            paypal_data.needBind = true;
            this.ruleForm.payAccount =
              paypal_data.payList[0].payProperty.payAccount;
          }
          // paypal_data.payTypeId = paypal_data.payList
          this.paypal_data = paypal_data;
          this.paypal_data.payProperty =
            paypal_data.payList[0]['payProperty'] || {};
          //初始化信用卡模块数据
          let creditCard_data = {};
          creditCard_data.payList = data.payList[2];
          creditCard_data.registerUrl = 'https://dashboard.stripe.com/register';
          creditCard_data.groupEnableInfo = data.groupEnableInfo[2];
          creditCard_data.swichValue = Number(data.groupEnableInfo[2]) === 1;
          this.creditCard_data = creditCard_data;
          for (let i = 0; i < creditCard_data.payList.length; i++) {
            if (creditCard_data.payList[i].usingStatus == 1) {
              this.creditCard_data.isActiveId =
                creditCard_data.payList[i].payGroup;
              this.creditCard_data.isActiveIdCards =
                creditCard_data.payList[i].payProperty.selectedCreditCardList ||
                [];
              break;
            }
          }
          // console.log(this.creditCard_data);
          this.complete_init = true;
          document.domain = data.jsDomain;
        }
      });
    },
    to_url(name, data, needComplete) {
      if (needComplete && !this.complete_init) {
        this.$message.error(this.$t('request.error3'));
        return;
      }
      if (data) {
        this.$router.push({ name, params: { data: JSON.stringify(data) } });
      } else {
        this.$router.push({ name });
      }
    },
    to_location(url) {
      window.parent.location.href = url;
    },
    to_new_page(url) {
      window.parent.open(url);
    },
    show_control(show) {
      if (this[show] && this.is_delivery_change) {
        this.$confirm(
          this.$t('payManage.confirm6'),
          this.$t('payManage.confirm5'),

          {
            confirmButtonText: this.$t('common.queDing'),
            cancelButtonText: this.$t('common.quXiao'),
            type: 'warning',
            customClass: 'confrim_costom',
          },
        )
          .then(() => {
            this[show] = !this[show];
            Object.keys(this.oldDelivery).forEach(ele => {
              this.delivery[ele] = this.oldDelivery[ele];
            });
          })
          .catch(() => {});
      } else {
        this[show] = !this[show];
      }
    },
    qiehuan(local) {
      this.$i18n.locale = local;
    },
    async enable_group(group, name1, name2) {
      try {
        if (this[name1][name2] == '-1' || this.ajax_loading) {
          return;
        }
        this.ajax_loading = true;
        console.log(this[name1])
        if (this[name1][name2] == 0) {
          this.$confirm(
            this.$t('payManage.confirm1'),
            this.$t('payManage.confirm2'),
            {
              confirmButtonText: this.$t('common.queDing'),
              cancelButtonText: this.$t('common.quXiao'),
              type: 'warning',
              customClass: 'confrim_costom',
            },
          )
            .then(async () => {
              let result = await activegroupusingstatus({
                payTypeGroup: group,
              });
              if (result.data.message === 'SUCCESS') {
                this.init();
              } else {
                this.$message.error(this.$t('request.error1'));
              }
              this.ajax_loading = false;
            })
            .catch(() => {
              this.$message({
                type: 'info',
                message: this.$t('operate.yiQuXiaoCaoZuo'),
              });
              this.ajax_loading = false;
            });
        } else {
          this.$confirm(
            this.$t('payManage.confirm3'),
            this.$t('payManage.confirm4'),
            {
              confirmButtonText: this.$t('common.queDing'),
              cancelButtonText: this.$t('common.quXiao'),
              type: 'warning',
              customClass: 'confrim_costom',
            },
          )
            .then(async () => {
              let result = await inactivegroupusingstatus({
                payTypeGroup: group,
              });
              if (result.data.message === 'SUCCESS') {
                this.init();
                //关闭顺便关掉下拉窗
                if (name1 == 'paypal_data') {
                  this.PayPal_show = false;
                }
              } else {
                this.$message.error(this.$t('request.error1'));
              }
              this.ajax_loading = false;
            })
            .catch(() => {
              this.$message({
                type: 'info',
                message: this.$t('operate.yiQuXiaoCaoZuo'),
              });
              this.ajax_loading = false;
            });
        }
      } catch (error) {
        this.$message.error(this.$t('request.error1'));
        this.ajax_loading = false;
      }
    },
    sumbit_paypal() {
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          updatepayproperty({
            payTypeId: this.paypal_data.payList[0].payTypeId,
            payProperty: JSON.stringify({
              ...this.ruleForm,
              isSmartPayment: 1,
            }),
          })
            .then(res => {
              if (res.data.message === 'SUCCESS') {
                this.AllinPay_change = false;
                this.$message({
                  showClose: true,
                  message: this.$t('operate.caoZuoChengGong'),
                  type: 'success',
                });
                this.paypal_data.needBind = false;
                this.paypal_data.payList[0].payProperty.account =
                  this.ruleForm.payAccount;
              } else {
                this.$message.error(this.$t('request.error1'));
              }
            })
            .catch(() => {
              this.$message.error(this.$t('request.error1'));
            });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    get_creditCardType(val) {
      try {
        let res = require(`../assets/creditCardTypes/${val}.png`);
        return res;
      } catch (error) {
        return require(`../assets/nodata.png`);
      }
    },
    // 其他收款方式图片
    get_otherPayType(item) {
      let imgSrc = '';
      switch (Number(item.payGroup)) {
        case 5:
          imgSrc = require('@/assets/BankTransfer.png');
          break;
        case 7:
          imgSrc = require('@/assets/WestUnion.png');
          break;
        case 16:
          imgSrc = require('@/assets/TT.png');
          break;
        case 19:
          imgSrc = require('@/assets/wise.png');
          break;
        case 22:
          imgSrc = require('@/assets/XTransfers.png');
          break;
        default:
          imgSrc = require('@/assets/BankTransfer.png');
          break;
      }
      return imgSrc;
    },
    // 货到付款提交
    sumbit_delivery(item) {
      this.$refs.deliveryForm.validate(valid => {
        if (valid) {
          updatepayproperty({
            payTypeId: item[0].payTypeId,
            payProperty: JSON.stringify(this.delivery),
          })
            .then(res => {
              if (res.data.message === 'SUCCESS') {
                this.is_delivery_change = false;
                this.$message({
                  showClose: true,
                  message: this.$t('operate.caoZuoChengGong'),
                  type: 'success',
                });
                // item.groupEnableInfo = 0
                this.init();
              } else {
                this.$message.error(this.$t('request.error1'));
              }
            })
            .catch(() => {
              this.$message.error(this.$t('request.error1'));
            });
        }
      });
    },
  },
};
</script>

<style lang="less">
.pay-manage-container {
  box-sizing: border-box;
  padding-bottom: 15px;
  .el-textarea .el-input__count {
    right: 24px;
  }
  .info-tips {
    margin-top: 15px;
    box-sizing: border-box;
    font-size: 13px;
    color: #343a56;
    .start-tip {
      font-size: 16px;
    }
  }
}
</style>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  min-width: 947px;
  .top {
    width: calc(100% - 30px);
    height: 72px;
    background: #f8f8f8;
    font-size: 18px;
    display: flex;
    vertical-align: middle;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    padding-left: 30px;
    border-bottom: 1px solid #dddfe3;
  }
  .is-switch-container {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #666666;
    margin-top: 20px;
    .is-switch {
      margin: 0 5px 0 10px;
      position: relative;
    }
    .switch_con {
      width: 44px;
      height: 22px;
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 1000;
      cursor: pointer;
      border-radius: 10px;
    }
  }
  .bottom {
    width: 100%;
    height: auto;
    padding: 32px;
    box-sizing: border-box;
    .pay_details {
      height: 176px;
      width: 100%;
      background: #f6f8fe;
      margin-top: 20px;
      box-sizing: border-box;
      .title_con {
        width: 100%;
        height: 54px;
        box-sizing: border-box;
        border-bottom: 0.5px solid #d8dbe6;
        padding: 12px 30px;
        .title {
          height: 100%;
          width: 180px;
          float: left;
          box-sizing: border-box;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          .main_title {
            letter-spacing: 0;
            font-size: 18px;
            font-family: Arial-BoldMT, Arial;
            font-weight: 800;
            color: #343a56;
          }
          .sub_title {
            font-family: MicrosoftYaHei-Bold;
            font-size: 20px;
            color: #343a56;
            letter-spacing: 0;
            margin-left: 5px;
            font-weight: bold;
          }
        }
        .operate_con {
          width: calc(100% - 180px);
          height: 100%;
          padding-left: 20px;
          float: left;
          box-sizing: border-box;
          line-height: 31px;
          position: relative;
          display: flex;
          align-items: center;
          .switch_con {
            width: 44px;
            height: 22px;
            position: absolute;
            top: 6px;
            left: 75px;
            z-index: 1000;
            cursor: pointer;
            border-radius: 10px;
          }
          .switch_main {
            width: 44px;
            height: 22px;
            // position: absolute;
            // top: 5px;
            // left: 110px;
            z-index: 1;
          }
          .operate_span {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: #343a56;
            font-weight: 500;
            line-height: 0.9;
            vertical-align: middle;
            margin-right: 12px;
          }
        }
      }
      .details_con {
        width: 100%;
        height: 122px;
        padding: 0px 30px 0 30px;
        box-sizing: border-box;
        background: url('../assets/background_paydetails.png') no-repeat;
        background-position: -23px;
        .logo_con {
          width: 138px;
          height: 90px;
          float: left;
          margin-top: 16px;
        }
        .PayPal_logo {
          background: url('../assets/PayPal_logo.png') round;
        }
        .localPayment_logo {
          background: url('../assets/localPayment_logo.png') round;
        }
        .cashDelivery_logo {
          background: url('../assets/cashDelivery_logo.png') round;
        }
        .creditCard_logo {
          background: url('../assets/creditCard_logo.png') round;
        }
        .otherPayment_logo {
          background: url('../assets/otherPayment_logo.png') round;
        }
        .stripe_logo {
          background: url('../assets/card_logo/Stripe_logo.png') round;
        }
        .allinpay_logo {
          background: url('../assets/allinpay_index.png') round;
        }
        .Wintopay_logo {
          background: url('../assets/card_logo/Wintopay.png') round;
        }
        .EecPay_logo {
          background: url('../assets/card_logo/EecPay_logo.png') round;
        }
        .Cashier_logo {
          background: url('../assets/card_logo/Cashier_logo.png') round;
        }
        .PingPong_logo {
          background: url('../assets/card_logo/PingPong_logo.png') round;
        }
        .LianLianPay_logo {
          background: url('../assets/card_logo/LianLianPay_logo.png') round;
        }
        .Oceanpayment_logo {
          background: url('../assets/card_logo/Oceanpayment_logo.png') round;
        }
        .Cybersource_logo {
          background: url('../assets/Cybersource.png') round;
        }
        .center_con {
          width: calc(100% - 180px - 131px - 100px);
          height: 100%;
          padding-left: 60px;
          float: left;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .detail1 {
            font-family: MicrosoftYaHei;
            font-size: 18px;
            color: #343a56;
            line-height: 24px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .detail2 {
            font-family: MicrosoftYaHei;
            font-size: 14px;
            color: #343a56;
            line-height: 19px;
            margin-top: 4px;
            margin-bottom: 8px;
            font-weight: 400;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .detail3 {
            font-family: MicrosoftSansSerif;
            font-size: 14px;
            color: #9399ad;
            line-height: 20px;
            margin-top: 3px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .card_img {
              width: 35px;
              height: 24px;
              margin-right: 10px;
              vertical-align: text-bottom;
            }
          }
          /deep/.link {
            color: #008cff;
            cursor: pointer;
          }
        }
        .button_con {
          width: 131px;
          height: 104px;
          float: right;
          .sumbit_button {
            background: #008cff;
            border-radius: 4px;
            width: 131px;
            height: 40px;
            font-family: ArialMT;
            font-size: 14px;
            color: #ffffff;
            margin-top: 30px;
            .button_span2 {
              margin-left: 6px;
            }
          }
          .open_button {
            background: #ffffff;
            border-radius: 4px;
            width: 131px;
            height: 45px;
            font-family: MicrosoftYaHei;
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
    .pay_details:first-child {
      margin-top: 0;
    }
    .paypal_infos_con {
      height: auto;
      width: 100%;
      box-sizing: border-box;
      background: #ecf0f8;
      border: 1px solid #f8fafe;
      padding: 40px 50px 50px 50px;
      display: inline-block;
      .cons {
        width: calc(50% - 1px);
        height: auto;
        float: left;
        border-right: 1px dotted rgba(151, 151, 151, 0.7);
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
        .infos {
          width: 100%;
          height: auto;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #343a56;
          line-height: 19px;
          padding-right: 10%;
          box-sizing: border-box;
          margin-top: 12px;
          .managepage {
            color: #008cff;
            cursor: pointer;
            text-decoration: underline;
          }
        }
        .infos::before {
          width: 6px;
          height: 6px;
          background: #343a56;
          opacity: 0.2;
          content: '';
          display: inline-block;
          vertical-align: middle;
          border-radius: 50%;
          margin-right: 15px;
        }
        .form_infos {
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
        }
        .buttons {
          width: 100%;
          height: 36px;
          padding-left: 100px;
          margin-top: 6px;
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
      }
      .cons.right {
        width: 50%;
        border-right: 0;
        padding-left: 50px;
      }
    }
    .cashDelivery_infos_con {
      width: 100%;
      background: #ecf0f8;
      border: 1px solid #f8fafe;
      padding: 32px 50px;
      box-sizing: border-box;
      .label_con {
        width: 100%;
        height: 21px;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #343a56;
        line-height: 21px;
      }
      .operation_con {
        width: 100%;
        min-width: 800px;
        margin-top: 8px;
        margin-bottom: 4px;
        .input_class {
          max-width: 1000px;
          min-width: 800px;
          height: 32px;
        }
        .textarea_class {
          max-width: 1000px;
          min-width: 800px;
        }
        /deep/.el-form-item {
          margin-bottom: 0;
        }
        /deep/.el-input__inner {
          height: 32px;
          line-height: 32px;
        }
      }
      .info_con {
        width: 100%;
        height: 20px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #848ba4;
        line-height: 20px;
      }
      .buttons_con {
        width: 100%;
        height: 36px;
        margin-top: 25px;
        .save_button {
          width: 97px;
          height: 36px;
          background: #008cff;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 10px;
        }
        .cancel_button {
          width: 97px;
          height: 36px;
          background: #ffffff;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
          line-height: 10px;
          margin-left: 15px;
        }
      }
    }
  }
  .tips-container {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
    font-size: 20px;
    cursor: pointer;
    color: #343a56;
    border: 2px solid #343a56;
    transform: scale(0.5);
  }
  .tips-container:hover {
    border-color: #008cff;
    color: #008cff;
  }
  .delivery-container {
    margin-top: 20px;
    /deep/ .el-form-item__error{
         position: static;
    }
  }
}
</style>
<style lang="less">
.delivery-container {
  .el-form-item {
    margin-bottom: 0;
  }
}
</style>
