<template>
  <IonPage class="sb-barsList">
    <section>
      <SBheader />
    </section>

    <IonContent>
      <IonCard class="sb-bar-ionCard">
        <IonTitle>jaj</IonTitle>
      </IonCard>

      <article>
        <span class="sb-bar-tables"></span>
        <span class="sb-bar-tables"></span>
        <span class="sb-bar-tables"></span>
        <span class="sb-bar-tables"></span>
      </article>

      <article>
        <IonLabel class="sb-bar-reviews">REVIEWS</IonLabel>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star "></span>
      </article>
    </IonContent>
    <SBfooter />
  </IonPage>
</template>

<script>
import { IonCard, IonLabel, IonTitle, IonContent, IonPage } from "@ionic/vue";
import SBheader from "@/components/Layout/header.vue";
import SBfooter from "@/components/Layout/footer.vue";

export default {
  components: {
    SBheader,
    SBfooter,
    IonLabel,
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
*             BAR  PAGE                *
***************************************/

/* VARIABLES */

:root {
  --align--center: center;
  --margin--auto: auto;
}

/* PAGE  CONTENT */
.sb-bar {
  background: rgba(244, 244, 244, 1);
  height: 100%;
  width: 100%;
}

/* BARS IONCARD */

.sb-bar-ionCard {
  background-color: white;
  margin: 0px var(--margin--auto);
  display: flex;
  justify-content: var(--align--center);
  align-items: var(--align--center);
  width: 774px;
  height: 223px;
  border: 3px solid #000000;
}

/* BAR TABLES */

.sb-bar-tables {
  position: absolute;
  width: 147px;
  height: 133px;
  left: 227px;
  top: 388px;
  background: #ffffff;
  border: 3px solid #000000;
  border-radius: 50%;
  box-sizing: border-box;
}

/* BAR MAP ASIDE */
/* .sb-bar-asideMap {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  background-color: black;
  width: 374px;
  height: 213px;
} */

/* BAR REVIEWS  */
.sb-bar-reviews {
  width: 140px;
  height: 30px;

  font-family: Ruluko;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
}

/* BAR REVIEWS STARS */
.fa .fa-star {
  margin-left: 159px;
  width: 80px;
  height: 80px;
  background: #000000;
  border: 1px solid #000000;
}
.checked {
  color: #fa9950;
}
</style>
