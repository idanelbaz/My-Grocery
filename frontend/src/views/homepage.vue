<template>
  <section class="home-page">
    <top-menu></top-menu>
    <top-sellers-list @goToDetails="goToDetails" v-if="shopItems" :shopItems="shopItems"></top-sellers-list>
    <more-genre></more-genre>
    <on-sale-list @goToDetails="goToDetails" v-if="shopItems" :shopItems="shopItems"></on-sale-list>
  </section>
</template>

<script>
import topMenu from "../components/topMenu.cmp";
import topSellersList from "../components/topSellersList.cmp";
import moreGenre from "../components/moreGenre.cmp";
import onSaleList from "../components/onSaleList.cmp";

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
  methods: {
    goToDetails(itemId) {
      this.$router.push(`/item/${itemId}`)
    }
  },
  components: {
    topMenu,
    topSellersList,
    moreGenre,
    onSaleList
  }
};
</script>


<style scoped lang="scss">
.home-page {
  margin: 0 auto;
}
</style>