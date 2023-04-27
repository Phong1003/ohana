<template>
  <div class="container_new_room d-flex justify-content-center">
    <div class="container_filter bg-white h-100">
      <div class="d-flex justify-content-between align-items-center px-4 pt-4">
        <div style="font-size: 24px; font-weight: 500">Bộ lọc</div>
        <div class="apply" @click="applyFilter">Áp dụng</div>
      </div>
      <div class="collapse_filter">
        <b-button
          class="d-flex align-items-center justify-content-between px-4 mt-3"
          @click="price"
          v-b-toggle.collapse-1
        >
          <div>Giá</div>
          <b-icon
            :class="{ rotatePrice: priceActive ? true : false }"
            icon="chevron-right"
          ></b-icon>
        </b-button>
        <b-collapse id="collapse-1" class="mt-2 px-4">
          <b-form-group>
            <b-form-radio-group
              v-model="priceRadio"
              :options="optionsPrice"
              name="radios-price"
              stacked
            ></b-form-radio-group>
          </b-form-group>
        </b-collapse>
        <b-button
          v-b-toggle.collapse-2
          class="d-flex align-items-center justify-content-between px-4"
          @click="utilities"
        >
          <div>Tiện ích</div>
          <b-icon
            :class="{ rotateUtilities: utilitiesActive ? true : false }"
            icon="chevron-right"
          ></b-icon>
        </b-button>
        <b-collapse id="collapse-2" class="mt-2 px-4">
          <b-form-checkbox-group
            v-model="ulitiesCheck"
            :options="optionsUlities"
            class="mb-3"
            value-field="item"
            text-field="name"
          ></b-form-checkbox-group>
        </b-collapse>
        <b-button
          class="d-flex align-items-center justify-content-between px-4"
          @click="typeRoom"
          v-b-toggle.collapse-3
        >
          <div>Loại phòng</div>
          <b-icon
            :class="{ rotateRoom: roomActive ? true : false }"
            icon="chevron-right"
          ></b-icon>
        </b-button>
        <b-collapse id="collapse-3" class="mt-2 px-4">
          <b-form-group>
            <b-form-radio-group
              v-model="categoryRadio"
              :options="listCategory"
              name="radios-category"
              stacked
            ></b-form-radio-group>
          </b-form-group>
        </b-collapse>
        <b-button
          class="d-flex align-items-center justify-content-between px-4"
          @click="gender"
          v-b-toggle.collapse-4
        >
          <div>Giới tính</div>
          <b-icon
            :class="{ rotateGender: genderActive ? true : false }"
            icon="chevron-right"
          ></b-icon>
        </b-button>
        <b-collapse id="collapse-4" class="mt-2 px-4">
          <b-form-group>
            <b-form-radio-group
              v-model="genderRadio"
              :options="optionsGender"
              name="radios-gender"
              stacked
            ></b-form-radio-group>
          </b-form-group>
        </b-collapse>
      </div>
      <div
        @click="applyFilter"
        class="d-flex align-items-center justify-content-center py-4"
        style="font-size: 16px; color: #4877f8; cursor: pointer"
      >
        Áp dụng
      </div>
    </div>
    <div class="new_room bg-white">
      <div
        class="d-flex justify-content-between align-items-center"
        style="margin-bottom: 32px"
      >
        <div class="title_new_room">Phòng mới nhất</div>
      </div>
      <div
        class="content_room"
        v-for="(item, index) in lists"
        :key="index"
        @click="routerDetails(item)"
      >
        <CardRoom :contentRoom="item" />
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
  </div>
</template>

<script>
import CardRoom from "@/components/listRoom/index.vue";
import { search } from "../../../api/dashboard/index";
import { categoryApi } from "../../../api/auth/index";
export default {
  layout: "defaults",
  components: { CardRoom },
  data() {
    return {
      priceActive: false,
      utilitiesActive: false,
      roomActive: false,
      genderActive: false,
      currentPage: 1,
      perPage: 5,
      listRoom: [],
      priceRadio: "",
      categoryRadio: "",
      genderRadio: "",
      ulitiesCheck: [],
      optionsPrice: [
        { text: "1tr-5tr", value: "first" },
        { text: "6tr-10tr", value: "second" },
        { text: "11tr-15tr", value: "third" },
      ],
      optionsGender: [
        { text: "Tất cả", value: "all" },
        { text: "Nam", value: "man" },
        { text: "Nữ", value: "woman" },
      ],
      optionsUlities: [
        { item: "1", name: "WC riêng" },
        { item: "2", name: "Wifi" },
        { item: "3", name: "An ninh" },
        { item: "4", name: "Cửa sổ" },
      ],
      listCategory: [
        {
          text: "",
          value: "",
        },
      ],
    };
  },
  computed: {
    lists() {
      const items = [...this.listRoom];
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    totalRows() {
      return this.listRoom.length;
    },
  },
  async created() {
    await this.handleGetCategory();
    try {
      const response = await search({
        searchQuery: "",
        price: "",
        category: "",
        utilities: [],
        noSex: "",
        status: "1",
        pageNumber: 0,
        pageSize: 10,
      });
      if (response && response.data.length) {
        this.listRoom = response.data.map((item) => {
          return {
            id: item.room.id,
            img: item.room.imgRoom,
            nameRoom: item.room.name,
            typeRoom: item.room.category,
            sex: item.room.noSex == 0 ? 'Tất cả' : item.room.noSex == 1 ? 'Nam' : item.room.noSex == 2 ? 'Nữ' : '',
            acreage: item.room.capacity,
            address: item.room.address,
            area: item.room.area,
            price: new Intl.NumberFormat().format(item.room.price),
          };
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    handleChangePage() {},
    price() {
      this.priceActive = !this.priceActive;
    },
    utilities() {
      this.utilitiesActive = !this.utilitiesActive;
    },
    typeRoom() {
      this.roomActive = !this.roomActive;
    },
    gender() {
      this.genderActive = !this.genderActive;
    },
    routerDetails(item) {
      this.$router.push({
        name: "viewAll-newRoom-id",
        params: { id: item.id },
      });
    },
    async applyFilter() {
      try {
        const response = await search({
          searchQuery: "",
          price: this.priceRadio,
          category: this.categoryRadio,
          utilities: this.ulitiesCheck,
          noSex: this.genderRadio,
          status: "",
          pageNumber: 0,
          pageSize: 10,
        });
        if (response) {
          if (response.data.length) {
            this.listRoom = response.data.map((item) => {
              return {
                img: item.imgRoom[0].imgRoom,
                nameRoom: item.room.name,
                typeRoom: item.room.category,
                sex: item.room.noSex == 0 ? 'Tất cả' : item.room.noSex == 1 ? 'Nam' : item.room.noSex == 2 ? 'Nữ' : '',
                acreage: item.room.capacity,
                address: item.room.address,
                area: item.room.area,
                price: new Intl.NumberFormat().format(item.room.price),
              };
            });
            console.log(this.listRoom);
          } else {
            this.listRoom = [];
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    async handleGetCategory() {
      try {
        const response = await categoryApi();
        this.listCategory = response.data.map((item) => {
          return {
            text: item.name,
            value: item.id,
          };
        });
        console.log(this.listCategory);
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>

<style scoped>
.container_new_room {
  padding: 32px;
}
.container_filter {
  border-radius: 20px;
  width: 400px;
  margin-right: 32px;
}
.apply {
  font-size: 16px;
  color: #4877f8;
  border: 1px solid #4877f8;
  border-radius: 16px;
  cursor: pointer;
  padding: 4px 12px;
}
.collapse_filter {
  background-color: beige;
}
.collapse_filter .btn-secondary {
  color: #333333 !important;
  background-color: beige !important;
  border-bottom: 1px solid grey !important;
  width: 100%;
  border: none;
  height: 50px;
}
.collapse_filter .btn-secondary:focus {
  border-color: unset !important;
  box-shadow: unset !important;
}
.rotatePrice,
.rotateUtilities,
.rotateRoom,
.rotateGender {
  transform: rotate(90deg);
  transition: 0.5s;
}
.new_room {
  padding: 32px;
  border-radius: 20px;
  width: 69%;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
}
.title_new_room {
  font-size: 24px;
  font-weight: 500;
}
.content_room {
  border-bottom: 1px solid #cdcdcd;
}
</style>