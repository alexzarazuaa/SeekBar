<template>
  <IonPage class="sb-register-page">
    <section>
      <article>
        <img class="sb-login-page--logo" :src="image" :alt="alt" />
      </article>
      <article>
        <IonTitle class="sb-register-page--title">
          SIGN UP
        </IonTitle>

        <IonButton color="dark" className="sb-register-page--homebtn">
          <a :href="'/home'">HOME</a>
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


          <input
            class="inputFieldRegister"
            type="password"
           v-model="repeatPassword"
            placeholder="password"
            required
          />
          <span v-if="errors.includes('repeat')" >Hola</span>
          
          <article class="sb--register--page-typeUser">
            
            <button
              v-on:click="webcamSendRequestButton('client')"
              type="button"
              class="sb--register--page--btntype"
              
            >
              Cliente
            </button>
            <button
              v-on:click="webcamSendRequestButton('worker')"
              type="button"
              class="sb--register--page--btntype"
              
            >
              Trabajador
            </button>
          </article>

          <button class="sb-register-page--registerbtn">Sign Up</button>
          <IonLabel class="sb-login-page--account">
            Ya tienes una cuenta?
            <IonLabel class="sb-register-page--signin">
              <a :href="'/login'">Inicia Session</a>
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
import { IonPage, IonTitle, IonButton } from "@ionic/vue";
import {RegisterFormErrors} from "./utils"
export default {
  
  components: { IonPage, IonTitle, IonButton },
  name: "SBregister",
  data() {
    return {
      errors:[],
      username: "",
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      image: "../../assets/img/SEEK BAR BLANCO.png",
      alt: "logo_seekbar",
    };
  },

  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),
  },
  methods: {
    
    onSubmit() {
            this.errors=[]
      const regexErrors = RegisterFormErrors(this);
      if (regexErrors.length>0){
        this.errors=regexErrors
      }else{
      this.$store
        .dispatch(ActionsType.REGISTER, {
          username: this.username,
          email: this.email,
          password: this.password,
          name: this.name,
          type: this.type
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
      }
    },


    webcamSendRequestButton(type) {
      this.type=type
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
  font-family: Rubik One;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  color: #000000;
  display: flex;
  justify-content: center;
  margin: 10px var(--margin--auto);
}

/* SELECT TYPE USER */
.sb--register--page-typeUser {
  width: 100%;
  text-align: center;
}
.sb--register--page--btntype {
  background-color: black;
  color: white;
  width: 8vw;
  cursor: pointer;
  text-align: var(--align--center);
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
.sb-register-page--homebtn a {
  text-decoration: none;
}

/* REGISTER FORM */
.sb-register-page-form {
  margin-top: 25px;
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
  margin: 5px var(--margin--auto);
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
