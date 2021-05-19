<template>
  <ion-page class="sb-home">
    <section>
      <SBheader />
    </section>
    <section>
      <ion-content>
        <ion-title class="sb-home-title">SEEKBAR</ion-title>

        <SBoffersList />
      </ion-content>
    </section>

    <SBfooter />
  </ion-page>
</template>

<script>
import { IonTitle, IonContent, IonPage } from "@ionic/vue";
import SBheader from "@/components/Layout/header.vue";
import SBfooter from "@/components/Layout/footer.vue";
import SBoffersList from "@/components/OffersComponent/OffersList";
import { ActionsType } from "@/store/actions.type";
import store from "@/store";
export default {
  components: {
    SBheader,
    SBfooter,
    IonTitle,
    IonContent,
    IonPage,
    SBoffersList,
  },
  name: "SBhome",

  beforeRouteEnter(to, from, next) {
    Promise.all([
      store.dispatch(ActionsType.FETCH_PROMOTIONS, to.params.slug),
    ]).then((data) => {
      next();
    });
  },
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
