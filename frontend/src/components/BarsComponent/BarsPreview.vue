<template>
  <ion-page class="sb-bar">
    <main>
      <ion-content>
        <ion-card @click="details(bar.slug)" class="sb-bar-ionCard">
          <img
            v-bind:src="bar.image"
            class="bar-title"
            :alt="''"
            :content="'bar.description'"
          />


            <button class="btn-outline-primary" @click="toggleFavorite">
              <i class="ion-heart"></i>&nbsp; &nbsp; &nbsp;
              <span class="counter"> {{ bar.favoritesCount }} </span>
            </button>
        </ion-card>
      </ion-content>
    </main>
  </ion-page>
</template>

<script>
import { IonCard, IonContent, IonPage } from "@ionic/vue";
export default {
  name: "SBbarsPreview",
  components: { IonCard, IonContent, IonPage },
  props: ["bar"],
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

.sb-bar-ionCard {
  background-color: white;
  margin: 5px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
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