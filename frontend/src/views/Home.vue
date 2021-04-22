<template>
  <IonPage class="sb-home">
    <section>
      <SBheader />
    </section>

    <IonContent>
      <IonTitle class="sb-home-title">SEEKBAR</IonTitle>

      <IonCard class="sb-home-ionCard">
        <h1>jaj</h1>
      </IonCard>

      <IonCard class="sb-home-ionCard">
        <h1>jaj</h1>
      </IonCard>

      <IonCard class="sb-home-ionCard">
        <h1>jaj</h1>
      </IonCard>
    </IonContent>
    <SBfooter />
  </IonPage>
</template>

<script>
import { IonCard, IonTitle, IonContent, IonPage } from "@ionic/vue";
import SBheader from "@/components/Layout/header.vue";
import SBfooter from "@/components/Layout/footer.vue";
// import BarsList from "@/components/BarsListComponent/BarsList";
export default {
  components: { SBheader, SBfooter, IonCard, IonTitle, IonContent, IonPage },
  name: "SBhome",
};
</script>

<style>
/***************************************
*             HOME PAGE                *
***************************************/

/* VARIABLES */

:root {
  --align--center: center;
  --margin--auto: auto;
}

/* PAGE  CONTENT */
.sb-home {
  background-color: #f4f4f4;
  height: 100vh;
  width: 100vw;
}
/*  HOME TITLE */

.sb-home-title {
  font-family: "Roboto", sans-serif;
  font-size: 48px;
  font-weight: bold;
  text-align: var(--align--center);
  display: flex;
  justify-content: var(--align--center);
  align-items: var(--align--center);
  margin-top: -10px;

}

/* HOME IONCARD */

.sb-home-ionCard {
  background-color: white;
  margin: 13px var(--margin--auto);
  display: flex;
  justify-content: var(--align--center);
  align-items: var(--align--center);
  width: 60vw;
  height: 20vh;
}
</style>
