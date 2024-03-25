<template>
  <v-layout>
    <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

    <v-app-bar prominent :elevation="0" style="padding: 0px 6%">
      <div class="d-flex align-center" style="width: 200px">
        <v-img
          cover
          max-width="32"
          height="32"
          :src="logohands"
          class="mr-2"
        ></v-img>
        <v-toolbar-title class="test600 green-text"
          >Phuc Beo<br />
          HoTel</v-toolbar-title
        >
      </div>

      <!-- <v-spacer></v-spacer> -->
      <!-- <VRow style="border: 1px solid red" class="mr-8"></VRow> -->

      <v-tabs
        v-model="tab"
        bg-color="transparent"
        color="basil"
        grow
        style="margin-right: 60px"
      >
        <v-tab v-for="item in items" :key="item" :value="item">
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item v-for="item in items" :key="item" :value="item">
          <v-card color="basil" flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-window-item>
      </v-window>

      <v-avatar class="ml-2">
        <v-img
          alt="John"
          src="https://cdn.vuetifyjs.com/images/john.jpg"
        ></v-img>
      </v-avatar>
    </v-app-bar>

    <v-main style="height: 90vh;margin: 30px 5%">
      <v-layout >
        <HomescreenVue/>
      </v-layout>
  
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import logohands from "@/assets/images/logo/Logo.png";
import HomescreenVue from "./Homescreen.vue";


const tab = ref("Appetizers");
const items = ref(["Appetizers", "Entrees", "Deserts", "Cocktails"]);
</script>
