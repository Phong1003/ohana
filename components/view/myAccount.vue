<template>
  <div class="container">
    <div class="user__info">
      <div class="d-flex justify-content-between">
        <h4 class="user__title">Thông tin tài khoản</h4>
        <div v-if="!isEdit" class="h4 cursor-pointer mr-3">
          <b-button @click="isEdit = true" class="bg-primary border-primary">
            <b-icon icon="plus-square"></b-icon>
            <span>Chỉnh sửa</span>
          </b-button>
        </div>
      </div>
      <div class="user__details">
        <div class="d-flex flex-wrap">
          <div class="d-flex flex-column col-6 mt-3">
            <p class="mb-0 field__name mb-2">
              Tên <span class="text-danger">(*)</span>
            </p>
            <b-form-input
              v-model="userInfo.fullName"
              :disabled="!isEdit"
            ></b-form-input>
          </div>
          <div class="d-flex flex-column col-6 mt-3">
            <p class="mb-0 field__name mb-2">
              Giới tính <span class="text-danger">(*)</span>
            </p>
            <b-form-input
              v-model="userInfo.gender"
              :disabled="!isEdit"
            ></b-form-input>
          </div>
          <div class="d-flex flex-column col-6 mt-3">
            <p class="mb-0 field__name mb-2">
              Quyền <span class="text-danger">(*)</span>
            </p>
            <b-form-input
              v-model="userInfo.role"
              :disabled="!isEdit"
            ></b-form-input>
          </div>
          <div class="d-flex flex-column col-6 mt-3">
            <p class="mb-0 field__name mb-2">
              Địa chỉ <span class="text-danger">(*)</span>
            </p>
            <b-form-input
              v-model="userInfo.address"
              :disabled="!isEdit"
            ></b-form-input>
          </div>
          <div class="d-flex flex-column col-6 mt-3">
            <p class="mb-0 field__name mb-2">
              Số điện thoại <span class="text-danger">(*)</span>
            </p>
            <b-form-input
              v-model="userInfo.phone"
              :disabled="!isEdit"
            ></b-form-input>
          </div>
        </div>
        <div
          v-if="isEdit"
          class="h4 mt-3 cursor-pointer d-flex justify-content-end"
        >
          <b-button @click="handleSaveEdit()" class="bg-primary border-primary">
            <b-icon icon="cloud-arrow-up"></b-icon>
            <span>Lưu</span>
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        fullName: "",
        phone: "",
        role: "",
        gender: "Nam",
        address: "121 Kim Ngưu",
      },
      isEdit: false,
    };
  },
  created() {
    if (typeof window !== "undefined") {
      this.userInfo = {
        ...this.userInfo,
        fullName: sessionStorage.getItem("fullName"),
        phone: sessionStorage.getItem("phone"),
        role: sessionStorage.getItem("role"),
      };
    }
  },
  methods: {
    handleSaveEdit() {
      this.isEdit = false;
    },
  },
};
</script>

<style>
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
</style>