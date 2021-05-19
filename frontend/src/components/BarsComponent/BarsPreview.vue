<template>
  <ion-page class="sb-bar">
    <section>
      <ion-content>
        <ion-card @click="details(bar.slug)" class="sb-bar-ionCard">
          <img
            v-bind:src="bar.image"
            class="bar-title"
            :alt="''"
            :content="'bar.description'"
            style="  width: 120px; height: 120px;"
          />


            <!-- <button class="btn-outline-primary" @click="toggleFavorite">
              <i class="ion-heart"></i>&nbsp; &nbsp; &nbsp;
              <span class="counter"> {{ bar.favoritesCount }} </span>
            </button> -->
        </ion-card>
      </ion-content>
    </section>
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
*          BAR PREVIEW COMPONENT       *
***************************************/

/* VARIABLES */

:root {
  --align--center: center;
  --margin--auto: auto;
} 

/* BARS IONCARD */

.sb-bar-ionCard {
  background-color: white;
  margin: 5px var(--margin--auto);
  display: flex;
  justify-content: var(--align--center);
  align-items: var(--align--center);
  width: 40vw;
  height: 20vh;
  cursor: pointer;
}
/* BUTTONS FAVOURITE */
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

/* FAVORITE ICON */
.ion-heart {
  font-size: 25px;
  font-weight: bold;
}
</style>