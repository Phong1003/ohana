<template>
  <b-modal :id="idModal" title="Lịch sử thuê phòng!" size="xl">
    <b-table
      v-if="fullListTenants.length"
      class="table_dk_proxy_claim"
      :items="fullListTenants"
      :fields="fields"
      striped
      scrollable
      responsive="sm"
      :default-sort="{ prop: 'date', order: 'descending' }"
    >
      <template #cell(dateJoin)="row">
        <span :id="row.field.key + row.index">
          {{ handleReplace(row.item.dateJoin) }}
        </span>
      </template>
      <template #cell(dateOut)="row">
        <span :id="row.field.key + row.index">
          {{ handleReplace(row.item.dateOut) }}
        </span>
      </template>
      <template #cell(status)="row">
        <span
          :id="row.field.key + row.index"
          :class="row.item.status ? 'text-success' : 'text-danger'"
        >
          {{ row.item.status == 1 ? "Đang thuê" : "Đã chuyển đi" }}
        </span>
      </template>
    </b-table>
    <div v-else class="text-center">
      <h4 class="text-primary">Hiện tại phòng của bạn chưa có lịch sử thuê!</h4>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: ["idModal", "fullListTenants"],
  data() {
    return {
      fields: [
        { key: "name", label: "Tên người thuê", sortable: true },
        { key: "phone", label: "SĐT", sortable: true },
        { key: "adress", label: "Địa chỉ", sortable: true },
        { key: "cartId", label: "CMND/CCCD", sortable: true },
        { key: "dateJoin", label: "Ngày vào", sortable: true },
        { key: "dateOut", label: "Ngày ra", sortable: true },
        { key: "status", label: "Trạng thái", sortable: true },
      ],
    };
  },
  methods: {
    handleReplace(text) {
      return text ? text.replace("T00:00:00", "") : "";
    },
  },
};
</script>

<style>
</style>