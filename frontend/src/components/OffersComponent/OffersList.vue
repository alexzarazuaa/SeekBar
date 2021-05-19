<template>
  <section>
    <article class="list">
      <article v-for="promotion in promotions" :key="promotion">
        <SBoffersPreview v-bind:promotion="promotion" />
      </article>
    </article>
  </section>
</template>

<script>
import SBoffersPreview from "./OffersPreview";
import { mapGetters } from "vuex";
import { ActionsType } from "../../store/actions.type";
export default {
  name: "SBoffersListComponent",
  components: {
    SBoffersPreview,
  },
  mounted() {
    this.$store.dispatch(ActionsType.FETCH_PROMOTIONS);
  },
  computed: {
    ...mapGetters(["promotions", "next", "previous"]),
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
    promotions: {
      deep: true,
      handler(value) {
        console.log("watch promotions", value);
      },
    },
  },
};
</script>

<style scoped>

/***************************************
*    PROMOTIONS_LIST COMPONENT         *
***************************************/

.list {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
}


</style>
