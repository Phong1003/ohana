<template>
  <div class="house__detail__container">
    <div v-if="!isShowEdit">
      <div class="image__container mb-4 d-flex justify-content-center">
        <div class="col-6 px-0 image__first mr-1">
          <img
            src="~/assets/images/binhthanh.jpg"
            alt="binh thanh"
            class="image__cover"
          />
        </div>
        <div class="col-6 px-0 cover__image__before d-flex">
          <div class="col-6 px-0 image__before mr-1">
            <div class="h-100 mb-1">
              <img
                src="~/assets/images/binhthanh.jpg"
                alt="binh thanh"
                class="image__cover"
              />
            </div>
            <div class="h-100 mt-1">
              <img
                src="~/assets/images/binhthanh.jpg"
                alt="binh thanh"
                class="image__cover"
              />
            </div>
          </div>
          <div class="col-6 px-0 image__before">
            <div class="h-100 mb-1">
              <img
                src="~/assets/images/binhthanh.jpg"
                alt="binh thanh"
                class="image__cover"
              />
            </div>
            <div class="h-100 mt-1">
              <img
                src="~/assets/images/binhthanh.jpg"
                alt="binh thanh"
                class="image__cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="content__section mb-3">
        <div class="title__cover d-flex justify-content-between">
          <p class="title">{{ dataDetail.name }}</p>
          <div class="h3 cursor-pointer mr-3">
            <b-button class="bg-primary border-primary">
              <b-icon icon="box-arrow-up-right"></b-icon>
              <span>Chia sẻ</span>
            </b-button>
          </div>
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
                  <p class="field__value">{{ dataDetail.price }} VNĐ</p>
                </div>
                <div class="d-flex flex-column col-3">
                  <p class="mb-0 field__name">DIỆN TÍCH</p>
                  <p class="field__value">
                    {{ dataDetail.capacity }} mét vuông
                  </p>
                </div>
                <div class="d-flex flex-column col-3">
                  <p class="mb-0 field__name">ĐẶT CỌC</p>
                  <p class="field__value">{{ dataDetail.deposit }} VNĐ</p>
                </div>
                <div class="d-flex flex-column col-3">
                  <p class="mb-0 field__name">ĐỐI TƯỢNG CHO THUÊ</p>
                  <p class="field__value">
                    {{ dataDetail.noSex == 0 ? 'Tất cả' : dataDetail.noSex == 1 ? 'Nam' : dataDetail.noSex == 2 ? 'Nữ' : '' }}
                  </p>
                </div>
              </div>
              <div class="house__info mt-4 d-flex">
                <div class="d-flex flex-column col-3">
                  <p class="mb-0 field__name">GIÁ ĐIỆN</p>
                  <p class="field__value">
                    {{ dataDetail.electricprice }}
                  </p>
                </div>
                <div class="d-flex flex-column col-3">
                  <p class="mb-0 field__name">GIÁ NƯỚC</p>
                  <p class="field__value">
                    {{ dataDetail.waterprice }}
                  </p>
                </div>
                <div class="d-flex flex-column col-3">
                  <p class="mb-0 field__name">TIỀN TIỆN ÍCH</p>
                  <p class="field__value">
                    {{ dataDetail.otherprice }}
                  </p>
                </div>
                <div class="d-flex flex-column col-3">
                  <p class="mb-0 field__name">TRẠNG THÁI</p>
                  <p class="field__value text-success status__value">
                    Còn phòng
                  </p>
                </div>
              </div>
              <div class="house__localtion">
                <div class="d-flex flex-column">
                  <p class="mb-0 field__name">ĐỊA CHỈ</p>
                  <p class="field__value">
                    {{ dataDetail.address }}, {{ dataDetail.area }}
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
                <div class="col-3 h-100 d-flex justify-content-start mt-4" v-for="(item, index) in optionsUlities" :key="index">
                  <img
                    :src="item.img"
                    alt="toilet"
                    class="icon__custom"
                  />
                  <span class="icon__title">{{item.name}}</span>
                </div>
              </div>
            </div>
            <div class="notice__details mt-5">
              <div class="house__title d-flex align-items-center">
                <b-icon
                  icon="exclamation-circle"
                  class="bg-light mr-3"
                  variant="danger"
                  font-scale="2"
                ></b-icon>
                <p class="mb-0">Lưu ý</p>
              </div>
              <div class="capacity__container mt-3">
                <p class="capacity__title">Sức chứa</p>
              </div>
              <div class="capacity__options d-flex">
                <div class="option col-4">
                  <p class="option__type">Rộng</p>
                  <div class="option__title bg-info">3 người</div>
                </div>
                <div class="option col-4">
                  <p class="option__type">Vừa</p>
                  <div class="option__title bg-success">4 người</div>
                </div>
                <div class="option col-4">
                  <p class="option__type">Chật</p>
                  <div class="option__title bg-warning">5 người +</div>
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
              <div class="info__section">
                HÀ NỘI không ở bây giờ thì sau này quay về Hà Nội khó hơn đó !!
                <br />
                <br />
                👌🏻THANH NHÀN ở gần hồ và các trường học. Diện tích 36m2. Trong
                phòng gồm: giường, tủ, điều hoà, bình nóng lạnh, cửa sổ thoáng
                mát. Vê sinh khép kín . Giá chỉ có : 3,6tr (nếu ở 1 người )
                3,8tr ( nếu ở 2 người)
                <br />
                ❌Nhà không chung chủ nên cần thanh toán tiền nhà 3 tháng cọc 1
                tháng, FREE giúp việc, FREE để xe. ( Nơi đây chỉ dành cho ai
                THẬT SỰ THÍCH SẠCH SẼ – VĂN MINH – THOÁI MÁI )
              </div>
            </div>
          </div>
          <div class="owner__section col-4 ml-2">
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
              <div class="d-flex">
                <img
                  src="~/assets/images/avatar.png"
                  alt="binh thanh"
                  class="avatar__cover"
                />
                <div class="contact">
                  <span class="mb-0 mr-2">{{ dataDetail.houseowner }}</span>
                  <div class="d-flex flex-column mr-2">
                    <span>SĐT:</span>
                    <span> {{ dataDetail.ownerphone }} </span>
                  </div>
                </div>
                <div class="d-flex created_date ml-3 mb-2 align-items-end">
                  <div class="d-flex flex-column mr-2">
                    <span>SĐT:</span>
                    <span> {{ dataDetail.ownerphone }} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <EditHome v-else />
  </div>
</template>

<script>
import { search } from "../../api/dashboard";
import EditHome from "../../components/view/create/newHome.vue";

export default {
  components: {
    EditHome,
  },
  data() {
    return {
      dataDetail: "",
      response: "",
      isShowEdit: false,
      optionsUlities: [
        { item: '1', name: 'WC riêng', img: require('@/assets/icon/toilet.svg') },
        { item: '2', name: 'Wifi', img: require('@/assets/icon/wifi.svg') },
        { item: '3', name: 'An ninh', img: require('@/assets/icon/police-officer.svg') },
        { item: '4', name: 'Cửa sổ', img: require('@/assets/icon/window.svg') }
      ],
    };
  },
  async created() {
    this.isShowEdit = this.$route.params.edit;
    await this.handleGetData();
    for (const item of this.response.data) {
      if (item.room.id == this.$route.params.id) {
        this.dataDetail = { ...item.room };
      }
    }
    console.log(this.dataDetail);
    this.optionsUlities = this.optionsUlities.map(el => {
      if(this.dataDetail.utilities.includes(el.item)){
        return el
      }
    }).filter(data => data != undefined)
  },
  methods: {
    async handleGetData() {
      try {
        this.response = await search({
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
  },
};
</script>

<style>
@import "@/assets/css/details/index.css";
</style>