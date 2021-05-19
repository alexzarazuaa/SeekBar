<template>
  <section>
    <article class="list">
      <article v-for="bar in bars" :key="bar">
        <BarsPreview v-bind:bar="bar" />
      </article>
    </article>

    <!-- <article>
      <a @click="previous" class="previous round">&#8249;</a>
      <a @click="next" class="next round">&#8250;</a>
    </article> -->
  </section>
</template>

<script>
import BarsPreview from "./BarsPreview";
import { mapGetters } from "vuex";
import { ActionsType } from "../../store/actions.type";
export default {
  name: "SBbarsList",
  components: {
    BarsPreview,
  },
  mounted() {
    this.$store.dispatch(ActionsType.FETCH_BARS);
  },
  computed: {
    ...mapGetters(["bars", "next", "previous"]),
  },
  methods: {
    next() {
      this.$store.dispatch(ActionsType.FETCH_PAGINATION, this.next);
    },
    previous() {
      this.$store.dispatch(ActionsType.FETCH_PAGINATION, this.previous);
    },
  },
  watch: {
    bars: {
      deep: true,
      handler(value) {
        console.log("watch Bars", value);
      },
    },
  },
};
</script>


<style scoped>

/***************************************
*             BAR LIST COMPONENT       *
***************************************/

/* LIST */

.list {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
}



/* PAGINATION */

.previous {
  display: flex;
  justify-content: flex-start;
  font-size: 35px;
  font-weight: bold;
  margin-left: 85px;
}

.next {
  display: flex;
  justify-content: flex-end;
  font-size: 35px;
  font-weight: bold;
  margin-right: 85px;
}
</style>
