<template>
  <section class="app-header">
    <template>
      <b-navbar>
        <template slot="brand">
          <b-navbar-item>
            <img class="logoImg" src="../../public/img/icons/myGrocery.png" />
            <b-input placeholder="Search for products" type="search"></b-input>
            <a class="searchButton">Search</a>
          </b-navbar-item>
        </template>
        <template slot="end">
          <b-navbar-item>Home</b-navbar-item>
          <b-navbar-item>Buy</b-navbar-item>
          <b-navbar-item tag="div">
            <div class="buttons">
              <a class="button is-light">Sign up</a>
              <a class="button is-light">Log in</a>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
    </template>
  </section>
</template>

<script>
export default {
  name: "appHeader",
  data() {
    return {};
  },

  created() {},
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped lang="scss">
.navbar-item img {
  max-height: 6rem;
}

a.navbar-item:hover {
  color: #ec6f6b;
  background-color: white;
  cursor: pointer;
}

.button.is-primary {
  background-color: #7a8d35;
}

a.navbar-item,
.navbar-link {
  cursor: auto;
}

.searchButton {
  background-color: #ec6f6b;
  -moz-border-radius: 15px;
  -webkit-border-radius: 15px;
  border-radius: 4px;
  border: 1px solid #f1504a;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  font-size: 17px;
  padding: 5px 9px;
  text-decoration: none;
  text-shadow: 0px 1px 0px#f1504a;
}
.searchButton:hover {
  background-color: #f1504a;
}
.searchButton:active {
  position: relative;
  top: 0.5px;
}

.button.is-primary:active,
.button.is-primary.is-active {
  position: relative;
  top: 0.5px;
}

.button.is-primary:hover,
.button.is-primary.is-hovered {
  background-color: #abcc32;
}

.input:focus {
  border-color: blue;
}

.input:active {
  border-color: blue;
}

.logoImg {
  cursor: pointer;
}

a.navbar-item {
    padding: 8px;
}
</style>