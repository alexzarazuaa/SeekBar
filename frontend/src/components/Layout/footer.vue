<template>
  <footer class="sb--footer">
    <section class="sb--footer--icons">
      <article class="sb--footer--tab">
        <button class="sb--footer-tab-tablinks" @click="()=>{$router.push('/')}">
          INICIO
        </button>
        <button class="sb--footer-tab-tablinks" @click="$router.push('/bares')">
          BARES
        </button>
        <button
          v-if="!isAuthenticated"
          :href="'/login'"
          class="sb--footer-tab-tablinks"
        >
          PROFILE
        </button>
        <button
          v-else
          :href="'/login'"
          class="sb--footer-tab-tablinks"
          @click="profile(currentUser.checkType, currentUser.username)"
        >
          PROFILE
        </button>
      </article>
    </section>
  </footer>
</template>

<script>
import { ActionsType } from "@/store/actions.type";
import { mapGetters } from "vuex";
export default {
  name: "SBfooter",
  mounted() {
    this.VAL_TOKEN();
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"]),
  },
  methods: {
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
  },
};
</script>

<style scoped>
/***************************************
*             FOOTER COMPONENT         *
***************************************/

/* FOOTER */

.sb--footer i {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: #fa9950;
  text-align: center;
}

/* LINKS */
.sb--footer--icons {
  display: inline-block;
  width: 100%;
}

/* Style the tab */
.sb--footer--tab {
  background-color: black;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: auto;
  color: #fa9950;
}

/* Style the buttons inside the tab */
.sb--footer--tab button {
  background-color: inherit;
  float: center;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
  background-color: black;
  color: #fa9950;
}
</style>
