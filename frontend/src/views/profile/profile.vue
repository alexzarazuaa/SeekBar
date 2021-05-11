<template>
  <ion-page class="sb-profile-page">
    <section>
      <SBheader />
    </section>
    <main>
      <section>
        <article>
          <h1 class="sb-profile-username">Welcome,{{ profile.username }}</h1>
        </article>
        <article>
          <img class="sb-profile-avatar" v-bind:src="profile.image" />
        </article>
      </section>
      <section>
        <article class="sb--profile--page--btndesactivate">
          <button type="button" class="sb--profile--page--btntype">
            <a :href="'/desactivate'">Desactivar Usuario</a>
          </button>
        </article>
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
    </main>
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

.sb-profile-segments,
.sb--profile--page--btndesactivate {
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
/* SELECT TYPE USER */
.sb--profile--page-typeUser {
  width: 100%;
  text-align: center;
}
.sb--profile--page--btntype {
  background-color: black;
  color: white;
  width: 10%;
  cursor: pointer;
  border-radius: 15px;
  text-align: center;
}
.sb--profile--page--btntype a {
  text-decoration: none;
  color: #fa9950;
}

.sb--profile--page--btntype:hover {
  background-color: black;
  color: white;
}

.sb--profile--page--btntype:active {
  background-color: wheat;
  color: white;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.sb--profile--page--btndesactivate {
  margin-bottom: 15px;
  margin-top: 10px;
}

/***************************************
*         QUERIES RESPONSIVE           *
***************************************/

@media only screen and (max-width: 980px) and (min-width: 821px) {
  .sb--profile--page--btntype {
    background-color: black;
    color: white;
    width: 10%;
    cursor: pointer;
    text-align: center;
  }
}

@media only screen and (max-width: 820px) and (min-width: 621px) {
  .sb--profile--page--btntype {
    background-color: black;
    color: white;
    width: 15%;
    cursor: pointer;
    text-align: center;
  }
}

@media only screen and (max-width: 620px) and (min-width: 501px) {
  .sb--profile--page--btntype {
    background-color: black;
    color: white;
    width: 15%;
    cursor: pointer;
    text-align: center;
  }
}

@media only screen and (max-width: 500px) and (min-width: 341px) {
  .sb--profile--page--btntype {
    background-color: black;
    color: white;
    width: 30%;
    cursor: pointer;
    text-align: center;
  }
  .sb-profile-segments-titles {
    font-family: "Rubik Mono One", sans-serif;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin: 45px auto;
    margin-left: 10px;
  }
}

@media only screen and (max-width: 340px) and (min-width: 5px) {
  .sb--profile--page--btntype {
    background-color: black;
    color: white;
    width: 40%;
    cursor: pointer;
    text-align: center;
  }
    .sb-profile-segments-titles {
    font-family: "Rubik Mono One", sans-serif;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin: 45px auto;
    margin-left: 10px;
  }
}
</style>
