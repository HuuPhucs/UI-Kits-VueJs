<template>
  <v-dialog v-model="showDialog" :max-width="props.wdith" persistent>
    <v-card>
      <VRow class="px-4 pt-4 mb-4" style="border-bottom: 1px solid black;">
        <VCol cols="10">
          <h3 class="text-heading">{{ props.title }}</h3>
        </VCol>
        <VCol cols="2" class="d-flex justify-end">
          <VBtn @click="onCancelCicked" icon="mdi-close" size="32" color="grey-lighten-1" />
        </VCol>
      </VRow>
      <VContainer class="px-8">
        <VForm ref="refFormDialog" lazy-validation>
          <slot></slot>
        </VForm>
      </VContainer>
      <VCardActions style="border-top: 1px solid black;" class="pa-3 mt-5">
        <VSpacer />
        <VBtn variant="outlined" color="error" @click="onCancelCicked" class="cancel-button">
          Hủy
        </VBtn>
        <div class="ms-3">
          <VBtn variant="elevated" class="action-button" @click="onConfirmClicked">
            {{ props.titleAction }}
          </VBtn>
        </div>
      </VCardActions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { VForm } from "vuetify/lib/components/index.mjs";

const showDialog = ref<boolean>(false);
const refFormDialog = ref<VForm>()
const emit = defineEmits(["onConfirmed"]);

const data = ref<any>();
const props = defineProps({
  wdith: {
    type: [String, Number],
    default: "",
  },
  title: {
    type: String,
    default: "",
  },

  titleAction: {
    type: String,
    default: "",

  },
});

const onCancelCicked = () => {
  showDialog.value = false;
};

const onConfirmClicked = () => {
  refFormDialog.value?.validate().then(async ({ valid: isValid }) => {
    if (isValid) {
      emit("onConfirmed", data.value);
    }
  });
}

const show = (d: any) => {
  showDialog.value = true;
  data.value = d;
};

defineExpose({
  show,
  onCancelCicked,
});
</script>

<style lang="scss" scoped>
</style>
