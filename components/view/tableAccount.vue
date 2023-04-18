<template>
  <div class="account__container">
    <div class="d-flex justify-content-between">
      <h4 class="list__title">Tất cả tài khoản</h4>
      <div class="d-flex">
        <div class="h4 icon-create cursor-pointer mr-3">
          <b-button class="bg-primary">
            <b-icon icon="plus-square"></b-icon>
            <span>Tạo mới</span>
          </b-button>
        </div>
        <div class="h4 icon-create cursor-pointer">
          <b-button class="bg-danger">
            <b-icon icon="trash"></b-icon>
            <span>Xóa</span>
          </b-button>
        </div>
      </div>
    </div>
    <div>
      <b-table
        class="table_dk_proxy_claim"
        :items="lists"
        :fields="fields"
        striped
        responsive="sm"
        :default-sort="{ prop: 'date', order: 'descending' }"
        @row-dblclicked="onRowClicked"
        @head-clicked="handleSortChange"
      >
        <template #head(accountID)="data">
          <span
            :id="data.field.key + data.index"
            class="text-info d-flex justify-content-start"
          >
            {{ data.label }}
          </span>
          <b-tooltip :target="data.field.key + data.index" offset="50">
            {{ data.label }}
          </b-tooltip>
        </template>
        <template #head(name)="data">
          <span
            :id="data.field.key + data.index"
            class="text-info d-flex justify-content-start"
          >
            {{ data.label }}
          </span>
          <b-tooltip :target="data.field.key + data.index" offset="50">
            {{ data.label }}
          </b-tooltip>
        </template>
        <template #head(dob)="data">
          <span
            :id="data.field.key + data.index"
            class="text-info d-flex justify-content-start"
          >
            {{ data.label }}
          </span>
          <b-tooltip :target="data.field.key + data.index" offset="50">
            {{ data.label }}
          </b-tooltip>
        </template>
        <template #head(createdDate)="data">
          <span
            :id="data.field.key + data.index"
            class="text-info d-flex justify-content-start"
          >
            {{ data.label }}
          </span>
          <b-tooltip :target="data.field.key + data.index" offset="50">
            {{ data.label }}
          </b-tooltip>
        </template>
        <template #head(gender)="data">
          <span
            :id="data.field.key + data.index"
            class="text-info d-flex justify-content-start"
          >
            {{ data.label }}
          </span>
          <b-tooltip :target="data.field.key + data.index" offset="50">
            {{ data.label }}
          </b-tooltip>
        </template>
        <template #head(location)="data">
          <span
            :id="data.field.key + data.index"
            class="text-info d-flex justify-content-start"
          >
            {{ data.label }}
          </span>
          <b-tooltip :target="data.field.key + data.index" offset="50">
            {{ data.label }}
          </b-tooltip>
        </template>
        <template #head(number)="data">
          <span
            :id="data.field.key + data.index"
            class="text-info d-flex justify-content-start"
          >
            {{ data.label }}
          </span>
          <b-tooltip :target="data.field.key + data.index" offset="50">
            {{ data.label }}
          </b-tooltip>
        </template>
      </b-table>
      <div class="overflow-auto d-flex justify-content-center mt-4">
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
export default {
  data() {
    return {
      items: [
        {
          accountID: "001",
          name: "Phong",
          dob: "20/01/2000",
          createdDate: "20/01/2023",
          gender: "Nam",
          location: "Hà Nội",
          number: "0969966566",
        },
        {
          accountID: "002",
          name: "Tus",
          dob: "20/01/2000",
          createdDate: "20/01/2023",
          gender: "Nam",
          location: "Hà Nội",
          number: "0969966566",
        },
        {
          accountID: "003",
          name: "Thomas",
          dob: "20/01/2000",
          createdDate: "20/01/2023",
          gender: "Nam",
          location: "Hà Nội",
          number: "0969966566",
        },
        {
          accountID: "004",
          name: "Quinn",
          dob: "20/01/2000",
          createdDate: "20/01/2023",
          gender: "Nam",
          location: "Hà Nội",
          number: "0969966566",
        },
        {
          accountID: "005",
          name: "Bin Vu",
          dob: "20/01/2000",
          createdDate: "20/01/2023",
          gender: "Nam",
          location: "Hà Nội",
          number: "0969966566",
        },
        {
          accountID: "005",
          name: "JC",
          dob: "20/01/2000",
          createdDate: "20/01/2023",
          gender: "Nam",
          location: "Hà Nội",
          number: "0969966566",
        },
      ],
      fields: [
        { key: "accountID", label: "ID", sortable: true },
        { key: "name", label: "Tên người dùng", sortable: true },
        { key: "dob", label: "Ngày sinh", sortable: true },
        { key: "createdDate", label: "Ngày tạo", sortable: true },
        { key: "gender", label: "Giới tính", sortable: true },
        { key: "location", label: "Địa chỉ", sortable: true },
        { key: "number", label: "Số điện thoại", sortable: true },
      ],
      currentPage: 1,
      perPage: 3,
    };
  },
  computed: {
    lists() {
      const items = this.items;
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    totalRows() {
      return this.items.length;
    },
  },
};
</script>

<style>
.account__container {
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
  background-color: #fff;
}

.text-info {
  color: #000 !important;
  font-family: Nunito-Bold;
  font-size: 16px;
  line-height: 150%;
}
.table thead th {
  background-color: lightblue;
}
</style>