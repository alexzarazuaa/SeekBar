<template>
  <section class="header">
    <nav class="header__nav">
      <article>
        <div id="mySidenav" class="sidenav">
          <a href="javascript:void(0)" class="closebtn" @click="closeNav()"
            >&times;</a
          >
          <a :href="'/bares'">Bares</a>
          <a :href="'/login'">Login</a>
        </div>
        <span style="font-size:30px;cursor:pointer" @click="openNav()"
          >&#9776;</span
        >
      </article>

      <article class="navbar">
        <a v-if="!isAuthenticated" :href="'/login'" class="login"
          ><i class="fa fa-user" aria-hidden="true"></i></a
        >

        <a @click="profile(currentUser.check,currentUser.username)">
          {{ currentUser.username }}
        </a>

        <a class="Btn-logout" v-if="isAuthenticated" @click="logout"><i class="fas fa-sign-out-alt"></i></a>
      </article>
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
      this.$router.push({ name: "Sbhome" });
    },
    VAL_TOKEN() {
      this.$store.dispatch(ActionsType.CHECK_AUTH);
    },
    profile(check,username) {
      this.$router.push({ name: "Profile", params: { check :check ,username: username } });
    },
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
  },

     watch: {
        currentUser: {
          deep: true,
          handler (value) {
            console.log('watch currentUser' , value)
          }
    }
  }
};
</script>

<style scoped>
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

/* LOGIN BTN */
.login {
  font-family: Ruluko;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
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

/* MENU TOGGLE */

.sidenav {
  height: 95.13%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: black;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* a headers */
.header a {
  margin-left: 20px;
}
.header a:hover {
  
  color:#fa9950;
}
.header__nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
}
sidenav a,
a:visited,
 a:active {
  color : #fff;
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
.navbar a {
  color: #000000;
  text-decoration: none;
}
/* BTN LOGOUT */
.Btn-logout {
  cursor: pointer;
}
.Btn-logout a:hover {
  background-color: red;
  color: red;
}
.fa-user{
  font-size: 34px;
}
</style>
