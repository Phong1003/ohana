<template>
  <div class="container_filter p-2 bg-white d-flex align-items-center">
    <input class="input_filter border-0" v-model="searchInfor" placeholder="Tìm kiếm theo địa điểm, quận, tên đường..." />
    <b-icon class="mr-2 icon_search" icon="search" @click="handleSearch" />
  </div>
</template>

<script>
export default {
  data(){
    return {
      searchInfor: ''
    }
  },
  methods: {
    handleSearch(){
      this.$emit('searchRoom', this.searchInfor)
    }
  },
  watch: {
    'searchInfor': function () {
      this.handleSearch()
    }
  }
}
</script>

<style scoped>
.container_filter{
  border: 1px solid #CDCDCD;
  border-radius: 30px;
  height: 50px;
}
.autocomplete_filter_house{
  height: 30px;
  width: 115px;
  margin-left: 11px;
  margin-top: 10px;
  border-right: 1px solid #B4B4B4;
}
.autocomplete_filter_house .vue-simple-suggest.designed .suggestions{
  top: 50px;
  left: -10px;
  border-radius: 24px;
  width: 120px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
}
.autocomplete_filter_house .vue-simple-suggest.designed .suggestions .suggest-item{
  border-bottom: 1px solid #CDCDCD;
}
.autocomplete_filter_house .vue-simple-suggest.designed .input-wrapper input{
  padding: unset;
}
.icon_geo_alt{
  margin: 16px 0 0 15px;
  color: #f7346f;
}
.icon_search{
  color: #f7346f;
}
textarea:focus, input:focus{
  outline: none;
}
.input_filter{
  width: 330px;
}
</style>