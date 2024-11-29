<template>
  <v-layout ref="app" class="rounded rounded-md setup-background">
    <v-app-bar prominent :elevation="0" style="padding: 0px 6%" color="#eafcff">
      <div class="d-flex align-center" style="width: 200px">
        <v-img cover max-width="32" height="32" :src="logohands" class="mr-2"></v-img>
        <v-toolbar-title class="test600 green-text">Phuc Beo<br />
          HoTel</v-toolbar-title>
      </div>
      <VTabs v-model="currentTab" fixed-tabs bg-color="transparent" color="basil" grow style="margin-right: 60px">
        <VTab v-for="item in items" :key="item" :value="item">
          {{ item }}
        </VTab>
      </VTabs>
      <v-avatar class="ml-2">
        <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
      </v-avatar>
    </v-app-bar>
    <div>
      <v-main class="align-center justify-center " style="min-height: 300px; margin-bottom: 50px">
        <div style="margin: 10px 4% 0px 2%">
          <ArticleHome />
        </div>
      </v-main>
    </div>
  </v-layout>
  <FooterHome />
</template>

<script setup lang="ts">
import { ref } from "vue";
import logohands from "@/assets/images/logo/Logo.png";
import ArticleHome from "./ArticleHome.vue";
import FooterHome from "./FooterHome.vue";

const currentTab = ref("Hà Nội");
const items = ["Hà Nội", "Hà Giang", "Đà Nẵng", "TP. Hồ Chí Minh"];
const tabItemText =
  "hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.";
</script>
<style lang="scss" scoped>
.setup-background {
  background-size: cover;
  height: 100%;
  background-image: url("@/assets/images/iconify-svg/background.svg");
}
</style>
