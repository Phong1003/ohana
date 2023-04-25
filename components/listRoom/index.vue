<template>
  <div class="d-flex justify-content-between align-items-center mt-3 mb-3">
    <div class="d-flex">
      <b-img :src="inforCard.img" class="img_room mr-3" />
      <div>
        <div class="name_room">{{ inforCard.nameRoom }}</div>
        <div class="d-flex align-items-center mb-3">
          <b-icon icon="house" class="mr-2"></b-icon>
          <div>{{ inforCard.typeRoom }}</div>
        </div>
        <div class="d-flex mb-3">
          <div class="d-flex align-items-center" style="margin-right: 32px;">
            <b-icon icon="people" class="mr-2"></b-icon>
            <div>{{ inforCard.sex }}</div>
          </div>
          <div class="d-flex align-items-center">
            <b-icon icon="rulers" class="mr-2"></b-icon>
            <div>{{ inforCard.acreage }}m2</div>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <b-icon class="mr-1" icon="geo-alt-fill" />
          <div class="address_content">{{ inforCard.address }}</div>
        </div>
      </div>
    </div>
    <div style="font-size: 48px; color: #F73486; font-weight: 700;">{{ inforCard.price }}</div>
  </div>
</template>

<script>
export default {
    props:{
    contentRoom: {
      type: Object,
      default: {
        img: '',
        nameRoom: '',
        typeRoom: '',
        sex: '',
        acreage: '',
        address: '',
        price: ''
      }
    }
  },
  computed:{
    inforCard(){
      return{
        ...this.contentRoom
      }
    }
  },
}
</script>

<style scoped>
.img_room{
  width: 216px;
  height: 152px;
  object-fit: cover;
  border-radius: 8px;
}
.name_room{
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 22px;
}
.address_content{
  height: 24px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  width: 330px;
}
</style>