<template>
  <section class="home-page">
    <top-menu></top-menu>
    <top-sellers-list v-if="shopItems" :shopItems="shopItems"></top-sellers-list>
   <more-genre></more-genre>
  </section>
</template>

<script>
import topMenu from "../components/topMenu.cmp";
import topSellersList from "../components/topSellersList.cmp";
import moreGenre from "../components/moreGenre.cmp";

export default {
  name: "homepage",
  data() {
    return {
      shopItems: null
    };
  },

  created() {
    this.$store.dispatch({ type: "loadShopItems" }).then(() => {
      this.shopItems = this.$store.getters.getShopItems;
    });
  },
  computed: {},
  methods: {},
  components: {
    topMenu,
    topSellersList,
    moreGenre,
  }
};
</script>


<style scoped lang="scss">
.home-page {
  margin: 0 auto;
}
</style>