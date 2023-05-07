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
      >
        <template #head(roleid)="data">
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
        <template #head(fullName)="data">
          <span
            :id="data.field.key + data.index"
            class="text-info d-flex justify-content-start"
          >
            {{ data.label }}
          </span>
          <b-tooltip :target="data.field.key + data.index" offset="50">
            {{ data.label }}
          </b-tooltip> </template
        >password
        <template #head(email)="data">
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
        <template #head(phone)="data">
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
        <template #cell(roleid)="row">
          <span :id="row.field.key + row.index">
            {{ row.item.roleid == "1" ? "Admin" : "User" }}
          </span>
          <b-tooltip :target="row.field.key + row.index" offset="50">
            {{ row.item.roleid == "1" ? "Admin" : "User" }}
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
import { mapGetters, mapActions } from "vuex";
import { getAllUser } from "../../api/auth/index";
export default {
  data() {
    return {
      listUser: [],
      fields: [
        { key: "roleid", label: "Role", sortable: true },
        { key: "fullname", label: "Tên người dùng", sortable: true },
        { key: "email", label: "Email", sortable: true },
        { key: "phone", label: "SĐT", sortable: true },
      ],
      currentPage: 1,
      perPage: 3,
    };
  },
  computed: {
    lists() {
      const items = this.listUser;
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    totalRows() {
      return this.listUser.length;
    },
  },
  async created() {
    await this.handleGetAllUser();
  },
  methods: {
    ...mapActions("admin", ["handleChangeTabIndex"]),

    handleChangePage() {},
    onRowClicked(item) {
      this.handleChangeTabIndex(3);
    },
    async handleGetAllUser() {
      const res = await getAllUser({
        searchQuery: "",
        pageNumber: 0,
        pageSize: 10,
      });
      if (res.status == 200) {
        this.listUser = res.data;
      }
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