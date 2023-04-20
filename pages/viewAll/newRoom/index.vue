<template>
  <div class="container_new_room d-flex align-items-center justify-content-center">
    <div class="container_filter bg-white">
      <div class="d-flex justify-content-between align-items-center">
        <div style="font-size: 24px; font-weight: 500;">Bộ lọc</div>
        <div class="apply">Áp dụng</div>
      </div>
      <div class="collapse_filter">
        <b-button v-b-toggle.collapse-1>Giá</b-button>
        <b-collapse id="collapse-1" class="mt-2">
          <b-form-radio name="some-radios" value="A">1tr-5tr</b-form-radio>
          <b-form-radio name="some-radios" value="B">6tr-10tr</b-form-radio>
          <b-form-radio name="some-radios" value="B">11tr-15tr</b-form-radio>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "defaults",

}
</script>

<style scoped>
.container_filter{
  border-radius: 20px;
  width: 400px;
  padding: 32px;
}
.apply{
  font-size: 16px;
  color: #4877F8;
  border: 1px solid #4877F8;
  border-radius: 16px;
  cursor: pointer;
  padding: 4px 12px;
}
.collapse_filter .btn-secondary{
  color: #333333 !important;
  /* background-color: unset !important; */
  border-color: unset !important;
  border: none;
  padding: 0 !important;
}
</style>