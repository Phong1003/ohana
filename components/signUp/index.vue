<template>
  <div style="margin-top: 30px;">
    <b-form autocomplete="off" @submit.stop.prevent="handleSignUp">
      <b-form-group id="form-group-1" class="form-group-login d-flex align-items-center justify-content-center form-group"
        label-for="input-field-username">
        <div class="input-label text-black">
          Fullname
        </div>
        <b-form-input autocomplete="off" class="input-field input-username" id="input-field-username"
          name="input-field-username" v-model="formRegister.fullName" />
      </b-form-group>

      <b-form-group id="form-group-1" class="form-group-login d-flex align-items-center justify-content-center form-group"
        label-for="input-field-username">
        <div class="input-label text-black">
          Email
        </div>
        <b-form-input autocomplete="off" class="input-field input-username" id="input-field-username"
          name="input-field-username" v-model="formRegister.email" />
      </b-form-group>

      <b-form-group id="form-group-2"
        class="form-group-login d-flex align-items-center justify-content-center form-group position-relative"
        label-for="input-field-password">
        <div class="input-label text-black">
          Password
        </div>
        <b-form-input autocomplete="off" class="input-field input-password" type="password"
          id="input-field-password" name="input-field-password" v-model="formRegister.password"
        />
      </b-form-group>

      <b-form-group id="form-group-1" class="form-group-login d-flex align-items-center justify-content-center form-group"
        label-for="input-field-username">
        <div class="input-label text-black">
          Phone
        </div>
        <b-form-input autocomplete="off" type="number" class="input-field input-username" id="input-field-username"
          name="input-field-username" v-model="formRegister.phone" />
      </b-form-group>
    </b-form>
    <div class="d-flex align-items-center justify-content-center" style="margin-top: 30px;">
      <b-button class="btn-sign-up border-0" @click="handleSignUp">
        Đăng ký
      </b-button>
    </div>
  </div>
</template>

<script>
import {registerApi} from "../../api/auth";
export default {
  data(){
    return{
      formRegister: {
        fullName: '',
        email: '',
        password: '',
        phone: ''
      }
    }
  },
  methods: {
    async handleSignUp(){
      try {
        const response = await registerApi(this.formRegister)
        console.log(response);
        this.$emit('goBack')
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
.input-label, .btn-sign-up{
  width: 300px;
}
.btn-sign-up{
  background: green;
}
</style>