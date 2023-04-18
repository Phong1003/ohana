<template>
  <div>
    <div class="banner_dashboard">
      <div class="d-flex justify-content-between">
        <img src="~/assets/icon/ohanaLogo.svg" alt="OhanaLogo" />
        <div class="text-white create_room">Đăng phòng</div>
      </div>
      <div class="description_banner text-white mb-2 w-50">Ứng dụng tìm kiếm phòng trọ miễn phí cho người đi thuê hàng đầu Việt Nam</div>
      <FilterHouse />
    </div>
    <div class="content_dashboard">
      <div class="search_trends mb-4">Xu hướng tìm kiếm</div>
      
    </div>
  </div>
</template>

<script>
import FilterHouse from '../../components/filterHouse/index.vue'
export default {
  layout: "defaults",
  components: {
    FilterHouse
  }

}
</script>

<style scoped>
.banner_dashboard{
  background: url(../../assets/images/bannerDashboard.jpg) no-repeat;
  background-size: cover;
  height: 500px;
  background-position: center center;
  padding: 48px 32px 0;
}
.create_room{
  font-size: 20px;
  font-weight: 700;
}
.description_banner{
  font-size: 32px;
  margin-top: 48px;
  font-weight: 500;
}
.content_dashboard{
  background-color: ghostwhite;
  padding: 32px;
}
.search_trends{
  font-size: 32px;
  color: #333333;
  font-weight: 500;
}
</style>