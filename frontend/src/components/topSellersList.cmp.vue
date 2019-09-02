<template>
  <section class="top-sellers-list">
    <div class="section-header-container">
      <h1>Best sellers</h1>
      <a>See more ></a>
    </div>
    <carousel :navigationEnabled="true" :perPageCustom="[[500, 2], [768, 4]]">
      <slide v-for="item in shopItemsTopSellers" :key="item._id">
        <item-card-preview :item="item"></item-card-preview>
      </slide>
    </carousel>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import itemCardPreview from '../components/itemCardPreview.cmp'

export default {
  name: "topSellersList",
  data() {
    return {};
  },
  props: ["shopItems"],
  created() {},
  computed: {
    shopItemsTopSellers() {
      var sortedItems = this.shopItems.slice();
      var topSellersItems = [];
      sortedItems.sort(function(a, b) {
        return b.selles - a.selles;
      });

      for (var i = 0; i < 12; i++) {
        topSellersItems.push(sortedItems[i]);
      }
      return topSellersItems;
    }
  },
  methods: {},
  components: {
    Carousel,
    Slide,
    itemCardPreview
  }
};
</script>


<style scoped lang="scss">
.top-sellers-list {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
}

.section-header-container {
  display: flex;
  justify-content: space-between;
}

h1 {
  font-size: 1.6rem;
  font-weight: bold;
}

a {
  color: #00698c;
  font-size: 15px;
  line-height: 39px;
}
</style>