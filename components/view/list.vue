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
    <div
      class="items"
      @click="routerDetails()"
      v-for="(item, index) in lists"
      :key="index"
    >
      <div class="action-contain pt-2 px-3 d-flex">
        <div class="icon-action mr-2 h5 cursor-pointer">
          <b-button class="bg-success border-success">
            <b-icon icon="pencil-square"> </b-icon>
            <span>Chỉnh sửa</span>
          </b-button>
        </div>
        <div class="icon-action mr-2 h5 cursor-pointer">
          <b-button class="bg-danger border-danger">
            <b-icon icon="trash"></b-icon>
            <span>Xóa</span>
          </b-button>
        </div>
      </div>
      <a target="_blank" class="info-contain">
        <div class="item__details my-3 d-flex justify-content-between">
          <div class="col-4">
            <img
              src="~/assets/images/TrungHoa-CG.jpg"
              alt="house"
              class="item__image"
            />
          </div>
          <div class="col-8 px-0 d-flex flex-column">
            <div class="item__title">
              <p>{{ item.title }}</p>
            </div>
            <div class="d-flex">
              <div class="col-10 px-0 item__info">
                <div class="mb-3">
                  <b-icon icon="house"></b-icon>
                  <span> {{ item.typeOfHouse }} </span>
                </div>
                <div class="mb-3">
                  <b-icon icon="people"></b-icon>
                  <span class="mr-3">{{ item.gender }}</span>
                  <b-icon icon="rulers"></b-icon>
                  <span>{{ item.square }}</span>
                </div>
                <div
                  :id="'location' + `${index}`"
                  class="d-flex align-items-center"
                >
                  <b-icon icon="pin-map" class="mr-1"></b-icon>
                  <span class="item__location">{{ item.location }}</span>
                  <b-tooltip :target="'location' + `${index}`"
                    >{{ item.location }}
                  </b-tooltip>
                </div>
              </div>
              <div
                class="col-2 item__price flex-column d-flex align-items-center"
              >
                <span class="price">{{ item.price }}</span>
                <span class="currency"> {{ item.currency }} </span>
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
export default {
  props: ["showList"],
  data() {
    return {
      currentPage: 1,
      perPage: 3,
      roomInfo: {
        name: "phong",
        address: "121 kim nguu",
        category: "123",
        area: "hai ba trung",
        capacity: "3",
        description: "phong tro danh cho 3 nguoi",
        price: "3.000.000",
        deposit: "2",
        electricprice: "4000",
        waterprice: "24000",
        otherprice: "100000",
        houseowner: "tran van phong",
        ownerphone: "0969966566",
        imgRoom: "",
      },
    };
  },
  computed: {
    lists() {
      const items = this.showList;
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    totalRows() {
      return this.showList.length;
    },
  },
  methods: {
    createNewRoom() {
      this.$router.push({ name: "create" });
    },
    handleChangePage() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    routerDetails() {
      this.$router.push({ name: "details" });
    },
  },
};
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
.item__details {
  line-height: 22px;
  font-size: 20px;
}
.items a {
  text-decoration: none;
  color: #000000;
}
.item__info {
  font-size: 16px;
  font-weight: 500;
  font-family: Nunito-SemiBold;
  color: #666666;
}
.item__info p {
  font-size: 20px;
  color: #000;
  font-weight: bold;
}
.item__location {
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 24px;
  height: 24px;
  -webkit-line-clamp: 1;
}
.item__price {
  display: block;
  color: #f73486;
}
.price {
  font-weight: bold;
  font-size: 48px;
  line-height: 68px;
  font-family: Nunito-Bold;
}
.currency {
  font-size: 16px;
  line-height: 24px;
  font-family: Nunito-Regular;
}
.item__title {
  font-size: 20px;
  color: #000;
  font-weight: bold;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  display: -webkit-box;
  height: 22px;
  -webkit-line-clamp: 1;
  font-family: Nunito-SemiBold;
  margin-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 22px;
}
.item__image {
  width: 216px;
  height: 152px;
  border-radius: 8px;
  -o-object-fit: cover;
  object-fit: cover;
}
.list__container {
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
  background-color: #fff;
}
.list__title {
  padding-bottom: 20px;
  color: #333333;
}
.list__title h4 {
  color: #333333;
}
.items {
  border-bottom: 1px solid #cdcdcd;
  height: inherit;
}
.info-contain:hover {
  opacity: 0.7;
}
.items:last-child {
  border-bottom: none;
}
.contain {
  padding: 56px 0;
}
.cover {
  background-color: #f6f5f2;
}
</style>