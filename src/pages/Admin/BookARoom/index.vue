<template>
  <div>
    <VRow>
      <VCol cols="12">
        <v-card>
          <v-carousel hide-delimiters show-arrows="hover" cycle>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
              cover
            >
            </v-carousel-item>
          </v-carousel>
        </v-card>

        <VRow class="khum-timkiem" style="width: 75%">
          <VCol cols="12" class="d-flex justify-center">
            <div>
              <h1>Bạn lựa chọn du thuyền Hạ Long nào?</h1>
              <p class="d-flex justify-center">
                Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn
              </p>
            </div>
          </VCol>

          <VCol cols="4">
            <AppTextField
              clearable
              prepend-inner-icon="tabler-search"
              placeholder="Enter hotel name"
            />
          </VCol>

          <VCol cols="3">
            <AppSelect
              item-title="value"
              item-value="id"
              :items="itemCity"
              clearable
              single-line
            />
          </VCol>

          <VCol cols="3">
            <AppSelect
              item-title="value"
              item-value="id"
              :items="itemMony"
              clearable
              single-line
              prepend-inner-icon="tabler-cash"
            />
          </VCol>

          <VCol cols="2">
            <VBtn style="color: white" @click="showListHotel">Tìm Kiếm</VBtn>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
    <VRow style="margin: 0px 8%">
      <VCol cols="7">
        <v-divider></v-divider>
        <Container>
          <v-card-item>
            <v-card-title> Description </v-card-title>
          </v-card-item>

          <v-card-text>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley. Lorem ipsum
            is simply is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley.
          </v-card-text>
          <v-card-item>
            <v-card-title> What's included </v-card-title>
          </v-card-item>
          <v-card-text>
            <VRow>
              <VCol cols="6">
                <VIcon
                  size="26"
                  icon="tabler-wifi "
                  class="align-center mr-2"
                  style="
                    border: 1px solid black;
                    border-radius: 50px;
                    padding: 2px;
                  "
                />
                wifi
              </VCol>
              <VCol cols="6">
                <VIcon
                  size="26"
                  icon="tabler-barbell "
                  class="align-center mr-2"
                  style="
                    border: 1px solid black;
                    border-radius: 50px;
                    padding: 2px;
                  "
                />Gym
              </VCol>

              <VCol cols="6">
                <VIcon
                  size="26"
                  icon="tabler-box-model "
                  class="align-center mr-2"
                  style="
                    border: 1px solid black;
                    border-radius: 50px;
                    padding: 2px;
                  "
                />Private vault
              </VCol>
              <VCol cols="6">
                <VIcon
                  size="26"
                  icon="tabler-bath "
                  class="align-center mr-2"
                  style="
                    border: 1px solid black;
                    border-radius: 50px;
                    padding: 2px;
                  "
                />Bathtub
              </VCol>
              <VCol cols="6">
                <VIcon
                  size="26"
                  icon="tabler-bell-school "
                  class="align-center mr-2"
                  style="
                    border: 1px solid black;
                    border-radius: 50px;
                    padding: 2px;
                  "
                />Room service
              </VCol>
            </VRow>
          </v-card-text>
        </Container>
      </VCol>

      <VCol cols="5">
        <v-divider></v-divider>
        <Container>
          <v-card-item>
            <v-card-title>Map location</v-card-title>
            <v-card-subtitle>
              Address text goes here lorem ipsum sit dolor amed
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.3022140607227!2d-2.2962056435687175!3d53.4630588011795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae72e7e47f69%3A0x6c930e96df4455fe!2zU8OibiB24bqtbiDEkeG7mW5nIE9sZCBUcmFmZm9yZA!5e0!3m2!1svi!2s!4v1711444687554!5m2!1svi!2s"
              width="460"
              height="400"
              style="border-radius: 10px; border: 0"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </v-card-text>
        </Container>
      </VCol>
    </VRow>

    <VRow style="margin: 0px 8%">
      <v-divider></v-divider>
      <Container>
        <VRow>
          <VCol cols="12">
            <v-card-item>
              <v-card-title> Rooms available </v-card-title>
            </v-card-item>
          </VCol>
          <VCol cols="4">
            <v-card class="pa-4" hover>
              <VRow>
                <VCol cols="12">
                  <p class="text-h5">Booking options</p>
                  <AppDateTimePicker
                    label="Check-in and checkout"
                    prepend-inner-icon="tabler-calendar-event"
                    :config="{ mode: 'range' }"
                  />
                </VCol>
                <VCol cols="6">
                  <AppTextField
                    maxlength="3"
                    v-model="itemAdults"
                    max-l
                    label="Number of guests"
                    class="tex-field"
                    @click:append-inner="clickAdultsAdd"
                    @click:prepend-inner="clickAdultsMiuns"
                    persistent-placeholder
                    prepend-inner-icon="tabler-circle-minus"
                    append-inner-icon="tabler-circle-plus"
                  />
                </VCol>
                <VCol cols="6">
                  <AppTextField
                    maxlength="3"
                    v-model="itemKids"
                    style="margin-top: 26px"
                    class="tex-field"
                    @click:append-inner="clickKidsAdd"
                    @click:prepend-inner="clickKidsMiuns"
                    persistent-placeholder
                    prepend-inner-icon="tabler-circle-minus"
                    append-inner-icon="tabler-circle-plus"
                    placeholder="0"
                  />
                </VCol>
              </VRow>
              <div class="d-flex justify-center mt-5">
                <v-btn style="width: 60%"> Book Now </v-btn>
              </div>
            </v-card>
          </VCol>
          <VCol offset="1" cols="7">
            <div v-for="(item, n) in hotelDate" :key="n">
              <v-card class="mb-6 justify-center">
                <div class="d-flex flex-no-wrap justify-center">
                  <!-- {{ item }} -->
                  <v-avatar class="ma-3" rounded="0" size="200">
                    <v-img
                      style="border-radius: 5px"
                      :src="item.oneImage"
                    ></v-img>
                  </v-avatar>

                  <div class="d-flex justify-center align-center">
                    <VRow>
                      <VCol cols="8">
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
                      <VCol cols="3" style="text-align: right">
                        <div class="text-h6 mb-1">
                          ${{ item.price }}/<span>night</span>
                        </div>
                        <div class="text-caption">
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
                        <v-btn style="width: 50%; font-size: 13px">
                          Book Now
                        </v-btn>
                      </VCol>
                    </VRow>
                  </div>
                </div>
              </v-card>
            </div>
          </VCol>
        </VRow>
      </Container>
    </VRow>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import HotelService from "@/services/HotelServices";
const itemAdults = ref<number>(0);
const itemKids = ref<number>(0);
const relax = ref<boolean>(false);
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
const clickAdultsAdd = () => {
  itemAdults.value++;
};

const clickKidsAdd = () => {
  itemKids.value++;
};

const clickAdultsMiuns = () => {
  if (itemAdults.value != 0) {
    itemAdults.value--;
  }
};

const clickKidsMiuns = () => {
  if (itemKids.value != 0) {
    itemKids.value--;
  }
};
const items = [
  {
    src: "https://c4.wallpaperflare.com/wallpaper/282/810/421/ocean-summer-summertime-hotel-wallpaper-preview.jpg",
  },
  {
    src: "https://c4.wallpaperflare.com/wallpaper/624/380/1000/life-resort-hotel-resort-hotel-wallpaper-preview.jpg",
  },
  {
    src: "https://c4.wallpaperflare.com/wallpaper/524/228/970/life-interior-home-room-wallpaper-preview.jpg",
  },
  {
    src: "https://c4.wallpaperflare.com/wallpaper/898/434/438/house-cruise-ship-river-greece-wallpaper-preview.jpg",
  },
  {
    src: "https://c4.wallpaperflare.com/wallpaper/618/17/100/resort-property-estate-swimming-pool-wallpaper-preview.jpg",
  },
  {
    src: "https://c4.wallpaperflare.com/wallpaper/451/186/556/best-hotels-booking-pool-vacation-wallpaper-preview.jpg",
  },
];

const itemMony = [
  {
    id: 1,
    value: "100-500",
  },
  {
    id: 2,
    value: "500-1000",
  },
  {
    id: 3,
    value: "1000-1500",
  },
  {
    id: 4,
    value: "1500-2000",
  },
  {
    id: 5,
    value: "Over 2000",
  },
];
const showListHotel = () => {};

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

.costum-item {
  box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.5);
}

:deep(.v-input--density-compact .v-field__input) {
  // text-align: center;
  row-gap: 4px;
}
</style>
