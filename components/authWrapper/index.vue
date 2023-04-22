<template>
  <div class="auth-wrapper">
    <slot />
  </div>
</template>

<script>
import { LocalStorageKey, ROUTER } from "../../constants/common";
export default {
  created() {
    this.handleAuthorization();
  },
  methods: {
    handleAuthorization() {
      if (!process.browser) return;
      const accessToken = localStorage.getItem(LocalStorageKey.accessToken);
      if (!accessToken) {
        return this.$router.push(ROUTER.Login);
      } else {
        return;
      }
    },
  },
};
</script>
