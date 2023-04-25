<template>
  <div class="house__detail__container">
    <div class="content__section mb-3">
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
              <div class="d-flex flex-column col-6">
                <p class="mb-0 field__name mb-2">
                  GIÁ PHÒNG <span class="text-danger">(*)</span>
                </p>
                <b-form-input placeholder="Nhập giá phòng"></b-form-input>
              </div>
              <div class="d-flex flex-column col-6">
                <p class="mb-0 field__name mb-2">
                  DIỆN TÍCH <span class="text-danger">(*)</span>
                </p>
                <b-form-input placeholder="Nhập diện tích phòng"></b-form-input>
              </div>
            </div>
            <div class="house__info mt-4 d-flex">
              <div class="d-flex flex-column col-6">
                <p class="mb-0 field__name mb-2">
                  ĐẶT CỌC <span class="text-danger">(*)</span>
                </p>
                <b-form-input placeholder="Nhập tiền cần cọc"></b-form-input>
              </div>
              <div class="d-flex flex-column col-6">
                <p class="mb-0 field__name mb-2">
                  SỨC CHỨA <span class="text-danger">(*)</span>
                </p>
                <b-form-input placeholder="VD: 2 nam hoặc nữ"></b-form-input>
              </div>
            </div>
            <div class="house__info mt-4 d-flex">
              <div class="d-flex flex-column col-4">
                <p class="mb-0 field__name mb-2">
                  TRẠNG THÁI PHÒNG <span class="text-danger">(*)</span>
                </p>
                <b-form-input placeholder="VD: Còn phòng"></b-form-input>
              </div>
              <div class="d-flex flex-column col-8">
                <p class="mb-0 field__name mb-2">
                  ĐỊA CHỈ <span class="text-danger">(*)</span>
                </p>
                <b-form-input
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
                    src="~/assets/icon/air-conditioner-icon.svg"
                    alt="air-conditioner"
                    class="icon__custom"
                  />
                  <span class="icon__title">Điều hòa</span>
                </b-form-checkbox>
              </div>
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
                    src="~/assets/icon/clock.svg"
                    alt="clock"
                    class="icon__custom"
                  />
                  <span class="icon__title">Tự do</span>
                </b-form-checkbox>
              </div>
              <div
                class="checkbox__custom align-items-center col-4 d-flex justify-content-start mt-3"
              >
                <b-form-checkbox>
                  <img
                    src="~/assets/icon/key.svg"
                    alt="key"
                    class="icon__custom"
                  />
                  <span class="icon__title">Không chủ</span>
                </b-form-checkbox>
              </div>
              <div
                class="checkbox__custom align-items-center col-4 d-flex justify-content-start mt-3"
              >
                <b-form-checkbox>
                  <img
                    src="~/assets/icon/washing-machine.svg"
                    alt="washing-machine"
                    class="icon__custom"
                  />
                  <span class="icon__title">Máy giặt</span>
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
                  <span class="icon__title">Bảo vệ</span>
                </b-form-checkbox>
              </div>
              <div
                class="checkbox__custom align-items-center col-4 d-flex justify-content-start mt-3"
              >
                <b-form-checkbox>
                  <img
                    src="~/assets/icon/bed.svg"
                    alt="bed"
                    class="icon__custom"
                  />
                  <span class="icon__title">Giường</span>
                </b-form-checkbox>
              </div>
              <div
                class="checkbox__custom align-items-center col-4 d-flex justify-content-start mt-3"
              >
                <b-form-checkbox>
                  <img
                    src="~/assets/icon/pot.svg"
                    alt="pot"
                    class="icon__custom"
                  />
                  <span class="icon__title">Nấu ăn</span>
                </b-form-checkbox>
              </div>
              <div
                class="checkbox__custom align-items-center col-4 d-flex justify-content-start mt-3"
              >
                <b-form-checkbox>
                  <img
                    src="~/assets/icon/wardrobe.svg"
                    alt="wardrobe"
                    class="icon__custom"
                  />
                  <span class="icon__title">Tủ đồ</span>
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
              <div
                class="checkbox__custom align-items-center col-4 d-flex justify-content-start mt-3"
              >
                <b-form-checkbox>
                  <img
                    src="~/assets/icon/water-heater.svg"
                    alt="water-heater"
                    class="icon__custom"
                  />
                  <span class="icon__title">Bình nóng lạnh</span>
                </b-form-checkbox>
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
                <p class="option__type">
                  Rộng <span class="text-danger">(*)</span>
                </p>
                <b-form-input placeholder="Nhập số người"></b-form-input>
              </div>
              <div class="option col-4">
                <p class="option__type">
                  Vừa <span class="text-danger">(*)</span>
                </p>
                <b-form-input placeholder="Nhập số người"></b-form-input>
              </div>
              <div class="option col-4">
                <p class="option__type">
                  Chật <span class="text-danger">(*)</span>
                </p>
                <b-form-input placeholder="Nhập số người"></b-form-input>
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
                placeholder="Nhập thông tin mô tả cho phòng."
              ></b-form-textarea>
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
                  <span>Ngày đăng:</span>
                  <span> 10/03/2000 </span>
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
      fileHolder: [],
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
    };
  },
};
</script>

<style>
.checkbox__custom {
  cursor: pointer;
}
.files__holder {
  height: 80px;
  margin-top: 30px;
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