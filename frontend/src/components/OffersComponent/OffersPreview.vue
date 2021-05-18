<template>
  <ion-page class="sb-promotions">
    <main>
      <ion-content>
        <ion-card @click="details(promotion.slug)" class="sb-promotions-ionCard">
            <span>{{promotion.description}}</span>


            <!-- <button class="btn-outline-primary" @click="toggleFavorite">
              <i class="ion-heart"></i>&nbsp; &nbsp; &nbsp;
              <span class="counter"> {{ bar.favoritesCount }} </span>
            </button> -->
        </ion-card>
      </ion-content>
    </main>
  </ion-page>
</template>

<script>
import { IonCard, IonContent, IonPage } from "@ionic/vue";
export default {
  name: "SBoffersPreview",
  components: { IonCard, IonContent, IonPage },
  props: ["promotion"],
  methods: {
    details(slug) {
      this.$router.push({ name: "SBbar", params: { slug: slug } });
    },
  },

};
</script>

<style scoped>
/***************************************
*             BAR PAGE                *
***************************************/

/* VARIABLES */

/* :root {
  --align--center: center;
  --margin--auto: auto;
} */

/* BARS IONCARD */

.sb-promotions-ionCard {
  background-color: white;
  margin: 5px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 20vh;
  cursor: pointer;
}
.btn-primary {
  background-color: coral;
  color: red;

}
.btn-outline-primary {
  background-color: transparent;
  color: whitesmokeΰ;
  border: none;
  float: right;
}
.ion-heart {
  font-size: 25px;
  font-weight: bold;
}
</style>