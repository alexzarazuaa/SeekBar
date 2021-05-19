<template>
  <ion-page class="sb-promotions">
    <section>
      <ion-content>
        <ion-card
          @click="details(promotion.bar.slug)"
          class="sb-promotions-ionCard"
        >
          <span class="sb-promotions-ionCard--description">{{ promotion.description }}</span>
          <img
            v-bind:src="promotion.bar.image"
            class="promotion_bar_description"
            :alt="''"
            :content="'promotion.bar.title'"
            style="width: 120px; height: 120px"
          />
        </ion-card>
      </ion-content>
    </section>
  </ion-page>
</template>

<script>
import { IonCard, IonContent, IonPage } from "@ionic/vue";
export default {
  name: "SBoffersPreview",
  components: { IonCard, IonContent, IonPage },
  props: ["promotion","bar"],
  methods: {
    details(slug) {
      this.$router.push({ name: "SBbar", params: { slug: slug } });
    },
  },
};
</script>

<style scoped>
/***************************************
*             PROMOTIONS PAGE          *
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
  position: relative;
  text-align: center;
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

.sb-promotions-ionCard--description{
  position: absolute;
  bottom: 0;

font-family: Rubik One;
font-style: italic;
font-weight: bolder;
font-size: 22px;
text-align: center;
color: #000000;

}
</style>