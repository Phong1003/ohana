<template>
  <div class="list__container">
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
      <div class="action-contain pt-2 px-3 d-flex">
        <div class="icon-action mr-2 h5 cursor-pointer">
          <b-button
            @click="handleEditRoom(item.room.id)"
            class="bg-success border-success"
          >
            <b-icon icon="pencil-square"> </b-icon>
            <span>Chỉnh sửa</span>
          </b-button>
        </div>
        <div class="icon-action mr-2 h5 cursor-pointer">
          <b-button
            @click="handleDeleteRoom(item.room.id)"
            class="bg-danger border-danger"
          >
            <b-icon icon="trash"></b-icon>
            <span>Xóa</span>
          </b-button>
        </div>
        <div
          class="icon-action mr-2 h5 cursor-pointer"
          v-if="!item.room.status && checkRole == 'ADMIN'"
        >
          <b-button
            @click="handleActiveRoom(item.room.id)"
            class="bg-primary border-primary"
          >
            <b-icon icon="check"></b-icon>
            <span>Xác nhận</span>
          </b-button>
        </div>
        <div class="icon-action mr-2 h5 cursor-pointer" v-if="item.room.status">
          <b-button class="bg-primary border-primary">
            <b-icon icon="hand-thumbs-up"></b-icon>
            <span>Đã xác nhận</span>
          </b-button>
        </div>
      </div>
      <a
        target="_blank"
        class="info-contain"
        @click="routerDetails(item.room.id)"
      >
        <div class="item__details my-3 d-flex justify-content-between">
          <div class="col-4">
            <img :src="item.imgRoom" class="w-100 img__custom h-100" />
          </div>
          <div class="col-8 px-0 d-flex flex-column">
            <div class="item__title">
              <p>{{ item.room.name }}</p>
            </div>
            <div class="d-flex">
              <div class="col-8 px-0 item__info">
                <div class="mb-4">
                  <b-icon icon="house"></b-icon>
                  <span>
                    {{ handleReturnNameCategory(item.room.category) }}
                  </span>
                </div>
                <div class="mb-4">
                  <b-icon icon="people"></b-icon>
                  <span class="mr-3"> Nam & Nữ</span>
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
              <div class="col-4 item__price d-flex align-items-center price">
                {{ new Intl.NumberFormat().format(item.room.price) }}/
                <span style="font-size: 20px">phòng</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="overflow-auto d-flex justify-content-center mt-3">
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
  </div>
</template>

<script>
import { categoryApi, activeRoom } from "../../api/auth/index";

export default {
  props: ["listHouse"],
  data() {
    return {
      currentPage: 1,
      perPage: 3,
      listCategory: [],
      checkRole: "",
      listImg: [],
    };
  },
  computed: {
    lists() {
      const items = this.listHouse;
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    totalRows() {
      return this.listHouse.length;
    },
  },
  async created() {
    await this.handleGetCategory();
    if (typeof window !== "undefined") {
      this.checkRole = sessionStorage.getItem("role");
    }
  },
  methods: {
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
    async handleActiveRoom(id) {
      try {
        const res = await activeRoom({ id: id, status: 1 });
      } catch (error) {
        console.log("error", error);
      }
    },
    createNewRoom() {
      this.$router.push({ name: "create" });
    },
    handleEditRoom(roomID) {
      this.$router.push({
        name: "Admin-id",
        params: { id: roomID, edit: true },
      });
    },
    handleDeleteRoom(roomID) {
      this.$emit("handleDeleteRoom", roomID);
    },
    handleChangePage() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    routerDetails(value) {
      this.$router.push({
        name: "Admin-id",
        params: { id: value, edit: false },
      });
    },
  },
};
</script>

<style>
@import "@/assets/css/list/index.css";
</style>