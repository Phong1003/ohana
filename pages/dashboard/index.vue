<template>
  <div>
    <div class="banner_dashboard">
      <div class="d-flex justify-content-between">
        <img src="~/assets/icon/logoBanner.svg" alt="OhanaLogo" />
        <div
          class="text-white create_room"
          v-if="role == 'ADMIN' || role == 'USER'"
          @click="createNewRoom"
        >
          Đăng phòng
        </div>
      </div>
      <div class="description_banner text-white mb-2 w-50">
        Ứng dụng tìm kiếm phòng trọ miễn phí cho người đi thuê hàng đầu Việt Nam
      </div>
      <FilterHouse @searchRoom="searchRoom" class="filter_dashboard" />
    </div>
    <div class="content_dashboard">
      <div class="search_trends mb-4">Xu hướng tìm kiếm</div>
      <div class="d-flex justify-content-between">
        <div style="cursor: pointer;" v-for="(item, index) in cardList" :key="index" @click="routerLocation(item)">
          <CardTrend :cardContent="item" />
        </div>
      </div>
      <div class="main_content">
        <div class="container_new_room bg-white h-100"  style="width:70%; float:left">
          <div
            class="d-flex justify-content-between align-items-center"
            style="margin-bottom: 32px"
          >
            <div class="title_new_room">Phòng mới nhất</div>
            <div class="view_all" @click="viewNew">Xem tất cả</div>
          </div>
          <div
            class="content_room"
          
            @click="routerDetails(item)"
            v-for="(item, index) in listRoom"
            :key="index"
          >
            <CardRoom :contentRoom="item" />
          </div>
          <div
            class="d-flex justify-content-center align-items-center mt-4"
            style="color: #4877f8; cursor: pointer"
            @click="viewNew"
          >
            Xem tất cả
          </div>
        </div>
        <div class="container_new_room bg-white h-100"  style="width:25% float:right">
         <img src="@/assets/images/2fb8e7f13a00864fd5e9d05e481814dc.jpg" >
        </div>
        <div class="container_new_room bg-white h-100" style="width:70%;margin-top:30px; float:left">
          <div
            class="d-flex justify-content-between align-items-center"
            style="margin-bottom: 32px"
          >
            <div class="title_new_room">Phòng mới nhất</div>
            <div class="view_all" @click="viewNew">Xem tất cả</div>
          </div>
          <div
            class="content_room"
            
            @click="routerDetails(item)"
            v-for="(item, index) in listRoom2"
            :key="index"
          >
            <CardRoom :contentRoom="item" />
          </div>
          <div
            class="d-flex justify-content-center align-items-center mt-4"
            style="color: #4877f8; cursor: pointer"
            @click="viewNew"
          >
            Xem tất cả
          </div>
        </div>
       
        <div class="container_new_room bg-white h-100"  style="width:70%;margin-top:30px; float:left">
          <div
            class="d-flex justify-content-between align-items-center"
            style="margin-bottom: 32px "
          >
            <div class="title_new_room">Phòng mới nhất</div>
            <div class="view_all" @click="viewNew">Xem tất cả</div>
          </div>
          <div
            class="content_room"
            @click="routerDetails(item)"
            v-for="(item, index) in listRoom"
            :key="index"
          >
            <CardRoom :contentRoom="item" />
          </div>
          <div
            class="d-flex justify-content-center align-items-center mt-4"
            style="color: #4877f8; cursor: pointer"
            @click="viewNew"
          >
            Xem tất cả
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import FilterHouse from "../../components/filterHouse/index.vue";
import CardTrend from "../../components/cardTrend/index.vue";
import CardRoom from "../../components/listRoom/index.vue";
import { mapGetters, mapActions } from "vuex";
import { search } from "../../api/dashboard/index";
import { getAdr } from "../../api/auth/index";
export default {
  layout: "defaults",
  components: {
    FilterHouse,
    CardTrend,
    CardRoom,
  },
  data() {
    return {
      cardList: [
        {
          img: require("@/assets/images/binhthanh.jpg"),
          nameCard: "",
        },
        { img: require("@/assets/images/quan10.jpg"), nameCard: "" },
        { img: require("@/assets/images/quan1.jpg"), nameCard: "" },
        { img: require("@/assets/images/quan7.jpg"), nameCard: "" },
        { img: require("@/assets/images/thuduc.jpg"), nameCard: "" }
      ],
      listRoom: [],
       listRoom2: [],
      listCategory: [],
      optionsGender: [
        { text: "Tất cả", value: "0" },
        { text: "Nam", value: "1" },
        { text: "Nữ", value: "2" },
      ],
    };
  },
  computed: {
    ...mapGetters("dashboard", ["show"]),
    role() {
      if (typeof window !== "undefined") {
        return sessionStorage.getItem("role");
      }
    },
  },
  async created() {
    try {
      const response = await search({
        searchQuery: "",
        price: "",
        category: "",
        utilities: [],
        noSex: "",
        status: "1",
        pageNumber: 0,
        pageSize: 10,
        address: "",
      });
      if (response && response.data.length) {
        this.listRoom = response.data.slice(0, 5).map((item) => {
          return {
            id: item.room.id,
            uliti: item.utilities,
            img: item.room.imgRoom,
            nameRoom: item.room.name,
            typeRoom: item.room.category,
            sex:
              item.room.noSex == 0
                ? "Nam"
                : item.room.noSex == 1
                ? "Nữ"
                : item.room.noSex == 2
                ? "Tất cả"
                : "",
            acreage: item.room.capacity,
            address: item.room.address,
            area: item.room.area,
            price: new Intl.NumberFormat().format(item.room.price),
          };
        });
      }
    } catch (error) {
      console.log(error);
    }
     try {
      const response = await search({
        searchQuery: "",
        price: "",
        category: "38ece0e6-2842-402f-a323-8c229bb19a0c",
        utilities: [],
        noSex: "",
        status: "1",
        pageNumber: 0,
        pageSize: 10,
        address: "",
      });
      if (response && response.data.length) {
        this.listRoom2 = response.data.slice(0, 5).map((item) => {
          return {
            id: item.room.id,
            uliti: item.utilities,
            img: item.room.imgRoom,
            nameRoom: item.room.name,
            typeRoom: item.room.category,
            sex:
              item.room.noSex == 0
                ? "Nam"
                : item.room.noSex == 1
                ? "Nữ"
                : item.room.noSex == 2
                ? "Tất cả"
                : "",
            acreage: item.room.capacity,
            address: item.room.address,
            area: item.room.area,
            price: new Intl.NumberFormat().format(item.room.price),
          };
        });
        this.listRoom2 = response.data.slice(0, 5).map((item) => {
          return {
            id: item.room.id,
            uliti: item.utilities,
            img: item.room.imgRoom,
            nameRoom: item.room.name,
            typeRoom: item.room.category,
            sex:
              item.room.noSex == 0
                ? "Nam"
                : item.room.noSex == 1
                ? "Nữ"
                : item.room.noSex == 2
                ? "Tất cả"
                : "",
            acreage: item.room.capacity,
            address: item.room.address,
            area: item.room.area,
            price: new Intl.NumberFormat().format(item.room.price),
          };
        });
      }
    } catch (error) {
      console.log(error);
    }
    const res =  await getAdr()
    this.cardList = res.data.map((item, index) => {
      return {
        img: this.cardList[index] ? this.cardList[index].img : require("@/assets/images/binhthanh.jpg"),
        nameCard: item
      }
    })
    
  },
  
  
  methods: {
    ...mapActions("dashboard", ["handleShow"]),
    viewNew() {
      this.$router.push({ name: "viewAll-newRoom" });
    },
    viewTop() {
      this.$router.push({ name: "viewAll-topRoom" });
    },
    routerDetails(item) {
      this.$router.push({ name: "dashboard-id", params: { id: item.id } });
    },
    routerLocation(item) {
      this.$router.push({ name: 'viewAll-newRoom-location', params: { location: item.nameCard}})
    },
    createNewRoom() {
      this.$router.push({ name: "create" });
    },
    async searchRoom(value) {
      try {
        const response = await search({
          searchQuery: value,
          price: "",
          category: "",
          utilities: [],
          noSex: "",
          status: "1",
          pageNumber: 0,
          pageSize: 10,
          address: "",
        });
        if (response && response.data.length) {
          this.listRoom = response.data.slice(0, 5).map((item) => {
            return {
              id: item.room.id,
              img: item.room.imgRoom,
              nameRoom: item.room.name,
              typeRoom: item.room.category,
              sex:
                item.room.noSex == 0
                  ? "Nam"
                  : item.room.noSex == 1
                  ? "Nữ"
                  : item.room.noSex == 2
                  ? "Tất cả"
                  : "",
              acreage: item.room.capacity,
              address: item.room.address,
              area: item.room.area,
              price: new Intl.NumberFormat().format(item.room.price),
            };
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    
  },
};
</script>

<style scoped>
.banner_dashboard {
  background: url(../../assets/images/bannerDashboard.jpg) no-repeat;
  background-size: cover;
  height: 500px;
  background-position: center center;
  padding: 150px 32px 0;
}
.create_room {
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
}
.description_banner {
  font-size: 32px;
  margin-top: 48px;
  font-weight: 500;
}
.content_dashboard {
  background-color: ghostwhite;
  padding: 32px;
}
.search_trends {
  font-size: 32px;
  color: #333333;
  font-weight: 500;
}
.main_content {
  margin-top: 32px;
}
.container_new_room {
  padding: 30px 50px;
  border-radius: 20px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
}
.title_new_room {
  font-size: 24px;
  font-weight: 500;
}
.view_all {
  font-size: 16px;
  color: #4877f8;
  border: 1px solid #4877f8;
  border-radius: 16px;
  cursor: pointer;
  padding: 4px 12px;
}
.content_room {
  border-bottom: 1px solid #cdcdcd;
  cursor: pointer;
}
.container_verified {
  padding: 32px;
  border-radius: 20px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  margin-left: 32px;
  width: 31%;
  height: 835px;
}
.icon_shield {
  width: 33px;
  height: 33px;
  color: #4877f8;
}
.filter_dashboard {
  max-width: 390px;
}
</style>
