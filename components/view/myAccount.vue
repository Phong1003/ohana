<template>
  <div class="container">
    <div class="user__info">
      <div class="d-flex justify-content-between">
        <h4 class="user__title">Thông tin tài khoản</h4>
        <div
          class="h4 mt-3 cursor-pointer d-flex justify-content-end customPadding"
        >
          <b-button
            class="d-flex align-items-center border-0"
            style="height: 30px; background-color: #007bff"
            v-b-modal.modal-prevent-closing
          >
            <div>Nạp tiền</div>
          </b-button>
        </div>
      </div>
      <div
        v-if="rechargeSuccess"
        class="d-flex align-items-center justify-content-center"
        :class="alertStatus == 'success' ? 'bg-success' : 'bg-danger'"
      >
        <div class="mr-2 text-white">{{ alertMessage }}</div>
      </div>
      <div class="user__details">
        <div class="d-flex flex-wrap">
          <div class="d-flex flex-column col-6 mt-3">
            <p class="mb-0 field__name mb-2">
              Tên <span class="text-danger">(*)</span>
            </p>
            <b-form-input
              class="h50"
              v-model="userInfo.fullname"
              :disabled="!isEdit"
            ></b-form-input>
          </div>
          <div class="d-flex flex-column col-6 mt-3">
            <p class="mb-0 field__name mb-2">
              Email <span class="text-danger">(*)</span>
            </p>
            <b-form-input
              class="h50"
              v-model="userInfo.email"
              :disabled="!isEdit"
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
                :value="userInfo.roleid"
                :displayAttribute="'name'"
                :valueAttribute="'id'"
                :isHeight50="true"
                :optionDropdowns="options"
                :isDisabled="true"
                @changeValue="(value) => (this.userInfo.roleid = value)"
              />
            </b-form-group>
          </div>
          <div class="d-flex flex-column col-6 mt-3">
            <p class="mb-0 field__name mb-2">
              Số điện thoại <span class="text-danger">(*)</span>
            </p>
            <b-form-input
              class="h50"
              v-model="userInfo.phone"
              :disabled="!isEdit"
            ></b-form-input>
          </div>
          <div class="d-flex flex-column col-6 mt-3">
            <p class="mb-0 field__name mb-2">
              Số tiền hiện có <span class="text-danger">(*)</span>
            </p>
            <b-form-input
              class="h50"
              v-model="totalMoney"
              :disabled="true"
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
        <div
          v-else
          class="h4 mt-3 cursor-pointer d-flex justify-content-end customPadding"
        >
          <b-button
            class="bg-danger border-danger mr-3"
            v-b-modal.change-password
          >
            <b-icon icon="key"></b-icon>
            <span>Đổi mật khẩu</span>
          </b-button>
          <b-button @click="isEdit = true" class="bg-primary border-primary">
            <b-icon icon="pencil-square"></b-icon>
            <span>Chỉnh sửa</span>
          </b-button>
        </div>
      </div>
      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Nạp tiền vào tài khoản"
        modal-class="form_money"
        @show="resetModal"
        @hidden="resetModal"
        @ok="recharge"
      >
        <form ref="form">
          <b-form-group
            label="Số tiền cần nạp"
            label-for="name-input"
            invalid-feedback="money is required"
            :state="nameState"
          >
            <b-form-input
              class="h50"
              id="name-input"
              v-model="moneys"
              :state="moneyState"
              required
            ></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
      <b-modal
        id="change-password"
        ref="modal"
        title="Thay đổi mật khẩu"
        modal-class="form_money"
        @show="resetForm"
        @hidden="resetForm"
        @ok="handleSaveEdit"
      >
        <form ref="form">
          <b-form-group
            label="Mật khẩu hiện tại"
            label-for="name-input"
            invalid-feedback="Vui lòng nhập mật khẩu hiện tại"
            :state="currentState"
          >
            <b-form-input
              class="h50"
              id="currentPass"
              v-model="currentPassword"
              :state="currentState"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Mật khẩu mới"
            label-for="name-input"
            invalid-feedback="Vui lòng nhập mật khẩu mới"
            :state="newState"
          >
            <b-form-input
              class="h50"
              id="newPass"
              v-model="userInfo.newPassword"
              :state="newState"
              required
            ></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>
  </div>
</template>

<script>
import {
  editUser,
  getAllUser,
  getMoney,
  getUserByToken,
} from "../../api/auth/index";
export default {
  data() {
    return {
      userInfo: {
        fullname: "",
        phone: "",
        roleid: "",
        email: "",
        password: "",
        status: "",
        newPassword: "",
      },
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
      isEdit: false,
      moneys: "",
      moneyState: null,
      totalMoney: "",
      rechargeSuccess: false,
      alertStatus: "",
      currentPassword: "",
      currentState: null,
      newState: null,
      alertMessage: "",
    };
  },
  async created() {
    await this.getMoneyUser();
  },
  methods: {
    async handleSaveEdit() {
      try {
        await editUser({
          newPassword: this.userInfo.newPassword
            ? this.userInfo.newPassword
            : "",
          phone: this.userInfo.phone,
          password: this.userInfo.newPassword
            ? this.currentPassword
            : this.userInfo.password,
          fullname: this.userInfo.fullname,
          status: 1,
          roleid: this.userInfo.roleid,
          email: this.userInfo.email,
        });
        this.handleShowAlert(true, "success", "Thay đổi thông tin thành công");
        setTimeout(() => {
          this.rechargeSuccess = false;
        }, 3000);
        this.isEdit = false;
      } catch (error) {
        this.isEdit = false;
        this.handleShowAlert(true, "danger", "Thay đổi thông tin thất bại");
      }
    },
    async recharge() {
      try {
        await getMoney({
          money: this.moneys,
        });
        this.handleShowAlert(true, "success", "Nạp tiền thành công");
        this.getMoneyUser();
        setTimeout(() => {
          this.rechargeSuccess = false;
        }, 3000);
      } catch (error) {
        this.handleShowAlert(true, "danger", "Nạp tiền thất bại");
      }
    },
    handleShowAlert(isShow, status, message) {
      this.rechargeSuccess = isShow;
      this.alertStatus = status;
      this.alertMessage = message;
    },
    async getMoneyUser() {
      try {
        const res = await getUserByToken();
        this.userInfo = { ...res.data };
        this.totalMoney =
          new Intl.NumberFormat().format(res.data.bankBal) + " " + "VND";
      } catch (error) {
        console.log(error);
      }
    },
    resetModal() {
      this.moneys = "";
      this.moneyState = null;
    },
    resetForm() {
      this.currentPassword = "";
      this.userInfo.newPassword = "";
      this.currentState = null;
      this.newState = null;
    },
  },
};
</script>

<style>
.h50 {
  height: 50px !important;
}
.user__info {
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
  background-color: #fff;
}
.user__title {
  padding-bottom: 20px;
  color: #333333;
}
.modal-backdrop {
  width: unset !important;
  height: unset !important;
}
.customPadding {
  padding: 0 15px;
}
</style>