<template>
  <div class="house__detail__container">
    <b-overlay :show="isLoading" rounded="sm">
      <div class="content__section mb-3">
        <div class="title">
          <p class="h2">Tạo phòng mới!</p>
        </div>
        <div
          class="title__cover d-flex flex-column h-100 justify-content-between"
        >
          <h4 class="mb-3">Title <span class="text-danger">(*)</span></h4>
          <b-form-input
            v-model="roomInfo.name"
            placeholder="Nhập title cho phòng"
          ></b-form-input>
        </div>
        <div class="files__holder">
          <h4 class="mb-3">
            Chọn ảnh mô tả cho phòng <span class="text-danger">(*)</span>
          </h4>
          <div>
            <input
              type="file"
              id="fileInput"
              multiple
              @change="handleUploadImg"
            />
            <div v-if="imgList.length" class="d-flex">
              <div
                v-for="(item, index) in imgList"
                :key="index"
                class="mr-2 mt-3 cursor_pointer"
                @click="removeItem(index)"
              >
                <img :src="item" class="mr-2 custom__upload" />
              </div>
            </div>
          </div>
        </div>
        <div
          class="information__section mt-4"
          :class="imgList.length ? 'custom_height' : ''"
        >
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
                    TIỀN ĐIỆN <span class="text-danger">(*)</span>
                  </p>
                  <b-form-input
                    v-model="roomInfo.electricprice"
                    placeholder="Nhập tiền điện"
                  ></b-form-input>
                </div>
              </div>
              <div class="house__info mt-4 d-flex">
                <div class="d-flex flex-column col-6">
                  <p class="mb-0 field__name mb-2">
                    TIỀN NƯỚC <span class="text-danger">(*)</span>
                  </p>
                  <b-form-input
                    v-model="roomInfo.waterprice"
                    placeholder="Nhập tiền nước"
                  ></b-form-input>
                </div>
                <div class="d-flex flex-column col-6">
                  <p class="mb-0 field__name mb-2">
                    PHÍ TIỆN ÍCH <span class="text-danger">(*)</span>
                  </p>
                  <b-form-input
                    v-model="roomInfo.otherprice"
                    placeholder="Nhập tiền tiện ích"
                  ></b-form-input>
                </div>
              </div>
              <div class="house__info mt-4 d-flex">
                <div class="d-flex flex-column col-6">
                  <p class="mb-0 field__name mb-2">
                    ĐỊA CHỈ <span class="text-danger">(*)</span>
                  </p>
                  <b-form-input
                    v-model="roomInfo.address"
                    placeholder="VD: Số 180 Phạm Hùng, Trung Hoà, Cầu Giấy, Hà Nội"
                  ></b-form-input>
                </div>
                <div class="d-flex flex-column col-6">
                  <p class="mb-0 field__name mb-2">
                    LOẠI PHÒNG <span class="text-danger">(*)</span>
                  </p>
                  <b-form-select
                    v-model="roomInfo.category"
                    :options="listCategory"
                    value-field="id"
                    text-field="name"
                  >
                  </b-form-select>
                </div>
              </div>
              <div class="house__info mt-4 d-flex">
                <div class="d-flex flex-column col-6">
                  <p class="mb-0 field__name mb-2">
                    GIỚI TÍNH <span class="text-danger">(*)</span>
                  </p>
                  <b-form-select
                    v-model="roomInfo.noSex"
                    :options="optionsGender"
                    value-field="id"
                    text-field="name"
                  >
                  </b-form-select>
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
                <b-form-group class="w-100">
                  <b-form-checkbox-group
                    v-model="roomInfo.utilities"
                    id="checkbox-group"
                    name="utilities"
                    class="d-flex align-items-center justify-content-between w-100"
                  >
                    <div
                      class="checkbox__custom align-items-center col-3 d-flex justify-content-start mt-3"
                    >
                      <b-form-checkbox value="1">
                        <img
                          src="~/assets/icon/toilet.svg"
                          alt="toilet"
                          class="icon__custom"
                        />
                        <span class="icon__title">WC riêng</span>
                      </b-form-checkbox>
                    </div>
                    <div
                      class="checkbox__custom align-items-center col-3 d-flex justify-content-start mt-3"
                    >
                      <b-form-checkbox value="2">
                        <img
                          src="~/assets/icon/wifi.svg"
                          alt="wifi"
                          class="icon__custom"
                        />
                        <span class="icon__title">Wifi</span>
                      </b-form-checkbox>
                    </div>
                    <div
                      class="checkbox__custom align-items-center col-3 d-flex justify-content-start mt-3"
                    >
                      <b-form-checkbox value="3">
                        <img
                          src="~/assets/icon/police-officer.svg"
                          alt="police-officer"
                          class="icon__custom"
                        />
                        <span class="icon__title">An ninh</span>
                      </b-form-checkbox>
                    </div>
                    <div
                      class="checkbox__custom align-items-center col-3 d-flex justify-content-start mt-3"
                    >
                      <b-form-checkbox value="4">
                        <img
                          src="~/assets/icon/window.svg"
                          alt="window"
                          class="icon__custom"
                        />
                        <span class="icon__title">Cửa sổ</span>
                      </b-form-checkbox>
                    </div>
                  </b-form-checkbox-group>
                </b-form-group>
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
          <b-button
            v-if="!$route.params.edit"
            class="bg-primary button__create"
            @click="handleAddNewHome()"
            >ADD NEW</b-button
          >
          <b-button
            v-else
            class="bg-primary button__create"
            @click="handleEditHome()"
            >EDIT</b-button
          >
        </div>
      </div>
    </b-overlay>
  </div>
</template>

<script>
import { createApi, categoryApi, editRoomsApi } from "../../../api/auth/index";
import { search } from "../../../api/dashboard";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isLoading: true,
      listCategory: [],
      fileHolder: [],
      roomInfo: {
        name: "",
        address: "",
        category: null,
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
        utilities: [],
      },
      imgList: [],
      optionsGender: [
        { name: "Tất cả", id: "0" },
        { name: "Nam", id: "1" },
        { name: "Nữ", id: "2" },
      ],
      response: {},
    };
  },
  computed: {
    ...mapGetters("admin", ["roomDetails"]),
  },
  async created() {
    this.roomInfo = { ...this.roomDetails.room };
    this.roomInfo.utilities = this.roomDetails.utilities;
    this.imgList = this.roomDetails.imgRoom;
    if (Object.keys(this.roomInfo)) {
      this.isLoading = false;
    }
    await this.handleGetCategory();
  },
  methods: {
    removeItem(index) {
      this.imgList.splice(index, 1);
    },
    async handleEditHome() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      try {
        const params = {
          ...this.roomInfo,
          imgRoom: this.imgList,
          utilities:
            this.roomInfo.utilities == null ? [] : this.roomInfo.utilities,
        };
        await editRoomsApi(params);
      } catch (error) {
        console.log("error", error);
      }
    },
    async handleAddNewHome() {
      try {
        window.scrollTo({ top: 0, behavior: "smooth" });
        const params = {
          ...this.roomInfo,
          imgRoom: this.imgList,
        };
        const res = await createApi(params);
        if (res.status == 200) {
          this.$router.go(-1);
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async handleGetCategory() {
      try {
        const response = await categoryApi();
        this.listCategory = response.data;
        this.listCategory.unshift({
          id: null,
          code: "006",
          name: "Chọn loại phòng",
          status: "1",
          disabled: true,
        });
      } catch (error) {
        console.log("error", error);
      }
    },
    async handleCreateCategory() {
      try {
        await createCategoryApi(this.newCategory);
      } catch (error) {
        console.log("error", error);
      }
    },
    handleUploadImg(e) {
      let fileInput = e;
      const length = fileInput.target.files.length;
      for (let i = 0; i < length; i++) {
        const file = fileInput.target.files[i];
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          this.imgList.push(reader.result);
        });
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style>
@import "@/assets/css/createNew/index.css";
</style>