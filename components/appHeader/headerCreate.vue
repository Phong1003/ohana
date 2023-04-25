<template>
  <div class="container_header">
    <div class="header__nav d-flex justify-content-end align-items-center text-white pr-4">
      <div class="mr-2" style="cursor: pointer;" @click="gotoDashboard">Trang chủ</div>
      <div>|</div>
      <div class="ml-2" style="cursor: pointer;" @click="login" v-if="!role">Đăng nhập/Đăng ký</div>
      <div class="ml-2" style="cursor: pointer;" @click="admin" v-if="role == 'ADMIN'">Admin</div>
      <div class="ml-2" style="cursor: pointer;" @click="admin" v-if="role == 'USER'">User</div>
    </div>
  </div>
</template>

<script>
import FilterHouse from '../filterHouse'
import { mapGetters, mapActions } from 'vuex';
export default {
  components: {
    FilterHouse
  },
  data(){
    return{
      role: ''
    }
  },
  created(){
    this.checkRole()
  },
  computed: {
    ...mapGetters('dashboard', ['show']),
  },
  methods:{
    ...mapActions('dashboard', ['handleShow']),
    checkRole(){
      if (typeof window !== 'undefined') {
        this.role= sessionStorage.getItem('role')
      }
    },
    gotoDashboard(){
      this.$router.push({name: 'dashboard'})
    },
    login(){
      this.$router.push({name: 'login'})
    },
    admin(){
      this.$router.push({name: 'Admin'})
    }
  }
};
</script>

<style scoped>
.header__contain {
  height: 112px;
}
.search__contain {
  margin: auto;
  padding: 0 32px;
  height: inherit;
  width: 100%;
}
.header__nav {
  height: 60px;
  /* position: fixed; */
  opacity: 1;
  background: #f7346f;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 20;
  font-size: 20px;
  font-weight: 700;
}

.header__search {
  /* position: fixed;
  width: 100%; */
  height: 90px;
  z-index: 20;
  top: 50px;
  left: 0px;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  visibility: visible;
  background-color: #ffffff;
  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
}
.filter_house{
  margin-left: 50px;
  border-right: 1px solid #B4B4B4;
}
</style>