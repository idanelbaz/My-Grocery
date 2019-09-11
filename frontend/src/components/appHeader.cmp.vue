<template>
  <section class="app-header">
    <template>
      <b-navbar>
        <template slot="brand">
          <b-navbar-item>
            <img @click="goHome" class="logoImg" src="../../public/img/icons/myGrocery.png" />
            <b-input
              v-model="searchItem"
              class="input"
              placeholder="Search for products"
              type="search"
            ></b-input>
            <a @click="goSearchItem()" class="searchButton">Search</a>
          </b-navbar-item>
        </template>
        <template slot="end">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/items' }">Buy</b-navbar-item>
          <b-navbar-item tag="div">
            <div class="buttons">
              <a @click="isSignupOpen = true" class="button is-light">Sign up</a>
              <a @click="isLoginOpen = true" class="button is-light">Log in</a>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
    </template>
    <b-modal :active.sync="isLoginOpen" has-modal-card>
      <form @submit.prevent="doLogin">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Login</p>
          </header>
          <section class="modal-card-body">
            <b-field label="Username">
              <b-input
                type="text"
                v-model="userLogin.username"
                placeholder="Your username"
                required
              ></b-input>
            </b-field>

            <b-field label="Password">
              <b-input
                type="password"
                v-model="userLogin.password"
                password-reveal
                placeholder="Your password"
                required
              ></b-input>
            </b-field>
          </section>
          <footer class="modal-card-foot">
            <button class="button" type="button" @click="isLoginOpen= false">Close</button>
            <button class="button is-primary">Login</button>
          </footer>
        </div>
      </form>
    </b-modal>
    <b-modal :active.sync="isSignupOpen" has-modal-card>
      <form @submit.prevent="doSignup">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Signup</p>
          </header>
          <section class="modal-card-body">
            <b-field label="Username">
              <b-input
                type="text"
                v-model="userSignup.username"
                placeholder="Your username"
                required
              ></b-input>
            </b-field>
            <b-field label="Password">
              <b-input
                type="password"
                v-model="userSignup.password"
                password-reveal
                placeholder="Your password"
                required
              ></b-input>
            </b-field>
             <b-field label="Email">
              <b-input
                type="email"
                v-model="userSignup.email"
                placeholder="Your Email"
                required
              ></b-input>
            </b-field>
             <b-field label="City of residence">
              <b-input
                type="text"
                v-model="userSignup.city"
                placeholder="Your City of residence"
              ></b-input>
            </b-field>
            <b-field label="Address">
              <b-input
                type="text"
                v-model="userSignup.address"
                placeholder="Your Address"
              ></b-input>
            </b-field>
          </section>
          <footer class="modal-card-foot">
            <button class="button" type="button" @click="isSignupOpen= false">Close</button>
            <button class="button is-primary">Signup</button>
          </footer>
        </div>
      </form>
    </b-modal>
  </section>
</template>

<script>
export default {
  name: "appHeader",
  data() {
    return {
      searchItem: "",
      userLogin: { password: "", username: "" },
      userSignup: {
        password: "",
        username: "",
        email: "",
        city: "",
        address: ""
      },
      isLoginOpen: false,
      isSignupOpen: false
    };
  },

  created() {},
  computed: {},
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goSearchItem() {
      this.$store
        .dispatch({ type: "loadShopItemsByFilter", searchBy: this.searchItem })
        .then(() => {
          if (this.$route.params.filterBy) return;
          else this.$router.push(`/Items/search/filter`);
        });
    },
    doLogin() {
      console.log(this.userLogin);
      this.isLoginOpen = false;
    },
    doSignup() {
      console.log(this.userSignup)
      this.isSignupOpen = false;
    }
  },
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
  padding: 4px 9px;
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

.input {
  padding: 0;
}

.hidden {
  display: none;
}

@media screen and (max-width: 500px) {
  .searchButton {
    position: absolute;
    top: 65px;
    left: 124px;
    width: 197px;
    text-align: center;
  }

  .input {
    top: -13px;
    left: -6px;
    padding: 0;
  }
}
</style>