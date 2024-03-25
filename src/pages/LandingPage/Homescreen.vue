<template>
  <div>
    <VRow style="margin: 10px 3%">
      <VCol cols="12">
        <v-card>
          <v-carousel hide-delimiters show-arrows="hover" cycle>
            <v-carousel-item style="border: 1px solid red" v-for="(item, i) in items" :key="i" :src="item.src" cover>
              <!-- <div>
              sdfdsf
            </div> -->
            </v-carousel-item>
          </v-carousel>
        </v-card>

        <VRow class="khum-timkiem" style="width: 60%">
          <VCol cols="12" class="d-flex justify-center">
            <div>
              <h1>Bạn lựa chọn du thuyền Hạ Long nào?</h1>
              <p class="d-flex justify-center">
                Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn
              </p>
            </div>
          </VCol>

          <VCol cols="4">
            <AppTextField clearable prepend-inner-icon="tabler-search" placeholder="Tìm theo tên phật tử" />
          </VCol>

          <VCol cols="3">
            <AppSelect item-title="value" item-value="id" :items="filterFormChuTang" placeholder="Trạng thái" clearable
              single-line />
          </VCol>

          <VCol cols="3">
            <AppSelect item-title="value" item-value="id" :items="filterFormChuTang" placeholder="Trạng thái" clearable
              single-line />
          </VCol>

          <VCol cols="2">
            <VBtn style="color: white">Tiềm Kiếm</VBtn>
          </VCol>
        </VRow>

      </VCol>
      <VCol cols="12">
        <VRow>
          <VCol cols="12" class="d-flex justify-space-between align-center">
            <div class="d-flex align-center">
              <v-avatar class="ml-2" size="50">
                <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
              </v-avatar>
              <div class="pl-9">
                <p>Look what I found for ou</p>
                <p>Hotels with 10% OFF</p>
              </div>
            </div>
            <VBtn style="color: white">View All</VBtn>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
    <v-container>
      <v-row class="pl-5">
        <v-col v-for="(item, n) in hotelDate" :key="n" cols="auto">
          <v-card class="d-flex justify-center align-center">
            <div style=" box-shadow: 2px 2px 1px 0px rgba(0, 0, 0, 0.5);">
              <v-img class="bg-grey-lighten-2" height="300" width="360" :src="item.listImage" cover></v-img>
              <v-card-title class="text-h6">
                <span class="text-title">{{ item.nameHotel }} </span> <span class="text-title">· {{ item.phoneNumber
                  }}</span>
                <div class="d-flex">
                  <VIcon size="16" icon="tabler-map-pin" class="mt-1" style="opacity: 1;" />
                  <p>{{ item.nameCity }}</p>
                </div>

                <div class="d-flex justify-space-between ">
                  <p>{{ item.price }} VND</p>
                  <VBtn variant="outlined" color="info" class="btn-xemGia">Xem giá</VBtn>
                </div>
              </v-card-title>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </div>


</template>
<script lang="ts" setup>
import { Ref } from "vue";
import HotelService from "@/services/HotelServices";
const items = [
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
  },
];
const filterFormChuTang = [
  { id: 1, value: "Chờ BNL ĐT tiếp nhận" },
  { id: 2, value: "Chờ BHD tiếp nhận" },
  { id: 3, value: "Chờ BNL CLB tiếp nhận" },
  { id: 4, value: "CLB tiếp nhận" },
  { id: 5, value: "Hủy đăng ký" },
];

const hotelDate = ref({})
const loadData = async () => {
  const result = await HotelService.GetAll();
  hotelDate.value = result
  // hotelDate.value = result.slice(0, 3)
  console.log(hotelDate.value, 111);
};


onMounted(async () => {
  await loadData();
});
</script>
<style lang="scss" scoped>

.khum-timkiem {
  position: relative;
  top: -10%;
  left: 50%;
  transform: translateX(-48.5%);
  background-color: #fff;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.5);

  padding: 20px;
  border-radius: 10px;
}

.text-btn {
  position: absolute;
  top: 12%;
  transform: translate(20%);
  padding: 20px;
  border-radius: 10px;
}
</style>
