<template>
  <div class="detail__container">
    <ViewDetails />
  </div>
</template>
  
<script>
import ViewDetails from "../../../components/view/details.vue";
export default {
  layout: "defaults",
  components: {
    ViewDetails,
  },
};
</script>
  
<style>
.detail__container {
  background-color: #f6f5f2;
}
</style>