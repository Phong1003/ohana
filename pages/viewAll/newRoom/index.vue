<template>
  <div class="container_new_room d-flex justify-content-center">
    <div class="container_filter bg-white h-100">
      <div class="d-flex justify-content-between align-items-center px-4 pt-4">
        <div style="font-size: 24px; font-weight: 500;">Bộ lọc</div>
        <div class="apply">Áp dụng</div>
      </div>
      <div class="collapse_filter">
        <b-button class="d-flex align-items-center justify-content-between px-4 mt-3" @click="price" v-b-toggle.collapse-1>
          <div>Giá</div>
          <b-icon :class="{'rotatePrice': priceActive ? true : false}" icon="chevron-right"></b-icon>
        </b-button>
        <b-collapse id="collapse-1" class="mt-2 px-4">
          <b-form-group >
            <b-form-radio-group
              v-model="priceRadio"
              :options="optionsPrice"
              name="radios-price"
              stacked
            ></b-form-radio-group>
          </b-form-group>
        </b-collapse>
        <b-button v-b-toggle.collapse-2 class="d-flex align-items-center justify-content-between px-4" @click="utilities">
          <div>Tiện ích</div>
          <b-icon :class="{'rotateUtilities': utilitiesActive ? true : false}" icon="chevron-right"></b-icon>
        </b-button>
        <b-collapse id="collapse-2" class="mt-2 px-4">
          <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
            WC riêng
          </b-form-checkbox>
          <b-form-checkbox id="checkbox-2" name="checkbox-2" value="accepted" unchecked-value="not_accepted">
            Chỗ để xe
          </b-form-checkbox>
          <b-form-checkbox id="checkbox-3" name="checkbox-3" value="accepted" unchecked-value="not_accepted">
            Cửa sổ
          </b-form-checkbox>
          <b-form-checkbox id="checkbox-4" name="checkbox-4" value="accepted" unchecked-value="not_accepted">
            An ninh
          </b-form-checkbox>
          <b-form-checkbox id="checkbox-5" name="checkbox-5" value="accepted" unchecked-value="not_accepted">
            Wifi
          </b-form-checkbox>
        </b-collapse>
        <b-button class="d-flex align-items-center justify-content-between px-4" @click="typeRoom" v-b-toggle.collapse-3>
          <div>Loại phòng</div>
          <b-icon :class="{'rotateRoom': roomActive ? true : false}" icon="chevron-right"></b-icon>
        </b-button>
        <b-collapse id="collapse-3" class="mt-2 px-4">
          <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
            Tất cả
          </b-form-checkbox>
          <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
            Phòng cho thuê
          </b-form-checkbox>
          <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
            Phòng ở ghép
          </b-form-checkbox>
          <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
            kí túc xá
          </b-form-checkbox>
          <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
            Nhà nguyên căn
          </b-form-checkbox>
          <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
            Căn hộ
          </b-form-checkbox>
        </b-collapse>
        <b-button class="d-flex align-items-center justify-content-between px-4" @click="gender" v-b-toggle.collapse-4>
          <div>Giới tính</div>
          <b-icon :class="{'rotateGender': genderActive ? true : false}" icon="chevron-right"></b-icon>
        </b-button>
        <b-collapse id="collapse-4" class="mt-2 px-4">
          <b-form-group >
            <b-form-radio-group
              v-model="genderRadio"
              :options="optionsGender"
              name="radios-gender"
              stacked
            ></b-form-radio-group>
          </b-form-group>
        </b-collapse>
      </div>
      <div class="d-flex align-items-center justify-content-center py-4" style="font-size: 16px; color: #4877F8; cursor: pointer;">
        Áp dụng
      </div>
    </div>
    <div class="new_room bg-white">
      <div class="d-flex justify-content-between align-items-center" style="margin-bottom: 32px;">
        <div class="title_new_room">Phòng mới nhất</div>
      </div>
      <div class="content_room" v-for="(item, index) in listRoom" :key="index">
        <CardRoom :contentRoom="item" />
      </div>
    </div>
  </div>
</template>

<script>
import CardRoom from '@/components/listRoom/index.vue'
import {search} from "../../../api/dashboard/index"
export default {
  layout: "defaults",
  components: {CardRoom},
  data(){
    return {
      priceActive: false,
      utilitiesActive: false,
      roomActive: false,
      genderActive: false,
      listRoom: [],
      priceRadio: "",
      genderRadio: "",
      optionsPrice: [
        { text: '1tr-5tr', value: 'first' },
        { text: '6tr-10tr', value: 'second' },
        { text: '11tr-15tr', value: 'third' }
      ],
      optionsGender: [
        { text: 'Tất cả', value: 'all' },
        { text: 'Nam', value: 'man' },
        { text: 'Nữ', value: 'woman' }
      ]
    }
  },
  async created(){
    try {
      const response = await search({
        searchQuery: "",
        price: "",
        category: "",
        utilities: "",
        noSex: "",
        status: "",
        pageNumber: 10,
        pageSize: 0
      })
      if(response && response.data.length){
        this.listRoom = response.data.map(item => {
          return {
            img: item.imgRoom,
            nameRoom: item.name,
            typeRoom: item.category,
            sex: '',
            acreage: item.capacity,
            address: item.address,
            price: item.price
          }
        })
        console.log(this.listRoom);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    price(){
      this.priceActive = !this.priceActive
    },
    utilities(){
      this.utilitiesActive = !this.utilitiesActive
    },
    typeRoom(){
      this.roomActive = !this.roomActive
    },
    gender(){
      this.genderActive = !this.genderActive
    }
  }
}
</script>

<style scoped>
.container_new_room{
  padding: 32px;
}
.container_filter{
  border-radius: 20px;
  width: 400px;
  margin-right: 32px;
}
.apply{
  font-size: 16px;
  color: #4877F8;
  border: 1px solid #4877F8;
  border-radius: 16px;
  cursor: pointer;
  padding: 4px 12px;
}
.collapse_filter{
  background-color: beige;
}
.collapse_filter .btn-secondary{
  color: #333333 !important;
  background-color: beige !important;
  border-bottom: 1px solid grey !important;
  width: 100%;
  border: none;
  height: 50px;
}
.collapse_filter .btn-secondary:focus{
  border-color: unset !important;
  box-shadow: unset !important;
}
.rotatePrice, .rotateUtilities, .rotateRoom, .rotateGender{
  transform: rotate(90deg);
  transition: 0.5s;
}
.new_room{
  padding: 32px;
  border-radius: 20px;
  width: 69%;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
}
.title_new_room{
  font-size: 24px;
  font-weight: 500;
}
.content_room{
  border-bottom: 1px solid #CDCDCD;
}
</style>