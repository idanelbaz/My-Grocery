<template>
  <section v-if="shopItem" class="item-details">
    <div class="item-container">
      <img :src="shopItem.img" class="itemImg" />
      <div class="itemDet">
        <h1 class="itemName">{{shopItem.name}}</h1>
        <h1 class="itemSize">{{shopItem.size}}</h1>
        <h1 v-if="!shopItem.onSale.isSale" class="itemPrice">${{shopItem.value}}</h1>
        <h1 v-if="shopItem.onSale.isSale" class="itemPastPrice">${{shopItem.value}}</h1>
        <h1 v-if="shopItem.onSale.isSale" class="itemPrice">${{shopItem.onSale.price}} 🔥</h1>
        <h1 class="addToCart">Add to 🛒</h1>
      </div>
    </div>
    <same-items-list @goToDetails="goToDetails" v-if="shopItems" :shopItems="shopItems"></same-items-list>
  </section>
</template>

<script>
import sameItemsList from "../components/sameItemsList.cmp";

export default {
  name: "itemDetails",
  data() {
    return {
      shopItem: null,
      shopItems: null
    };
  },

  async created() {
    var shopItemId = this.$route.params.id;
    await this.$store.dispatch({ type: "loadShopItemById", shopItemId });
    try {
      this.shopItem = this.$store.getters.getShopItem;
      this.$store.dispatch({ type: "loadShopItemsToShowSame", shopItem: this.shopItem }).then(() => {
      this.shopItems = this.$store.getters.getItemsToShowSame;
    });
    } catch (err) {
      console.log("Item not found", err);
    }
    
  },
  computed: {},
  methods: {
    async goToDetails(itemId) {
      await this.$store.dispatch({ type: "loadShopItemById", shopItemId:itemId });
    try {
      this.shopItem = this.$store.getters.getShopItem;
      if(this.$route.params.id === itemId){ 
        return;
      }
       this.$router.push(`/item/${itemId}`)
    } catch (err) {
      console.log("Item not found", err);
    }
    },
  },
  components: {
    sameItemsList
  }
};
</script>


<style scoped lang="scss">
.item-details {
  margin: 0 auto;
}

.item-container {
  display: flex;
  flex-direction: row;
  padding-left: 6rem;
  padding-right: 6rem;
  margin-top: 2rem;
  height: 22rem;
  justify-content: space-evenly;
}

.itemImg {
  object-fit: contain;
}

.itemName {
  font-size: 2.5rem;
  font-weight: 600;
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
}

.itemSize {
  font-size: 1.2rem;
  font-weight: 400;
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
}

.itemPrice {
  font-size: 2.5rem;
  font-weight: 600;
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
}

.itemPastPrice {
  font-size: 1.2rem;
  font-weight: 400;
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  text-decoration-line: line-through;
}

.addToCart {
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
}

@media screen and (max-width: 600px) {
  .item-container {
    flex-direction: column;
    height: auto;
  }

  .itemImg {
    max-height: 16.5rem;
  }
}
</style>