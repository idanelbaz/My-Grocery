<template>
  <section class="on-sale-list">
    <div class="section-header-container">
      <h1>ON SALE</h1>
    </div>
    <carousel
      :paginationEnabled="false"
      :navigationEnabled="true"
      :perPageCustom="[[375,1] ,[500,1] ,[768, 5]]"
    >
      <slide v-for="item in shopItemsOnSale" :key="item._id">
        <item-card-preview @goToDetails="goToDetails" :item="item"></item-card-preview>
      </slide>
    </carousel>
    <a>See more ></a>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import itemCardPreview from "../components/itemCardPreview.cmp";

export default {
  name: "onSaleList",
  data() {
    return {};
  },
  props: ["shopItems"],
  created() {},
  computed: {
    shopItemsOnSale() {
      var sortedItems = this.shopItems.slice();
      var onSaleItems = sortedItems.filter(item => {
        return item.onSale.isSale === true;
      });
      var itemToShow = [];

      for (var i = 0; i < 12; i++) {
        itemToShow.push(onSaleItems[i]);
      }
      return itemToShow;
    }
  },
  methods: {
    goToDetails(itemId){ 
      this.$emit('goToDetails', itemId)
    }
  },
  components: {
    Carousel,
    Slide,
    itemCardPreview
  }
};
</script>


<style scoped lang="scss">
.on-sale-list {
  padding-left: 6rem;
  padding-right: 6rem;
  margin-top: 4rem;
}

.section-header-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
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

.VueCarousel-inner {
   height: 23rem;
}

@media screen and (max-width: 600px) {
  .on-sale-list {
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 30px;
  }

  .VueCarousel-inner {
   height: 25rem;
}
}
</style>