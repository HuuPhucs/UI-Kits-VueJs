<template>
  <VRow>
    <VCol cols="5">
      <VCard class="pa-5">
        <VRow>
          <VCol cols="6">
            <AppTextField
              clearable
              prepend-inner-icon="tabler-search"
              placeholder="Enter hotel name"
            />
          </VCol>
          <VCol cols="6">
            <AppTextField
              clearable
              prepend-inner-icon="tabler-search"
              placeholder="Enter hotel name"
            />
          </VCol>
          <VCol>
            <AppTextField
              clearable
              prepend-inner-icon="tabler-search"
              placeholder="Enter hotel name"
            />
          </VCol>
          <VCol>
            <AppTextField
              clearable
              prepend-inner-icon="tabler-search"
              placeholder="Enter hotel name"
            />
          </VCol>
        </VRow>
      </VCard>
    </VCol>
    <VCol cols="7">
      <!-- <VCard class="pa-4"> -->
      <div v-for="(item, n) in hotelDate" :key="n">
        <v-card class="mb-6 justify-center">
          <div class="d-flex flex-no-wrap justify-center">
            <!-- {{ item }} -->
            <v-avatar class="ma-3" rounded="0" size="200">
              <v-img style="border-radius: 5px" :src="item.oneImage"></v-img>
            </v-avatar>

            <div class="d-flex justify-center align-center">
              <VRow>
                <VCol cols="8">
                  <div class="text-h4 mb-1">
                    {{ item.nameHotel }}
                  </div>
                  <div>
                    <p style="word-wrap: break-word">
                      {{ item.address }} · {{ item.nameCity }} ·
                      {{ item.phoneNumber }}
                    </p>
                  </div>
                </VCol>
                <VCol cols="3" style="text-align: right">
                  <div class="text-h6 mb-1">
                    ${{ item.price }}/<span>night</span>
                  </div>
                  <div class="text-h6">
                    <p style="word-wrap: break-word">
                      ${{ item.price * 2 }} total
                    </p>
                  </div>
                </VCol>
                <VCol cols="6">
                  <div class="text-h6 mb-1">Sleeping arrangements</div>
                  <p style="font-size: 12px">
                    <span class="mr-2">
                      <VIcon
                        size="24"
                        icon="tabler-bed-flat "
                        class="align-center mr-2"
                      />King size
                    </span>
                    <span>
                      <VIcon
                        size="24"
                        icon="tabler-bed "
                        class="align-center mr-2"
                      />Single bed
                    </span>
                  </p>
                </VCol>
                <VCol cols="5" class="d-flex">
                  <v-btn
                    style="width: 50%; font-size: 13px"
                    class="mr-3 ml-0"
                    color="#37416a"
                  >
                    Negotiate
                  </v-btn>
                  <v-btn style="width: 50%; font-size: 13px"> Book Now </v-btn>
                </VCol>
              </VRow>
            </div>
          </div>
        </v-card>
      </div>
      <!-- </VCard> -->
    </VCol>
  </VRow>
</template>
<script setup lang="ts">
import { ref } from "vue";
import HotelService from "@/services/HotelServices";

const hotelDate = ref<any>({});
const loadData = async () => {
  const result = await HotelService.GetAll();
  hotelDate.value = result;
  hotelDate.value = result.slice(0, 4);
};

onMounted(async () => {
  await loadData();
});
</script>

<style scoped lang="scss"></style>
