<template>
  <ion-page class="sb-desactivate-page">
    <section>
      <article>
        <img
          class="sb-desactivate-page--logo"
          v-bind:src="imageSrc"
          :alt="'logo seekBar'"
          :content="'Logo blanco SeekBar'"
        />
      </article>
      <article>
        <ion-title class="sb-desactivate-page--title">¿Quieres Desactivar Tu Usuario?</ion-title>
        <ion-button color="dark" className="sb-desactivate-page--homebtn">
          <a :href="'/home'">HOME</a>
        </ion-button>
      </article>
    </section>
    <main>
      <article className="sb-desactivate-page-form">
        <form @submit.prevent="onSubmit(username, password)">
          <input
            class="inputFielddesactivate"
            type="username"
            v-model="username"
            placeholder="username"
            required
          />


          <input
            class="inputFielddesactivate"
            type="password"
            v-model="password"
            placeholder="password"
            required
          />

          <button class="sb-desactivate-page--desactivatebtn">Desactivar</button>

        </form>
      </article>
    </main>
  </ion-page>
</template>

<script>
import { IonPage, IonTitle, IonButton } from "@ionic/vue";
import { mapState } from "vuex";
import { ActionsType } from "@/store/actions.type";

export default {
  components: { IonPage, IonTitle, IonButton },
  name: "SBdesactivateUser",
  data() {
    return {

      username: null,
      password: null,
    };
  },
  methods: {
    onSubmit(username, password) {

        this.$store
          .dispatch(ActionsType.DESACTIVATE, { username, password })
          .then(() => this.$router.push({ name: "SBhome" }))
      
    },
  },
  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),
    imageSrc: function () {
      return `https://raw.githubusercontent.com/alexzarazuaa/SeekBar/main/frontend/src/assets/img/SEEK_BAR_BLANCO.png`;
    },
  },
};
</script>

<style scoped>
/***************************************
*             desactivate PAGE         *
***************************************/

/* VARIABLES */

/* :root {
  --align--center: center;
  --margin--auto: auto;
} */

/* PAGE  CONTENT */
.sb-desactivate-page {
  background-color: #fa9950;
  height: 100vh;
  width: 100vw;
}

/* LOGO SEEKBAR */
.sb-desactivate-page--logo {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
}
/* PAGE TITLE */
.sb-desactivate-page--title {
  font-family: Rubik One;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  color: #000000;
  display: flex;
  justify-content: center;
  margin: 75px auto;
}

/* HOME BTN */

.sb-desactivate-page--homebtn a {
  background-color: black;
  color: white;
  width: 10vw;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  margin: auto;
}

/* desactivate FORM */
.sb-desactivate-page-form {
  margin-top: 25px;
}
/*  desactivate INPUTS */
.inputFielddesactivate {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  margin: 5px auto 20px;
  width: 20vw;
}

/* desactivate BTN */
.sb-desactivate-page--desactivatebtn {
  background-color: black;
  color: white;
  width: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  margin: auto;
  margin-top: 15px;
}
.sb-desactivate-page--account {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 25px auto;
  font-size: 20px;
  font-weight: 500;
}

/***************************************
*         QUERIES RESPONSIVE           *
***************************************/

@media only screen and (max-width: 980px) and (min-width: 821px) {
  /*  desactivate INPUTS */
  .inputFielddesactivate {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    margin: 5px auto 20px;
    width: 28vw;
  }

  /* desactivate BTN */
  .sb-desactivate-page--desactivatebtn {
    background-color: black;
    color: white;
    width: 35vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    margin: auto;
    margin-top: 15px;
  }
  /* HOME BTN */

  .sb-desactivate-page--homebtn {
    background-color: black;
    color: white;
    width: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    margin: auto;
    margin-top: 5px;
  }
  /* LOGO SEEKBAR */
  .sb-desactivate-page--logo {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
  }
}

@media only screen and (max-width: 820px) and (min-width: 621px) {
  /*  desactivate INPUTS */
  .inputFielddesactivate {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    margin: 5px auto 20px;
    width: 35vw;
  }
  /* desactivate BTN */
  .sb-desactivate-page--desactivatebtn {
    background-color: black;
    color: white;
    width: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    margin: auto;
    margin-top: 15px;
  }

  /* HOME BTN */

  .sb-desactivate-page--homebtn {
    background-color: black;
    color: white;
    width: 25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    margin: auto;
    margin-top: 5px;
  }

  /* LOGO SEEKBAR */
  .sb-desactivate-page--logo {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
}

@media only screen and (max-width: 620px) and (min-width: 501px) {
  /*  desactivate INPUTS */
  .inputFielddesactivate {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    margin: 5px auto 20px;
    width: 40vw;
  }
  /* desactivate BTN */
  .sb-desactivate-page--desactivatebtn {
    background-color: black;
    color: white;
    width: 45vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    margin: auto;
    margin-top: 15px;
  }
  /* HOME BTN */

  .sb-desactivate-page--homebtn {
    background-color: black;
    color: white;
    width: 15vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    margin: auto;
    margin-top: 5px;
  }
  /* LOGO SEEKBAR */
  .sb-desactivate-page--logo {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65%;
  }
}

@media only screen and (max-width: 500px) and (min-width: 341px) {
  /*  desactivate INPUTS */
  .inputFielddesactivate {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    margin: 5px auto 20px;
    width: 55vw;
  }
  /* desactivate BTN */
  .sb-desactivate-page--desactivatebtn {
    background-color: black;
    color: white;
    width: 65vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    margin: auto;
    margin-top: 15px;
  }
  /* HOME BTN */

  .sb-desactivate-page--homebtn {
    background-color: black;
    color: white;
    width: 25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    margin: auto;
    margin-top: 5px;
  }
  /* PAGE TITLE */
  .sb-desactivate-page--title {
    font-family: "Rubik Mono One", sans-serif;
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    margin: 75px auto;
  }
  /* LOGO SEEKBAR */
  .sb-desactivate-page--logo {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
  }
}

@media only screen and (max-width: 340px) and (min-width: 5px) {
  /*  desactivate INPUTS */
  .inputFielddesactivate {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    margin: 5px auto 20px;
    width: 90vw;
  }
  /* desactivate BTN */
  .sb-desactivate-page--desactivatebtn {
    background-color: black;
    color: white;
    width: 95vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    margin: auto;
    margin-top: 15px;
  }

  /* PAGE TITLE */
  .sb-desactivate-page--title {
    font-family: "Rubik Mono One", sans-serif;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin: 75px auto;
  }

  /* LOGO SEEKBAR */
  .sb-desactivate-page--logo {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
  }
}
</style>
