<template>
  <v-row class="d-flex custom-Login">
    <v-col cols="7" class="input-login">
      <form @submit.prevent="submit">
        <v-row>
          <v-col
            cols="12"
            class="d-flex justify-space-between align-center"
            style="margin-top: 8%; padding: 0% 10%"
          >
            <v-img cover max-width="24" height="24" :src="logohands"></v-img>
            <p class="text-title600 green-text">Log In</p>
          </v-col>
          <v-row class="custom-input">
            <v-col cols="12">
              <p class="text-heading">
                Connect with your team and bring your creative ideas to life .
              </p>
            </v-col>

            <v-col cols="6">
              <label class="text-label">First name</label>
              <AppTextField placeholder="First name" />
            </v-col>

            <v-col cols="6">
              <label class="text-label">Last name</label>
              <AppTextField placeholder="Last name" />
            </v-col>

            <v-col cols="6">
              <label class="text-label">Password</label>
              <AppTextField placeholder="Password" />
            </v-col>

            <v-col cols="6">
              <label class="text-label">Repeat password</label>
              <AppTextField placeholder="Repeat password" />
            </v-col>

            <v-col cols="12">
              <div class="d-flex align-center">
                <VCheckbox />
                <label class="text-title600"
                  >I agree with
                  <span class="green-text">Terms and conditions</span>
                </label>
              </div>
            </v-col>

            <v-col cols="12" class="mb-4">
              <v-btn width="100%" variant="tonal">Create free account</v-btn>
            </v-col>
          </v-row>
        </v-row>
      </form>
    </v-col>
    <v-col cols="5" class="img-background"></v-col>
  </v-row>
</template>

<script lang="ts" setup>
import logohands from "@/assets/images/logo/Logo.png";

const submit = () => {};
</script>
<style lang="scss" scoped>
.img-background {
  background-size: cover;
  background-position: center;
  box-shadow: 2px 2px 90px 0px rgba(0, 0, 0, 0.5);
  background-image: url("https://www.holidaycheck.de/main-photo-redirect/b4d6dffd-ed9c-475a-a0a9-7eb1d7ecbf28/w_1280,h_720,c_fill,q_auto,f_auto");
}

.custom-Login {
  height: 100vh;
  background: #f9fafb;
}

.custom-input {
  margin-top: 8%;
  margin: 5%;
  padding: 20px 10px 0px 10px;
  border-radius: 10px;
  border: 1px solid #e3e6e9;
  background-color: #eef0f3;
  box-shadow: 2px 2px 1000px 0px rgba(0, 0, 0, 0.5);
}
</style>
