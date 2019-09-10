<template>
  <section class="more-genre">
    <div class="section-header-container">
      <h1>MORE PRODUCTS</h1>
    </div>
    <div class="genreContainer">
      <div @click="goToFruitsList" class="genreFruitAndVeg" title="Fruits and Vegetables">
        <div class="genreTag">Fruits and Vegetables</div>
      </div>
      <div class="middleContainer">
        <div @click="goToMeatList" class="genreFreshMeat" title="Fresh Meat">
          <div class="genreTag">Fresh Meat</div>
        </div>
        <div @click="goToBakeryList" class="genreBakery" title="Bakery">
          <div class="genreTag">Bakery</div>
        </div>
      </div>
      <div @click="goToWinesList" class="genreWineAndBeers" title="Wine and Beers">
        <div class="genreTag">Wine and Beers</div>
      </div>
    </div>
    <a>See more ></a>
  </section>
</template>

<script>
export default {
  name: "moreGenre",
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {
    goToMeatList(){ 
      this.$router.push('/items/meat')
    },
    goToFruitsList(){ 
      this.$router.push('/items/fruits')
    },
    goToBakeryList(){ 
      this.$router.push('/items/bakery')
    },
    goToWinesList(){ 
      this.$router.push('/items/wines')
    },
  },
  components: {}
};
</script>


<style scoped lang="scss">
.more-genre {
  padding-left: 6rem;
  padding-right: 6rem;
  margin-top: 4rem;
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

.section-header-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.genreContainer {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 25rem;
  justify-content: center;
}

.middleContainer {
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  max-width: 23rem;
}

.genreFruitAndVeg {
  background-image: url("https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  flex-grow: 1;
  margin: 5px;
  max-width: 23rem;
  cursor: pointer;
}

.genreFreshMeat {
  background-image: url("https://images.unsplash.com/photo-1560166444-441876015a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1149&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  flex-grow: 1;
  margin: 5px;
  max-width: 23rem;
  cursor: pointer;
}

.genreBakery {
  background-image: url("https://everythreeweekly.com/wp-content/uploads/2015/01/Bread-657x393.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  flex-grow: 1;
  margin: 5px;
  max-width: 23rem;
  cursor: pointer;
}

.genreWineAndBeers {
  background-image: url("https://images.unsplash.com/photo-1557798748-e7493bd1fa65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  flex-grow: 1;
  margin: 5px;
  max-width: 23rem;
  cursor: pointer;
}

.genreTag {
  background-color: rgba(47, 58, 68, 0.6);
  color: white;
  font-size: 1.3rem;
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
}

@media screen and (max-width: 600px) {
  .genreContainer {
    flex-direction: column;
    height: 27rem;
  }

  .genreFruitAndVeg {
    background-image: url("https://images.unsplash.com/photo-1538826051293-02b4da7acc5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1059&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    flex-grow: 1;
    margin: 5px;
    max-width: 23rem;
    cursor: pointer;
  }

  .more-genre {
    padding-left: 3rem;
    padding-right: 3rem;
    margin-top: 2rem;
  }
}
</style>