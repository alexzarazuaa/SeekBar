<template>
  <IonPage class="sb-register-page">
    <section>
      <article>
        <IonImg class="sb-register-page--logo" src="{Logo}"></IonImg>
      </article>
      <article>
        <IonTitle class="sb-register-page--title">
          {" "} {t("REGISTER.TITLE")}
        </IonTitle>
        <IonButton
          color="dark"
          className="sb-register-page--homebtn"
          href="/sb/home"
        >
          {t("REGISTER.HOME")}
        </IonButton>
      </article>
    </section>
    <section>
      <article class="sb-register-page-form">
        <form @submit.prevent="onSubmit">
          <input
            class="inputFieldRegister"
            type="text"
            v-model="name"
            placeholder="Entire Name"
            required
          />
          <input
            class="inputFieldRegister"
            type="text"
            v-model="username"
            placeholder="Username"
            required
          />
          <input
            class="inputFieldRegister"
            type="email"
            v-model="email"
            placeholder="Email"
            required
          />

          <input
            class="inputFieldRegister"
            type="password"
            v-model="password"
            placeholder="password"
            required
          />
          <button class="sb-register-page--registerbtn">Sign Up</button>
          <IonLabel class="sb-register-page--account">
            {t("REGISTER.HAVE_ACCOUNT")}
            <IonLabel class="sb-register-page--signin">
              {t("REGISTER.SIGNIN")}
            </IonLabel>
          </IonLabel>
        </form>
      </article>
    </section>
  </IonPage>
</template>

<script>
import { mapState } from "vuex";
import { ActionsType } from "@/store/actions.type";
import { IonPage, IonImg, IonTitle, IonButton } from "@ionic/vue";
export default {
  components: { IonPage, IonImg, IonTitle, IonButton },
  name: "SBregister",
  data() {
    return {
      username: "",
      name: "",
      email: "",
      password: "",
    };
  },

  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),
  },
  methods: {
    onSubmit() {

      this.$store
        .dispatch(ActionsType.REGISTER, {
          username: this.username,
          email: this.email,
          password: this.password,
          name: this.name,
        })
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "SBhome" });
        })
        .catch((response) => {
          response.data.errors.email
            ? alert(response.data.errors.email)
            : alert(response.data.errors.username);
        });
    },
  },
};
</script>

<style>
/***************************************
*             REGISTER PAGE            *
***************************************/

/* VARIABLES */

:root {
  --align--center: center;
  --margin--auto: auto;
}

/* PAGE  CONTENT */
.sb-register-page {
  background-color: #fa9950;
  height: 100vh;
  width: 100vw;
}

/* LOGO SEEKBAR */
.sb-register-page--logo {
  margin: var(--margin--auto);
  display: flex;
  justify-content: var(--align--center);
  align-items: var(--align--center);
  width: 35%;
}
/* PAGE TITLE */
.sb-register-page--title {
  font-family: "Rubik Mono One", sans-serif;
  font-size: 40px;
  font-weight: bold;
  text-align: var(--align--center);
  margin: 45px var(--margin--auto);
}

/* HOME BTN */

.sb-register-page--homebtn {
  background-color: black;
  color: white;
  width: 10vw;
  display: flex;
  justify-content: var(--align--center);
  align-items: var(--align--center);
  cursor: pointer;
  text-align: var(--align--center);
  margin: var(--margin--auto);
  margin-top: 5px;
}

/* REGISTER FORM */
.sb-register-page-form {
  margin-top: 55px;
}

/*  REGISTER INPUTS */
.inputFieldRegister {
  background-color: white;
  display: flex;
  justify-content: var(--align--center);
  align-items: var(--align--center);
  text-align: var(--align--center);
  cursor: pointer;
  margin: 5px var(--margin--auto) 20px;
  width: 20vw;
}

/* REGISTER BTN */
.sb-register-page--registerbtn {
  background-color: black;
  color: white;
  width: 20vw;
  display: flex;
  justify-content: var(--align--center);
  align-items: var(--align--center);
  cursor: pointer;
  text-align: var(--align--center);
  margin: var(--margin--auto);
  margin-top: 15px;
}

/*  ALREADY HAVE AN ACCOUNT */
.sb-register-page--account {
  display: flex;
  justify-content: var(--align--center);
  align-items: var(--align--center);
  text-align: var(--align--center);
  margin: 25px var(--margin--auto);
  font-size: 20px;
  font-weight: 500;
}

/* SIGN IN LABEL LINK*/

.sb-register-page--signin {
  color: white;
  margin-left: 5px;
  font-size: 20px;
  font-weight: bold;
}

/***************************************
*         QUERIES RESPONSIVE           *
***************************************/

@media only screen and (max-width: 980px) and (min-width: 821px) {
  /*  REGISTER INPUTS */
  .inputFieldRegister {
    background-color: white;
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    text-align: var(--align--center);
    cursor: pointer;
    margin: 5px var(--margin--auto) 20px;
    width: 28vw;
  }

  /* REGISTER BTN */
  .sb-register-page--registerbtn {
    background-color: black;
    color: white;
    width: 35vw;
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    cursor: pointer;
    text-align: var(--align--center);
    margin: var(--margin--auto);
    margin-top: 15px;
  }
  /* HOME BTN */

  .sb-register-page--homebtn {
    background-color: black;
    color: white;
    width: 10vw;
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    cursor: pointer;
    text-align: var(--align--center);
    margin: var(--margin--auto);
    margin-top: 5px;
  }

  /* LOGO SEEKBAR */
  .sb-register-page--logo {
    margin: var(--margin--auto);
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    width: 45%;
  }
}

@media only screen and (max-width: 820px) and (min-width: 621px) {
  /*  REGISTER INPUTS */
  .inputFieldRegister {
    background-color: white;
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    text-align: var(--align--center);
    cursor: pointer;
    margin: 5px var(--margin--auto) 20px;
    width: 35vw;
  }
  /* REGISTER BTN */
  .sb-register-page--registerbtn {
    background-color: black;
    color: white;
    width: 40vw;
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    cursor: pointer;
    text-align: var(--align--center);
    margin: var(--margin--auto);
    margin-top: 15px;
  }

  /* HOME BTN */

  .sb-register-page--homebtn {
    background-color: black;
    color: white;
    width: 25vw;
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    cursor: pointer;
    text-align: var(--align--center);
    margin: var(--margin--auto);
    margin-top: 5px;
  }
  /* LOGO SEEKBAR */
  .sb-register-page--logo {
    margin: var(--margin--auto);
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    width: 50%;
  }
}

@media only screen and (max-width: 620px) and (min-width: 501px) {
  /*  REGISTER INPUTS */
  .inputFieldRegister {
    background-color: white;
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    text-align: var(--align--center);
    cursor: pointer;
    margin: 5px var(--margin--auto) 20px;
    width: 40vw;
  }
  /* REGISTER BTN */
  .sb-register-page--registerbtn {
    background-color: black;
    color: white;
    width: 45vw;
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    cursor: pointer;
    text-align: var(--align--center);
    margin: var(--margin--auto);
    margin-top: 15px;
  }
  /* HOME BTN */

  .sb-register-page--homebtn {
    background-color: black;
    color: white;
    width: 15vw;
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    cursor: pointer;
    text-align: var(--align--center);
    margin: var(--margin--auto);
    margin-top: 5px;
  }
  /* LOGO SEEKBAR */
  .sb-register-page--logo {
    margin: var(--margin--auto);
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    width: 65%;
  }
}

@media only screen and (max-width: 500px) and (min-width: 341px) {
  /*  REGISTER INPUTS */
  .inputFieldRegister {
    background-color: white;
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    text-align: var(--align--center);
    cursor: pointer;
    margin: 5px var(--margin--auto) 20px;
    width: 55vw;
  }
  /* REGISTER BTN */
  .sb-register-page--registerbtn {
    background-color: black;
    color: white;
    width: 65vw;
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    cursor: pointer;
    text-align: var(--align--center);
    margin: var(--margin--auto);
    margin-top: 15px;
  }
  /* HOME BTN */

  .sb-register-page--homebtn {
    background-color: black;
    color: white;
    width: 25vw;
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    cursor: pointer;
    text-align: var(--align--center);
    margin: var(--margin--auto);
    margin-top: 5px;
  }
  /* PAGE TITLE */
  .sb-register-page--title {
    font-family: "Rubik Mono One", sans-serif;
    font-size: 35px;
    font-weight: bold;
    text-align: var(--align--center);
    margin: 45px var(--margin--auto);
  }
  /* LOGO SEEKBAR */
  .sb-register-page--logo {
    margin: var(--margin--auto);
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    width: 70%;
  }
}

@media only screen and (max-width: 340px) and (min-width: 5px) {
  /*  REGISTER INPUTS */
  .inputFieldRegister {
    background-color: white;
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    text-align: var(--align--center);
    cursor: pointer;
    margin: 5px var(--margin--auto) 20px;
    width: 90vw;
  }
  /* REGISTER BTN */
  .sb-register-page--registerbtn {
    background-color: black;
    color: white;
    width: 95vw;
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    cursor: pointer;
    text-align: var(--align--center);
    margin: var(--margin--auto);
    margin-top: 15px;
  }
  /* HOME BTN */

  .sb-register-page--homebtn {
    background-color: black;
    color: white;
    width: 35vw;
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    cursor: pointer;
    text-align: var(--align--center);
    margin: var(--margin--auto);
    margin-top: 5px;
  }
  /* PAGE TITLE */
  .sb-register-page--title {
    font-family: "Rubik Mono One", sans-serif;
    font-size: 30px;
    font-weight: bold;
    text-align: var(--align--center);
    margin: 45px var(--margin--auto);
  }
  /* LOGO SEEKBAR */
  .sb-register-page--logo {
    margin: var(--margin--auto);
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    width: 85%;
  }
  /* SIGN IN LABEL LINK*/

  .sb-register-page--signin {
    color: white;
    margin-left: 0px;
    margin-right: 25px;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
