<template>
  <AddorEditDialog
    title-action="Creat new"
    ref="showDialog"
    wdith="800"
    title="Create new product"
    @on-confirmed="onCreatProduct"
  >
    <VRow>
      <VCol cols="12">
        <VLabel class="text-label">
          Name hotel &nbsp;
          <span class="required"> *</span>
        </VLabel>
        <AppTextField
          placeholder="Name hotel"
          :rules="[requiredValidator]"
          v-model="workingItemHotle.nameHotel"
        />
      </VCol>
      <VCol cols="6">
        <VLabel class="text-label">
          PhoneNumber &nbsp;
          <span class="required"> *</span>
        </VLabel>
        <AppTextField
          placeholder="PhoneNumber"
          v-model="workingItemHotle.phoneNumber"
        />
      </VCol>
      <VCol cols="6">
        <VLabel class="text-label">
          Name City &nbsp;
          <span class="required"> *</span>
        </VLabel>
        <AppSelect placeholder="Name City" :items="itemCity" />
      </VCol>

      <VCol cols="12">
        <VLabel class="text-label">
          Address&nbsp;
          <span class="required"> *</span>
        </VLabel>
        <AppTextarea auto-grow rows="2" placeholder="Address" />
      </VCol>

      <VCol cols="12">
        <div class="d-flex">
          <VLabel class="text-label"> Name hotel &nbsp; </VLabel>
          <VCheckbox class="ml-2" v-model="switchOnDisabled" />
        </div>
        <!-- <v-switch v-model="switchOnDisabled"></v-switch> -->
        <div v-if="switchOnDisabled">
          <VRow class="mx-1 my-1" style="border: 1px solid black; border-radius: 5px;">
            <VCol cols="6">
              <VLabel class="text-label"> Name hotel &nbsp; </VLabel>
              <div class="demo-space-x">
                <VCheckbox v-model="switchOnDisabled" label="Yes" />

                <VCheckbox v-model="switchOnDisabled" label="No" />
              </div>
            </VCol>
            <VCol cols="6">
              <VLabel class="text-label"> Bed Big &nbsp; </VLabel>
              <div class="demo-space-x">
                <VCheckbox v-model="switchOnDisabled" label="Yes" />

                <VCheckbox v-model="switchOnDisabled" label="No" />
              </div>
            </VCol>
            <VCol cols="12">
              <VLabel class="text-label"> Number Bed &nbsp; </VLabel>
              <AppTextField placeholder="Number Bed" v-model="workingItemHotle.nameCity"/>
            </VCol>
          </VRow>
        </div>
      </VCol>

      <VCol cols="6">
        <VLabel class="text-label">
          Check in date &nbsp;
          <span class="required"> *</span>
        </VLabel>
        <AppTextField placeholder="Check in date" />
      </VCol>
      <VCol cols="6">
        <VLabel class="text-label">
          Out in date &nbsp;
          <span class="required"> *</span>
        </VLabel>
        <AppTextField placeholder="Out in date" />
      </VCol>
      <VCol cols="6">
        <VLabel class="text-label">
          Price &nbsp;
          <span class="required"> *</span>
        </VLabel>
        <AppTextField placeholder="price" />
      </VCol>

      <VCol cols="12">
        <VLabel class="text-label">
          Note&nbsp;
          <span class="required"> *</span>
        </VLabel>
        <AppTextarea auto-grow rows="2" placeholder="Note" v-model="workingItemHotle.note"/>
      </VCol>

      <!-- <VCol cols="12" >
        <VLabel class="text-label">
          Họ và tên &nbsp;
          <span class="required"> *</span>
        </VLabel>
        <VFileInput v-model="file" :loading="loading" color="primary" />
      </VCol> -->
    </VRow>
  </AddorEditDialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
import AddorEditDialog from "@/@layouts/components/AddorEditDialog.vue";
import { requiredValidator } from "@validators";
import { VRow } from "vuetify/lib/components/index.mjs";
import { DeatilHotle } from "@/interfaces/creatNewHotel";

const workingItemHotle = ref<DeatilHotle>({} as DeatilHotle);

const switchOnDisabled = ref("on");

const itemCity = [
  "New York City",
  "Cape Town, South Africa",
  "Berlin, Germany",
  "London, U.K.",
  "Madrid, Spain",
  "Mexico City, Mexico",
  "Liverpool, U.K.",
  "Tokyo, Japan",
  "Rome, Italy",
  "Porto, Portugal",
  "Paris, France",
  "Mumbai, India",
  "Lisbon, Portugal",
  "Chicago",
  "Manchester, U.K.",
  "São Paulo, Brazil",
  "Los Angeles",
  "Amsterdam, The Netherlands",
  "Lagos",
  "Melbourne, Australia",
];

const showDialog = ref<any>();
const show = () => {
  showDialog.value.show();
};

const onCreatProduct = () => {
  showDialog.value.onCancelCicked();
  console.log(workingItemHotle.value, "Object creat");
};

/// Sự lý file
// const file = ref();
// const loading = ref(true);

// watch(file, () => {
//   loading.value = !file.value[0];
// });

defineExpose({
  show,
});
</script>
<style scoped lang="scss">
.required {
  color: red;
}
</style>
