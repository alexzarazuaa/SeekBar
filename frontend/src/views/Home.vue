<template>
  <IonPage class="sb-home">
    <section>
      <SBheader />
    </section>
    <main>
      <IonContent>
        <IonTitle class="sb-home-title">SEEKBAR</IonTitle>

        <BarsList />
      </IonContent>
    </main>

    <SBfooter />
  </IonPage>
</template>

<script>
import {  IonTitle, IonContent, IonPage } from "@ionic/vue";
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
  name: "SBhome",
};
</script>

<style scoped>
/***************************************
*             HOME PAGE                *
***************************************/

/* VARIABLES */

/* :root {
  --align--center: center;
  --margin--auto: auto;
} */

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
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -10px;
}

</style>
