<template>
  <div class="layouts">
    <Headers />
    <div class="nuxt_class">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Headers from "../components/appHeader/header.vue";
import Footer from '../components/footer/index.vue'
export default {
  components: {
    Headers,
    Footer
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
  margin-top: 60px;
}
</style>