<template>
  <ion-page class="sb-barsList">
    <section>
      <SBheader />
    </section>
    <section>
      <ion-content>
        <ion-title class="sb-barsList-title">SEEKBAR</ion-title>
        <ion-segment class="sb-barsList-segments">
          <ion-segment-button value="recent">
            <ion-label class="sb-barsList-segments-titles">TODOS</ion-label>
          </ion-segment-button>

          <ion-segment-button value="yours" checked>
            <ion-label class="sb-barsList-segments-titles">TUYOS</ion-label>
          </ion-segment-button>
        </ion-segment>
        <BarsList />
      </ion-content>
    </section>

    <SBfooter />
  </ion-page>
</template>



<script>
import {
  IonSegment,
  IonLabel,
  IonSegmentButton,
  IonTitle,
  IonContent,
  IonPage,
} from "@ionic/vue";
import SBheader from "@/components/Layout/header.vue";
import SBfooter from "@/components/Layout/footer.vue";
import BarsList from "@/components/BarsComponent/BarsList";

export default {
  components: {
    SBheader,
    SBfooter,
    IonSegment,
    IonLabel,
    IonSegmentButton,
    IonTitle,
    IonContent,
    IonPage,
    BarsList,
  },
  name: "SBbarsList",
};
</script>

<style scoped>
/***************************************
*             BARS LIST  PAGE          *
***************************************/

/* VARIABLES */

/* :root {
  --align--center: center;
  --margin--auto: auto;
} */

/* PAGE  CONTENT */
.sb-barsList {
  background-color: #f4f4f4;
  height: 100vh;
  width: 100vw;
}
.sb-barsList-title {
  font-family: "Roboto", sans-serif;
  font-size: 68px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-content: center;
}

/* BARS IONCARD */

.sb-barsList-ionCard {
  background-color: white;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60vw;
  height: 20vh;
}



/* SEGMENTS */

.sb-barsList-segments,
.sb--barsList--page--btndesactivate {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: auto;
}

/* SEGMENTS TITLES */

.sb-barsList-segments-titles {
  font-family: "Rubik Mono One", sans-serif;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 45px auto;
  margin-left: 15px;
}
.sb-barsList-segments-titles:checked {
  text-decoration: underline;
}

.sb-barsList-segments-titles:hover {
  text-decoration: underline;
}

.sb-barsList-segments-titles:active {
  text-decoration: underline;
}
</style>
