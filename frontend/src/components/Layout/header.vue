<template>
  <section class="header">
    <nav class="header__nav">
      <article>
        <article class="container">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </article>
      </article>

      <section class="navbar">
        <router-link v-if="!isAuthenticated" to="/login">Login</router-link>

        <a @click="profile(currentUser.username)">
          {{ currentUser.username }}
        </a>

        <a class="Btn-logout" v-if="isAuthenticated" @click="logout">LogOut</a>
      </section>
    </nav>
  </section>
</template>

<script>
import { ActionsType } from "@/store/actions.type";
import { mapGetters } from "vuex";
export default {
  name: "SBheader",
  mounted() {
    this.VAL_TOKEN();
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"]),
  },
  methods: {
    logout() {
      this.$store.dispatch(ActionsType.LOGOUT);
    },
    VAL_TOKEN() {
      this.$store.dispatch(ActionsType.CHECK_AUTH);
    },
    profile(username) {
      this.$router.push({ name: "Profile", params: { username: username } });
    },
  },
  //    watch: {
  //       currentUser: {
  //         deep: true,
  //         handler (value) {
  //           console.log('watch currentUser' , value)
  //         }
  //   }
  // }
};
</script>

<style>
/***************************************
*             HEADER PAGE              *
***************************************/

/* ALL PAGE  */
* {
  box-sizing: border-box;
}

/* HEADER CLASS */ 

.header {
  overflow: hidden;
  background-color: #f4f4f4;
  padding: 10px 10px;
}

/* MENU ICON */ 
.container {
  display: inline-block;
  cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

/* a headers */ 
.header a {
  margin-left: 20px;
}
.header a:hover {
  background-color: #ddd;
  color: black;
}
.header__nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
}
a,
a:visited,
a:active {
  color: black;
  text-decoration: none;
}
/*  NAVBAR CLASS */ 
.navbar {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 2px;
  font-weight: bold;
  cursor: pointer;
}
.navbar a:hover {
  background-color: #ddd;
  color: black;
}
.navbar a.active {
  background-color: dodgerblue;
  color: white;
}

/* BTN LOGOUT */
.Btn-logout {
  cursor: pointer;
}
.Btn-logout a:hover {
  background-color: red;
  color: red;
}
</style>
