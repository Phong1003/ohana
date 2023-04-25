<template>
  <div class="house__detail__container">
    <div class="content__section mb-3">
      <div class="title">
        <p class="h2">Tạo phòng mới!</p>
      </div>
      <div
        class="title__cover d-flex flex-column h-100 justify-content-between"
      >
        <h4 class="mb-3">Title <span class="text-danger">(*)</span></h4>
        <b-form-input placeholder="Nhập title cho phòng"></b-form-input>
      </div>
      <div class="files__holder">
        <h4 class="mb-3">
          Chọn ảnh mô tả cho phòng <span class="text-danger">(*)</span>
        </h4>
        <b-form-file
          v-model="fileHolder"
          :state="true"
          placeholder="Choose a file..."
          drop-placeholder="Drop file here..."
          multiple
        >
        </b-form-file>
      </div>
      <div class="information__section mt-4">
        <div class="house__section px-0">
          <div class="house__detail mb-4">
            <div class="house__title d-flex align-items-center">
              <b-icon
                icon="person-fill"
                class="bg-light mr-3"
                variant="primary"
                font-scale="2"
              ></b-icon>
              <p class="mb-0">Thông tin chủ phòng</p>
            </div>
            <div class="house__info mt-4 d-flex">
              <div class="d-flex flex-column col-6">
                <p class="mb-0 field__name mb-2">
                  CHỦ PHÒNG <span class="text-danger">(*)</span>
                </p>
                <b-form-input v-model="roomInfo.houseowner"></b-form-input>
              </div>
              <div class="d-flex flex-column col-6">
                <p class="mb-0 field__name mb-2">
                  SĐT <span class="text-danger">(*)</span>
                </p>
                <b-form-input v-model="roomInfo.ownerphone"></b-form-input>
              </div>
            </div>
          </div>
          <div class="house__detail">
            <div class="house__title d-flex align-items-center">
              <b-icon
                icon="house-door-fill"
                class="bg-light mr-3"
                variant="danger"
                font-scale="2"
              ></b-icon>
              <p class="mb-0">Thông tin phòng</p>
            </div>
            <div class="house__info mt-4 d-flex">
              <div class="d-flex flex-column col-6">
                <p class="mb-0 field__name mb-2">
                  GIÁ PHÒNG <span class="text-danger">(*)</span>
                </p>
                <b-form-input
                  v-model="roomInfo.price"
                  placeholder="Nhập giá phòng"
                ></b-form-input>
              </div>
              <div class="d-flex flex-column col-6">
                <p class="mb-0 field__name mb-2">
                  DIỆN TÍCH <span class="text-danger">(*)</span>
                </p>
                <b-form-input
                  v-model="roomInfo.capacity"
                  placeholder="Nhập diện tích phòng"
                ></b-form-input>
              </div>
            </div>
            <div class="house__info mt-4 d-flex">
              <div class="d-flex flex-column col-6">
                <p class="mb-0 field__name mb-2">
                  ĐẶT CỌC <span class="text-danger">(*)</span>
                </p>
                <b-form-input
                  v-model="roomInfo.deposit"
                  placeholder="Nhập tiền cần cọc"
                ></b-form-input>
              </div>
              <div class="d-flex flex-column col-6">
                <p class="mb-0 field__name mb-2">
                  SỨC CHỨA <span class="text-danger">(*)</span>
                </p>
                <b-form-input placeholder="VD: 2 nam hoặc nữ"></b-form-input>
              </div>
            </div>
            <div class="house__info mt-4 d-flex">
              <div class="d-flex flex-column col-12">
                <p class="mb-0 field__name mb-2">
                  ĐỊA CHỈ <span class="text-danger">(*)</span>
                </p>
                <b-form-input
                  v-model="roomInfo.address"
                  placeholder="VD: Số 180 Phạm Hùng, Trung Hoà, Cầu Giấy, Hà Nội"
                ></b-form-input>
              </div>
            </div>
          </div>
          <div class="furniture__details mt-5">
            <div class="house__title d-flex align-items-center">
              <b-icon
                icon="list-check"
                class="bg-light mr-3"
                variant="danger"
                font-scale="2"
              ></b-icon>
              <p class="mb-0">Tiện ích</p>
            </div>
            <div class="mt-3 d-flex flex-wrap">
              <div
                class="checkbox__custom align-items-center col-4 d-flex justify-content-start mt-3"
              >
                <b-form-checkbox>
                  <img
                    src="~/assets/icon/toilet.svg"
                    alt="toilet"
                    class="icon__custom"
                  />
                  <span class="icon__title">WC riêng</span>
                </b-form-checkbox>
              </div>
              <div
                class="checkbox__custom align-items-center col-4 d-flex justify-content-start mt-3"
              >
                <b-form-checkbox>
                  <img
                    src="~/assets/icon/wifi.svg"
                    alt="wifi"
                    class="icon__custom"
                  />
                  <span class="icon__title">Wifi</span>
                </b-form-checkbox>
              </div>
              <div
                class="checkbox__custom align-items-center col-4 d-flex justify-content-start mt-3"
              >
                <b-form-checkbox>
                  <img
                    src="~/assets/icon/police-officer.svg"
                    alt="police-officer"
                    class="icon__custom"
                  />
                  <span class="icon__title">An ninh</span>
                </b-form-checkbox>
              </div>

              <div
                class="checkbox__custom align-items-center col-4 d-flex justify-content-start mt-3"
              >
                <b-form-checkbox>
                  <img
                    src="~/assets/icon/window.svg"
                    alt="window"
                    class="icon__custom"
                  />
                  <span class="icon__title">Cửa sổ</span>
                </b-form-checkbox>
              </div>
            </div>
          </div>
          <div class="more__information mt-5">
            <div class="house__title d-flex align-items-center">
              <b-icon
                icon="info"
                class="bg-light mr-3"
                variant="dark"
                font-scale="2"
              ></b-icon>
              <p class="mb-0">Mô tả thêm</p>
            </div>
            <div class="info__section mt-3">
              <b-form-textarea
                v-model="roomInfo.description"
                placeholder="Nhập thông tin mô tả cho phòng."
              ></b-form-textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 d-flex justify-content-end">
        <b-button class="bg-primary button__create" @click="handleAddNewHome()"
          >ADD NEW</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { createApi } from "../../../api/auth/index";

export default {
  data() {
    return {
      fileHolder: [],
      roomInfo: {
        name: "",
        address: "",
        category: "",
        area: "",
        capacity: "",
        description: "",
        price: "",
        deposit: "",
        electricprice: "",
        waterprice: "",
        otherprice: "",
        houseowner: "",
        ownerphone: "",
        imgRoom: [],
        noSex: "",
        utilities: "",
      },
    };
  },
  methods: {
    async handleAddNewHome() {
      try {
        const response = await createApi(this.roomInfo);
        console.log(response);
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>

<style>
@import '@/assets/css/createNew/index.css';
</style>