<template>
  <v-row class="d-flex custom-Login">
    <v-col cols="5" class="input-login">
      <form @submit.prevent="submit">
        <v-row class="custom-input">
          <v-col cols="12">
            <p class="text-heading">
              Let's get <span class="gradient-text">creative!</span>
            </p>
            <p class="text-title">
              Log in to Artificium to start creating magic.
            </p>
          </v-col>

          <v-col cols="12">
            <label class="text-label">Email</label>
            <AppTextField prepend-inner-icon="tabler-mail" placeholder="Email" />
          </v-col>

          <v-col cols="12">
            <label class="text-label">Password</label>
            <AppTextField prepend-inner-icon="tabler-lock-square-rounded" placeholder="Password" />
          </v-col>

          <v-col cols="12" class="d-flex justify-space-between align-center">
            <div class="d-flex align-center">
              <VCheckbox />
              <label class="text-label">Remember me</label>
            </div>
            <label class="text-title600 green-text">Forgot Password ?</label>
          </v-col>

          <v-col cols="12">
            <v-btn width="100%" variant="tonal">Log in</v-btn>
          </v-col>

          <v-col cols="12" class="d-flex justify-center py-0">
            <div style="border-top: 1px solid black"></div>
            <p>or continue with</p>
            <div style="border-top: 1px solid black"></div>
          </v-col>

          <v-col cols="6" class="d-flex">
            <v-btn variant="tonal" width="100%" class=" mr-1">
              <VIcon start size="24" icon="tabler-brand-google-filled" />
              Google Account
            </v-btn>
            <v-btn width="100%" variant="tonal" class=" ml-5">
              <VIcon start size="24" icon="tabler-brand-apple-filled" />
              Apple Account
            </v-btn>
          </v-col>


          <v-col cols="12" class="mt-4">
            <p>
              Don’t have an account?<span class="gradient-text"> Sign Up</span>
            </p>
          </v-col>
        </v-row>
      </form>
    </v-col>
    <v-col offset="1" cols="6" class="img-background"></v-col>
  </v-row>
</template>

<script lang="ts" setup>

const submit = () => { };
</script>
<style lang="scss" scoped>
.img-background {
  background-size: cover;
  background-position: center;
  background-image: url("https://www.hilton.com/im/en/AUHYIHI/15316355/auhyihi-pool-facade-day.jpg?impolicy=crop&cw=2250&ch=3001&gravity=NorthWest&xposition=1124&yposition=0&rw=1280&rh=1706");
}

.custom-Login {
  height: 100vh;
  background: #f9fafb;
}

.custom-input {
  margin-top: 8%;
  margin-left: 25%;
  padding: 20px 10px 0px 10px;
  border-radius: 10px;
  border: 1px solid #e3e6e9;
  background-color: #eef0f3;
  box-shadow: 2px 2px 1000px 0px rgba(0, 0, 0, 0.5);
}
</style>
