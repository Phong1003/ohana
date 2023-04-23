<template>
  <div class="bg_login d-flex align-items-center justify-content-center">
    <div class="container_login">
      <div class="d-flex align-items-center justify-content-center">
        <img src="~/assets/icon/ohanaLogo.svg" alt="OhanaLogo" />
      </div>
      <div style="margin-top: 30px" v-if="step == 1">
        <b-form autocomplete="off" @submit.stop.prevent="handleLogin">
          <b-form-group
            id="form-group-1"
            class="form-group-login d-flex align-items-center justify-content-center form-group"
            label-for="input-field-username"
          >
            <div class="input-label text-black">email</div>
            <b-form-input
              autocomplete="off"
              class="input-field input-username"
              id="input-field-username"
              v-model="loginForm.email"
            />
          </b-form-group>

          <b-form-group
            id="form-group-2"
            class="form-group-login d-flex align-items-center justify-content-center form-group position-relative"
            label-for="input-field-password"
          >
            <div class="input-label text-black">Password</div>
            <b-form-input
              autocomplete="off"
              class="input-field input-password"
              type="password"
              id="input-field-password"
              v-model="loginForm.password"
            />
          </b-form-group>
        </b-form>
        <div
          class="d-flex align-items-center justify-content-center"
          style="margin-top: 30px"
        >
          <b-button class="btn-login border-0" @click="handleLogin">
            Đăng nhập
          </b-button>
        </div>
        <div
          class="d-flex align-items-center justify-content-center"
          style="margin-top: 15px"
        >
          <b-button class="btn-sign-up border-0" @click="SignUp">
            Đăng ký
          </b-button>
        </div>
      </div>
      <SignUp @goBack="goBack" v-if="step == 2" />
    </div>
  </div>
</template>

<script>
import SignUp from "../../components/signUp/index.vue";
import { loginApi } from "../../api/auth";
import { LocalStorageKey, ROUTER } from "../../constants/common";
import { mapGetters, mapActions } from "vuex";

export default {
  layout: "login",
  data() {
    return {
      step: 1,
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  computed:{
  ...mapGetters('dashboard', ['show']),
  },
  methods: {
    ...mapActions('dashboard', ['handleShow']),
    async handleLogin() {
      try {
        const response = await loginApi(this.loginForm);
        localStorage.clear();
        localStorage.setItem(
          LocalStorageKey.accessToken,
          response.data.accessToken
        );
        localStorage.setItem(LocalStorageKey.fullName, response.data.fullName);
        localStorage.setItem(LocalStorageKey.email, response.data.email);
        localStorage.setItem(LocalStorageKey.phone, response.data.phone);
        localStorage.setItem(LocalStorageKey.role, response.data.role);
        this.handleShow(true)
        this.$router.push(ROUTER.Dashboard);
      } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.message);
            console.log(error.response.headers); 
            console.log(error.response.data);
            console.log("error", error);
          }
      }
    },
    SignUp() {
      this.step = 2;
    },
    goBack() {
      this.step = 1;
    },
  },
};
</script>

<style scoped>
.bg_login {
  background: url(../../assets/images/bgLogin.jpg) no-repeat;
  background-size: cover;
  background-position: center center;
}
.container_login {
  height: 600px;
  width: 500px;
  border-radius: 12px;
  background-color: ghostwhite;
  padding: 50px;
}
.input-label,
.btn-login,
.btn-sign-up {
  width: 300px;
}
.btn-login {
  background: #002c77;
}
.btn-sign-up {
  background: green;
}
</style>
