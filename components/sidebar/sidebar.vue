<template>
  <div class="sidebar">
    <div class="contain__item">
      <div
        v-for="(option, index) in listSideBar"
        @click="handleChangeTabIndex(option.id)"
        class="sidebar__item cursor-pointer d-flex align-items-center justify-content-start"
        :key="index"
        :class="{ tab__active: tabIndex == option.id ? true : false }"
      >
        {{ option.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      listSideBar: [
        {
          id: 1,
          title: "Quản lý phòng trọ",
        },
        {
          id: 2,
          title: "Quản lý tài khoản",
        },
      ],
    };
  },
  computed: {
    ...mapGetters("admin", ["tabIndex"]),
  },
  methods: {
    ...mapActions("admin", ["handleChangeTabIndex"]),
  },
};
</script>

<style>
.tab__active {
  border-bottom: 5px solid #ee3d8b;
  border-radius: 2px 2px 0px 0px;
  color: #ee3d8b;
}
.sidebar {
  width: 300px;
  height: 100%;
  background-color: #fff;
  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 15px;
}
.contain__item {
  margin: 0 10px;
}
.sidebar__item {
  font-size: 20px;
  font-weight: 500;
  height: 50px;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.sidebar__item:hover {
  opacity: 0.7;
}
.cursor-pointer {
  cursor: pointer;
}
</style>