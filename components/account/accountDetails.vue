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
        <b-button @click="isEdit = true" class="bg-primary border-primary">
          <b-icon icon="pencil-square"></b-icon>
          <span>Chỉnh sửa</span>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { editUser } from "../../api/auth/index";
import Autocomplete from "../../components/autocomplete/index.vue";
export default {
  props: ["currentAccount"],
  components: {
    Autocomplete,
  },
  data() {
    return {
      isEdit: false,
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
    };
  },
  methods: {
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