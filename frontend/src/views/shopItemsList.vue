<template>
  <section class="shop-items-list">
    <div class="main-container">
      <div class="genreList">
        <div :class="{ active: isActiveGenre.isFruitsActive }" class="genre">Fruits</div>
        <div :class="{ active: isActiveGenre.isVegetablesActive}" class="genre">Vegetables</div>
        <div :class="{ active: isActiveGenre.isBakeryActive}" class="genre">Bakery</div>
        <div :class="{ active: isActiveGenre.isWinesActive}" class="genre">Wines</div>
        <div :class="{ active: isActiveGenre.isBeersActive}" class="genre">Beers</div>
        <div :class="{ active: isActiveGenre.isMeatActive}" class="genre">Fresh Meat</div>
        <div :class="{ active: isActiveGenre.isFishsActive}" class="genre">Fresh Fishs</div>
        <div :class="{ active: isActiveGenre.isSaucesActive}" class="genre">Sauces</div>
        <div :class="{ active: isActiveGenre.isFrozenActive}" class="genre">Frozen</div>
        <div :class="{ active: isActiveGenre.isSnacksActive}" class="genre">Nuts and Snacks</div>
        <div :class="{ active: isActiveGenre.isDrinksActive}" class="genre">Soft Drinks</div>
      </div>
      <b-field class="genreListMobile">
        <b-select>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="bakery">Bakery</option>
          <option value="wines">Wines</option>
          <option value="beers">Beers</option>
          <option value="meat">Fresh Meat</option>
          <option value="fishs">Fresh Fishs</option>
          <option value="sauces">Sauces</option>
          <option value="frozen">Frozen</option>
          <option value="snacks">Nuts and Snacks</option>
          <option value="drinks">Soft Drinks</option>
        </b-select>
      </b-field>
      <div class="itemsList">
        <item-card-preview
          v-for="item in shopItemsToShow"
          :key="item._id"
          @goToDetails="goToDetails"
          :item="item"
        ></item-card-preview>
      </div>
    </div>
  </section>
</template>

<script>
import itemCardPreview from "../components/itemCardPreview.cmp";

export default {
  name: "shopItemsList",
  data() {
    return {
      shopItems: null,
      isActiveGenre: {
        isFruitsActive: false,
        isVegetablesActive: false,
        isBakeryActive: false,
        isWinesActive: false,
        isBeersActive: false,
        isMeatActive: false,
        isFishsActive: false,
        isSaucesActive: false,
        isFrozenActive: false,
        isSnacksActive: false,
        isDrinksActive: false
      }
    };
  },

  async created() {
    var shopItemsToShow = this.$route.params;
    if (!shopItemsToShow.genre && !shopItemsToShow.filterBy) {
      this.isActiveGenre.isFruitsActive = true;
      var baseGenre = "fruits";
      this.$store.dispatch({ type: "loadShopItemsToBaseGenre", baseGenre });
    } else if (shopItemsToShow.genre) {
      if (shopItemsToShow.genre === "meat") {
        this.isActiveGenre.isMeatActive = true;
        var baseGenre = "meat";
        this.$store.dispatch({ type: "loadShopItemsToBaseGenre", baseGenre });
      } else if (shopItemsToShow.genre === "fruits") {
        this.isActiveGenre.isFruitsActive = true;
        var baseGenre = "fruits";
        this.$store.dispatch({ type: "loadShopItemsToBaseGenre", baseGenre });
      } else if (shopItemsToShow.genre === "bakery") {
        this.isActiveGenre.isBakeryActive = true;
        var baseGenre = "bakery";
        this.$store.dispatch({ type: "loadShopItemsToBaseGenre", baseGenre });
      } else if (shopItemsToShow.genre === "wines") {
        this.isActiveGenre.isWinesActive = true;
        var baseGenre = "wines";
        this.$store.dispatch({ type: "loadShopItemsToBaseGenre", baseGenre });
      }
    }
  },
  computed: {
    shopItemsToShow() {
      return this.$store.getters.getItemsToShow;
    }
  },
  methods: {
    goToDetails(itemId) {
      this.$router.push(`/item/${itemId}`);
    }
  },
  components: {
    itemCardPreview
  }
};
</script>


<style scoped lang="scss">
.shop-items-list {
  margin: 0 auto;
}

.item-card-preview {
  width: 14.5rem;
  height: 23rem;
  margin-bottom: 2rem;
}

.main-container {
  display: flex;
  flex-direction: row;
  padding-left: 6rem;
  padding-right: 6rem;
  margin-top: 2rem;
  justify-content: space-between;
}

.genreList {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-width: 14rem;
  max-width: 14rem;
}

.genreListMobile {
  display: none;
}

.itemsList {
  flex-grow: 3;
  padding: 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: 0;
  max-height: auto;
}

.genre {
  border-bottom: 1px solid #6d757c;
  color: #6d757c;
  height: 2.5rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
}

.genre:hover {
  border-bottom: 5px solid #949494;
  color: #949494;
}

.active {
  border-bottom: 5px solid #0076bf;
  color: #0076bf;
}
.active:hover {
  border-bottom: 5px solid #0076bf;
  color: #0076bf;
}

@media screen and (max-width: 600px) {
  .genreList {
    display: none;
  }

  .main-container {
    flex-direction: column;
    padding: 0;
  }

  .genreListMobile {
    display: block;
    flex-grow: 1;
    margin: 0 auto;
  }

  .itemsList {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0rem;
  }

  .item-card-preview {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  option {
    border: 1px solid black;
  }
}
</style>