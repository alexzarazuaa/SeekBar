<template>


    <IonPage class="sb-bar">

    <main>
      <IonContent>
        <IonCard @click="details(bar.slug)" class="sb-bar-ionCard">
            <img v-bind:src="bar.image" class="bar-title"/>
        </IonCard>

      </IonContent>
    </main>


  </IonPage>
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

/*  BAR TITLE */

.sb-bar-title {
  font-family: "Roboto", sans-serif;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -10px;

}

/* BARS IONCARD */

.sb-bar-ionCard {
  background-color: white;
  margin: 15px auto;
 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 20vh;
    cursor: pointer;
}

</style>