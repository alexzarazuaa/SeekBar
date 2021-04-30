<template>
  <IonPage class="sb-profile-page">
    <section>
      <SBheader />
    </section>

    <section>
      <article>
        <h1 class="sb-profile-username">WELCOME,{{profile.username}}</h1>
      </article>
      <article class="sb-profile-avatar"></article>
    </section>
    <section>
      
      <IonSegment class="sb-profile-segments">
        <IonSegmentButton value="recent">
          <IonLabel class="sb-profile-segments-titles"
            >UPDATE</IonLabel
          >
        </IonSegmentButton>

        <IonSegmentButton value="yours" checked>
          <IonLabel class="sb-profile-segments-titles"
            >FAVOURITES</IonLabel
          >
        </IonSegmentButton>

        <IonSegmentButton value="favorited">
          <IonLabel class="sb-profile-segments-titles"
            >BOOKINGS</IonLabel
          >
        </IonSegmentButton>
      </IonSegment>
      <IonCard class="sb-profile-cards">
        <h1>PROFILE</h1>
      </IonCard>
      <SBfooter />
    </section>
  </IonPage>
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
    store.dispatch(ActionsType.FETCH_PROFILE, to.params.username);
    next();
  },
  computed: {
    ...mapGetters(["profile"]),
  },
  watch: {
    profile: {
      deep: true,
      handler(value) {
        console.log("watch profile", value);
      },
    },
  },
};
</script>

<style scoped>
/***************************************
*             PROFILE  PAGE            *
***************************************/

/* VARIABLES */

/* :root {
  --align--center: center;
  --margin--auto: auto;
} */

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
}
</style>
