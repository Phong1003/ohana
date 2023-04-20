<template>
  <div class="position-relative">
    <b-img :src="inforCard.img" class="img_verified" />
    <b-icon icon="shield-fill-check" class="position-absolute" style="color: #4877F8; top: 10px; right: 10px;" />
    <div style="font-size: 20px; font-weight: 500;">{{ inforCard.nameCard }}</div>
    <div class="d-flex justify-content-between">
      <div style="font-size: 16px; color: #666666;">{{ inforCard.address }}</div>
      <div style="color: #F73486;">{{ inforCard.price }}tr</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    contentVerified: {
      type: Object,
      default: {
        img: '',
        nameCard: '',
        address: '',
        price: ''
      }
    }
  },
  computed:{
    inforCard(){
      return{
        ...this.contentVerified
      }
    }
  }
}
</script>

<style scoped>
.img_verified{
  width: 100%; 
  height: 152px; 
  object-fit: cover; 
  border-radius: 8px;
}
</style>