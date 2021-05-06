<template>
  <ion-page class="sb-profile-page">
    <section>
      <SBheader />
    </section>

    <section>
      <article>
        <h1 class="sb-profile-username">Welcome,{{ profile.username }}</h1>
        <!-- -->

        <label class="switch">
          <input type="checkbox" @click="toggleActivate"  checked/>
          <span class="slider round"></span>
        </label>
      </article>
      <article v-bind:src="profile.image" class="sb-profile-avatar"></article>
    </section>
    <section>
      <ion-segment class="sb-profile-segments">
        <ion-segment-button value="recent">
          <ion-label class="sb-profile-segments-titles">UPDATE</ion-label>
        </ion-segment-button>

        <ion-segment-button value="yours" checked>
          <ion-label class="sb-profile-segments-titles">FAVOURITES</ion-label>
        </ion-segment-button>

        <ion-segment-button value="favorited">
          <ion-label class="sb-profile-segments-titles">BOOKINGS</ion-label>
        </ion-segment-button>
      </ion-segment>
      <ion-card class="sb-profile-cards">
        <h1>PROFILE</h1>
      </ion-card>

      <SBfooter />
    </section>
  </ion-page>
</template>

<script>
import {
  IonCard,
  IonSegment,
  IonLabel,
  IonSegmentButton,
  IonPage,
} from "@ionic/vue";
import SBheader from "@/components/Layout/header.vue";
import SBfooter from "@/components/Layout/footer.vue";
import store from "@/store";
import { mapGetters } from "vuex";
//import BarsList from '@/components/BarsListComponent/BarsList'
import { ActionsType } from "@/store/actions.type";
import ApiService, { RegisterService } from "@/common/api.service";

export default {
  components: {
    SBheader,
    SBfooter,
    IonLabel,
    IonSegmentButton,
    IonSegment,
    IonCard,
    IonPage,
  },
  name: "SBprofile",
  // components:{BarsList},
  mounted() {
    this.$store.dispatch(ActionsType.FETCH_PROFILE, this.$route.params);
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch(ActionsType.FETCH_PROFILE, to.params);
    next();
  },
  computed: {
    ...mapGetters(["profile"]),
  },
  methods: {
    toggleActivate() {
      ApiService.desactivateUser();
    },
  },
  watch: {
    deep: true,
    handler(value) {
      console.log("watch profile", value);
    },
  },
};
</script>

<style scoped>
/***************************************
*             PROFILE  PAGE            *
***************************************/

/* VARIABLES */

:root {
  --color-green: #00a878;
  --color-red: #fe5e41;
  --color-button: #fdffff;
  --color-black: #000;
}

/* PROFILE PAGE */
.sb-profile-page {
  background-color: #f4f4f4;
  width: 100%;
  height: 100%;
}

/*  PROFILE USERNAME */

.sb-profile-username {
  font-family: "Rubik Mono One", sans-serif;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin: 20px auto;
}

/* PROFILE AVATAR */

.sb-profile-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 190px;
  height: 187px;
  margin-top: -20px;
  background: #ffffff;
  border: 3px solid #000000;
  border-radius: 50%;
  box-sizing: border-box;
}

/*  PROFILE CARDS */

.sb-profile-cards {
  background-color: white;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 20vh;
}

/* SEGMENTS */

.sb-profile-segments {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: auto;
}

/* SEGMENTS TITLES */

.sb-profile-segments-titles {
  font-family: "Rubik Mono One", sans-serif;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 45px auto;
  margin-left: 15px;
}

.switch {
  position: relative;
  display: flex;
  float: right;
  right: 150px;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
