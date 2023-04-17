<template>
  <div class="cover">
    <b-container class="contain">
      <div class="d-flex flex-lg-row flex-column">
        <Sidebar class="sidebar-space" />
        <ListComponent :showList="listHouseForRent" />
      </div>
    </b-container>
  </div>
</template>

<script>
import Sidebar from "../../components/sidebar/sidebar.vue";
import ListComponent from "../../components/view/list.vue";
export default {
  layout: "defaults",
  components: {
    Sidebar,
    ListComponent,
  },
  data() {
    return {
      listHouseForRent: [
        {
          id: 1,
          image: "~/assets/images/TrungHoa-CG.jpg",
          title:
            "Chung cư mini tại ngõ 121 Kim Ngưu - Thanh Lương - Hai Bà Trưng",
          typeOfHouse: "Chung cư mini",
          gender: "Nam & Nữ",
          square: "25m²",
          location:
            "Ngõ 121 Ngách 39 số nhà 28 Kim Ngưu - Thanh Lương - Hai Bà Trưng",
          price: "3.5",
          currency: "tr/phòng",
        },
        {
          id: 2,
          image: "~/assets/images/TrungHoa-CG.jpg",
          title: "Căn hộ 1 ngủ + 1 khách tại phố Trung yên -Trung Hoà",
          typeOfHouse: "Căn hộ",
          gender: "Nam & Nữ",
          square: "45m²",
          location:
            "Số 37 Lô 1 Trung Yên 11 Trung yên 11 , Phường Trung Hoà, Quận Cầu Giấy, Hà Nội",
          price: "6.5",
          currency: "tr/căn",
        },
        {
          id: 3,
          image: "~/assets/images/TrungHoa-CG.jpg",
          title: "Căn hộ 2 ngủ + 1 khách tại phố Trung yên -Trung Hoà",
          typeOfHouse: "Căn hộ",
          gender: "Nam & Nữ",
          square: "75m²",
          location: "Số 141 Thái Hà, Quận Ba Đình, Hà Nội",
          price: "12",
          currency: "tr/căn",
        },
        {
          id: 4,
          image: "~/assets/images/TrungHoa-CG.jpg",
          title: "Phòng trọ khép kín - 132 Lĩnh Nam - Hà Nội",
          typeOfHouse: "Phòng trọ",
          gender: "Nam & Nữ",
          square: "20m²",
          location: "132 Lĩnh Nam, Hà Nội",
          price: "2.5",
          currency: "tr/phòng",
        },
        {
          id: 5,
          image: "~/assets/images/TrungHoa-CG.jpg",
          title: "Căn hộ 1 ngủ + 1 khách tại phố Trung yên -Trung Hoà",
          typeOfHouse: "Căn hộ",
          gender: "Nam & Nữ",
          square: "45m²",
          location:
            "Số 37 Lô 1 Trung Yên 11 Trung yên 11 , Phường Trung Hoà, Quận Cầu Giấy, Hà Nội",
          price: "6.5",
          currency: "tr/căn",
        },
        {
          id: 6,
          image: "~/assets/images/TrungHoa-CG.jpg",
          title: "Căn hộ 1 ngủ + 1 khách tại phố Trung yên -Trung Hoà",
          typeOfHouse: "Căn hộ",
          gender: "Nam & Nữ",
          square: "45m²",
          location:
            "Số 37 Lô 1 Trung Yên 11 Trung yên 11 , Phường Trung Hoà, Quận Cầu Giấy, Hà Nội",
          price: "6.5",
          currency: "tr/căn",
        },
      ],
    };
  },
};
</script>

<style>
.sidebar-space {
  margin-right: 30px;
}
</style>