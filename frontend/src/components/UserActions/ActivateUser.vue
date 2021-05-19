<template>
  <ion-page class="sb-activate-page">
    <section>
      <article>
        <img
          class="sb-activate-page--logo"
          v-bind:src="imageSrc"
          :alt="'logo seekBar'"
          :content="'Logo blanco SeekBAR'"
        />
      </article>
      <article>
        <ion-title class="sb-activate-page--title"
          >¿Quieres Activar Tu Usuario?</ion-title
        >
        <ion-button color="dark" className="sb-activate-page--homebtn">
          <a :href="'/home'">INICIO</a>
        </ion-button>
      </article>
    </section>
    <section>
      <article className="sb-activate-page-form">
        <form @submit.prevent="onSubmit(username, password)">
          <input
            class="inputFieldactivate"
            type="username"
            v-model="username"
            placeholder="username"
            required
          />
          <span
            v-if="errors.some((error) => error.name === 'act_username', value)"
            >{{
              errors.filter((error) => error.name === "act_username")[0].value
            }}</span
          >
          <input
            class="inputFieldactivate"
            type="password"
            v-model="password"
            placeholder="password"
            required
          />
          <span
            v-if="errors.some((error) => error.name === 'act_password', value)"
            >{{
              errors.filter((error) => error.name === "act_password")[0].value
            }}</span
          >
          <button class="sb-activate-page--activatebtn">Activar</button>
        </form>
      </article>
    </section>
  </ion-page>
</template>

<script>
import { IonPage, IonTitle, IonButton } from "@ionic/vue";
import { mapState } from "vuex";
import { ActionsType } from "@/store/actions.type";
import { ActivateFormErrors } from "../../utils/utils";

export default {
  components: { IonPage, IonTitle, IonButton },
  name: "SBactivateUser",
  data() {
    return {
      errors: [],
      username: null,
      password: null,
    };
  },
  methods: {
    onSubmit(username, password) {
      this.errors = [];
      const regexErrors = ActivateFormErrors(this);
      if (regexErrors.length > 0) {
        this.errors = regexErrors;
      } else {
        this.$store
          .dispatch(ActionsType.ACTIVATE, {
            user: { username: this.username, password: this.password },
          })
          .then(() => {
            this.$router.push({ name: "SBlogin" });
          });
      }
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
*             activate PAGE               *
***************************************/

/* VARIABLES */

/* :root {
  --align--center: center;
  --margin--auto: auto;
} */

/* PAGE  CONTENT */
.sb-activate-page {
  background-color: #fa9950;
  height: 100vh;
  width: 100vw;
}

/* LOGO SEEKBAR */
.sb-activate-page--logo {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
}
/* PAGE TITLE */
.sb-activate-page--title {
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

.sb-activate-page--homebtn a {
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

/* activate FORM */
.sb-activate-page-form {
  margin-top: 25px;
}
/*  activate INPUTS */
.inputFieldactivate {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  margin: 5px auto 20px;
  width: 20vw;
}

/* activate BTN */
.sb-activate-page--activatebtn {
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
.sb-activate-page--account {
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
  /*  activate INPUTS */
  .inputFieldactivate {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    margin: 5px auto 20px;
    width: 28vw;
  }

  /* activate BTN */
  .sb-activate-page--activatebtn {
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

  .sb-activate-page--homebtn {
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
  .sb-activate-page--logo {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
  }
}

@media only screen and (max-width: 820px) and (min-width: 621px) {
  /*  activate INPUTS */
  .inputFieldactivate {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    margin: 5px auto 20px;
    width: 35vw;
  }
  /* activate BTN */
  .sb-activate-page--activatebtn {
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

  .sb-activate-page--homebtn {
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
  .sb-activate-page--logo {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
}

@media only screen and (max-width: 620px) and (min-width: 501px) {
  /*  activate INPUTS */
  .inputFieldactivate {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    margin: 5px auto 20px;
    width: 40vw;
  }
  /* activate BTN */
  .sb-activate-page--activatebtn {
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

  .sb-activate-page--homebtn {
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
  .sb-activate-page--logo {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65%;
  }
}

@media only screen and (max-width: 500px) and (min-width: 341px) {
  /*  activate INPUTS */
  .inputFieldactivate {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    margin: 5px auto 20px;
    width: 55vw;
  }
  /* activate BTN */
  .sb-activate-page--activatebtn {
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

  .sb-activate-page--homebtn {
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
  .sb-activate-page--title {
    font-family: "Rubik Mono One", sans-serif;
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    margin: 75px auto;
  }
  /* LOGO SEEKBAR */
  .sb-activate-page--logo {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
  }
}

@media only screen and (max-width: 340px) and (min-width: 5px) {
  /*  activate INPUTS */
  .inputFieldactivate {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    margin: 5px auto 20px;
    width: 90vw;
  }
  /* activate BTN */
  .sb-activate-page--activatebtn {
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
  .sb-activate-page--title {
    font-family: "Rubik Mono One", sans-serif;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin: 75px auto;
  }

  /* LOGO SEEKBAR */
  .sb-activate-page--logo {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
  }
}
</style>
