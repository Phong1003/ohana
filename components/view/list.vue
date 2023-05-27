<template>
  <div class="list__container">
    <b-overlay :show="isLoading" rounded="sm">
      <div
        v-if="isShowMessage"
        class="d-flex align-items-center justify-content-center bg-success mb-3"
        :class="alertStatus == 'success' ? 'bg-success' : 'bg-danger'"
      >
        <h4 class="mr-2 text-white">{{ alertMessage }}</h4>
      </div>
      <div class="d-flex justify-content-between">
        <h4 class="list__title">Tất cả các phòng</h4>
        <div class="h4 cursor-pointer mr-3">
          <b-button @click="createNewRoom()" class="bg-primary border-primary">
            <b-icon icon="plus-square"></b-icon>
            <span>Tạo mới</span>
          </b-button>
        </div>
      </div>
      <div class="items" v-for="(item, index) in lists" :key="index">
        <div class="d-flex justify-content-between">
          <div class="action-contain pt-2 px-3 d-flex">
            <div class="icon-action mr-2 h5" v-if="!item.room.status">
              <b-button class="bg-info border-info non-cursor">
                <b-icon icon="emoji-neutral"></b-icon>
                <span>Chưa xác nhận</span>
              </b-button>
            </div>
            <div
              class="icon-action mr-2 h5"
              v-if="item.room.status == 1 || item.room.status == 2"
            >
              <b-button class="bg-primary border-primary non-cursor">
                <b-icon icon="emoji-sunglasses"></b-icon>
                <span>Đã xác nhận</span>
              </b-button>
            </div>
            <div class="icon-action mr-2 h5" v-if="item.room.status == 3">
              <b-button class="bg-primary border-primary non-cursor">
                <b-icon icon="emoji-sunglasses"></b-icon>
                <span>Đã cho thuê</span>
              </b-button>
            </div>
            <div class="icon-action mr-2 h5" v-if="item.room.status == -1">
              <b-button class="bg-danger border-danger non-cursor">
                <b-icon icon="emoji-frown"></b-icon>
                <span>Đã từ chối</span>
              </b-button>
            </div>
          </div>
          <div class="action-contain pt-2 px-3 d-flex">
            <div
              class="icon-action mr-2 h5 cursor-pointer"
              v-if="item.room.createdby == currentEmail"
            >
              <b-button
                @click="handleEditRoom(item.room.id)"
                class="bg-success border-success"
              >
                <b-icon icon="pencil-square"> </b-icon>
                <span>Chỉnh sửa</span>
              </b-button>
            </div>
            <div
              class="icon-action mr-2 h5 cursor-pointer"
              v-if="!item.room.status && checkRole == 'ADMIN'"
            >
              <b-button
                @click="handleActiveRoom(item.room.id, 1)"
                class="bg-warning border-warning"
              >
                <b-icon icon="emoji-smile"></b-icon>
                <span>Xác nhận</span>
              </b-button>
            </div>
            <div class="icon-action mr-2 h5 cursor-pointer">
              <b-button
                class="bg-primary border-primary"
                v-b-modal.addTenant
                v-if="
                  item.room.createdby == currentEmail &&
                  item.room.status &&
                  item.room.status != 3
                "
                @click="handleAddTenant(item.room.id)"
              >
                <b-icon icon="person-plus"></b-icon>
                <span>Cho thuê</span>
              </b-button>
            </div>
            <div
              class="icon-action mr-2 h5 cursor-pointer"
              v-if="!item.room.status && checkRole == 'ADMIN'"
            >
              <b-button
                class="bg-secondary border-secondary"
                @click="handleActiveRoom(item.room.id, -1)"
              >
                <b-icon icon="emoji-frown"></b-icon>
                <span>Từ chối</span>
              </b-button>
            </div>
            <div class="icon-action mr-2 h5 cursor-pointer">
              <b-button
                @click="handleGetRoomID(item.room.id)"
                class="bg-danger border-danger"
                v-b-modal.deleteRoom
              >
                <b-icon icon="trash"></b-icon>
                <span>Xóa</span>
              </b-button>
            </div>
          </div>
        </div>
        <a
          target="_blank"
          class="info-contain"
          @click="routerDetails(item.room.id)"
        >
          <div class="item__details my-3 d-flex justify-content-between">
            <div class="col-4">
              <img :src="item.room.imgRoom" class="w-100 img__custom h-100" />
            </div>
            <div class="col-8 px-0 d-flex flex-column">
              <div class="item__title">
                <p>{{ item.room.name }}</p>
              </div>
              <div class="d-flex">
                <div class="col-7 px-0 item__info">
                  <div class="mb-4">
                    <b-icon icon="house"></b-icon>
                    <span>
                      {{ handleReturnNameCategory(item.room.category) }}
                    </span>
                  </div>
                  <div class="mb-4">
                    <b-icon icon="people"></b-icon>
                    <span class="mr-3">
                      {{
                        item.room.noSex == 0
                          ? "Nam"
                          : item.room.noSex == 1
                          ? "Nữ"
                          : item.room.noSex == 2
                          ? "Tất cả"
                          : ""
                      }}</span
                    >
                    <b-icon icon="rulers"></b-icon>
                    <span>{{ item.room.capacity }}</span>
                  </div>
                  <div
                    :id="'location' + `${index}`"
                    class="d-flex align-items-center"
                  >
                    <b-icon icon="pin-map" class="mr-1"></b-icon>
                    <span class="item__location">{{ item.room.address }}</span>
                    <b-tooltip :target="'location' + `${index}`"
                      >{{ item.room.address }}
                    </b-tooltip>
                  </div>
                </div>
                <div class="col-5 item__price d-flex align-items-center price">
                  {{ new Intl.NumberFormat().format(item.room.price) }}/
                  <span style="font-size: 20px">phòng</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="text-center h4" v-if="!listHouse.length && !isLoading">
        Hiện tại bạn chưa có phòng nào
      </div>
      <div
        v-if="listHouse.length"
        class="overflow-auto d-flex justify-content-center mt-3"
      >
        <b-pagination
          :total-rows="totalRows"
          v-model="currentPage"
          :per-page="perPage"
          first-text="First"
          prev-text="Prev"
          next-text="Next"
          last-text="Last"
          @page-click="handleChangePage"
        />
      </div>
    </b-overlay>
    <!-- delete room modal -->
    <b-modal
      id="deleteRoom"
      ref="modal"
      title="Bạn có muốn xóa phòng này không?"
      modal-class="form_money"
      @hidden="closeModal"
      @ok="handleDeleteRoom(roomID)"
    >
      <div class="d-block text-center">
        <h3>Xác nhận xóa phòng</h3>
      </div>
    </b-modal>
    <!-- tenant modal  -->
    <b-modal
      id="addTenant"
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
        <b-form-group label="Mã phòng cần thuê" label-for="name-input">
          <b-form-input
            :disabled="true"
            class="h35"
            id="name-input"
            v-model="tenant.idRoom"
            required
          ></b-form-input>
        </b-form-group>
      </form>
      <div class="h4 cursor-pointer mr-3">
        <b-button
          @click="handleAddNewTenant()"
          class="bg-primary border-primary"
        >
          <b-icon icon="plus-square"></b-icon>
          <span>Thêm</span>
        </b-button>
      </div>
      <template #modal-footer="{ cancel }">
        <b-button size="sm" variant="danger" @click="cancel()">
          Cancel
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import {
  categoryApi,
  activeRoom,
  deleteRoom,
  newTenant,
} from "../../api/auth/index";

export default {
  props: ["listHouse", "isLoading"],
  data() {
    return {
      currentPage: 1,
      perPage: 5,
      listCategory: [],
      checkRole: "",
      listImg: [],
      currentEmail: "",
      roomID: "",
      isShowMessage: false,
      alertStatus: "",
      alertMessage: "",
      tenant: {
        name: "",
        adress: "",
        phone: "",
        cartId: "",
        idRoom: "",
      },
      alert: {
        isShow: false,
        status: "",
        message: "",
      },
    };
  },
  computed: {
    lists() {
      const items = [...this.listHouse];
      if (items.length) {
        return items.slice(
          (this.currentPage - 1) * this.perPage,
          this.currentPage * this.perPage
        );
      }
    },
    totalRows() {
      return this.listHouse.length;
    },
  },
  watch: {
    listHouse: function (val) {
      if (val.length) {
        this.isLoading = false;
      }
    },
  },
  async created() {
    await this.handleGetCategory();
    if (typeof window !== "undefined") {
      this.checkRole = sessionStorage.getItem("role");
      this.currentEmail = sessionStorage.getItem("email");
    }
  },
  methods: {
    handleAddTenant(roomID) {
      this.tenant.idRoom = roomID;
    },
    async handleAddNewTenant() {
      const res = await newTenant(this.tenant);
      if (res.status == 200) {
        this.handleShowAlertModal(true, "success", "Thêm thành công!");
        this.handleActiveRoom(this.tenant.idRoom, 3);
      } else {
        this.handleShowAlertModal(true, "danger", "Thêm thất bại!");
      }
    },
    handleShowAlertModal(show, status, message) {
      this.alert = {
        isShow: show,
        status: status,
        message: message,
      };
    },
    handleGetRoomID(roomID) {
      this.roomID = roomID;
    },
    closeModal() {
      this.roomID = "";
    },
    closeTenantModal() {
      this.tenant = {
        name: "",
        address: "",
        phone: "",
        cartId: "",
        idRoom: "",
      };
    },
    handleReturnNameCategory(id) {
      const data = this.listCategory.find((el) => el.id == id);
      if (data) {
        return data.name;
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
    async handleActiveRoom(id, status) {
      try {
        const res = await activeRoom({ id: id, status: status });
        if (res.status == 200) {
          this.$router.go(0);
        } else {
          this.$emit("handleChangeLoading");
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    handleShowAlert(isShow, status, message) {
      this.isShowMessage = isShow;
      this.alertStatus = status;
      this.alertMessage = message;
    },
    async handleDeleteRoom(roomID) {
      try {
        const response = await deleteRoom({
          id: roomID,
        });
        if (response.status == 200) {
          this.handleShowAlert(true, "success", "Xóa phòng thành công");
          setTimeout(() => {
            this.isShowMessage = false;
            this.$router.go(0);
          }, 1000);
        }
      } catch (error) {
        this.handleShowAlert(true, "danger", "Xóa phòng thất bại");
        console.log("error", error);
      }
    },
    createNewRoom() {
      this.$router.push({ name: "create" });
    },
    handleEditRoom(roomID) {
      this.$router.push({
        name: this.checkRole == "ADMIN" ? "Admin-id" : "User-id",
        params: { id: roomID, edit: true },
      });
    },
    handleChangePage() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    routerDetails(value) {
      this.$router.push({
        name: this.checkRole == "ADMIN" ? "Admin-id" : "User-id",
        params: { id: value, edit: false },
      });
    },
  },
};
</script>

<style>
@import "@/assets/css/list/index.css";
.h35 {
  height: 35px !important;
}
.non-cursor {
  cursor: default !important;
  pointer-events: none !important;
}
.modal-content {
  max-width: 100% !important;
}
</style>