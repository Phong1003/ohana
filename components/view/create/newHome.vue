<template>
  <div class="house__detail__container">
    <b-overlay :show="isLoading" rounded="sm">
      <div class="content__section mb-3">
        <div class="title d-flex justify-content-between">
          <p class="h2">{{ isEdit ? "Chỉnh sửa phòng" : "Tạo phòng mới!" }}</p>
          <b-icon
            @click="goBack"
            style="cursor: pointer"
            icon="x-lg"
            font-scale="1"
          ></b-icon>
        </div>
        <div
          class="title__cover d-flex flex-column h-100 justify-content-between"
        >
          <h4 class="mb-3">Title <span class="text-danger">(*)</span></h4>
          <b-form-input
            v-model="roomInfo.name"
            placeholder="Nhập title cho phòng"
            :required="objError.name.status"
          ></b-form-input>
          <b-form-invalid-feedback class="d-block" v-if="objError.name.status">
            {{ objError.name.error }}
          </b-form-invalid-feedback>
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
            <b-form-invalid-feedback
              class="d-block"
              v-if="objError.file.status"
            >
              {{ objError.file.error }}
            </b-form-invalid-feedback>
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
                  <b-form-input
                    v-model="roomInfo.houseowner"
                    :disabled="true"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    class="d-block"
                    v-if="objError.houseowner.status"
                  >
                    {{ objError.houseowner.error }}
                  </b-form-invalid-feedback>
                </div>
                <div class="d-flex flex-column col-6">
                  <p class="mb-0 field__name mb-2">
                    SĐT <span class="text-danger">(*)</span>
                  </p>
                  <b-form-input
                    v-model="roomInfo.ownerphone"
                    :disabled="true"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    class="d-block"
                    v-if="objError.ownerphone.status"
                  >
                    {{ objError.ownerphone.error }}
                  </b-form-invalid-feedback>
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
                    :required="objError.price.status"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    class="d-block"
                    v-if="objError.price.status"
                  >
                    {{ objError.price.error }}
                  </b-form-invalid-feedback>
                </div>
                <div class="d-flex flex-column col-6">
                  <p class="mb-0 field__name mb-2">
                    DIỆN TÍCH <span class="text-danger">(*)</span>
                  </p>
                  <b-form-input
                    v-model="roomInfo.capacity"
                    placeholder="Nhập diện tích phòng"
                    :required="objError.capacity.status"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    class="d-block"
                    v-if="objError.capacity.status"
                  >
                    {{ objError.capacity.error }}
                  </b-form-invalid-feedback>
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
                    :required="objError.deposit.status"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    class="d-block"
                    v-if="objError.deposit.status"
                  >
                    {{ objError.deposit.error }}
                  </b-form-invalid-feedback>
                </div>
                <div class="d-flex flex-column col-6">
                  <p class="mb-0 field__name mb-2">
                    TIỀN ĐIỆN <span class="text-danger">(*)</span>
                  </p>
                  <b-form-input
                    v-model="roomInfo.electricprice"
                    placeholder="Nhập tiền điện"
                    :required="objError.electricprice.status"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    class="d-block"
                    v-if="objError.electricprice.status"
                  >
                    {{ objError.electricprice.error }}
                  </b-form-invalid-feedback>
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
                    :required="objError.waterprice.status"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    class="d-block"
                    v-if="objError.waterprice.status"
                  >
                    {{ objError.waterprice.error }}
                  </b-form-invalid-feedback>
                </div>
                <div class="d-flex flex-column col-6">
                  <p class="mb-0 field__name mb-2">
                    PHÍ TIỆN ÍCH <span class="text-danger">(*)</span>
                  </p>
                  <b-form-input
                    v-model="roomInfo.otherprice"
                    placeholder="Nhập tiền tiện ích"
                    :required="objError.otherprice.status"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    class="d-block"
                    v-if="objError.otherprice.status"
                  >
                    {{ objError.otherprice.error }}
                  </b-form-invalid-feedback>
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
                    :required="objError.address.status"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    class="d-block"
                    v-if="objError.address.status"
                  >
                    {{ objError.address.error }}
                  </b-form-invalid-feedback>
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
                    :required="objError.category.status"
                  >
                  </b-form-select>
                  <b-form-invalid-feedback
                    class="d-block"
                    v-if="objError.category.status"
                  >
                    {{ objError.category.error }}
                  </b-form-invalid-feedback>
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
import { search, searchUser } from "../../../api/dashboard";

export default {
  data() {
    return {
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
        houseowner: sessionStorage.getItem("fullName"),
        ownerphone: sessionStorage.getItem("phone"),
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
      isLoading: true,
      objError: {
        check: false,
        name: { error: "Vui lòng nhập title", status: false },
        address: { error: "Vui lòng nhập địa chỉ", status: false },
        houseowner: { error: "Vui lòng nhập tên chủ nhà", status: false },
        ownerphone: { error: "Vui lòng nhập số điện thoại", status: false },
        price: { error: "Vui lòng nhập giá phòng", status: false },
        deposit: { error: "Vui lòng nhập tiền cọc", status: false },
        capacity: { error: "Vui lòng nhập diện tích phòng", status: false },
        electricprice: { error: "Vui lòng nhập giá điện", status: false },
        waterprice: { error: "Vui lòng nhập giá nước", status: false },
        otherprice: { error: "Vui lòng nhập giá chi phí khác", status: false },
        category: { error: "Vui lòng nhập loại phòng", status: false },
        file: { error: "Vui lòng chọn 5 file ảnh", status: false },
      },
      isEdit: false,
      checkRole: "",
    };
  },
  components: {
    validation() {
      return this.roomInfo.name.length;
    },
  },
  async created() {
    if (typeof window !== "undefined") {
      this.checkRole = sessionStorage.getItem("role");
    }
    if (this.$route.params.edit) {
      this.isEdit = true;
      if (this.checkRole == "ADMIN") {
        await this.handleGetData();
      } else {
        await this.handleGetDataUser();
      }
      for (const item of this.response.data) {
        if (item.room.id == this.$route.params.id) {
          this.roomInfo = { ...item.room };
          this.roomInfo.utilities = item.utilities;
          this.imgList = item.imgRoom;
        }
      }
    }
    if (Object.keys(this.roomInfo)) {
      this.isLoading = false;
    }
    await this.handleGetCategory();
  },
  methods: {
    handleValidateForm() {
      this.objError.check = true;
      this.validateForm();
    },
    validateForm() {
      try {
        if (this.objError.check) {
          this.objError.name.status = !this.roomInfo.name;
          this.objError.address.status = !this.roomInfo.address;
          this.objError.houseowner.status = !this.roomInfo.houseowner;
          this.objError.ownerphone.status = !this.roomInfo.ownerphone;
          this.objError.price.status = !this.roomInfo.price;
          this.objError.electricprice.status = !this.roomInfo.electricprice;
          this.objError.deposit.status = !this.roomInfo.deposit;
          this.objError.capacity.status = !this.roomInfo.capacity;
          this.objError.waterprice.status = !this.roomInfo.waterprice;
          this.objError.otherprice.status = !this.roomInfo.otherprice;
          this.objError.category.status = !this.roomInfo.category;
          this.objError.file.status = this.imgList.length == 5 ? false : true;

          this.objError.isFormError =
            this.objError.name.status ||
            this.objError.address.status ||
            this.objError.houseowner.status ||
            this.objError.ownerphone.status ||
            this.objError.price.status ||
            this.objError.deposit.status ||
            this.objError.capacity.status ||
            this.objError.electricprice.status ||
            this.objError.waterprice.status ||
            this.objError.otherprice.status ||
            this.objError.category.status ||
            this.objError.file.status;
        }
        return;
      } catch (error) {
        console.log("validateForm", error);
      }
    },
    goBack() {
      this.$router.push({ name: this.checkRole == "ADMIN" ? "Admin" : "User" });
    },
    removeItem(index) {
      this.imgList.splice(index, 1);
    },
    async handleEditHome() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      this.isLoading = true;
      this.handleValidateForm();
      if (this.objError.isFormError) return;
      try {
        const params = {
          ...this.roomInfo,
          imgRoom: this.imgList,
          utilities:
            this.roomInfo.utilities == null ? [] : this.roomInfo.utilities,
        };
        const res = await editRoomsApi(params);
        if (res.status != 200) {
          this.isLoading = false;
        } else {
          this.isLoading = false;
          setTimeout(() => {
            this.$router.push({ name: "Admin" });
          }, 1000);
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async handleGetData() {
      try {
        this.response = await search({
          address: "",
          searchQuery: "",
          price: "",
          category: "",
          utilities: [],
          noSex: "",
          status: "",
          pageNumber: 0,
          pageSize: 10,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async handleGetDataUser() {
      try {
        this.response = await searchUser({
          address: "",
          price: "",
          category: "",
          utilities: [],
          noSex: "",
          status: "",
          pageNumber: 0,
          pageSize: 10,
          searchQuery: "",
        });
      } catch (error) {
        console.log(error);
      }
    },
    async handleAddNewHome() {
      try {
        await this.handleValidateForm();
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (this.objError.isFormError) {
          return;
        }
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