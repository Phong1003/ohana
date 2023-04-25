<template>
  <div class="layouts">
    <Headers />
    <div class="nuxt_class">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Headers from "../components/appHeader/headerCreate.vue";
export default {
  components: {
    Headers
  },
};
</script>

<style scoped>
.layouts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.nuxt_class{
  background-color: ghostwhite;
}
</style>