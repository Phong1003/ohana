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
          <div class="title__cover">
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
                v-if="dataDetail.room?.status != 3"
              >
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
                    <div class="option__title bg-info">
                      {{ Math.round(dataDetail.room?.capacity / 10) }}
                      <span>người</span>
                    </div>
                  </div>
                  <div class="option col-4">
                    <p class="option__type">Vừa</p>
                    <div class="option__title bg-success">
                      {{ Math.round(dataDetail.room?.capacity / 10) + 1 }}
                      <span>người</span>
                    </div>
                  </div>
                  <div class="option col-4">
                    <p class="option__type">Chật</p>
                    <div class="option__title bg-warning">
                      {{ Math.round(dataDetail.room?.capacity / 10) + 2 }}
                      <span>người</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="notice__details mt-5"
                v-if="
                  dataDetail.room?.status == 3 &&
                  dataDetail.room?.createdby == userEmail
                "
              >
                <div class="d-flex justify-content-between align-items-center">
                  <div class="house__title d-flex align-items-center">
                    <b-icon
                      icon="exclamation-circle"
                      class="bg-light mr-3"
                      variant="danger"
                      font-scale="2"
                    ></b-icon>
                    <p class="mb-0">Thông tin người thuê phòng</p>
                  </div>
                  <div class="h4 cursor-pointer mt-2">
                    <b-button
                      class="bg-primary border-primary"
                      v-b-modal.addTenant
                    >
                      <b-icon icon="plus-square"></b-icon>
                      <span>Thêm thành viên</span>
                    </b-button>
                  </div>
                </div>
                <div class="mt-2 d-flex">
                  <p
                    class="paymentNotice"
                    :class="isShowPayment ? 'text-danger' : 'text-success'"
                  >
                    {{
                      !isShowPayment
                        ? "Đã thanh toán tháng này"
                        : "Chưa thanh toán tháng này"
                    }}
                  </p>
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
                <div class="mt-3 d-flex justify-content-end">
                  <b-button
                    class="bg-danger border-danger"
                    v-b-modal.monthPayment
                    @click="handleGetInfo()"
                  >
                    <b-icon icon="cash-coin"></b-icon>
                    <span>Thanh toán tiền phòng</span>
                  </b-button>
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
                <div
                  class="info__section mt-3"
                  v-html="formatText(dataDetail.room?.description)"
                ></div>
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
              <div class="mt-4 border-top">
                <div
                  class="pl-3 mt-3 d-flex align-items-center cursor_pointer"
                  v-b-modal.roomHistory
                  v-if="dataDetail.room?.createdby == userEmail"
                >
                  <p class="mb-0 paymentNotice text-success">
                    Lịch sử thuê phòng
                  </p>
                </div>
                <div
                  class="pl-3 mt-3 d-flex align-items-center cursor_pointer"
                  v-b-modal.paymentHistory
                  v-if="dataDetail.room?.createdby == userEmail"
                >
                  <p class="mb-0 paymentNotice text-primary">
                    Lịch sử thanh toán
                  </p>
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
          class="d-flex align-items-center text-center justify-content-center bg-success mb-3"
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
              disabled
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
              v-model="newTenant.name"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Địa chỉ" label-for="name-input">
            <b-form-input
              class="h35"
              id="name-input"
              v-model="newTenant.adress"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Số điện thoại" label-for="name-input">
            <b-form-input
              class="h35"
              id="name-input"
              type="number"
              v-model="newTenant.phone"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="CMND/CCCD" label-for="name-input">
            <b-form-input
              class="h35"
              type="number"
              id="name-input"
              v-model="newTenant.cartId"
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
      <b-modal
        id="monthPayment"
        ref="tenantModal"
        title="Thông tin thanh toán"
        size="lg"
        @hidden="closeTenantModal"
        scrollable
      >
        <div
          v-if="alert.isShow"
          class="d-flex align-items-center justify-content-center bg-success mb-3"
          :class="alert.status == 'success' ? 'bg-success' : 'bg-danger'"
        >
          <h4 class="mr-2 text-white mb-0">{{ alert.message }}</h4>
        </div>
        <form ref="form">
          <div class="d-flex justify-content-around">
            <b-form-group class="col-6" label="Mã phòng" label-for="name-input">
              <b-form-input
                class="h50"
                id="name-input"
                v-model="payment.idRoom"
                disabled
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              class="col-6"
              label="CMND/CCCD người thanh toán"
              label-for="name-input"
            >
              <b-form-input
                class="h50"
                id="name-input"
                v-model="payment.cartId"
                disabled
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="d-flex justify-content-around">
            <b-form-group
              class="col-6"
              label="Tháng thanh toán"
              label-for="name-input"
            >
              <b-form-input
                class="h50"
                id="name-input"
                type="number"
                v-model="payment.month"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              class="col-6"
              label="Năm thanh toán"
              label-for="name-input"
            >
              <b-form-input
                class="h50"
                id="name-input"
                type="number"
                v-model="payment.year"
                disabled
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="d-flex justify-content-around">
            <b-form-group
              class="col-6"
              label="Tiền phòng"
              label-for="name-input"
            >
              <b-form-input
                class="h50"
                id="name-input"
                type="number"
                v-model="payment.roomPrice"
                disabled
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              class="col-6"
              label="Phí dịch vụ"
              label-for="name-input"
            >
              <b-form-input
                class="h50"
                id="name-input"
                type="number"
                disabled
                v-model="payment.roomOtherPrice"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="d-flex justify-content-around">
            <b-form-group class="col-6" label="Số nước" label-for="name-input">
              <b-form-input
                class="h50"
                id="name-input"
                type="number"
                v-model="payment.noWater"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group class="col-6" label="Số điện" label-for="name-input">
              <b-form-input
                class="h50"
                type="number"
                id="name-input"
                v-model="payment.noElectic"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div>
            <b-form-group
              class="col-12"
              label="Nội dung"
              label-for="name-input"
            >
              <b-form-input
                class="h50"
                id="name-input"
                v-model="payment.note"
                required
              ></b-form-input>
            </b-form-group>
          </div>
        </form>
        <div class="h4 cursor-pointer mr-3 pl-3">
          <b-button class="bg-primary border-primary" v-b-modal.confirmPayment>
            <b-icon icon="plus-square"></b-icon>
            <span>Xác nhận thanh toán</span>
          </b-button>
        </div>
        <template #modal-footer="{ cancel }">
          <b-button size="sm" variant="danger" @click="cancel()">
            Cancel
          </b-button>
        </template>
      </b-modal>
      <b-modal
        id="confirmPayment"
        ref="tenantModal"
        title="Xác nhận thanh toán"
        centered
        hide-footer
      >
        <div class="confirm__container bg-success text-white">
          <div class="p-2 mt-2">
            <p>Tiền phòng: {{ payment.roomPrice }}VNĐ</p>
            <p>Phí dịch vụ : {{ payment.roomOtherPrice }}VNĐ</p>
            <p>
              Tiền nước: {{ payment.noWater * dataDetail.room?.waterprice }}VNĐ
            </p>
            <p>
              Tiền điện:
              {{ payment.noWater * dataDetail.room?.electricprice }}VNĐ
            </p>
            <p>
              Tổng thanh toán:
              {{
                returnTotalMoney(
                  payment.roomPrice,
                  payment.roomOtherPrice,
                  payment.noWater * dataDetail.room?.waterprice,
                  payment.noWater * dataDetail.room?.electricprice
                )
              }}VNĐ
            </p>
          </div>
        </div>
        <div class="d-flex justify-content-end mt-3">
          <b-button
            size="sm"
            class="mr-3"
            variant="secondary"
            @click="handlePayRoomMonth(0)"
          >
            Lưu thông tin
          </b-button>
          <b-button size="sm" variant="success" @click="handlePayRoomMonth(1)">
            Thanh Toán
          </b-button>
        </div>
      </b-modal>
      <ConfirmPayment
        idModal="confirmPayment"
        :currentPayment="currentPayment"
      />
      <HistoryPayment
        idModal="paymentHistory"
        :listHistory="listHistory"
        :fullListTenants="fullListTenants"
        :price="price"
        :ownerName="ownerName"
        :ownerPhone="ownerPhone"
        :roomName="roomName"
        @handleGetPayment="handleGetPayment"
      />
      <HistoryModal idModal="roomHistory" :fullListTenants="fullListTenants" />
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
  newTenant,
  getPayMonthRoom,
  newPayRoom,
} from "../../api/auth/index";
import EditHome from "../../components/view/create/newHome.vue";
import HistoryModal from "../../components/modal/historyTable.vue";
import HistoryPayment from "../../components/modal/historyPayment.vue";
import { directive as viewer } from "v-viewer";
import "viewerjs/dist/viewer.css";

export default {
  components: {
    EditHome,
    HistoryModal,
    HistoryPayment,
  },
  directives: {
    viewer: viewer({
      debug: true,
    }),
  },
  data() {
    return {
      price: {
        electric: 0,
        water: 0,
      },
      fullListTenants: [],
      payment: {
        idRoom: "",
        cartId: "",
        roomPrice: 0,
        roomOtherPrice: 0,
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
        noWater: 0,
        noElectic: 0,
        note: "",
        status: 1,
      },
      isShowNotice: false,
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
      newTenant: {
        name: "",
        adress: "",
        phone: "",
        cartId: "",
        idRoom: "",
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
      listHistory: [],
      checkRole: "",
      res: "",
      userEmail: "",
      listName: [],
      isShowPayment: true,
      roomName: "",
    };
  },
  async created() {
    if (typeof window !== "undefined") {
      this.checkRole = sessionStorage.getItem("role");
      this.userEmail = sessionStorage.getItem("email");
      this.ownerName = sessionStorage.getItem("fullName");
      this.ownerPhone = sessionStorage.getItem("phone");
    }
    if (
      this.$route.name.includes("dashboard") ||
      this.$route.name.includes("Admin")
    ) {
      this.isShowNotice = true;
    } else {
      this.isShowNotice = false;
    }
    this.isShowEdit = this.$route.params.edit;
    await this.getDetails();
    if (this.dataDetail.room.createdby == this.userEmail) {
      await this.handleGetPayment();
      await this.handleGetTenantInRoom();
    }
    if (this.dataDetail.room?.electricprice) {
      this.price.electric = this.dataDetail.room.electricprice;
    }
    if (this.dataDetail.room?.waterprice) {
      this.price.water = this.dataDetail.room.waterprice;
    }
    if (this.dataDetail.room?.name) {
      this.roomName = this.dataDetail.room.name;
    }
  },
  methods: {
    handleReturnTotal(money) {
      return new Intl.NumberFormat().format(money) + " " + "VND";
    },
    handleOk() {},
    formatText(text) {
      return text ? text.replace(/\n/g, "</br>") : "";
    },
    returnTotalMoney(roomPrice, roomOtherPrice, waterPrice, electricPrice) {
      const sum =
        Number(roomPrice) +
        Number(roomOtherPrice) +
        Number(waterPrice) +
        Number(electricPrice);
      return sum;
    },
    handleGetInfo() {
      this.payment.idRoom = this.$route.params.id;
      this.payment.cartId = this.listTenant[0].cartId;
      this.payment.roomPrice = this.dataDetail.room.price;
      this.payment.roomOtherPrice = this.dataDetail.room.otherprice;
    },
    async handleGetPayment() {
      const res = await getPayMonthRoom(this.$route.params.id);
      this.listHistory = res.data;
      const currentDay = new Date();
      for (const payment of res.data) {
        if (payment.month == currentDay.getMonth() + 1 && payment.status) {
          this.isShowPayment = false;
        } else {
          this.isShowPayment = true;
        }
      }
    },
    async handleAddNewTenant() {
      const res = await newTenant({
        ...this.newTenant,
        idRoom: this.$route.params.id,
      });
      if (res.status == 200) {
        this.handleShowAlertModal(true, "success", "Thêm thành công!");
        this.handleGetTenantInRoom();
        setTimeout(() => {
          this.closeTenantModal();
          this.$bvModal.hide("addTenant");
        }, 3000);
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
    getCurrentTenant(tenant) {
      this.tenant = { ...tenant, idTenant: tenant.id };
    },
    closeTenantModal() {
      this.newTenant = {
        name: "",
        address: "",
        phone: "",
        cartId: "",
        idRoom: "",
      };
      this.handleShowAlertModal(false, "", "");
    },
    async handleGetTenantInRoom() {
      const res = await getTenantRoom(this.$route.params.id);
      this.listTenant = [];
      this.fullListTenants = res.data;
      for (let item of res.data) {
        if (item.status) {
          this.listTenant.push({
            ...item,
            dateJoin: item.dateJoin.replace("T00:00:00", ""),
          });
          this.listName.push({
            name: item.name,
            id: item.id,
          });
        }
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
      const findUnPayment = this.listHistory.find((el) => el.status == 0);

      if (this.listTenant.length == 1 && findUnPayment) {
        this.handleShowAlertModal(
          true,
          "danger",
          `Vui lòng thanh toán tháng ${findUnPayment.month} trước khi trả phòng ( chi tiết ở lịch sử thanh toán )`
        );
        return;
      }
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
    async handlePayRoomMonth(status) {
      try {
        const params = {
          cartId: this.payment.cartId,
          idRoom: this.payment.idRoom,
          month: Number(this.payment.month),
          year: Number(this.payment.year),
          noElectic: Number(this.payment.noElectic),
          noWater: Number(this.payment.noWater),
          status: status,
          note: this.payment.note,
        };
        const res = await newPayRoom(params);
        if (res.status == 200) {
          this.$bvModal.hide("confirmPayment");
          if (status) {
            this.handleShowAlertModal(true, "success", "Thanh toán thành công");
          } else {
            this.handleShowAlertModal(
              true,
              "success",
              "Lưu thông tin thành công"
            );
          }
        }
      } catch (error) {
        this.$bvModal.hide("confirmPayment");
        if (status) {
          if (error.response.data == "Đã thanh toán rồi") {
            this.handleShowAlertModal(
              true,
              "danger",
              "Tháng này đã được thanh toán"
            );
          } else {
            this.handleShowAlertModal(true, "danger", "Thanh toán thất bại");
          }
        } else {
          if (error.response.data == "Đã thanh toán rồi") {
            this.handleShowAlertModal(
              true,
              "danger",
              "Tháng này đã được thanh toán"
            );
          } else {
            this.handleShowAlertModal(true, "danger", "Lưu thông tin thất bại");
          }
        }
      }
    },
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

.paymentNotice {
  font-size: 18px;
  font-weight: 700;
  text-decoration: underline;
}
.confirm__container {
  color: #ffff;
  font-size: 18px;
  font-weight: 500;
}
.pd15 {
  padding: 0 15px;
}
.h50 {
  height: 50px !important;
}
</style>