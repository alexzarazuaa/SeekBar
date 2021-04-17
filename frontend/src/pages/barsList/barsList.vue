<template>
  <IonPage class="sb-barsList">
    <section>
      <SBheader />
    </section>

    <IonContent>
      <IonTitle class="sb-barsList-title">SEEKBAR</IonTitle>

      <IonSegment class="sb-barsList-segments">
        <IonSegmentButton value="recent">
          <IonLabel class="sb-barsList-segments-titles">
            ALLS
          </IonLabel>
        </IonSegmentButton>

        <IonSegmentButton value="yours" checked>
          <IonLabel class="sb-barsList-segments-titles">
            YOURS
          </IonLabel>
        </IonSegmentButton>
      </IonSegment>

      <IonCard class="sb-barsList-ionCard">
        <h1>jaj</h1>
      </IonCard>

      <IonCard class="sb-barsList-ionCard">
        <h1>jaj</h1>
      </IonCard>
    </IonContent>
    <SBfooter />
  </IonPage>
</template>

<script>
import {
  IonCard,
  IonSegment,
  IonLabel,
  IonSegmentButton,
  IonTitle,
  IonContent,
  IonPage,
} from "@ionic/vue";
import SBheader from "@/components/Layout/header.vue";
import SBfooter from "@/components/Layout/footer.vue";

export default {
  components: {
    SBheader,
    SBfooter,
    IonLabel,
    IonSegmentButton,
    IonSegment,
    IonCard,
    IonTitle,
    IonContent,
    IonPage,
  },
  name: "SBbarsList",
};
</script>

<style>
/***************************************
*             BARS LIST  PAGE          *
***************************************/

/* VARIABLES */

:root {
  --align--center: center;
  --margin--auto: auto;
}

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
  justify-content: var(--align--center);
  align-content: var(--align--center);
}

/* BARS IONCARD */

.sb-barsList-ionCard {
  background-color: white;
  margin: 15px var(--margin--auto);
  display: flex;
  justify-content: var(--align--center);
  align-items: var(--align--center);
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
  text-align: var(--align--center);
  margin: 0px 200px var(--margin--auto);
}
.sb-barsList-segments-titles:checked {
  text-decoration: underline;
}
</style>
