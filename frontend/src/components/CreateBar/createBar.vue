<template>
  <ion-page class="sb-createBar-page">
    <section>
      <article>
        <img class="sb-createBar-page--logo" v-bind:src="imageSrc" :alt="alt" />
      </article>
      <article>
        <ion-title class="sb-createBar-page--title">CREATE YOUR BAR</ion-title>
        <ion-button color="dark" className="sb-createBar-page--homebtn">
          <a :href="'/home'">HOME</a>
        </ion-button>
      </article>
    </section>
    <main>
      <article className="sb-createBar-page-form">
        <form
          @submit.prevent="
            onSubmit(name, description, phoneNumber, location, Valoration)
          "
        >
          <input
            class="inputFieldCreateBar"
            type="name"
            v-model="name"
            placeholder="Name"
            required
          />
          <span
            v-if="errors.some((error) => error.name === 'BarName', value)"
            >{{
              errors.filter((error) => error.name === "BarName")[0].value
            }}</span
          >
          <input
            class="inputFieldCreateBar"
            type="text"
            v-model="description"
            placeholder="Description"
          />
          <span
            v-if="
              errors.some((error) => error.name === 'BarDescription', value)
            "
            >{{
              errors.filter((error) => error.name === "BarDescription")[0].value
            }}</span
          >

          <input
            class="inputFieldCreateBar"
            type="number"
            v-model="phoneNumber"
            placeholder="PhoneNumber"
          />
          <span
            v-if="
              errors.some((error) => error.name === 'BarPhoneNumber', value)
            "
            >{{
              errors.filter((error) => error.name === "BarPhoneNumber")[0].value
            }}</span
          >
          <input
            class="inputFieldCreateBar"
            type="text"
            v-model="location"
            placeholder="Location"
          />
          <span
            v-if="errors.some((error) => error.name === 'BarLocation', value)"
            >{{
              errors.filter((error) => error.name === "BarLocation")[0].value
            }}</span
          >

          <label
            class="inputFieldCreateBar labelBannerBar"
            for="bannerBar"
            style="background-color: #fa9950"
            >Choose a banner picture:</label
          >
            <input
            class="inputFieldCreateBar"
            type="text"
            v-model="bannerBar"
            placeholder="Banner"
          />

          

          <button class="sb-createBar-page--createBarbtn">Create</button>
        </form>
      </article>
    </main>
  </ion-page>
</template>

<script>
import { IonPage, IonTitle, IonButton } from "@ionic/vue";
import { mapState, mapGetters } from "vuex";
import { ActionsType } from "@/store/actions.type";
import { CreateBarFormErrors } from "../../utils/utils";
export default {
  components: { IonPage, IonTitle, IonButton },
  name: "SBcreateBar",
  data() {
    return {
      errors: [],
      name: "",
      description: "",
      phoneNumber: "",
      location: "",
      Valoration: "",
    };
  },
    computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),
    ...mapGetters(["bar", "currentUser", "isAuthenticated"]),
       imageSrc: function () {
      return `https://raw.githubusercontent.com/alexzarazuaa/SeekBar/main/frontend/src/assets/img/SEEK_BAR_BLANCO.png`;
    }
  },
  methods: {
    onSubmit(name, description, phoneNumber, location, valoration) {
      console.log(name, description, phoneNumber, location, valoration)
      this.errors = [];
      const regexErrors = CreateBarFormErrors(this);
      if (regexErrors.length > 0) {
        this.errors = regexErrors;
      } else {
        if (this.isAuthenticated) {
          this.$store
            .dispatch(ActionsType.ADD_BAR, {'bar':{
              name: this.name,
              description: this.description,
              'phone_number': this.phoneNumber,
              location: this.location,
              Valoration: this.Valoration
            }})
            .then((response) => {
              console.log(response);
              this.$router.push({ name: "SBhome" });
            })
            .catch((response) => {
              console.log(response);
            });
        }
      }
    },
  },

};
</script>

<style scoped>
/***************************************
*             LOGIN PAGE               *
***************************************/

/* VARIABLES */

/* :root {
  --align--center: center;
  --margin--auto: auto;
} */

/* PAGE  CONTENT */
.sb-createBar-page {
  background-color: #fa9950;
  height: 100vh;
  width: 100vw;
}

/* LOGO SEEKBAR */
.sb-createBar-page--logo {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
}
/* PAGE TITLE */
.sb-createBar-page--title {
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

.sb-createBar-page--homebtn a {
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

/* LOGIN FORM */
.sb-createBar-page-form {
  margin-top: 25px;
}
/*  LOGIN INPUTS */
.inputFieldCreateBar {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  margin: 5px auto 20px;
  width: 20vw;
}

/* LOGIN BTN */
.sb-createBar-page--createBarbtn {
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
.sb-createBar-page--account {
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
  /*  LOGIN INPUTS */
  .inputFieldCreateBar {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    margin: 5px auto 20px;
    width: 28vw;
  }

  /* LOGIN BTN */
  .sb-createBar-page--createBarbtn {
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

  .sb-createBar-page--homebtn {
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
  .sb-createBar-page--logo {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
  }

  .selectImg {
    width: 50%;
  }
}

@media only screen and (max-width: 820px) and (min-width: 621px) {
  /*  LOGIN INPUTS */
  .inputFieldCreateBar {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    margin: 5px auto 20px;
    width: 35vw;
  }
  /* LOGIN BTN */
  .sb-createBar-page--createBarbtn {
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

  .sb-createBar-page--homebtn {
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
  .sb-createBar-page--logo {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
  .selectImg {
    width: 53%;
  }
}

@media only screen and (max-width: 620px) and (min-width: 501px) {
  /*  LOGIN INPUTS */
  .inputFieldCreateBar {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    margin: 5px auto 20px;
    width: 40vw;
  }
  /* LOGIN BTN */
  .sb-createBar-page--createBarbtn {
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

  .sb-createBar-page--homebtn {
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
  .sb-createBar-page--logo {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65%;
  }
}

@media only screen and (max-width: 500px) and (min-width: 341px) {
  /*  LOGIN INPUTS */
  .inputFieldCreateBar {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    margin: 5px auto 20px;
    width: 55vw;
  }
  /* LOGIN BTN */
  .sb-createBar-page--createBarbtn {
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

  .sb-createBar-page--homebtn {
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
  .sb-createBar-page--title {
    font-family: "Rubik Mono One", sans-serif;
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    margin: 75px auto;
  }
  /* LOGO SEEKBAR */
  .sb-createBar-page--logo {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
  }
}

@media only screen and (max-width: 340px) and (min-width: 5px) {
  /*  LOGIN INPUTS */
  .inputFieldCreateBar {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    margin: 5px auto 20px;
    width: 90vw;
  }
  /* LOGIN BTN */
  .sb-createBar-page--createBarbtn {
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
  /* HOME BTN */

  .sb-createBar-page--homebtn {
    background-color: black;
    color: white;
    width: 35vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    margin: auto;
    margin-top: 5px;
  }
  /* PAGE TITLE */
  .sb-createBar-page--title {
    font-family: "Rubik Mono One", sans-serif;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin: 75px auto;
  }

  /* LOGO SEEKBAR */
  .sb-createBar-page--logo {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
  }
}
</style>
