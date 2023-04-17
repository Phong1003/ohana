<template>
  <div class="sidebar">
    <div class="contain__item">
      <div
        class="sidebar__item cursor-pointer d-flex align-items-center justify-content-start"
        v-for="(option, index) in listSideBar"
        :key="index"
      >
        {{ option.title }}
      </div>
    </div>
  </div>
</template>

<script>
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
};
</script>

<style>
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