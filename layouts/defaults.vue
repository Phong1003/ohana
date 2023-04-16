<template>
  <div>
    <Headers />
    <Sidebar />
  </div>
</template>

<script>
import Headers from "../components/appHeader/header.vue";
import Sidebar from "../components/sidebar/sidebar.vue";
export default {
  components: {
    Headers,
    Sidebar
  },
};
</script>

<style>
</style>