<template>
  <AuthWrapper>
    <div class="cover">
      <b-container class="contain">
        <div class="d-flex flex-lg-row flex-column">
          <Sidebar class="sidebar-space" />
          <ListComponent
            v-if="tabIndex == 1"
            :listHouse="listHouse"
            :isLoading="isLoading"
            @handleGetData="handleGetData"
          />
          <TableAccount v-if="tabIndex == 2" />
        </div>
      </b-container>
    </div>
  </AuthWrapper>
</template>

<script>
import Sidebar from "../../components/sidebar/sidebar.vue";
import ListComponent from "../../components/view/list.vue";
import TableAccount from "../../components/view/tableAccount.vue";
import AuthWrapper from "../../components/authWrapper/index.vue";
import { mapGetters } from "vuex";
import { search } from "../../api/dashboard/index";
import { deleteRoom } from "../../api/auth/index";

export default {
  layout: "defaults",
  components: {
    AuthWrapper,
    Sidebar,
    ListComponent,
    TableAccount,
  },
  data() {
    return {
      listHouse: [],
      isLoading: true,
    };
  },
  computed: {
    ...mapGetters("admin", ["tabIndex"]),
  },
  methods: {
    async handleGetData(roomStatus) {
      try {
        this.isLoading = true;
        const response = await search({
          searchQuery: "",
          price: "",
          category: "",
          utilities: [],
          noSex: "",
          status: roomStatus ? roomStatus : "",
          pageNumber: 0,
          pageSize: 15,
          price: "",
          address: "",
        });
        if (response.status) {
          this.isLoading = false;
        }
        this.listHouse = [];
        for (const item of response.data) {
          this.listHouse.push(item);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  async fetch() {
    await this.handleGetData();
  },
};
</script>

<style>
.sidebar-space {
  margin-right: 30px;
}
.contain__tab {
  background-color: #fff;
  width: 100%;
  height: 50px;
  border-radius: 10px;
}
.cursor_pointer {
  cursor: pointer;
}
</style>
