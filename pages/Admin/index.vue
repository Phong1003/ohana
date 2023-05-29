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
            :totalList="totalList"
            :total="total"
            :totalConfirm="totalConfirm"
            :totalReject="totalReject"
            :totalUnConfirm="totalUnConfirm"
            :totalUnAvailable="totalUnAvailable"
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
      totalList: [],
      isLoading: true,
      total: 0,
      totalConfirm: 0,
      totalReject: 0,
      totalUnConfirm: 0,
      totalUnAvailable: 0,
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
          pageSize: 10,
          price: "",
          address: "",
        });
        if (response.status) {
          this.isLoading = false;
        }
        if (!roomStatus) {
          this.totalList = [];
        }
        this.listHouse = [];
        for (const item of response.data) {
          if (!roomStatus) {
            this.totalList.push(item);
          }
          this.listHouse.push(item);
        }
        this.total = 0;
        this.totalUnConfirm = 0;
        this.totalReject = 0;
        this.totalConfirm = 0;
        this.totalUnAvailable = 0;
        if (this.totalList.length) {
          this.total = this.totalList.length;
          for (const item of this.totalList) {
            if (!item.room.status) {
              this.totalUnConfirm++;
            } else if (item.room.status == -1) {
              this.totalReject++;
            } else if (item.room.status == 1) {
              this.totalConfirm++;
            } else if (item.room.status == 3) {
              this.totalUnAvailable++;
            }
          }
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
