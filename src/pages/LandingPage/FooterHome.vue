<template>
  <div
    style="
      background-image: linear-gradient(20deg, #fff 10%, rgb(208, 247, 255));
    "
  >
    <VRow class="" style="margin: 0px 130px;">
      <VCol cols="4">
        <div class="d-flex mt-8">
          <v-img
            cover
            max-width="32"
            height="32"
            :src="logohands"
            class="mr-2"
          ></v-img>
          <v-toolbar-title class="green-text d-flex align-end"
            >Phuc Beo HoTel</v-toolbar-title
          >
        </div>
        <div class="mb-4 mt-8" style="font-weight: 500;">Công ty TNHH Du Lịch và Dịch Vụ Phúc Beo Hotel</div>
        <div class="my-4" style="font-weight: 500;">
          Tầng 7, số nhà 25, ngõ 38 phố Yên Lãng, phường Láng Hạ, quận Đống Đa,
          TP. Hà Nội
        </div>
        <div class="mt-5" style="font-weight: 500;">
          Mã số doanh nghiệp: 0110376372 do Sở Kế hoạch và Đầu tư Thành phố Hà
          Nội cấp ngày 05/06/2023
        </div>
      </VCol>
      <VCol cols="3">
        <div style="font-weight: 600;">GIỚI THIỆU</div>
        <div class="mt-2">Về chúng tôi</div>
        <div class="mt-2">Điều khoản và điều kiện</div>
        <div class="mt-2">Chính sách riêng tư</div>
        <div class="mt-2">Hướng dẫn sử dụng</div>
        <div class="mt-2">Hình thức thanh toán</div>
        <div class="mt-2">Liên hệ</div>
        <div class="mt-2">Hotline: 0998979937</div>
        <div class="mt-2">Email: info@phucbeo.com</div>
      </VCol>
      <VCol cols="3">
        <div style="font-weight: 600;">ĐIỂM ĐẾN</div>
        <div class="mt-2">Vịnh Hạ Long</div>
        <div class="mt-2">Vịnh Lan Hạ</div>
        <div class="mt-2">Đảo Cát Bà</div>
      </VCol>
      <VCol cols="2">
        <div style="font-weight: 600;">DU THUYỀN</div>
        <div class="mt-2">Blog</div>
        <div class="mt-2">Quy định chung và lưu ý</div>
        <div class="mt-2">Câu hỏi thường gặp</div>
      </VCol>
    </VRow>
  </div>
</template>
<script lang="ts" setup>
import logohands from "@/assets/images/logo/Logo.png";

import { VCol } from "vuetify/lib/components/index.mjs";
</script>
<style lang="scss" scoped></style>
