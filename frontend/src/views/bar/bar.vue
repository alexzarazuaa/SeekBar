<template>
  <ion-page class="sb--barPage">
    <section>
      <SBheader />
    </section>

    <ion-content>
      <ion-card class="sb--barPage-ionCard">
        <img
          v-bind:src="bar.image"
          class="sb--barPage-ionCard-title"
          :alt="''"
          :content="'bar.description'"
          style="width: 120px; height: 120px"
        />
      </ion-card>

      <article class="sb--barPage-ionCard-buttons">
        <button
          class="sb--barPage-ionCard-buttons-btn-primary"
          v-if="bar.favorited"
          @click="toggleFavorite"
        >
          <i class="ion-heart"></i>&nbsp; &nbsp; &nbsp;
          <span class="counter"> {{ bar.favoritesCount }} </span>
        </button>

        <button
          class="sb--barPage-ionCard-buttons-btn-outline-primary"
          v-else
          @click="toggleFavorite"
        >
          <i class="ion-heart"></i>&nbsp; &nbsp; &nbsp;
          <span class="counter"> {{ bar.favoritesCount }} </span>
        </button>
      </article>
      <article>
        <span class="sb--barPages-tables"></span>
        <span class="sb--barPages-tables"></span>
        <span class="sb--barPages-tables"></span>
        <span class="sb--barPages-tables"></span>
      </article>

      <article>
        <ion-card class="sb--barPage-ionmap">
          <ion-title>jaj</ion-title>
        </ion-card>
      </article>
      <article>
        <ion-label class="sb--barPage-reviews"
          >REVIEWS
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span
        ></ion-label>
      </article>
    </ion-content>
    <SBfooter />
  </ion-page>
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
      }
    );
  },
  computed: {
    ...mapGetters(["bar", "currentUser", "isAuthenticated"]),
  },
  methods: {
    toggleFavorite() {
      if (!this.isAuthenticated) {
        this.$router.push({ name: "SBlogin" });
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
.sb--barPage {
  background: rgba(244, 244, 244, 1);
  height: 100%;
  width: 100%;
}
/* BARS IONCARD */
.sb--barPage-ionCard {
  background-color: white;
  margin: 0px var(--margin--auto);
  display: flex;
  justify-content: var(--align--center);
  align-items: var(--align--center);
  width: 774px;
  height: 223px;
  border: 3px solid #000000;
}

/* FAVORITED BUTTONS */
.sb--barPage-ionCard-buttons {
  display: flex;
  justify-content: flex-end;
  margin-right: 346px;
  margin-top: 6px;
}

/* BAR TABLES */
.sb--barPage-tables {
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
.sb--barPage-ionmap {
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
.sb--barPage-reviews {
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

.sb--barPage-ionCard-buttons-btn-primary {
  background-color: coral;
  color: red;
}
.sb--barPage-ionCard-buttons-btn-outline-primary {
  background-color: transparent;
  color: #fa9950;
}
.ion-heart {
  font-size: 25px;
  font-weight: bold;
}

/***************************************
*         QUERIES RESPONSIVE           *
***************************************/

@media only screen and (max-width: 980px) and (min-width: 821px) {
  /* BARS IONCARD */
  .sb--barPage-ionCard {
    background-color: white;
    margin: 0px var(--margin--auto);
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    width: 634px;
    height: 223px;
    border: 3px solid #000000;
  }
    /* FAVORITED BUTTONS */
  .sb--barPage-ionCard-buttons {
    display: flex;
    justify-content: flex-end;
    margin-right: 100px;
    margin-top: 6px;
  }
}

@media only screen and (max-width: 820px) and (min-width: 621px) {
  /* BARS IONCARD */
  .sb--barPage-ionCard {
    background-color: white;
    margin: 0px var(--margin--auto);
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    width: 634px;
    height: 223px;
    border: 3px solid #000000;
  }
    /* FAVORITED BUTTONS */
  .sb--barPage-ionCard-buttons {
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    margin-top: 6px;
  }
}

@media only screen and (max-width: 620px) and (min-width: 501px) {
  /* BARS IONCARD */
  .sb--barPage-ionCard {
    background-color: white;
    margin: 0px var(--margin--auto);
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    width: 534px;
    height: 223px;
    border: 3px solid #000000;
  }
  /* BAR MAP ASIDE */
  .sb--barPage-ionmap {
    display: none;
  }
  /* FAVORITED BUTTONS */
  .sb--barPage-ionCard-buttons {
    display: flex;
    justify-content: flex-end;
    margin-right: 26px;
    margin-top: 6px;
  }
}

@media only screen and (max-width: 500px) and (min-width: 341px) {
  /* BARS IONCARD */
  .sb--barPage-ionCard {
    background-color: white;
    margin: 0px var(--margin--auto);
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    width: 334px;
    height: 223px;
    border: 3px solid #000000;
  }
  /* BAR MAP ASIDE */
  .sb--barPage-ionmap {
    display: none;
  }
  /* BAR REVIEWS  */
  .sb--barPage-reviews {
    width: 140px;
    height: 30px;
    position: absolute;
    bottom: 40px;
    width: 50%;
    left: 50px;
    font-family: Ruluko;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #000000;
  }
  /* BAR REVIEWS STARS */
  .fa .fa-star {
    bottom: 20px;
    left: 10px;
    width: 80px;
    height: 80px;
    background: #000000;
    border: 1px solid #000000;
  }
  /* FAVORITED BUTTONS */
  .sb--barPage-ionCard-buttons {
    display: flex;
    justify-content: flex-end;
    margin-right: 26px;
    margin-top: 6px;
  }
}

@media only screen and (max-width: 340px) and (min-width: 5px) {
  /* BARS IONCARD */
  .sb--barPage-ionCard {
    background-color: white;
    margin: 0px var(--margin--auto);
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    width: 200px;
    height: 223px;
    border: 3px solid #000000;
  }
  /* BAR MAP ASIDE */
  .sb--barPage-ionmap {
    display: none;
  }
  /* BAR REVIEWS  */
  .sb--barPage-reviews {
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
    bottom: 20px;
    left: 50px;
    width: 80px;
    height: 80px;
    background: #000000;
    border: 1px solid #000000;
  }
}
</style>