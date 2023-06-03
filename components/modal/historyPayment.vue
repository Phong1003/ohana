<template>
  <div>
    <b-modal
      :id="idModal"
      ref="modal"
      title="Lịch sử thanh toán"
      scrollable
      ok-only
      size="xl"
      @ok="handleOk"
    >
      <b-table
        class="table_dk_proxy_claim"
        :items="listHistory"
        :fields="fields"
        striped
        scrollable
        @row-dblclicked="onRowClicked"
        responsive="sm"
        :default-sort="{ prop: 'date', order: 'descending' }"
      >
        <template #cell(cartId)="row">
          <span :id="row.field.key + row.index">
            {{ handleReturnNameTenant(row.item.cartId) }}
          </span>
        </template>
        <template #cell(noElectic)="row">
          <span :id="row.field.key + row.index">
            {{ handleReturnMoney(row.item.noElectic, "electric") }}
          </span>
        </template>
        <template #cell(noWater)="row">
          <span :id="row.field.key + row.index">
            {{ handleReturnMoney(row.item.noWater, "water") }}
          </span>
        </template>
        <template #cell(otherPrice)="row">
          <span :id="row.field.key + row.index">
            {{ handleReturnTotal(row.item.otherPrice) }}
          </span>
        </template>
        <template #cell(roomPrice)="row">
          <span :id="row.field.key + row.index">
            {{ handleReturnTotal(row.item.roomPrice) }}
          </span>
        </template>
        <template #cell(datePay)="row">
          <span :id="row.field.key + row.index">
            {{ handleReplace(row.item.datePay) }}
          </span>
        </template>
        <template #cell(status)="row">
          <span
            :id="row.field.key + row.index"
            :class="row.item.status ? 'text-success' : 'text-danger'"
          >
            {{ row.item.status == 1 ? "Đã trả" : "Chưa trả" }}
          </span>
        </template>
      </b-table>
    </b-modal>
    <b-modal
      id="updatePayment"
      ref="tenantModal"
      title="Xác nhận thanh toán"
      centered
      hide-footer
    >
      <div
        v-if="alert.isShow"
        class="d-flex align-items-center justify-content-center bg-success mb-3"
        :class="alert.status == 'success' ? 'bg-success' : 'bg-danger'"
      >
        <h4 class="mr-2 text-white mb-0">{{ alert.message }}</h4>
      </div>
      <div class="confirm__container bg-success text-white">
        <div class="p-2 mt-2">
          <p>Tiền phòng: {{ handleReturnTotal(currentPayment.roomPrice) }}</p>
          <p>
            Phí dịch vụ :
            {{ handleReturnTotal(currentPayment.otherPrice) }}
          </p>
          <p>
            Tiền nước:
            {{ handleReturnTotal(currentPayment.noWater * price.water) }}
          </p>
          <p>
            Tiền điện:
            {{ handleReturnTotal(currentPayment.noWater * price.electric) }}
          </p>
          <p>
            Tổng thanh toán:
            {{
              returnTotalMoney(
                currentPayment.roomPrice,
                currentPayment.otherPrice,
                currentPayment.noWater * price.water,
                currentPayment.noWater * price.electric
              )
            }}
          </p>
        </div>
      </div>
      <div class="d-flex justify-content-end mt-3">
        <b-button size="sm" variant="success" @click="handleUpdatePayment(1)">
          Thanh Toán
        </b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { updatePayRoom } from "../../api/auth/index";
export default {
  props: ["idModal", "listHistory", "price", "fullListTenants"],
  data() {
    return {
      fields: [
        { key: "cartId", label: "Người thanh toán", sortable: true },
        { key: "month", label: "Tháng", sortable: true },
        { key: "year", label: "Năm", sortable: true },
        { key: "noElectic", label: "Tiền điện", sortable: true },
        { key: "noWater", label: "Tiền nước", sortable: true },
        { key: "otherPrice", label: "Phí dịch vụ", sortable: true },
        { key: "roomPrice", label: "Tổng tiền", sortable: true },
        { key: "datePay", label: "Ngày trả", sortable: true },
        { key: "status", label: "Trạng thái", sortable: true },
      ],
      currentPayment: {},
      alert: {
        isShow: false,
        status: "",
        message: "",
      },
    };
  },
  methods: {
    async handleUpdatePayment(status) {
      try {
        const res = await updatePayRoom({
          ...this.currentPayment,
          status: status,
        });
        if (res.status == 200) {
          this.handleShowAlertModal(true, "success", "Thanh toán thành công");
          this.$emit("handleGetPayment");
        }
      } catch (error) {
        this.handleShowAlertModal(true, "danger", "Thanh toán thất bại");
      }
    },
    handleShowAlertModal(show, status, message) {
      this.alert = {
        isShow: show,
        status: status,
        message: message,
      };
    },
    returnTotalMoney(roomPrice, roomOtherPrice, waterPrice, electricPrice) {
      const sum =
        Number(roomPrice) +
        Number(roomOtherPrice) +
        Number(waterPrice) +
        Number(electricPrice);
      return this.handleReturnTotal(sum);
    },
    onRowClicked(item) {
      this.currentPayment = { ...item };
      console.log(this.currentPayment);
      if (!item.status) {
        this.$bvModal.show("updatePayment");
      }
    },
    handleReplace(text) {
      return text ? text.replace("T00:00:00", "") : "";
    },
    handleReturnTotal(money) {
      return new Intl.NumberFormat().format(money) + " " + "VND";
    },
    handleReturnMoney(number, type) {
      return number ? this.handleReturnTotal(number * this.price[type]) : 0;
    },
    handleReturnNameTenant(id) {
      if (id && this.fullListTenants.length) {
        const tenantName = this.fullListTenants.find(
          (el) => el.cartId == id
        ).name;
        return tenantName;
      }
    },
  },
};
</script>

<style>
</style>