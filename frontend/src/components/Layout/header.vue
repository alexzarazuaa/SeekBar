<template>
  <section class="sb--header">
    <nav class="sb--header__nav">
      <article>
        <div id="mySidenav" class="sb--header--sidenav">
          <a
            href="javascript:void(0)"
            class="sb--header--sidenav--closebtn"
            @click="closeNav()"
            >&times;</a
          >
          <a :href="'/bares'">Bares</a>
          <a :href="'/login'">Login</a>
        </div>
        <span style="font-size: 30px; cursor: pointer" @click="openNav()"
          >&#9776;</span
        >
      </article>

      <article class="sb--header--navbar">
        <a v-if="!isAuthenticated" :href="'/login'" class="login"
          ><i class="fa fa-user" aria-hidden="true"></i
        ></a>

        <a v-if="currentUser.checkType === 'Worker'" :href="'/create'"
          >Create Bar</a
        >

        <a @click="profile(currentUser.checkType, currentUser.username)">
          {{ currentUser.username }}
        </a>

        <a class="sb--header--btn-logout" v-if="isAuthenticated" @click="logout"
          >LogOut</a
        >
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
      this.$router.push({ name: "SBhome" });
    },
    VAL_TOKEN() {
      this.$store.dispatch(ActionsType.CHECK_AUTH);
    },
    profile(checkType, username) {
      const type = checkType === "Worker" ? "workers" : "clients";
      this.$router.push({
        name: "SBprofile",
        params: { checkType: type, username: username },
      });
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
      handler(value) {
        console.log("watch currentUser", value);
      },
    },
  },
};
</script>

<style scoped>
/***************************************
*             HEADER PAGE              *
***************************************/

/* FOR ALL  HEADER  */

* {
  box-sizing: border-box;
}

/* ALL HEADER CLASS */

.sb--header {
  overflow: hidden;
  background-color: #f4f4f4;
  padding: 10px 10px;
}

/* LOGIN ICON */

.login {
  font-family: Ruluko;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
}
.fa-user {
  font-size: 34px;
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

.sb--header--sidenav {
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

.sb--header--sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
  transition: 0.3s;
}

.sb--header--sidenav a:hover {
  color: #f1f1f1;
}

.sb--header--sidenav .sb--header--sidenav--closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* A HEADERS  */

.sb--header a {
  margin-left: 20px;
}
.sb--header a:hover {
  color: #fa9950;
}
.sb--header__nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
}
sb--header--sidenav a,
a:visited,
a:active {
  color: #fff;
  text-decoration: none;
}

/*  HEADER NAVBAR CLASS */
.sb--header--navbar {
  float: left;
  color: black;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 2px;
  font-weight: bold;
  cursor: pointer;
}
.sb--header--navbar a {
  color: #000000;
  text-decoration: none;
}

/* BTN LOGOUT */
.sb--header--btn-logout {
  cursor: pointer;
}
.sb--header--btn-logout a:hover {
  background-color: red;
  color: red;
}
</style>
