<template>
  <IonPage class="sb-login-page">
    <section>
      <article>
        <IonImg class="sb-login-page--logo" src="{Logo}"></IonImg>
      </article>
      <article>
        <IonTitle class="sb-login-page--title"> {t("LOGIN.TITLE")}</IonTitle>
        <IonButton
          color="dark"
          className="sb-login-page--homebtn"
          href="/sb/home"
        >
          {t("LOGIN.HOME")}
        </IonButton>
      </article>
    </section>
    <section>
      <article className="sb-login-page-form">
        <form @submit.prevent="onSubmit(username, password)">
          <input
            class="inputFieldLogin"
            type="username"
            v-model="username"
            placeholder="username"
            required
          />
          <input
            class="inputFieldLogin"
            type="password"
            v-model="password"
            placeholder="password"
            required
          />
          <button class="sb-login-page--loginbtn">Sign In</button>
          <IonLabel class="sb-login-page--account">
            {t("LOGIN.NOT_ACCOUNT")}
            <IonLabel class="sb-register-page--signin">
              {t("LOGIN.SIGNUP")}
            </IonLabel>
          </IonLabel>
        </form>
      </article>
    </section>
  </IonPage>
</template>

<script>
import { IonPage, IonImg, IonTitle, IonButton } from "@ionic/vue";
import { mapState } from "vuex";
import { ActionsType } from "@/store/actions.type";
export default {
  components: { IonPage, IonImg, IonTitle, IonButton },
  name: "SBlogin",
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    onSubmit(username, password) {
      this.$store
        .dispatch(ActionsType.LOGIN, { username, password })
        .then(() => this.$router.push({ name: "SBhome" }));
    },
  },
  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),
  },
};
</script>

<style>
/***************************************
*             LOGIN PAGE               *
***************************************/

/* VARIABLES */

:root {
  --align--center: center;
  --margin--auto: auto;
}

/* PAGE  CONTENT */
.sb-login-page {
  background-color: #fa9950;
  height: 100vh;
  width: 100vw;
}

/* LOGO SEEKBAR */
.sb-login-page--logo {
  margin: var(--margin--auto);
  display: flex;
  justify-content: var(--align--center);
  align-items: var(--align--center);
  width: 35%;
}
/* PAGE TITLE */
.sb-login-page--title {
  font-family: "Rubik Mono One", sans-serif;
  font-size: 40px;
  font-weight: bold;
  text-align: var(--align--center);
  margin: 45px var(--margin--auto);
}

/* HOME BTN */

.sb-login-page--homebtn {
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

/* LOGIN FORM */
.sb-login-page-form {
  margin-top: 55px;
}
/*  LOGIN INPUTS */
.inputFieldLogin {
  background-color: white;
  display: flex;
  justify-content: var(--align--center);
  align-items: var(--align--center);
  text-align: var(--align--center);
  cursor: pointer;
  margin: 5px var(--margin--auto) 20px;
  width: 20vw;
}

/* LOGIN BTN */
.sb-login-page--loginbtn {
  background-color: black;
  color: white;
  width: 25vw;
  display: flex;
  justify-content: var(--align--center);
  align-items: var(--align--center);
  cursor: pointer;
  text-align: var(--align--center);
  margin: var(--margin--auto);
  margin-top: 15px;
}
.sb-login-page--account {
  display: flex;
  justify-content: var(--align--center);
  align-items: var(--align--center);
  text-align: var(--align--center);
  margin: 25px var(--margin--auto);
  font-size: 20px;
  font-weight: 500;
}

/***************************************
*         QUERIES RESPONSIVE           *
***************************************/

@media only screen and (max-width: 980px) and (min-width: 821px) {
  /*  LOGIN INPUTS */
  .inputFieldLogin {
    background-color: white;
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    text-align: var(--align--center);
    cursor: pointer;
    margin: 5px var(--margin--auto) 20px;
    width: 28vw;
  }

  /* LOGIN BTN */
  .sb-login-page--loginbtn {
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

  .sb-login-page--homebtn {
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
  .sb-login-page--logo {
    margin: var(--margin--auto);
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    width: 45%;
  }
}

@media only screen and (max-width: 820px) and (min-width: 621px) {
  /*  LOGIN INPUTS */
  .inputFieldLogin {
    background-color: white;
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    text-align: var(--align--center);
    cursor: pointer;
    margin: 5px var(--margin--auto) 20px;
    width: 35vw;
  }
  /* LOGIN BTN */
  .sb-login-page--loginbtn {
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

  .sb-login-page--homebtn {
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
  .sb-login-page--logo {
    margin: var(--margin--auto);
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    width: 50%;
  }
}

@media only screen and (max-width: 620px) and (min-width: 501px) {
  /*  LOGIN INPUTS */
  .inputFieldLogin {
    background-color: white;
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    text-align: var(--align--center);
    cursor: pointer;
    margin: 5px var(--margin--auto) 20px;
    width: 40vw;
  }
  /* LOGIN BTN */
  .sb-login-page--loginbtn {
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

  .sb-login-page--homebtn {
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
  .sb-login-page--logo {
    margin: var(--margin--auto);
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    width: 65%;
  }
}

@media only screen and (max-width: 500px) and (min-width: 341px) {
  /*  LOGIN INPUTS */
  .inputFieldLogin {
    background-color: white;
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    text-align: var(--align--center);
    cursor: pointer;
    margin: 5px var(--margin--auto) 20px;
    width: 55vw;
  }
  /* LOGIN BTN */
  .sb-login-page--loginbtn {
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

  .sb-login-page--homebtn {
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
  .sb-login-page--title {
    font-family: "Rubik Mono One", sans-serif;
    font-size: 35px;
    font-weight: bold;
    text-align: var(--align--center);
    margin: 45px var(--margin--auto);
  }
  /* LOGO SEEKBAR */
  .sb-login-page--logo {
    margin: var(--margin--auto);
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    width: 70%;
  }
}

@media only screen and (max-width: 340px) and (min-width: 5px) {
  /*  LOGIN INPUTS */
  .inputFieldLogin {
    background-color: white;
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    text-align: var(--align--center);
    cursor: pointer;
    margin: 5px var(--margin--auto) 20px;
    width: 90vw;
  }
  /* LOGIN BTN */
  .sb-login-page--loginbtn {
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

  .sb-login-page--homebtn {
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
  .sb-login-page--title {
    font-family: "Rubik Mono One", sans-serif;
    font-size: 30px;
    font-weight: bold;
    text-align: var(--align--center);
    margin: 45px var(--margin--auto);
  }

  /* LOGO SEEKBAR */
  .sb-login-page--logo {
    margin: var(--margin--auto);
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    width: 85%;
  }
}
</style>
