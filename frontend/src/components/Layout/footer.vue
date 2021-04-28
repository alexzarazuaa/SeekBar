<template>
  <footer class="footer">
    <section class="icons">
      <div class="tab">
        <button
          class="tablinks"
       @click="$router.push('/home')"
        >
          HOME
        </button>
        <button class="tablinks" @click="$router.push('/bares')">
          BARES
        </button>
        <button class="tablinks" @click="$router.push('/profile')">
          PROFILE
        </button>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "SBfooter",
};
</script>

<style scoped>
/***************************************
*             FOOTER PAGE              *
***************************************/

.footer i {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: #fa9950;
  text-align: center;
}

/* ICONS */
.icons {
  display: inline-block;
  width: 100%;
}

/* Style the tab */
.tab {
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
.tab button {
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
