<template>
  <div class="container_card position-relative">
    <b-img :src="inforCard.img" class="img_card" />
    <div class="d-flex justify-content-center name_card position-absolute text-white w-100">{{inforCard.nameCard}}</div>
  </div>
</template>

<script>
export default {
  props:{
    cardContent: {
      type: Object,
      default: {
        img: '',
        nameCard: 'Bình Thạnh',
      }
    }
  },
  computed:{
    inforCard(){
      return{
        ...this.cardContent
      }
    }
  },
}
</script>

<style scoped>
.img_card{
  height: 128px;
  width: 176px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
}
.name_card{
  font-size: 14px;
  font-weight: 700;
  bottom: 0;
  height: 40px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.9)))
}
</style>