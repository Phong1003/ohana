<template>
  <div class="container">
    <div class="user__info">
      <div class="d-flex justify-content-between">
        <h4 class="user__title">Thông tin tài khoản</h4>
        <b-icon
          style="cursor: pointer"
          @click="handleCloseDetails"
          icon="x-lg"
          font-scale="2"
        ></b-icon>
      </div>
      <div class="user__details">
        <div class="d-flex flex-wrap">
          <div class="d-flex flex-column col-6 mt-3">
            <p class="mb-0 field__name mb-2">
              Tên <span class="text-danger">(*)</span>
            </p>
            <b-form-input
              class="h48"
              v-model="currentAccount.fullname"
              :disabled="!isEdit"
            ></b-form-input>
          </div>
          <div class="d-flex flex-column col-6 mt-3">
            <p class="mb-0 field__name mb-2">
              Email <span class="text-danger">(*)</span>
            </p>
            <b-form-input
              class="h48"
              v-model="currentAccount.email"
              :disabled="true"
            ></b-form-input>
          </div>
          <div class="d-flex flex-column col-6 mt-3">
            <p class="mb-0 field__name mb-2">
              Role <span class="text-danger">(*)</span>
            </p>
            <b-form-group>
              <Autocomplete
                class="borderInput"
                id="my-list-id"
                :value="currentAccount.roleid"
                :displayAttribute="'name'"
                :valueAttribute="'id'"
                :isHeight50="true"
                :optionDropdowns="options"
                :isDisabled="!isEdit"
                @changeValue="(value) => (this.currentAccount.roleid = value)"
              />
            </b-form-group>
          </div>
          <div class="d-flex flex-column col-6 mt-3">
            <p class="mb-0 field__name mb-2">
              Số điện thoại <span class="text-danger">(*)</span>
            </p>
            <b-form-input
              class="h48"
              v-model="currentAccount.phone"
              :disabled="!isEdit"
            ></b-form-input>
          </div>
          <div class="d-flex flex-column col-6 mt-3">
            <p class="mb-0 field__name mb-2">Số dư</p>
            <b-form-input
              class="h48"
              v-model="totalMoney"
              disabled
            ></b-form-input>
          </div>
          <div class="d-flex flex-column col-6 mt-3">
            <p class="mb-0 field__name mb-2">Ngày tạo</p>
            <b-form-input
              class="h48"
              v-model="createdDate"
              disabled
            ></b-form-input>
          </div>
        </div>
        <div
          v-if="isEdit"
          class="h4 mt-3 cursor-pointer d-flex justify-content-end customPadding"
        >
          <b-button @click="handleSaveEdit()" class="bg-primary border-primary">
            <b-icon icon="cloud-arrow-up"></b-icon>
            <span>Lưu</span>
          </b-button>
        </div>
      </div>
      <div
        v-if="!isEdit"
        class="d-flex justify-content-end mt-3 h4 cursor-pointer mr-3"
      >
        <b-button
          v-if="currentAccount.roleid == 1"
          v-b-modal.quarterHistory
          class="bg-success border-success mr-3"
        >
          <span>Thống kê quý</span>
        </b-button>
        <b-button
          v-if="currentAccount.roleid == 1"
          v-b-modal.paymentHistory
          class="bg-warning border-warning mr-3"
        >
          <span>Biến động số dư</span>
        </b-button>
        <b-button @click="isEdit = true" class="bg-primary border-primary">
          <b-icon icon="pencil-square"></b-icon>
          <span>Chỉnh sửa</span>
        </b-button>
      </div>
    </div>
    <b-modal
      id="paymentHistory"
      ref="modal"
      title="Biến động số dư"
      modal-class="form_money"
      scrollable
      ok-only
      @ok="handleOk"
    >
      <div v-if="listHistory.length" class="history__contain">
        <div
          v-for="(item, index) of listHistory"
          :key="index"
          class="border-bottom text-white history__item mb-2"
          :class="item.note.includes('cộng tiền') ? 'bg-success' : 'bg-danger'"
        >
          <div class="p-2">
            <p>Hành động: {{ item.note }}</p>
            <p>Mã lịch sử : {{ item.id }}</p>
            <p>
              Ngày thực hiện: {{ item.createDate.replace("T00:00:00", "") }}
            </p>
            <p>Số tiền: {{ handleReturnTotal(item.moneyRecharge) }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <h4 class="text-center">Bạn chưa có lịch sử nạp và thanh toán</h4>
      </div>
    </b-modal>
    <b-modal
      id="quarterHistory"
      ref="modal"
      :title="`Thống kê theo quý ${currentYear}`"
      modal-class="form_money"
      scrollable
      ok-only
      @ok="handleOk"
    >
      <div class="history__contain">
        <div class="border-bottom" v-if="currentMonth >= 1">
          <p class="text-danger h5">Quý 1 - Tháng 1 2 3</p>
          <p>Doanh thu: {{ handleReturnTotal(quarterHistory["Quý 1"]) }}</p>
        </div>
        <div class="border-bottom" v-if="currentMonth >= 4">
          <p class="text-danger h5">Quý 2 - Tháng 4 5 6</p>
          <p>Doanh thu: {{ handleReturnTotal(quarterHistory["Quý 2"]) }}</p>
        </div>
        <div class="border-bottom" v-if="currentMonth >= 7">
          <p class="text-danger h5">Quý 3 - Tháng 7 8 9</p>
          <p>Doanh thu: {{ handleReturnTotal(quarterHistory["Quý 3"]) }}</p>
        </div>
        <div class="border-bottom" v-if="currentMonth >= 10">
          <p class="text-danger h5">Quý 4 - Tháng 10 11 12</p>
          <p>Doanh thu: {{ handleReturnTotal(quarterHistory["Quý 4"]) }}</p>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { editUser, getHistory, getMoneyChart } from "../../api/auth/index";
import Autocomplete from "../../components/autocomplete/index.vue";
export default {
  props: ["currentAccount"],
  components: {
    Autocomplete,
  },
  data() {
    return {
      isEdit: false,
      createdDate: "",
      listHistory: [],
      currentYear: "",
      currentMonth: "",
      totalMoney: "",
      options: [
        {
          id: "1",
          name: "ADMIN",
        },
        {
          id: "2",
          name: "USER",
        },
      ],
      quarterHistory: {},
    };
  },
  async created() {
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth();
    await this.handleGetHistory();
    if (this.currentAccount.roleid == 1) {
      await this.handleGetMoneyChart(this.currentYear);
    }

    this.createdDate = this.currentAccount.createddate.replace("T00:00:00", "");
    this.totalMoney =
      new Intl.NumberFormat().format(this.currentAccount.bankBal) + " " + "VND";
  },
  methods: {
    async handleGetMoneyChart(currentYear) {
      const res = await getMoneyChart(currentYear);
      this.quarterHistory = res.data;
    },
    handleReturnTotal(money) {
      return new Intl.NumberFormat().format(money) + " " + "VND";
    },
    async handleGetHistory() {
      const res = await getHistory();
      this.listHistory = res.data;
    },
    handleCloseDetails() {
      this.$emit("handleCloseDetails");
    },
    async handleSaveEdit() {
      const res = await editUser({
        ...this.currentAccount,
      });
      this.isEdit = false;
      if (res.status == 200) {
        this.handleCloseDetails();
        this.$emit("handleGetAllUser");
      } else {
        alert("Something when wrong please check API");
      }
    },
  },
};
</script>

<style>
.borderInput {
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
.h48 {
  height: 50px !important;
}
.customPadding {
  padding-right: 15px;
}
.user__info {
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
  background-color: #fff;
}
.user__title {
  color: #333333;
}
</style>