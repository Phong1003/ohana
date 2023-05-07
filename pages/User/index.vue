<template>
  <AuthWrapper>
    <div class="cover">
      <b-container class="contain">
        <div class="d-flex flex-lg-row flex-column">
          <Sidebar class="sidebar-space" />
          <ListComponent
            v-if="tabIndex == 1"
            :listHouse="listHouse"
            @handleDeleteRoom="handleDeleteRoom"
          />
          <MyAccount v-if="tabIndex == 2" />
        </div>
      </b-container>
    </div>
  </AuthWrapper>
</template>

<script>
import Sidebar from "../../components/sidebar/sidebar.vue";
import ListComponent from "../../components/view/list.vue";
import MyAccount from "../../components/view/myAccount.vue";
import AuthWrapper from "../../components/authWrapper/index.vue";
import { mapGetters } from "vuex";
import { search, searchUser } from "../../api/dashboard/index";
import { deleteRoom } from "../../api/auth/index";

export default {
  layout: "defaults",
  components: {
    AuthWrapper,
    Sidebar,
    ListComponent,
    MyAccount,
  },
  data() {
    return {
      listHouse: [],
    };
  },
  computed: {
    ...mapGetters("admin", ["tabIndex"]),
  },
  methods: {
    async handleGetData() {
      try {
        const response = await searchUser({
          searchQuery: "",
          price: "",
          category: "",
          utilities: [],
          noSex: "",
          status: "",
          pageNumber: 0,
          pageSize: 10,
          price: "",
        });
        for (const item of response.data) {
          this.listHouse.push(item);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async handleDeleteRoom(roomID) {
      try {
        const response = await deleteRoom({
          id: roomID,
        });
        if (response.status == 200) {
          await this.handleGetData();
        }
      } catch (error) {
        console.log("error", error);
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
</style>
