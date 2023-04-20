<template>
  <div class="house__detail__container">
    <div class="image__container mb-4 d-flex justify-content-center">
      <div class="col-6 px-0 image__first mr-1" v-viewer>
        <img
          @click="show"
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
        <p class="title">Căn hộ Phạm Hùng, Quận Cầu Giấy</p>
        <div class="h3 cursor-pointer mr-3">
          <b-button class="bg-primary border-primary">
            <b-icon icon="box-arrow-up-right"></b-icon>
            <span>Chia sẻ</span>
          </b-button>
        </div>
      </div>
      <div class="location__cover d-flex">
        <span class="mr-2"
          >HN<b-icon class="ml-2" icon="caret-right"></b-icon
        ></span>
        <span class="mr-2"
          >Cầu Giấy<b-icon class="ml-2" icon="caret-right"></b-icon>
        </span>
        <span>Phạm Hùng </span>
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
                <p class="field__value">7.000.000 VNĐ</p>
              </div>
              <div class="d-flex flex-column col-3">
                <p class="mb-0 field__name">DIỆN TÍCH</p>
                <p class="field__value">40 mét vuông</p>
              </div>
              <div class="d-flex flex-column col-3">
                <p class="mb-0 field__name">ĐẶT CỌC</p>
                <p class="field__value">7.000.000 VNĐ</p>
              </div>
              <div class="d-flex flex-column col-3">
                <p class="mb-0 field__name">SỨC CHỨA</p>
                <p class="field__value">3 Nam hoặc Nữ</p>
              </div>
            </div>
            <div class="house__status">
              <div class="d-flex flex-column">
                <p class="mb-0 field__name">TRẠNG THÁI</p>
                <p class="field__value text-success status__value">Còn phòng</p>
              </div>
            </div>
            <div class="house__localtion">
              <div class="d-flex flex-column">
                <p class="mb-0 field__name">ĐỊA CHỈ</p>
                <p class="field__value">
                  Số 180 Phạm Hùng, Phường Trung Hoà, Quận Cầu Giấy, Hà Nội
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
              <div class="col-3 h-100 d-flex justify-content-start mt-4">
                <img
                  src="~/assets/icon/air-conditioner-icon.svg"
                  alt="air-conditioner"
                  class="icon__custom"
                />
                <span class="icon__title">Điều hòa</span>
              </div>
              <div class="col-3 h-100 d-flex justify-content-start mt-4">
                <img
                  src="~/assets/icon/toilet.svg"
                  alt="toilet"
                  class="icon__custom"
                />
                <span class="icon__title">WC riêng</span>
              </div>
              <div class="col-3 h-100 d-flex justify-content-start mt-4">
                <img
                  src="~/assets/icon/wifi.svg"
                  alt="wifi"
                  class="icon__custom"
                />
                <span class="icon__title">Wifi</span>
              </div>
              <div class="col-3 h-100 d-flex justify-content-start mt-4">
                <img
                  src="~/assets/icon/clock.svg"
                  alt="clock"
                  class="icon__custom"
                />
                <span class="icon__title">Tự do</span>
              </div>
              <div class="col-3 h-100 d-flex justify-content-start mt-4">
                <b-icon icon="key" class="icon__custom"></b-icon>
                <span class="icon__title">Không chủ</span>
              </div>
              <div class="col-3 h-100 d-flex justify-content-start mt-4">
                <img
                  src="~/assets/icon/washing-machine.svg"
                  alt="washing-machine"
                  class="icon__custom"
                />
                <span class="icon__title">Máy giặt</span>
              </div>
              <div class="col-3 h-100 d-flex justify-content-start mt-4">
                <img
                  src="~/assets/icon/police-officer.svg"
                  alt="police-officer"
                  class="icon__custom"
                />
                <span class="icon__title">Bảo vệ</span>
              </div>
              <div class="col-3 h-100 d-flex justify-content-start mt-4">
                <img
                  src="~/assets/icon/bed.svg"
                  alt="bed"
                  class="icon__custom"
                />
                <span class="icon__title">Giường</span>
              </div>
              <div class="col-3 h-100 d-flex justify-content-start mt-4">
                <img
                  src="~/assets/icon/pot.svg"
                  alt="pot"
                  class="icon__custom"
                />
                <span class="icon__title">Nấu ăn</span>
              </div>
              <div class="col-3 h-100 d-flex justify-content-start mt-4">
                <img
                  src="~/assets/icon/wardrobe.svg"
                  alt="wardrobe"
                  class="icon__custom"
                />
                <span class="icon__title">Tủ đồ</span>
              </div>
              <div class="col-3 h-100 d-flex justify-content-start mt-4">
                <img
                  src="~/assets/icon/window.svg"
                  alt="window"
                  class="icon__custom"
                />
                <span class="icon__title">Cửa sổ</span>
              </div>
              <div class="col-3 h-100 d-flex justify-content-start mt-4">
                <img
                  src="~/assets/icon/water-heater.svg"
                  alt="water-heater"
                  class="icon__custom"
                />
                <span class="icon__title">Bình nóng lạnh</span>
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
              mát. Vê sinh khép kín . Giá chỉ có : 3,6tr (nếu ở 1 người ) 3,8tr
              ( nếu ở 2 người)
              <br />
              ❌Nhà không chung chủ nên cần thanh toán tiền nhà 3 tháng cọc 1
              tháng, FREE giúp việc, FREE để xe. ( Nơi đây chỉ dành cho ai THẬT
              SỰ THÍCH SẠCH SẼ – VĂN MINH – THOÁI MÁI )
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
                <span class="mb-0 mr-2">Cu Chung</span>
                <div class="d-flex flex-column mr-2">
                  <span>SĐT:</span>
                  <span> 0904964437 </span>
                </div>
              </div>
              <div class="d-flex created_date ml-3 mb-2 align-items-end">
                <div class="d-flex flex-column mr-2">
                  <span>SĐT:</span>
                  <span> 0904964437 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      listIcon: [
        {
          id: "1",
          source: "~/assets/icon/air-conditioner-icon.svg",
          title: "Điều hòa",
          sub_title: "air-conditioner",
        },
        {
          id: "2",
          source: "~/assets/icon/toilet.svg",
          title: "WC riêng",
          sub_title: "toilet",
        },
        {
          id: "3",
          source: "~/assets/icon/wifi.svg",
          title: "Wifi",
          sub_title: "wifi",
        },
        {
          id: "4",
          source: "~/assets/icon/clock.svg",
          title: "Tự do",
          sub_title: "clock",
        },
        {
          id: "5",
          source: "~/assets/icon/key.svg",
          title: "Không chủ",
          sub_title: "key",
        },
        {
          id: "6",
          source: "~/assets/icon/washing-machine.svg",
          title: "Máy giặt",
          sub_title: "washing-machine",
        },
        {
          id: "7",
          source: "~/assets/icon/police-officer.svg",
          title: "Bảo vệ",
          sub_title: "police",
        },
        {
          id: "8",
          source: "~/assets/icon/bed.svg",
          title: "Giường",
          sub_title: "bed",
        },
        {
          id: "9",
          source: "~/assets/icon/pot.svg",
          title: "Nấu ăn",
          sub_title: "pot",
        },
        {
          id: "10",
          source: "~/assets/icon/wardrobe.svg",
          title: "Tủ đồ",
          sub_title: "wardrobe",
        },
        {
          id: "11",
          source: "~/assets/icon/window.svg",
          title: "Cửa sổ",
          sub_title: "window",
        },
        {
          id: "12",
          source: "~/assets/icon/water-heater.svg",
          title: "Bình nóng lạnh",
          sub_title: "water-heater",
        },
      ],
      images: ["1.jpg", "2.jpg", "3.jpg"],
    };
  },
};
</script>

<style>
.option {
}
.info__section {
  padding: 0 15px;
}
.option__type {
  font-family: Nunito-SemiBold;
  font-size: 12px;
  color: #666666;
  letter-spacing: 0;
}
.option__title {
  padding: 10px 25px;
  border-radius: 10px;
  color: #fff;
  text-align: center;
  font-family: Nunito-Bold;
  font-size: 16px;
  color: #ffffff;
}
.capacity__title {
  font-family: Nunito-SemiBold;
  font-size: 20px;
  color: #333333;
  letter-spacing: 0;
  line-height: 28px;
  padding: 0 15px;
}
.icon__title {
  font-size: 16px;
  color: #333333;
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 8px;
}
.icon__custom {
  width: 30px;
  height: 30px;
}
.contact {
  border-right: 1px solid #cdcdcd;
  padding-right: 24px;
}
.avatar__cover {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  object-fit: cover;
  margin-right: 8px;
}
.field__name {
  font-family: Nunito-SemiBold;
  font-size: 12px;
  color: #666666;
  letter-spacing: 0;
}
.field__value {
  font-size: 16px;
  color: #333333;
  letter-spacing: 0;
  line-height: 24px;
}
.status__value {
  font-family: Nunito-Bold;
  font-weight: bold;
}
.owner__section {
  padding: 30px;
  border-radius: 15px;
  background: #fff;
  height: 100%;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
}
.more__information,
.notice__details,
.house__detail,
.furniture__details {
  padding: 30px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
}
.house__title {
  background: #f6f7f9;
  height: 50px;
  padding: 0 15px;
  border-radius: 24px;
  width: fit-content;
}
.house__status,
.house__localtion {
  padding: 0 15px;
}
.house__title p {
  font-family: Nunito-Bold;
  font-weight: bold;
  font-size: 24px;
  color: #333333;
  letter-spacing: 0;
}
.title {
  font-size: 32px;
  color: #333333;
  letter-spacing: 0;
  flex-basis: 800px;
  font-weight: bold;
}
.house__detail__container {
  padding: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
}
.image__container {
  height: 500px;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid #ffffff;
  border-radius: 20px;
}
.image__before {
  height: 250px;
}
.image__first {
  border-right: 1px solid #ffffff;
}
.cover__image__before {
  border-left: 1px solid #ffffff;
}
.image__cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.modal-content {
  max-width: 80%;
  max-height: 80%;
}
</style>