<template>
  <VCard>
    <VRow class="ma-2">
      <VCol cols="4">
        <AppTextField clearable prepend-inner-icon="tabler-search" placeholder="" />
      </VCol>
      <VCol cols="6">
      </VCol>
      <VCol cols="2" class="d-flex justify-end">
        <VBtn color="info" @click="showDialogCreate">
          Create new
        </VBtn>
      </VCol>
    </VRow>
  </VCard>

  <div class="mt-6 d-flex flex-wrap justify-center">
    <div v-for="(item, n) in listHote" :key="n" class="mr-4"
      style="max-width: 310px; max-height: 580px; margin: 0px 10px">
      <v-card class="mb-6 justify-center">
        <div class="justify-center">
          <div class="d-flex justify-center">
            <v-avatar class="my-4" rounded="0" size="280">
              <v-img style="border-radius: 5px" :src="item.oneImage"></v-img>
            </v-avatar>
          </div>

          <div class="d-flex justify-center align-center">
            <VRow class="pa-2">
              <VCol cols="12" class="pl-3">
                <div class="text-h4 mb-1">
                  {{ item.nameHotel }}
                </div>
                <div>
                  <p style="word-wrap: break-word">
                    {{ item.address }} · {{ item.nameCity }} <br />
                    {{ item.phoneNumber }}
                  </p>
                </div>
              </VCol>
              <VCol cols="4">
                <div class="text-h6 mb-1">
                  ${{ item.price }}/<span>night</span>
                </div>
                <div class="text-caption">
                  <p style="word-wrap: break-word">
                    ${{ item.price * 2 }} total
                  </p>
                </div>
              </VCol>
              <VCol cols="8">
                <div class="text-h6 mb-1">Sleeping arrangements</div>
                <p style="font-size: 12px">
                <div class="mr-2">
                  <VIcon size="24" icon="tabler-bed-flat " class="align-center mr-2" />King size
                </div>
                <div>
                  <VIcon size="24" icon="tabler-bed " class="align-center mr-2" />Single bed
                </div>
                </p>
              </VCol>
            </VRow>
          </div>
        </div>
      </v-card>
    </div>
  </div>
  <DialogCreat ref="showDialogCreat"/>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import HotelServices from "@/services/HotelServices";
import DialogCreat from "./components/DialogCreat.vue";


onMounted(async () => {
  await loadData();
});

const showDialogCreat = ref<any>(null)
const listHote = ref<any>({});
const loadData = async () => {
  const result = await HotelServices.GetAll();
  listHote.value = result;
};

const showDialogCreate = () =>{
  console.log(1)
  showDialogCreat.value.show()
}
</script>
<style lang="scss" scoped></style>
