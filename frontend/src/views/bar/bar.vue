<template>
  <IonPage class="sb-barsList">
    <section>
      <SBheader />
    </section>

    <IonContent>
      <IonCard class="sb-bar-ionCard">
        <IonTitle>{{bar.name}}</IonTitle>
      </IonCard>

      <article>
        <span class="sb-bar-tables"></span>
        <span class="sb-bar-tables"></span>
        <span class="sb-bar-tables"></span>
        <span class="sb-bar-tables"></span>
      </article>

      <article>
        <IonCard class="sb-bar-ionmap">
          <IonTitle>jaj</IonTitle>
        </IonCard>
      </article>
      <article>
        <IonLabel class="sb-bar-reviews">REVIEWS 
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star "></span>
          <span class="fa fa-star "></span>
          <span class="fa fa-star "></span>
          <span class="fa fa-star "></span
        ></IonLabel>
      </article>
    </IonContent>
    <SBfooter />
  </IonPage>
</template>

<script>
import { IonCard, IonLabel, IonTitle, IonContent, IonPage } from "@ionic/vue";
import SBheader from "@/components/Layout/header.vue";
import SBfooter from "@/components/Layout/footer.vue";
import store from "@/store";
import { mapGetters } from "vuex";
import { ActionsType } from "@/store/actions.type";
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
  name: "SBbar",
   props: {
    slug: {
      type: String,
      required: true,
    },
  },
  beforeRouteEnter(to, from, next) {
    Promise.all([store.dispatch(ActionsType.FETCH_BAR, to.params.slug)]).then(
      (data) => {
        next();
        console.log(data);
      }
    );
  },
  computed: {
    ...mapGetters(["bar", "currentUser", "isAuthenticated"]),
  },
  methods: {
    toggleFavorite() {
      if (!this.isAuthenticated) {
        this.$router.push({ name: "Login" });
        return;
      }
      const action = this.bar.favorited
        ? ActionsType.FAVORITE_REMOVE
        : ActionsType.FAVORITE_ADD;
      this.$store.dispatch(action, this.bar.slug);
    },
    Reserva() {
      if (!this.isAuthenticated) {
        this.$router.push({ name: "Login" });
        return;
      }
      const action = this.bar.book
        ? ActionsType.BOOK_REMOVE
        : ActionsType.BOOK_ADD;
      this.$store.dispatch(action, this.bar.slug);
    },
    profile(username) {
      this.$router.push({ name: "Profile", params: { username: username } });
    },
  },
  watch: {
    bar: {
      deep: true,
      handler(value) {
        console.log("watch a bar", value);
      },
    },
  },
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
  margin-top: -70px;
  width: 147px;
  height: 133px;
  left: 220px;
  top: 388px;
  background: #ffffff;
  border: 3px solid #000000;
  border-radius: 50%;
  box-sizing: border-box;
}
/* BAR MAP ASIDE */
.sb-bar-ionmap {
  position: absolute;
  display: flex;
  justify-content: var(--align--center);
  align-items: var(--align--center);
  right: 50px;
  top: 350px;
  background-color: black;
  width: 210px;
  height: 200px;
}
/* BAR REVIEWS  */
.sb-bar-reviews {
  width: 140px;
  height: 30px;
  position: absolute;
  bottom: 40px;
  width: 50%;
  left: 50px;
  font-family: Ruluko;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
}
/* BAR REVIEWS STARS */
.fa .fa-star {
  bottom: 40px;
  left: 50px;
  width: 80px;
  height: 80px;
  background: #000000;
  border: 1px solid #000000;
}
.checked {
  color: #fa9950;
}

.btn-primary {
  background-color: coral;
  color: red;
}
.btn-outline-primary {
  background-color: green;
  color: whitesmokeΰ;
}
.ion-heart {
  font-size: 25px;
  font-weight: bold;
}
</style>