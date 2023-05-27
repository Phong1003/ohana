<template>
  <div class="house__detail__container">
    <div v-if="!isShowEdit">
      <b-overlay :show="isLoading" rounded="sm">
        <div class="image__container mb-4 d-flex justify-content-center">
          <div
            v-if="dataDetail?.imgRoom?.length && dataDetail.imgRoom[0]"
            class="col-6 px-0 image__first mr-1"
            v-viewer
          >
            <img
              :src="dataDetail.imgRoom[0]"
              alt="binh thanh"
              class="image__cover"
            />
          </div>
          <div class="col-6 px-0 cover__image__before d-flex">
            <div class="col-6 px-0 image__before mr-1">
              <div
                class="h-100 mb-1"
                v-if="dataDetail?.imgRoom?.length && dataDetail?.imgRoom[1]"
                v-viewer
              >
                <img
                  :src="dataDetail.imgRoom[1]"
                  alt="binh thanh"
                  class="image__cover"
                />
              </div>
              <div
                class="h-100 mt-1"
                v-if="dataDetail?.imgRoom?.length && dataDetail?.imgRoom[2]"
                v-viewer
              >
                <img
                  :src="dataDetail.imgRoom[2]"
                  alt="binh thanh"
                  class="image__cover"
                />
              </div>
            </div>
            <div class="col-6 px-0 image__before">
              <div
                class="h-100 mb-1"
                v-if="dataDetail?.imgRoom?.length && dataDetail?.imgRoom[3]"
                v-viewer
              >
                <img
                  :src="dataDetail.imgRoom[3]"
                  alt="binh thanh"
                  class="image__cover"
                />
              </div>
              <div
                class="h-100 mt-1"
                v-if="dataDetail?.imgRoom?.length && dataDetail?.imgRoom[4]"
                v-viewer
              >
                <img
                  :src="dataDetail.imgRoom[4]"
                  alt="binh thanh"
                  class="image__cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="content__section mb-3">
          <div class="title__cover d-flex justify-content-between">
            <p class="title">{{ dataDetail.room?.name }}</p>
          </div>
          <div class="information__section d-flex mt-4 justify-content-center">
            <div class="house__section col-8 px-0">
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
                  <div class="d-flex flex-column col-3">
                    <p class="mb-0 field__name">GIÁ PHÒNG</p>
                    <p class="field__value">{{ dataDetail.room?.price }} VNĐ</p>
                  </div>
                  <div class="d-flex flex-column col-3">
                    <p class="mb-0 field__name">DIỆN TÍCH</p>
                    <p class="field__value">
                      {{ dataDetail.room?.capacity }} mét vuông
                    </p>
                  </div>
                  <div class="d-flex flex-column col-3">
                    <p class="mb-0 field__name">ĐẶT CỌC</p>
                    <p class="field__value">
                      {{ dataDetail.room?.deposit }} VNĐ
                    </p>
                  </div>
                  <div class="d-flex flex-column col-3">
                    <p class="mb-0 field__name">ĐỐI TƯỢNG CHO THUÊ</p>
                    <p class="field__value">
                      {{
                        dataDetail.room?.noSex == "0"
                          ? "Nam"
                          : dataDetail.room?.noSex == "1"
                          ? "Nữ"
                          : dataDetail.room?.noSex == "2"
                          ? "Nam & Nữ"
                          : "Nam & Nữ"
                      }}
                    </p>
                  </div>
                </div>
                <div class="house__info mt-4 d-flex">
                  <div class="d-flex flex-column col-3">
                    <p class="mb-0 field__name">GIÁ ĐIỆN</p>
                    <p class="field__value">
                      {{ dataDetail.room?.electricprice }}
                    </p>
                  </div>
                  <div class="d-flex flex-column col-3">
                    <p class="mb-0 field__name">GIÁ NƯỚC</p>
                    <p class="field__value">
                      {{ dataDetail.room?.waterprice }}
                    </p>
                  </div>
                  <div class="d-flex flex-column col-3">
                    <p class="mb-0 field__name">TIỀN TIỆN ÍCH</p>
                    <p class="field__value">
                      {{ dataDetail.room?.otherprice }}
                    </p>
                  </div>
                  <div class="d-flex flex-column col-3">
                    <p class="mb-0 field__name">TRẠNG THÁI</p>
                    <p
                      class="field__value text-success status__value"
                      :class="
                        dataDetail.room?.status == 3
                          ? 'text-danger'
                          : 'text-success '
                      "
                    >
                      {{
                        dataDetail.room?.status != 3
                          ? "Còn phòng"
                          : "Đã cho thuê"
                      }}
                    </p>
                  </div>
                </div>
                <div class="house__localtion">
                  <div class="d-flex flex-column">
                    <p class="mb-0 field__name">ĐỊA CHỈ</p>
                    <p class="field__value">
                      {{ dataDetail.room?.address }},
                      {{ dataDetail.room?.area }}
                    </p>
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
                    class="col-3 h-100 d-flex justify-content-start mt-4"
                    v-for="(item, index) in optionsUlities"
                    :key="index"
                  >
                    <img :src="item.img" alt="toilet" class="icon__custom" />
                    <span class="icon__title">{{ item.name }}</span>
                  </div>
                </div>
              </div>
              <div
                class="notice__details mt-5"
                v-if="dataDetail.room?.status == 3"
              >
                <div class="house__title d-flex align-items-center">
                  <b-icon
                    icon="exclamation-circle"
                    class="bg-light mr-3"
                    variant="danger"
                    font-scale="2"
                  ></b-icon>
                  <p class="mb-0">Thông tin người thuê phòng</p>
                </div>
                <div
                  class="capacity__options d-flex flex-column mt-3 border-bottom"
                  v-for="(tenant, index) in listTenant"
                  @click="getCurrentTenant(tenant)"
                  v-b-modal.payment
                  :key="index"
                >
                  <form ref="form" class="d-flex" v-if="tenant.status">
                    <b-form-group
                      label="Họ và tên"
                      class="mr-3"
                      label-for="name-input"
                    >
                      <b-form-input
                        class="h35"
                        id="name-input"
                        :disabled="true"
                        v-model="tenant.name"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Địa chỉ"
                      class="mr-3"
                      label-for="name-input"
                    >
                      <b-form-input
                        class="h35"
                        :disabled="true"
                        id="name-input"
                        v-model="tenant.adress"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Số điện thoại"
                      class="mr-3"
                      label-for="name-input"
                    >
                      <b-form-input
                        class="h35"
                        id="name-input"
                        :disabled="true"
                        type="number"
                        v-model="tenant.phone"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="CMND/CCCD"
                      class="mr-3"
                      label-for="name-input"
                    >
                      <b-form-input
                        class="h35"
                        type="number"
                        :disabled="true"
                        id="name-input"
                        v-model="tenant.cartId"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Ngày thuê phòng"
                      class="mr-3"
                      label-for="name-input"
                    >
                      <b-form-input
                        class="h35"
                        :disabled="true"
                        id="name-input"
                        v-model="tenant.dateJoin"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </form>
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
                  {{ dataDetail.room?.description }}
                </div>
              </div>
            </div>
            <div class="owner__section col-4 ml-4">
              <div>
                <div class="house__title d-flex align-items-center">
                  <b-icon
                    icon="person-fill"
                    class="bg-light mr-3"
                    variant="primary"
                    font-scale="2"
                  ></b-icon>
                  <p class="mb-0">Thông tin chủ phòng</p>
                </div>
                <div class="owner__info mt-4">
                  <div class="d-flex flex-column pd15">
                    <div class="d-flex mr-2 justify-content-around">
                      <span class="mr-3 col-6" style="width: 81px"
                        >Chủ nhà:</span
                      >
                      <span class="mb-0 mr-2 col-6">{{
                        dataDetail.room?.houseowner
                      }}</span>
                    </div>
                    <div class="d-flex mr-2 justify-content-around mt-3">
                      <span class="mr-3 col-6" style="width: 81px"
                        >Số điện thoại:</span
                      >
                      <span class="mb-0 mr-2 col-6">
                        {{ dataDetail.room?.ownerphone }}
                      </span>
                    </div>
                    <div class="d-flex mr-2 justify-content-around mt-3">
                      <span class="mr-3 col-6">Ngày đăng:</span>
                      <span class="mb-0 mr-2 col-6">{{
                        dataDetail.room?.createddate.replace("T00:00:00", "")
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-overlay>
      <b-modal
        id="payment"
        ref="tenantModal"
        title="Thông tin người thuê phòng"
        @hidden="closeTenantModal"
      >
        <div
          v-if="alert.isShow"
          class="d-flex align-items-center justify-content-center bg-success mb-3"
          :class="alert.status == 'success' ? 'bg-success' : 'bg-danger'"
        >
          <h4 class="mr-2 text-white mb-0">{{ alert.message }}</h4>
        </div>
        <form ref="form">
          <b-form-group label="Họ và tên" label-for="name-input">
            <b-form-input
              class="h35"
              id="name-input"
              v-model="tenant.name"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Địa chỉ" label-for="name-input">
            <b-form-input
              class="h35"
              id="name-input"
              v-model="tenant.adress"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Số điện thoại" label-for="name-input">
            <b-form-input
              class="h35"
              id="name-input"
              type="number"
              v-model="tenant.phone"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="CMND/CCCD" label-for="name-input">
            <b-form-input
              class="h35"
              type="number"
              id="name-input"
              v-model="tenant.cartId"
              required
            ></b-form-input>
          </b-form-group>
        </form>
        <div class="h4 cursor-pointer mr-3">
          <b-button
            class="bg-success border-success mr-3"
            @click="handleUpdateTenant()"
          >
            <b-icon icon="pen"></b-icon>
            <span>Chỉnh sửa</span>
          </b-button>
          <b-button
            class="bg-danger border-danger"
            @click="handleDeleteTenant()"
          >
            <b-icon icon="trash"></b-icon>
            <span>Xóa</span>
          </b-button>
        </div>
        <template #modal-footer="{ cancel }">
          <b-button size="sm" variant="danger" @click="cancel()">
            Cancel
          </b-button>
        </template>
      </b-modal>
    </div>
    <EditHome v-else />
  </div>
</template>

<script>
import {
  GetDetail,
  getTenantRoom,
  updateTenant,
  delTenant,
} from "../../api/auth/index";
import { search, searchUser } from "../../api/dashboard";
import EditHome from "../../components/view/create/newHome.vue";
import { directive as viewer } from "v-viewer";
import "viewerjs/dist/viewer.css";

export default {
  components: {
    EditHome,
  },
  directives: {
    viewer: viewer({
      debug: true,
    }),
  },
  data() {
    return {
      alert: {
        isShow: false,
        status: "",
        message: "",
      },
      isEditTenant: false,
      tenant: {
        name: "",
        adress: "",
        phone: "",
        cartId: "",
        idTenant: "",
        status: 1,
      },
      dataDetail: [],
      isLoading: true,
      response: "",
      isShowEdit: false,
      optionsUlities: [
        {
          item: "1",
          name: "WC riêng",
          img: require("@/assets/icon/toilet.svg"),
        },
        { item: "2", name: "Wifi", img: require("@/assets/icon/wifi.svg") },
        {
          item: "3",
          name: "An ninh",
          img: require("@/assets/icon/police-officer.svg"),
        },
        { item: "4", name: "Cửa sổ", img: require("@/assets/icon/window.svg") },
      ],
      listTenant: [],
      checkRole: "",
      res: "",
    };
  },
  async created() {
    if (typeof window !== "undefined") {
      this.checkRole = sessionStorage.getItem("role");
    }
    this.isShowEdit = this.$route.params.edit;
    await this.getDetails();
    await this.handleGetTenantInRoom();
  },
  methods: {
    handleShowAlertModal(show, status, message) {
      this.alert = {
        isShow: show,
        status: status,
        message: message,
      };
    },
    getCurrentTenant(tenant) {
      this.tenant = { ...tenant, idTenant: tenant.id };
    },
    async handleGetTenantInRoom() {
      const res = await getTenantRoom(this.$route.params.id);
      this.listTenant = [];
      for (let item of res.data) {
        this.listTenant.push({
          ...item,
          dateJoin: item.dateJoin.replace("T00:00:00", ""),
        });
      }
    },
    async handleUpdateTenant() {
      const res = await updateTenant(this.tenant);
      if (res.status == 200) {
        this.handleShowAlertModal(true, "success", "Chỉnh sửa thành công");
        this.handleGetTenantInRoom();
        setTimeout(() => {
          this.$bvModal.hide("payment");
        }, 3000);
      } else {
        this.handleShowAlertModal(true, "danger", "Chỉnh sửa thất bại");
      }
    },
    async handleDeleteTenant() {
      const res = await delTenant({ tenantId: this.tenant.id });
      if (res.status == 200) {
        this.handleShowAlertModal(true, "success", "Xóa thành công");
        this.handleGetTenantInRoom();
        setTimeout(() => {
          this.$bvModal.hide("payment");
        }, 3000);
      } else {
        this.handleShowAlertModal(true, "danger", "Xóa thất bại");
      }
    },
    handlePayRoomMonth() {},
    closePaymentModal() {},
    async getDetails() {
      this.res = await GetDetail(this.$route.params.id);
      this.dataDetail = this.res.data;
      this.optionsUlities = this.optionsUlities
        .map((el) => {
          if (this.dataDetail.utilities?.includes(el.item)) {
            return el;
          }
        })
        .filter((data) => data != undefined);
      if (Object.keys(this.dataDetail)) {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style>
@import "@/assets/css/details/index.css";
.pd15 {
  padding: 0 15px;
}
</style>