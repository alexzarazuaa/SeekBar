<template>
  <ion-page class="sb-barsList">
    <section>
      <SBheader />
    </section>
    <section>
      <ion-content>
        <ion-title class="sb-barsList-title">SEEKBAR</ion-title>
        <BarsList />
      </ion-content>
    </section>

    <SBfooter />
  </ion-page>
</template>



<script>
import {

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

.sb-barsList-segments {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 15px;
}

/* SEGMENTS TITLES */

.sb-barsList-segments-titles:first-of-type {
  font-family: "Rubik Mono One", sans-serif;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 0px 200px auto;
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
