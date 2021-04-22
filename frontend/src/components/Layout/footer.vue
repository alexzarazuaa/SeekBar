<template>
  <footer class="footer">
    <section class="icons">
      <a :href="'/home'"><i class="fa fa-home" to="/home"></i></a>
    </section>
  </footer>
</template>

<script>
export default {
  name: "SBfooter",
};
</script>

<style>
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
}

.fa-home {
  font-size: 36px;
  margin: auto;
}
</style>
