<template>
  <section>
    <div class="list">
      <div v-for="bar in bars" :key="bar">
        <BarsPreview v-bind:bar="bar" />
      </div>
    </div>

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
      console.log("dfrf next");
      this.$store.dispatch(ActionsType.FETCH_PAGINATION, this.next);
    },
    previous() {
      console.log("dfrf PRE");
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
.list {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
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
