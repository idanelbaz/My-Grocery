<template>
  <section class="app-header">
    <template>
      <b-navbar>
        <template slot="brand">
          <b-navbar-item href="/">
            <img src="../../public/img/icons/myGrocery.png" />
          </b-navbar-item>
        </template>
        <template slot="end">
          <b-navbar-item href="#">Home</b-navbar-item>
          <b-navbar-item href="#">Buy</b-navbar-item>
          <b-navbar-item tag="div">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
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

.button.is-primary { 
      background-color: #7a8d35;
}
</style>