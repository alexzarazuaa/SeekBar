<template>


    <ion-page class="sb-bar">
    <main>
      <ion-content>
        <ion-card @click="details(bar.slug)" class="sb-bar-ionCard">
            <img v-bind:src="bar.image" class="bar-title" :alt="''"  :content="'bar.description'"/>
        </ion-card>

      </ion-content>
    </main>


  </ion-page>
</template>

<script>

import { IonCard,  IonContent, IonPage } from "@ionic/vue";
export default {
  name: "SBbarsPreview",
components: { IonCard,  IonContent, IonPage },
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

</style>